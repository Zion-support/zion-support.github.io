'use client';
/**;
 * Data Transformation Utilities;
 * Provides utilities for transforming and formatting data;
 */;
/**;
 * Deep clone an object;
 */;
export function deepClone<T>(ob);
  j: T): T {/* TODO: Fix JSX expression */,}}}
  if (obj instanceof Date) {/* TODO: Fix JSX expression */,}}
  if (obj instanceof Array) {/* TODO: Fix JSX expression */,}}
  if (obj instanceof Object) {/* TODO: Fix JSX expression */,}const clonedObj = {}as T;
    for (const key in obj) {/* TODO: Fix JSX expression */,}}
    }
    return clonedObj;
  }
  return obj;
}
/**;
 * Deep merge two objects;
 */;
  m: T) => string | number),
export function groupBy<T>(arra,
  y: T[],)
  ke,)
  y: keyof T | ((ite),
      m: T) => string | number),
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
): Record<string, T[]> {/* TODO: Fix JSX expression */},
    {} as Record<string, T[]></string>
  );
}
/**;
 * Get unique items from an array;
 */;
export function unique<T>(arra);
  y: T[], key?: keyof T): T[] {/* TODO: Fix JSX expression */,}}
  const seen = new Set();
