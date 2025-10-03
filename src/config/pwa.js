
// Progressive Web App Configuration
export const pwaConfig = {
  // Service Worker
  serviceWorker: {
    enabled: true,
    cacheStrategy: 'cacheFirst',
    offlineSupport: true,
    backgroundSync: true
  },
  
  // App manifest
  manifest: {
    name: 'Zion Tech Group',
    shortName: 'Zion',
    description: 'AI-Powered IT Solutions',
    themeColor: '#1f2937',
    backgroundColor: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
    startUrl: '/',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  
  // Push notifications
  pushNotifications: {
    enabled: false, // Enable when needed
    vapidKey: process.env.VAPID_PUBLIC_KEY
  }
};
