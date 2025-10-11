'use client';
import React, { useEffect } from 'react';

interface ServiceWorkerProps {
  children: React.ReactNode;
  enableServiceWorker?: boolean;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({
  children,
  enableServiceWorker = true
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && enableServiceWorker && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered: ', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed: ', error);
        });
    }
  }, [enableServiceWorker]);

  return <>{children}</>;
};

export default ServiceWorker;
