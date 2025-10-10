// Accessibility utilities for improving user experience and compliance

<<<<<<< HEAD
export const generateId = (prefix: string = id): string => {;;

  return `${prefix}-${Math.random().toString(36).substr(2, 9)}}

export const createAriaLabel = (text: string, context?: string): string => {;;

  return context ? `${text}, ${context} : text}

export const announceToScreenReader = (message: string): void => {;;

const announcement = document.createElement(div);;

  announcement.setAttribute('aria-live', polite);

  announcement.setAttribute('aria-atomic', true);

  announcement.className = sr-only;

=======
export const generateId = (prefix: string = 'id'): string => {}
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`}
export const createAriaLabel = (text: string, context?: string): string => {}
  return context ? `${text}, ${context}` : text}
export const announceToScreenReader = (message: string): void => {;}
const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  announcement.textContent = message;

  document.body.appendChild(announcement);
<<<<<<< HEAD

  setTimeout(() => {
    document.body.removeChild(announcement)}, 1000)
export const focusElement = (element: HTMLElement | null): void => {;;

  if (element) {
=======
  
  setTimeout(() => {}
    document.body.removeChild(announcement)}, 1000)
export const focusElement = (element: HTMLElement | null): void => {}
  if (element) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    element.focus();

}
<<<<<<< HEAD

export const trapFocus = (container: HTMLElement): (() => void) => {;;

const focusableElements = container.querySelectorAll(;;

    'button, [href], input, select, textarea, [tabindex]:not([tabindex=-1])
=======
export const trapFocus = (container: HTMLElement): (() => void) => {;}
const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  );

  ;

const firstElement = focusableElements[0] as HTMLElement;;

const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;;

  ;
<<<<<<< HEAD

const handleTabKey = (e: KeyboardEvent) => {;;

    if (e.key === 'Tab) {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
=======
const handleTabKey = (e: KeyboardEvent) => {}
    if (e.key === 'Tab') {}
      if (e.shiftKey) {}
        if (document.activeElement === firstElement) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
          lastElement.focus();

          e.preventDefault();

      } else {
        if (document.activeElement === lastElement) {}
          firstElement.focus();

          e.preventDefault();

      }

    }

  };
<<<<<<< HEAD

  container.addEventListener(keydown, handleTabKey);

  return () => {
    container.removeEventListener('keydown, handleTabKey)}}

export const validateAriaAttributes = (element: HTMLElement): string[] => {;;

=======
  
  container.addEventListener('keydown', handleTabKey);
  
  return () => {}
    container.removeEventListener('keydown', handleTabKey)}}
export const validateAriaAttributes = (element: HTMLElement): string[] => {;}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
const errors: string[] = [];

  // Check for required ARIA attributes
<<<<<<< HEAD
  if (element.getAttribute('role') === 'button' && !element.getAttribute('aria-label) && !element.textContent?.trim()) {
    errors.push('Button with role="button must have aria-label or accessible text);

  if (element.getAttribute('aria-expanded') !== null && !element.getAttribute('aria-controls)) {
    errors.push(Element with aria-expanded must have aria-controls);

const ariaLabelledBy = element.getAttribute(aria-labelledby);;

  if (ariaLabelledBy && !document.getElementById(ariaLabelledBy)) {
    errors.push(Element with aria-labelledby references non-existent element);

  return errors}

export const enhanceKeyboardNavigation = (element: HTMLElement): void => {;;

  element.setAttribute('tabindex', 0);

  element.addEventListener('keydown, (e) => {
    if (e.key === 'Enter' || e.key === ' ) {
=======
  if (element.getAttribute('role') === 'button' && !element.getAttribute('aria-label') && !element.textContent?.trim()) {}
    errors.push('Button with role="button" must have aria-label or accessible text');
  if (element.getAttribute('aria-expanded') !== null && !element.getAttribute('aria-controls')) {}
    errors.push('Element with aria-expanded must have aria-controls');
const ariaLabelledBy = element.getAttribute('aria-labelledby');
  if (ariaLabelledBy && !document.getElementById(ariaLabelledBy)) {}
    errors.push('Element with aria-labelledby references non-existent element');
  return errors}
export const enhanceKeyboardNavigation = (element: HTMLElement): void => {}
  element.setAttribute('tabindex', '0');
  
  element.addEventListener('keydown', (e) => {}
    if (e.key === 'Enter' || e.key === ' ') {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      e.preventDefault();

      element.click();

  })
<<<<<<< HEAD
export const createSkipLink = (targetId: string, text: string = Skip to main content): HTMLElement => {;;

const skipLink = document.createElement(a);;

  skipLink.href = `#${targetId};

=======
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {;}
const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  skipLink.textContent = text;

  skipLink.className = sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50;

  return skipLink}
<<<<<<< HEAD

export const checkColorContrast = (foreground: string, background: string): boolean => {;;

return (

  // Simple contrast ratio calculation (simplified);

const getLuminance = (color: string): number => {;;

const rgb = color.match(/\d+/g);;

=======
export const checkColorContrast = (foreground: string, background: string): boolean => {}
return (

  // Simple contrast ratio calculation (simplified);
const getLuminance = (color: string): number => {;}
const rgb = color.match(/\d+/g);
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    if (!rgb) return 0;

    ;
<<<<<<< HEAD

const [r, g, b] = rgb.map(Number).map(c => {
=======
const [r, g, b] = rgb.map(Number).map(c => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      c = c / 255;

      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)});

    return 0.2126 * r + 0.7152 * g + 0.0722 * b};

  ;

const l1 = getLuminance(foreground);;

const l2 = getLuminance(background);;

  ;

const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);;

  return contrast >
);

}= 4.5; // WCAG AA standard
}
<<<<<<< HEAD

export const addFocusIndicators = (): void => {;;

const style = document.createElement(style);;

  style.textContent = 
    *:focus {
=======
export const addFocusIndicators = (): void => {;}
const style = document.createElement('style');
  style.textContent = `
    *:focus {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      outline: 2px solid #3b82f6;

      outline-offset: 2px}
<<<<<<< HEAD

    .sr-only {
=======
    
    .sr-only {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      position: absolute,
      width: 1px,
      height: 1px,
      padding: 0,
      margin: -1px;

      overflow: hidden,
      clip: rect(0, 0, 0, 0);

      white-space: nowrap,
      border: 0}
<<<<<<< HEAD

    .focus\\:not-sr-only:focus {
=======
    
    .focus\\:not-sr-only:focus {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      position: static,
      width: auto,
      height: auto,
      padding: 0.5rem 1rem;

      margin: 0,
      overflow: visible,
      clip: auto,
      white-space: normal}

  ;

  document.head.appendChild(style)
<<<<<<< HEAD
export const initializeAccessibility = (): void => {;;

=======
export const initializeAccessibility = (): void => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  addFocusIndicators();

  // Add skip link to main content;
<<<<<<< HEAD

const mainContent = document.querySelector(main);;

  if (mainContent && !mainContent.id) {
    mainContent.id = main-content;

const skipLink = createSkipLink(main-content);;

=======
const mainContent = document.querySelector('main');
  if (mainContent && !mainContent.id) {}
    mainContent.id = 'main-content';
const skipLink = createSkipLink('main-content');
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    document.body.insertBefore(skipLink, document.body.firstChild);

  // Enhance all interactive elements;
<<<<<<< HEAD

const interactiveElements = document.querySelectorAll(button, a, input, select, textarea);;

  interactiveElements.forEach((element) => {
    enhanceKeyboardNavigation(element as HTMLElement)});
=======
const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
  interactiveElements.forEach((element) => {}
    enhanceKeyboardNavigation(element as HTMLElement)});
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
