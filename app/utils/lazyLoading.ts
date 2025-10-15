<<<<<<< HEAD
import {lazy} from "react";

// Lazy loading helper function
=======
import { lazy, ComponentType } from 'react';
;
// Lazy loading helper function;
>>>>>>> main
export const createLazyComponent = <T extends Record<string, unknown>>(
  importFunc: () => Promise<{ default: ComponentType<T> }>;
) => {
  const LazyComponent = lazy(importFunc);
;
  return LazyComponent;
};';';