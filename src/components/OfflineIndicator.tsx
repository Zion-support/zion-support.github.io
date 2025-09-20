import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { WifiOff, Wifi } from 'lucide-react'
=======
import { WifiOff, Wifi } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

<<<<<<< HEAD
=======
    // Check initial status
    setIsOnline(navigator.onLine);

>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

<<<<<<< HEAD
  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">
      <div className="flex items-center justify-center space-x-2">
        <WifiOff className="h-4 w-4" />
        <span>You are offline. Some features may not work properly.</span>
      </div>
=======
  if (isOnline) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <Alert variant="destructive">
        <WifiOff className="h-4 w-4" />
        <AlertDescription>
          You are currently offline. Some features may not be available.
        </AlertDescription>
      </Alert>
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
    </div>
  );
}