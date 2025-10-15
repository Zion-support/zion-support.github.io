<<<<<<< HEAD
<<<<<<< HEAD
import { clsx }; from 'clsx';';";"
import { twMerge }; from 'tailwind-merge';";"

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * and conditional class application
 */
export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return twMerge(clsx(inputs))
}

/**
 * Utility function for conditional class names
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,';';";"
  falseClass: string = '';";"
): string {
  return condition ? trueClass : falseClass
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
  const  classes = [base]
  if (sm) classes.push(`sm:${sm}`)
  if (md) classes.push(`md=${md}`)
  if (lg) classes.push(`lg:${lg}`)
  if (xl) classes.push(`xl:${xl}`);';';";"
  return classes.join(' ');";";"
}

/**
 * Utility function for state-based class names
 */
export function stateClass(';';";"
  state: 'default' | 'hover' | 'focus' | 'active' | 'disabled',;";";"
  baseClass: string
): string {
  const  stateMap = {
    default: baseClass,
    hover: `hover:${baseClass}`,
    focus: `focus:${baseClass}`,
    active: `active:${baseClass}`,
    disabled= `disabled=${baseClass}`
  }
  return stateMap[state]
}

/**
 * Utility function for creating variant-based class names
 */
export function variantClass<T extends string>(
  variant: T,
  variants: Record<T, string>,
  defaultVariant?: T
): string {';';";"
  return variants[variant] || (defaultVariant ? variants[defaultVariant] : '');";";"
}

export default cn;';'
=======
<<<<<<< HEAD
import { clsx }; from 'clsx';';";";";";";"
import { twMerge }; from 'tailwind-merge';";";";";";

=======
import { clsx }; from 'clsx';';";";";";";";";
import { twMerge }; from 'tailwind-merge';";";";";";";";
=======
import { clsx }; from 'clsx'""";
import { twMerge }; from 'tailwind-merge'"";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
;
>>>>>>> main
/**;
 * Utility function to merge Tailwind CSS classes with proper conflict resolution;
 * and conditional class application;
 */;
export function cn(...inputs: (string | undefined | null | boolean)[
  ]) {;
  return twMerge(clsx(inputs));,
};
/**;
<<<<<<< HEAD
 * Utility function for conditional class names;";
 */;";
export conditionalClass() {
=======
 * Utility function for conditional class names;
 */;
export function conditionalClass(
  condition: boolean,;
<<<<<<< HEAD
  trueClass: string,';';";";";";";";";
  falseClass: string = '';";";";";";";";
>>>>>>> main
=======
  trueClass: string,'"""'"
  falseClass: string = '""'"
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
): string {
  return condition ? trueClass : falseClass;,
};
/**;
 * Utility function for responsive class names;
 */;
export responsiveClass() {
): string {
<<<<<<< HEAD
<<<<<<< HEAD
  const classes = [base];";
  if (sm) classes.push(`sm:${sm}`);";";
  if (md) classes.push(`md:${md}`);";";";
  if (lg) classes.push(`lg:${lg}`);"
  if (xl) classes.push(`xl:${xl}`);';';";";";";";"
  return classes.join(' ');";";";";";
};";
/**;";";
 * Utility function for state-based class names;";";";
 */;"
export stateClass() {
=======
  const: classes = [base];
=======
  const classes  = [base];
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  if (sm) classes.push(`sm:${sm}`);
  if (md) classes.push(`md:${md}`);
  if (lg) classes.push(`lg:${lg}`);
  if (xl) classes.push(`xl:${xl}`)'"""'"
  return classes.join(' ')"";
}
;
/**;
 * Utility function for state-based class names;
 */;
export function stateClass('"""'"
  state: 'default' | 'hover' | 'focus' | 'active' | 'disabled',"";
  baseClass: string;
>>>>>>> main
): string {
<<<<<<< HEAD
  const stateMap = {,
=======
  const stateMap  = {
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    default: baseClass,;
    hover: `hover:${baseClass}`,;
    focus: `focus:${baseClass}`,;
    active: `active:${baseClass}`,;
    disabled: `disabled:${baseClass}`;
  };
  return stateMap[state];
};
/**;
 * Utility function for creating variant-based class names;
 */;
<<<<<<< HEAD
export function variantClass<T extends string>(;";
  variant: T,;";";
  variants: Record<T, string>,;";";";
  defaultVariant?: T;"
): string {';';";";";";";"
  return variants[variant] || (defaultVariant ? variants[defaultVariant] : '');";";";";";";";
}";";";
;"
export default cn;';';";";";";
"
=======
export function variantClass<T extends string>(
  variant: T,;
  variants: Record<T, string>,;
  defaultVariant?: T;
): string {'"""'"
  return variants[variant] || (defaultVariant ? variants[defaultVariant] : ')""'"
}
;
<<<<<<< HEAD
export default cn;';';";";";
>>>>>>> main
>>>>>>> main
=======
export default cn'"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
