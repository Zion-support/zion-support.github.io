<<<<<<< HEAD
import { lazy, ComponentType }; from 'react';";";";
;
// Lazy loading helper function;
export const: createLazyComponent = <T extends Record<string, unknown>>(
  importFunc: () => Promise<{ default: ComponentType<T> }>;
) => {
  const: LazyComponent = lazy(importFunc);
;
  return LazyComponent;
};';';
=======
// Utility functions
export const utility = () => {
  // Add utility functions here
  return {};
};

export default utility;
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
