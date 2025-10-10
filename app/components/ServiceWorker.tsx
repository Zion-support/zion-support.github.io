'use client';
import React, { useEffect } from 'react';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered successfully:', registration);

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
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      };

      registerServiceWorker();
    }
  }, []);

  return null;
};

export default ServiceWorker;