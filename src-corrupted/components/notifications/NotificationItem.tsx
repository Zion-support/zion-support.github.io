



// Use the centralized icon wrapper to avoid missing icons
import { Check, Trash2, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { cn } from '@/lib/utils'
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger} from '@/components/ui/tooltip'
export const getTypeIcon = (type: NotificationType,) => {
  switch (type) {
    case 'message':
      return <span className="text-blue-500">💬</span>
    case 'quote_request':
      return <span className="text-purple-500">📝</span>
    case 'booking_confirmation':
      return <span className="text-green-500">✅</span>
    case 'hire_request':
      return <span className="text-zion-purple">🤝</span>
    case 'onboarding':
      return <span className="text-zion-cyan">🚀</span>
    case 'system':
      return <span className="text-yellow-500">⚠️</span>
    case 'project_update':
      return <span className="text-indigo-400">📌</span>
    case 'milestone_complete':
      return <span className="text-green-500">🏁</span>
    case 'order_status':
      return <span className="text-orange-500">📦</span>
    default:
      return <span className="text-gray-500">📣</span>
  }
}
interface NotificationItemProps {
  notification: Notification
  onMarkAsRead: (id: string,) => Promise<void>
  onDismiss: (id: string,) => Promise<void>
}
export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification
  onMarkAsRead
  onDismiss},) => {
  const router = useRouter(), // Changed from useNavigate to useRouter
  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id)

import React from 'react',
// Use the centralized icon wrapper to avoid missing icons
import { Check, Trash2, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { formatDistanceToNow } from 'date-fns',
import { cn } from '@/lib/utils',




import {
  Tooltip,
  TooltipContent,
  TooltipProvider,



  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useNavigate } from 'react-router-dom';


import { Notification, NotificationType } from '@/context/notifications';
import { Check, Trash2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';




  TooltipTrigger} from '@/components/ui/tooltip',
import { useRouter } from 'next/router',
import { Notification, NotificationType } from '@/context/notifications',


const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case 'success':
      return <span className="text-green-500">✅</span>;
    case 'error':
      return <span className="text-red-500">❌</span>;
    case 'warning':
      return <span className="text-yellow-500">⚠️</span>;
    case 'info':
      return <span className="text-blue-500">ℹ️</span>;
    case 'message':
      return <span className="text-blue-500">💬</span>;
    case 'project':
      return <span className="text-orange-500">📦</span>;
    default:
      return <span className="text-gray-500">📣</span>

import React from 'react',;
// Use the centralized icon wrapper to avoid missing icons;
import { Check, Trash2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { formatDistanceToNow } from 'date-fns',;
import { cn } from '@/lib/utils',;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from '@/components/ui/tooltip',;
import { useRouter } from 'next/router',;
import { Notification, NotificationType } from '@/context/notifications',;
export const getTypeIcon = (type: NotificationType) => {;
  switch (type) {;
    case 'message':;
      return <span className="text-blue-500">💬</span>,;
    case 'quote_request':;
      return <span className="text-purple-500">📝</span>,;
    case 'booking_confirmation':;
      return <span className="text-green-500">✅</span>,;
    case 'hire_request':;
      return <span className="text-zion-purple">🤝</span>,;
    case 'onboarding':;
      return <span className="text-zion-cyan">🚀</span>,;
    case 'system':;
      return <span className="text-yellow-500">⚠️</span>,;
    case 'project_update':;
      return <span className="text-indigo-400">📌</span>,;
    case 'milestone_complete':;
      return <span className="text-green-500">🏁</span>,;
    case 'order_status':;
      return <span className="text-orange-500">📦</span>,;
    default:;
      return <span className="text-gray-500">📣</span>;
  }
};

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({

  notification,
  onMarkAsRead,
  onDismiss,
}) => {
  const navigate = useNavigate();

  const handleMarkAsRead = async () => {
    if (!notification.read) {
      await onMarkAsRead(notification.id);
    }
  };

  const handleDismiss = async () => {
    await onDismiss(notification.id);
  };

  const handleClick = () => {
    if (notification.actionUrl) {
      navigate(notification.actionUrl);

    }




  }
  },




  return (<div
      className = {cn(
        'p-3 border-b border-zion-blue-light relative group'
        !notification.read ? 'bg-zion-blue-dark/30' : ''),}



  },;
  return (;
    <div;
      className={cn(;
        'p-3 border-b border-zion-blue-light relative group',;
        !notification.read ? 'bg-zion-blue-dark/30' : '')}



