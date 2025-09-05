declare module 'react' {_const React: unknown;
  export default React;
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(_initialValue: T): { current: T};
  export function useRef<T>(_initialValue: T | null): {_current: T | null};
  export function useRef<T = undefined>(_initialValue?: T): {_current: T | undefined};
  export const useEffect: unknown;
  export type Dispatch<A> = (_value: A) => void;
  export type SetStateAction<S> = S | (_(prevState: S) => S);
  export function useState<S>(_initialState: S | (() => S)
  ): [S, Dispatch<SetStateAction<S>>];
  export function createContext<T>(_defaultValue: T): unknown;
  export function useContext<T>(_context: unknown): T;
  export const useMemo: unknown;
  export const useCallback: unknown;
  export function useId(): string;
  // Generic definition to allow usage like forwardRef<HTMLDivElement, Props>()
  export function forwardRef<T, P = {}>(_render: (props: P, _ref: Ref<T>) => ReactElement | null
  ): unknown;
  export const Fragment: unknown;
  export const StrictMode: unknown;
  export const cloneElement: unknown;
  export type ReactNode = any;
  export type ReactElement = any;
  export type ComponentType<P = {}> = (_props: P) => any;
  export type FC<P = {}> = (_props: P) => any;
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
  export type ElementRef<T = any> = any;
  export type CSSProperties = Record<string, string | number | undefined>;
}

declare module 'react-dom' {_export * from 'react-dom/index';}

declare module 'react/jsx-runtime' {_export const jsx: unknown;
  export const jsxs: unknown;
  export const Fragment: unknown;}