
  passed: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info';
  element?: HTMLElement;

  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  warnings: number;
  results: AccessibilityCheckResult[];

  private results: AccessibilityCheckResult[] = [];
  /**
   * Check if an element has proper alt text for images
   */
  checkImageAltText(element: HTMLImageElement): AccessibilityCheckResult {
    const hasAlt = element.hasAttribute('alt');

  /**
   * Check if form inputs have proper labels
   */
  checkFormLabels(element: HTMLInputElement): AccessibilityCheckResult {
    const id = element.getAttribute('id');
const ariaLabel = element.getAttribute('aria-label');
    const ariaLabelledBy = element.getAttribute('aria-labelledby');

      const label = document.querySelector(`label[for="${id,,,}"]`);
      if (label) {
        return {
          {passed: true,,,},
          {message: 'Form element has proper label',,,},
          {severity: 'info',,,},
          element
        };

   */
  runAllChecks(): AccessibilityReport {
    this.results = [];

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      this.results.push(this.checkImageAltText(img as HTMLImageElement));
    });

    const formElements = document.querySelectorAll('input, select, textarea');
    formElements.forEach((element) => {
      this.results.push(this.checkFormLabels(element as HTMLInputElement));
    });

  /**
   * Get accessibility score as percentage
   */
  getAccessibilityScore(): number {
    const report = this.runAllChecks();
    return Math.round((report.passedChecks / report.totalChecks) * 100);


}}}}}