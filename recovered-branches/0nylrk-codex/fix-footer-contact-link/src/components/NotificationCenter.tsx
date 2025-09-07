import { Bell  } from '@/components/icons';
import { Button  } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger  } from '@/components/ui/popover';
import { useNotifications  } from '@/context/notifications/NotificationContext';
import { toast } from 'sonner';
import { NotificationFilter;
  NotificationHeader;
  NotificationList;
  NotificationFooter 
 } from '@/components/notifications';
import { FilterType } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC;
import {Bell} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useNotifications} from '@/context/notifications/NotificationContext';
import {toast} from 'sonner';
import {NotificationFilter, NotificationHeader, NotificationList, NotificationFooter} from '@/components/notifications';
import {FilterType} from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC = () => {
  const {
    filteredNotifications
    unreadCount
    markAsRead
    markAllAsRead;
    dismissNotification
    loading;
    filter;
    setFilter;
    fetchNotifications
  } = useNotifications();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
// Use the shared icon wrapper
import { Bell } from '@/components/icons',
import { Button } from '@/components/ui/button',
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',
import { useNotifications } from '@/context/notifications/NotificationContext',
import { toast } from 'sonner',
import { 
  NotificationFilter,
  NotificationHeader, 
  NotificationList, 
  NotificationFooter 
} from '@/components/notifications',
import { FilterType } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC = $2;
    unreadCount, 
    markAsRead, ;
    markAllAsRead;
    dismissNotification, 
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications($2);
  const [open, setOpen] = useState($2);
  const [error, setError] = useState<string | null>(null),

  // Refresh notifications when popover opens
  useEffect(() => {
    if (open) {
      const loadNotifications = async () => {
        try {
          await fetchNotifications($2);
          setError(null)
        } catch (err) {
          console.error($2);
          setError($2);
          toast.error("Failed to load notifications")
        }
      },
      
      loadNotifications()
    }
  }, [open, fetchNotifications]),

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead($2);
      toast.success("All notifications marked as read")
    } catch (err) {
      console.error($2);
      toast.error("Failed to update notifications")
    }
  },

  const handleFilterChange = $2;
  return (
    <Popover open = $2;