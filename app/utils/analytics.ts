export const analytics = {
  track: (event: string, _properties: Record<string, unknown> = {}) => {
  track: (event: string, properties: Record<string, unknown> = {}) => {if (typeof window !== &apos;undefined&apos; && window.gtag) {;
      window.gtag(&apos;event&apos;, event, _properties)}
  },
  
  page: (page: string) => {
    if (typeof window !== &apos;undefined&apos; && window.gtag) {
      window.gtag(&apos;config&apos;, &apos;GA_MEASUREMENT_ID&apos;, {
        page_path: page
      });
    }
  },
  
  identify: (_userId: string, _traits: Record<string, unknown> = {}) => {
  identify: (userId: string, traits: Record<string, unknown> = {}) => {
    if (typeof window !== &apos;undefined&apos; && window.gtag) {
      window.gtag(&apos;config&apos;, &apos;GA_MEASUREMENT_ID&apos;, {
        user_id: _userId,
        custom_map: _traits
      });
    }
  }
};
}}