<<<<<<< HEAD
interface AccessibilityConfig {
  enabled: boolean;
  highContrast: boolean;
  fontSize: number;
  screenReader: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;

  constructor() {
    this.config = {
      enabled: true,
      highContrast: false,
      fontSize: 16,
      screenReader: false
    };
  }

  init(): void {
    if (this.config.enabled) {
      // Initialize accessibility features silently
      this.applyAccessibilitySettings();
    }
  }

  private applyAccessibilitySettings(): void {
    // Apply accessibility settings without console logging
    document.documentElement.setAttribute('data-accessibility-enabled', 'true');
  }

  setHighContrast(enabled: boolean): void {
    this.config.highContrast = enabled;
  }

  setFontSize(size: number): void {
    this.config.fontSize = size;
  }

  setScreenReader(enabled: boolean): void {
    this.config.screenReader = enabled;
  }
}
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

export class AccessibilityEnhancer {private focusableElements: HTMLElement[] = [],}
  private skipLinks: HTMLElement[] = [],
  private landmarks: HTMLElement[] = [],
  private handleEscapeKey(event: KeyboardEvent): void {,}
    // Close any open modals or dropdowns;
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
focusableElements[nextIndex]?.focus();
    event.preventDefault();
  }
  /**
   * Handle escape key
   */
  private handleEscapeKey(event: KeyboardEvent): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      closeButton?.click();
    });
    // Close any open menus
    const menus = document.querySelectorAll('[role="menu"][aria-expanded="true"]');
    menus.forEach(menu => {
      const trigger = document.querySelector(`[aria-controls="${menu.id}"]`) as HTMLElement;
      trigger?.click();
    });
  }
  /**
   * Handle arrow key navigation
   */
  private handleArrowNavigation(event: KeyboardEvent): void {
    const currentElement = document.activeElement as HTMLElement;
    if (!currentElement) return;
    // Handle radio button groups
    if (currentElement instanceof HTMLInputElement && currentElement.type === 'radio') {
      this.handleRadioGroupNavigation(event, currentElement);
    }
    // Handle menu navigation
    if (currentElement.getAttribute('role') === 'menuitem') {
      this.handleMenuNavigation(event, currentElement);
    }
  }
  /**
   * Handle radio group navigation
   */
  private handleRadioGroupNavigation(event: KeyboardEvent, currentElement: HTMLInputElement): void {
    const name = currentElement.name;
    if (!name) return;
    const radioButtons = Array.from(document.querySelectorAll(`input[type="radio"][name="${name}"]`)) as HTMLInputElement[];
    const currentIndex = radioButtons.indexOf(currentElement);
    let nextIndex: number;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : radioButtons.length - 1;
    } else {
      nextIndex = currentIndex < radioButtons.length - 1 ? currentIndex + 1 : 0;
    }
    radioButtons[nextIndex]?.focus();
    radioButtons[nextIndex]?.click();
    event.preventDefault();
  }
  /**
   * Handle menu navigation
   */
  private handleMenuNavigation(event: KeyboardEvent, currentElement: HTMLElement): void {
    const menu = currentElement.closest('[role="menu"]');
    if (!menu) return;
    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
    const currentIndex = menuItems.indexOf(currentElement);
    let nextIndex: number;
    if (event.key === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
    } else if (event.key === 'ArrowDown') {
      nextIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
    } else {
      return;
    }
    menuItems[nextIndex]?.focus();
    event.preventDefault();
  }
  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;
    // Add skip links
    this.addSkipLinks();
    // Enhance form labels
    this.enhanceFormLabels();
    // Add ARIA landmarks
    this.addAriaLandmarks();
    // Setup live regions for dynamic content
    this.setupLiveRegions();
  }
  /**
   * Add skip links
   */
  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }
  /**
   * Enhance form labels
   */
  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const element = input as HTMLElement;
      // Add aria-label if no label exists
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const placeholder = element.getAttribute('placeholder');
        if (placeholder) {
          element.setAttribute('aria-label', placeholder);
        }
      }
      // Add required attribute announcement
      if (element.hasAttribute('required')) {
        element.setAttribute('aria-required', 'true');
      }
      // Add error states
      if (element.classList.contains('error') || element.getAttribute('aria-invalid') === 'true') {
        element.setAttribute('aria-invalid', 'true');
        this.announceToScreenReader('Error in form field');
      }
    });
  }
  /**
   * Add ARIA landmarks
   */
  private addAriaLandmarks(): void {
    // Main content
    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main) {
      main.setAttribute('id', 'main-content');
    }
    // Navigation
    const nav = document.querySelector('nav') || document.querySelector('[role="navigation"]');
    if (nav) {
      nav.setAttribute('id', 'navigation');
    }
    // Footer
    const footer = document.querySelector('footer') || document.querySelector('[role="contentinfo"]');
    if (footer) {
      footer.setAttribute('id', 'footer');
    }
  }
  /**
   * Setup live regions
   */
  private setupLiveRegions(): void {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    // Create assertive live region for urgent announcements
    const assertiveRegion = document.createElement('div');
    assertiveRegion.setAttribute('aria-live', 'assertive');
    assertiveRegion.setAttribute('aria-atomic', 'true');
    assertiveRegion.className = 'sr-only';
    assertiveRegion.id = 'assertive-live-region';
    document.body.appendChild(assertiveRegion);
  }
  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;
    // Track focus changes
    document.addEventListener('focusin', (event) => {
      this.handleFocusIn(event);
    });
    document.addEventListener('focusout', (event) => {
      this.handleFocusOut(event);
    });
  }
  /**
   * Handle focus in
   */
  private handleFocusIn(event: FocusEvent): void {
    const element = event.target as HTMLElement;
    // Add focus indicator
    element.classList.add('focus-visible');
    // Announce focus changes for important elements
    if (element.getAttribute('role') === 'button' || element.tagName === 'BUTTON') {
      this.announceToScreenReader(`Focused on button: ${element.textContent?.trim() || element.getAttribute('aria-label') || 'button'}`);
    }
  }
  /**
   * Handle focus out
   */
  private handleFocusOut(event: FocusEvent): void {
    const element = event.target as HTMLElement;
    element.classList.remove('focus-visible');
  }
  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrast) return;
    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }
    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
  }
  /**
   * Setup reduced motion
   */
  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');
    }
    // Listen for changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    });
  }
  /**
   * Setup ARIA labels
   */
  private setupAriaLabels(): void {
    // Add ARIA labels to interactive elements without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      const element = button as HTMLElement;
      if (!element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Button');
      }
    });
    // Add ARIA labels to links without text
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach((link) => {
      const element = link as HTMLElement;
      if (!element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Link');
      }
    });
  }
  /**
   * Setup color contrast checking
   */
  private setupColorContrast(): void {
    // This would typically use a color contrast library
    // For now, we'll just count potential issues
    this.metrics.colorContrastIssues = 0;
  }
  /**
   * Setup image alt text checking
   */
  private setupImageAltText(): void {
    const images = document.querySelectorAll('img');
    this.metrics.imagesWithoutAlt = 0;
    images.forEach((img) => {
      if (!img.alt) {
        this.metrics.imagesWithoutAlt++;
      }
    });
  }
  /**
   * Setup heading structure checking
   */
  private setupHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    this.metrics.headingsWithoutContent = 0;
    headings.forEach((heading) => {
      if (!heading.textContent?.trim()) {
        this.metrics.headingsWithoutContent++;
      }
    });
  }
  /**
   * Setup form accessibility
   */
  private setupFormAccessibility(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      // Add form labels
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        const element = input as HTMLElement;
        const id = element.id || `input-${Math.random().toString(36).substr(2, 9)}`;
        element.id = id;
        if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
          const label = form.querySelector(`label[for="${id}"]`);
          if (label) {
            element.setAttribute('aria-labelledby', id);
          }
        }
      });
    });
  }
  /**
   * Setup navigation accessibility
   */
  private setupNavigationAccessibility(): void {
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav) => {
      // Add navigation role if not present
      if (!nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }
      // Add aria-label if not present
      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', 'Main navigation');
      }
    });
  }
  /**
   * Setup content announcements
   */
  private setupContentAnnouncements(): void {
    if (!this.config.announceChanges) return;
    // Observe DOM changes for dynamic content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              // Announce new content
              if (element.getAttribute('aria-live') === 'polite') {
                this.announceToScreenReader(element.textContent || '');
              }
            }
          });
        }
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    this.observers.push(observer);
  }
  /**
   * Setup metrics collection
   */
  private setupMetricsCollection(): void {
    // Collect metrics periodically
    setInterval(() => {
      this.scanAccessibility();
    }, 5000);
  }
  /**
   * Scan accessibility issues
   */
  private scanAccessibility(): void {
    this.metrics.focusableElements = this.getFocusableElements().length;
    this.metrics.imagesWithoutAlt = document.querySelectorAll('img:not([alt])').length;
    this.metrics.linksWithoutText = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby]):empty').length;
    this.metrics.headingsWithoutContent = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length - 
      Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).filter(h => h.textContent?.trim()).length;
    this.calculateScores();
  }
  /**
   * Calculate accessibility scores
   */
  private calculateScores(): void {
    // Keyboard navigation score
    this.metrics.keyboardNavigationScore = this.calculateKeyboardScore();
    // Screen reader score
    this.metrics.screenReaderScore = this.calculateScreenReaderScore();
    // Overall score
    this.metrics.overallScore = Math.round(
      (this.metrics.keyboardNavigationScore + this.metrics.screenReaderScore) / 2
    );
  }
  /**
   * Calculate keyboard navigation score
   */
  private calculateKeyboardScore(): number {
    const focusableElements = this.getFocusableElements();
    const totalElements = document.querySelectorAll('*').length;
    if (totalElements === 0) return 0;
    const focusableRatio = focusableElements.length / totalElements;
    return Math.min(100, Math.round(focusableRatio * 100));
  }
  /**
   * Calculate screen reader score
   */
  private calculateScreenReaderScore(): number {
    let score = 100;
    // Deduct for missing alt text
    score -= this.metrics.imagesWithoutAlt * 5;
    // Deduct for missing ARIA labels
    score -= this.metrics.linksWithoutText * 3;
    // Deduct for empty headings
    score -= this.metrics.headingsWithoutContent * 2;
    return Math.max(0, score);
  }
  /**
   * Get focusable elements
   */
  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];
    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }
  /**
   * Announce to screen reader
   */
  private announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = document.getElementById(
      priority === 'assertive' ? 'assertive-live-region' : 'live-region'
    );
    if (liveRegion) {
      liveRegion.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }
  /**
   * Get accessibility metrics
   */
  getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }
  /**
   * Get accessibility report
   */
  getReport(): string {
    const metrics = this.getMetrics();
    return `
Accessibility Report:
- Color Contrast Score: ${metrics.colorContrastScore}/100
- Keyboard Navigation Score: ${metrics.keyboardNavigationScore}/100
- Screen Reader Score: ${metrics.screenReaderScore}/100
- ARIA Implementation Score: ${metrics.ariaImplementationScore}/100
- Overall Score: ${metrics.overallScore}/100

Recommendations:
- Focus on improving color contrast for better accessibility
- Ensure all interactive elements are keyboard accessible
- Implement proper ARIA labels and roles
- Test with screen readers regularly
`;
  private handleArrowKeys(event: KeyboardEvent): void {,}
    const activeElement = document.activeElement as HTMLElement;
    
    // Handle arrow keys for radio groups, menus, etc.
    if (activeElement.getAttribute('role') === 'menuitem' || 
        activeElement.getAttribute('type') === 'radio') {
      this.handleMenuNavigation(event);}}
  private handleMenuNavigation(event: KeyboardEvent): void {,}
    const activeElement = document.activeElement as HTMLElement;
        nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
        break;}menuItems[nextIndex]?.focus();
    event.preventDefault();
  private setupSkipLinks(): void {// Create skip to main content link;}
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';,
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    this.skipLinks.push(skipLink);}/**
   * Setup landmarks;
   */
  private setupLandmarks(): void {// Ensure main content has proper landmark;}
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      mainContent.setAttribute('role', 'main');
      mainContent.id = 'main-content';}// Setup navigation landmarks;
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav, index) => {if (!nav.getAttribute('aria-label') && !nav.getAttribute('aria-labelledby')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1)}`);
      }
    })
    
    // Setup banner landmark;
    const header = document.querySelector('header');
    if (header) {header.setAttribute('role', 'banner');}// Setup contentinfo landmark;
    const footer = document.querySelector('footer');
    if (footer) {footer.setAttribute('role', 'contentinfo');}}
  private setupAriaLabels(): void {// Add ARIA labels to buttons without text;}
    const iconButtons = document.querySelectorAll('button: not([aria-label]):not([aria-labelledby])');,
    iconButtons.forEach(button => {)
      const icon = button.querySelector('svg');
      if (icon) {
        const iconName = icon.getAttribute('data-icon') || 'button';
        button.setAttribute('aria-label', iconName);}})
    
    // Add ARIA labels to form inputs;
    const inputs = document.querySelectorAll('input: not([aria-label]):not([aria-labelledby])');,
    inputs.forEach(input => {)
      const label = document.querySelector(`label[for="${input.id)}"]`);
      if (label) {input.setAttribute('aria-labelledby', label.id || `label-${input.id)}`);
        if (!label.id) {label.id = `label-${input.id}`;
  private setupColorContrast(): void {// Add high contrast mode support;}
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');,
    
    const handleContrastChange = (e: MediaQueryListEvent) => {,
      if (e.matches) {
        document.body.classList.add('high-contrast');}else {document.body.classList.remove('high-contrast');}}}
  private setupScreenReaderSupport(): void {// Add live region for announcements;}
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
    
    // Announce page changes;
    this.announcePageChange();}/**
   * Announce page changes to screen readers;
   */
  private announcePageChange(): void {const title = document.title;}
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = `Page loaded: ${title,}`;
  public announce(message: string): void {,}
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;}}
  public updateFocusableElements(): void {this.updateFocusableElements();}}/**
   * Get current focusable elements;
  public focusFirst(): void {this.focusableElements[0]?.focus();}}/**
   * Focus last focusable element;
   */
  public focusLast(): void {this.focusableElements[this.focusableElements.length - 1]?.focus();}}/**
   * Cleanup and destroy;
   */
  public destroy(): void {this.isInitialized = false;}
    this.landmarks = []}}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

export const accessibilityEnhancer = new AccessibilityEnhancer();
<<<<<<< HEAD
<<<<<<< HEAD
export default accessibilityEnhancer;
=======
export default accessibilityEnhancer;
>>>>>>> origin/clean-main-20251013-145848
=======

// Export utility functions;
export const announceToScreenReader = (message: string) => {,
  accessibilityEnhancer.announce(message);}export const updateFocusableElements = () => {accessibilityEnhancer.updateFocusableElements();}export const focusFirstElement = () => {accessibilityEnhancer.focusFirst();}export const focusLastElement = () => {accessibilityEnhancer.focusLast();}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AccessibilityEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional AccessibilityEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="accessibilityEnhancer, AI solutions, IT services, Zion Tech Group, accessibilityenhancer" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AccessibilityEnhancer
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced accessibilityenhancer solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AccessibilityEnhancer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our accessibilityenhancer solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our accessibilityenhancer solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
