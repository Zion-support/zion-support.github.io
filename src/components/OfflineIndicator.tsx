<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine,
      setIsOnline(online),
      
      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
<<<<<<< HEAD
        // Show brief "back online" message then hide
        setTimeout(() => setShowOfflineAlert(false), 3000)
=======
        // Show brief &quot;back online&quot; message then hide
        setTimeout(() => setShowOfflineAlert(false), 3000);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    },
=======

export const _OfflineIndicator = () => {_const [isOnline, _setIsOnline] = useState(true);
  const [showOfflineAlert, _setShowOfflineAlert] = useState(false);

  useEffect__(() => {
    const _updateOnlineStatus = () => {
      const _online = navigator.onLine;
      setIsOnline(online);
      
      if (!online) {
        setShowOfflineAlert(true);} else if (showOfflineAlert) {_// Show brief "back online" message then hide
        setTimeout__(() => setShowOfflineAlert(false), _3000);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Set initial status
    updateOnlineStatus(),

    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus),
    window.addEventListener('offline', updateOnlineStatus),

<<<<<<< HEAD
    return () => {
      window.removeEventListener('online', updateOnlineStatus),
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [showOfflineAlert]),
=======
    return () => {_window.removeEventListener('online', _updateOnlineStatus);
      window.removeEventListener('offline', _updateOnlineStatus);};
  }, [showOfflineAlert]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!showOfflineAlert) return null,

  return (
<<<<<<< HEAD
    <div className=&quot;fixed top-4 right-4 z-50 max-w-sm pointer-events-none&quot;>
      <Alert variant={isOnline ? &quot;default&quot; : &quot;destructive&quot;}>
        <div className=&quot;flex items-center gap-2&quot;>
          {isOnline ? (
            <Wifi className=&quot;h-4 w-4&quot; />
=======
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">
      <Alert variant={_isOnline ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
          {_isOnline ? (
            <Wifi className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ) : (
            <WifiOff className=&quot;h-4 w-4&quot; />
          )}
          <AlertDescription>
            {_isOnline ? (
              'Connection restored'
            ) : (
              'You are offline. Some features may not work.'
            )}
          </AlertDescription>
        </div>
      </Alert>
    </div>
  )
}, 