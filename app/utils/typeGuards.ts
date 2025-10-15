/**
 * Type guard utilities for better type safety
 */

import React from 'react';

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value);
};

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean';
};

export const isObject = (value: unknown): value is Record<string, unknown> => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};

export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value);
};

export const isFunction = (value: unknown): value is (...args: any[]) => any => {
  return typeof value === 'function';
};

export const isHTMLElement = (value: unknown): value is HTMLElement => {
  return value instanceof HTMLElement;
};

export const isWindow = (value: unknown): value is Window => {
  return value === window;
};

export const isDocument = (value: unknown): value is Document => {
  return value === document;
};

export const hasProperty = <T extends object, K extends PropertyKey>(
  obj: T,
  prop: K
): obj is T & Record<K, unknown> => {
  return prop in obj;
};

export const hasMethod = <T extends object, K extends PropertyKey>(
  obj: T,
  method: K
): obj is T & Record<K, (...args: any[]) => any> => {
  return hasProperty(obj, method) && isFunction(obj[method]);
};

// React-specific type guards
export const isReactElement = (value: unknown): value is React.ReactElement => {
  return React.isValidElement(value);
};

export const isReactNode = (value: unknown): value is React.ReactNode => {
  return (
    value === null ||
    value === undefined ||
    isString(value) ||
    isNumber(value) ||
    isBoolean(value) ||
    isReactElement(value) ||
    isArray(value)
  );
};

// Performance API type guards
export const isPerformanceEntry = (value: unknown): value is PerformanceEntry => {
  return value instanceof PerformanceEntry;
};

export const isPerformanceNavigationTiming = (value: unknown): value is PerformanceNavigationTiming => {
  return value instanceof PerformanceNavigationTiming;
};

export const isPerformanceResourceTiming = (value: unknown): value is PerformanceResourceTiming => {
  return value instanceof PerformanceResourceTiming;
};

// Error type guards
export const isError = (value: unknown): value is Error => {
  return value instanceof Error;
};

export const isErrorWithMessage = (value: unknown): value is Error & { message: string } => {
  return isError(value) && isString(value.message);
};

// URL and navigation type guards
export const isValidUrl = (value: unknown): value is string => {
  if (!isString(value)) return false;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

export const isLocation = (value: unknown): value is Location => {
  return value === location;
};

// Form data type guards
export const isFormData = (value: unknown): value is FormData => {
  return value instanceof FormData;
};

export const isFile = (value: unknown): value is File => {
  return value instanceof File;
};

export const isBlob = (value: unknown): value is Blob => {
  return value instanceof Blob;
};

// Event type guards
export const isEvent = (value: unknown): value is Event => {
  return value instanceof Event;
};

export const isMouseEvent = (value: unknown): value is MouseEvent => {
  return value instanceof MouseEvent;
};

export const isKeyboardEvent = (value: unknown): value is KeyboardEvent => {
  return value instanceof KeyboardEvent;
};

export const isTouchEvent = (value: unknown): value is TouchEvent => {
  return value instanceof TouchEvent;
};

// Utility type for narrowing object properties
export type NarrowObject<T, U> = {
  [K in keyof T]: T[K] extends U ? T[K] : never;
};

// Utility type for extracting array element types
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

// Utility type for making properties optional
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Utility type for making properties required
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;