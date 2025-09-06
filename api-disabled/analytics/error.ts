export default function errorAnalytics() {
  // Error analytics functionality would go here
  return {
    trackError: (error: Error) => {
      console.error('Error tracked:', error);
    }
  };
}