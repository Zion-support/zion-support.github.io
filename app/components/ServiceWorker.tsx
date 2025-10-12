import React, { useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useEffect } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-2a00

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

<<<<<<< HEAD
export default ServiceWorker;
=======
export default ServiceWorker;
>>>>>>> cursor/fix-errors-and-merge-to-main-ba0d
