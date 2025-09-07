declare module 'react' {
<<<<<<< HEAD
  const React: any;

  export default React
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(initialValue: T): { current: T }
  export function useRef<T>(initialValue: T | null): { current: T | null }
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined }

  export default React,

  export const useEffect: any;

  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S)
  export function useState<S>(

  ): [S, Dispatch<SetStateAction<S>>];
  export function createContext<T>(defaultValue: T): any;
  export function useContext<T>(context: any): T;
  export const useMemo: any;
  export const useCallback: any;
  export function useId(): string;
  // Generic definition to allow usage like forwardRef<HTMLDivElement, Props>()
  export function forwardRef<T, P = {}>(

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

  export type ReactElement = any
  export type ComponentType<P = {}> = (props: P) => any
  export type ReactElement = any,
  export type ComponentType<P = {}> = (props: P) => any,;

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

}'
declare module 'react-dom' {';
  export * from 'react-dom / index';
}
'
declare module 'react / jsx - runtime' {}
  export const jsx: any;
  export const jsxs: any,;
  export const Fragment: any;

=======
<<<<<<< HEAD
  const React: any,
  export default React,
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(initialValue: T): { current: T},
  export function useRef<T>(initialValue: T | null): { current: T | null },
  export function useRef<T = $2;
  export const useEffect: any,
  export type Dispatch<A> = (value: A) => void,
  export type SetStateAction<S> = S | ((prevState: S) => S),
  export function useState<S>(
    initialState: S | (() => S)
  ): [S, Dispatch<SetStateAction<S>>],
  export function createContext<T>(defaultValue: T): any,
  export function useContext<T>(context: any): T,
  export const useMemo: any,
  export const useCallback: any,
  export function useId(): string,
  // Generic definition to allow usage like forwardRef<HTMLDivElement, Props>()
  export function forwardRef<T, P = {}>(
    render: (props: P, ref: Ref<T>) => ReactElement | null
  ): any,
  export const Fragment: any,
  export const StrictMode: any,
  export const cloneElement: any,
  export type ReactNode = $2;
  export type ReactElement = $2;
  export type ComponentType<P = $2;
  export type FC<P = $2;
  export type ComponentProps<T = $2;
  export type ComponentPropsWithoutRef<T = $2;
  export type PropsWithoutRef<T = $2;
  export type ComponentPropsWithRef<T = $2;
  export type HTMLAttributes<T = $2;
  export type ButtonHTMLAttributes<T = $2;
  export type SVGProps<T = $2;
  export type ChangeEvent<T = $2;
  export type MouseEvent<T = $2;
  export type DragEvent<T = $2;
  export type FormEvent<T = $2;
  export type KeyboardEvent<T = $2;
  export type SyntheticEvent<T = $2;
  export type Ref<T = $2;
  export type LegacyRef<T = $2;
  export type ElementRef<T = $2;
  export type CSSProperties = Record<string, string | number | undefined>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
=======
  const React: any;

<<<<<<< HEAD
  export default React
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(initialValue: T): { current: T }
  export function useRef<T>(initialValue: T | null): { current: T | null }
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined }
=======
<<<<<<< HEAD
declare module 'react' {
  const React: any;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  export default React
  // Basic overloads for useRef to handle common cases
  export function useRef<T>(initialValue: T): { current: T }
  export function useRef<T>(initialValue: T | null): { current: T | null }
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  export default React,
<<<<<<< HEAD
=======
  // Basic overloads for useRef to handle common cases;
  export function useRef<T>(initialValue: T): { current: T };
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined };
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  export const useEffect: any;

  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S)
  export function useState<S>(
<<<<<<< HEAD

=======
<<<<<<< HEAD
    initialState: S | (() => S);
=======
    initialState: S | (() => S)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

  export type ReactElement = any,
  export type ComponentType<P = {}> = (props: P) => any,;


    render: (props: P, ref: Ref<T>) => ReactElement | null;
  ): any;
  export const Fragment: any;
  export const StrictMode: any;
  export const cloneElement: any;
  export type ReactNode = any;
  export type ReactElement = any
  export type ComponentType<P = {}> = (props: P) => any
  export type ReactElement = any,
  export type ComponentType<P = {}> = (props: P) => any,;
=======
    render: (props: P, ref: Ref<T>) => ReactElement | null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> merged-prs-20250907-203621

  export type ReactElement = any
  export type ComponentType<P = {}> = (props: P) => any
  export type ReactElement = any,
  export type ComponentType<P = {}> = (props: P) => any,;

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

}'
declare module 'react-dom' {';
  export * from 'react-dom / index';
}
'
declare module 'react / jsx - runtime' {}
=======
}
declare module 'react-dom' {
  export * from 'react-dom / index';
}
declare module 'react / jsx - runtime' {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  export const jsx: any;
  export const jsxs: any,;
  export const Fragment: any;

}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

<<<<<<< HEAD
'
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

}'
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
declare module 'react-dom' {
  export * from 'react-dom/index'
}
declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any

  export const Fragment: any
=======

<<<<<<< HEAD
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

<<<<<<< HEAD
declare module 'react/jsx-runtime' {
  export const jsx: any,
  export const jsxs: any,
  export const Fragment: any}
=======
}
declare module 'react-dom' {
  export * from 'react-dom / index';
}

declare module 'react / jsx - runtime' {
  export const jsx: any;
  export const jsxs: any,
  export const Fragment: any;

}
}
}

}

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

'
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

}'
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

  export * from 'react-dom/index

declare module 'react/jsx-runtime' {;
};

declare module 'react' {;
  const React: any,;
  export default React,;
  // Basic overloads for useRef to handle common cases;
  export function useRef<T>(initialValue: T): { current: T },;

  export function useRef<T>(initialValue: T | null): { current: T | null },;

  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined },;

  export type Dispatch<A> = (value: A) => void,;

  export type SetStateAction<S> = S | ((prevState: S) => S),;

  export function useState<S>(;
  ): [S, Dispatch<SetStateAction<S>>],;

  export function createContext<T>(defaultValue: T): any,;

  export function useContext<T>(context: any): T,;

  // Generic definition to allow usage like forwardRef<HTMLDivElement Props>();

  export function forwardRef<T P = {}>(;

  export type FC<P = {}> = (props: P) => any,;
}
declare module 'react' {;
  const React:any,;
  export default React,;
  // Basic overloads for useRef to handle common cases;

  export function useRef<T>(initialValue:T):{ current:T },;

  export function useRef<T>(initialValue:T | null):{ current:T | null },;

  export function useRef<T = undefined>(initialValue?:T):{ current:T | undefined },;

  export type Dispatch<A> = (value:A) => void,;

  export type SetStateAction<S> = S | ((prevState:S) => S),;

  ):[S, Dispatch<SetStateAction<S>>],;

  export function createContext<T>(defaultValue:T):any,;

  export function useContext<T>(context:any):T,;

  // Generic definition to allow usage like forwardRef<HTMLDivElement Props>();

    render:(props:P, ref:Ref<T>) => ReactElement | null;

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

}
declare module 'react-dom' {
  export * from 'react-dom/index'
}
<<<<<<< HEAD

declare module 'react / jsx - runtime' {
  export const jsx: any;
  export const jsxs: any,
  export const Fragment: any;

}
}
}

declare module 'react-dom' {
  export * from 'react-dom/index'
}

  export * from 'react-dom/index

declare module 'react/jsx-runtime' {;
};

declare module 'react' {;
  const React: any,;
  export default React,;
  // Basic overloads for useRef to handle common cases;
  export function useRef<T>(initialValue: T): { current: T },;

  export function useRef<T>(initialValue: T | null): { current: T | null },;

  export function useRef<T = undefined>(initialValue?: T): { current: T | undefined },;

  export type Dispatch<A> = (value: A) => void,;

  export type SetStateAction<S> = S | ((prevState: S) => S),;

  export function useState<S>(;
  ): [S, Dispatch<SetStateAction<S>>],;

  export function createContext<T>(defaultValue: T): any,;

  export function useContext<T>(context: any): T,;

  // Generic definition to allow usage like forwardRef<HTMLDivElement Props>();

  export function forwardRef<T P = {}>(;

  export type FC<P = {}> = (props: P) => any,;
}
declare module 'react' {;
  const React:any,;
  export default React,;
  // Basic overloads for useRef to handle common cases;

  export function useRef<T>(initialValue:T):{ current:T },;

  export function useRef<T>(initialValue:T | null):{ current:T | null },;

  export function useRef<T = undefined>(initialValue?:T):{ current:T | undefined },;

  export type Dispatch<A> = (value:A) => void,;

  export type SetStateAction<S> = S | ((prevState:S) => S),;

  ):[S, Dispatch<SetStateAction<S>>],;

  export function createContext<T>(defaultValue:T):any,;

  export function useContext<T>(context:any):T,;

  // Generic definition to allow usage like forwardRef<HTMLDivElement Props>();

    render:(props:P, ref:Ref<T>) => ReactElement | null;

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

}
declare module 'react-dom' {
  export * from 'react-dom/index'
}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any

<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
;
declare module 'react-dom' {;
  export * from 'react-dom/index';
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
;
declare module 'react-dom' {;
  export * from 'react-dom/index';
}
}
}
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
declare module 'react/jsx-runtime' {;
  export const jsx: any,;
  export const jsxs: any;
  export const Fragment: any;
<<<<<<< HEAD
}
pr-12325
=======
<<<<<<< HEAD
}
pr-12325
=======
<<<<<<< HEAD
}

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
 
}
}
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
