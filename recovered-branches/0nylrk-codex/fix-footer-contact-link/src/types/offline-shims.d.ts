<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
declare module 'react' {
  const React: any;
<<<<<<< HEAD

  export default React
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(initialValue: T): { current: T }
  export function useRef<T>(initialValue: T | null): { current: T | null }
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  export default React,
  // Basic overloads for useRef to handle common cases;
  export function useRef<T>(initialValue: T): { current: T };
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined };
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  export const useEffect: any;
  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S)
  export function useState<S>(
<<<<<<< HEAD
    initialState: S | (() => S)
=======
    initialState: S | (() => S);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  ): [S, Dispatch<SetStateAction<S>>];
  export function createContext<T>(defaultValue: T): any;
  export function useContext<T>(context: any): T;
  export const useMemo: any;
  export const useCallback: any;
  export function useId(): string
  // Generic definition to allow usage like forwardRef<HTMLDivElement, Props>()
  export function forwardRef<T, P = {}>(
<<<<<<< HEAD
    render: (props: P, ref: Ref<T>) => ReactElement | null
  ): any;
=======
========
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
declare module 'react' {
  const React: any;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts
  export default React,
  // Basic overloads for useRef to handle common cases;
  export function useRef < T>(initial_value: T): { current: T }
  export function useRef < T>(initial_value: T | null): { current: T | null }
  export function useRef < T = undefined>(initial_value?: T): { current: T | undefined }
  export const useEffect: any;
  export type Dispatch < A> = (value: A) => void;
  export type SetStateAction < S> = S | ((prev_state: S) => S),
  export function useState < S>(
    initial_state: S | (() => S)): [S, Dispatch < SetStateAction < S>>];
  export function create_context < T>(default_value: T): any;
  export function useContext < T>(context: any): T;
  export const useMemo: any;
  export const useCallback: any;
  export function use_id (): string,
  // Generic definition to allow usage like forward_ref < HTMLDivElement, Props>();
  export function forward_ref < T, P = {}>(
    render: (props: P, ref: Ref < T>) => ReactElement | null): any;
  export const Fragment: any;
  export const StrictMode: any;
  export const clone_element: any;
  export type ReactNode = any;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts

<<<<<<< HEAD
=======

  export type ReactElement = any,
  export type ComponentType<P = {}> = (props: P) => any,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    render: (props: P, ref: Ref<T>) => ReactElement | null;
  ): any;
  export const Fragment: any;
  export const StrictMode: any;
  export const cloneElement: any;
  export type ReactNode = any;
<<<<<<< HEAD
  export type ReactElement = any
  export type ComponentType<P = {}> = (props: P) => any
=======
  export type ReactElement = any,
  export type ComponentType<P = {}> = (props: P) => any,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts
  export type ReactElement = any,
  export type ComponentType < P = {}> = (props: P) => any,
  export type FC < P = {}> = (props: P) => any;
  export type ComponentProps < T = any> = any;
  export type ComponentPropsWithoutRef < T = any> = any;
  export type PropsWithoutRef < T = any> = any;
  export type ComponentPropsWithRef < T = any> = any;
  export type HTMLAttributes < T = any> = any;
  export type ButtonHTMLAttributes < T = any> = any;
  export type SVGProps < T = any> = any;
  export type ChangeEvent < T = any> = any;
  export type MouseEvent < T = any> = any;
  export type DragEvent < T = any> = any;
  export type FormEvent < T = any> = any;
  export type KeyboardEvent < T = any> = any;
  export type SyntheticEvent < T = any> = any;
  export type Ref < T = any> = any;
  export type LegacyRef < T = any> = any;
  export type ElementRef < T = any> = any,
  export type CSSProperties = Record < string, string | number | undefined>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts
}
declare module 'react-dom' {
  export * from 'react-dom / index';
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts
declare module 'react / jsx - runtime' {
  export const jsx: any;
  export const jsxs: any,
  export const Fragment: any;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts

}
=======

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}

declare module 'react-dom' {
  export * from 'react-dom/index'
}

declare module 'react/jsx-runtime' {;
  export const jsx: any;
  export const jsxs: any,
  export const Fragment: any;
};
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
========
}
=======
declare module 'react' {;
  const React:any,;
  export default React,;
  // Basic overloads for useRef to handle common cases;
  export function useRef<T>(initialValue:T):{ current:T },;
  export function useRef<T>(initialValue:T | null):{ current:T | null },;
  export function useRef<T = undefined>(initialValue?:T):{ current:T | undefined },;
  export const useEffect:any,;
  export type Dispatch<A> = (value:A) => void,;
  export type SetStateAction<S> = S | ((prevState:S) => S),;
  export function useState<S>(;
    initialState:S | (() => S);
  ):[S, Dispatch<SetStateAction<S>>],;
  export function createContext<T>(defaultValue:T):any,;
  export function useContext<T>(context:any):T,;
  export const useMemo:any,;
  export const useCallback:any,;
  export function useId():string,;
  // Generic definition to allow usage like forwardRef<HTMLDivElement Props>();
  export function forwardRef<T P = {}>(;
    render:(props:P, ref:Ref<T>) => ReactElement | null;
  ):any,;
  export const Fragment:any,;
  export const StrictMode:any,;
  export const cloneElement:any,;
  export type ReactNode = any,;
  export type ReactElement = any,;
  export type ComponentType<P = {}> = (props:P) => any,;
  export type FC<P = {}> = (props:P) => any,;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
declare module 'react-dom' {
  export * from 'react-dom/index'
}
<<<<<<< HEAD
declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any

  export const Fragment: any
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
}
;
declare module 'react-dom' {;
  export * from 'react-dom/index';
}
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
declare module 'react/jsx-runtime' {;
  export const jsx: any,;
  export const jsxs: any;
  export const Fragment: any;
<<<<<<< HEAD

<<<<<<< HEAD
=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
;
declare module 'react-dom' {;
  export * from 'react-dom/index',;}
;
declare module 'react/jsx-runtime' {;
  export const jsx:any,;
  export const jsxs:any,;
  export const Fragment:any;
}
 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/types/offline-shims.d.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
