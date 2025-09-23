import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, X, CheckCircle, AlertTriangle, Info } from 'lucide-react';

interface PWAUpdaterProps {
  autoCheck?: boolean;
  checkInterval?: number;
  showUpdatePrompt?: boolean;
}

const PWAUpdater: React.FC<PWAUpdaterProps> = ({
  autoCheck = true,
  checkInterval = 300000, // 5 minutes
  showUpdatePrompt = true
}) => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [updateComplete, setUpdateComplete] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if service worker is supported
    if ('serviceWorker' in navigator) {
      // Register service worker
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          setRegistration(reg);
          console.log('Service Worker registered successfully:', reg);
          
          // Check for updates
          if (autoCheck) {
            checkForUpdates(reg);
          }
          
          // Listen for updates
          reg.addEventListener('updatefound', () => {
            console.log('Service Worker update found');
            const newWorker = reg.installing;
            
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setUpdateAvailable(true);
                  if (showUpdatePrompt) {
                    setShowPrompt(true);
                  }
                }
              });
            }
          });
          
          // Listen for controller change (update applied)
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log('Service Worker controller changed - update applied');
            setUpdateComplete(true);
            setUpdateAvailable(false);
            setUpdating(false);
            
            // Hide prompt after a delay
            setTimeout(() => {
              setShowPrompt(false);
              setUpdateComplete(false);
            }, 3000);
          });
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, [autoCheck, showUpdatePrompt]);

  useEffect(() => {
    if (autoCheck && registration) {
      const interval = setInterval(() => {
        checkForUpdates(registration);
      }, checkInterval);
      
      return () => clearInterval(interval);
    }
  }, [autoCheck, checkInterval, registration]);

  const checkForUpdates = async (reg: ServiceWorkerRegistration) => {
    try {
      await reg.update();
      console.log('Service Worker update check completed');
    } catch (error) {
      console.error('Service Worker update check failed:', error);
    }
  };

  const applyUpdate = async () => {
    if (!registration) return;
    
    setUpdating(true);
    setShowPrompt(false);
    
    try {
      // Send message to service worker to skip waiting
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
      
      // Reload the page to apply the update
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error('Failed to apply update:', error);
      setUpdating(false);
      setShowPrompt(true);
    }
  };

  const dismissUpdate = () => {
    setShowPrompt(false);
    // Auto-show again after 1 hour
    setTimeout(() => {
      if (updateAvailable) {
        setShowPrompt(true);
      }
    }, 3600000);
  };

  // Don't render anything if no update is available
  if (!updateAvailable && !updating && !updateComplete) {
    return null;
  }

  return (
    <>
      {/* Update Prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-6 w-96 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 z-50 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">Update Available</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    A new version of Zion Tech Group is available. Update now to get the latest features and improvements.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={applyUpdate}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
                    >
                      Update Now
                    </button>
                    <button
                      onClick={dismissUpdate}
                      className="px-4 py-2 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                      Later
                    </button>
                  </div>
                </div>
                <button
                  onClick={dismissUpdate}
                  className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Update Progress */}
      <AnimatePresence>
        {updating && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-6 w-96 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 z-50 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <RefreshCw className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">Updating...</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Applying the latest update. Please wait...
                  </p>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Update Complete */}
      <AnimatePresence>
        {updateComplete && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-6 w-96 bg-slate-900/95 backdrop-blur-xl border border-green-400/20 rounded-2xl shadow-2xl shadow-green-400/10 z-50 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">Update Complete!</h3>
                  <p className="text-gray-300 text-sm">
                    Zion Tech Group has been updated to the latest version. Enjoy the new features!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Update Indicator */}
      {updateAvailable && !showPrompt && !updating && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-2xl shadow-cyan-500/25 z-40 cursor-pointer hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110"
          onClick={() => setShowPrompt(true)}
          title="Update available - Click to update"
        >
          <div className="w-full h-full flex items-center justify-center">
            <RefreshCw className="w-6 h-6 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PWAUpdater;