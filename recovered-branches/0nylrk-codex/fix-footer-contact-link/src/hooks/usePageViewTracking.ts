
import { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react',
import { useLocation } from 'react-router-dom',
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
=======


export function usePageViewTracking() {
  const location = useLocation(),
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  const location = useLocation();
  useEffect(() => {
    const handleRouteChange = () => {
      // Track page view

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    // Initial page load

    handleRouteChange(),
    


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
