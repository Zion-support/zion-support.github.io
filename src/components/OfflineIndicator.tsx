import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState($2);
  const [showOfflineAlert, setShowOfflineAlert] = useState($2);
  useEffect(() => {
    const updateOnlineStatus = $2;
      setIsOnline($2);
      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
        setTimeout(() => setShowOfflineAlert(false), 3000)
      }
    },

    // Set initial status
    updateOnlineStatus($2);
    // Listen for online/offline events
    window.addEventListener($2);
    window.addEventListener($2);
    return () => {
      window.removeEventListener($2);
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [showOfflineAlert]),

  if (!showOfflineAlert) return null,

  return (
    <div className = $2;