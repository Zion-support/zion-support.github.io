'use client';

import React, { useEffect, memo } from 'react';

const ServiceWorkerRegistration: React.FC = memo(() => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
    // Empty block
  })
        .catch((error) => {
    // Empty block
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