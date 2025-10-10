<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
interface BeforeInstallPromptEvent extends Event {}
=======
import React, { useEffect, useState } from 'react;

interface BeforeInstallPromptEvent extends Event {
>>>>>>> origin/main
  prompt(): Promise<void>;

  userChoice: Promise<{ outcome: 'accepted' | 'dismissed }>}

;
<<<<<<< HEAD
const PWAInstaller: React.FC = () => {}
return (
;
const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null></BeforeInstallPromptEvent>
=======

const PWAInstaller: React.FC = () => {
  return (

;

const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>
>>>>>>> origin/main
);

}(null);

  const [showInstallButton, setShowInstallButton] = useState(false);

  const [isInstalled, setIsInstalled] = useState(false);
<<<<<<< HEAD
  useEffect(() => {}
    // Check if app is already installed;
    if (window.matchMedia('(display-mode: standalone)').matches) {}
=======

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)).matches) {
>>>>>>> origin/main
      setIsInstalled(true);

      return}

    // Listen for the beforeinstallprompt event;
<<<<<<< HEAD
const handleBeforeInstallPrompt = (e: Event) => {}
=======

const handleBeforeInstallPrompt = (e: Event) => {;;

>>>>>>> origin/main
      e.preventDefault();

      setDeferredPrompt(e as BeforeInstallPromptEvent);

      setShowInstallButton(true)};
    // Listen for the appinstalled event;
<<<<<<< HEAD
const handleAppInstalled = () => {}
=======

const handleAppInstalled = () => {;;

>>>>>>> origin/main
      setIsInstalled(true);

      setShowInstallButton(false);

      setDeferredPrompt(null)};
<<<<<<< HEAD
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    return () => {}
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled)}}, []);
;
const handleInstallClick = async () => {}
=======

    window.addEventListener(beforeinstallprompt, handleBeforeInstallPrompt);

    window.addEventListener(appinstalled, handleAppInstalled);

    return () => {
      window.removeEventListener(beforeinstallprompt, handleBeforeInstallPrompt);

      window.removeEventListener(appinstalled, handleAppInstalled)}}, []);

;

const handleInstallClick = async () => {;;

>>>>>>> origin/main
    if (!deferredPrompt) return;
    try {}
      await deferredPrompt.prompt();

      const { outcome } = await deferredPrompt.userChoice;
<<<<<<< HEAD
      if (outcome === 'accepted') {}
        // console.log removed for production;
} else {}
        // console.log removed for production;
=======

      if (outcome === 'accepted) {
        // console.log removed for production
} else {
        // console.log removed for production
>>>>>>> origin/main
}

      setDeferredPrompt(null);
<<<<<<< HEAD
      setShowInstallButton(false)} catch (error) {}
      // console.error removed for production;
=======

      setShowInstallButton(false)} catch (error) {
      // console.error removed for production
>>>>>>> origin/main
}

  };
  if (isInstalled || !showInstallButton) {}
    return null}

  return (
<<<<<<< HEAD
    <div className=""fixed bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"></div>"
      <div className=""flex items-start space-x-3"></div>"
        <div className=""flex-shrink-0"></div>"
          <div className=""w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"></div>"
            📱
          </div>
        </div>
        <div className=""flex-1 min-w-0"></div>"
          <h3 className=""text-sm font-semibold mb-1">Install App</h3>"
          <p className=""text-xs text-white/90 mb-3"></p>"
            Install Zion Tech Group app for a better experience with offline access and faster loading.
          </p>
          <div className=""flex space-x-2"></div>"
            <button onClick = "{handleInstallClick}></button>"
              className=""bg-white text-purple-600 text-xs font-medium px-3 py-1.5 rounded hover:bg-white/90 transition-colors duration-200">"
              Install;
=======

    <div className="fixed bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm>
      <div className="flex items-start space-x-3>
        <div className="flex-shrink-0>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center>
            📱
          </div>
        </div>
        
        <div className="flex-1 min-w-0>
          <h3 className="text-sm font-semibold mb-1>Install App</h3>
          <p className="text-xs text-white/90 mb-3>
            Install Zion Tech Group app for a better experience with offline access and faster loading.
          </p>
          
          <div className="flex space-x-2>
            <button
              onClick={handleInstallClick}

              className="bg-white text-purple-600 text-xs font-medium px-3 py-1.5 rounded hover:bg-white/90 transition-colors duration-200
            >
              Install
>>>>>>> origin/main
            </button>
            <button></button>
              onClick={() => setShowInstallButton(false)}
<<<<<<< HEAD
              className=""text-white/70 text-xs px-3 py-1.5 hover:text-white transition-colors duration-200">"
              Maybe later;
=======

              className="text-white/70 text-xs px-3 py-1.5 hover:text-white transition-colors duration-200
            >
              Maybe later
>>>>>>> origin/main
            </button>
          </div>
        </div>
        <button></button>
          onClick={() => setShowInstallButton(false)}
<<<<<<< HEAD
          className=""flex-shrink-0 text-white/70 hover:text-white transition-colors duration-200">"
=======

          className="flex-shrink-0 text-white/70 hover:text-white transition-colors duration-200
        >
>>>>>>> origin/main
          ×
        </button>
      </div>
    </div>
  )};
<<<<<<< HEAD
export default PWAInstaller;
=======

export default PWAInstaller;
>>>>>>> origin/main
