export default function errorReporting() {
  // Error reporting functionality would go here
  return {
    reportError: (error: Error) => {
      console.error('Error reported:', error);
    }
  };
}