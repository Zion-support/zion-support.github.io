/**
 * Accessibility (A11Y) Utilities
 * Provides helpers for improving web accessibility
 */

/**
 * Generate unique ID for aria-describedby and aria-labelledby
 */
<<<<<<< HEAD
export function generateId(prefix = 'a11y): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}}
=======
export function generateId(prefix = 'a11y'): string {}
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(

  message: string,
<<<<<<< HEAD
  priority: 'polite' | 'assertive = polite
): void {;

const announcement = document.createElement(div);;

  announcement.setAttribute(aria-live, priority);

  announcement.setAttribute('aria-atomic', true);

  announcement.className = sr-only;

=======
  priority: 'polite' | 'assertive' = 'polite'
): void {;}
const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  announcement.textContent = message;

  document.body.appendChild(announcement);
<<<<<<< HEAD

  // Remove announcement after its been read
  setTimeout(() => {
=======
  
  // Remove announcement after it's been read
  setTimeout(() => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    document.body.removeChild(announcement)}, 3000);

/**
 * Trap focus within a container (useful for modals)
 */
<<<<<<< HEAD
export function trapFocus(element: HTMLElement): () => void {;

const focusableElements = element.querySelectorAll(;;

    'button, [href], input, select, textarea, [tabindex]:not([tabindex=-1])
=======
export function trapFocus(element: HTMLElement): () => void {;}
const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  );

const firstFocusable = focusableElements[0] as HTMLElement;;

const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;;

;
<<<<<<< HEAD

const handleKeyDown = (e: KeyboardEvent) => {;;

    if (e.key === 'Tab) {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
=======
const handleKeyDown = (e: KeyboardEvent) => {}
    if (e.key === 'Tab') {}
      if (e.shiftKey) {}
        if (document.activeElement === firstFocusable) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
          lastFocusable?.focus();

          e.preventDefault();

      } else {
        if (document.activeElement === lastFocusable) {}
          firstFocusable?.focus();

          e.preventDefault();

      }

    }

  };

  element.addEventListener(keydown, handleKeyDown);

  firstFocusable?.focus();

<<<<<<< HEAD
  return () => {
    element.removeEventListener('keydown, handleKeyDown)}}
=======
  return () => {}
    element.removeEventListener('keydown', handleKeyDown)}}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054

/**
 * Check if element is keyboard accessible
 */
<<<<<<< HEAD
export function isKeyboardAccessible(element: HTMLElement): boolean {;

const tabIndex = element.getAttribute(tabindex);;

  return tabIndex !== null && tabIndex !== '-1}
=======
export function isKeyboardAccessible(element: HTMLElement): boolean {;}
const tabIndex = element.getAttribute('tabindex');
  return tabIndex !== null && tabIndex !== '-1'}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054

/**
 * Add keyboard navigation support to custom interactive elements
 */
export function makeKeyboardAccessible(

  element: HTMLElement,
  onClick: (e: Event) => void,
  options: {}
    role?: string;

    tabindex?: number} = {}
<<<<<<< HEAD

): () => void {;

const { role = button, tabindex = 0 } = options;

  element.setAttribute(role, role);

  element.setAttribute(tabindex, tabindex.toString());

  ;

const handleKeyDown = (e: KeyboardEvent) => {;;

    if (e.key === 'Enter' || e.key === ' ) {
=======
): () => void {;}
const { role = 'button', tabindex = 0 } = options;
  
  element.setAttribute('role', role);
  element.setAttribute('tabindex', tabindex.toString());
  ;
const handleKeyDown = (e: KeyboardEvent) => {}
    if (e.key === 'Enter' || e.key === ' ') {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      e.preventDefault();

      onClick(e);

  };

  element.addEventListener(click, onClick);

  element.addEventListener(keydown, handleKeyDown);

<<<<<<< HEAD
  return () => {
    element.removeEventListener(click, onClick);

    element.removeEventListener('keydown, handleKeyDown)}}
=======
  return () => {}
    element.removeEventListener('click', onClick);
    element.removeEventListener('keydown', handleKeyDown)}}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054

/**
 * Check color contrast ratio (WCAG 2.1)
 */
<<<<<<< HEAD
export function getContrastRatio(color1: string, color2: string): number {;

const getLuminance = (color: string): number => {;;

return (;

const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0];;

const [r, g, b] = rgb.map(c => {
=======
export function getContrastRatio(color1: string, color2: string): number {;}
const getLuminance = (color: string): number => {}
return (;
const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0];
const [r, g, b] = rgb.map(c => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      c = c / 255;

      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)});

    return 0.2126 * r + 0.7152 * g + 0.0722 * b};

;

const lum1 = getLuminance(color1);;

const lum2 = getLuminance(color2);;

const brightest = Math.max(lum1, lum2);;

const darkest = Math.min(lum1, lum2);;

  return (brightest + 0.05) / (darkest + 0.05);

/**
 * Check if contrast ratio meets WCAG standards
 */
export function meetsContrastRequirements(

  color1: string,
  color2: string,
<<<<<<< HEAD
  level: 'AA' | 'AAA' = 'AA,
  fontSize: 'normal' | 'large = normal
): boolean {;

const ratio = getContrastRatio(color1, color2);;

  return fontSize === 'large ? ratio >
=======
  level: 'AA' | 'AAA' = 'AA',
  fontSize: 'normal' | 'large' = 'normal'
): boolean {;}
const ratio = getContrastRatio(color1, color2);
  return fontSize === 'large' ? ratio >
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
);

}= 3 : ratio >= 4.5}

/**
 * Skip to content link helper
 */
<<<<<<< HEAD
export function createSkipLink(targetId: string, text = Skip to main content): HTMLAnchorElement {;

const skipLink = document.createElement(a);;

  skipLink.href = `#${targetId};

  skipLink.textContent = text;

  skipLink.className = skip-link;

  skipLink.style.position = absolute;

  skipLink.style.top = -40px;

  skipLink.style.left = 0;

  skipLink.style.background = #000;

  skipLink.style.color = #fff;

  skipLink.style.padding = 8px;

  skipLink.style.textDecoration = none;

  skipLink.style.zIndex = 100;

  skipLink.addEventListener('focus, () => {
    skipLink.style.top = 0});

  skipLink.addEventListener('blur, () => {
    skipLink.style.top = -40px});

=======
export function createSkipLink(targetId: string, text = 'Skip to main content'): HTMLAnchorElement {;}
const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'skip-link';
  skipLink.style.position = 'absolute';
  skipLink.style.top = '-40px';
  skipLink.style.left = '0';
  skipLink.style.background = '#000';
  skipLink.style.color = '#fff';
  skipLink.style.padding = '8px';
  skipLink.style.textDecoration = 'none';
  skipLink.style.zIndex = '100';
  
  skipLink.addEventListener('focus', () => {}
    skipLink.style.top = '0'});
  
  skipLink.addEventListener('blur', () => {}
    skipLink.style.top = '-40px'});
  
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  return skipLink}

/**
 * Detect if user prefers reduced motion
 */
<<<<<<< HEAD
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)).matches}
=======
export function prefersReducedMotion(): boolean {}
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054

/**
 * Detect if user prefers dark mode
 */
<<<<<<< HEAD
export function prefersDarkMode(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)).matches}
=======
export function prefersDarkMode(): boolean {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054

/**
 * Get ARIA label for form validation error
 */
<<<<<<< HEAD
export function getAriaInvalid(hasError: boolean): Record<string, string> {
  return {
    ...(hasError && { 'aria-describedby': generateId('error) })
=======
export function getAriaInvalid(hasError: boolean): Record<string, string> {}
  return {}
    ...(hasError && { 'aria-describedby': generateId('error') })
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  }}

/**
 * Create accessible tooltip
 */
export function createAccessibleTooltip(

  trigger: HTMLElement,
  content: string,
<<<<<<< HEAD
  placement: 'top' | 'bottom' | 'left' | 'right = top
): () => void {;

const tooltip = document.createElement(div);;

=======
  placement: 'top' | 'bottom' | 'left' | 'right' = 'top'
): () => void {;}
const tooltip = document.createElement('div');
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  tooltip.textContent = content;

  tooltip.className = tooltip;

  tooltip.setAttribute('role', tooltip);

  tooltip.style.position = absolute;

  tooltip.style.background = #000;

  tooltip.style.color = #fff;

  tooltip.style.padding = 8px;

  tooltip.style.borderRadius = 4px;

  tooltip.style.fontSize = 14px;

  tooltip.style.zIndex = 1000;

  tooltip.style.display = none;

  document.body.appendChild(tooltip);

  ;
<<<<<<< HEAD

const showTooltip = () => {;;

    tooltip.style.display = block;

const triggerRect = trigger.getBoundingClientRect();;

    switch (placement) {
      case 'top:
        tooltip.style.left = `${triggerRect.left + triggerRect.width / 2 - tooltip.offsetWidth / 2}px;

        tooltip.style.top = `${triggerRect.top - tooltip.offsetHeight - 5}px;

=======
const showTooltip = () => {}
    tooltip.style.display = 'block';
const triggerRect = trigger.getBoundingClientRect();
    
    switch (placement) {}
      case 'top':
        tooltip.style.left = `${triggerRect.left + triggerRect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${triggerRect.top - tooltip.offsetHeight - 5}px`;
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
        break;

      case 'bottom:
        tooltip.style.left = `${triggerRect.left + triggerRect.width / 2 - tooltip.offsetWidth / 2}px;

        tooltip.style.top = `${triggerRect.bottom + 5}px;

        break;

      case 'left:
        tooltip.style.left = `${triggerRect.left - tooltip.offsetWidth - 5}px;

        tooltip.style.top = `${triggerRect.top + triggerRect.height / 2 - tooltip.offsetHeight / 2}px;

        break;

      case 'right:
        tooltip.style.left = `${triggerRect.right + 5}px;

        tooltip.style.top = `${triggerRect.top + triggerRect.height / 2 - tooltip.offsetHeight / 2}px;

        break}

  };

  ;
<<<<<<< HEAD

const hideTooltip = () => {;;

    tooltip.style.display = none};

  trigger.addEventListener(mouseenter, showTooltip);

  trigger.addEventListener(mouseleave, hideTooltip);

  trigger.addEventListener(focus, showTooltip);

  trigger.addEventListener(blur, hideTooltip);

  return () => {
    trigger.removeEventListener(mouseenter, showTooltip);

    trigger.removeEventListener(mouseleave, hideTooltip);

    trigger.removeEventListener(focus, showTooltip);

    trigger.removeEventListener(blur, hideTooltip);

=======
const hideTooltip = () => {}
    tooltip.style.display = 'none'};
  
  trigger.addEventListener('mouseenter', showTooltip);
  trigger.addEventListener('mouseleave', hideTooltip);
  trigger.addEventListener('focus', showTooltip);
  trigger.addEventListener('blur', hideTooltip);
  
  return () => {}
    trigger.removeEventListener('mouseenter', showTooltip);
    trigger.removeEventListener('mouseleave', hideTooltip);
    trigger.removeEventListener('focus', showTooltip);
    trigger.removeEventListener('blur', hideTooltip);
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    document.body.removeChild(tooltip)}}

/**
 * Manage focus restoration (useful for modals)
 */
export class FocusManager {}
  private previousActiveElement: HTMLElement | null = null;

  saveFocus(): void {}
    this.previousActiveElement = document.activeElement as HTMLElement}

  restoreFocus(): void {}
    if (this.previousActiveElement) {}
      this.previousActiveElement.focus();

  }

<<<<<<< HEAD
  moveFocusInside(container: HTMLElement): void {;

const focusableElements = container.querySelectorAll(;;

      'button, [href], input, select, textarea, [tabindex]:not([tabindex=-1])
=======
  moveFocusInside(container: HTMLElement): void {;}
const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    );

const firstFocusable = focusableElements[0] as HTMLElement;;

    firstFocusable?.focus();

}

  }
