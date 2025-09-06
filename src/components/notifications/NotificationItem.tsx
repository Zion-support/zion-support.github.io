import {
  Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from '@/components/ui/tooltip';
import { useRouter } from 'next/router';
import { Notification, NotificationType } from '@/context/notifications';
      return <span className="text-blue-500">💬</span>;
      return <span className="text-orange-500">📦</span>;
    default:
      return <span className="text-gray-500">📣</span>;
  notification: Notification;
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onMarkAsRead,
  onDismiss
}) => {
      className={cn(
                  onMarkAsRead(notification.id);
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
