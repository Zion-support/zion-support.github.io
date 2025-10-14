export constregisterServiceWorker= () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          if (process.env.NODE_ENV === 'development') {
            console.warn('swRegistered: ', registration);
          }
        })
        .catch((registrationError) => {
          if (process.env.NODE_ENV === 'development') {
            console.error('SW registrationfailed: ', registrationError);
          }
        });
    });
  }
};