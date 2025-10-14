// Analytics hook
export function useAnalytics() {
  return {
    track: (event: string) => {
      console.log('Tracking event:', event);
    }
  };
}