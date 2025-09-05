
<<<<<<< HEAD
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
<<<<<<< HEAD
export function usePageViewTracking() {
  const location = useLocation(),

  useEffect(() => {
    const handleRouteChange = () => {
      // Track page view
<<<<<<< HEAD
      // // // console.log('Page view:', window.location.pathname)
    },
=======
      // console.log('Page view:', window.location.pathname);
    };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
export function usePageViewTracking() {_const _location = useLocation();

  useEffect__(() => {
    const _handleRouteChange = () => {
      // Track page view};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange),
    
    // Initial page load
    handleRouteChange(),
    
<<<<<<< HEAD
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, []),

  // Also track when location changes directly via React Router
  useEffect(() => {
<<<<<<< HEAD
    // // // console.log('Page view:', location.pathname)
  }, [location.pathname])
=======
    // console.log('Page view:', location.pathname);
  }, [location.pathname]);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    return () => {_window.removeEventListener('popstate', _handleRouteChange);};
  }, []);

  // Also track when location changes directly via React Router
  useEffect__(() => {}, [location.pathname]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
