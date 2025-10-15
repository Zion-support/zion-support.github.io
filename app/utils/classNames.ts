
/**;
 * Utility function to merge Tailwind CSS classes with proper conflict resolution;
 * and conditional class application;
 */;
export function cn(...inputs: (string | undefined | null | boolean)[
  ]) {;
  return twMerge(clsx(inputs);,
};
/**;

): string {
  return condition ? trueClass : falseClass;,
};
/**;
 * Utility function for responsive class names;
 */;
export responsiveClass() {
): string {

): string {
  const stateMap = {,
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

