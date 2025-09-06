<<<<<<< HEAD

import { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
export function usePageViewTracking() {

  const location = useLocation();
  useEffect(() => {
    const handleRouteChange = () => {
      // Track page view
<<<<<<< HEAD
      console.log('Page view:', window.location.pathname)
    }
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
=======
      console && console.log('Page view:', window && window.location.pathname)
    };
    
    // Listen for route changes
    window && window.addEventListener('popstate', handleRouteChange);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Initial page load
    handleRouteChange();
    return () => {
      window && window.removeEventListener('popstate', handleRouteChange)
    }
  }, []);

  // Also track when location changes directly via React Router
  useEffect(() => {
<<<<<<< HEAD
    console.log('Page view:', location.pathname)
  }, [location.pathname])
}
=======
    console && console.log('Page view:', location && location.pathname)
  }, [location && location.pathname])
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
