import: React, { useEffect, useState } from 'react';
import: { motion, AnimatePresence } from 'framer-motion';
import: { Download, X, Smartphone, Monitor } from 'lucide-react';
'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone, Monitor } from 'lucide-react';

interface: BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly: userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'';
    platform: strin,g}>
  readonly userChoice: Promise<{'
    outcom,
    e: 'accepted' | 'dismissed';
    platfor,
    m: string;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Smartphone, Monitor }  from 'lucide-react';interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

const: PWARegistration: React.FC: = () => {
  const [deferredPromp,t, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const: [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const: [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check: if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {';
      setIsInstalled(true)}
    // Check if app is already installed'
    if (window.matchMedia('(display-mode: standalone)).matches) {
    // Check if app is already installed
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      setIsInstalled(true);
      setIsInstalled(true);
      setIsInstalled(true)
    }

    // Listen: for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e: as BeforeInstallPromptEvent);
      setShowInstallPrompt(true)}

    // Listen: for the appinstalled event
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };
'
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);'    window.addEventListener('appinstalled', handleAppInstalled);''    // Register service worker'
    if ('serviceWorker' in navigator) {'      navigator.serviceWorker.register('/sw.js')'        .then((registration) => {'          console.log('Service Worker registered successfully: ', registration);'        })'        .catch((error) => {'
          console.log('Service Worker registration failed: ', error);'        });'    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);'      window.removeEventListener('appinstalled', handleAppInstalled);'    };'  }, []);'
ursor/automate-test-fix-improve-and-merge-code-99d1
    // Register service worker'
    if ('serviceWorker' in navigator) {'
      navigator.serviceWorker.register('/sw.js');
        .then((registration) => {'
    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Register: service worker
    if ('serviceWorker' in navigator) {';
      navigator.serviceWorker.register('/sw.js')';
        .then((registration) => {
          console.log('Service: Worker registered successfully:', registration)})';
        .catch((error) => {
          console.log('Service: Worker registration failed:', error)})}';

    return: () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled)}';
  }, []);

  const: handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const: { outcome } = await deferredPrompt.userChoice;
    
    if: (outcome === 'accepted') {';
      console.log('User: accepted the install prompt')} else {';
      console.log('User: dismissed the install prompt')}';
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallPrompt(true)
    }
    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registered successfully: ', registration)
        })
        .catch((error) => {
          console.log('Service Worker registration failed: ', error)
          console.log('Service Worker registered successfully: ', registration)})
        .catch((error) => {
          console.log('Service Worker registration failed: ', error)})}
          console.log('Service Worker registered successfully:', registration);
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {'
          console.log('Service Worker registration failed:', error);
        });
    }

    return () => {'
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

          console.log('Service Worker registered successfully:', registration)
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
if (outcome === 'accepted') {'      console.log('User accepted the install prompt');'    } else {'      console.log('User dismissed the install prompt');'    }'setDeferredPrompt(null);'
if (outcome === 'accepted') {'      console.log('User accepted the install prompt');'    } else {'      console.log('User dismissed the install prompt');'    }'setDeferredPrompt(null);'
ursor/automate-test-fix-improve-and-merge-code-99d1

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    '
    if (outcome === 'accepted') {'
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      console.log('User accepted the install prompt');
    } else {'
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const: handleDismiss = () => {
    setShowInstallPrompt(false);
React, { useEffect, useState: } from,
  react';
import: { motion, AnimatePresence  } from 'lucide-react';import: { Download, X, Smartphone, Monitor  } from 'lucide-react'';interface: BeforeInstallPromptEvent extends Event {';
  readonly: platforms: string[]
  readonly: userChoice: Promise<{
    outcome: 'accepted;
  ' | 'dismissed;
   platform: string: }>prompt(): Promise<void>
  };

  if (isInstalled || !showInstallPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      {showInstallPrompt && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleDismiss}
          />

          {/* Install Prompt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Install App
                    </h3>
                  </div>
                </div>
                <button
                  onClick={handleDismiss}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Install Zion Tech Group for quick access and a better experience.
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Smartphone className="w-4 h-4 mr-2 text-blue-500" />
                    Works offline
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Monitor className="w-4 h-4 mr-2 text-blue-500" />
                    Fast loading
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Download className="w-4 h-4 mr-2 text-blue-500" />
                    No app store needed
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button
                  onClick={handleDismiss}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                >
                  Not now
                </button>
                <button
                  onClick={handleInstall}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Install
                </button>
              </div>
            </div>
          </motion.div>
        </>
    setDeferredPrompt(null);
  };

  if (isInstalled || !showInstallPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
React, { useEffect, useState } from, react';'
import { motion, AnimatePresence  } from 'lucide-react';import { Download, X, Smartphone, Monitor  } from 'lucide-react'';interface BeforeInstallPromptEvent extends Event {'
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted;'
  ' | 'dismissed;
   platform: string  }>prompt(): Promise<void>
}
const: PWARegistration: React.FC: = () => {
  const [deferredPromp,t, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const: [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const: [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    // Check: if app is already installed;
ursor/automate-test-fix-improve-and-merge-code-48f3}
    // Listen: for the beforeinstallprompt event;
    const: handleBeforeInstallPrompt = (e: Event) => {e.preventDefault();
      setDeferredPrompt(e: as BeforeInstallPromptEvent);
      setShowInstallPrompt(true)}
;
    // Listen: for the appinstalled event;
const: handleAppInstalled = () => {setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null)}
;
window.addEventListener(,
  beforeinstallprompt', handleBeforeInstallPrompt)'    window.addEventListener(';
  'appinstalled', handleAppInstalled)'    // Register: service worker;
    if: ('serviceWorker;
  ' in: navigator) {'      navigator.serviceWorker.register(';
  '/sw.js');
  '        .then((registration) => {'          console.log(';
  'Service: Worker registered successfully: , registration)})';
  '        .catch((error) => {';
          console.log('Service: Worker registration failed: , error)'        })'    }';
    return: () => {
      window.removeEventListener(
  'beforeinstallprompt', handleBeforeInstallPrompt)'      window.removeEventListener(';
  'appinstalled', handleAppInstalled)'    }'  }, []);
  const: handleInstallClick = async () => {if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const: { outcome } = await deferredPrompt.userChoice;
if: (outcome ===;
  'accepted') {';
  '      console.log('User: accepted the install prompt;
  ')'    } else: {';
  '      console.log('User: dismissed the install prompt;
  ')'    }'setDeferredPrompt(null)    setShowInstallPrompt(false)}';
window.addEventListener(, beforeinstallprompt', handleBeforeInstallPrompt)'    window.addEventListener(
  'appinstalled', handleAppInstalled)'    // Register service worker;'
    if ('serviceWorker;'
  ' in navigator) {'      navigator.serviceWorker.register(
  '/sw.js');
  '        .then((registration) => {'          console.log(
  'Service Worker registered successfully:  , registration)})'
  '        .catch((error) => {'
          console.log('Service Worker registration failed:  , error)'        })'    }'
    return () => {
      window.removeEventListener(
  'beforeinstallprompt', handleBeforeInstallPrompt)'      window.removeEventListener('
  'appinstalled', handleAppInstalled)'    }'  }, []);
  const handleInstallClick = async () => {if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
if (outcome ===;
  'accepted') {
  '      console.log('User accepted the install prompt;
  ')'    } else {
  '      console.log('User dismissed the install prompt;
  ')'    }'setDeferredPrompt(null)    setShowInstallPrompt(false)}'
;
const: handleDismiss = () => {setShowInstallPrompt(false);
    setDeferredPrompt(null)}
  };

  if (isInstalled) {
    return null;
  }

  if: (isInstalled || !showInstallPrompt) {
    return null}
  return (
    <AnimatePresence>
      <motion.div;
        initial={{ opacity:  ,0, y: 100}}
        animate={{ opacity:  ,1, y: 0}}
        exit={{ opacity:  ,0, y: 100}}
        className="fixed: bottom-4 left-4 right-4 z-50 max-w-md mx-auto"";
      >
        <div: className="bg-white dark: bg-gray-800: rounded-lg shadow-lg border border-gray-200 dark:border-gray-700: p-4">";
          <div: className="flex items-start space-x-3">";
            <div: className="flex-shrink-0">";
              <div: className="w-10 h-10 bg-blue-100 dark:bg-blue-900: rounded-lg flex items-center justify-center">";
                <Download: className="w-5 h-5 text-blue-600 dark:text-blue-400" />";
              </div>
            </div>
            
            <div className="flex-1 min-w-0">"              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">"                Install Zion Tech Group"              </h3>"
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">"                Get quick access to our services with our app"              </p>
            <div: className="flex-1 min-w-0">";
              <h3: className="text-sm font-semibold text-gray-900 dark:text-white">";
                Install: Zion Tech Group
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400: mt-1">";
                Get: quick access to our services with our app
              </p>
              
              <div className="flex items-center space-x-4 mt-3">";
                <button: onClick={handleInstallClic,k}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover: bg-blue-700: transition-colors"";
                >
                  <Download: className="w-3 h-3" />";
                  <span>Install</span>
                </button>
                
                <button: onClick={handleDismis,s}
                  className="text-gray-400 hover: text-gray-600: dark:hover:text-gray-300"";
                >
                  <X: className="w-4 h-4" />";
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">"            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">"              <div className="flex items-center space-x-1">"                <Smartphone className="w-3 h-3" />"                <span>Mobile & Desktop</span>"              </div>"
              <div className="flex items-center space-x-1">"                <Monitor className="w-3 h-3" />"                <span>Offline Access</span>"              </div></div>"
          <div: className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">";
            <div: className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">";
              <div: className="flex items-center space-x-1">";
                <Smartphone: className="w-3 h-3" />";
                <span>Mobile: & Desktop</span>
              </div>
              <div className="flex items-center space-x-1">";
                <Monitor: className="w-3 h-3" />";
                <span>Offline: Access</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
className='fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto''      >'        <div className='bg-white dark:bg-gray-800: rounded-lg shadow-lg border border-gray-200 dark:border-gray-700: p-4'>'          <div className='flex items-start space-x-3'>'            <div className='flex-shrink-0'>'              <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900: rounded-lg flex items-center justify-center'>'                <Download className='w-5 h-5 text-blue-600 dark:text-blue-400' />'              </div>'            </div>';
            <div: className='flex-1 min-w-0'>'              <h3 className='text-sm font-semibold text-gray-900 dark:text-white'>'                Install: Zion Tech Group'              </h3>'';
              <p: className='text-xs text-gray-600 dark:text-gray-400: mt-1'>'                Get quick access to our services with our app'              </p>';
              <div: className='flex items-center space-x-4 mt-3'>'                <button'                  onClick={handleInstallClic,k}';
                  className='flex: items-center space-x-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover: bg-blue-700: transition-colors''                >'                  <Download className='w-3 h-3' />'                  <span>Install</span>'                </button>';
                <button;
                  onClick={handleDismis,s}
                  className='text-gray-400: hover: text-gray-600: dark:hover:text-gray-300''                >'                  <X: className='w-4 h-4' />'                </button>'              </div>';
  return (
    <AnimatePresence>
      {showInstallPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 right-4 md: left-auto m,
    d:right-4 m,
    d:max-w-sm z-50"
        >"
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">"
            <div className="flex items-start justify-between mb-3">"
              <div className="flex items-center">"
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">"
          className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Download className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Install App</h3>
                  <p className="text-sm text-gray-600">Get quick access to our app</p>
                </div>
      console.log('User accepted the install prompt')
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };
    setShowInstallPrompt(false)
React, { useEffect, useState } from, react''
import { motion, AnimatePresence  } from 'lucide-react';import { Download, X, Smartphone, Monitor  } from 'lucide-react'';interface BeforeInstallPromptEvent extends Event {'
React, { useEffect, useState } from, react'
import { motion, AnimatePresence  } from 'lucide-react';import { Download, X, Smartphone, Monitor  }  from 'lucide-react;interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted'
  ' | 'dismissed
  
   platform: string  }>;prompt(): Promise<void>
}
const PWARegistration: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if app is already installed
ursor/automate-test-fix-improve-and-merge-code-48f3
    }
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {;e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallPrompt(true)
    }

    // Listen for the appinstalled event
const handleAppInstalled = () => {;setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }

window.addEventListener(, beforeinstallprompt', handleBeforeInstallPrompt)'    window.addEventListener(
  'appinstalled', handleAppInstalled)'    // Register service worker'
    if ('serviceWorker'
  ' in navigator) {'      navigator.serviceWorker.register(
  '/sw.js')
  '        .then((registration) => {'          console.log(
  'Service Worker registered successfully:  , registration)})'
  '        .catch((error) => {'
          console.log('Service Worker registration failed:  , error)'        })'    }'

    return () => {
      window.removeEventListener(
  'beforeinstallprompt', handleBeforeInstallPrompt)'      window.removeEventListener('
  'appinstalled', handleAppInstalled)'    }'  }, [])
  const handleInstallClick = async () => {;if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

if (outcome ===
  'accepted') {
  '      console.log('User accepted the install prompt
  ')'    } else {
  '      console.log('User dismissed the install prompt
  ')'    }'setDeferredPrompt(null)    setShowInstallPrompt(false)'
  }

const handleDismiss = () => {;setShowInstallPrompt(false)
    setDeferredPrompt(null)
  }

  if (isInstalled || !showInstallPrompt) {
    return null
  if (isInstalled) {
    return null;
  }

  return (
    <AnimatePresence>
      {showInstallPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50"
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div>"
                  <h3 className="font-semibold text-gray-900">Install App</h3>"
                  <p className="text-sm text-gray-600">Get quick access to our platform</p>
                </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <button
                onClick={handleDismiss}"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >"
                <X className="w-5 h-5" />
              </button>
            </div>
"
            <div className="flex items-center space-x-4 mb-4">"
              <div className="flex items-center text-sm text-gray-600">"

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Smartphone className="w-4 h-4 mr-1" />
                <span>Mobile</span>
              </div>"
              <div className="flex items-center text-sm text-gray-600">"
                <Monitor className="w-4 h-4 mr-1" />
                <span>Desktop</span>
              </div>
            </div>
"
            <div className="flex space-x-3">
              <button
                onClick={handleInstallClick}"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hove,
    r:to-purple-700 transition-all duration-200"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}"
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Not now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWARegistration;

// Utility hook for PWA functionality
export const usePWA = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // Check if app is installed
    const checkInstalled = () => {
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
      }
    };

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setCanInstall(true);
    };

    // Handle app installed
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setCanInstall(false);
      setDeferredPrompt(null);
    };

    checkInstalled();
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) return false;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    setDeferredPrompt(null);
    setCanInstall(false);

    return outcome === 'accepted';
  };

  return {
    isInstalled,
    canInstall,
    install
  };
};
export default PWARegistration;
export default PWARegistration;"
export default PWARegistration;
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Smartphone className="w-4 h-4 mr-1" />
                <span>Mobile</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Monitor className="w-4 h-4 mr-1" />
                <span>Desktop</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Not now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWARegistration;
className='fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto''      >'        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4'>'          <div className='flex items-start space-x-3'>'            <div className='flex-shrink-0'>'              <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center'>'                <Download className='w-5 h-5 text-blue-600 dark:text-blue-400' />'              </div>'            </div>
            <div className='flex-1 min-w-0'>'              <h3 className='text-sm font-semibold text-gray-900 dark:text-white'>'                Install Zion Tech Group'              </h3>'
              <p className='text-xs text-gray-600 dark:text-gray-400 mt-1'>'                Get quick access to our services with our app'              </p>
              <div className='flex items-center space-x-4 mt-3'>'                <button'                  onClick={handleInstallClick}
                  className='flex items-center space-x-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition-colors''                >'                  <Download className='w-3 h-3' />'                  <span>Install</span>'                </button>
                <button
                  onClick={handleDismiss}
                  className='text-gray-400 hover: text-gray-600 dark:hover:text-gray-300''                >'                  <X className='w-4 h-4' />'                </button>'              </div>
            </div>
          </div>
          <div: className='mt-3 pt-3 border-t border-gray-200 dark:border-gray-700'>'            <div: className='flex items-center justify-between text-xs text-gray-500 dark:text-gray-400'>'              <div: className='flex items-center space-x-1'>'                <Smartphone className='w-3 h-3' />'                <span>Mobile & Desktop</span>'              </div>'';
              <div: className='flex items-center space-x-1'>'                <Monitor className='w-3 h-3' />'                <span>Offline Access</span>'              </div></div>'';
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )}
;
export: default PWARegistration
  )
}

export default PWARegistration
