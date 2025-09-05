<<<<<<< HEAD
import React, { useEffect, useState } from 'react',
import { Button } from '@/components/ui/button',
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner',
import { safeStorage } from '@/utils/safeStorage',
import {logErrorToProduction} from '@/utils/productionLogger',
const DISMISS_KEY = 'pwaDismissed',
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000, // 7 days

export const PwaInstallButton: React.FC = () => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),
  const [isInstalling, setIsInstalling] = useState(false),

  // Check dismissal flag and register event listener
  useEffect(() => {
    if (typeof window === 'undefined') return,

    const dismissedAt = safeStorage.getItem(DISMISS_KEY),
    const recentlyDismissed = dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS,
    const inStandalone = window.matchMedia('(display-mode: standalone)').matches,
=======
import React, {_useEffect, _useState} from 'react';


const _DISMISS_KEY = 'pwaDismissed';
const _DISMISS_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export const PwaInstallButton: React.FC = () => {_const [promptEvent, _setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalling, _setIsInstalling] = useState(false);

  // Check dismissal flag and register event listener
  useEffect__(() => {
    if (typeof window === 'undefined') return;

    const _dismissedAt = safeStorage.getItem(DISMISS_KEY);
    const _recentlyDismissed = dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS;
    const _inStandalone = window.matchMedia('(display-mode: standalone)').matches;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    if (recentlyDismissed || inStandalone) return,

<<<<<<< HEAD
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault(),
      setPromptEvent(e)
    },
=======
    const _handler = (_e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setPromptEvent(e);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    window.addEventListener('beforeinstallprompt', handler),
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, []),

<<<<<<< HEAD
  if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {
    return null
  }

  const onClick = async () => {
    if (!promptEvent) {
      toast('Installation not available', {
        description: 'Your browser does not support app installation.'}),
      return
    }
    try {
      setIsInstalling(true),
      promptEvent.prompt(),
      const result = await promptEvent.userChoice,
      setIsInstalling(false),
      if (result.outcome === 'accepted') {
        toast.success('App installed'),
        setPromptEvent(null)
      } else {
        toast('Installation dismissed'),
        safeStorage.setItem(DISMISS_KEY, Date.now().toString()),
        setPromptEvent(null)
      }
    } catch (err) {
      setIsInstalling(false),
      toast('Installation failed', { description: 'Please try again later.' }),
      logErrorToProduction('PWA install error:', { data: err })
=======
  if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {_return null;}

  const _onClick = async () => {_if (!promptEvent) {
      toast('Installation not available', _{
        description: 'Your browser does not support app installation.'});
      return;
    }
    try {_setIsInstalling(true);
      promptEvent.prompt();
      const _result = await promptEvent.userChoice;
      setIsInstalling(false);
      if (result.outcome === 'accepted') {
        toast.success('App installed');
        setPromptEvent(null);} else {_toast('Installation dismissed');
        safeStorage.setItem(DISMISS_KEY, _Date.now().toString());
        setPromptEvent(null);}
    } catch (err) {_setIsInstalling(false);
      toast('Installation failed', _{ description: 'Please try again later.'});
      logErrorToProduction('PWA install error:', {_data: err});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  return (
<<<<<<< HEAD
    <div className=&quot;fixed bottom-4 right-4 z-50&quot;>
      <Button onClick={onClick} disabled={isInstalling}>
        {isInstalling && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
=======
    <div className="fixed bottom-4 right-4 z-50">
      <Button onClick={_onClick} disabled={_isInstalling}>
        {_isInstalling && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        Install App
      </Button>
    </div>
  )
},

export default PwaInstallButton,
