/*;
  Minimal React type declarations.;
  ---------------------------------------------------------------------------;
  These definitions are **not** a replacement for `@types / react` – they only;
  exist so that isolated compilation of individual files (e.g., in CI or code;
  review bots) will not fail when full React type declarations are not;
<<<<<<< HEAD
  present.  They purposefully model just enough surface - area used throughout;
  the code - base.  If you have `@types / react` available in `node_modules`,
=======
  present.  They purposefully model just enough surface-area used throughout;
  the code-base.  If you have `@types/react` available in `node_modules`,;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  TypeScript will prefer those and ignore this file, because paths declared in;
  `type_roots` are merged with normal type resolution.;
*/;
<<<<<<< HEAD
declare module "react" {
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
  export interface ReactElement < P = any, T extends string | React.JSXElementConstructor < any> = any> {
    type: T,
    props: P,
    key: React.Key | null;
  }
  // Function Component (very trimmed - down).;
  export interface FC < P = Record < string, unknown>> {
    (props: P): ReactElement | null;
=======
;
declare module "react" {;
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
   ;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {;
    type:T;
    props:P;
    key:React.Key | null;
  }
;
  // Function Component (very trimmed-down).;
   ;
  export interface FC<P = Record<string, unknown>> {;
    (props:P):ReactElement | null;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
;
  // Common hooks we rely on.;
<<<<<<< HEAD
  export function useMemo < T>(factory: () => T, deps: readonly unknown[]): T,
=======
  export function useMemo<T>(factory:() => T, deps:readonly unknown[]):T;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  export type Key = string | number;
;
  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;
<<<<<<< HEAD
  const React: {
    useMemo: typeof useMemo;
  } & Record < string, unknown>;
  export default React;
}
declare namespace React {
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";
  // errors when `@types / react` is not present.;
  export interface IntrinsicElements {
    [elem_name: string]: any;
=======
  const React:{;
    useMemo:typeof useMemo;
  } & Record<string, unknown>;
;
  export default React;
}
;
declare namespace React {;
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";
  // errors when `@types/react` is not present.;
   ;
  export interface IntrinsicElements {;
    [elemName:string]:any;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}/* Minimal React type declarations. --------------------------------------------------------------------------- These definitions are **not** a replacement for `@types/react` – they only exist so that isolated compilation of individual files (e.g., in CI or code review bots) will not fail when full React type declarations are not present. They purposefully model just enough surface-area used throughout the code-base. If you have `@types/react` available in `node modules`;
TypeScript will prefer those and ignore this file, because paths declared in `typeRoots` are merged with normal type resolution. */ export type Key = string | number;
// Default export so `import React from 'react'` keeps working even without // the real react package being installed. export default React 
}declare namespace React {
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements" // errors when `@types/react` is not present. export interface IntrinsicElements {
  
}
