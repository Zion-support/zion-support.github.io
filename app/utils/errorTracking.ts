export const reportError = (
  error: Error,
  context?: Record<string, unknown>,)
) => {
  console.error("Error reported:", error, context);
  // In a real application, you would send this to an error tracking service;
  // like Sentry, LogRocket, or Bugsnag;
};
