<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
<<<<<<< HEAD
import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = null;
=======
import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true)
  const [showOfflineAlert, setShowOfflineAlert] = useState(false)
  useEffect((,) => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine
      setIsOnline(online)
      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
        setTimeout(() => setShowOfflineAlert(false), 3000) }        setTimeout((,) => setShowOfflineAlert(false), 3000)
        setTimeout(() => setShowOfflineAlert(false), 3000)
      }
    }
    // Set initial status
    updateOnlineStatus()
    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    return () => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus)
    } }, [showOfflineAlert]);      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [showOfflineAlert])
  if (!showOfflineAlert) return null
=======
import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
}

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);

      if (!online) {
        setShowOfflineAlert(true);
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
        setTimeout(() => setShowOfflineAlert(false), 3000);
      }
    };

    // Set initial status
    updateOnlineStatus();

    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, [showOfflineAlert]);

  if (!showOfflineAlert) return null;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  return (
    <div className='fixed top-4 right-4 z-50 max-w-sm pointer-events-none'>
      <Alert variant={isOnline ? 'default' : 'destructive'}>
        <div className='flex items-center gap-2'>
            <Wifi className='h-4 w-4' />
          ) : (
            <WifiOff className='h-4 w-4' />
          )}
          <AlertDescription>
            {isOnline
              ? 'Connection restored'
<<<<<<< HEAD
              : 'You are offline. Some features may not work.'}          </AlertDescription>            {isOnline ? (
              'Connection restored'
            ) : (
              'You are offline. Some features may not work.'
            )}
        </div>
      </Alert>
    </div>
  )
} }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
              : 'You are offline. Some features may not work.'}
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
