
import { useRef, useEffect } from 'react';
import { useAnalytics } from '@/context/AnalyticsContext';
;
export function useTrackUserBehavior(componentName:string) {;
  const { trackEvent } = useAnalytics();
  const componentRef = useRef<HTMLDivElement>(null);
;
  useEffect(() => {;
    const component = componentRef.current;
    if (!component) return;
;
    // Track button clicks;
    const trackButtonClicks = (e:Event) => {;
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button')) {;
        const button = target.tagName === 'BUTTON' ? target :target.closest('button');
        const buttonId = button?.id || '';
        const buttonText = button?.textContent || '';
        ;
        trackEvent('button_click', {;
          component:componentName;
          elementId:buttonId;
          text:buttonText;
        });
      }
    };
;
    // Track form submissions;
    const trackFormSubmits = (e:Event) => {;
      const target = e.target as HTMLFormElement;
      if (target.tagName === 'FORM') {;
        const formId = target.id || '';
        ;
        trackEvent('form_submit', {;
          component:componentName;
          elementId:formId;
        });
      }
    };
;
    component.addEventListener('click', trackButtonClicks);
    component.addEventListener('submit', trackFormSubmits, true);
;
    return () => {;
      component.removeEventListener('click', trackButtonClicks);
      component.removeEventListener('submit', trackFormSubmits, true);
    };
  }, [trackEvent, componentName]);
;
  return componentRef; 
}
};
// Track form submissions 
}
};
component.addEventListener ('click', trackButtonClicks);
component.addEventListener ('submit', trackFormSubmits, true);
return componentRef 
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}