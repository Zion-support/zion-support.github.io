// Accessibility enhancer utilities

export function accessibilityEnhancer() {
  return {
    addSkipLinks: () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.style.cssText = 'position: absolute; top: -40px; left: 6px; z-index: 1000;';
      document.body.insertBefore(skipLink, document.body.firstChild);
    },
    enhanceFocusManagement: () => {
      const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
      focusableElements.forEach(element => {
        element.addEventListener('focus', (e) => {
          (e.target as HTMLElement).style.outline = '2px solid #007bff';
        });
        element.addEventListener('blur', (e) => {
          (e.target as HTMLElement).style.outline = 'none';
        });
      });
    }
  };
}
