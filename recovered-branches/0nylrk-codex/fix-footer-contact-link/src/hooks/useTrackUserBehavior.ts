
import { useRef, useEffect  } from 'react';
import { useAnalytics } from '@/context/AnalyticsContext';
export function useTrackUserBehavior(componentName: string) {
import {useRef, useEffect} from 'react';
import {useAnalytics} from '@/context/AnalyticsContext';
export function useTrackUserBehavior(componentName: string) {;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
;
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { useRef, useEffect } from 'react',;
import { useAnalytics } from '@/context/AnalyticsContext',;
export function useTrackUserBehavior(componentName: string) {;
  const { trackEvent } = useAnalytics(),;
  const componentRef = useRef<HTMLDivElement>(null),;
  useEffect(() => {;
    const component = componentRef.current,;
    if (!component) return,;
    // Track button clicks;
    const trackButtonClicks = (e: Event) => {;
      const target = e.target as HTMLElement,;
      if (target.tagName === 'BUTTON' || target.closest('button')) {;
        const button = target.tagName === 'BUTTON' ? target : target.closest('button'),;
        const buttonId = button?.id || '',;
        const buttonText = button?.textContent || '',;
        trackEvent('button_click', {;
          component: componentName,;
          elementId: buttonId,;
          text: buttonText;
        });
      }
    },;
    // Track form submissions;
    const trackFormSubmits = (e: Event) => {;
      const target = e.target as HTMLFormElement,;
      if (target.tagName === 'FORM') {;
        const formId = target.id || '',;
        trackEvent('form_submit', {;
          component: componentName,;
          elementId: formId;
        });
      }
    },;
    component.addEventListener('click', trackButtonClicks),;
    component.addEventListener('submit', trackFormSubmits, true),;
    return () => {;
      component.removeEventListener('click', trackButtonClicks);
      component.removeEventListener('submit', trackFormSubmits, true);
    }
  }, [trackEvent, componentName]);
  return componentRef;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
