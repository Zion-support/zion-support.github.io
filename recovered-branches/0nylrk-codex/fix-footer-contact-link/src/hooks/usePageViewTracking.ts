<<<<<<< HEAD


import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',

=======
=======
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',


import { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */


export function usePageViewTracking() {


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export function usePageViewTracking() {;
  const location = useLocation();
export function usePageViewTracking() {
  const location = useLocation(),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const location = useLocation();
  useEffect(() => {
    const handleRouteChange = () => {
      // Track page view
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      console && console.log('Page view:', window && window.location.pathname)
    };

      // // // console.log('Page view:', window.location.pathname)
    },

    
<<<<<<< HEAD
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    console && console.log('Page view:', location && location.pathname)
  }, [location && location.pathname])
}



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
    console && console.log('Page view:', location && location.pathname)
  }, [location && location.pathname])
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

  // Also track when location changes directly via React Router;
  useEffect(() => {;
    // // // console.log('Page view:', location.pathname);
  }, [location.pathname]);



}
;
  // Also track when location changes directly via React Router;
  useEffect (() => {
    console.log ('Page view:', location.pathname);
  }, [location.pathname]);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import { useEffect } from 'react',;
import { useLocation } from 'react-router-dom',;
;
      console.log('Page view:', window.location.pathname)
    }
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    // Initial page load
    handleRouteChange();
      // // // console.log('Page view:', window.location.pathname)
    },
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange),
    
    // Initial page load
    handleRouteChange(),
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, []),

  // Also track when location changes directly via React Router
  useEffect(() => {
    // // // console.log('Page view:', location.pathname)
  }, [location.pathname])
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
