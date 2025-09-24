// Console error toast handler
<<<<<<< HEAD
=======
const originalConsoleError = console.error;

console.error = function(...args) {
  // Call the original console.error
  originalConsoleError.apply(console, args);
  
  // Add any additional error handling here
  // For example, sending errors to a logging service
  if (typeof window !== 'undefined' && window.reportError) {
    window.reportError(args.join(' '));
  }
};

export default {};
>>>>>>> cursor/create-and-deploy-new-content-c963
