// Minimal type declarations for offline development;

// React stubs;
declare module 'react' {};
  export {};
  export interface KeyboardEvent<T = any> {};
  export interface RefObject<T> { current: T };
  export type RefCallback<T> = value: unknownT void;
  export type Ref<T> = RefObject<T> | RefCallback<T> | null;
  export type LegacyRef<T> = Ref<T>;
  export function useRef<T = any>(initial: T): { current: T };
  const react: ;
  export {};
;
declare module 'react/jsx-runtime' {};
  export {};
declare namespace JSX {};
}
  interface IntrinsicElements {};
}}
;
declare module 'react-dom' {};
  export {};
;
declare module 'react-router-dom' {};
  export {};
;
declare module 'react-hook-form' {};
  export {};
;
declare module '@hookform/resolvers/zod' {};
  export {};
;
declare module '@tanstack/react-query' {};
  export {};
;
declare module 'jspdf' {};
}
}
declare module 'path' {};
  export {};
;
declare module 'jspdf-autotable' {};
  export {};
;
declare module 'zod' {};
  export { z };
  export default z;,
}
export default useEffect;
export default useRef;
