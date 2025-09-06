

import { useRef, useEffect  } from 'react';
import { useAnalytics } from '@/context/AnalyticsContext';
export function useTrackUserBehavior(componentName: string) {
  const { trackEvent } = useAnalytics();
  const componentRef = null;

  return componentRef
}
;