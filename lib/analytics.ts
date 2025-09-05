// Analytics utilities
export const _trackEvent = (_event: string, _data?: unknown) => {_if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', _event, _data);}
};

export const _trackPageView = (_url: string) => {_if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', _'GA_MEASUREMENT_ID', _{
      page_path: url, });
  }
};
