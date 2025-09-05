import React, {_useEffect, _useState} from 'react';

const _SHOWN_KEY = 'pwaInstallShown';
const _DISMISS_KEY = 'pwaInstallDismissUntil';
const _DISMISS_MS = 24 * 60 * 60 * 1000; // 24 hours

// Define BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {_readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;}>;
  prompt(): Promise<void>;
}

// Augment the WindowEventMap to include 'beforeinstallprompt'
declare global {_interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
    // appinstalled event is standard, _but if issues arise, _it can be augmented too
    // appinstalled: Event;}
}

export const InstallPrompt: React.FC = () => {_const [promptEvent, _setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, _setVisible] = useState(false);

  useEffect__(() => {
    if (typeof window === 'undefined') return;

    const _dismissUntil = safeSessionStorage.getItem(DISMISS_KEY);
    const _isDismissed = dismissUntil && Date.now() < Number(dismissUntil);
    const _hasShown = safeSessionStorage.getItem(SHOWN_KEY);

    // Do not show prompt if already installed (standalone mode)
    if (isDismissed || hasShown || window.matchMedia('(display-mode: standalone)').matches) {
      return;}

    const _handler = (_e: BeforeInstallPromptEvent) => {_e.preventDefault();
      safeSessionStorage.setItem(SHOWN_KEY, _'true');
      setPromptEvent(e);
      setVisible(true);};

    const _handleAppInstalled = () => {_if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', _'pwa_install_success'); // More specific event for install success}
      setVisible(false); // Hide prompt once installed
      setPromptEvent(null);
    };

    // Add typed event listeners
    window.addEventListener('beforeinstallprompt', handler as EventListener);
    window.addEventListener('appinstalled', handleAppInstalled as EventListener);

    return () => {_window.removeEventListener('beforeinstallprompt', _handler as EventListener);
      window.removeEventListener('appinstalled', _handleAppInstalled as EventListener);};
  }, []);

  const _install = async () => {_if (!promptEvent) return;
    promptEvent.prompt();
    const { outcome} = await promptEvent.userChoice;
    if (outcome === 'accepted') {_if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', _'pwa_install_accepted');}
    } else {_if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', _'pwa_install_dismissed');}
    }
    setVisible(false);
    setPromptEvent(null);
  };

  const _close = () => {_setVisible(false);
    setPromptEvent(null); // Clear the event so it doesn't re-appear on next visit in same session
    safeSessionStorage.setItem(DISMISS_KEY, _String(Date.now() + DISMISS_MS));
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', _'pwa_prompt_closed_manually');}
  };

  // Only render if promptEvent is set and visible is true
  if (!promptEvent || !visible) return null;

  return (
    <>
      {_/* Styles can be moved to a CSS file or a styled-components block if preferred */}
      <style>
        {_`
          @media(max-width:600px){
            .pwa-install-button-container { /* Target a container for better transform control */
              transform: scale(0.9); /* Slightly less aggressive scaling */
              transform-origin: bottom right;}
          }
        `}
      </style>
      <div className="fixed bottom-4 right-4 z-[1000] pwa-install-button-container"> {_/* Added a container for styling */}
        <div className="bg-zion-blue-dark text-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
          <p className="text-sm">Install our app for a better experience!</p>
          <Button onClick={_install} aria-label="Install PWA" size="sm">Install</Button>
          <Button variant="ghost" size="sm" onClick={_close} aria-label="Dismiss install prompt">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default InstallPrompt;
