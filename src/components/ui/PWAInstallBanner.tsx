import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../../hooks/useServiceWorker';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, installApp } = usePWAInstall();
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if user has dismissed the banner before
  React.useEffect(() => {
    const dismissed = localStorage.getItem('pwa-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
    }
  }, []);

  if (!isInstallable || isDismissed || !isVisible) {
    return null;
  }

  const handleInstall = async () => {
    try {
      await installApp();
      setIsVisible(false);
    } catch (error) {
      console.error('Failed to install app:', error);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('pwa-banner-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium">
                    Install Zion Tech Group App
                  </p>
                  <p className="text-xs text-cyan-100">
                    Get quick access and work offline
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleInstall}
                  className="flex items-center space-x-2 px-4 py-2 bg-white text-cyan-600 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Install</span>
                </button>
                
                <button
                  onClick={handleDismiss}
                  className="p-2 text-cyan-100 hover:text-white transition-colors duration-200"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const PWAUpdateBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');

  React.useEffect(() => {
    // Listen for service worker updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setUpdateMessage('App updated! Refreshing...');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-0 left-0 right-0 z-50 bg-green-600 text-white text-center py-3 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm font-medium">
          {updateMessage || 'New version available! Click to update.'}
        </p>
      </div>
    </motion.div>
  );
};