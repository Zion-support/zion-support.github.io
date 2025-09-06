import { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { WifiOff, Wifi } from 'lucide-react';
=======
import { WifiOff, Wifi } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Alert, AlertDescription } from '@/components/ui/alert';

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);
      
      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
<<<<<<< HEAD
        setTimeout(() => setShowOfflineAlert(false), 3000);
=======
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert';

export const OfflineIndicator = () => {

  const [ isOnline, setIsOnline ] = useState(true),
  const [ showOfflineAlert, setShowOfflineAlert ] = useState(false),


  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine,
      setIsOnline(online);
      
      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
        setTimeout(() => setShowOfflineAlert(false), 3000)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        setTimeout(() => setShowOfflineAlert(false), 3000)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    // Set initial status
    updateOnlineStatus();

    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
<<<<<<< HEAD
<<<<<<< HEAD
      window.removeEventListener('offline', updateOnlineStatus);
    };
=======
      window.removeEventListener('offline', updateOnlineStatus)
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      window.removeEventListener('offline', updateOnlineStatus)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [showOfflineAlert]);

  if (!showOfflineAlert) return null;

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='fixed top-4 right-4 z-50 max-w-sm pointer-events-none'>
      <Alert variant={isOnline ? 'default' : 'destructive'}>
        <div className='flex items-center gap-2'>
=======
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">
      <Alert variant={isOnline ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {isOnline ? (
            <Wifi className="h-4 w-4" />
          ) : (
            <WifiOff className="h-4 w-4" />
          )}
          <AlertDescription>
<<<<<<< HEAD
            {isOnline
              ? 'Connection restored'
              : 'You are offline. Some features may not work.'}
=======
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">
      <Alert variant={isOnline ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4" />
          ) : (
            <WifiOff className="h-4 w-4" />
          )}
          <AlertDescription>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {isOnline ? (
              'Connection restored'
            ) : (
              'You are offline. Some features may not work.'
            )}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </AlertDescription>
        </div>
      </Alert>
    </div>
<<<<<<< HEAD
  );
<<<<<<< HEAD
};
=======

  )

};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
