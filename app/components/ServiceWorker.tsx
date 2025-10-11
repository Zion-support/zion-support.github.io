'use client';
import React from 'react';

const ServiceWorker: React.FC = () => {
<<<<<<< HEAD
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  return null;
};

export default ServiceWorker;