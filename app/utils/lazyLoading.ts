<<<<<<< HEAD
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
=======
import { lazy, ComponentType }; from 'react'""";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
;
>>>>>>> main
// Lazy loading helper function;
<<<<<<< HEAD
export const createLazyComponent = <T extends Record<string, unknown>>(;
=======
export const createLazyComponent  = <T extends Record<string, unknown>>(
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
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
  const LazyComponent  = lazy(importFunc);
;
  return LazyComponent;
<<<<<<< HEAD
};';';";";";
>>>>>>> main
>>>>>>> main
=======
}'"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
