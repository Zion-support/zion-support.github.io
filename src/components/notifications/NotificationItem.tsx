<<<<<<< HEAD



import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger} from '@/components/ui/tooltip'
import { useRouter } from 'next/router'
import { Notification, NotificationType } from '@/context/notifications'
      return <span className="text-blue-500">💬</span>
      return <span className="text-orange-500">📦</span>
    default:
      return <span className="text-gray-500">📣</span>
  notification: Notification
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>
  onMarkAsRead
  onDismiss
}) => {;
      className={cn(;
                  onMarkAsRead(notification.id); import React from 'react'
import React from 'react',
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  TooltipTrigger} from '@/components/ui/tooltip',
import { useRouter } from 'next/router',
import { Notification, NotificationType } from '@/context/notifications',

export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':
      return <span className="text-blue-500">💬</span>,
    case 'quote_request':
      return <span className="text-purple-500">📝</span>,
    case 'booking_confirmation':
      return <span className="text-green-500">✅</span>,
    case 'hire_request':
      return <span className="text-zion-purple">🤝</span>,
    case 'onboarding':
      return <span className="text-zion-cyan">🚀</span>,
    case 'system':
      return <span className="text-yellow-500">⚠️</span>,
    case 'project_update':
      return <span className="text-indigo-400">📌</span>,
    case 'milestone_complete':
      return <span className="text-green-500">🏁</span>,
    case 'order_status':
      return <span className="text-orange-500">📦</span>,
    default:
      return <span className="text-gray-500">📣</span>
<<<<<<< HEAD
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
  TooltipTrigger} from '@/components/ui/tooltip',
import { useRouter } from 'next/router',
import { Notification, NotificationType } from '@/context/notifications',

export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':
      return <span className="text-blue-500">💬</span>,
    case 'quote_request':
      return <span className="text-purple-500">📝</span>,
    case 'booking_confirmation':
      return <span className="text-green-500">✅</span>,
    case 'hire_request':
      return <span className="text-zion-purple">🤝</span>,
    case 'onboarding':
      return <span className="text-zion-cyan">🚀</span>,
    case 'system':
      return <span className="text-yellow-500">⚠️</span>,
    case 'project_update':
      return <span className="text-indigo-400">📌</span>,
    case 'milestone_complete':
      return <span className="text-green-500">🏁</span>,
    case 'order_status':
      return <span className="text-orange-500">📦</span>,
    default:
      return <span className="text-gray-500">📣</span>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
    }
    // If there's an action URL, navigate to it
    if (notification.action_url) {
      router.push(notification.action_url), // Changed to router.push
    }

  },



<<<<<<< HEAD
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
    }
    // If there's an action URL, navigate to it
    if (notification.action_url) {
      router.push(notification.action_url), // Changed to router.push
    }
  }
  },

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (<div
      className = {cn(
        'p-3 border-b border-zion-blue-light relative group'
        !notification.read ? 'bg-zion-blue-dark/30' : ''),}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },;
  return (;
    <div;
      className={cn(;
        'p-3 border-b border-zion-blue-light relative group',;
        !notification.read ? 'bg-zion-blue-dark/30' : '')}
<<<<<<< HEAD
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    >
      <div className="flex items-start gap-2">
        <div className="text-xl">{getTypeIcon(notification.type)}</div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-white">
              {notification.title |'Notification'}
              {notification.title || 'Notification'}
            </h4>
            {!notification.read && (
              <Badge className="bg-zion-cyan text-xs">New</Badge>
            )}
          </div>
          <p className="text-sm text-zion-slate-light">
            {notification.message |'You have a new notification'}
            {notification.message || 'You have a new notification'}
          </p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-zion-slate">
              {notification.created_at
                ? formatDistanceToNow(new Date(notification.created_at), {
                    addSuffix: true})
                : 'Just now'}
            </p>
            {notification.action_url && notification.action_text && (
  },;

  return (<div
      className = {cn(
        'p-3 border-b border-zion-blue-light relative group',
        !notification && notification.read ? 'bg-zion-blue-dark/30' : ''),}>;
      <div className="flex items-start gap-2">;
        <div className="text-xl">{getTypeIcon(notification && notification.type)}</div>;
        <div className="flex-1">;
          <div className="flex justify-between items-center mb-1">;
            <h4 className="font-medium text-white">;
              {notification && notification.title || 'Notification'}
            </h4>;
            {!notification && notification.read && (;
              <Badge className="bg-zion-cyan text-xs">New</Badge>;
            )}
          </div>;
          <p className="text-sm text-zion-slate-light">;
            {notification && notification.message || 'You have a new notification'}
          </p>;
          <div className="flex justify-between items-center mt-1">;
            <p className="text-xs text-zion-slate">;
              {notification && notification.created_at;
                ? formatDistanceToNow(new Date(notification && notification.created_at), {;
                    addSuffix: true});
                : 'Just now'}
            </p>;

            {notification && notification.action_url && notification && notification.action_text && (;
              <Button
                variant="link"
                size="sm"
                className="text-zion-cyan p-0 h-auto"
                onClick = {handleClick,}
              >
                onClick={handleClick}
              >;
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            )}
<<<<<<< HEAD
          </div>
        </div>
      </div>
=======

          </div>;
        </div>;
      </div>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Action buttons that appear on hover */}
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
<<<<<<< HEAD
                onClick={(e,) => {
                  e.stopPropagation()
                onClick={(e) => {
                onClick={(e) => {
                onClick={(e) => {
                  e.stopPropagation(),
=======


                onClick={(e) => {
                onClick={(e) => {


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  e.stopPropagation(),
                  onMarkAsRead(notification.id)
                }}
                aria-label="Mark as read"
              >
                <Check className="h-3.5 w-3.5 text-green-400" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Mark as read</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
                onClick={(e,) => {;
                  e && e.stopPropagation(),;
                  onMarkAsRead(notification && notification.id);
                }}
                aria-label="Mark as read";
              >;
                <Check className="h-3 && 3.5 w-3 && 3.5 text-green-400" />;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Mark as read</p>;
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;

        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
<<<<<<< HEAD
                onClick={(e,) => {
                  e.stopPropagation()
                onClick={(e) => {
                onClick={(e) => {
                onClick={(e) => {
                  e.stopPropagation(),
=======


                onClick={(e) => {
                onClick={(e) => {


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  e.stopPropagation(),
                  onDismiss(notification.id)
                }}
                aria-label="Dismiss notification"
              >
                <Trash2 className="h-3.5 w-3.5 text-red-400" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Dismiss</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>;
    </div>;
  );
};
      </div>
    </div>
  )
}

},
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button;
                variant="ghost";
                size="icon";
                className="h-6 w-6";
                onClick={(e) => {;
                  e.stopPropagation(),;
                  onMarkAsRead(notification.id);
                }}
                aria-label="Mark as read";
              >;
                <Check className="h-3.5 w-3.5 text-green-400" />;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Mark as read</p>;
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button;
                variant="ghost";
                size="icon";
                className="h-6 w-6";
                onClick={(e) => {;
                  e.stopPropagation();
                  onDismiss(notification.id);
                }}
                aria-label="Dismiss notification";
              >;
                <Trash2 className="h-3.5 w-3.5 text-red-400" />;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Dismiss</p>;
  Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from '@/components / ui / tooltip';
import { use_router } from 'next / router';
import { Notification, NotificationType } from '@/context / notifications';
      return <span className="text - blue - 500">💬</span>;
      return <span className="text - orange - 500">📦</span>;
    default:;
      return <span className="text - gray - 500">📣</span>;
  notification: Notification;
  onMarkAsRead: (id: string) => Promise < void>;
  on_dismiss: (id: string) => Promise < void>;
  onMarkAsRead,
  on_dismiss;
}) => {
      className={cn (
                  onMarkAsRead (notification.id); import React from 'react';
// Use the centralized icon wrapper to avoid missing icons;
import { Check, Trash2, ChevronRight } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { formatDistanceToNow } from 'date - fns';
import { cn } from '@/lib / utils';
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger} from '@/components / ui / tooltip',
export const getTypeIcon = (type: NotificationType, ) =>: any {
  switch (type) {
    case 'message':;
      return <span className="text - blue - 500">💬</span>,
    case 'quote_request':;
      return <span className="text - purple - 500">📝</span>,
    case 'booking_confirmation':;
      return <span className="text - green - 500">✅</span>,
    case 'hire_request':;
      return <span className="text - zion - purple">🤝</span>,
    case 'onboarding':;
      return <span className="text - zion - cyan">🚀</span>,
    case 'system':;
      return <span className="text - yellow - 500">⚠️</span>,
    case 'project_update':;
      return <span className="text - indigo - 400">📌</span>,
    case 'milestone_complete':;
      return <span className="text - green - 500">🏁</span>,
    case 'order_status':;
      return <span className="text - orange - 500">📦</span>,
    default:;
      return <span className="text - gray - 500">📣</span>;
  }
},
interface NotificationItemProps {
  notification: Notification,
  onMarkAsRead: (id: string, ) => Promise < void>,
  on_dismiss: (id: string, ) => Promise < void>;
}
export const NotificationItem: React.FC < NotificationItemProps> = ({
  notification,
  onMarkAsRead,
  on_dismiss}, ) => {
  const router = use_router (), // Changed from use_navigate to use_router;
  const handle_click = () =>: any {
    // Check condition
if ( {) {
  $2
}
      onMarkAsRead (notification.id);
    }
    // If there's an action URL, navigate to it;
    // Check condition
if ( {) {
  $2
}
      router.push (notification.action_url), // Changed to router.push;
    }
  },
  return (<div;
      class_name = {cn (
        'p - 3 border - b border - zion - blue - light relative group',
        !notification.read ? 'bg - zion - blue - dark / 30' : ''), }
    >;
      <div className="flex items - start gap - 2">;
        <div className="text - xl">{getTypeIcon (notification.type)}</div>;
        <div className="flex - 1">;
          <div className="flex justify - between items - center mb - 1">;
            <h4 className="font - medium text - white">;
              {notification.title || 'Notification'}
            </h4>;
            {!notification.read && (
              <Badge className="bg - zion - cyan text - xs">New</Badge>)}
          </div>;
          <p className="text - sm text - zion - slate - light">;
            {notification.message || 'You have a new notification'}
          </p>;
          <div className="flex justify - between items - center mt - 1">;
            <p className="text - xs text - zion - slate">;
              {notification.created_at;
                ? formatDistanceToNow (new Date (notification.created_at), {
                    add_suffix: true});
                : 'Just now'}
            </p>;
            {notification.action_url && notification.action_text && (
              <Button;
                variant="link";
                size="sm";
                className="text - zion - cyan p - 0 h - auto";
                on_click = {handle_click, }
              >;
                {notification.action_text}
                <ChevronRight className="h - 3 w - 3 ml - 1" />;
              </Button>)}
          </div>;
        </div>;
      </div>;
      {/* Action buttons that appear on hover */}
      <div className="absolute right - 2 top - 2 opacity - 0 group - hover: opacity - 100 transition - opacity flex gap - 1">;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger as_child>;
              <Button;
                variant="ghost";
                size="icon";
                className="h - 6 w - 6";
                on_click={(e, ) => {
                  e.stop_propagation (),
                  onMarkAsRead (notification.id);
                }}
                aria - label="Mark as read";
              >;
                <Check className="h - 3.5 w - 3.5 text - green - 400" />;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p > Mark as read</p>;
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger as_child>;
              <Button;
                variant="ghost";
                size="icon";
                className="h - 6 w - 6";
                on_click={(e, ) => {
                  e.stop_propagation (),
                  on_dismiss (notification.id);
                }}
                aria - label="Dismiss notification";
              >;
                <Trash2 className="h - 3.5 w - 3.5 text - red - 400" />;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p > Dismiss</p>;

            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
};
  )
=======




    </div>);
},
;

      </div>
    </div>
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
