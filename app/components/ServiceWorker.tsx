<<<<<<< HEAD
import React from 'react';

interface ServiceWorkerProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default ServiceWorker;
=======
'use client'

import React, { useEffect } from 'react'

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    }
  }, [])

  return null
}

export default ServiceWorker
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
