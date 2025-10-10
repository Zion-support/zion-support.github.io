'use client';
import React, { useEffect } from 'react';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          
          // Handle service worker updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update notification
                  if (confirm('New content is available. Would you like to reload?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });

          // Handle service worker errors
          registration.addEventListener('error', (error) => {
            console.error('Service worker registration failed:', error);
          });

          console.log('Service worker registered successfully');
        } catch (error) {
          console.error('Service worker registration failed:', error);
        }
      };

      registerServiceWorker();
    }
  }, []);

  return null;
};

ServiceWorker.displayName = 'ServiceWorker';

export default ServiceWorker;