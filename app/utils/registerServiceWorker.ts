export const registerServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          // eslint-disable-next-line no-console
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          // eslint-disable-next-line no-console
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};