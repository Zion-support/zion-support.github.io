
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
=======
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
=======
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
<<<<<<< HEAD
export function usePageViewTracking() {;
  const location = useLocation();
=======
export function usePageViewTracking() {
<<<<<<< HEAD
=======
  const location = useLocation(),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
