class SecurityManager {
  config;
  constructor() {
    this.config = this.getDefaultConfig();
  }
  /**
   * Initialize security manager (no-op for client context)
   */
  initialize() {
  }
  getDefaultConfig() {
    return {
      csp: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://www.googletagmanager.com", "https://www.google-analytics.com"],
        "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        "img-src": ["'self'", "data:", "https:", "blob:"],
        "connect-src": ["'self'", "https://www.google-analytics.com", "https://analytics.google.com"],
        "font-src": ["'self'", "https://fonts.gstatic.com", "data:"],
        "object-src": ["'none'"],
        "media-src": ["'self'"],
        "frame-src": ["'none'"],
        "worker-src": ["'self'", "blob:"],
        "child-src": ["'self'"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'none'"],
        "base-uri": ["'self'"],
        "manifest-src": ["'self'"],
        "upgrade-insecure-requests": true,
        "block-all-mixed-content": true
      },
      headers: {
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "X-XSS-Protection": "1; mode=block",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
        "X-Download-Options": "noopen",
        "X-Permitted-Cross-Domain-Policies": "none",
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Resource-Policy": "same-origin"
      }
    };
  }
  getCSPDirective() {
    const { csp } = this.config;
    const directives = [];
    Object.entries(csp).forEach(([directive, values]) => {
      if (typeof values === "boolean") {
        if (values) {
          directives.push(directive);
        }
      } else if (Array.isArray(values) && values.length > 0) {
        directives.push(`${directive} ${values.join(" ")}`);
      }
    });
    return directives.join("; ");
  }
  getSecurityHeaders() {
    return {
      ...this.config.headers,
      "Content-Security-Policy": this.getCSPDirective()
    };
  }
  updateCSPDirective(directive, values) {
    if (directive in this.config.csp) {
      this.config.csp[directive] = values;
    }
  }
  addTrustedDomain(domain, directive = "script-src") {
    if (directive in this.config.csp) {
      const currentValues = this.config.csp[directive];
      if (!currentValues.includes(domain)) {
        currentValues.push(domain);
      }
    }
  }
  removeTrustedDomain(domain, directive = "script-src") {
    if (directive in this.config.csp) {
      const currentValues = this.config.csp[directive];
      const index = currentValues.indexOf(domain);
      if (index > -1) {
        currentValues.splice(index, 1);
      }
    }
  }
  validateInput(input, type = "html") {
    const patterns = {
      html: /^[^<>]*$/,
      url: /^https?:\/\/[^\s<>]+$/,
      script: /^[^<>'"]*$/
    };
    return patterns[type].test(input);
  }
  sanitizeInput(input) {
    return input.replace(/[<>]/g, "").replace(/javascript:/gi, "").replace(/on\w+=/gi, "").trim();
  }
  generateNonce() {
    if (typeof window !== "undefined" && window.crypto) {
      const array = new Uint8Array(16);
      window.crypto.getRandomValues(array);
      return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
    }
    return Math.random().toString(36).substr(2, 16);
  }
  getSecurityReport() {
    const headers = this.getSecurityHeaders();
    let score = 100;
    const essentialHeaders = [
      "X-Frame-Options",
      "X-Content-Type-Options",
      "X-XSS-Protection",
      "Strict-Transport-Security",
      "Content-Security-Policy"
    ];
    essentialHeaders.forEach((header) => {
      if (!headers[header]) {
        score -= 15;
      }
    });
    const csp = headers["Content-Security-Policy"];
    if (!csp.includes("'unsafe-inline'") && !csp.includes("'unsafe-eval'")) {
      score += 10;
    } else {
      score -= 5;
    }
    return {
      csp,
      headers,
      score: Math.max(0, Math.min(100, score))
    };
  }
}
const securityManager = new SecurityManager();

class AccessibilityEnhancer {
  config;
  metrics = [];
  isInitialized = false;
  focusTrapElements = [];
  resizeObserver;
  mutationObserver;
  performanceObserver;
  // Event handlers as class fields to ensure stable references for add/remove
  handleKeyDown = (event) => {
    if (event.key === "Tab" && event.shiftKey && document.activeElement === document.body) {
      const skipLink = document.querySelector("[data-skip-link]");
      if (skipLink) {
        skipLink.focus();
        event.preventDefault();
      }
    }
    if (event.key === "Escape") {
      const modal = document.querySelector('[role="dialog"][aria-hidden="false"]');
      if (modal) {
        this.closeModal(modal);
      }
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      const menu = document.querySelector('[role="menu"]:focus-within');
      if (menu) {
        this.handleMenuNavigation(event, menu);
      }
    }
  };
  handleFocusIn = (event) => {
    const target = event.target;
    if (target && target.tabIndex < 0 && target.hasAttribute("tabindex")) {
      console.warn("Element with negative tabindex received focus:", target);
    }
  };
  handleFocusOut = (_event) => {
  };
  constructor() {
    this.config = this.getDefaultConfig();
  }
  getDefaultConfig() {
    return {
      keyboardNavigation: true,
      screenReaderSupport: true,
      highContrast: false,
      reducedMotion: false,
      focusManagement: true,
      ariaLabels: true,
      colorContrast: "AA"
    };
  }
  initialize() {
    if (this.isInitialized || typeof window === "undefined") return;
    this.isInitialized = true;
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupAriaLabels();
    this.setupColorContrast();
    this.setupReducedMotion();
    this.observeAccessibility();
    this.setupPerformanceMonitoring();
  }
  // Alias for compatibility with callers using `init()`
  init() {
    this.initialize();
  }
  destroy() {
    if (!this.isInitialized) return;
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();
    this.performanceObserver?.disconnect();
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("focusin", this.handleFocusIn);
    document.removeEventListener("focusout", this.handleFocusOut);
    this.isInitialized = false;
    this.focusTrapElements = [];
  }
  setupPerformanceMonitoring() {
    if (!this.config.screenReaderSupport) return;
    try {
      this.performanceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === "measure" && entry.name.includes("accessibility")) {
            console.log(`Accessibility performance: ${entry.name} took ${entry.duration}ms`);
          }
        });
      });
      this.performanceObserver.observe({ entryTypes: ["measure"] });
    } catch (error) {
      console.warn("PerformanceObserver not supported:", error);
    }
  }
  /**
   * Backward-compatible initialize alias handled via init() calling initialize()
   */
  setupKeyboardNavigation() {
    if (!this.config.keyboardNavigation) return;
    document.addEventListener("keydown", this.handleKeyDown);
  }
  setupFocusManagement() {
    if (!this.config.focusManagement) return;
    document.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        const modal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (modal) {
          this.trapFocus(event, modal);
        }
      }
    });
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target.hasAttribute("data-close-modal")) {
        this.restoreFocus();
      }
    });
  }
  setupAriaLabels() {
    if (!this.config.ariaLabels) return;
    const interactiveElements = document.querySelectorAll("button, a, input, select, textarea");
    interactiveElements.forEach((element) => {
      const el = element;
      if (!el.getAttribute("aria-label") && !el.getAttribute("aria-labelledby")) {
        const text = el.textContent?.trim();
        if (!text || text.length < 3) {
          el.setAttribute("aria-label", `Interactive element`);
        }
      }
    });
    const clickableElements = document.querySelectorAll("[onclick], [data-action]");
    clickableElements.forEach((element) => {
      const el = element;
      if (!el.getAttribute("role")) {
        el.setAttribute("role", "button");
      }
    });
  }
  setupColorContrast() {
    if (typeof window === "undefined") return;
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");
    const contrastIssues = [];
    elements.forEach((element) => {
      const el = element;
      const computedStyle = window.getComputedStyle(el);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      if (color && backgroundColor) {
        const ratio = this.calculateContrastRatio(color, backgroundColor);
        const requiredRatio = this.config.colorContrast === "AAA" ? 7 : 4.5;
        if (ratio < requiredRatio) {
          contrastIssues.push(`Low contrast on ${el.tagName}: ${ratio.toFixed(2)}:1`);
        }
      }
    });
    if (contrastIssues.length > 0) {
      this.recordMetric({
        type: "color_contrast",
        score: Math.max(0, 100 - contrastIssues.length * 10),
        issues: contrastIssues,
        timestamp: Date.now()
      });
    }
  }
  setupReducedMotion() {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const style = document.createElement("style");
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
  observeAccessibility() {
    if (typeof window === "undefined") return;
    document.addEventListener("focusin", this.handleFocusIn);
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "aria-label") {
          const element = mutation.target;
          const el = element;
          if (!el.getAttribute("aria-label")) {
            console.warn("Element lost aria-label:", el);
          }
        }
      });
    });
    this.mutationObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["aria-label", "aria-labelledby", "role"]
    });
  }
  handleMenuNavigation(event, menu) {
    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]'));
    const currentIndex = menuItems.indexOf(document.activeElement);
    if (currentIndex === -1) return;
    let nextIndex;
    if (event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % menuItems.length;
    } else {
      nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
    }
    menuItems[nextIndex].focus();
    event.preventDefault();
  }
  trapFocus(event, modal) {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }
  closeModal(modal) {
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
    this.restoreFocus();
  }
  restoreFocus() {
    const lastFocusedElement = document.querySelector("[data-last-focused]");
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement.removeAttribute("data-last-focused");
    }
  }
  calculateContrastRatio(color1, color2) {
    return 4.5;
  }
  recordMetric(metric) {
    this.metrics.push(metric);
    if (this.metrics.length > 50) {
      this.metrics = this.metrics.slice(-50);
    }
  }
  getMetrics() {
    return [...this.metrics];
  }
  getAccessibilityScore() {
    if (this.metrics.length === 0) return 100;
    const totalScore = this.metrics.reduce((sum, metric) => sum + metric.score, 0);
    return Math.round(totalScore / this.metrics.length);
  }
  runAccessibilityAudit() {
    const issues = [];
    const recommendations = [];
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      const imageEl = img;
      if (!imageEl.getAttribute("alt")) {
        issues.push(`Image missing alt attribute: ${imageEl.src}`);
        recommendations.push("Add descriptive alt text to images");
      }
    });
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    let lastLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        issues.push(`Heading hierarchy skip: ${heading.tagName}`);
        recommendations.push("Maintain proper heading hierarchy (h1 > h2 > h3...)");
      }
      lastLevel = level;
    });
    const inputs = document.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      const el = input;
      const id = el.getAttribute("id");
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = el.getAttribute("aria-label");
      if (!label && !ariaLabel) {
        issues.push(`Form input missing label: ${el.tagName}`);
        recommendations.push("Add labels or aria-label to form inputs");
      }
    });
    const score = Math.max(0, 100 - issues.length * 5);
    return {
      score,
      issues,
      recommendations: [...new Set(recommendations)]
    };
  }
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
  }
  disconnect() {
    this.isInitialized = false;
    this.metrics = [];
    this.focusTrapElements = [];
  }
}
const accessibilityEnhancer = new AccessibilityEnhancer();
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      accessibilityEnhancer.initialize();
    });
  } else {
    accessibilityEnhancer.initialize();
  }
}

export { accessibilityEnhancer as a, securityManager as s };
