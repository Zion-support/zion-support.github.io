'use client'
import React, { useEffect } from 'react'
const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
        })
        .catch((error) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('Service Worker registration failed:', error)
          }
        })
    }
