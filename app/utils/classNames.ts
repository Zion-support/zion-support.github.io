
/**;
 * Utility function to merge Tailwind CSS classes with proper conflict resolution;
 * and conditional class application;
 */;
export function cn(...inputs: (string | undefined | null | boolean)[
  ]) {;
  return twMerge(clsx(inputs);,
};
/**;
  trueClass: string,'"""'"""""
  falseClass: string = '""'""
): string {
  return condition ? trueClass : falseClass;,
};
/**;
 * Utility function for responsive class names;
 */;
export responsiveClass() {
): string {
  if (sm) classes.push(`sm:${sm}`);"
  if (md) classes.push(`md:${md}`)""
  if (lg) classes.push(`lg:${lg}`)"""
  if (xl) classes.push(`xl:${xl}`)'"""'"""""
  return classes.join(' ')"""
}

/**;"
 * Utility function for state-based class names""
 */"""
export function stateClass('"""'"""""
  state: 'default' | 'hover' | 'focus' | 'active' | 'disabled',"""
  baseClass: string;
): string {
    default: baseClass,;
    hover: `hover:${baseClass}`,;
    focus: `focus:${baseClass}`,;
    active: `active:${baseClass}`,;
    disabled: `disabled:${baseClass}`;
  };
  return stateMap[state];
};
/**;"
 * Utility function for creating variant-based class names""
 */"""
export default cn'"'""""
"""
