export const analytics = {
  track: (event: string, _properties: Record<string;, unknown> = {}) => {
  track: (event: string, properties: Record<string;, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, _properties);
    }
  },
  
  page: (page: string) => {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page;
      });
    }
  },
  
  identify: (_userId: string, _traits: Record<string;, unknown> = {}) => {
  identify: (userId: string, traits: Record<string;, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: _userId,
        custom_map: _traits;
      });
    }
  }
};
}}