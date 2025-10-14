export const accessibilityChecker = {
  checkAltText: () => {
    const images = document.querySelectorAll('img'
        issue: 'Missing alt text'
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6'
          issue: 'Heading level skipped'