export const registerServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((_registration) => {
          // Service worker registered successfully
          // TODO: Implement proper logging service
          // logger.info('Service worker registered', { registration });
        })
        .catch((_registrationError) => {
          // Service worker registration failed
          // TODO: Implement proper error reporting service
          // errorReporter.report(new Error('SW registration failed'), { error: registrationError });
        });
    });
  }
};