export const registerServiceWorker = () => {
  if (typeof window !== &apos;undefined&apos; && &apos;serviceWorker&apos; in navigator) {
    window.addEventListener(&apos;load&apos;, () => {
      navigator.serviceWorker.register(&apos;/sw.js&apos;)
        .then((_registration) => {
          })
        .catch((__registrationError) => {});
        .then((registration) => {// eslint-disable-next-line no-console
          console.log(&apos;SW registered: &apos;, registration)})
        .catch((registrationError) => {// eslint-disable-next-line no-console
          console.log(&apos;SW registration failed: &apos;, registrationError)});
    });
          console.log(&apos;SW registered: &apos;, registration)
        })
        .catch((registrationError) => {
          console.log(&apos;SW registration failed: &apos;, registrationError)
        .then(registration => {
          if (process.env.NODE_ENV === &apos;development&apos;) {
            console.warn(&apos;SW registered: &apos;, registration)
          }
        })
        .catch(registrationError => {
          if (process.env.NODE_ENV === &apos;development&apos;) {
            console.error(&apos;SW registration failed: &apos;, registrationError)
            console.warn(&apos;SW registration failed: &apos;, registrationError)
          }
        })
    })
  }
}