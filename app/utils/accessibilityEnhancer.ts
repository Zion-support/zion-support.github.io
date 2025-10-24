


export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
  enableReducedMotion?: boolean;
  announceChanges?: boolean;
}



export interface AccessibilityMetrics {
  focusableElements: number;
  imagesWithoutAlt: number;
  linksWithoutText: number;
  headingsWithoutContent: number;


  colorContrastScore: number;
  keyboardNavigationScore: number;
  screenReaderScore: number;
  ariaImplementationScore: number;
  overallScore: number;


export class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics;
  private observers: MutationObserver[] = [];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableFocusManagement: true,
      enableHighContrast: true,
      enableReducedMotion: true,
      announceChanges: true,
      ...config
    };

    this.metrics = {
      focusableElements: 0,
      imagesWithoutAlt: 0,
      linksWithoutText: 0,
      headingsWithoutContent: 0,
      colorContrastIssues: 0,
      colorContrastScore: 100,
      keyboardNavigationScore: 100,
      screenReaderScore: 100,
      ariaImplementationScore: 100,
      overallScore: 100

    event.preventDefault();

  /**
   * Setup tab navigation
   */
  private setupTabNavigation(): void {
    // Update focusable elements list
    this.updateFocusableElements();

    // Listen for DOM changes to update focusable elements
    const observer = new MutationObserver(() => {
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true

    this.observers.push(observer);

   * Update focusable elements list
  private updateFocusableElements(): void {
    this.focusableElements = this.getFocusableElements();
    this.currentFocusIndex = 0;

   * Handle activation (Enter or Space)
  private handleActivation(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    if (!activeElement) return;

    // Handle button activation
    if (activeElement.tagName === 'BUTTON' || activeElement.getAttribute('role') === 'button') {
      activeElement.click();

    // Handle link activation
    if (activeElement.tagName === 'A') {
      (activeElement as HTMLAnchorElement).click();

    // Handle custom interactive elements
    if (activeElement.getAttribute('tabindex') !== null) {


   * Handle escape key


    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(modal => {
      const element = modal as HTMLElement;
      if (element.style.display !== 'none') {
        element.style.display = 'none';
        // Return focus to trigger element
        const trigger = document.querySelector(`[aria-controls="${modal.id}"]`) as HTMLElement;
        trigger?.click();

    // Close any open menus
    const menus = document.querySelectorAll('[role="menu"]');
    menus.forEach(menu => {
      const element = menu as HTMLElement;
        const trigger = document.querySelector(`[aria-controls="${menu.id}"]`) as HTMLElement;

   * Handle arrow key navigation
  private handleArrowNavigation(event: KeyboardEvent): void {
    const currentElement = document.activeElement as HTMLElement;
    if (!currentElement) return;

    // Handle radio button groups
    if (currentElement instanceof HTMLInputElement && currentElement.type === 'radio') {
      this.handleRadioGroupNavigation(event, currentElement);

    // Handle menu navigation
    if (currentElement.getAttribute('role') === 'menuitem') {
      this.handleMenuNavigation(event, currentElement);

   * Handle radio group navigation
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

    radioButtons[nextIndex]?.focus();
    radioButtons[nextIndex]?.click();

   * Handle menu navigation
  private handleMenuNavigation(event: KeyboardEvent, currentElement: HTMLElement): void {
    const menu = currentElement.closest('[role="menu"]');
    if (!menu) return;

    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
    const currentIndex = menuItems.indexOf(currentElement);
    

    if (event.key === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
    } else if (event.key === 'ArrowDown') {
      nextIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
      return;

    menuItems[nextIndex]?.focus();

   * Setup screen reader support
  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;


    this.setupLiveRegions();

   * Add skip links
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
      .skip-link {
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        transition: top 0.3s;
      .skip-link:focus {
        top: 6px;

    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);

   * Enhance form labels
  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const element = input as HTMLElement;


      // Add aria-label if no label exists
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const placeholder = element.getAttribute('placeholder');
        if (placeholder) {
          element.setAttribute('aria-label', placeholder);

      // Add required attribute announcement
      if (element.hasAttribute('required')) {
        element.setAttribute('aria-required', 'true');

      // Add error states
      if (element.classList.contains('error') || element.getAttribute('aria-invalid') === 'true') {
        element.setAttribute('aria-invalid', 'true');
        this.announceToScreenReader('Error in form field');

   * Add ARIA landmarks
  private addAriaLandmarks(): void {
    // Main content
    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (main) {
      main.setAttribute('id', 'main-content');

    // Navigation
    const nav = document.querySelector('nav') || document.querySelector('[role="navigation"]');
    if (nav) {
      nav.setAttribute('id', 'navigation');

    // Footer
    const footer = document.querySelector('footer') || document.querySelector('[role="contentinfo"]');
    if (footer) {
      footer.setAttribute('id', 'footer');

   * Setup live regions
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

   * Setup focus management
  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;


    document.addEventListener('focusin', (event) => {
      this.handleFocusIn(event);

    document.addEventListener('focusout', (event) => {
      this.handleFocusOut(event);

   * Handle focus in
  private handleFocusIn(event: FocusEvent): void {
    const element = event.target as HTMLElement;

    // Announce focus changes for important elements
    if (element.getAttribute('role') === 'button' || element.tagName === 'BUTTON') {
      this.announceToScreenReader(`Focused on button: ${element.textContent?.trim() || element.getAttribute('aria-label') || 'button'}`);

   * Handle focus out
  private handleFocusOut(_event: FocusEvent): void {
    element.classList.remove('focus-visible');

   * Setup high contrast mode
  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrast) return;


    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');


    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.remove('high-contrast');

   * Setup reduced motion
  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;


    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');


    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
        document.body.classList.remove('reduced-motion');

   * Setup ARIA labels
  private setupAriaLabels(): void {
    // Add ARIA labels to interactive elements without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      const element = button as HTMLElement;
      if (!element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Button');

    // Add ARIA labels to links without text
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach((link) => {
      const element = link as HTMLElement;
        element.setAttribute('aria-label', 'Link');


   * Setup color contrast checking
  private setupColorContrast(): void {
    // This would typically use a color contrast library
    // For now, we'll just count potential issues
    this.metrics.colorContrastIssues = 0;

   * Setup image alt text checking
  private setupImageAltText(): void {
    const images = document.querySelectorAll('img');
    this.metrics.imagesWithoutAlt = 0;
    images.forEach((img) => {
      if (!img.alt) {
        this.metrics.imagesWithoutAlt++;

   * Setup heading structure checking
  private setupHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    this.metrics.headingsWithoutContent = 0;
    headings.forEach((heading) => {
      if (!heading.textContent?.trim()) {
        this.metrics.headingsWithoutContent++;

   * Setup form accessibility
  private setupFormAccessibility(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input, textarea, select');
        const id = element.id || `input-${Math.random().toString(36).substr(2, 9)}`;
        element.id = id;

          const label = form.querySelector(`label[for="${id}"]`);
          if (label) {
            element.setAttribute('aria-labelledby', id);

   * Setup navigation accessibility
  private setupNavigationAccessibility(): void {
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav) => {
      if (!nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');

      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', 'Main navigation');


   * Setup content announcements
  private setupContentAnnouncements(): void {
    if (!this.config.announceChanges) return;


    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              if (element.getAttribute('aria-live') === 'polite') {
                this.announceToScreenReader(element.textContent || '');



   * Setup metrics collection
  private setupMetricsCollection(): void {
    setInterval(() => {
      this.scanAccessibility();
    }, 5000);

   * Scan accessibility issues
  private scanAccessibility(): void {
    this.metrics.focusableElements = this.getFocusableElements().length;
    this.metrics.imagesWithoutAlt = document.querySelectorAll('img:not([alt])').length;
    this.metrics.linksWithoutText = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby]):empty').length;
    this.metrics.headingsWithoutContent = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length - 
      Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).filter(h => h.textContent?.trim()).length;

    this.calculateScores();

   * Calculate accessibility scores
  private calculateScores(): void {
    this.metrics.keyboardNavigationScore = this.calculateKeyboardScore();

    this.metrics.overallScore = Math.round(
      (this.metrics.keyboardNavigationScore + this.metrics.screenReaderScore) / 2
    );

   * Calculate keyboard navigation score
  private calculateKeyboardScore(): number {
    const focusableElements = this.getFocusableElements();
    const totalElements = document.querySelectorAll('*').length;
    if (totalElements === 0) return 0;

    const focusableRatio = focusableElements.length / totalElements;
    return Math.min(100, Math.round(focusableRatio * 100));

   * Calculate screen reader score
  private calculateScreenReaderScore(): number {
    let score = 100;

    score -= this.metrics.headingsWithoutContent * 2;

    return Math.max(0, score);

   * Get focusable elements
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

   * Announce to screen reader
  private announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = document.getElementById(
      priority === 'assertive' ? 'assertive-live-region' : 'live-region'

    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);

   * Get accessibility metrics
  getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };

   * Get accessibility report
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


  destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];



