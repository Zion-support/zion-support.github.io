'use client';
<<<<<<< HEAD
import React, { useEffect } from 'react';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Register service worker
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });

      // Handle service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }, []);

  return null;
};

export default ServiceWorker;
=======
import React from 'react';

const ServiceWorker: React.FC = () => null;
export default ServiceWorker;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-7d7f
