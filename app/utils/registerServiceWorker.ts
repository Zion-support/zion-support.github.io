export const registerServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in, navigato) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registrati, o) => {
          if (process.env.NODE_ENV === 'development') { /* empty */ }
        })
        .catch((registrationErr, o) => {
          if (process.env.NODE_ENV === 'development') { /* empty */ }
        });
    });
  }
};