
<<<<<<< HEAD

=======
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

;
>>>>>>> origin/cursor/delete-old-data-records-6bba

declare let __dirname: string;
declare let process: {env: {;
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
    PORT?: string;
  }
}
// Badge component type fixes'
declare module '@/components/ui/badge' {}
interface ImportMetaEnv {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  readonly VITE_APP_TITLE: string,
  // add more env variables as needed;

}
interface ImportMeta {}
  readonly env: ImportMetaEnv;

<<<<<<< HEAD

=======
}
// Global type declarations;
declare namespace React {}

// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit/components-react' {export interface VideoCallProps {;
    room?: string;
    token?: string;
    serverUrl?: string;
    onDisconnect?: () => void;
    className?: string;

// Type declarations for modules used in Vite configuration;
declare module 'vitest / config' {
  export { define_config } from 'vite';
declare module '@vitejs/plugin-react - swc' {
  import { Plugin } from 'vite',;
  export default function reactSWC (): Plugin;
}

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
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit/components-react' {export interface VideoCallProps {;
    room?: string;
    token?: string;
    serverUrl?: string;
    onDisconnect?: () => void;
    className?: string;
  export interface BadgeProps {
  export interface BadgeProps {
  // TODO: Implement
    className?: string,
    variant?: "default" | "secondary" | "destructive" | "outline","
    children?: React.ReactNode,
    key?: string | number
},;

>>>>>>> origin/cursor/delete-old-data-records-6bba
declare module 'path' {
  export function resolve (...paths: string[]): string,
  export function join (...paths: string[]): string,
  export function dirname (path: string): string;
declare module 'lovable - tagger' {
  export function component_tagger (): Plugin;
<<<<<<< HEAD


}


declare module '@/components / ProductListingCard' {
  export interface ProductListingCardProps {
    listing: any,

=======

}
// Add Node.js globals;
declare let __dirname: string,
declare let process: {,
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string;
},

// Badge component type fixes;
declare module '@/components / ui / badge' {
  export interface BadgeProps {
  }

  export const Badge: React.FC < BadgeProps>;
// FeatureCard type fixes;
declare module '@/components / FeatureCard' {
  export interface FeatureCardProps {
  // TODO: Implement
    title: string,
    description: string,
    icon: React.ReactNode,
    class_name?: string,

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
    key?: number | string;
pr-12325
// ListingScoreCard type fixes;

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
// Badge component type fixes'
declare module '@/components/ui/badge' {}
interface ImportMetaEnv {}
    PORT?: string;
  }
}
// Badge component type fixes
declare module '@/components/ui/badge' {
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  // add more env variables as needed;

}
interface ImportMeta {}
  readonly env: ImportMetaEnv;


}
// Global type declarations;
declare namespace React {}

// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit/components-react' {export interface VideoCallProps {;
    room?: string;
    token?: string;
    serverUrl?: string;
    onDisconnect?: () => void;
    className?: string;

// Type declarations for modules used in Vite configuration;
declare module 'vitest / config' {
  export { define_config } from 'vite';
declare module '@vitejs/plugin-react - swc' {
  import { Plugin } from 'vite',;
  export default function reactSWC (): Plugin;
}

declare module 'path' {
  export function resolve (...paths: string[]): string,
  export function join (...paths: string[]): string,
  export function dirname (path: string): string;
declare module 'lovable - tagger' {
  export function component_tagger (): Plugin;


}
// Add Node.js globals;
declare let __dirname: string,
declare let process: {,
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string;
},

// Badge component type fixes;
declare module '@/components / ui / badge' {
  export interface BadgeProps {
  }

  export const Badge: React.FC < BadgeProps>;
// FeatureCard type fixes;
declare module '@/components / FeatureCard' {
  export interface FeatureCardProps {
  // TODO: Implement
    title: string,
    description: string,
    icon: React.ReactNode,
    className?: string,
    key?: number | string
  }
}

// ListingScoreCard type fixes
declare module '@/components/ListingScoreCard' {
  export interface ListingScoreCardProps {
    title: string,
    description: string,
  // TODO: Implement
pr-12325
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


>>>>>>> origin/cursor/delete-old-data-records-6bba
    view?: any,  // Made optional to fix the errors;
    onRequestQuote: (listingId: string) => void,;
    key?: string | number;
  }

declare module '@livekit/components-styles' {// Empty stub for the styles;
}
;
// ProductListingCard type fixes;
declare module '@/components/ProductListingCard' {;
  export interface ProductListingCardProps {;
    listing: any,;

    view?: any,  // Made optional to fix the errors;
    onRequestQuote: (listingId: string) => void,;
    key?: string | number;
  }
;
  export const ProductListingCard: React.FC<ProductListingCardProps>;

}
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
}
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit / components - react' {
  export interface VideoCallProps {

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
declare module '@livekit / components - styles' {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

declare module '@livekit / components - styles' {

;
'
declare module '@livekit/components-styles' {;
  // Empty stub for the styles;

}
}}
  export const VideoCall: React.FC < VideoCallProps>;
  export const LiveKitRoom: React.FC < any>;
declare module '@livekit / components - styles' {

declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
declare module '@livekit/components-react' {;
  export interface VideoCallProps {;
    room?:string;
    token?:string;
    serverUrl?:string;
    onDisconnect?:() => void;
    className?:string;
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

declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
<<<<<<< HEAD
=======
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD


=======
declare module '@livekit/components-styles' {;
  // Empty stub for the styles;
}
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
