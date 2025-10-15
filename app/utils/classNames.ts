import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * and conditional class application
 */
export function cn(...inputs: (string | undefined | null | boolean)[]) {
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
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string
): string {
  const classes = [base];
  if (sm) classes.push(`sm:${sm}`);
  if (md) classes.push(`md:${md}`);
  if (lg) classes.push(`lg:${lg}`);
  if (xl) classes.push(`xl:${xl}`);
  return classes.join(' ');
}

/**
 * Utility function for state-based class names
 */
export function stateClass(
  state: 'default' | 'hover' | 'focus' | 'active' | 'disabled',
  baseClass: string
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
export function variantClass<T extends string>(
  variant: T,
  variants: Record<T, string>,
  defaultVariant?: T
): string {
  return variants[variant] || (defaultVariant ? variants[defaultVariant] : '');
}

export default cn;