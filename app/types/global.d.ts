declare module 'next' {
  export const Fragment: unique symbol;
  export type ReactNode = unknown;
}
declare module 'react/jsx-runtime' {
  export const Fragment: unique symbol;
  export const jsx: any;
}
