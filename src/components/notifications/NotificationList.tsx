



import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
import { Bell } from 'lucide-react'
interface NotificationListProps {
}; import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Skeleton from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { NotificationItem } from './NotificationItem'
import { Notification } from '@/context/notifications'
import { EmptyState } from '@/components/ui/empty-state'
import { Bell } from 'lucide-react'
interface NotificationListProps {
  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string,) => Promise<void>,
  onDismiss: (id: string,) => Promise<void>,
  onRetry: () => void
}

export const NotificationList: React.FC<NotificationListProps> = ({
  loading
  error
  notifications
  onMarkAsRead

import React from 'react',;
import { ScrollArea } from '@/components/ui/scroll-area',;
import Skeleton from '@/components/ui/skeleton',;
import { Button } from '@/components/ui/button',;
import { NotificationItem } from './NotificationItem',;
import { Notification } from '@/context/notifications',;
import { EmptyState } from '@/components/ui/empty-state',;
import { Bell } from 'lucide-react';
interface NotificationListProps {;
  loading: boolean,;
  error: string | null,;
  notifications: Notification[],;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>,;
  onRetry: () => void;
}


onRetry
},) => {
} import React from 'react';
import { ScrollArea } from '@/components / ui / scroll - area';
import Skeleton from '@/components / ui / skeleton';
import { Button } from '@/components / ui / button';
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context / notifications';
import { EmptyState } from '@/components / ui / empty - state';
import { Bell } from 'lucide-react';

