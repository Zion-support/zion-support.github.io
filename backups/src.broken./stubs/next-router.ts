import React from 'react';

// Next.js router stub for Vite compatibility
// This provides the same API as next/router but works in a Vite environment

export interface NextRouter {
  route: string;
  pathname: string;
  query: Record<string, string | string[] | undefined>;
  asPath: string;
  basePath: string;
  isLocaleDomain: boolean;
  isReady: boolean;
  isPreview: boolean;
  events: {
    on: (event: string, handler: (...args: unknown[]) => void) => void;
    off: (event: string, handler: (...args: unknown[]) => void) => void;
    emit: (event: string, ...args: unknown[]) => void;
  };
  push: (url: string, as?: string, options?: unknown) => Promise<boolean>;
  replace: (url: string, as?: string, options?: unknown) => Promise<boolean>;
  reload: () => void;
  back: () => void;
  prefetch: (url: string, as?: string, options?: unknown) => Promise<void>;
  beforePopState: (cb: (state: unknown) => boolean) => void;
  fallback: boolean;
  isFallback: boolean;
  isSsr: boolean;
}

// Mock router implementation
const createMockRouter = (): NextRouter => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const currentQuery = typeof window !== 'undefined' 
    ? Object.fromEntries(new URLSearchParams(window.location.search))
    : {};

  return {
    route: currentPath,
    pathname: currentPath,
    query: currentQuery,
    asPath: currentPath,
    basePath: '',
    isLocaleDomain: false,
    isReady: true,
    isPreview: false,
    events: {
      on: () => {},
      off: () => {},
      emit: () => {},
    },
    push: async (url: string) => {
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', url);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return true;
    },
    replace: async (url: string) => {
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, '', url);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return true;
    },
    reload: () => {
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    },
    back: () => {
      if (typeof window !== 'undefined') {
        window.history.back();
      }
    },
    prefetch: async () => {},
    beforePopState: () => {},
    fallback: false,
    isFallback: false,
    isSsr: false,
  };
};

// Hook to get router instance
export const useRouter = (): NextRouter => {
  return createMockRouter();
};

// Hook to get router events
export const useRouterEvents = () => {
  return {
    on: () => {},
    off: () => {},
    emit: () => {},
  };
};

// Default export
export default {
  useRouter,
  useRouterEvents,
};