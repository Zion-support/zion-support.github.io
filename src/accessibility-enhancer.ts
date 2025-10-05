class AccessibilityEnhancer {
  private static instance: AccessibilityEnhancer;
<<<<<<< HEAD
<<<<<<< HEAD
  private isInitialized = false;
=======
  private isInitialized: boolean = false;

  private constructor() {}
>>>>>>> 0c4a2002f1455a31be6ebb4d4edd54c74c65ff9d
=======
  private isInitialized: boolean = false;

  private constructor() {}
>>>>>>> cursor/fix-errors-and-merge-to-main-ca9d

  static getInstance(): AccessibilityEnhancer {
    if (!AccessibilityEnhancer.instance) {
      AccessibilityEnhancer.instance = new AccessibilityEnhancer();
    }
    return AccessibilityEnhancer.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.isInitialized = true;
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  private setupScreenReaderSupport(): void {
    // Add ARIA labels and roles
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label')) {
        button.setAttribute('aria-label', button.textContent || 'Button');
      }
    });
  }

  private setupHighContrastMode(): void {
    // Check for high contrast mode preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }
  }
}

export default AccessibilityEnhancer;