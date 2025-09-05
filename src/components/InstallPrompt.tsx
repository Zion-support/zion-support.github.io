<<<<<<< HEAD
import React, { useEffect, useState } from 'react',
import { X } from 'lucide-react', // X is imported but not used, consider removing if not needed.
import { Button } from '@/components/ui/button',
import { safeSessionStorage } from '@/utils/safeStorage',
const SHOWN_KEY = 'pwaInstallShown',
const DISMISS_KEY = 'pwaInstallDismissUntil',
const DISMISS_MS = 24 * 60 * 60 * 1000, // 24 hours

// Define BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[],
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed',
    platform: string
  }>,
  prompt(): Promise<void>
}

// Augment the WindowEventMap to include 'beforeinstallprompt'
declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent,
    // appinstalled event is standard, but if issues arise, it can be augmented too
    // appinstalled: Event
  }
}

export const InstallPrompt: React.FC = () => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),
  const [visible, setVisible] = useState(false),

  useEffect(() => {
    if (typeof window === 'undefined') return,

    const dismissUntil = safeSessionStorage.getItem(DISMISS_KEY),
    const isDismissed = dismissUntil && Date.now() < Number(dismissUntil),
    const hasShown = safeSessionStorage.getItem(SHOWN_KEY),

    // Do not show prompt if already installed (standalone mode)
    if (isDismissed || hasShown || window.matchMedia('(display-mode: standalone)').matches) {
      return
    }

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault(),
      safeSessionStorage.setItem(SHOWN_KEY, 'true'),
      setPromptEvent(e),
      setVisible(true)
    },

    const handleAppInstalled = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('eventpwa_install_success'), // More specific event for install success
      }
      setVisible(false), // Hide prompt once installed
      setPromptEvent(null)
    },
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Add typed event listeners
    window.addEventListener('beforeinstallprompt', handler as EventListener),
    window.addEventListener('appinstalled', handleAppInstalled as EventListener),

<<<<<<< HEAD
    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener),
      window.removeEventListener('appinstalled', handleAppInstalled as EventListener)
    }
  }, []),

  const install = async () => {
    if (!promptEvent) return,
    promptEvent.prompt(),
    const { outcome } = await promptEvent.userChoice,
    if (outcome === 'accepted') {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('eventpwa_install_accepted')
      }
    } else {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('eventpwa_install_dismissed')
      }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    setVisible(false),
    setPromptEvent(null)
  },

<<<<<<< HEAD
  const close = () => {
    setVisible(false),
    setPromptEvent(null), // Clear the event so it doesn't re-appear on next visit in same session
    safeSessionStorage.setItem(DISMISS_KEY, String(Date.now() + DISMISS_MS)),
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('eventpwa_prompt_closed_manually')
    }
  },
=======
  const _close = () => {_setVisible(false);
    setPromptEvent(null); // Clear the event so it doesn't re-appear on next visit in same session
    safeSessionStorage.setItem(DISMISS_KEY, _String(Date.now() + DISMISS_MS));
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', _'pwa_prompt_closed_manually');}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Only render if promptEvent is set and visible is true
  if (!promptEvent || !visible) return null,

  return (
    <>
      {_/* Styles can be moved to a CSS file or a styled-components block if preferred */}
      <style>
<<<<<<< HEAD
        {`
          @media(max-width: 600px){
            .pwa-install-button-container { /* Target a container for better transform control */
              transform: scale(0.9), /* Slightly less aggressive scaling */
              transform-origin: bottom right
            }
          }
        `}
      </style>
      <div className=&quot;fixed bottom-4 right-4 z-[1000] pwa-install-button-container&quot;> {/* Added a container for styling */}
        <div className=&quot;bg-zion-blue-dark text-white p-3 rounded-lg shadow-lg flex items-center space-x-3&quot;>
          <p className=&quot;text-sm&quot;>Install our app for a better experience!</p>
          <Button onClick={install} aria-label=&quot;Install PWA&quot; size=&quot;sm&quot;>Install</Button>
          <Button variant=&quot;ghost&quot; size=&quot;sm&quot; onClick={close} aria-label=&quot;Dismiss install prompt&quot;>
            <X className=&quot;h-4 w-4&quot; />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Button>
        </div>
      </div>
    </>
  )
},

export default InstallPrompt,
