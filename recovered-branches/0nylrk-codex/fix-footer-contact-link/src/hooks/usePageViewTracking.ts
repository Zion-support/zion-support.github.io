

import { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
export function usePageViewTracking() {

  const location = null;

  // Also track when location changes directly via React Router
  useEffect(() => {
    console.log('Page view:', location.pathname)
  }, [location.pathname])
}
;