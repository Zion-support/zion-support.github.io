
import React from 'react';

import { ScrollArea  } from '@/components/ui/scroll-area';
import { Skeleton  } from '@/components/ui/skeleton';
import { Button  } from '@/components/ui/button';
import { NotificationItem  } from './NotificationItem';
import { Notification } from '@/context/notifications';

interface NotificationListProps {
  loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onRetry: () => void
}

export const NotificationList: React.FC<NotificationListProps> = ({
  loading;
  error;
  notifications;
  onMarkAsRead;

  onDismiss;
  onRetry
}) => {
  return (
    <ScrollArea className;

