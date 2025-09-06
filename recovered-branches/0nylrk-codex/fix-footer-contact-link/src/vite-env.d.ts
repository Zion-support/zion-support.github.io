<<<<<<< HEAD
;

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts
=======

=======

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    PORT?: string;
  }
}
// Badge component type fixes
declare module '@/components/ui/badge' {
<<<<<<< HEAD

<<<<<<< HEAD
  export const Badge: React.FC<BadgeProps>;
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  // add more env variables as needed;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
=======
;
interface ImportMetaEnv {;
  readonly VITE_APP_TITLE:string;
  // add more env variables as needed;
}
;
interface ImportMeta {;
  readonly env:ImportMetaEnv;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
// Global type declarations;
<<<<<<< HEAD
declare namespace React {
  type ReactNode = React.ReactNode,
  type FC < P = {}> = React.FC < P>,
  type FormEvent < T = Element> = React.FormEvent < T>,
  type KeyboardEvent < T = Element> = React.KeyboardEvent < T>,
  type ChangeEvent < T = Element> = React.ChangeEvent < T>;
=======
declare namespace React {;
  type ReactNode = React.ReactNode;
  type FC<P = {}> = React.FC<P>;
  type FormEvent<T = Element> = React.FormEvent<T>;
  type KeyboardEvent<T = Element> = React.KeyboardEvent<T>;
  type ChangeEvent<T = Element> = React.ChangeEvent<T>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
// Type declarations for modules used in Vite configuration;
<<<<<<< HEAD
declare module 'vitest / config' {
  export { define_config } from 'vite';
}
declare module '@vitejs/plugin-react - swc' {
  import { Plugin } from 'vite',
  export default function reactSWC (): Plugin;
}
<<<<<<< HEAD
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
}
// FeatureCard type fixes;
declare module '@/components/FeatureCard' {export interface FeatureCardProps {;
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
    key?: number | string;
  }
}
// ListingScoreCard type fixes;
declare module '@/components/ListingScoreCard' {export interface ListingScoreCardProps {;
    title: string;
    description: string;
    category: string;
    image?: string;
    tags?: string[];
    author?: string;
    authorImage?: string;
    aiScore?: number;
    rating?: number;
    reviewCount?: number;
    key?: string | number;
    variant?: string;
  }
  export const ListingScoreCard: React.FC<ListingScoreCardProps>;
}
// ChatMessage type fixes;
declare module '@/components/ChatAssistant/ChatMessage' {export interface ChatMessageProps {;
    role: 'user' | 'assistant';
    message: string;
    timestamp?: Date;
    key?: string | number;
  }
}
// ProductListingCard type fixes;
declare module '@/components/ProductListingCard' {export interface ProductListingCardProps {;
    listing: any;
    view?: any,  // Made optional to fix the errors;
    onRequestQuote: (listingId: string) => void;
    key?: string | number;
  }
  export const ProductListingCard: React.FC<ProductListingCardProps>;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit/components-react' {export interface VideoCallProps {;
    room?: string;
    token?: string;
    serverUrl?: string;
    onDisconnect?: () => void;
    className?: string;
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
  export interface BadgeProps {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    className?: string,
    variant?: "default" | "secondary" | "destructive" | "outline",
    children?: React.ReactNode,
    key?: string | number
},;
<<<<<<< HEAD
=======
declare module 'path' {
  export function resolve (...paths: string[]): string,
  export function join (...paths: string[]): string,
  export function dirname (path: string): string;
}
declare module 'lovable - tagger' {
  import { Plugin } from 'vite',
  export function component_tagger (): Plugin;
=======
declare module 'vitest/config' {;
  export { defineConfig } from 'vite';
}
;
declare module '@vitejs/plugin-react-swc' {;
  import { Plugin } from 'vite';
  export default function reactSWC():Plugin;
}
;
declare module 'path' {;
  export function resolve(...paths:string[]):string;
  export function join(...paths:string[]):string;
  export function dirname(path:string):string;
}
;
declare module 'lovable-tagger' {;
  import { Plugin } from 'vite';
  export function componentTagger():Plugin;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
// Add Node.js globals;
<<<<<<< HEAD
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
=======
declare let __dirname:string;
declare let process:{;
  env:{;
    [key:string]:string | undefined;
    NODE_ENV:'development' | 'production' | 'test';
    PORT?:string;
  }
};
;
// Badge component type fixes;
declare module '@/components/ui/badge' {;
  export interface BadgeProps {;
    className?:string;
    variant?:"default" | "secondary" | "destructive" | "outline";
    children?:React.ReactNode;
    key?:string | number;
  }
;
  export const Badge:React.FC<BadgeProps>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
// FeatureCard type fixes;
<<<<<<< HEAD
declare module '@/components / FeatureCard' {
  export interface FeatureCardProps {
    title: string,
    description: string,
    icon: React.ReactNode,
    class_name?: string,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts
    key?: number | string;
=======
declare module '@/components/FeatureCard' {;
  export interface FeatureCardProps {;
    title:string;
    description:string;
    icon:React.ReactNode;
    className?:string;
    key?:number | string;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
// Badge component type fixes;
declare module '@/components/ui/badge' {;
  export interface BadgeProps {;
    className?: string,;
    variant?: "default" | "secondary" | "destructive" | "outline",;
    children?: React.ReactNode,;
    key?: string | number;
  }
;
  export const Badge: React.FC<BadgeProps>;
}
;
// FeatureCard type fixes;
declare module '@/components/FeatureCard' {;
  export interface FeatureCardProps {;
    title: string,;
    description: string,;
    icon: React.ReactNode,;
    className?: string,;
    key?: number | string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
}
;
// ListingScoreCard type fixes;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts
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
=======
declare module '@/components/ListingScoreCard' {;
  export interface ListingScoreCardProps {;
    title:string;
    description:string;
    category:string;
    image?:string;
    tags?:string[];
    author?:string;
    authorImage?:string;
    aiScore?:number;
    rating?:number;
    reviewCount?:number;
    key?:string | number;
    variant?:string;
  }
;
  export const ListingScoreCard:React.FC<ListingScoreCardProps>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
// ChatMessage type fixes;
<<<<<<< HEAD
declare module '@/components / ChatAssistant / ChatMessage' {
  export interface ChatMessageProps {
    role: 'user' | 'assistant',
    message: string,
    timestamp?: Date,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts

    key?: string | number;
<<<<<<< HEAD
=======
========
    key?: string | number;
=======
declare module '@/components/ChatAssistant/ChatMessage' {;
  export interface ChatMessageProps {;
    role:'user' | 'assistant';
    message:string;
    timestamp?:Date;
    key?:string | number;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts
  }
}
;
// ProductListingCard type fixes;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
declare module '@/components/ListingScoreCard' {;
  export interface ListingScoreCardProps {;
    title: string,;
    description: string,;
    category: string,;
    image?: string,;
    tags?: string[],;
    author?: string,;
    authorImage?: string,;
    aiScore?: number,;
    rating?: number,;
    reviewCount?: number,;
    key?: string | number,;
    variant?: string;
  }
;
  export const ListingScoreCard: React.FC<ListingScoreCardProps>;
}
;
// ChatMessage type fixes;
declare module '@/components/ChatAssistant/ChatMessage' {;
  export interface ChatMessageProps {;
    role: 'user' | 'assistant',;
    message: string,;
    timestamp?: Date,;
    key?: string | number;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  export const VideoCall: React.FC<VideoCallProps>;
  export const LiveKitRoom: React.FC<any>;
}
<<<<<<< HEAD

<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// ProductListingCard type fixes;
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
    listing: any,;
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts
declare module '@/components / ProductListingCard' {
  export interface ProductListingCardProps {
    listing: any,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    view?: any,  // Made optional to fix the errors;
    onRequestQuote: (listing_id: string) => void,
    key?: string | number;
  }
  export const ProductListingCard: React.FC < ProductListingCardProps>;
=======
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
    listing:any;
    view?:any;  // Made optional to fix the errors;
    onRequestQuote:(listingId:string) => void;
    key?:string | number;
  }
;
  export const ProductListingCard:React.FC<ProductListingCardProps>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    view?: any,  // Made optional to fix the errors;
    onRequestQuote: (listingId: string) => void,;
    key?: string | number;
  }
;
  export const ProductListingCard: React.FC<ProductListingCardProps>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
=======
declare module '@livekit/components-react' {;
  export interface VideoCallProps {;
    room?:string;
    token?:string;
    serverUrl?:string;
    onDisconnect?:() => void;
    className?:string;
  }
  ;
  export const VideoCall:React.FC<VideoCallProps>;
  export const LiveKitRoom:React.FC<any>;
}
;
declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
} className?: string;
variant?: "default" | "secondary" | "destructive" | "outline";
children?: React.ReactNode;
export const Badge: React.FC<BadgeProps> 
}//FeatureCard type fixes export const ListingScoreCard: React.FC<ListingScoreCardProps> 
}//ChatMessage type fixes export const ProductListingCard: React.FC<ProductListingCardProps> 
}//Removed custom lucide-react stub //Create a replacement stub for LiveKit components export const VideoCall: React.FC<VideoCallProps>;
export const LiveKitRoom: React.FC<any> 
}declare module '@livekit/components-styles' {
  // Empty stub for the styles 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/vite-env.d.ts
=======
declare module '@livekit/components-react' {;
  export interface VideoCallProps {;
    room?: string,;
    token?: string,;
    serverUrl?: string,;
    onDisconnect?: () => void;
    className?: string;
  }
;
  export const VideoCall: React.FC<VideoCallProps>;
  export const LiveKitRoom: React.FC<any>;
}
;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
