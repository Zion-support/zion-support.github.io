
<<<<<<< HEAD
import { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
=======
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
export function usePageViewTracking() {
<<<<<<< HEAD
=======
  const location = useLocation(),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  const location = useLocation();
  useEffect(() => {
    const handleRouteChange = () => {
      // Track page view
<<<<<<< HEAD
      console.log('Page view:', window.location.pathname)
    }
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    // Initial page load
    handleRouteChange();
=======
      // // // console.log('Page view:', window.location.pathname)
    },
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange),
    
    // Initial page load
    handleRouteChange(),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, []),

  // Also track when location changes directly via React Router
  useEffect(() => {
    // // // console.log('Page view:', location.pathname)
  }, [location.pathname])
<<<<<<< HEAD
}
=======
import { useEffect } from 'react',;
import { useLocation } from 'react-router-dom',;
/**;
 * Custom hook to track page views for analytics purposes;
 * Attaches event listeners to track route changes and logs page views;
 */;
export function usePageViewTracking() {;
  const location = useLocation(),;
  useEffect(() => {;
    const handleRouteChange = () => {;
      // Track page view;
      // // // console.log('Page view:', window.location.pathname);
    },;
    // Listen for route changes;
    window.addEventListener('popstate', handleRouteChange),;
    // Initial page load;
    handleRouteChange();
    return () => {;
      window.removeEventListener('popstate', handleRouteChange);
    }
  }, []);
  // Also track when location changes directly via React Router;
  useEffect(() => {;
    // // // console.log('Page view:', location.pathname);
  }, [location.pathname]);
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
