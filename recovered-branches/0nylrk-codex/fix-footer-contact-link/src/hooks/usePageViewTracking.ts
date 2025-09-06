
<<<<<<< HEAD
import { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
=======
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
export function usePageViewTracking() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  const location = useLocation(),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

  const location = useLocation();
  useEffect(() => {
    const handleRouteChange = () => {
      // Track page view
      console.log('Page view:', window.location.pathname)
    }
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
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
    // // // console.log('Page view:', location.pathname)
  }, [location.pathname])
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======

  // Also track when location changes directly via React Router;
  useEffect(() => {;
    // // // console.log('Page view:', location.pathname);
  }, [location.pathname]);
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
;
  // Also track when location changes directly via React Router;
  useEffect (() => {
    console.log ('Page view:', location.pathname);
  }, [location.pathname]);
}
