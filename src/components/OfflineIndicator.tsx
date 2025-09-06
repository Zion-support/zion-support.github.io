<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
=======
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
<<<<<<< HEAD
  const [isOnline, setIsOnline] = useState(true)
  const [showOfflineAlert, setShowOfflineAlert] = useState(false)
  useEffect((,) => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine
      setIsOnline(online)
=======
  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine,
      setIsOnline(online),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
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
      if (!online) {;
        setShowOfflineAlert(true);
      } else if (showOfflineAlert) {;
        // Show brief "back online" message then hide;
        setTimeout(() => setShowOfflineAlert(false), 3000);
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      }
    }
<<<<<<< HEAD
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

=======
  }, [showOfflineAlert]),

  if (!showOfflineAlert) return null,

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">
      <Alert variant={isOnline ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4" />
          ) : (
            <WifiOff className="h-4 w-4" />
          )}
          <AlertDescription>;
            {isOnline ? (;
              'Connection restored';
            ) : (;
              'You are offline. Some features may not work.';
            )}
          </AlertDescription>;
        </div>;
      </Alert>;
    </div>;
  );
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
