// Dynamic import utilities for better code splitting
import React, { ComponentType } from 'react';

// Lazy load components with better error handling
export const lazyLoadComponent = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallback?: ComponentType
) => {
  return React.lazy(() =>
    importFn().catch((error) => {
      console.warn('Failed to load component:', error);
      if (fallback) {
        return { default: fallback };
      }
      // Return a simple error component
      return {
        default: () => (
          <div className="p-4 text-center text-red-600">
            <p>Failed to load component</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        )
      };
    })
  );
};

// Preload components for better UX
export const preloadComponent = (importFn: () => Promise<any>) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'script';
  // This would need to be implemented based on your bundler
  document.head.appendChild(link);
};

// Dynamic import with retry logic
export const importWithRetry = async <T>(
  importFn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: Error;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await importFn();
    } catch (error) {
      lastError = error as Error;
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
      }
    }
  }
  
  throw lastError!;
};
