// Analytics utility functions
export const trackEvent = (
  event: string,
  properties?: Record<string, unknown>,
) => {
  console.log("Analytics Event:", event, properties);
};
export const trackPageView = (page: string) => {
  console.log("Page View:", page);
};
export const initAnalytics = () => {
  console.log("Analytics initialized");
};
