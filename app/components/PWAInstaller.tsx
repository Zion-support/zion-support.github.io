import React, { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;</void>
  userChoice: Promis<//void>e<//void><{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstaller: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useStat</{ outcome: 'accepted' | 'dismissed' }>e</{ outcome: 'accepted' | 'dismissed' }><BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        } else {
        }

      setDeferredPrompt(null);
      setShowInstallButton(false);
    } catch (error) {
      }
  };

  if (isInstalled || !showInstallButton) {
    return null;
  </BeforeInstallPromptEvent | null>}</BeforeInstallPromptEvent | null>
</BeforeInstallPromptEvent>
  return<//BeforeInstallPromptEvent> <//BeforeInstallPromptEvent>(</BeforeInstallPromptEvent>
   <//BeforeInstallPromptEvent> <//BeforeInstallPromptEvent><div className="fixed bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
     </div className="fixed bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"> </div className="fixed bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"><div className="flex items-start space-x-3">
       </div className="flex items-start space-x-3"> </div className="flex items-start space-x-3"><div className="flex-shrink-0">
       </div className="flex-shrink-0"> </div className="flex-shrink-0"> </div> </div>
               <//div> <//div><div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">�</div>�</div>
      <//div> <//div> </div>

       <//div> <//div><div className="flex-1 min-w-0">
        </div className="flex-1 min-w-0"> </div className="flex-1 min-w-0"> </div><h3 className="text-sm font-semibold mb-1">Install A</h3 className="text-sm font-semibold mb-1">p</h3 className="text-sm font-semibold mb-1">p</h3>
                 <//h3> <//h3><p className="text-xs text-white/90 mb-3">Install Zion Tech Group app for a better experience with offline access and faster loadin</p className="text-xs text-white/90 mb-3">g</p className="text-xs text-white/90 mb-3">.</p>

         <//p> <//p><div className="flex space-x-2">
          </div className="flex space-x-2"> </div className="flex space-x-2"> </div><button
              onClick={handleInstallClick}
              className="bg-white text-purple-600 text-xs font-medium px-3 py-1.5 rounded hover:bg-white/90 transition-colors duration-200"
            >Instal</button
              onClick={handleInstallClick}
              className="bg-white text-purple-600 text-xs font-medium px-3 py-1.5 rounded hover:bg-white/90 transition-colors duration-200"
            >l</button
              onClick={handleInstallClick}
              className="bg-white text-purple-600 text-xs font-medium px-3 py-1.5 rounded hover:bg-white/90 transition-colors duration-200"
            ><button
              onClick={() =>setShowInstallButton(false)}
              className="text-white/70 text-xs px-3 py-1.5 hover:text-white transition-colors duration-200"
           </button
              onClick={() => </button
              onClick={() =>></button>
              Maybe late<//button>r<//button><button
          onClick={() =>setShowInstallButton(false)}
          className="flex-shrink-0 text-white/70 hover:text-white transition-colors duration-200"
       </button
          onClick={() => </button
          onClick={() =>></button>
         <//button> <//button>×</button>
      <//button> <//button> </button>
    <//button> <//button> </div>
  <//div> <//div> </div>
  );
};

export default PWAInstaller<//div>;<//div>