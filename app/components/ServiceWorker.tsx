'use client'
import React, { useEffect } from 'react'
const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
<<<<<<< HEAD
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
=======
          console.log('Service Worker registered successfully:', registration)
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error)
        })
>>>>>>> origin/main
    }
  }, [])
  return null
}
export default ServiceWorker