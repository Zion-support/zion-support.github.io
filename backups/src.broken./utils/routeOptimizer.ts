// Route optimization utilities for better code splitting
import React from 'react';

export const routeOptimizer = {
  // Preload routes based on user behavior
  preloadRoute: (routePath: string) => {
    if (typeof window === 'undefined') return;
    
    // Only preload if user is likely to navigate there
    const preloadThreshold = 1000; // 1 second
    const startTime = performance.now();
    
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        // Simulate route preloading
        // // console.log(`Preloading route: ${routePath}`);
        resolve(true);
      }, preloadThreshold);
      
      // Cancel preload if user navigates away
      const cancelPreload = () => {
        clearTimeout(timeout);
        resolve(false);
      };
      
      // Listen for navigation events
      window.addEventListener('beforeunload', cancelPreload);
      window.addEventListener('popstate', cancelPreload);
    });
  },

  // Lazy load components with better error handling
  createLazyComponent: <T extends React.ComponentType<unknown>>(
    importFunc: () => Promise<{ default: T }>,
    componentName: string
  ) => {
    return React.lazy(() => 
      importFunc().catch((error) => {
        // // console.error(`Failed to load component ${componentName}:`, error);
        // Return a fallback component
        const FallbackComponent = () => React.createElement('div', {
          className: "flex items-center justify-center min-h-[200px] p-8"
        }, React.createElement('div', {
          className: "text-center"
        }, React.createElement('h3', {
          className: "text-lg font-semibold text-red-600 mb-2"
        }, `Failed to load ${componentName}`), React.createElement('p', {
          className: "text-gray-600 mb-4"
        }, "There was an error loading this section."), React.createElement('button', {
          onClick: () => window.location.reload(),
          className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        }, "Retry")));
        
        return {
          default: FallbackComponent as unknown as T
        };
      })
    );
  },

  // Optimize route loading based on user patterns
  optimizeRouteLoading: () => {
    if (typeof window === 'undefined') return;

    // Track user navigation patterns
    const navigationHistory: string[] = [];
    const maxHistory = 10;

    const trackNavigation = (path: string) => {
      navigationHistory.push(path);
      if (navigationHistory.length > maxHistory) {
        navigationHistory.shift();
      }
    };

    // Preload likely next routes
    const preloadLikelyRoutes = () => {
      const currentPath = window.location.pathname;
      const likelyRoutes = routeOptimizer.getLikelyNextRoutes(currentPath, navigationHistory);
      
      likelyRoutes.forEach(route => {
        routeOptimizer.preloadRoute(route);
      });
    };

    // Listen for navigation events
    window.addEventListener('popstate', () => {
      trackNavigation(window.location.pathname);
      preloadLikelyRoutes();
    });

    // Track initial page load
    trackNavigation(window.location.pathname);
    
    // Preload after initial load
    setTimeout(preloadLikelyRoutes, 2000);
  },

  // Get likely next routes based on current path and history
  getLikelyNextRoutes: (currentPath: string, history: string[]) => {
    const routePatterns: Record<string, string[]> = {
      '/': ['/about', '/services', '/contact'],
      '/about': ['/services', '/contact'],
      '/services': ['/contact', '/pricing'],
      '/contact': ['/about', '/services'],
      '/pricing': ['/services', '/contact'],
    };

    const directNext = routePatterns[currentPath] || [];
    const historicalNext = history
      .filter(path => path !== currentPath)
      .slice(-3); // Last 3 unique paths

    return [...new Set([...directNext, ...historicalNext])];
  },

  // Bundle size optimization for routes
  optimizeBundleForRoute: (routePath: string) => {
    const routeOptimizations: Record<string, () => void> = {
      '/': () => {
        // Home page optimizations
        // // console.log('Optimizing home page bundle');
      },
      '/services': () => {
        // Services page optimizations
        // // console.log('Optimizing services page bundle');
      },
      '/contact': () => {
        // Contact page optimizations
        // // console.log('Optimizing contact page bundle');
      },
    };

    const optimization = routeOptimizations[routePath];
    if (optimization) {
      optimization();
    }
  },
};

// Initialize route optimization
if (typeof window !== 'undefined') {
  routeOptimizer.optimizeRouteLoading();
}