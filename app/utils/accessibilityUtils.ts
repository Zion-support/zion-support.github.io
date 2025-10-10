// Accessibility utilities for improving user experience and complianceexport const generateId;

export const initializeAccessibility = (): void => {
  addFocusIndicators()
  ;

const mainContent = document.querySelector('main')
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content'
    ;

const skipLink = createSkipLink('main-content')
    document.body.insertBefore(skipLink, document.body.firstChild)}
  }
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea')
  interactiveElements.forEach((element) => {
    enhanceKeyboardNavigation(element as HTMLElement)}
  })}
