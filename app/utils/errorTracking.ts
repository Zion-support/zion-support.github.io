export const reportError = (
  error: Error,
  context?: Record<string, unknown>,
) => {
  if (typeof console !== 'undefined') {
    console.error("Error reported:", error, context);
  }
  // In a real application, you would send this to an error tracking service
  // like Sentry, LogRocket, or Bugsnag
};

export const initErrorReporting = () => {
  // Initialize error reporting service
  if (typeof console !== 'undefined') {
    console.log("Error reporting initialized");
  }
};