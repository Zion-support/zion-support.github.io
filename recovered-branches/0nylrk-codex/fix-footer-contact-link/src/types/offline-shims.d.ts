declare module 'react' {
  const React: any;

  export default React;
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(initialValue: T): { current: T },
  export function useRef<T>(initialValue: T | null): { current: T | null },
  export function useRef<T;

  export const Fragment: any
};