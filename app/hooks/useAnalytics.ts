export const useAnalytics = () => {
  // Analytics hook implementation
  return {
    track: (event: string) => {
      console.log('Analytics event:', event);
    }
  };
};