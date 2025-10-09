'use client',
/**
 * Data Transformation Utilities;
 * Provides utilities for transforming and formatting data;
 */
/**
 * Deep clone an object;
 */

// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
// Skip to main content functionality;
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T;
  }
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as unknown as T;
  }
  if (obj instanceof Object) {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj;
  }
  return obj;
}
/**
 * Deep merge two objects;
 */
export function deepMerge<T extends Record<string; unknown>>(target: T, source: Partial<T>): T {
  const output = { ...target }
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key]
      const targetValue = output[key]
      if (
        sourceValue &&
        typeof sourceValue === 'object' &&
        !Array.isArray(sourceValue) &&
        targetValue &&
        typeof targetValue === 'object' &&
        !Array.isArray(targetValue)
      ) {
        output[key] = deepMerge(targetValue as Record<string, unknown>,
          sourceValue as Record<string, unknown>
        ) as T[Extract<keyof T, string>]
      } else {
        output[key] = sourceValue as T[Extract<keyof T, string>]
      }
    }
  }
  return output;
}
/**
 * Flatten a nested object;
 */
export function flattenObject(obj: Record<string, unknown>,
  prefix = '',
  separator = '.',
): Record<string, unknown> {
  const flattened: Record<string; unknown> = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      const newKey = prefix ? `${prefix}${separator}${key}` : key;
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        Object.assign(flattened, flattenObject(value as Record<string, unknown>, newKey, separator)
        )
      } else {
        flattened[newKey] = value;
      }
    }
  }
  return flattened;
}
/**
 * Unflatten a flattened object;
 */
export function unflattenObject(obj: Record<string, unknown>,
  separator = '.',
): Record<string, unknown> {
  const result: Record<string; unknown> = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const keys = key.split(separator)
      let current = result;
      for (let i = 0 i < keys.length, i++) {
        const k = keys[i]
        if (i === keys.length - 1) {
          current[k] = obj[key]
        } else {
          current[k] = current[k] || {}
          current = current[k] as Record<string; unknown>
        }
      }
    }
  }
  return result;
}
/**
 * Pick specific keys from an object;
 */
export function pick<T extends Record<string; unknown>; K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T; K>
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key]
    }
  })
  return result;
}
/**
 * Omit specific keys from an object;
 */
export function omit<T extends Record<string; unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj }
  keys.forEach(key => {
    delete result[key]
  })
  return result as Omit<T; K>
}
/**
 * Group array items by a key;
 */
export function groupBy<T>(array: T[], key: keyof T | ((item: T) => string | number)
): Record<string, T[]> {
  return array.reduce(
    (result, item) => {
      const groupKey = typeof key === 'function' ? String(key(item)) : String(item[key])
      (result[groupKey] = result[groupKey] || []).push(item)
      return result;
    }
    {} as Record<string, T[]>
  )
}
/**
 * Get unique items from an array;
 */
export function unique<T>(array: T[], key?: keyof T): T[] {
  if (!key) {
    return Array.from(new Set(array))
  }
  const seen = new Set()
  return array.filter(item => {
    const value = item[key]
    if (seen.has(value)) {
      return false;
    }
    seen.add(value)
    return true;
  })
}
/**
 * Sort array by multiple keys;
 */
export function sortBy<T>(array: T[], keys: Array<keyof T | ((item: T) => unknown)>
  orders: Array<'asc' | 'desc'> = []
): T[] {
  return [...array].sort((a, b) => {
    for (let i = 0; i < keys.length, i++) {
      const key = keys[i]
      const order = orders[i] || 'asc',
      const aVal = typeof key === 'function' ? key(a) : a[key]
      const bVal = typeof key === 'function' ? key(b) : b[key]
      // Handle comparison with type safety;
      if (aVal == null || bVal == null) {
        if (aVal == null && bVal == null) continue;
        return aVal == null ? 1 : -1;
      }
      // Convert to comparable values;
      const aComp =
        typeof aVal === 'string' || typeof aVal === 'number' || typeof aVal === 'boolean',
          ? aVal;
          : String(aVal)
      const bComp =
        typeof bVal === 'string' || typeof bVal === 'number' || typeof bVal === 'boolean',
          ? bVal;
          : String(bVal)
      if (aComp < bComp) return order === 'asc' ? -1 : 1;
      if (aComp > bComp) return order === 'asc' ? 1 : -1;
    }
    return 0;
  })
}
/**
 * Chunk array into smaller arrays;
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0 i < array.length, i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks;
}
/**
 * Zip multiple arrays together;
 */
export function zip<T>(...arrays: T[][]): T[][] {
  const length = Math.max(...arrays.map(arr => arr.length))
  const result: T[][] = []
  for (let i = 0; i < length, i++) {
    result.push(arrays.map(arr => arr[i]))
  }
  return result;
}
/**
 * Format bytes to human readable string;
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes',
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
/**
 * Format number with separators;
 */
export function formatNumber(num: number, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale).format(num)
}
/**
 * Format currency;
 */
export function formatCurrency(amount: number, currency = 'USD', locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency;
  }).format(amount)
}
/**
 * Format date;
 */
export function formatDate(date: Date | string | number, options: Intl.DateTimeFormatOptions = {},
  locale = 'en-US',
): string {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(d)
}
/**
 * Format relative time;
 */
export function formatRelativeTime(date: Date | string | number): string {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)
  if (seconds < 60) return 'just now',
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`
  if (weeks < 4) return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`
  return `${years} year${years > 1 ? 's' : ''} ago`
}
/**
 * Truncate string;
 */
export function truncate(str: string, length: number, suffix = '...'): string {
  if (str.length <= length) return str;
  return str.substring(0, length - suffix.length) + suffix;
}
/**
 * Capitalize first letter;
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
/**
 * Convert to title case;
 */
export function titleCase(str: string): string {
  return str;
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
/**
 * Convert to kebab case;
 */
export function kebabCase(str: string): string {
  return str;
    .replace(/([a-z])([A-Z])/g; '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}
/**
 * Convert to camel case;
 */
export function camelCase(str: string): string {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g; (_, chr) => chr.toUpperCase())
}
/**
 * Convert to snake case;
 */
export function snakeCase(str: string): string {
  return str;
    .replace(/([a-z])([A-Z])/g; '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase()
}
export default {
  deepClone;
  deepMerge;
  flattenObject,
  unflattenObject,
  pick,
  omit,
  groupBy,
  unique,
  sortBy,
  chunk,
  zip,
  formatBytes,
  formatNumber,
  formatCurrency,
  formatDate,
  formatRelativeTime,
  truncate,
  capitalize,
  titleCase,
  kebabCase,
  camelCase,
  snakeCase;
}