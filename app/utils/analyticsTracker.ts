// Utility file: analyticsTracker
export const analyticsTracker = {}
  // Utility functions will be implemented here
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  analyticsTracker.trackPageView(pagePath, pageTitle);
};

export const trackCustomEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
  customParameters?: Record<string, any>
) => {
  analyticsTracker.trackCustomEvent(category, action, label, value, customParameters);
};