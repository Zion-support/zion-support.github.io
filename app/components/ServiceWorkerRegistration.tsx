'use client';
import React, { useEffect, useState } from 'react';

interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void;
  onUpdateInstalled?: () => void;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdateAvailable,
  onUpdateInstalled,
}) => {
  const [isOnline, setIsOnline] = useState(true);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          
          // Listen for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setUpdateAvailable(true);
                  if (onUpdateAvailable) {
                    onUpdateAvailable();
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [onUpdateAvailable]);

  const handleUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          window.location.reload();
        }
      });
    }
  };

  const handleUpdateInstalled = () => {
    setUpdateAvailable(false);
    if (onUpdateInstalled) {
      onUpdateInstalled();
    }
  };

  return (
    <div className="service-worker-status">
      {!isOnline && (
        <div className="offline-indicator">
          You're currently offline. Some features may not be available.
        </div>
      )}
      
      {updateAvailable && (
        <div className="update-available">
          <div className="update-content">
            <p>A new version is available!</p>
            <button onClick={handleUpdate} className="update-button">
              Update Now
            </button>
            <button onClick={handleUpdateInstalled} className="dismiss-button">
              Later
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceWorkerRegistration;