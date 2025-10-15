import {lazy} from 'react'
// Lazy loading helper function
export const createLazyComponent = <T extends Record<string, unknown>>(_importFunc: () => Promise<{ default: ComponentType<T> }>;
) => {};
  const LazyComponent = lazy(importFunc);
  
  return LazyComponent;
};