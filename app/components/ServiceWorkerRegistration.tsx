import { useEffect } from 'react';

const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {,
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {

            // Check for updates;
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New content is available, notify user;
                    if(confirm('New content is available. Reload to update?') {
const ServiceWorkerRegistration: React.FC = () => {}
  useEffect(() => {}
    if ('serviceWorker' in navigator) {}
      window.addEventListener('load', () => {}
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {}
            // Check for updates
            registration.addEventListener('updatefound', () => {}
              const newWorker = registration.installing;
              if (newWorker) {}
                newWorker.addEventListener('statechange', () => {}
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {}
                    // New content is available, notify user
                    if(confirm('New content is available. Reload to update?') {}
                      window.location.reload();
                    }
                  }

              }

          })
          .catch((registrationError) => {


      // Listen for service worker messages;
      navigator.serviceWorker.addEventListener('message', (event) => {}
      // Listen for service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {}
        if (event.data && event.data.type === 'CACHE_UPDATED') {}
        }

    }
  }, []);

  return null;
};

export default ServiceWorkerRegistration;
