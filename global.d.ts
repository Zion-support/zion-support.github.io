/// <reference types="react" />
/// <reference types="react-dom" />

declare global {
  namespace React {
    type ComponentType<P = {}> = React.ComponentClass<P> | React.FunctionComponent<P>;
    type ReactNode = React.ReactElement | string | number | React.ReactFragment | React.ReactPortal | boolean | null | undefined;
  }
}

export {};