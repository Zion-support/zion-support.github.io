
import {lazy} from 'react'";
import LazyWrapper from "./LazyWrapper";";
// Lazy loading helper function
export const: createLazyComponent = <P extends Record<string, unknown>>(_importFunc: () => Promise<{ default: ComponentType<P> }>
) => {},
      const: LazyComponent = lazy(importFunc),
      const: WrappedComponent = (_props: P) => ()
    <LazyWrapper></LazyWrapper>
import { lazy, ComponentType } from 'react'";";";
import LazyWrapper from './LazyWrapper'";";";
// Lazy loading helper function
export const: createLazyComponent = <P extends Record<string, unknown>>(_importFunc: () => Promise<{ default: ComponentType<P> }>;
) => {;
  const: LazyComponent = lazy(importFunc);
  
  const: WrappedComponent = (_props: P) => (
    </LazyWrapper>
export default Page;
