export const accessibilityUtils = {
  addSkipLink: () => {
    const skipLink = document.createElement('a'
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus:not-sr-only'