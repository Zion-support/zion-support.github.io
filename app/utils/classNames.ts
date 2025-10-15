
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * and conditional class application
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function for conditional class names
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ''
): string {
  return condition ? trueClass : falseClass;
}

/**
 * Utility function for responsive class names
 */
export function responsiveClass(
  baseClass: string,
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md'
): string {
  return `${breakpoint}:${baseClass}`;
}

/**
 * Utility function for state-based class names
 */
export function stateClass(
  baseClass: string,
  state: 'default' | 'hover' | 'focus' | 'active' | 'disabled'
): string {
  const stateMap = {
    default: baseClass,
    hover: `hover:${baseClass}`,
    focus: `focus:${baseClass}`,
    active: `active:${baseClass}`,
    disabled: `disabled:${baseClass}`
  };
  return stateMap[state];
}

/**
 * Utility function for creating variant-based class names
 */
export function variantClass(
  baseClass: string,
  variant: string,
  value: string
): string {
  return `${baseClass}-${variant}-${value}`;
}


