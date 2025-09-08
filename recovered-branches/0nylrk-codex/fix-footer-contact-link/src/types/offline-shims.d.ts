declare module 'react' {
<<<<<<< HEAD

  const React: any;


  export default React,

  // Basic overloads for useRef to handle common cases;
  export function useRef<T>(initialValue: T): { current: T };
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined };
=======

  const React: any;

  export default React
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(initialValue: T): { current: T }
  export function useRef<T>(initialValue: T | null): { current: T | null }
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined }

  export default React
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(initialValue: T): { current: T }
  export function useRef<T>(initialValue: T | null): { current: T | null }
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined }

  export default React,
>>>>>>> origin/cursor/delete-old-data-records-6bba

  export const useEffect: any;

  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S)
  export function useState<S>(

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ): [S, Dispatch<SetStateAction<S>>];
  export function createContext<T>(defaultValue: T): any;
  export function useContext<T>(context: any): T;
  export const useMemo: any;
  export const useCallback: any;
  export function useId(): string;
  // Generic definition to allow usage like forwardRef<HTMLDivElement, Props>()
  export function forwardRef<T, P = {}>(

<<<<<<< HEAD

=======
  ): any;

  // Basic overloads for useRef to handle common cases;

  export default React,
  // Basic overloads for useRef to handle common cases;
  export function useRef<T>(initialValue: T): { current: T };

  export function useRef<T>(initialValue: T | null): { current: T | null };

  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined };

  export type Dispatch<A> = (value: A) => void;

  export type SetStateAction<S> = S | ((prevState: S) => S)

  export function useState<S>(
)
  ): [S, Dispatch<SetStateAction<S>>];

  export function createContext<T>(defaultValue: T): any;

  export function useContext<T>(context: any): T;

  // Generic definition to allow usage like forwardRef<HTMLDivElement, Props>()

  export function forwardRef<T, P = {}>(
    render: (props: P, ref: Ref<T>) => ReactElement | null;

pr-12325
  export function useRef < T>(initial_value: T): { current: T }
  export function useRef < T>(initial_value: T | null): { current: T | null }
  export function useRef < T = undefined>(initial_value?: T): { current: T | undefined };
  export const useEffect: any;
  export type Dispatch < A> = (value: A) => void;
  export type SetStateAction < S> = S | ((prev_state: S) => S),

    initial_state: S | (() => S)): [S, Dispatch < SetStateAction < S>>];
  export function create_context < T>(default_value: T): any;
  export function useContext < T>(context: any): T;
  export const useMemo: any;
  export const useCallback: any;
  export function use_id (): string,;
  // Generic definition to allow usage like forward_ref < HTMLDivElement, Props>();
  export function forward_ref < T, P = {}>(;
    render: (props: P, ref: Ref < T>) => ReactElement | null): any;
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }

      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}'
declare module 'react' {}
  const React: any;

  export const Fragment: any;
  export const StrictMode: any;
  export const clone_element: any;
  export type ReactNode = any;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  export type ReactElement = any
  export type ComponentType<P = {}> = (props: P) => any
  export type ReactElement = any,
  export type ComponentType<P = {}> = (props: P) => any,;

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  export type ReactElement = any,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
}
declare module 'react-dom' {
  export * from 'react-dom / index';
}
declare module 'react / jsx - runtime' {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  export const jsx: any;
  export const jsxs: any,;
  export const Fragment: any;

}
<<<<<<< HEAD


=======


}
>>>>>>> origin/cursor/delete-old-data-records-6bba

'
declare module 'react-dom' {'
  export * from 'react-dom/index'
}
';
declare module 'react/jsx-runtime' {;
  export const jsx: any;
  export const jsxs: any,;
  export const Fragment: any;
};
<<<<<<< HEAD



=======
'
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

}

=======


}'
>>>>>>> origin/cursor/delete-old-data-records-6bba
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



}
;
declare module 'react-dom' {;
  export * from 'react-dom/index';
}

=======
}
declare module 'react-dom' {
  export * from 'react-dom/index'
}
declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any

  export const Fragment: any
}'
declare module 'react-dom' {'
  export * from 'react-dom/index'
}'
declare module 'react/jsx-runtime' {};
  export const jsx: any;
  export const jsxs: any;
}
;'
declare module 'react-dom' {;'
  export * from 'react-dom/index';
}
}
;'
declare module 'react-dom' {;'
  export * from 'react-dom/index';
}

;'
declare module 'react/jsx-runtime' {;
  export const jsx: any,;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react/jsx-runtime' {
  export const jsx: any,
  export const jsxs: any,
  export const Fragment: any}
declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any


}
;
declare module 'react-dom' {;
  export * from 'react-dom/index';
}

}
;
declare module 'react-dom' {;
  export * from 'react-dom/index';
}
}
}

>>>>>>> origin/cursor/delete-old-data-records-6bba

;
declare module 'react/jsx-runtime' {;
  export const jsx: any,;
  export const jsxs: any;
  export const Fragment: any;

<<<<<<< HEAD




=======
}
pr-12325
>>>>>>> origin/cursor/delete-old-data-records-6bba
