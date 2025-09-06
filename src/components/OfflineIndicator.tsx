<<<<<<< HEAD
import { useState, useEffect  } from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import { WifiOff, Wifi } from 'lucide-react'

<<<<<<< HEAD
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
<<<<<<< HEAD
      }
=======
import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);

  useEffect((,) => {;
    const updateOnlineStatus = () => {;
      const online = navigator && navigator.onLine;
      setIsOnline(online);

      if (!online) {;
        setShowOfflineAlert(true);
      } else if (showOfflineAlert) {;
        // Show brief "back online" message then hide;
        setTimeout(() => setShowOfflineAlert(false), 3000);      }        setTimeout((,) => setShowOfflineAlert(false), 3000);
        setTimeout(() => setShowOfflineAlert(false), 3000);
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      }
    };

    // Set initial status;
    updateOnlineStatus();

    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);

<<<<<<< HEAD
    return () => {;
      window && window.removeEventListener('online', updateOnlineStatus);
      window && window.removeEventListener('offline', updateOnlineStatus);
    };  }, [showOfflineAlert]);      window && window.removeEventListener('offline', updateOnlineStatus);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
  return (
    <div className='fixed top-4 right-4 z-50 max-w-sm pointer-events-none'>;
      <Alert variant={isOnline ? 'default' : 'destructive'}>;
        <div className='flex items-center gap-2'>;
            <Wifi className='h-4 w-4' />;
          ) : (;
            <WifiOff className='h-4 w-4' />;
          )}
          <AlertDescription>;
            {isOnline;
              ? 'Connection restored';
              : 'You are offline. Some features may not work.'}          </AlertDescription>            {isOnline ? (;
              'Connection restored';
            ) : (;
              'You are offline. Some features may not work.';
            )}
<<<<<<< HEAD
        </div>
      </Alert>
    </div>
=======
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [showOfflineAlert]);

  if (!showOfflineAlert) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">
      <Alert variant={isOnline ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4" />
          ) : (
            <WifiOff className="h-4 w-4" />
          )}
          <AlertDescription>
            {isOnline ? (
              'Connection restored'
            ) : (
              'You are offline. Some features may not work.'
            )}
          </AlertDescription>
        </div>
      </Alert>
    </div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  )
} }

<<<<<<< HEAD
=======
        </div>;
      </Alert>;
    </div>;
  );
};};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
