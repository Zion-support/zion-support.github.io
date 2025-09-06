import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Alert, AlertDescription } from '@/components/ui/alert';

=======
import { Alert, AlertDescription } from '@/components/ui/alert';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);

  useEffect((,) => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);

      if (!online) {
        setShowOfflineAlert(true);
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
<<<<<<< HEAD
        setTimeout(() => setShowOfflineAlert(false), 3000);      }
=======
        setTimeout(() => setShowOfflineAlert(false), 3000)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
=======
        setTimeout((,) => setShowOfflineAlert(false), 3000)
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    // Set initial status
    updateOnlineStatus();

    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };  }, [showOfflineAlert]);
=======
      window.removeEventListener('offline', updateOnlineStatus)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [showOfflineAlert]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  if (!showOfflineAlert) return null;

  return (
    <div className='fixed top-4 right-4 z-50 max-w-sm pointer-events-none'>
      <Alert variant={isOnline ? 'default' : 'destructive'}>
        <div className='flex items-center gap-2'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {isOnline ? (
            <Wifi className='h-4 w-4' />
          ) : (
            <WifiOff className='h-4 w-4' />
          )}
          <AlertDescription>
            {isOnline
              ? 'Connection restored'
              : 'You are offline. Some features may not work.'}          </AlertDescription>
            {isOnline ? (
              'Connection restored'
            ) : (
              'You are offline. Some features may not work.'
            )}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </AlertDescription>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
      </Alert>
    </div>
  );
};
=======
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
