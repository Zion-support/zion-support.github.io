import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, WifiOff, Download, CheckCircle, AlertTriangle } from 'lucide-react';

interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void;
  onUpdateInstalled?: () => void;
  onError?: (error: Error) => void;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdateAvailable,
  onUpdateInstalled,
  onError
}) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isRegistered, setIsRegistered] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      registerServiceWorker();
    }
  }, []);

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      setRegistration(registration);
      setIsRegistered(true);
      
      // Listen for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                setUpdateAvailable(true);
                onUpdateAvailable?.();
              } else {
                onUpdateInstalled?.();
              }
            }
          });
        }
      });

      // Listen for controller change
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      onError?.(error instanceof Error ? error : new Error(errorMessage));
    }
  };

  const handleUpdate = async () => {
    if ('serviceWorker' in navigator) {
      try {
        setIsInstalling(true);
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          await registration.update();
          setUpdateAvailable(false);
          onUpdateInstalled?.();
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        setError(errorMessage);
        onError?.(error instanceof Error ? error : new Error(errorMessage));
      } finally {
        setIsInstalling(false);
      }
    }
  };

  const handleInstall = async () => {
    if ('serviceWorker' in navigator) {
      try {
        setIsInstalling(true);
        const registration = await navigator.serviceWorker.register('/sw.js');
        setIsRegistered(true);
        onUpdateInstalled?.();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        setError(errorMessage);
        onError?.(error instanceof Error ? error : new Error(errorMessage));
      } finally {
        setIsInstalling(false);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Service Worker Registration - Zion Tech Group</title>
        <meta name="description" content="Service worker registration and management." />
      </Helmet>
      
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Service Worker</h3>
          <div className="flex items-center space-x-2">
            {isOnline ? (
              <Wifi className="w-5 h-5 text-green-500" />
            ) : (
              <WifiOff className="w-5 h-5 text-red-500" />
            )}
            <span className={`text-sm font-medium ${
              isOnline ? 'text-green-600' : 'text-red-600'
            }`}>
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {/* Error Display */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-sm font-medium text-red-800">
                  Error: {error}
                </span>
              </div>
            </div>
          )}

          {/* Service Worker Status */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              {isRegistered ? (
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              ) : (
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-2" />
              )}
              <span className="text-sm font-medium text-gray-700">
                Service Worker {isRegistered ? 'Registered' : 'Not Registered'}
              </span>
            </div>
            {!isRegistered && (
              <button
                onClick={handleInstall}
                disabled={isInstalling}
                className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {isInstalling ? 'Installing...' : 'Install'}
              </button>
            )}
          </div>

          {/* Update Available */}
          {updateAvailable && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Download className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium text-yellow-800">
                    Update Available
                  </span>
                </div>
                <button
                  onClick={handleUpdate}
                  disabled={isInstalling}
                  className="px-3 py-1 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700 disabled:opacity-50"
                >
                  {isInstalling ? 'Updating...' : 'Update'}
                </button>
              </div>
            </div>
          )}

          {/* Offline Capabilities */}
          <div className="p-3 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-medium text-blue-900 mb-2">Offline Capabilities</h4>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Cached pages available offline</li>
              <li>• Background sync for forms</li>
              <li>• Push notifications support</li>
              <li>• Automatic updates</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceWorkerRegistration;