'use client';

import React, { memo, useEffect } from 'react';

const ServiceWorkerRegistration: React.FC = memo(() => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => {
          // // console.log('Service Worker registered successfully');
        })
        .catch(() => {
          // // console.warn('Service Worker registration failed');
        });
    }
  }, []);

  return null;
});

ServiceWorkerRegistration.displayName = 'ServiceWorkerRegistration';

export default ServiceWorkerRegistration;
