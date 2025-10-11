<<<<<<< HEAD
// Accessibility utilities for improving user experience and compliance;
export const generateId = (prefix: string = 'id'): string => {,}return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
export const createAriaLabel = (text: string, context?: string): string => {}return context ? `${text}, ${context}` : text;
}
<<<<<<< HEAD
export const announceToScreenReader = (message: string): void => {,
=======
export const announceToScreenReader = (message: string): void => {;
>>>>>>> origin/main
=======
// Accessibility utilities for improving user experience and compliance
export const generateId = (prefix: string = 'id'): string => {}
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}
export const createAriaLabel = (text: string, context?: string): string => {}
  return context ? `${text}, ${context}` : text
}
export const announceToScreenReader = (message: string): void => {
>>>>>>> origin/main
    const announcement = document.createElement('div'),
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
document.body.appendChild(announcement)
setTimeout(() => {
<<<<<<< HEAD
    document.body.removeChild(announcement)}}, 1000);
=======
    document.body.removeChild(announcement)
  }
  }, 1000)
>>>>>>> origin/main
}
export const focusElement = (element: HTMLElement | null): void => {,
    if (element) {
    element.focus()}}
}
<<<<<<< HEAD
<<<<<<< HEAD
export const trapFocus = (container: HTMLElement): (() => void) => {,
    const focusableElements = container.querySelectorAll(,)
=======
export const trapFocus = (container: HTMLElement): (() => void) => {;
    const focusableElements = container.querySelectorAll(,
>>>>>>> origin/main
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  );
const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
const handleTabKey = (;
=======
export const trapFocus = (container: HTMLElement): (() => void) => {
    const focusableElements = container.querySelectorAll()
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
const handleTabKey = ()
>>>>>>> origin/main
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();) => {
<<<<<<< HEAD
  return($3;)
  )}e.preventDefault();}
        }
      } else {if (document.activeElement === lastElement) {}
          firstElement.focus();
          e.preventDefault()}}
      }
    }
  }
container.addEventListener('keydown', handleTabKey);
return () => {container.removeEventListener('keydown', handleTabKey)}}
=======
  return ()
  )
  }
          e.preventDefault();}
        }
      } else {
    if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
  }
        }
      }
    }
  }
container.addEventListener('keydown', handleTabKey)
return () => {
    container.removeEventListener('keydown', handleTabKey)
  }
  }
>>>>>>> origin/main
}
export const validateAriaAttributes = (element: HTMLElement): string[] => {,
    const errors: string[] = [],
// Check for required ARIA attributes,
  if (element.getAttribute('role') === 'button' && !element.getAttribute('aria-label') && !element.textContent?.trim()) {
<<<<<<< HEAD
    errors.push('Button with role="button" must have aria-label or accessible text')}}
if (element.getAttribute('aria-expanded') !== null && !element.getAttribute('aria-controls')) {errors.push('Element with aria-expanded must have aria-controls')}}
const ariaLabelledBy = element.getAttribute('aria-labelledby');
  if (ariaLabelledBy && !document.getElementById(ariaLabelledBy)) {errors.push('Element with aria-labelledby references non-existent element')}}
return errors;
}
<<<<<<< HEAD
export const enhanceKeyboardNavigation = (element: HTMLElement): void => {,
=======
export const enhanceKeyboardNavigation = (element: HTMLElement): void => {;
>>>>>>> origin/main
    element.setAttribute('tabindex', '0');
element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      element.click()}}
  })
}
<<<<<<< HEAD
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {,
    const skipLink = document.createElement('a')}skipLink.href = `#${targetId}`;
=======
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {;
    const skipLink = document.createElement('a')
  }
  skipLink.href = `#${targetId}`;
>>>>>>> origin/main
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50',
=======
    errors.push('Button with role="button" must have aria-label or accessible text')
  }
  }
if (element.getAttribute('aria-expanded') !== null && !element.getAttribute('aria-controls')) {
    errors.push('Element with aria-expanded must have aria-controls')
  }
  }
const ariaLabelledBy = element.getAttribute('aria-labelledby')
  if (ariaLabelledBy && !document.getElementById(ariaLabelledBy)) {
    errors.push('Element with aria-labelledby references non-existent element')
  }
  }
return errors
}
export const enhanceKeyboardNavigation = (element: HTMLElement): void => {
    element.setAttribute('tabindex', '0')
element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      element.click()
  }
    }
  })
}
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {
    const skipLink = document.createElement('a')
  }
  skipLink.href = `#${targetId}`
  skipLink.textContent = text
  skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
>>>>>>> origin/main
return skipLink,
}
export const checkColorContrast = (foreground: string, background: string): boolean => {,
    // Simple contrast ratio calculation (simplified)
  const getLuminance = (color: string): number => {,
    const rgb = color.match(/\d+/g)
    if (!rgb) return 0,
<<<<<<< HEAD
<<<<<<< HEAD
const [r, g, b] = rgb.map(Number).map(c => {)
=======
const [r, g, b] = rgb.map(Number).map(c => {;
>>>>>>> origin/main
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)}})
return 0.2126 * r + 0.7152 * g + 0.0722 * b;
=======
const [r, g, b] = rgb.map(Number).map()
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }
    })
return 0.2126 * r + 0.7152 * g + 0.0722 * b
>>>>>>> origin/main
  }
const l1 = getLuminance(foreground)
  const l2 = getLuminance(background)
const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
return contrast >= 4.5; // WCAG AA standard
}
<<<<<<< HEAD
<<<<<<< HEAD
export const addFocusIndicators = (): void => {const style = document.createElement('style');
=======
export const addFocusIndicators = (): void => {;
    const style = document.createElement('style');
>>>>>>> origin/main
  style.textContent = `;
    *:focus {outline: 2px solid #3b82f6,}
      outline-offset: 2px,}}
.sr-only {position: absolute,}
=======
export const addFocusIndicators = (): void => {
    const style = document.createElement('style')
  style.textContent = `
    *:focus {
      outline: 2px solid #3b82f6,
      outline-offset: 2px,
  }
    }
.sr-only {
    position: absolute,
>>>>>>> origin/main
      width: 1px,
      height: 1px,
      padding: 0,
      margin: -1px,
      overflow: hidden,
      clip: rect(0, 0, 0, 0)
      white-space: nowrap,
      border: 0,}}
.focus\\:not-sr-only: focus {,}
    position: static,
      width: auto,
      height: auto,
      padding: 0.5rem 1rem,
      margin: 0,
      overflow: visible,
      clip: auto,
<<<<<<< HEAD
      white-space: normal,}}
  `;
document.head.appendChild(style);
}
<<<<<<< HEAD
export const initializeAccessibility = (): void => {addFocusIndicators();
=======
export const initializeAccessibility = (): void => {;
    addFocusIndicators();
>>>>>>> origin/main
// Add skip link to main content;
  const mainContent = document.querySelector('main');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
    const skipLink = createSkipLink('main-content');
    document.body.insertBefore(skipLink, document.body.firstChild)}}
// Enhance all interactive elements;
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
  interactiveElements.forEach((element) => {enhanceKeyboardNavigation(element as HTMLElement)}})
=======
      white-space: normal,
  }
    }
  `
document.head.appendChild(style)
}
export const initializeAccessibility = (): void => {
    addFocusIndicators()
// Add skip link to main content
  const mainContent = document.querySelector('main')
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content'
    const skipLink = createSkipLink('main-content')
    document.body.insertBefore(skipLink, document.body.firstChild)
  }
  }
// Enhance all interactive elements
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea')
  interactiveElements.forEach((element) => {
    enhanceKeyboardNavigation(element as HTMLElement)
  }
  })
>>>>>>> origin/main
}
