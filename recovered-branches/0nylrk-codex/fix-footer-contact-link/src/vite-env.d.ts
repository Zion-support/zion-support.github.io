;


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

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  // add more env variables as needed;
=======
<<<<<<< HEAD
  export interface BadgeProps {
<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
  export interface BadgeProps {};
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  export const Badge: React.FC<BadgeProps>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit/components-react' {export interface VideoCallProps {;
    room?: string;
    token?: string;
    serverUrl?: string;
    onDisconnect?: () => void;
    className?: string;
=======
<<<<<<< HEAD
=======
  export interface BadgeProps {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    className?: string,
    variant?: "default" | "secondary" | "destructive" | "outline",
    children?: React.ReactNode,
    key?: string | number
},;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
  }
}
// ProductListingCard type fixes;




=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  }
  export const VideoCall: React.FC<VideoCallProps>;
  export const LiveKitRoom: React.FC<any>;
}
<<<<<<< HEAD

declare module '@/components / ProductListingCard' {
  export interface ProductListingCardProps {
    listing: any,
=======
<<<<<<< HEAD
declare module '@livekit/components-styles' {// Empty stub for the styles;
}
=======
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// ProductListingCard type fixes;
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
    listing: any,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
declare module '@livekit / components - styles' {
=======

=======
;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
;

declare module '@livekit/components-styles' {;

  // Empty stub for the styles;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}