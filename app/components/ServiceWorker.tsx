'use client';
import React, { useEffect } from 'react';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          // Service Worker registered successfully
        })
        .catch((error) => {
          // Service Worker registration failed
        });
    }
  }, []);

  return null;
};

export default ServiceWorker;
