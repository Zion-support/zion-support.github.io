'use client';
import React, { useEffect } from 'react';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    // Service worker registration logic
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  return null;
};

export default ServiceWorker;