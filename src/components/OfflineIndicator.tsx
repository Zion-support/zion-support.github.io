
      if (!online) {
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      }
import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);

  useEffect((,) => {;
    const updateOnlineStatus = () => {;
      const online = navigator && navigator.onLine;
      setIsOnline(online);

      if (!online) {;
        setShowOfflineAlert(true);
      } else if (showOfflineAlert) {;
        // Show brief "back online" message then hide;

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">
      <Alert variant={isOnline ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4" />
          ) : (
            <WifiOff className="h-4 w-4" />

        </div>;
      </Alert>;
    </div>;
  );

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
