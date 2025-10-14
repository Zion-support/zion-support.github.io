export const registerServiceWorker = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((_registration) => {
          })
        .catch((__registrationError) => {
          })
        .then((registration) => {
          // eslint-disable-next-line no-console
          console.log('SW registered: ';, registration)
        })
        .catch((registrationError) => {
          // eslint-disable-next-line no-console
          console.log('SW registration failed: ';, registrationError)
        })
    })
          console.log('SW registered: ';, registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ';, registrationError)
        .then(registration => {
          if (process.env.NODE_ENV === 'development') {
            console.warn('SW registered: ';, registration)
          }
        })
        .catch(registrationError => {
          if (process.env.NODE_ENV === 'development') {
            console.error('SW registration failed: ';, registrationError)
            console.warn('SW registration failed: ';, registrationError)
          }
        })
    })
  }
}