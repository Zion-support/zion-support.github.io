<<<<<<< HEAD
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',


<<<<<<< HEAD
import { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
=======

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
=======
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
<<<<<<< HEAD


export function usePageViewTracking() {


<<<<<<< HEAD
export function usePageViewTracking() {;
  const location = useLocation();
export function usePageViewTracking() {
  const location = useLocation(),
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function usePageViewTracking() {;
  const location = useLocation();
export function usePageViewTracking() {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const location = useLocation();
  useEffect(() => {
    const handleRouteChange = () => {
      // Track page view
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      console && console.log('Page view:', window && window.location.pathname)
    };

=======
      console.log('Page view:', window.location.pathname)
    }
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    // Initial page load
    handleRouteChange();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // // // console.log('Page view:', window.location.pathname)
    },

    
<<<<<<< HEAD
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    console && console.log('Page view:', location && location.pathname)
  }, [location && location.pathname])
}

<<<<<<< HEAD


    console && console.log('Page view:', location && location.pathname)
  }, [location && location.pathname])
}
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
  // Also track when location changes directly via React Router;
  useEffect (() => {
    console.log ('Page view:', location.pathname);
  }, [location.pathname]);
}
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
