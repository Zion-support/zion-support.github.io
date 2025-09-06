<<<<<<< HEAD
import {
  Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from '@/components/ui/tooltip';
import { useRouter } from 'next/router';
import { Notification, NotificationType } from '@/context/notifications';
<<<<<<< HEAD
      return <span className="text-blue-500">💬</span>;
<<<<<<< HEAD
      return <span className="text-orange-500">📦</span>;
    default:
      return <span className="text-gray-500">📣</span>;
<<<<<<< HEAD
  notification: Notification;
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
<<<<<<< HEAD
  onMarkAsRead,
  onDismiss
}) => {
<<<<<<< HEAD
      className={cn(
<<<<<<< HEAD
                  onMarkAsRead(notification.id);
