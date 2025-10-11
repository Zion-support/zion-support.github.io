'use client'
import React, { useEffect } from 'react'
const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          
        })
        .catch((error) => {
          
        })
    }
  }, [])
  return null
}
export default ServiceWorker