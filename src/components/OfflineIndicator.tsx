<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/OfflineIndicator.tsx

import { WifiOff, Wifi } from 'lucide-react'

import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {

=======
import { useState, useEffect  } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',
>>>>>>> 
import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
=======
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
=======
import { useState, useEffect } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { WifiOff, Wifi } from 'lucide-react'
=======
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [isOnline, setIsOnline] = useState(true)
  const [showOfflineAlert, setShowOfflineAlert] = useState(false)
  useEffect((,) => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine
      setIsOnline(online)
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

export const OfflineIndicator = () => {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine,
      setIsOnline(online),
<<<<<<< HEAD
<<<<<<< HEAD
=======
      
>>>>>>>       if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
        setTimeout(() => setShowOfflineAlert(false), 3000) }        setTimeout((,) => setShowOfflineAlert(false), 3000)
        setTimeout(() => setShowOfflineAlert(false), 3000)
>>>>>>>       }
    }

  }, [showOfflineAlert]),




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
<<<<<<< HEAD

<<<<<<< HEAD
      }
    }

  }, [showOfflineAlert]),

  if (!showOfflineAlert) return null,
=======
========
import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/OfflineIndicator.tsx
import { useState, useEffect } from 'react';
        setTimeout(() => setShowOfflineAlert(false), 3000)
import { useState, useEffect } from 'react',;

import { WifiOff, Wifi } from 'lucide-react';
import { Alert, AlertDescription } from '@/components / ui / alert';
export const OfflineIndicator = () =>: any {
  const [is_online, setIsOnline] = useState (true);
  const [showOfflineAlert, setShowOfflineAlert] = useState (false);
  useEffect ((, ) => {
    const updateOnlineStatus = () =>: any {
      const online = navigator.on_line;
      setIsOnline (online);
      // Check condition
if ( {) {
  $2
}
        setShowOfflineAlert (true);
      } else // Check condition
if ( {) {
  $2
}
        // Show brief "back online" message then hide;
        set_timeout (() => setShowOfflineAlert (false), 3000) }        set_timeout ((, ) => setShowOfflineAlert (false), 3000);
        set_timeout (() => setShowOfflineAlert (false), 3000);
      }
import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);
  useEffect((,) => {;
    const updateOnlineStatus = () => {;
      const online = navigator && navigator.onLine;
      setIsOnline(online);
=======
<<<<<<< HEAD
        setTimeout(() => setShowOfflineAlert(false), 3000) }        setTimeout((,) => setShowOfflineAlert(false), 3000)
        setTimeout(() => setShowOfflineAlert(false), 3000)
=======
        setTimeout(() => setShowOfflineAlert(false), 3000)
import { useState, useEffect } from 'react',;
import { WifiOff, Wifi } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert',;
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true),;
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),;
  useEffect(() => {;
    const updateOnlineStatus = () => {;
      const online = navigator.onLine,;
      setIsOnline(online),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (!online) {;
        setShowOfflineAlert(true);
      } else if (showOfflineAlert) {;
        // Show brief "back online" message then hide;
<<<<<<< HEAD
        setTimeout(() => setShowOfflineAlert(false), 3000);      }        setTimeout((,) => setShowOfflineAlert(false), 3000);
        setTimeout(() => setShowOfflineAlert(false), 3000);
<<<<<<<< HEAD:src/components/OfflineIndicator.tsx

>>>>>>>       }
========
      }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/OfflineIndicator.tsx
    };
    // Set initial status;
    updateOnlineStatus();
    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);
<<<<<<<< HEAD:src/components/OfflineIndicator.tsx



    }
  }, [showOfflineAlert]);
  // Check condition
if (return null) {
  $2
}
  return (

>>>>>>> 

  if (!showOfflineAlert) return null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [showOfflineAlert]);
  if (!showOfflineAlert) return null;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/OfflineIndicator.tsx
=======
        setTimeout(() => setShowOfflineAlert(false), 3000);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    }
<<<<<<< HEAD
    // Set initial status
    updateOnlineStatus()
    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus);
    return () => {;
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    } }, [showOfflineAlert]);      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [showOfflineAlert])
  if (!showOfflineAlert) return null
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
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  }, [showOfflineAlert]),

  if (!showOfflineAlert) return null,

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">
      <Alert variant={isOnline ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4" />
          ) : (
            <WifiOff className="h-4 w-4" />
          )}
<<<<<<< HEAD
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
  )
} }
<<<<<<<< HEAD:src/components/OfflineIndicator.tsx



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/OfflineIndicator.tsx
        </div>;
      </Alert>;
    </div>;
  );
<<<<<<<< HEAD:src/components/OfflineIndicator.tsx
};
<<<<<<< HEAD

=======
>>>>>>> 
};


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};};
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
=======
import { useState, useEffect } from 'react',;
import { WifiOff, Wifi } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert',;
;
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true),;
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),;
;
  useEffect(() => {;
    const updateOnlineStatus = () => {;
      const online = navigator.onLine,;
      setIsOnline(online),;
      ;
      if (!online) {;
        setShowOfflineAlert(true),;
      } else if (showOfflineAlert) {;
        // Show brief "back online" message then hide;
        setTimeout(() => setShowOfflineAlert(false), 3000),;
      }
    },;
;
    // Set initial status;
    updateOnlineStatus(),;
;
    // Listen for online/offline events;
    window.addEventListener('online', updateOnlineStatus),;
    window.addEventListener('offline', updateOnlineStatus),;
;
    return () => {;
      window.removeEventListener('online', updateOnlineStatus),;
      window.removeEventListener('offline', updateOnlineStatus),;
    },;
  }, [showOfflineAlert]),;
;
  if (!showOfflineAlert) return null,;
;
  return (;
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">;
      <Alert variant={isOnline ? "default" :"destructive"}>;
        <div className="flex items-center gap-2">;
          {isOnline ? (;
            <Wifi className="h-4 w-4" />;
          ) :(;
            <WifiOff className="h-4 w-4" />;          )}
          <AlertDescription>;
            {isOnline ? (;
              'Connection restored';
            ) :(;
=======
          <AlertDescription>;
            {isOnline ? (;
              'Connection restored';
            ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              'You are offline. Some features may not work.';
            )}
          </AlertDescription>;
        </div>;
      </Alert>;
    </div>;
<<<<<<< HEAD
  ),;}, 
 ;
}
};
//Listen for online/offline events window.addEventListener ('online', updateOnlineStatus);';
window.addEventListener ('offline', updateOnlineStatus);
if (!showOfflineAlert) return null;
return () : (<WifiOff className="h-4 w-4" />) ;
}<AlertDescription> {';
  isOnline ? ('Connection restored') : ('You are offline. Some features may not work.') ;
}</AlertDescription> </div> </Alert> </div>) ;
};
'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/OfflineIndicator.tsx
=======
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
