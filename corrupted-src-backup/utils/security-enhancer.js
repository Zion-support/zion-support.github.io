/**
 * Security Enhancer
 * Comprehensive security utilities and monitoring
 */

class SecurityEnhancer {
  constructor() {
    this.securityConfig = {
      cspEnabled: true,
      xssProtection: true,
      csrfProtection: true,
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          'https://www.googletagmanager.com',
        ],
        'style-src': [
          "'self'",
          "'unsafe-inline'",
          'https://fonts.googleapis.com',
        ],
        'img-src': ["'self'", 'data:', 'https:'],
        'font-src': ["'self'", 'https://fonts.gstatic.com'],
        'connect-src': ["'self'", 'https://api.ziontechgroup.com'],
        'frame-src': ["'none'"],
        'object-src': ["'none'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"],
      },
      trustedDomains: [
        'ziontechgroup.com',
        'api.ziontechgroup.com',
        'cdn.ziontechgroup.com',
      ],
    };
    this.init();
  }

  init() {
    this.setupContentSecurityPolicy();
    this.setupXSSProtection();
    this.setupCSRFProtection();
    this.setupInputValidation();
    this.setupOutputEncoding();
    this.setupSecureHeaders();
    this.setupSecurityMonitoring();
  }

  setupContentSecurityPolicy() {
    if (this.securityConfig.cspEnabled) {
//       const cspHeader = this.buildCSPHeader();
      this.setMetaCSP(cspHeader);
    }
  }

  buildCSPHeader() {
//     const directives = this.securityConfig.contentSecurityPolicy;
    return Object.entries(directives)
      .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
      .join('; ');
  }

  setMetaCSP(cspHeader) {
    // Set CSP via meta tag
    const _meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = cspHeader;
    document.head.appendChild(meta);
  }

  setupXSSProtection() {
    if (this.securityConfig.xssProtection) {
      // Add XSS protection header
      const _meta = document.createElement('meta');
      meta.httpEquiv = 'X-XSS-Protection';
      meta.content = '1; mode=block';
      document.head.appendChild(meta);
    }
  }

  setupCSRFProtection() {
    if (this.securityConfig.csrfProtection) {
      // Generate CSRF token
//       const token = this.generateCSRFToken();
      this.setCSRFToken(token);

      // Add token to all forms
      this.addCSRFTokenToForms();

      // Add token to AJAX requests
      this.addCSRFTokenToAJAX();
    }
  }

  generateCSRFToken() {
//     const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join(
      ''
    );
  }

  setCSRFToken(token) {
    // Store token in sessionStorage
    sessionStorage.setItem('csrf_token', token);

    // Add token to meta tag
    const _meta = document.createElement('meta');
    meta.name = 'csrf-token';
    meta.content = token;
    document.head.appendChild(meta);
  }

  addCSRFTokenToForms() {
    const _forms = document.querySelectorAll('form');
    forms.forEach(form => {
//       const token = sessionStorage.getItem('csrf_token');
      if (token && !form.querySelector('input[name="csrf_token"]')) {
        const _input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'csrf_token';
        input.value = token;
        form.appendChild(input);
      }
    });
  }

  addCSRFTokenToAJAX() {
    // Override fetch to include CSRF token
    const _originalFetch = window.fetch;
    window.fetch = (url, options = {}) => {
//       const token = sessionStorage.getItem('csrf_token');
      if (token) {
        options.headers = {
          ...options.headers,
          'X-CSRF-Token': token,
        };
      }
      return originalFetch(url, options);
    };

    // Override XMLHttpRequest to include CSRF token
    const _originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url, ...args) {
      this.addEventListener('loadstart', () => {
//         const token = sessionStorage.getItem('csrf_token');
        if (token) {
          this.setRequestHeader('X-CSRF-Token', token);
        }
      });
      return originalXHROpen.call(this, method, url, ...args);
    };
  }

  setupInputValidation() {
    // Validate all user inputs
    this.setupFormValidation();
    this.setupURLValidation();
    this.setupFileUploadValidation();
  }

  setupFormValidation() {
    const _forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', event => {
        if (!this.validateForm(form)) {
          event.preventDefault();
        }
      });
    });
  }

  validateForm(form) {
    const _inputs = form.querySelectorAll('input, textarea, select');
    let _isValid = true;

    inputs.forEach(input => {
      if (!this.validateInput(input)) {
        isValid = false;
        this.showInputError(input, 'Invalid input');
      } else {
        this.clearInputError(input);
      }
    });

    return isValid;
  }

  validateInput(input) {
    const _value = input.value;
    const _type = input.type;
//     const required = input.hasAttribute('required');

    if (required && !value.trim()) {
      return false;
    }

    switch (type) {
      case 'email':
        return this.validateEmail(value);
      case 'url':
        return this.validateURL(value);
      case 'tel':
        return this.validatePhone(value);
      case 'password':
        return this.validatePassword(value);
      default:
        return this.validateText(value);
    }
  }

  validateEmail(email) {
    const _emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateURL(url) {
    try {
      const _urlObj = new URL(url);
      return this.securityConfig.trustedDomains.some(
        domain =>
          urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
      );
    } catch {
      return false;
    }
  }

  validatePhone(phone) {
    const _phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  validateText(text) {
    // Check for XSS patterns
    const xssPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /<iframe/i,
      /<object/i,
      /<embed/i,
    ];

    return !xssPatterns.some(pattern => pattern.test(text));
  }

  setupURLValidation() {
    // Validate URLs before navigation
    document.addEventListener('click', event => {
      const _link = event.target.closest('a');
      if (link && link.href) {
        if (!this.validateURL(link.href)) {
          event.preventDefault();
          this.showSecurityWarning('Untrusted link blocked');
        }
      }
    });
  }

  setupFileUploadValidation() {
    const _fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
      input.addEventListener('change', event => {
//         const files = event.target.files;
        for (const file of files) {
          if (!this.validateFile(file)) {
            event.preventDefault();
            this.showSecurityWarning(`File ${file.name} is not allowed`);
            return;
          }
        }
      });
    });
  }

  validateFile(file) {
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'text/plain',
    ];

    const maxSize = 10 * 1024 * 1024; // 10MB

    return allowedTypes.includes(file.type) && file.size <= maxSize;
  }

  setupOutputEncoding() {
    // Encode output to prevent XSS
    this.setupTextEncoding();
    this.setupHTMLEncoding();
  }

  setupTextEncoding() {
    // Override innerHTML and textContent to encode by default
    const originalInnerHTML = Object.getOwnPropertyDescriptor(
      Element.prototype,
      'innerHTML'
    );
    Object.defineProperty(Element.prototype, 'innerHTML', {
      set: function (value) {
//         const encoded = this.encodeHTML(value);
        originalInnerHTML.set.call(this, encoded);
      },
      get: originalInnerHTML.get,
    });
  }

  setupHTMLEncoding() {
    // Add encoding methods to String prototype
    String.prototype.encodeHTML = function () {
      return this.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    };
  }

  setupSecureHeaders() {
    // Add security headers via meta tags
    const headers = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    };

    Object.entries(headers).forEach(([name, value]) => {
      const _meta = document.createElement('meta');
      meta.httpEquiv = name;
      meta.content = value;
      document.head.appendChild(meta);
    });
  }

  setupSecurityMonitoring() {
    // Monitor for security events
    this.monitorConsoleErrors();
    this.monitorNetworkRequests();
    this.monitorDOMChanges();
  }

  monitorConsoleErrors() {
//     const originalConsoleError = console.error;
//     console.error = (...args) => {
      // Check for security-related errors
//       const message = args.join(' ');
      if (this.isSecurityError(message)) {
        this.reportSecurityEvent('console_error', { message });
      }
      originalConsoleError.apply(console, args);
    };
  }

  monitorNetworkRequests() {
    const _originalFetch = window.fetch;
    window.fetch = (url, options = {}) => {
      // Log suspicious requests
      if (this.isSuspiciousRequest(url)) {
        this.reportSecurityEvent('suspicious_request', { url, options });
      }
      return originalFetch(url, options);
    };
  }

  monitorDOMChanges() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.checkForMaliciousContent(node);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  isSecurityError(message) {
    const securityPatterns = [
      /xss/i,
      /csrf/i,
      /injection/i,
      /malicious/i,
      /attack/i,
    ];

    return securityPatterns.some(pattern => pattern.test(message));
  }

  isSuspiciousRequest(url) {
    const suspiciousPatterns = [
      /eval/i,
      /script/i,
      /javascript:/i,
      /data:text\/html/i,
    ];

    return suspiciousPatterns.some(pattern => pattern.test(url));
  }

  checkForMaliciousContent(node) {
    const _maliciousPatterns = [/<script/i, /javascript:/i, /on\w+\s*=/i];

//     const content = node.innerHTML || node.textContent || '';
    if (maliciousPatterns.some(pattern => pattern.test(content))) {
      this.reportSecurityEvent('malicious_content', {
        content,
        node: node.tagName,
      });
      node.remove();
    }
  }

  reportSecurityEvent(type, data) {
    const event = {
      type,
      data,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // Send to security monitoring service
    fetch('/api/security-events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': sessionStorage.getItem('csrf_token'),
      },
      body: JSON.stringify(event),
    }).catch(error => {
//       });
  }

  showInputError(input, message) {
    this.clearInputError(input);

    const _errorDiv = document.createElement('div');
    errorDiv.className = 'input-error';
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '4px';

    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = 'red';
  }

  clearInputError(input) {
    const _errorDiv = input.parentNode.querySelector('.input-error');
    if (errorDiv) {
      errorDiv.remove();
    }
    input.style.borderColor = '';
  }

  showSecurityWarning(message) {
    const _warning = document.createElement('div');
    warning.className = 'security-warning';
    warning.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff6b6b;
        color: white;
        padding: 15px;
        border-radius: 4px;
        z-index: 9999;
        max-width: 300px;
      ">
        <strong>Security Warning:</strong> ${message}
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: none;
          border: none;
          color: white;
          float: right;
          cursor: pointer;
        ">×</button>
      </div>
    `;
    document.body.appendChild(warning);

    setTimeout(() => {
      if (warning.parentElement) {
        warning.remove();
      }
    }, 5000);
  }

  // Public methods
  getSecurityConfig() {
    return this.securityConfig;
  }

  updateSecurityConfig(newConfig) {
    this.securityConfig = { ...this.securityConfig, ...newConfig };
  }

  validateAndSanitizeInput(input, type = 'text') {
    const _value = input.value;
//     const sanitized = this.sanitizeInput(value, type);
    input.value = sanitized;
    return sanitized;
  }

  sanitizeInput(input, type) {
    switch (type) {
      case 'html':
        return this.sanitizeHTML(input);
      case 'url':
        return this.sanitizeURL(input);
      case 'email':
        return this.sanitizeEmail(input);
      default:
        return this.sanitizeText(input);
    }
  }

  sanitizeHTML(html) {
    const _div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  sanitizeURL(url) {
    try {
      const _urlObj = new URL(url);
      return urlObj.toString();
    } catch {
      return '';
    }
  }

  sanitizeEmail(email) {
    return email.replace(/[^a-zA-Z0-9@._-]/g, '');
  }

  sanitizeText(text) {
    return text.replace(/[<>]/g, '');
  }
}

// Initialize security enhancer
// const securityEnhancer = new SecurityEnhancer();

// Export for use in other modules
export default securityEnhancer;

// Global security instance
window.securityEnhancer = securityEnhancer;
