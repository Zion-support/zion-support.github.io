;
<<<<<<< HEAD
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  // add more env variables as needed;
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
  }
}
;
// ListingScoreCard type fixes;
<<<<<<< HEAD
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
    key?: string | number;
=======
declare module '@/components/ChatAssistant/ChatMessage' {;
  export interface ChatMessageProps {;
    role:'user' | 'assistant';
    message:string;
    timestamp?:Date;
    key?:string | number;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}
;
// ProductListingCard type fixes;
<<<<<<< HEAD
declare module '@/components / ProductListingCard' {
  export interface ProductListingCardProps {
    listing: any,
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
}
;
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
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
declare module '@livekit / components - styles' {
  // Empty stub for the styles;
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
