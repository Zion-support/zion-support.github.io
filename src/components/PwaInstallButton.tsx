<<<<<<< HEAD
    const inStandalone = window.matchMedia('(display-mode: standalone)').matches,

=======
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { safeStorage } from '@/utils/safeStorage';
import {logErrorToProduction} from '@/utils/productionLogger';
const DISMISS_KEY = 'pwaDismissed',
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000, // 7 days

export const PwaInstallButton: React.FC = () => {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null),
  const [isInstalling, setIsInstalling] = useState(false),

  // Check dismissal flag and register event listener
  useEffect((,) => {
    if (typeof window === 'undefined') return,

    const dismissedAt = safeStorage.getItem(DISMISS_KEY),
    const recentlyDismissed = dismissedAt && Date.now() - Number(dismissedAt) < DISMISS_MS,
    const inStandalone = window.matchMedia('(display-mode: standalone)').matches,

    if (recentlyDismissed || inStandalone) return,

    const handler = (e: BeforeInstallPromptEvent,) => {
      e.preventDefault(),
      setPromptEvent(e)
    },

    window.addEventListener('beforeinstallprompt', handler),
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, []),

  if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {
    return null
  }

  const onClick = async () => {
    if (!promptEvent) {
      toast('Installation not available', {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        description: 'Your browser does not support app installation.'}),
      return;

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
