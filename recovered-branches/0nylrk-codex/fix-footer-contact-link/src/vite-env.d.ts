
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
<<<<<<< HEAD
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
=======

// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from 'vite';

declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite';
}
}

export default function reactSWC(): Plugin;

declare module 'path' {
}
}

export function resolve(...paths: string[]): string;
}
}

export function join(...paths: string[]): string;
}
}

export function dirname(path: string): string;

declare module 'lovable-tagger' {
  import { Plugin } from 'vite';
}
}

export function componentTagger(): Plugin;

// Add Node.js globals
declare var __dirname: string;
declare var process: {
  env: {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    PORT?: string;
  }
}
// Badge component type fixes
declare module '@/components/ui/badge' {
<<<<<<< HEAD
  export interface BadgeProps {
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  export interface BadgeProps {};
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  export const Badge: React.FC<BadgeProps>;
}
// FeatureCard type fixes;
declare module '@/components/FeatureCard' {export interface FeatureCardProps {;
=======
}
}

export const Badge: React.FC<BadgeProps>;

// FeatureCard type fixes
declare module '@/components/FeatureCard' {
  export interface FeatureCardProps {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
  export const ListingScoreCard: React.FC<ListingScoreCardProps>;
}
// ChatMessage type fixes;
declare module '@/components/ChatAssistant/ChatMessage' {export interface ChatMessageProps {;
=======
}
}

export const ListingScoreCard: React.FC<ListingScoreCardProps>;

// ChatMessage type fixes
declare module '@/components/ChatAssistant/ChatMessage' {
  export interface ChatMessageProps {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
  export const ProductListingCard: React.FC<ProductListingCardProps>;
}
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
declare module '@livekit/components-react' {export interface VideoCallProps {;
=======
}
}

export const ProductListingCard: React.FC<ProductListingCardProps>;

// Removed custom lucide-react stub
// Create a replacement stub for LiveKit components
declare module '@livekit/components-react' {
  export interface VideoCallProps {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
  }
}
;
// ListingScoreCard type fixes;
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
  }
<<<<<<< HEAD
  export const VideoCall: React.FC<VideoCallProps>;
  export const LiveKitRoom: React.FC<any>;
}
<<<<<<< HEAD
declare module '@livekit/components-styles' {// Empty stub for the styles;
}
=======
<<<<<<< HEAD
}

export const VideoCall: React.FC<VideoCallProps>;
}
}

export const LiveKitRoom: React.FC<any>;

declare module '@livekit/components-styles' {
  // Empty stub for the styles
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
    view?: any,  // Made optional to fix the errors;
    onRequestQuote: (listingId: string) => void,;
    key?: string | number;
  }
;
  export const ProductListingCard: React.FC<ProductListingCardProps>;
}
;
// Removed custom lucide-react stub;
// Create a replacement stub for LiveKit components;
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
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
