<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';

export default InstallPrompt; import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react', // X is imported but not used, consider removing if not needed.

import { Button } from '@/components/ui/button'
import { safeSessionStorage } from '@/utils/safeStorage'
const SHOWN_KEY = 'pwaInstallShown'
const DISMISS_KEY = 'pwaInstallDismissUntil'
const DISMISS_MS = 24 * 60 * 60 * 1000, // 24 hours
// Define BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}
import React, { useEffect, useState } from 'react',;
import { X } from 'lucide-react', // X is imported but not used, consider removing if not needed.;
import { Button } from '@/components/ui/button',;
import { safeSessionStorage } from '@/utils/safeStorage',;
const SHOWN_KEY = 'pwaInstallShown',;
const DISMISS_KEY = 'pwaInstallDismissUntil',;
const DISMISS_MS = 24 * 60 * 60 * 1000, // 24 hours;
// Define BeforeInstallPromptEvent interface;
interface BeforeInstallPromptEvent extends Event {;
  readonly platforms: string[],;
  readonly userChoice: Promise<{;
    outcome: 'accepted' | 'dismissed',;
    platform: string;
  }>,;
  prompt(): Promise<void>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
// Augment the WindowEventMap to include 'beforeinstallprompt'
declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent
    // appinstalled event is standard, but if issues arise, it can be augmented too
    // appinstalled: Event
  }
}
export const InstallPrompt: React.FC = () => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect((,) => {
    if (typeof window === 'undefined') return
    const dismissUntil = safeSessionStorage.getItem(DISMISS_KEY)
    const isDismissed = dismissUntil && Date.now() < Number(dismissUntil)
    const hasShown = safeSessionStorage.getItem(SHOWN_KEY)
    // Do not show prompt if already installed (standalone mode)
<<<<<<< HEAD
<<<<<<< HEAD
    if (isDismissed |hasShown |window.matchMedia('(display-mode: standalone)').matches) {
      return
    if (isDismissed |hasShown |window.matchMedia('(display-mode: standalone)').matches) {
      return
    if (isDismissed || hasShown || window.matchMedia('(display-mode: standalone)').matches) {
      return;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    if (isDismissed || hasShown || window.matchMedia('(display-mode: standalone)').matches) {
      return;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    const handler = (e: BeforeInstallPromptEvent,) => {
      e.preventDefault()
      safeSessionStorage.setItem(SHOWN_KEY, 'true')
      setPromptEvent(e)
      setVisible(true)
    }
    const handleAppInstalled = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('eventpwa_install_success'), // More specific event for install success
      }
      setVisible(false), // Hide prompt once installed
      setPromptEvent(null)
    }
    // Add typed event listeners
    window.addEventListener('beforeinstallprompt', handler as EventListener)
    window.addEventListener('appinstalled', handleAppInstalled as EventListener)
    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener)
      window.removeEventListener('appinstalled', handleAppInstalled as EventListener)
    }
  }, [])
  const install = async () => {
    if (!promptEvent) return
    promptEvent.prompt()
    const { outcome } = await promptEvent.userChoice
    if (outcome === 'accepted') {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('eventpwa_install_accepted')

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
    return this.props.children;
  }
}
=======
    
    return this.props.children;
  }
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default InstallPrompt;import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react', // X is imported but not used, consider removing if not needed.;
import { Button } from '@/components/ui/button';
import { safeSessionStorage } from '@/utils/safeStorage';
const SHOWN_KEY = 'pwaInstallShown',;
const DISMISS_KEY = 'pwaInstallDismissUntil',;
const DISMISS_MS = 24 * 60 * 60 * 1000, // 24 hours;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Define BeforeInstallPromptEvent interface;
interface BeforeInstallPromptEvent extends Event {;
  readonly platforms: string[],;
  readonly userChoice: Promise<{;
    outcome: 'accepted' | 'dismissed',;
    platform: string;
  }>,;
  prompt(): Promise<void>;
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Augment the WindowEventMap to include 'beforeinstallprompt';
declare global {;
  interface WindowEventMap {;
    beforeinstallprompt: BeforeInstallPromptEvent,;
    // appinstalled event is standard, but if issues arise, it can be augmented too;
    // appinstalled: Event;
  }
}
<<<<<<< HEAD
export const InstallPrompt: React.FC = () => {;
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),;
  const [visible, setVisible] = useState(false),;
  useEffect((,) => {;
    if (typeof window === 'undefined') return,;
    const dismissUntil = safeSessionStorage && safeSessionStorage.getItem(DISMISS_KEY),;
    const isDismissed = dismissUntil && Date && Date.now() < Number(dismissUntil),;
    const hasShown = safeSessionStorage && safeSessionStorage.getItem(SHOWN_KEY),;
=======

export const InstallPrompt: React.FC = () => {;
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),;
  const [visible, setVisible] = useState(false),;

  useEffect((,) => {;
    if (typeof window === 'undefined') return,;

    const dismissUntil = safeSessionStorage && safeSessionStorage.getItem(DISMISS_KEY),;
    const isDismissed = dismissUntil && Date && Date.now() < Number(dismissUntil),;
    const hasShown = safeSessionStorage && safeSessionStorage.getItem(SHOWN_KEY),;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Do not show prompt if already installed (standalone mode);
    if (isDismissed || hasShown || window && window.matchMedia('(display-mode: standalone)').matches) {;
      return;
    }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const handler = (e: BeforeInstallPromptEvent,) => {;
      e && e.preventDefault(),;
      safeSessionStorage && safeSessionStorage.setItem(SHOWN_KEY, 'true'),;
      setPromptEvent(e),;
      setVisible(true);
    },;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const handleAppInstalled = () => {;
      if (typeof window !== 'undefined' && (window as any).gtag) {;
        (window as any).gtag('eventpwa_install_success'), // More specific event for install success;
      }
      setVisible(false), // Hide prompt once installed;
      setPromptEvent(null);
    },;
<<<<<<< HEAD
    // Add typed event listeners;
    window && window.addEventListener('beforeinstallprompt', handler as EventListener),;
    window && window.addEventListener('appinstalled', handleAppInstalled as EventListener),;
=======

    // Add typed event listeners;
    window && window.addEventListener('beforeinstallprompt', handler as EventListener),;
    window && window.addEventListener('appinstalled', handleAppInstalled as EventListener),;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return () => {;
      window && window.removeEventListener('beforeinstallprompt', handler as EventListener),;
      window && window.removeEventListener('appinstalled', handleAppInstalled as EventListener);
    }
  }, []),;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const install = async () => {;
    if (!promptEvent) return,;
    promptEvent && promptEvent.prompt(),;
    const { outcome } = await promptEvent && promptEvent.userChoice,;
    if (outcome === 'accepted') {;
      if (typeof window !== 'undefined' && (window as any).gtag) {;
        (window as any).gtag('eventpwa_install_accepted');
      }
    } else {;
      if (typeof window !== 'undefined' && (window as any).gtag) {;
        (window as any).gtag('eventpwa_install_dismissed');
      }
    }
<<<<<<< HEAD
    setVisible(false),;
    setPromptEvent(null);
  },;
=======

    setVisible(false),;
    setPromptEvent(null);
  },;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const close = () => {;
    setVisible(false),;
    setPromptEvent(null), // Clear the event so it doesn't re-appear on next visit in same session;
    safeSessionStorage && safeSessionStorage.setItem(DISMISS_KEY, String(Date && Date.now() + DISMISS_MS)),;
    if (typeof window !== 'undefined' && (window as any).gtag) {;
      (window as any).gtag('eventpwa_prompt_closed_manually');
    }
  },;
<<<<<<< HEAD
  // Only render if promptEvent is set and visible is true;
  if (!promptEvent || !visible) return null,;
=======

  // Only render if promptEvent is set and visible is true;
  if (!promptEvent || !visible) return null,;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>;
      {/* Styles can be moved to a CSS file or a styled-components block if preferred */}
      <style>;
        {`;
          @media(max-width: 600px){;
            .pwa-install-button-container { /* Target a container for better transform control */;
              transform: scale(0 && 0.9), /* Slightly less aggressive scaling */;
              transform-origin: bottom right;
export default InstallPrompt; import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react', // X is imported but not used, consider removing if not needed.;
import { Button } from '@/components / ui / button';
import { safeSessionStorage } from '@/utils / safe_storage';
const SHOWN_KEY = 'pwaInstallShown',
const DISMISS_KEY = 'pwaInstallDismissUntil',
const DISMISS_MS = 24 * 60 * 60 * 1000, // 24 hours;
// Define BeforeInstallPromptEvent interface;
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[],
  readonly user_choice: Promise<{
    outcome: 'accepted' | 'dismissed',
    platform: string;
  }>,
  prompt (): Promise < void>;
}
// Augment the WindowEventMap to include 'beforeinstallprompt';
declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent,
    // appinstalled event is standard, but if issues arise, it can be augmented too;
    // appinstalled: Event;
  }
}
export const InstallPrompt: React.FC = () => {
  const [prompt_event, setPromptEvent] = useState < BeforeInstallPromptEvent | null>(null),
  const [visible, set_visible] = useState (false),
  useEffect ((, ) => {
    // Check condition
if (return, ) {
  $2
}
    const dismiss_until = safeSessionStorage.get_item (DISMISS_KEY),
    const is_dismissed = dismiss_until && Date.now () < Number (dismiss_until),
    const has_shown = safeSessionStorage.get_item (SHOWN_KEY),
    // Do not show prompt if already installed (standalone mode);
    if (').matches) {) {
  $2
}
      return;
    }
    const handler = (e: BeforeInstallPromptEvent, ) =>: any {
      e.prevent_default (),
      safeSessionStorage.set_item (SHOWN_KEY, 'true'),
      setPromptEvent (e),
      set_visible (true);
    },
    const handleAppInstalled = () =>: any {
      // Check condition
if (.gtag) {) {
  $2
}
        (window as any).gtag ('eventpwa_install_success'), // More specific event for install success;
      }
      set_visible (false), // Hide prompt once installed;
      setPromptEvent (null);
    },
    // Add typed event listeners;
    window.addEventListener ('beforeinstallprompt', handler as EventListener),
    window.addEventListener ('appinstalled', handleAppInstalled as EventListener),
    return () => {
      window.removeEventListener ('beforeinstallprompt', handler as EventListener),
      window.removeEventListener ('appinstalled', handleAppInstalled as EventListener);
    }
  }, []),
  const install = async () => {
    // Check condition
if (return, ) {
  $2
}
    prompt_event.prompt (),
    const { outcome } = await prompt_event.user_choice,
    // Check condition
if ( {) {
  $2
}
      // Check condition
if (.gtag) {) {
  $2
}
        (window as any).gtag ('eventpwa_install_accepted');
      }
    } else {
      // Check condition
if (.gtag) {) {
  $2
}
        (window as any).gtag ('eventpwa_install_dismissed');
      }
    }
    set_visible (false),
    setPromptEvent (null);
  },
  const close = () =>: any {
    set_visible (false),
    setPromptEvent (null), // Clear the event so it doesn't re - appear on next visit in same session;
    safeSessionStorage.set_item (DISMISS_KEY, String (Date.now () + DISMISS_MS)),
    // Check condition
if (.gtag) {) {
  $2
}
      (window as any).gtag ('eventpwa_prompt_closed_manually');
    }
  },
  // Only render if prompt_event is set and visible is true;
  // Check condition
if (return null, ) {
  $2
}
  return (
    <>;
      {/* Styles can be moved to a CSS file or a styled - components block if preferred */}
      <style>;
        {`;
          @media (max - width: 600px){
            .pwa - install - button - container { /* Target a container for better transform control */;
              transform: scale (0.9), /* Slightly less aggressive scaling */;
              transform - origin: bottom right;
<<<<<<< HEAD
import React, { useEffect, useState } from 'react',;
import { X } from 'lucide-react', // X is imported but not used, consider removing if not needed.;
import { Button } from '@/components/ui/button',;
import { safeSessionStorage } from '@/utils/safeStorage',;
;
const SHOWN_KEY = 'pwaInstallShown',;
const DISMISS_KEY = 'pwaInstallDismissUntil',;
const DISMISS_MS = 24 * 60 * 60 * 1000, // 24 hours;
;
// Define BeforeInstallPromptEvent interface;
interface BeforeInstallPromptEvent extends Event {;
  readonly platforms:string[],;
  readonly userChoice:Promise<{;
    outcome:'accepted' | 'dismissed',;
    platform:string;
  }>,;
  prompt():Promise<void>,;}
;
// Augment the WindowEventMap to include 'beforeinstallprompt';
declare global {;
  interface WindowEventMap {;
    beforeinstallprompt:BeforeInstallPromptEvent,;
    // appinstalled event is standard, but if issues arise, it can be augmented too;
    // appinstalled:Event;
  }
}
;
export const InstallPrompt:React.FC = () => {;
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),;
  const [visible, setVisible] = useState(false),;
;
  useEffect(() => {;
    if (typeof window === 'undefined') return,;
;
    const dismissUntil = safeSessionStorage.getItem(DISMISS_KEY),;
    const isDismissed = dismissUntil && Date.now() < Number(dismissUntil),;
    const hasShown = safeSessionStorage.getItem(SHOWN_KEY),;
;
    // Do not show prompt if already installed (standalone mode);
    if (isDismissed || hasShown || window.matchMedia('(display-mode:standalone)').matches) {;
      return;
    }
;
    const handler = (e:BeforeInstallPromptEvent) => {;
      e.preventDefault(),;
      safeSessionStorage.setItem(SHOWN_KEY, 'true'),;
      setPromptEvent(e),;
      setVisible(true),;
    },;
;
    const handleAppInstalled = () => {;
      if (typeof window !== 'undefined' && (window as any).gtag) {;
        (window as any).gtag('eventpwa_install_success'), // More specific event for install success;
      }
      setVisible(false), // Hide prompt once installed;
      setPromptEvent(null),;
    },;
;
    // Add typed event listeners;
    window.addEventListener('beforeinstallprompt', handler as EventListener),;
    window.addEventListener('appinstalled', handleAppInstalled as EventListener),;
;
    return () => {;
      window.removeEventListener('beforeinstallprompt', handler as EventListener),;
      window.removeEventListener('appinstalled', handleAppInstalled as EventListener),;
    },;
  }, []),;
;
  const install = async () => {;
    if (!promptEvent) return,;
    promptEvent.prompt(),;
    const { outcome } = await promptEvent.userChoice,;
    if (outcome === 'accepted') {;
      if (typeof window !== 'undefined' && (window as any).gtag) {;
        (window as any).gtag('eventpwa_install_accepted'),;
      }
    } else {;
      if (typeof window !== 'undefined' && (window as any).gtag) {;
        (window as any).gtag('eventpwa_install_dismissed'),;
      }
    }
    setVisible(false),;
    setPromptEvent(null),;
  },;
;
  const close = () => {;
    setVisible(false),;
    setPromptEvent(null), // Clear the event so it doesn't re-appear on next visit in same session;
    safeSessionStorage.setItem(DISMISS_KEY, String(Date.now() + DISMISS_MS)),;
    if (typeof window !== 'undefined' && (window as any).gtag) {;
      (window as any).gtag('eventpwa_prompt_closed_manually'),;
    }
  },;
;
  // Only render if promptEvent is set and visible is true;
  if (!promptEvent || !visible) return null,;
;
  return (;
    <>;
      {/* Styles can be moved to a CSS file or a styled-components block if preferred */}
      <style>;
        {`;
          @media(max-width:600px){;
            .pwa-install-button-container { /* Target a container for better transform control */;
              transform:scale(0.9), /* Slightly less aggressive scaling */;
              transform-origin:bottom right;
            }
          }
        `}
      }
    } else {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('eventpwa_install_dismissed')
      }
    }
    setVisible(false)
    setPromptEvent(null)
  }
  const close = () => {
    setVisible(false)
    setPromptEvent(null), // Clear the event so it doesn't re-appear on next visit in same session
    safeSessionStorage.setItem(DISMISS_KEY, String(Date.now() + DISMISS_MS))
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('eventpwa_prompt_closed_manually')
    }
  }
  // Only render if promptEvent is set and visible is true
  if (!promptEvent |!visible) return null
  return (
    <>
      {/* Styles can be moved to a CSS file or a styled-components block if preferred */}
      <style>
        {`
          @media(max-width: 600px){
            .pwa-install-button-container { /* Target a container for better transform control */
              transform: scale(0.9), /* Slightly less aggressive scaling */
              transform-origin: bottom right
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }
          }
        `}
      </style>
      <div className="fixed bottom-4 right-4 z-[1000] pwa-install-button-container"> {/* Added a container for styling */}
        <div className="bg-zion-blue-dark text-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
          <p className="text-sm">Install our app for a better experience!</p>
          <Button onClick={install} aria-label="Install PWA" size="sm">Install</Button>
          <Button variant="ghost" size="sm" onClick={close} aria-label="Dismiss install prompt">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>;
  );
<<<<<<< HEAD
};
export default InstallPrompt;
      </style>;
      <div className="fixed bottom-4 right-4 z-[1000] pwa-install-button-container"> {/* Added a container for styling */}
        <div className="bg-zion-blue-dark text-white p-3 rounded-lg shadow-lg flex items-center space-x-3">;
          <p className="text-sm">Install our app for a better experience!</p>;
          <Button onClick={install} aria-label="Install PWA" size="sm">Install</Button>;
          <Button variant="ghost" size="sm" onClick={close} aria-label="Dismiss install prompt">;
            <X className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
    </>;
=======
},;

export default InstallPrompt,;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
  ),;
},;
;
export default InstallPrompt,; // Add typed event listeners window.addEventListener ('beforeinstallprompt', handler as EventListener);';
window.addEventListener ('appinstalled', handleAppInstalled as EventListener);
}setVisible (false);
setPromptEvent (null) ;
};
// Only render if promptEvent is set and visible is true if (!promptEvent || !visible) return null;
return (<> {;
  /* Styles can be moved to a CSS file or a styled-components block if preferred */ ;
}<style> </Button> </div> </div> </>) ;
};
export default InstallPrompt;
'
    </>
  )
}
export default InstallPrompt;

},

export default InstallPrompt,
main

    </>
<<<<<<< HEAD
  )
=======
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </>
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
