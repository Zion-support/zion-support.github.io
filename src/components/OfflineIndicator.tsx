<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),
=======
import { useState, useEffect } from 'react';

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine,
      setIsOnline(online),
<<<<<<< HEAD
      
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      if (!online) {
=======
            if (!online) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
<<<<<<< HEAD
        setTimeout(() => setShowOfflineAlert(false), 3000)
import { useState, useEffect } from 'react',;
import { WifiOff, Wifi } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert',;
=======

      }
import { Alert, AlertDescription } from '@/components/ui/alert';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true),;
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),;
  useEffect(() => {;
    const updateOnlineStatus = () => {;
<<<<<<< HEAD
<<<<<<< HEAD
      const online = navigator.onLine,;
      setIsOnline(online),;
=======
      const online = navigator && navigator.onLine;
      setIsOnline(online);

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      if (!online) {;
        setShowOfflineAlert(true);
      } else if (showOfflineAlert) {;
        // Show brief "back online" message then hide;
<<<<<<< HEAD
        setTimeout(() => setShowOfflineAlert(false), 3000);
<<<<<<< HEAD
      }
    },;
    // Set initial status;
    updateOnlineStatus(),;
    // Listen for online/offline events;
    window.addEventListener('online', updateOnlineStatus),;
    window.addEventListener('offline', updateOnlineStatus),;
    return () => {;
      window.removeEventListener('online', updateOnlineStatus),;
      window.removeEventListener('offline', updateOnlineStatus);
    }
  }, [showOfflineAlert]),
=======


      }
    };

    // Set initial status;
    updateOnlineStatus();

    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);



=======
      const online = navigator && navigator.onLine;
      setIsOnline(online);
        setShowOfflineAlert(true);
      } else if (showOfflineAlert) {;
        // Show brief "back online" message then hide;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
  }, [showOfflineAlert]),

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  if (!showOfflineAlert) return null,

=======
  }, [showOfflineAlert]),

  if (!showOfflineAlert) return null;
  if (!showOfflineAlert) return null,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">
      <Alert variant={isOnline ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4" />
=======
import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = null;
      <Alert variant={isOnline ? 'default' : 'destructive'}>
        <div className='flex items-center gap-2'>
            <Wifi className='h-4 w-4' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          ) : (
            <WifiOff className="h-4 w-4" />
<<<<<<< HEAD
          )}
<<<<<<< HEAD
          <AlertDescription>;
            {isOnline ? (;
              'Connection restored';
            ) : (;
              'You are offline. Some features may not work.';
            )}
<<<<<<< HEAD
          </AlertDescription>;
=======
=======
          <AlertDescription>
<<<<<<< HEAD
            {isOnline ? (
              'Connection restored'
            ) : (
              'You are offline. Some features may not work.'
            )}
=======
            {isOnline
              ? 'Connection restored'
              : 'You are offline. Some features may not work.'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          </AlertDescription>
        </div>
      </Alert>
    </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        </div>;
      </Alert>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======


};
    <div className='fixed top - 4 right - 4 z - 50 max - w-sm pointer - events - none'>;
      <Alert variant={is_online ? 'default' : 'destructive'}>;
        <div className='flex items - center gap - 2'>;
            <Wifi className='h - 4 w - 4' />) : (
            <WifiOff className='h - 4 w - 4' />)}
          <AlertDescription>;
            {is_online;
              ? 'Connection restored';
              : 'You are offline. Some features may not work.'}          </AlertDescription>            {is_online ? (
              'Connection restored') : (
              'You are offline. Some features may not work.')}
        </div>;
      </Alert>;
    </div>);
} }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          </AlertDescription>
        </div>
      </Alert>
    </div>

  )
} }

        </div>;
      </Alert>;
    </div>;
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
);
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
