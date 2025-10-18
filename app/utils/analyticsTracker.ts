// Analytics tracker utilities

export function analyticsTracker() {
  return {
    trackPageView: (page: string) => {
      console.log(`Page view tracked: ${page}`);
    },
    trackClick: (element: string, location: string) => {
      console.log(`Click tracked: ${element} at ${location}`);
    },
    trackConversion: (goal: string, value?: number) => {
      console.log(`Conversion tracked: ${goal}`, value ? `Value: ${value}` : '');
    }
  };
}
