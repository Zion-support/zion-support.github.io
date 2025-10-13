<<<<<<< HEAD
import React from 'react';

/**;
 * Accessibility (A11Y) Utilities;
 * Provides helpers for improving web accessibility;*/
 */;
/**;
 * Generate unique ID for aria-describedby and aria-labelledby;*/
 */;
export function generateId(prefix = 'a11y'): string {}}return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};
/**;
 * Announce message to screen readers;*/
 */;
export function announceToScreenReader(;);
  message: string,
  priority: 'polite' | 'assertive' = 'polite','
): void {const announcement = document.createElement('div'),};
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');'
  announcement.className = 'sr-only';
  announcement.textContent = message;
document.body.appendChild(announcement);
// Remove announcement after it's been read;'
  setTimeout(() => {
    document.body.removeChild(announcement)}}, 3000);
};
/**;
 * Trap focus within a container (useful for modals);*/
 */;
export function trapFocus(element: HTMLElement): () => void {,};
    const focusableElements = element.querySelectorAll(,);
    'button, [href], input, select, textarea, [tabindex]:not([ tabindex="-1"  ])';
  );
  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
const handleKeyDown = (;
  return ($3;);
  )}e.preventDefault();};
        };
      } else {if (document.activeElement === lastFocusable) {};
          firstFocusable?.focus();
          e.preventDefault()}};
      };
    };
  };
element.addEventListener('keydown', handleKeyDown);
  firstFocusable?.focus();
const Component = () => {
  
  return () => {element.removeEventListener('keydown', handleKeyDown)}};
};
export default Component;
/**;
 * Check if element is keyboard accessible;*/
 */;
export function isKeyboardAccessible(element: HTMLElement): boolean {,};
    const tabIndex = element.getAttribute('tabindex'),
  return tabIndex !== null && tabIndex !== '-1'}};
/**;
 * Add keyboard navigation support to custom interactive elements;*/
 */;
export function makeKeyboardAccessible(;);
  element: HTMLElement,
    tabindex?: number;}} = {}): () => void {}}const {role = 'button', tabindex = 0}}= options;
element.setAttribute('role', role);
  element.setAttribute('tabindex', tabindex.toString());
const handleKeyDown = (;
    if (e.key === 'Enter' || e.key === ' ') {e.preventDefault();) => {'
  const Component = () => {
  
    return ($3;);
  )}onClick(e);};
    };
  };
element.addEventListener('click', onClick);
  element.addEventListener('keydown', handleKeyDown);
const Component = () => {
  
  return () => {element.removeEventListener('click', onClick);
    element.removeEventListener('keydown', handleKeyDown)}};
};
export default Component;
/**;
 * Check color contrast ratio (WCAG 2.1);*/
 */;
export function getContrastRatio(color1: string, color2: string): number {,};
    const getLuminance = (color: string): number => {,
    const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0]
    const [r, g, b] = rgb.map(c => {);
/**;
 * Check if contrast ratio meets WCAG standards;*/
 */;
export function meetsContrastRequirements(;);
  color1: string,
  color2: string,
  level: 'AA' | 'AAA' = 'AA','
  fontSize: 'normal' | 'large' = 'normal','
): boolean {const ratio = getContrastRatio(color1, color2);};
  return fontSize === 'large' ? ratio >= 3 : ratio >= 4.5;}};
/**;
 * Skip to content link helper;*/
 */;`
export function createSkipLink(targetId: string, text = 'Skip to main content'): HTMLAnchorElement {const skipLink = document.createElement('a')}}skipLink.href = `#${targetId}`;'
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
skipLink.addEventListener('focus', () => {skipLink.style.top = '0'}})'
skipLink.addEventListener('blur', () => {skipLink.style.top = '-40px'}})'
return skipLink;
};
/**;
 * Detect if user prefers reduced motion;*/
 */;
export function prefersReducedMotion(): boolean {return window.matchMedia('(prefers-reduced-motion: reduce)').matches;,}}};
/**;
 * Detect if user prefers dark mode;*/
 */;
export function prefersDarkMode(): boolean {return window.matchMedia('(prefers-color-scheme: dark)').matches;,}}};
/**;
 * Get ARIA label for form validation error;*/
 */;
export function getAriaInvalid(hasError: boolean): Record<string, string> {return {}}...(hasError && {'aria-describedby': generateId('error')})';
  };
};
/**;
 * Create accessible tooltip;*/
 */;
export function createAccessibleTooltip(;);
  trigger: HTMLElement,
  content: string,
  placement: 'top' | 'bottom' | 'left' | 'right' = 'top';,'
): () => void {const tooltip = document.createElement('div')};
  tooltip.textContent = content;
  const Component = () => {
  
    return ($3;);
  )}case 'top':;};`
        tooltip.style.left = `${triggerRect.left + triggerRect.width / 2 - tooltip.offsetWidth / 2}px`;`
        tooltip.style.top = `${triggerRect.top - tooltip.offsetHeight - 5}px`;
        break;
      case 'bottom':;`
        tooltip.style.left = `${triggerRect.left + triggerRect.width / 2 - tooltip.offsetWidth / 2}px`;`
        tooltip.style.top = `${triggerRect.bottom + 5}px`;
        break;
      case 'left':;`
        tooltip.style.left = `${triggerRect.left - tooltip.offsetWidth - 5}px`;`
        tooltip.style.top = `${triggerRect.top + triggerRect.height / 2 - tooltip.offsetHeight / 2}px`;
        break;
      case 'right':;`
        tooltip.style.left = `${triggerRect.right + 5}px`;`
        tooltip.style.top = `${triggerRect.top + triggerRect.height / 2 - tooltip.offsetHeight / 2}px`;
        break;
    };
  };
const hideTooltip = (;) => {return ($3;);
  )}tooltip.style.display = 'none';};
  };
trigger.addEventListener('mouseenter', showTooltip);
  trigger.addEventListener('mouseleave', hideTooltip);
  trigger.addEventListener('focus', showTooltip);
  trigger.addEventListener('blur', hideTooltip);
const Component = () => {
  
  return () => {trigger.removeEventListener('mouseenter', showTooltip);
    trigger.removeEventListener('mouseleave', hideTooltip);
    trigger.removeEventListener('focus', showTooltip);
    trigger.removeEventListener('blur', hideTooltip);
    document.body.removeChild(tooltip)}};
};
export default Component;
/**;
 * Manage focus restoration (useful for modals);*/
 */;
export class FocusManager {private previousActiveElement: HTMLElement | null = null,};
saveFocus(): void {this.previousActiveElement = document.activeElement as HTMLElement;}}};
restoreFocus(): void {if (this.previousActiveElement) {};
      this.previousActiveElement.focus()}};
  };
moveFocusInside(container: HTMLElement): void {,};"
    const focusableElements = container.querySelectorAll(,);""
      'button, [href], input, select, textarea, [tabindex]:not([ tabindex="-1"  ])';
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    firstFocusable?.focus()}};"
};""`
=======
'use client';
import React from 'react';

export default function UtilsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Utils</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
