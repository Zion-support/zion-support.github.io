import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react'

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);, }, []);

  if (isOnline) {
    return null, }

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">
      <div className="flex items-center justify-center space-x-2">
        <WifiOff className="h-4 w-4" />
        <span>You are offline. Some features may not work properly.</span>
      </div>
    </div>
  );
