
<<<<<<< HEAD
import { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
=======

import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',

=======
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
=======
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
export function usePageViewTracking() {;
  const location = useLocation();
export function usePageViewTracking() {
<<<<<<< HEAD
  const location = useLocation(),
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
      // // // console.log('Page view:', window.location.pathname)
    },

    
    // Listen for route changes
    window && window.addEventListener('popstate', handleRouteChange);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Initial page load

    handleRouteChange(),
    
    return () => {
      window && window.removeEventListener('popstate', handleRouteChange)
    }
  }, []);

  // Also track when location changes directly via React Router
  useEffect(() => {
<<<<<<< HEAD
    // // // console.log('Page view:', location.pathname)
  }, [location.pathname])
}
import { useEffect } from 'react',;
import { useLocation } from 'react-router-dom',;
=======

    console && console.log('Page view:', location && location.pathname)
  }, [location && location.pathname])
}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import {useEffect} from 'react';
import {use_location} from 'react-router-dom';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

  // Also track when location changes directly via React Router;
  useEffect(() => {;
    // // // console.log('Page view:', location.pathname);
  }, [location.pathname]);
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
