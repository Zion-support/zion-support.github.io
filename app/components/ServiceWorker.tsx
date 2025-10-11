'use client'
import React, { useEffect } from 'react'

interface ServiceWorkerProps {
  children: React.ReactNode;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  return <>{children}</>;
};

export default ServiceWorker;