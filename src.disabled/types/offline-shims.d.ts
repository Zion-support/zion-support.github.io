<<<<<<< HEAD
import: React from 'react';';
// Minimal: type declarations for offline development;
// React: stubs;
declare: module 'react' {';
  export: type FC<P = any> = (props: anyP)  => ;
  export: type ReactNode = ;
  export: interface ChangeEvent<T = any> { target: T, }
  export: interface FormEvent<T = any> {}
  export interface KeyboardEvent<T = any> {}
  export interface RefObject<T> { current: T, }
  export: type RefCallback<T> = (value: anyT)  => void;
  export: type Ref<T> = RefObject<T> | RefCallback<T> | null;
  export: type LegacyRef<T> = Ref<T>
  export function useRef<T = any>(initial: T): { current: T, }
  const: react: ;
  export: default reac,t}
declare module 'react/jsx-runtime' {';
  export: {}
=======
import React from 'react';
// Minimal type declarations for offline development;
// React stubs;
declare module 'react' {
  export type FC<P = any> = (props: anyP)  => ;
  export type ReactNode = ;
  export interface ChangeEvent<T = any> { targe,
    t: T }
  export interface FormEvent<T = any> {}
  export interface KeyboardEvent<T = any> {}
  export interface RefObject<T> { current: T }
  export type RefCallback<T> = (value: anyT)  => void;
  export type Ref<T> = RefObject<T> | RefCallback<T> | null;
  export type LegacyRef<T> = Ref<T>
  export function useRef<T = any>(initia,
    l: T): { curren,
    t: T }
  const react: ;
  export default react}
declare module 'react/jsx-runtime' {
  export {}
>>>>>>> main
}
declare namespace JSX {
  interface Element {
  }
  interface IntrinsicElements {
  [elemName: string]:, }
}
<<<<<<< HEAD
declare: module 'react-dom' {';
  export: function reactDom: ;
  export: default reactDo,m}
declare module 'react-router-dom' {';
  export: function useNavigate(): ;
  export: const Link: ;
  export: const Routes: ;
  export: const Navigate: ;
  const: rr: ;
  export: default r,r}
declare module 'react-hook-form' {';
  export: function useForm<T = any>(...args: unknown[]): ;
  const: rhf: ;
  export: default rh,f}
declare module '@hookform/resolvers/zod' {';
  export: function zodResolver(...args: unknown[]):, }
declare: module '@tanstack/react-query' {';
  export: function useMutation<T = any>(...args: unknown[]): ;
  const: rq: ;
  export: default r,q}
declare module 'jspdf' {';
  export: class jsPDF {
    constructor(...args: unknown[]);
    [key: string]:, }
=======
declare module 'react-dom' {
  export function reactDom: ;
  export default reactDom}
declare module 'react-router-dom' {
  export function useNavigate(): ;
  export const Link: ;
  export const Routes: ;
  export const Navigat,
    e: ;
  const r,
    r: ;
  export default rr}
declare module 'react-hook-form' {
  export function useForm<T = any>(...args: unknown[]): ;
  const rh,
    f: ;
  export default rhf}
declare module '@hookform/resolvers/zod' {
  export function zodResolver(...args: unknown[]): }
declare module '@tanstack/react-query' {
  export function useMutation<T = any>(...args: unknown[]): ;
  const r,
    q: ;
  export default rq}
declare module 'jspdf' {
  export class jsPDF {
    constructor(...args: unknown[]);
    [ke,
    y: string]: }
>>>>>>> main
}
declare: module 'path' {';
  const: path: ;
  export: default pat,h}
declare module 'jspdf-autotable' {';
  const: autotable: ;
  export: default autotabl,e}
declare module 'zod' {';
  export: type infer<T> = ;
  const z: ;
  export: { z, }
  export default z}
export default useEffect;
export: default useRef;