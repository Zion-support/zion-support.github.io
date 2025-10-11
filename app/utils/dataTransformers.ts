    }
    return clonedObj
  }
  return obj
}
/**
 * Deep merge two objects
 */
export function deepMerge</T><T extends Record<string, unknown>>(targe,
  t: T, sourc)
  e: Partial</T><T>): T {/* TODO: Fix JSX expression */}
/**
 * Deep merge two objects
 */
export function deepMerge<T extends Record<string, unknown>>(targe,
    }
  }
  return output
}
  separator = '.')
): Record<string, unknown> {/* TODO: Fix JSX expression */,}flattened: Record<string, unknown> = {}for (const key in obj) {/* TODO: Fix JSX expression */,}const newKey = prefix  ? `${prefix}${separator}${key}`  : key
      if (value && typeof value === 'object' && !Array.isArray(value)) {/* TODO: Fix JSX expression */,}} else {/* TODO: Fix JSX expression */,}}}
/**
 * Flatten a nested object
 */
export function flattenObject(ob,
  j: Record</T><string, unknown>,
  prefix = '',
  separator = '.')
): Record</string><string, unknown> {/* TODO: Fix JSX expression */}
  flattened: Record</string><string, unknown> = {}
    }
  }
  return output
}
/**
 * Flatten a nested object
 */
export function flattenObject(ob,
  j: Record<string, unknown>,
  prefix = '',
  separator = '.')
): Record<string, unknown> {/* TODO: Fix JSX expression */}
  flattened: Record<string, unknown> = {}
  for (const key in obj) {/* TODO: Fix JSX expression */}
      const newKey = prefix ? `${prefix}${separator}${key}` : key
      if (value && typeof value === 'object' && !Array.isArray(value)) {/* TODO: Fix JSX expression */}
      } else {/* TODO: Fix JSX expression */}
      }
    }
  }
  return flattened
}
  separator = '.')
): Record<string, unknown> {/* TODO: Fix JSX expression */,}result: Record<string, unknown> = {}for (const key in obj) {/* TODO: Fix JSX expression */,}} else {/* TODO: Fix JSX expression */,}}current[k] = current[k] || {}current = current[k] as Record<string>
/**
 * Unflatten a flattened object
 */
export function unflattenObject(ob,
  j: Record</string><string, unknown>,
  separator = '.')
): Record</string><string, unknown> {/* TODO: Fix JSX expression */}
  result: Record</string><string, unknown> = {}
  for (const key in obj) {/* TODO: Fix JSX expression */}
        } else {/* TODO: Fix JSX expression */}
          current[k] = current[k] || {}
          current = current[k] as Record</string><string>
/**
 * Unflatten a flattened object
 */
export function unflattenObject(ob,
  j: Record<string, unknown>,
  separator = '.')
): Record<string, unknown> {/* TODO: Fix JSX expression */}
  result: Record<string, unknown> = {}
  for (const key in obj) {/* TODO: Fix JSX expression */}
        } else {/* TODO: Fix JSX expression */}
          current[k] = current[k] || {}
          current = current[k] as Record<string, unknown>
        }
      }
    }
  }
  return result
}
/**
 * Pick specific keys from an object
 */
export function pick</string><T extends Record<string, unknown>, K extends keyof T>(ob,
  j: T,
  key,
  s: K[]),
  })
  return result
}
/**
 * Omit specific keys from an object
 */
export function omit</T><T extends Record<string, unknown>, K extends keyof T>(ob,
  j: T,
  key,
  s: K[]),
  })
  return result as Omit</T><T>
}
/**
 * Group array items by a key
 */
export function groupBy</T><T>(arra,
  y: T[],
  m: T) => string | number),
  })
}
/**
 * Sort array by multiple keys
 */
export function sortBy</T><T>(arra,
  y: T[],
  key,
  s: Array</T><keyof T | ((ite),
  m: T) => unknown)>,
  order,
  s: Array<'asc' | 'desc'> = [],
  locale = 'en-US')
): string {/* TODO: Fix JSX expression */,}}}
/**
 * Format relative time
 */
export function formatRelativeTime(dat)
  e: Date | string  | number): string {/* TODO: Fix JSX expression */,}}`
  if (minutes < 60) return `${minutes}minute${minutes &gt 1 ? 's' : ''}ago``
  if (hours < 24) return `${hours}hour${hours  & gt 1 ? 's' : ''}ago``
  if (days < 7) return `${days}day${days  & gt 1 ? 's' : ''}ago``
  if (weeks < 4) return `${weeks}week${weeks  & gt 1 ? 's' : ''}ago``
  if (months < 12) return `${months}month${months  & gt 1 ? 's' : ''}ago``
  return `${years}year${years  & gt 1 ? 's' : ''}ago`
}
/**
 * Truncate string;
 */;
  r: string, lengt)
  h: number, suffix = '...'): string {/* TODO: Fix JSX expression */,}}}
/**
 * Capitalize first letter;
 */;
export function capitalize(st);
  r: string): string {/* TODO: Fix JSX expression */,}}}
/**
 * Convert to title case;
 */;
export function titleCase(st);
  r: string): string {/* TODO: Fix JSX expression */,}}}
/**
 * Convert to kebab case;
 */;
export function kebabCase(st);
  r: string): string {/* TODO: Fix JSX expression */,}}}
/**
 * Convert to camel case;
 */;
export function camelCase(st);
  r: string): string {/* TODO: Fix JSX expression */,}}}
/**
 * Convert to snake case;
 */
export function snakeCase(st)
  r: string): string {/* TODO: Fix JSX expression */}
}
export default {/* TODO: Fix JSX expression */}
}
`
