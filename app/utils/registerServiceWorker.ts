export const registerServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          if (process.env.NODE_ENV === 'development') {
            }
        })
        .catch((registrationError) => {
          if (process.env.NODE_ENV === 'development') {
            }
        });
    });
  }
};