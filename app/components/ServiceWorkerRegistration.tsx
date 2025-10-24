'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            // Service worker registered successfully
            if (process.env.NODE_ENV === 'development') {
              // Development logging can be added here if needed
            }
          })
          .catch((registrationError) => {
            // Service worker registration failed
            if (process.env.NODE_ENV === 'development') {
              // Development error logging can be added here if needed
            }
          });
      });
    }
  }, []);

  return null;
}