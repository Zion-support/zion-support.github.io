<<<<<<< HEAD
console && console.log('Page view:', window && window.location.pathname)
    };
    // Listen for route changes
    window && window.addEventListener('popstate', handleRouteChange);
    // Initial page load
    handleRouteChange();
    return () => {
      window && window.removeEventListener('popstate', handleRouteChange)
    }
  }, []);
  // Also track when location changes directly via React Router
  useEffect(() => {
    console && console.log('Page view:', location && location.pathname)
  }, [location && location.pathname])
}
import {useEffect} from 'react';
import {use_location} from 'react-router-dom';
/**;
* Custom hook to track page views for analytics purposes;
* Attaches event listeners to track route changes and logs page views;
*/;
export /**
 * usePageViewTracking - Function description
 */
function usePageViewTracking() {
  const location = use_location ();
;
  useEffect (() => {
    const handleRouteChange = () =>: any {
      // Track page view;
      console.log ('Page view:', window.location.pathname);
    }
;
    // Listen for route changes;
    window.addEventListener ('popstate', handleRouteChange);
;
    // Initial page load;
    handleRouteChange ();
;
    return () => {
      window.removeEventListener ('popstate', handleRouteChange);
    }
  }, []);
;
  // Also track when location changes directly via React Router;
  useEffect (() => {
    console.log ('Page view:', location.pathname);
  }, [location.pathname]);
}
=======

import { useEffect } from 'react',;
import { useLocation } from 'react-router-dom',;
;
/**;
 * Custom hook to track page views for analytics purposes;
 * Attaches event listeners to track route changes and logs page views;
 */;
export function usePageViewTracking() {;
  const location = useLocation(),;
;
  useEffect(() => {;
    const handleRouteChange = () => {;
      // Track page view;
      // // // console.log('Page view:', window.location.pathname),;
    },;
    ;
    // Listen for route changes;
    window.addEventListener('popstate', handleRouteChange),;
    ;
    // Initial page load;
    handleRouteChange(),;
    ;
    return () => {;
      window.removeEventListener('popstate', handleRouteChange),;
    },;
  }, []),;
;
  // Also track when location changes directly via React Router;
  useEffect(() => {;
    // // // console.log('Page view:', location.pathname),;
  }, [location.pathname]),;}
 /** * Custom hook to track page views for analytics purposes * Attaches event listeners to track route changes and logs page views */ // Initial page load handleRouteChange ();
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
