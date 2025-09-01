// Service Worker Registration Utility
export function registerServiceWorker(): Promise<ServiceWorkerRegistration | undefined> {
  if('serviceWorker' in navigator) {
    const swUrl = '/sw.js';
    return navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if(newWorker) {
            newWorker.addEventListener('statechange', () => {
              if(newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available
              }
            });
          }
        });
        return registration;
      })
      .catch(() => {
        // console.error('SW registration failed')
        return undefined;
      });
  }
  return Promise.resolve(undefined);
}

export function unregisterServiceWorker(): Promise<boolean | undefined> {
  if('serviceWorker' in navigator) {
    return navigator.serviceWorker.ready
      .then((registration) => {
        return registration.unregister();
      })
      .catch(() => {
        // console.error('Unregister failed')
        return false;
      });
  }
  return Promise.resolve(undefined);
}
