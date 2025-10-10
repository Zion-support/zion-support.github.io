'use client';
import React, { useEffect, memo } from 'react';

const ServiceWorker: React.FC = memo(() => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        
        if (process.env.NODE_ENV === 'development') {
          console.log('Service Worker registered:', registration);
        }

        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, prompt user to refresh
                if (confirm('New version available! Refresh to update?')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.log('Service Worker registration failed:', error);
        }
      }
    };

    registerServiceWorker();
  }, []);

  return null;
});

ServiceWorker.displayName = 'ServiceWorker';

export default ServiceWorker;