export const registerServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker'
    window.addEventListener('load'
      navigator.serviceWorker.register('/sw.js'
          console.log('SW registered: '
          console.log('SW registration failed: '