'use client'
;
    }
  }
;
    }
  }
;
  const trackConversion = (conversionType: string, value?: number) => {;
    if (typeof window !== 'undefined' && window.gtag) {;
      window.gtag('event', 'conversion', {;
        send_to: `${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}/${conversionType}`,
        value: value || 0,
        currency: 'USD'
      });
    }
  }
;
  );
}
;
// Analytics tracking hooks;
export const usePageTracking = (pageName: string, pagePath: string) => {
  const { trackPageView } = useAnalytics();
;
  useEffect(() => {;
    trackPageView(pageName, pagePath);
  }, [pageName, pagePath, trackPageView]);
}
;
export const useEventTracking = () => {
  const { trackEvent } = useAnalytics();
;
  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('button_click', {;
      category: 'engagement',
      label: buttonName,
      location: location
    });
  }
;
  const trackFormSubmit = (formName: string, success: boolean) => {
    trackEvent('form_submit', {;
      category: 'conversion',
      label: formName,
      success: success
    });
  }
;
  const trackServiceView = (serviceName: string, category: string) => {
    trackEvent('service_view', {;
      category: 'engagement',
      label: serviceName,
      service_category: category
    });
  }
;
  const trackPhoneClick = (phoneNumber: string, location: string) => {
    trackEvent('phone_click', {;
      category: 'conversion',
      label: phoneNumber,
      location: location
    });
  }
;
  const trackEmailClick = (email: string, location: string) => {
    trackEvent('email_click', {;
      category: 'conversion',
      label: email,
      location: location
    });
  }
;
  return {;
    trackButtonClick,;
    trackFormSubmit,;
    trackServiceView,;
    trackPhoneClick,;
    trackEmailClick;
  }
}