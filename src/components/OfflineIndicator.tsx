
import { WifiOff, Wifi } from 'lucide-react'

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {

  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine,
      setIsOnline(online),

      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }
    };

    // Set initial status;
    updateOnlineStatus();

    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);



    }
<<<<<<< HEAD
