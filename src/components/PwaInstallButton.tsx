<<<<<<< HEAD
const in_standalone = window.match_media ('(display - mode:,  standalone)').matches,'
        description: 'Your browser does not support app installation.'}),'
      return;
    const inStandalone = window.matchMedia('(display-mode:,  standalone)').matches,'
        description: 'Your browser does not support app installation.'}),'
      return;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
import React, { useEffect, useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner',;
import { safeStorage } from '@/utils/safeStorage',;
import {logErrorToProduction} from '@/utils/productionLogger',;
const DISMISS_KEY = 'pwaDismissed',;
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000, // 7 days;
<<<<<<< HEAD
export const PwaInstallButton: React.FC = () => {;,
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),;,
=======
export const PwaInstallButton: React.FC = () => {;
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  const [isInstalling, setIsInstalling] = useState(false),;
  // Check dismissal flag and register event listener;
  useEffect(() => {;
    if (typeof window === 'undefined') return,;
    const dismissedAt = safeStorage.getItem(DISMISS_KEY),;
    const recentlyDismissed = dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS,;
<<<<<<< HEAD
    const inStandalone = window.matchMedia('(display-mode:,  standalone)').matches,;
    if (recentlyDismissed ||,  inStandalone) return,;
    const handler = (e:,  BeforeInstallPromptEvent) => {;,
=======
    const inStandalone = window.matchMedia('(display-mode: standalone)').matches,;
    if (recentlyDismissed || inStandalone) return,;
    const handler = (e: BeforeInstallPromptEvent) => {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
      e.preventDefault(),;
      setPromptEvent(e);
    },;
    window.addEventListener('beforeinstallprompt', handler),;
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []),;
<<<<<<< HEAD
  if (!promptEvent || window.matchMedia('(display-mode:,  standalone)').matches) {;',
=======
  if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
    return null;
  }
;
  const onClick = async () => {;
    if (!promptEvent) {;
      toast('Installation not available', {;
        description: 'Your browser does not support app installation.'}),;
      return;
    }
    try {;
      setIsInstalling(true),;
      promptEvent.prompt(),;
      const result = await promptEvent.userChoice,;
      setIsInstalling(false),;
      if (result.outcome === 'accepted') {;
        toast.success('App installed'),;
        setPromptEvent(null);
      } else {;
        toast('Installation dismissed'),;
        safeStorage.setItem(DISMISS_KEY, Date.now().toString()),;
        setPromptEvent(null);
      }
    } catch (err) {;
      setIsInstalling(false),;
      toast('Installation failed', { description: 'Please try again later.' }),;
      logErrorToProduction('PWA install error:', { data: err });
    }
  },
<<<<<<< HEAD
  return (
    <div className="fixed bottom-4 right-4 z-50">"
      <Button onClick={onClick} disabled={isInstalling}>
        {isInstalling && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}"
=======

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button onClick={onClick} disabled={isInstalling}>
        {isInstalling && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
        Install App
      </Button>
    </div>
  )
},
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
export default PwaInstallButton,
