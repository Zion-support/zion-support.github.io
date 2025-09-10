import { lazy, ComponentType } from 'react';

/**
 * Enhanced lazy loading utility with error boundaries and retry logic
 */
export function createLazyComponent<T extends ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
  fallback?: ComponentType
) {
  return lazy(() =>
    importFn().catch((error) => {
      // // console.error('Failed to load component:', error);
      return {
        default: fallback || (() => (
          <div className="flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-red-600 mb-2">
                Failed to load component
              </h3>
              <p className="text-gray-600 mb-4">
                There was an error loading this page. Please try refreshing.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )),
      };
    })
  );
}

/**
 * Retry logic for failed imports
 */
export function retryImport<T>(
  importFn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  return new Promise((resolve, reject) => {
    const attempt = (attemptNumber: number) => {
      importFn()
        .then(resolve)
        .catch((error) => {
          if (attemptNumber < retries) {
            // // console.warn(`Import attempt ${attemptNumber} failed, retrying...`, error);
            setTimeout(() => attempt(attemptNumber + 1), delay * attemptNumber);
          } else {
            reject(error);
          }
        });
    };
    attempt(1);
  });
}

/**
 * Preload component for better UX
 */
export function preloadComponent(importFn: () => Promise<unknown>) {
  const link = document.createElement('link');
  link.rel = 'modulepreload';
  link.href = importFn.toString();
  document.head.appendChild(link);
}

/**
 * Dynamic import with loading state
 */
export function dynamicImport<T extends ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
  loadingComponent?: ComponentType
) {
  return lazy(() =>
    Promise.all([
      importFn(),
      new Promise((resolve) => setTimeout(resolve, 100)) // Minimum loading time
    ]).then(([module]) => module)
  );
}