/*;
  Minimal React type declarations.;
  ---------------------------------------------------------------------------;
  exist so that isolated compilation of individual files (e.g., in CI or code;)
  review bots) will not fail when full React type declarations are not;
  present.  They purposefully model just enough surface-area used throughout;
  the code-base.  If you have `@types/react` available in `node_modules`,;
  TypeScript will prefer those and ignore this file, because paths declared in;
  `typeRoots` are merged with normal type resolution.;
*/;
;
declare module "react" {;"
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
   ;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {;
</P>
  export interface FC<P = Record<string, unknown>> {;
</P>
  export function useMemo<T>(factory:() => T, deps:readonly unknown[]):T;
</T>
  } & Record<string, unknown>;
</string>"