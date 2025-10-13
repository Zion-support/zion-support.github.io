
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
document.body.appendChild(announcement);
setTimeout(() => {
    document.body.removeChild(announcement)
  }
  }, 1000);
}
export const focusElement = (element: HTMLElement | null): void => {
    if (element) {
    element.focus()
  }
  }
}
export const trapFocus = (container: HTMLElement): (() => void) => {
    const focusableElements = container.querySelectorAll(,
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  );
const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
const handleTabKey = (;
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();) => {
  return (
    $3
  )
  }
          e.preventDefault();}
        }
      } else {
    if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault()
  }
        }
      }
    }
  }
container.addEventListener('keydown', handleTabKey);
return () => {
    container.removeEventListener('keydown', handleTabKey)
  }
  }
}
export const validateAriaAttributes = (element: HTMLElement): string[] => {
    const errors: string[] = []
// Check for required ARIA attributes,
  if (element.getAttribute('role') === 'button' && !element.getAttribute('aria-label') && !element.textContent?.trim()) {
    errors.push('Button with role="button" must have aria-label or accessible text')
  }
  }
if (element.getAttribute('aria-expanded') !== null && !element.getAttribute('aria-controls')) {
    errors.push('Element with aria-expanded must have aria-controls')
  }
  }
const ariaLabelledBy = element.getAttribute('aria-labelledby');
  if (ariaLabelledBy && !document.getElementById(ariaLabelledBy)) {
    errors.push('Element with aria-labelledby references non-existent element')
  }
  }
return errors;
}
export const enhanceKeyboardNavigation = (element: HTMLElement): void => {
    element.setAttribute('tabindex', '0');
element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      element.click()
  }
    }
  })
}
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {
    const skipLink = document.createElement('a')
  }
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
return skipLink,
}
export const checkColorContrast = (foreground: string, background: string): boolean => {
    // Simple contrast ratio calculation (simplified)
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g)
    if (!rgb) return 0,
const [r, g, b] = rgb.map(Number).map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }
    })
return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
return contrast >= 4.5; // WCAG AA standard;
}
export const addFocusIndicators = (): void => {
    const style = document.createElement('style');
  style.textContent = `;
    *:focus {
      outline: 2px solid #3b82f6,
      outline-offset: 2px,
  }
    }
.sr-only {
    position: absolute,
      width: 1px,
      height: 1px,
      padding: 0,
      margin: -1px,
      overflow: hidden,
      clip: rect(0, 0, 0, 0);
      white-space: nowrap,
      border: 0,
  }
    }
.focus\\:not-sr-only: focus {
    position: static,
      width: auto,
      height: auto,
      padding: 0.5rem 1rem,
      margin: 0,
      overflow: visible,
      clip: auto,
      white-space: normal,
  }
    }
  `;
document.head.appendChild(style);
}
export const initializeAccessibility = (): void => {
    addFocusIndicators();
// Add skip link to main content;
  const mainContent = document.querySelector('main');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
    const skipLink = createSkipLink('main-content');
    document.body.insertBefore(skipLink, document.body.firstChild)
  }
  }
// Enhance all interactive elements;
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
  interactiveElements.forEach((element) => {
    enhanceKeyboardNavigation(element as HTMLElement)
  }
  })
}
