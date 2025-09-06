// Type declarations for modules used in Vite configuration;
declare module 'vitest / config' {
  export { define_config } from 'vite';
}
<<<<<<< HEAD
declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite';
  export default function reactSWC(): Plugin
}
declare module 'path' {
  export function resolve(...paths: string[]): string;

  export function join(...paths: string[]): string

  export function dirname(path: string): string
}
declare module 'lovable-tagger' {
  import { Plugin } from 'vite';
  export function componentTagger(): Plugin
=======
declare module '@vitejs/plugin-react - swc' {
import {Plugin} from 'vite';
  export default function reactSWC (): Plugin;
}
declare module 'path' {
  export function resolve (...paths: string[]): string;
  export function join (...paths: string[]): string,
  export function dirname (path: string): string;
}
declare module 'lovable - tagger' {
import {Plugin} from 'vite';
  export function component_tagger (): Plugin;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}