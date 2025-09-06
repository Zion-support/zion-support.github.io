<<<<<<< HEAD
declare module 'react' {
  const React: any;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  export default React;
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(initialValue: T): { current: T },
  export function useRef<T>(initialValue: T | null): { current: T | null },
  export function useRef<T;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  export default React
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(initialValue: T): { current: T }
  export function useRef<T>(initialValue: T | null): { current: T | null }
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined }
=======
  export default React,
  // Basic overloads for useRef to handle common cases;
  export function useRef<T>(initialValue: T): { current: T };
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  export const useEffect: any;
  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S)
  export function useState<S>(
    initialState: S | (() => S);
  ): [S, Dispatch<SetStateAction<S>>];
  export function createContext<T>(defaultValue: T): any;
  export function useContext<T>(context: any): T;
  export const useMemo: any;
  export const useCallback: any;
  export function useId(): string
=======
}

export default React;
  // Basic overloads for useRef to handle common cases
}

export function useRef<T>(initialValue: T): { current: T };
}

export function useRef<T>(initialValue: T | null): { current: T | null };
}

export function useRef<T = undefined>(
    initialValue?: T
  ): { current: T | undefined };
}

export const useEffect: any;
  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S);
}

export function useState<S>(
    initialState: S | (() => S)
  ): [S, Dispatch<SetStateAction<S>>];
}

export function createContext<T>(defaultValue: T): any;
}

export function useContext<T>(context: any): T;
}

export const useMemo: any;
}

export const useCallback: any;
}

export function useId(): string;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  // Generic definition to allow usage like forwardRef<HTMLDivElement, Props>()
<<<<<<< HEAD
}

export function forwardRef<T, P = {}>(
    render: (props: P, ref: Ref<T>) => ReactElement | null
=======
  export function forwardRef<T, P = {}>(
    render: (props: P, ref: Ref<T>) => ReactElement | null;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  ): any;
}

export const Fragment: any;
}

export const StrictMode: any;
}

export const cloneElement: any;
  export type ReactNode = any;
<<<<<<< HEAD
  export type ReactElement = any
  export type ComponentType<P = {}> = (props: P) => any
=======
  export type ReactElement = any,
  export type ComponentType<P = {}> = (props: P) => any,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  export type FC<P = {}> = (props: P) => any;
  export type ComponentProps<T = any> = any;
  export type ComponentPropsWithoutRef<T = any> = any;
  export type PropsWithoutRef<T = any> = any;
  export type ComponentPropsWithRef<T = any> = any;
  export type HTMLAttributes<T = any> = any;
  export type ButtonHTMLAttributes<T = any> = any;
  export type SVGProps<T = any> = any;
  export type ChangeEvent<T = any> = any;
  export type MouseEvent<T = any> = any;
  export type DragEvent<T = any> = any;
  export type FormEvent<T = any> = any;
  export type KeyboardEvent<T = any> = any;
  export type SyntheticEvent<T = any> = any;
  export type Ref<T = any> = any;
  export type LegacyRef<T = any> = any;
  export type ElementRef<T = any> = any
  export type CSSProperties = Record<string, string | number | undefined>
<<<<<<< HEAD
=======
}

declare module 'react-dom' {
  export * from 'react-dom/index'
}

declare module 'react/jsx-runtime' {;
  export const jsx: any;
  export const jsxs: any,
  export const Fragment: any;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
declare module 'react' {;
  const React: any,;
  export default React,;
  // Basic overloads for useRef to handle common cases;
  export function useRef<T>(initialValue: T): { current: T },;
  export function useRef<T>(initialValue: T | null): { current: T | null },;
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined },;
  export const useEffect: any,;
  export type Dispatch<A> = (value: A) => void,;
  export type SetStateAction<S> = S | ((prevState: S) => S),;
  export function useState<S>(;
    initialState: S | (() => S);
  ): [S, Dispatch<SetStateAction<S>>],;
  export function createContext<T>(defaultValue: T): any,;
  export function useContext<T>(context: any): T,;
  export const useMemo: any,;
  export const useCallback: any,;
  export function useId(): string,;
  // Generic definition to allow usage like forwardRef<HTMLDivElement Props>();
  export function forwardRef<T P = {}>(;
    render: (props: P, ref: Ref<T>) => ReactElement | null;
  ): any,;
  export const Fragment: any,;
  export const StrictMode: any,;
  export const cloneElement: any,;
  export type ReactNode = any,;
  export type ReactElement = any,;
  export type ComponentType<P = {}> = (props: P) => any,;
  export type FC<P = {}> = (props: P) => any,;
  export type ComponentProps<T = any> = any,;
  export type ComponentPropsWithoutRef<T = any> = any,;
  export type PropsWithoutRef<T = any> = any,;
  export type ComponentPropsWithRef<T = any> = any,;
  export type HTMLAttributes<T = any> = any,;
  export type ButtonHTMLAttributes<T = any> = any,;
  export type SVGProps<T = any> = any,;
  export type ChangeEvent<T = any> = any,;
  export type MouseEvent<T = any> = any,;
  export type DragEvent<T = any> = any,;
  export type FormEvent<T = any> = any,;
  export type KeyboardEvent<T = any> = any,;
  export type SyntheticEvent<T = any> = any,;
  export type Ref<T = any> = any,;
  export type LegacyRef<T = any> = any,;
  export type ElementRef<T = any> = any,;
  export type CSSProperties = Record<string string | number | undefined>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
declare module 'react-dom' {
  export * from 'react-dom/index'
}
<<<<<<< HEAD
declare module 'react/jsx-runtime' {
<<<<<<< HEAD
  export const jsx: any;
  export const jsxs: any

  export const Fragment: any
<<<<<<< HEAD
}
=======
}

export const jsx: any;
}

export const jsxs: any;
}

export const Fragment: any;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
=======
}
;
declare module 'react-dom' {;
  export * from 'react-dom/index';
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
;
declare module 'react/jsx-runtime' {;
  export const jsx: any,;
  export const jsxs: any;
  export const Fragment: any;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
