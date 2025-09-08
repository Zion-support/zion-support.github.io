

  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string) => Promise<void>,
  onDismiss: (id: string) => Promise<void>,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onRetry: () => void;

}

export const NotificationList: React.FC<NotificationListProps> = ({;
  loading;
  error;
  notifications;
  onMarkAsRead;import React from 'react',;
import { ScrollArea } from '@/components/ui/scroll-area',;
import { Skeleton } from '@/components/ui/skeleton',;
import { Button } from '@/components/ui/button',;
import { NotificationItem } from './NotificationItem',;
import { Notification } from '@/context/notifications',;
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onRetry: () => void;
<<<<<<< HEAD

}

  error;
  notifications;
  onMarkAsRead;  on_dismiss,
  on_retry;
}) => {

  return (
    <ScrollArea className="flex - 1 overflow - y-auto max-h-[350px]">;
      {error ? (