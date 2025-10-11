<<<<<<< HEAD
'use client'
import React, { useEffect } from 'react'

const ServiceWorker: React.FC = () => {
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
  useEffect(() => {
    if (typeof window !== 'undefined' && enableServiceWorker && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
<<<<<<< HEAD
          console.log('Service Worker registered successfully:', registration)
=======
          console.log('Service Worker registered:', registration);
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
<<<<<<< HEAD
  }, [])

  return null
}

export default ServiceWorker
=======
  }, [enableServiceWorker]);

  return <>{children}</>;
};

export default ServiceWorker;
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
