export const analytics = {
<<<<<<< HEAD
=======
  track: (event: string, _properties: Record<string, unknown> = {}) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
  track: (event: string, properties: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties)
    }
  },
  
  page: (page: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page
<<<<<<< HEAD
      })
    }
  },
  
  identify: (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      })
=======
      });
    }
  },
  
  identify: (_userId: string, _traits: Record<string, unknown> = {}) => {
  identify: (userId: string, traits: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
<<<<<<< HEAD
        user_id: _userId;,
        custom_map: _traits
=======
        user_id: _userId,
        custom_map: _traits;
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
      });
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
    }
  }
}