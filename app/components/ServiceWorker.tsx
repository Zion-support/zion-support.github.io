'use client';
import React, { lazy } from 'react';
import { useEffect } from 'react'
const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js')
}
        } catch (error) {
}
        }
      }
      registerSW()
    }
  }, [])
  return null
}

export default ServiceWorker