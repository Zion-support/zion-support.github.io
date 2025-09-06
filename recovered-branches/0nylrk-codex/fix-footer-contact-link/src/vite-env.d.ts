;

<<<<<<< HEAD
=======

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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    PORT?: string;
  }
}
// Badge component type fixes
declare module '@/components/ui/badge' {

<<<<<<< HEAD
  export const Badge: React.FC<BadgeProps>;
=======
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  // add more env variables as needed;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

    key?: number | string;
  }
}
// ListingScoreCard type fixes;

declare module '@/components / ListingScoreCard' {
  export interface ListingScoreCardProps {
    title: string,
    description: string,
    category: string,
    image?: string,
    tags?: string[],
    author?: string,
    author_image?: string,
    ai_score?: number,
    rating?: number,
    review_count?: number,
    key?: string | number,
    variant?: string;
  }
  export const ListingScoreCard: React.FC < ListingScoreCardProps>;
}
// ChatMessage type fixes;
declare module '@/components / ChatAssistant / ChatMessage' {
  export interface ChatMessageProps {
    role: 'user' | 'assistant',
    message: string,
    timestamp?: Date,

    key?: string | number;
<<<<<<< HEAD
=======
  }
}
// ProductListingCard type fixes;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  }
  export const VideoCall: React.FC<VideoCallProps>;
  export const LiveKitRoom: React.FC<any>;
}

<<<<<<< HEAD
// ProductListingCard type fixes;
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
    listing: any,;
=======
declare module '@/components / ProductListingCard' {
  export interface ProductListingCardProps {
    listing: any,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
;

declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
}
;

=======
declare module '@livekit / components - styles' {
=======

;

declare module '@livekit/components-styles' {;

  // Empty stub for the styles;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
