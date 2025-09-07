import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react', // X is imported but not used, consider removing if not needed.
import { Button } from '@/components/ui/button';
import { safeSessionStorage } from '@/utils/safeStorage';
const SHOWN_KEY = 'pwaInstallShown';
const DISMISS_KEY = 'pwaInstallDismissUntil';
const DISMISS_MS = 24 * 60 * 60 * 1000, // 24 hours

// Define BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[],
  readonly userChoice: Promise<{,
    outcome: 'accepted' | 'dismissed', platform: string,
  }>,
  prompt(): Promise<void>
}

// Augment the WindowEventMap to include 'beforeinstallprompt'
declare global {
  interface WindowEventMap {;
    beforeinstallprompt: BeforeInstallPromptEvent;
    // appinstalled event is standard, but if issues arise, it can be augmented too
    // appinstalled: Event,
  }
}

export const InstallPrompt: React.FC = () => {;
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),
  const [visible, setVisible] = useState($2);
  useEffect(() => {
    if (typeof window = $2;
    const dismissUntil = safeSessionStorage.getItem($2);
    const isDismissed = dismissUntil && Date.now() < Number($2);
    const hasShown = safeSessionStorage.getItem($2);
    // Do not show prompt if already installed (standalone mode)

    }

    const handler = (e: BeforeInstallPromptEvent) => {,
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

    // Add typed event listeners
    window.addEventListener($2);
    window.addEventListener($2);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener),
      window.removeEventListener('appinstalled', handleAppInstalled as EventListener);
    }
  }, []),

  const install = $2;
    promptEvent.prompt($2);
    const { outcome } = await promptEvent.userChoice,
    if (outcome === 'accepted') {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('eventpwa_install_accepted')

  return (
    <>;
      {/* Styles can be moved to a CSS file or a styled-components block if preferred */}

      <div className="fixed bottom - 4 right - 4 z-[1000] pwa - install - button - container"> {/* Added a container for styling */}
        <div className="bg - zion - blue - dark text - white p - 3 rounded - lg shadow - lg flex items - center space - x-3">;
          <p className="text - sm">Install our app for a better experience!</p>;
          <Button on_click={install} aria - label="Install PWA" size="sm">Install</Button>;
          <Button variant="ghost" size="sm" on_click={close} aria - label="Dismiss install prompt">;
            <X className="h - 4 w - 4" />;
          </Button>;
        </div>;
      </div>;
    </>);
},
export default InstallPrompt,
;

