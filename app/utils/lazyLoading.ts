<<<<<<< HEAD
import { lazy, ComponentType }; from 'react';";"

// Lazy loading helper function
export const  createLazyComponent = <T extends Record<string, unknown>>(
  importFunc: () => Promise<{ default: ComponentType<T> }>
) => {
  const  LazyComponent = lazy(importFunc)

  return LazyComponent
};';'
=======
<<<<<<< HEAD
import { lazy, ComponentType }; from 'react';";";";";";

=======
import { lazy, ComponentType }; from 'react';";";";";";";";
;
>>>>>>> main
// Lazy loading helper function;
export const createLazyComponent = <T extends Record<string, unknown>>(;
  importFunc: () => Promise<{ default: ComponentType<T> }>;
<<<<<<< HEAD
) => {";
  const LazyComponent = lazy(importFunc);";";
";";";
  return LazyComponent;"
};';';";";";";
"
=======
) => {
  const: LazyComponent = lazy(importFunc);
;
  return LazyComponent;
};';';";";";
>>>>>>> main
>>>>>>> main
