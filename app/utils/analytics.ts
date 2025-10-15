// Global gtag function declaration
declare global { 
  interface Window {
    gtag: (...args: unknown[]) => void; 
  }
}
export const analytics = { track: (event: string, properties: Record<string, unknown> = { }) => { if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties); }
  },
  page: (page: string) => { if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page });
    }
  }
};

export default analytics;