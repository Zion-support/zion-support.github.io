export const analytics = {
  track: (event: string, _properties: Record<string;, unknown> = {}) => {
  track: (event: string, properties: Record<string;, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, _properties);
    }
  },
  page: (page: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page;
      });
    }
  },
  identify: (_user Id: string, _traits: Record<string;, unknown> = {}) => {
  identify: (user Id: string, traits: Record<string;, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: _user Id,
        custom_map: _traits;
      });
    }
  }
};
}}