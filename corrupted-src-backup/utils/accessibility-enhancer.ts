/**
 * Accessibility Enhancer Utility
 * Advanced accessibility monitoring and optimization tools
 */

interface AccessibilityConfig {
  enableAutoFix: boolean;
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableColorContrastCheck: boolean;
  enableFocusManagement: boolean;
  enableARIALabels: boolean;
}

interface AccessibilityIssue {
  type: "error" | "warning" | "info";
  element: HTMLElement;
  message: string;
  fix?: string;
  severity: "high" | "medium" | "low";
}

interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  recommendations: string[];
  timestamp: string;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private issues: AccessibilityIssue[] = [];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableAutoFix: true,
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableColorContrastCheck: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      ...config,
    };
  }

  /**
   * Initialize accessibility enhancements
   */
  public init(): void {
    if (typeof window === "undefined") return;

    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.enhanceARIALabels();
    this.checkColorContrast();
    this.optimizeImages();
    this.enhanceForms();
    this.addSkipLinks();
    this.setupScreenReaderSupport();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    // Add keyboard event listeners
    document.addEventListener("keydown", (e) => {
      this.handleKeyboardNavigation(e);
    });

    // Make all interactive elements focusable
    const interactiveElements = document.querySelectorAll(
      "button, a, input, select, textarea, [tabindex]",
    );
    interactiveElements.forEach((element) => {
      if (!element.hasAttribute("tabindex")) {
        element.setAttribute("tabindex", "0");
      }
    });
  }

  /**
   * Handle keyboard navigation
   */
  private handleKeyboardNavigation(e: KeyboardEvent): void {
    const { key, target } = e;
    const _element = target as HTMLElement;

    // Skip to main content
    if (key === "Tab" && e.shiftKey && element.id === "skip-to-main") {
      e.preventDefault();
      const _main =
        document.querySelector("main") || document.querySelector("#main");
      if (main) {
        (main as HTMLElement).focus();
      }
    }

    // Escape key to close modals
    if (key === "Escape") {
      const _modal = document.querySelector('.modal[aria-hidden="false"]');
      if (modal) {
        this.closeModal(modal as HTMLElement);
      }
    }

    // Arrow keys for menu navigation
    if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(key)) {
      this.handleArrowNavigation(e);
    }
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowNavigation(e: KeyboardEvent): void {
    const { key, target } = e;
    const _element = target as HTMLElement;
    const _menu = element.closest('[role="menu"], [role="menubar"]');

    if (!menu) return;

    e.preventDefault();
    const _items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
    //     const currentIndex = items.indexOf(element);
    let _nextIndex = currentIndex;

    switch (key) {
      case "ArrowDown":
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % items.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        break;
    }

    (items[nextIndex] as HTMLElement).focus();
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener("focusin", (e) => {
      this.manageFocus(e.target as HTMLElement);
    });

    // Trap focus in modals
    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        this.trapFocusInModal(e);
      }
    });
  }

  /**
   * Manage focus for better accessibility
   */
  private manageFocus(element: HTMLElement): void {
    // Add focus indicators
    element.classList.add("focus-visible");

    // Remove focus indicator after blur
    element.addEventListener("blur", () => {
      element.classList.remove("focus-visible");
    });

    // Announce focus changes to screen readers
    if (this.config.enableScreenReaderSupport) {
      this.announceToScreenReader(
        `Focused on ${this.getElementDescription(element)}`,
      );
    }
  }

  /**
   * Trap focus in modal
   */
  private trapFocusInModal(e: KeyboardEvent): void {
    const _modal = document.querySelector('.modal[aria-hidden="false"]');
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const _firstElement = focusableElements[0] as HTMLElement;
    const _lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }

  /**
   * Enhance ARIA labels
   */
  private enhanceARIALabels(): void {
    if (!this.config.enableARIALabels) return;

    // Add ARIA labels to buttons without text
    const _buttons = document.querySelectorAll("button:not([aria-label])");
    buttons.forEach((button) => {
      const _icon = button.querySelector("svg, i");
      if (icon && !button.textContent?.trim()) {
        const _label = this.generateARIALabel(button);
        button.setAttribute("aria-label", label);
      }
    });

    // Add ARIA labels to form inputs
    const _inputs = document.querySelectorAll(
      "input:not([aria-label]):not([aria-labelledby])",
    );
    inputs.forEach((input) => {
      const _label = this.findAssociatedLabel(input as HTMLInputElement);
      if (label) {
        input.setAttribute(
          "aria-labelledby",
          label.id || this.generateId(label),
        );
      }
    });

    // Add ARIA descriptions
    this.addARIADescriptions();
  }

  /**
   * Check color contrast
   */
  private checkColorContrast(): void {
    if (!this.config.enableColorContrastCheck) return;

    const _elements = document.querySelectorAll("*");
    elements.forEach((element) => {
      const _styles = window.getComputedStyle(element);
      //       const color = styles.color;
      //       const backgroundColor = styles.backgroundColor;

      if (color && backgroundColor && backgroundColor !== "rgba(0, 0, 0, 0)") {
        const _contrast = this.calculateContrast(color, backgroundColor);
        if (contrast < 4.5) {
          this.addIssue({
            type: "warning",
            element: element as HTMLElement,
            message: `Low color contrast: ${contrast.toFixed(2)}:1`,
            fix: "Increase color contrast to at least 4.5:1",
            severity: "high",
          });
        }
      }
    });
  }

  /**
   * Optimize images for accessibility
   */
  private optimizeImages(): void {
    const _images = document.querySelectorAll("img");

    images.forEach((img) => {
      // Add alt text if missing
      if (!img.alt) {
        img.alt = this.generateAltText(img);
        this.addIssue({
          type: "error",
          element: img,
          message: "Image missing alt text",
          fix: "Add descriptive alt text",
          severity: "high",
        });
      }

      // Add loading="lazy" for non-critical images
      if (!img.hasAttribute("loading")) {
        img.loading = "lazy";
      }

      // Add width and height attributes
      if (!img.hasAttribute("width") || !img.hasAttribute("height")) {
        img.width = img.naturalWidth || 800;
        img.height = img.naturalHeight || 600;
      }
    });
  }

  /**
   * Enhance forms for accessibility
   */
  private enhanceForms(): void {
    const _forms = document.querySelectorAll("form");

    forms.forEach((form) => {
      // Add form labels
      const _inputs = form.querySelectorAll("input, select, textarea");
      inputs.forEach((input) => {
        if (
          !input.hasAttribute("aria-label") &&
          !input.hasAttribute("aria-labelledby")
        ) {
          const _label = this.findAssociatedLabel(input as HTMLInputElement);
          if (!label) {
            const _generatedLabel = this.generateFormLabel(
              input as HTMLInputElement,
            );
            const _labelElement = document.createElement("label");
            labelElement.textContent = generatedLabel;
            labelElement.setAttribute(
              "for",
              input.id || this.generateId(input),
            );
            input.id = input.id || this.generateId(input);
            input.parentNode?.insertBefore(labelElement, input);
          }
        }
      });

      // Add form validation
      form.addEventListener("submit", (e) => {
        this.validateForm(form as HTMLFormElement, e);
      });
    });
  }

  /**
   * Add skip links
   */
  private addSkipLinks(): void {
    const _skipLinks = document.createElement("div");
    skipLinks.className = "skip-links";
    skipLinks.innerHTML = `
      <a href="#main" id="skip-to-main" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;

    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add live region for announcements
    const _liveRegion = document.createElement("div");
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.setAttribute("aria-atomic", "true");
    liveRegion.className = "sr-only";
    liveRegion.id = "live-region";
    document.body.appendChild(liveRegion);

    // Add screen reader only class
    const _style = document.createElement("style");
    style.textContent = `
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Generate accessibility report
   */
  public generateReport(): AccessibilityReport {
    //     const score = this.calculateScore();
    const _recommendations = this.generateRecommendations();

    return {
      score,
      issues: this.issues,
      recommendations,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Calculate accessibility score
   */
  private calculateScore(): number {
    let _score = 100;

    this.issues.forEach((issue) => {
      switch (issue.severity) {
        case "high":
          score -= 20;
          break;
        case "medium":
          score -= 10;
          break;
        case "low":
          score -= 5;
          break;
      }
    });

    return Math.max(0, score);
  }

  /**
   * Generate recommendations
   */
  private generateRecommendations(): string[] {
    const recommendations: string[] = [];

    //     const errorCount = this.issues.filter(i => i.type === 'error').length;
    //     const warningCount = this.issues.filter(i => i.type === 'warning').length;

    if (errorCount > 0) {
      recommendations.push(`Fix ${errorCount} accessibility errors`);
    }
    if (warningCount > 0) {
      recommendations.push(`Address ${warningCount} accessibility warnings`);
    }
    if (this.issues.some((i) => i.message.includes("alt text"))) {
      recommendations.push("Add alt text to all images");
    }
    if (this.issues.some((i) => i.message.includes("contrast"))) {
      recommendations.push("Improve color contrast ratios");
    }

    return recommendations;
  }

  // Helper methods
  private generateARIALabel(element: HTMLElement): string {
    const _icon = element.querySelector("svg, i");
    if (icon) {
      const _iconClass = icon.className;
      return iconClass.replace(/fa-|icon-|svg-/g, "").replace(/-/g, " ");
    }
    return "Button";
  }

  private findAssociatedLabel(
    input: HTMLInputElement,
  ): HTMLLabelElement | null {
    //     const id = input.id;
    if (id) {
      return document.querySelector(`label[for="${id}"]`);
    }
    return input.closest("label");
  }

  private generateId(element: HTMLElement): string {
    return `id-${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateAltText(img: HTMLImageElement): string {
    const _src = img["src"];
    //     const filename = src.split('/').pop()?.split('.')[0] || 'image';
    return filename
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  }

  private generateFormLabel(input: HTMLInputElement): string {
    //     const type = input.type;
    //     const placeholder = input.placeholder;

    if (placeholder) return placeholder;

    switch (type) {
      case "email":
        return "Email address";
      case "password":
        return "Password";
      case "tel":
        return "Phone number";
      case "url":
        return "Website URL";
      default:
        return "Input field";
    }
  }

  private calculateContrast(color1: string, color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you'd parse the colors and calculate luminance
    return 4.5; // Placeholder
  }

  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue);
  }

  private addARIADescriptions(): void {
    // Add ARIA descriptions for complex elements
    const _complexElements = document.querySelectorAll("[data-description]");
    complexElements.forEach((element) => {
      //       const description = element.getAttribute('data-description');
      if (description) {
        //         const descId = `desc-${Math.random().toString(36).substr(2, 9)}`;
        const _descElement = document.createElement("div");
        descElement.id = descId;
        descElement.textContent = description;
        descElement.className = "sr-only";
        element.setAttribute("aria-describedby", descId);
        element.parentNode?.appendChild(descElement);
      }
    });
  }

  private announceToScreenReader(message: string): void {
    const _liveRegion = document.getElementById("live-region");
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  private closeModal(modal: HTMLElement): void {
    modal.setAttribute("aria-hidden", "true");
    const _focusableElement = modal.querySelector(
      "[data-focus-trap-start]",
    ) as HTMLElement;
    if (focusableElement) {
      focusableElement.focus();
    }
  }

  private getElementDescription(element: HTMLElement): string {
    //     const ariaLabel = element.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;

    //     const text = element.textContent?.trim();
    if (text) return text;

    //     const alt = element.getAttribute('alt');
    if (alt) return alt;

    return element.tagName.toLowerCase();
  }
}

// Export singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Auto-initialize in browser environment
if (typeof window !== "undefined") {
  accessibilityEnhancer.init();
}

export default AccessibilityEnhancer;
