'use client'
import React, { useEffect } from 'react'
interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void;
  onUpdateInstalled?: () => void;
  onError?: (_error: Error) => void;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdateAvailable,
  onUpdateInstalled,
  onError: _onError = () => {},
}) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return
    }

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // New content is available
                  onUpdateAvailable?.()
                } else {
                  // Content is cached for the first time
                  onUpdateInstalled?.()
                }
              }
            })
          }
        })
        // Handle controller change
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          window.location.reload()
        })
      } catch (error) {
        _onError?.(error as Error);
      }
    };

    registerServiceWorker();
  }, [onUpdateAvailable, onUpdateInstalled, _onError]);

  return null;
};

export default ServiceWorkerRegistration;