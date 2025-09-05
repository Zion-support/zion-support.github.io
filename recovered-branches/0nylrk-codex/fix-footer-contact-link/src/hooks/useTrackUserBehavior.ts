

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
      }
    };

    // Track form submissions
    const _trackFormSubmits = (_e: Event) => {_const _target = e.target as HTMLFormElement;
      if (target.tagName === 'FORM') {
        const _formId = target.id || '';
        
        trackEvent('form_submit', _{
          component: componentName, _elementId: formId});
      }
    };

    component.addEventListener('click', trackButtonClicks);
    component.addEventListener('submit', trackFormSubmits, true);

    return () => {_component.removeEventListener('click', _trackButtonClicks);
      component.removeEventListener('submit', _trackFormSubmits, _true);};
  }, [trackEvent, componentName]);

  return componentRef;
}
