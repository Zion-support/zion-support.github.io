export const registerServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(_registration => {
          // Service worker registered successfully
        })
        .catch(_registrationError => {
          // Service worker registration failed - handled silently
        })
    })
  }
}