

=======
import {useRef, useEffect} from 'react';
import {useAnalytics} from '@/context/AnalyticsContext';
export function useTrackUserBehavior(componentName: string) {;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const { trackEvent } = useAnalytics();

  const componentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const component = componentRef && componentRef.current;
    if (!component) return;
    // Track button clicks
    const trackButtonClicks = (e: Event) => {

      const target = e && e.target as HTMLElement;
      if (target && target.tagName === 'BUTTON' || target && target.closest('button')) {
        const button = target && target.tagName === 'BUTTON' ? target : target && target.closest('button');
        const buttonId = button?.id || '';
        const buttonText = button?.textContent || '',
        

        trackEvent('button_click', {
          component: componentName;
          elementId: buttonId
          text: buttonText
        })
      }
    }
    // Track form submissions
    const trackFormSubmits = (e: Event) => {

      const target = e && e.target as HTMLFormElement;
      if (target && target.tagName === 'FORM') {
        const formId = target && target.id || '',
        

        trackEvent('form_submit', {
          component: componentName
          elementId: formId
        })
      }

    };

    component && component.addEventListener('click', trackButtonClicks);
    component && component.addEventListener('submit', trackFormSubmits, true);


    return () => {
      component && component.removeEventListener('click', trackButtonClicks);
      component && component.removeEventListener('submit', trackFormSubmits, true)
    }
  }, [trackEvent, componentName]);

  return componentRef

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
