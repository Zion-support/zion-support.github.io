
import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
import { WifiOff, Wifi } from 'lucide-react'




      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
      }
import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);
  useEffect((,) => {;
    const updateOnlineStatus = () => {;
      const online = navigator && navigator.onLine;
      setIsOnline(online);
        setTimeout(() => setShowOfflineAlert(false), 3000) }        setTimeout((,) => setShowOfflineAlert(false), 3000)
        setTimeout(() => setShowOfflineAlert(false), 3000)
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
  }, [showOfflineAlert]),

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
  )
} }
  }, [showOfflineAlert]),

  if (!showOfflineAlert) return null;

          )}
        </div>;
      </Alert>;
    </div>;
  );
