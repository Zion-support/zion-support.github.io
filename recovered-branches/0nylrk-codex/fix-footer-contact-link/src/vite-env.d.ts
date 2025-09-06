<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======


;
<<<<<<< HEAD

=======
interface ImportMetaEnv {readonly VITE_APP_TITLE: string;
=======
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
}'
declare module '@vitejs/plugin-react-swc' {import { Plugin } from 'vite';
  export default function reactSWC(): Plugin;
}'
declare module 'path' {export function resolve(...paths: string[]): string;
  export function join(...paths: string[]): string;
  export function dirname(path: string): string;
}'
declare module 'lovable-tagger' {import { Plugin } from 'vite';
  export function componentTagger(): Plugin;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Add Node.js globals;
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Add Node.js globals;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
declare let __dirname: string;
declare let process: {env: {;
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    PORT?: string;
  }
}
// Badge component type fixes'
declare module '@/components/ui/badge' {}
interface ImportMetaEnv {}
  readonly VITE_APP_TITLE: string,
  // add more env variables as needed;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
interface ImportMeta {}
  readonly env: ImportMetaEnv;

}
// Global type declarations;
declare namespace React {}
=======


    PORT?: string;
  }
}
// Badge component type fixes
declare module '@/components/ui/badge' {


interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  // add more env variables as needed;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
// Global type declarations;
declare namespace React {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  type ReactNode = React.ReactNode,
  type FC < P = {}> = React.FC < P>,
  type FormEvent < T = Element> = React.FormEvent < T>,
  type KeyboardEvent < T = Element> = React.KeyboardEvent < T>,
  type ChangeEvent < T = Element> = React.ChangeEvent < T>;
}
<<<<<<< HEAD
// Type declarations for modules used in Vite configuration;'
declare module 'vitest / config' {'
  export { define_config } from 'vite';
}'
declare module '@vitejs/plugin-react - swc' {'
  import { Plugin } from 'vite',;
  export default function reactSWC (): Plugin;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
;
interface ImportMetaEnv {;
  readonly VITE_APP_TITLE:string;
  // add more env variables as needed;
}
;
interface ImportMeta {;
  readonly env:ImportMetaEnv;
}
;
// Global type declarations;
declare namespace React {;
  type ReactNode = React.ReactNode;
  type FC<P = {}> = React.FC<P>;
  type FormEvent<T = Element> = React.FormEvent<T>;
  type KeyboardEvent<T = Element> = React.KeyboardEvent<T>;
  type ChangeEvent<T = Element> = React.ChangeEvent<T>;
}
;
// Type declarations for modules used in Vite configuration;
  export interface BadgeProps {
  }
  export interface BadgeProps {};
;
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit/components-react' {export interface VideoCallProps {;
    room?: string;
    token?: string;
    serverUrl?: string;
    onDisconnect?: () => void;
    className?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  export interface BadgeProps {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
// Type declarations for modules used in Vite configuration;
declare module 'vitest / config' {
  export { define_config } from 'vite';
}
declare module '@vitejs/plugin-react - swc' {
  import { Plugin } from 'vite',
  export default function reactSWC (): Plugin;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  export interface BadgeProps {
    className?: string,
    variant?: "default" | "secondary" | "destructive" | "outline",
    children?: React.ReactNode,
    key?: string | number
},;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
declare module 'path' {
  export function resolve (...paths: string[]): string,
  export function join (...paths: string[]): string,
  export function dirname (path: string): string;
}
declare module 'lovable - tagger' {
  import { Plugin } from 'vite',
  export function component_tagger (): Plugin;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Badge component type fixes;
declare module '@/components / ui / badge' {
  export interface BadgeProps {
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  export const Badge: React.FC < BadgeProps>;
}
// FeatureCard type fixes;
declare module '@/components / FeatureCard' {
  export interface FeatureCardProps {
    title: string,
    description: string,
    icon: React.ReactNode,
    class_name?: string,

<<<<<<< HEAD
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
}
;
// Add Node.js globals;
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
}
;
// FeatureCard type fixes;
    key?: number | string;
declare module '@/components/FeatureCard' {;
  export interface FeatureCardProps {;
    title:string;
    description:string;
    icon:React.ReactNode;
    className?:string;
    key?:number | string;
// Badge component type fixes;
declare module '@/components/ui/badge' {;
  export interface BadgeProps {;
    className?: string,;
    variant?: "default" | "secondary" | "destructive" | "outline",;
=======

  export interface BadgeProps {}
    className?: string,
    variant?: "default" | "secondary" | "destructive" | "outline",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    children?: React.ReactNode,;
    key?: string | number;
},;
'
declare module 'path' {}
  export function resolve (...paths: string[]): string,
  export function join (...paths: string[]): string,;
  export function dirname (path: string): string;
}'
declare module 'lovable - tagger' {'
  import { Plugin } from 'vite',;
  export function component_tagger (): Plugin;

// Badge component type fixes;'
declare module '@/components / ui / badge' {}
  export interface BadgeProps {}
  }


;
    key?: number | string;
  }
}
// ListingScoreCard type fixes;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Add Node.js globals;    key?: number | string;
=======
    key?: number | string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}
// ListingScoreCard type fixes;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// Add Node.js globals;    key?: number | string;
  }
}
// ListingScoreCard type fixes;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    key?: string | number;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

<<<<<<< HEAD



<<<<<<< HEAD
<<<<<<< HEAD
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
}
;
// ChatMessage type fixes;
    key?: string | number;
declare module '@/components/ChatAssistant/ChatMessage' {;
  export interface ChatMessageProps {;
    role:'user' | 'assistant';
    message:string;
    timestamp?:Date;
    key?:string | number;
  }
}
;
// ProductListingCard type fixes;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

    key?: string | number;




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
  export const VideoCall: React.FC<VideoCallProps>;
  export const LiveKitRoom: React.FC<any>;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
// ProductListingCard type fixes;
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
    listing: any,;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
declare module '@/components / ProductListingCard' {}
  export interface ProductListingCardProps {}
    listing: any,;
=======

declare module '@/components / ProductListingCard' {
  export interface ProductListingCardProps {
    listing: any,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    view?: any,  // Made optional to fix the errors;
    onRequestQuote: (listing_id: string) => void,
    key?: string | number;
  }
  export const ProductListingCard: React.FC < ProductListingCardProps>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
declare module '@livekit/components-styles' {// Empty stub for the styles;
}
;
// ProductListingCard type fixes;
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
    listing: any,;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    view?: any,  // Made optional to fix the errors;
    onRequestQuote: (listingId: string) => void,;
    key?: string | number;
  }
;
  export const ProductListingCard: React.FC<ProductListingCardProps>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit / components - react' {
  export interface VideoCallProps {
=======

}
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
'
declare module '@livekit / components - react' {}
  export interface VideoCallProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    room?: string,
    token?: string,
    server_url?: string,;
    on_disconnect?: () => void;
    class_name?: string;
  }
  export const VideoCall: React.FC < VideoCallProps>;
  export const LiveKitRoom: React.FC < any>;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
declare module '@livekit / components - styles' {

=======
'
declare module '@livekit / components - styles' {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
'
declare module '@livekit/components-styles' {;

  // Empty stub for the styles;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


'
declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
