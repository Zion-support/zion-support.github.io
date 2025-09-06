
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

      }
    }
