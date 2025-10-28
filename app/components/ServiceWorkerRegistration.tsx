'use client';

import React, { memo, useEffect } from 'react';

const ServiceWorkerRegistration: React.FC = memo(() => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          
    console.log('Service Worker registered successfully:', registration);
        })
        .catch((_error) => {
          
    console.log('Service Worker registration failed:', _error);
        });

      // Handle service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }, []);

  return null;
});

ServiceWorkerRegistration.displayName = 'ServiceWorkerRegistration';

export default ServiceWorkerRegistration;