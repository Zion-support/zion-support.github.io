<<<<<<< HEAD
// ErrorTracking utility functions

export const ErrorTracking = {
  // Add your utility functions here
=======
export const reportError = (;
error: Error,;
context?: Record<string, unknown>,
) =>{;
console.error("Error reported:", error, context);
  // In a real application, you would send this to an error tracking service
  // like Sentry, LogRocket, or Bugsnag
};
export const initErrorReporting = () =>{
  // Initialize error reporting service:;
console.log("Error reporting initialized");
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
};

  </div>