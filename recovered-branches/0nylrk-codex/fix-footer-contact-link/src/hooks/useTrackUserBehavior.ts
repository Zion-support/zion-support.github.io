import { useRef, useEffect  } from 'react';
import { useAnalytics } from '@/context/AnalyticsContext';
export function useTrackUserBehavior(componentName: string) {
  const { trackEvent } = useAnalytics($2);
  const componentRef = $2;
  useEffect(() => {
    const component = $2;
    if (!component) return,

    // Track button clicks
    const trackButtonClicks = $2;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.tagName === 'BUTTON' ? target : target.closest($2);
        const buttonId = $2;
        const buttonText = $2;
        trackEvent('button_click', {
          component: componentName,
          elementId: buttonId,
          text: buttonText})
      }
    },

    // Track form submissions
    const trackFormSubmits = $2;
      if (target.tagName = $2;
        trackEvent('form_submit', {
          component: componentName,
          elementId: formId})
      }
    },

    component.addEventListener($2);
    component.addEventListener($2);
    return () => {
      component.removeEventListener($2);
      component.removeEventListener('submit', trackFormSubmits, true)
    }
  }, [trackEvent, componentName]),

  return componentRef
}
}
;