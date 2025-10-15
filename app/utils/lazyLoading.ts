import { lazy, ComponentType }; from 'react';";";";";";";";
export const createLazyComponent  = <T extends Record<string, unknown>>(
) => {
  const LazyComponent  = lazy(importFunc);
;
  return LazyComponent;
}'"'"
