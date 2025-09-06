;
<<<<<<< HEAD
interface ImportMetaEnv {readonly VITE_APP_TITLE: string;
  // add more env variables as needed;
}
interface ImportMeta {readonly env: ImportMetaEnv;
}
// Global type declarations;
declare namespace React {type ReactNode = React.ReactNode;
  type FC<P = {}> = React.FC<P>;
  type FormEvent<T = Element> = React.FormEvent<T>;
  type KeyboardEvent<T = Element> = React.KeyboardEvent<T>;
  type ChangeEvent<T = Element> = React.ChangeEvent<T>;
}
// Type declarations for modules used in Vite configuration;
declare module 'vitest/config' {export { defineConfig } from 'vite';
}
declare module '@vitejs/plugin-react-swc' {import { Plugin } from 'vite';
  export default function reactSWC(): Plugin;
}
declare module 'path' {export function resolve(...paths: string[]): string;
  export function join(...paths: string[]): string;
  export function dirname(path: string): string;
}
declare module 'lovable-tagger' {import { Plugin } from 'vite';
  export function componentTagger(): Plugin;
}
// Add Node.js globals;
declare let __dirname: string;
declare let process: {env: {;
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
interface ImportMetaEnv {;
  readonly VITE_APP_TITLE: string,;
  // add more env variables as needed;
}
;
interface ImportMeta {;
  readonly env: ImportMetaEnv;
}
;
// Global type declarations;
declare namespace React {;
  type ReactNode = React.ReactNode,;
  type FC<P = {}> = React.FC<P>,;
  type FormEvent<T = Element> = React.FormEvent<T>,;
  type KeyboardEvent<T = Element> = React.KeyboardEvent<T>,;
  type ChangeEvent<T = Element> = React.ChangeEvent<T>;
}
;
// Type declarations for modules used in Vite configuration;
declare module 'vitest/config' {;
  export { defineConfig } from 'vite';
}
;
declare module '@vitejs/plugin-react-swc' {;
  import { Plugin } from 'vite',;
  export default function reactSWC(): Plugin;
}
;
declare module 'path' {;
  export function resolve(...paths: string[]): string,;
  export function join(...paths: string[]): string,;
  export function dirname(path: string): string;
}
;
declare module 'lovable-tagger' {;
  import { Plugin } from 'vite',;
  export function componentTagger(): Plugin;
}
;
// Add Node.js globals;
declare let __dirname: string,;
declare let process: {;
  env: {;
    [key: string]: string | undefined,;
    NODE_ENV: 'development' | 'production' | 'test',;
    PORT?: string;
  }
}
// Badge component type fixes
declare module '@/components/ui/badge' {
<<<<<<< HEAD
  export interface BadgeProps {
  }
  export interface BadgeProps {};
;
  export const Badge: React.FC<BadgeProps>;
=======

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  // add more env variables as needed;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
// Global type declarations;
declare namespace React {
  type ReactNode = React.ReactNode,
  type FC < P = {}> = React.FC < P>,
  type FormEvent < T = Element> = React.FormEvent < T>,
  type KeyboardEvent < T = Element> = React.KeyboardEvent < T>,
  type ChangeEvent < T = Element> = React.ChangeEvent < T>;
}
// Type declarations for modules used in Vite configuration;
declare module 'vitest / config' {
  export { define_config } from 'vite';
}
declare module '@vitejs/plugin-react - swc' {
  import { Plugin } from 'vite',
  export default function reactSWC (): Plugin;
}
<<<<<<< HEAD
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit/components-react' {export interface VideoCallProps {;
    room?: string;
    token?: string;
    serverUrl?: string;
    onDisconnect?: () => void;
    className?: string;
  export interface BadgeProps {
    className?: string,
    variant?: "default" | "secondary" | "destructive" | "outline",
    children?: React.ReactNode,
    key?: string | number
},;
=======
declare module 'path' {
  export function resolve (...paths: string[]): string,
  export function join (...paths: string[]): string,
  export function dirname (path: string): string;
}
declare module 'lovable - tagger' {
  import { Plugin } from 'vite',
  export function component_tagger (): Plugin;
}
// Add Node.js globals;
declare let __dirname: string,
declare let process: {
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string;
  }
},
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
// Badge component type fixes;
declare module '@/components / ui / badge' {
  export interface BadgeProps {
  }
  export const Badge: React.FC < BadgeProps>;
}
// FeatureCard type fixes;
declare module '@/components / FeatureCard' {
  export interface FeatureCardProps {
    title: string,
    description: string,
    icon: React.ReactNode,
    class_name?: string,

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    key?: number | string;
  }
}
// ListingScoreCard type fixes;
    key?: string | number;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
}
// ProductListingCard type fixes;
<<<<<<< HEAD




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
  export const VideoCall: React.FC<VideoCallProps>;
  export const LiveKitRoom: React.FC<any>;
}
<<<<<<< HEAD
declare module '@livekit/components-styles' {// Empty stub for the styles;
}
;
// ProductListingCard type fixes;
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
    listing: any,;
=======

declare module '@/components / ProductListingCard' {
  export interface ProductListingCardProps {
    listing: any,
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    view?: any,  // Made optional to fix the errors;
    onRequestQuote: (listing_id: string) => void,
    key?: string | number;
  }
  export const ProductListingCard: React.FC < ProductListingCardProps>;
}
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit / components - react' {
  export interface VideoCallProps {
    room?: string,
    token?: string,
    server_url?: string,
    on_disconnect?: () => void;
    class_name?: string;
  }
  export const VideoCall: React.FC < VideoCallProps>;
  export const LiveKitRoom: React.FC < any>;
}
;
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
}
;
=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
