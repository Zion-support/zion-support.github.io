
<<<<<<< HEAD
import { useRef, useEffect } from 'react',
import { useAnalytics } from '@/context/AnalyticsContext',
export function useTrackUserBehavior(componentName: string) {
  const { trackEvent } = useAnalytics(),
  const componentRef = useRef<HTMLDivElement>(null),

  useEffect(() => {
    const component = componentRef.current,
    if (!component) return,

    // Track button clicks
    const trackButtonClicks = (e: Event) => {
      const target = e.target as HTMLElement,
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.tagName === 'BUTTON' ? target : target.closest('button'),
        const buttonId = button?.id || '',
        const buttonText = button?.textContent || '',
        
        trackEvent('button_click', {
          component: componentName,
          elementId: buttonId,
          text: buttonText
        })
=======

export function useTrackUserBehavior(_componentName: string) {_const { trackEvent} = useAnalytics();
  const _componentRef = useRef<HTMLDivElement>(null);

  useEffect__(() => {_const _component = componentRef.current;
    if (!component) return;

    // Track button clicks
    const _trackButtonClicks = (_e: Event) => {
      const _target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const _button = target.tagName === 'BUTTON' ? target : target.closest('button');
        const _buttonId = button?.id || '';
        const _buttonText = button?.textContent || '';
        
        trackEvent('button_click', _{
          component: componentName, _elementId: buttonId, _text: buttonText});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    },

    // Track form submissions
<<<<<<< HEAD
    const trackFormSubmits = (e: Event) => {
      const target = e.target as HTMLFormElement,
      if (target.tagName === 'FORM') {
        const formId = target.id || '',
        
        trackEvent('form_submit', {
          component: componentName,
          elementId: formId
        })
=======
    const _trackFormSubmits = (_e: Event) => {_const _target = e.target as HTMLFormElement;
      if (target.tagName === 'FORM') {
        const _formId = target.id || '';
        
        trackEvent('form_submit', _{
          component: componentName, _elementId: formId});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    },

    component.addEventListener('click', trackButtonClicks),
    component.addEventListener('submit', trackFormSubmits, true),

<<<<<<< HEAD
    return () => {
      component.removeEventListener('click', trackButtonClicks),
      component.removeEventListener('submit', trackFormSubmits, true)
    }
  }, [trackEvent, componentName]),
=======
    return () => {_component.removeEventListener('click', _trackButtonClicks);
      component.removeEventListener('submit', _trackFormSubmits, _true);};
  }, [trackEvent, componentName]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return componentRef
}
