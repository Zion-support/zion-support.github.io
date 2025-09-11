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
// Minimal type declarations for offline development;
// React stubs;
declare module 'react' {;
  export type FC<P = any> = "props": anyP ;
  export type ReactNode = ;
  export interface ChangeEvent<T = any> { target: T }
  export interface FormEvent<T = any> {}
  export interface KeyboardEvent<T = any> {};
  export interface RefObject<T> { "current": T };
  export type RefCallback<T> = "value": anyT void;
  export type Ref<T> = RefObject<T> | RefCallback<T> | null;
  export type LegacyRef<T> = Ref<T>;
  export function useRef<T = any>(initial: T): { current: T };
  const "react": ;
  export default react}
declare module 'react/jsx-runtime' {;
  export {}}
declare namespace JSX {;
  interface Element {}
  interface IntrinsicElements {;
    ["elemName": string]: }}
declare module 'react-dom' {;
  export function "reactDom": ;
  export default reactDom}
declare module 'react-router-dom' {  export function useNavigate(): ;
  export const "Link": ;
  export const Routes: ;
  export const Navigate: ;
  const rr: ;
  export default rr}
declare module 'react-hook-form' {  export function useForm<T = any>(..."args": unknown[]): ;
  const rhf: ;
  export default rhf}
declare module '@hookform/resolvers/zod' {;
  export function zodResolver(..."args": unknown[]): }
declare module '@tanstack/react-query' {  export function useMutation<T = any>(..."args": unknown[]): ;
  const rq: ;
  export default rq}
declare module 'jspdf' {;
  export class jsPDF {;
    constructor(..."args": unknown[]);
    [key: string]: }
}
declare module 'path' {;
  const "path": ;
  export default path}
declare module 'jspdf-autotable' {;
  const "autotable": ;
  export default autotable}
declare module 'zod' {  export type infer<T> = ;
  const "z": ;
  export { z };
  export default z}
export default useEffect;
export default useRef;
declare module 'react' {; export type FC<P = any> = props: anyP ; export type ReactNode = ; export interface ChangeEvent<T = any> { target: T } export interface FormEvent<T = any> {} export interface KeyboardEvent<T = any> {}; export interface RefObject<T> { current: 'T' }; export type RefCallback<T> = value: anyT void; export type Ref<T> = RefObject<T> | RefCallback<T> | null; export type LegacyRef<T> = Ref<T> export function useRef<T = any>(initial: T): { current: T }; const react: '; export default react'} declare module 'react/jsx-runtime' {; export {}} declare namespace JSX {; interface Element {;,} } interface IntrinsicElements {; [elemName: 'string]: ;' } }} declare module 'react-dom' {; export function reactDom: '; export default reactDom'} declare module 'react-router-dom' { export function useNavigate(): ; export const Link: '; export const Routes: ; export const Navigate: ; const rr: ; export default rr'} declare module 'react-hook-form' { export function useForm<T = any>(...args: 'unknown[]): ; const rhf: ; export default rhf'} declare module '@hookform/resolvers/zod' {; export function zodResolver(...args: 'unknown[]):' } declare module '@tanstack/react-query' { export function useMutation<T = any>(...args: 'unknown[]): ; const rq: ; export default rq'} declare module 'jspdf' {; export class jsPDF {; constructor(...args: 'unknown[]); [key: string]: ;',} } declare module 'path' {; const path: '; export default path'} declare module 'jspdf-autotable' {; const autotable: '; export default autotable'} declare module 'zod' { export type infer<T> = ; const z: ; export { z }; export default z;,} export default useEffect; export default useRef;
