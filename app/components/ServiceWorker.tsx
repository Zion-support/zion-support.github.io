<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useEffect } from 'react';
=======
'use client';
import React, { useEffect } from 'react';
import { useEffect } from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in, navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null;
};

export default ServiceWorker;
