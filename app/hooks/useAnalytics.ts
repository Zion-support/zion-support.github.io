  const trackEvent = useCallback((eventName: string, parameters: AnalyticsEvent) => {
    ) => {
  return ()
  )
  }
    if (typeof window !== 'undefined' && 'gtag' in window) {}
    }
  }, []);
const trackPageView = useCallback((pagePath: string, pageTitle: string) => {,
    if (typeof window !== 'undefined' && 'gtag' in window) {}(window as Window & {gtag?: (...args: unknown[]) =&gt; void ,}).gtag?.('config', 'GA_MEASUREMENT_ID', {page_path: pagePath,
        page_title: pageTitle,}})
    }
  }, []);
const trackConversion = useCallback((conversionId: string, value?: number) => {if (typeof window !== 'undefined' && 'gtag' in window) {}(window as Window & {gtag?: (...args: unknown[]) =&gt; void ,}).gtag?.('event', 'conversion', {send_to: conversionId,
        value: value,}})
    }
  }, []);
return {
    trackEvent,
    trackPageView,
    trackConversion,
  }
  }
}
