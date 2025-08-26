import React from 'react';

<<<<<<< HEAD
// Export all hooks from messaging directory
export * from './messaging';
export * from './use-toast';
export * from './useAuth';
export * from './useOnboardingStatus';
export * from './usePageViewTracking';
export * from './useReactId';
export * from './useScrollToTop';
export * from './usePostsByCategory';
=======
export function useScrollToTop() {
  // Simple hook to scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export function useAuth() {
  // Simple auth hook
  return {
    user: null,
    isAuthenticated: false
  };
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
