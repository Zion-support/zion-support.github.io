'use client';
import React, { useEffect } from 'react';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered successfully:', registration);
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