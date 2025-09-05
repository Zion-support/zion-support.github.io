import React from 'react',
// Use the centralized icon wrapper to avoid missing icons
<<<<<<< HEAD
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
=======
import {_Tooltip, _TooltipContent, _TooltipProvider, _TooltipTrigger} from '@/components/ui/tooltip';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const _getTypeIcon = (_type: NotificationType) => {_switch (type) {
    case 'message':
<<<<<<< HEAD
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
<<<<<<< HEAD
      return <span className="text-gray-500">📣</span>
=======
      return <span className=&quot;text-blue-500&quot;>💬</span>;
    case 'quote_request':
      return <span className=&quot;text-purple-500&quot;>📝</span>;
    case 'booking_confirmation':
      return <span className=&quot;text-green-500&quot;>✅</span>;
    case 'hire_request':
      return <span className=&quot;text-zion-purple&quot;>🤝</span>;
    case 'onboarding':
      return <span className=&quot;text-zion-cyan&quot;>🚀</span>;
    case 'system':
      return <span className=&quot;text-yellow-500&quot;>⚠️</span>;
    case 'project_update':
      return <span className=&quot;text-indigo-400&quot;>📌</span>;
    case 'milestone_complete':
      return <span className=&quot;text-green-500&quot;>🏁</span>;
    case 'order_status':
      return <span className=&quot;text-orange-500&quot;>📦</span>;
    default:
      return <span className=&quot;text-gray-500&quot;>📣</span>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
},

interface NotificationItemProps {
  notification: Notification,
  onMarkAsRead: (id: string) => Promise<void>,
  onDismiss: (id: string) => Promise<void>
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onMarkAsRead,
  onDismiss}) => {
  const router = useRouter(), // Changed from useNavigate to useRouter
=======
      return <span className="text-gray-500">📣</span>;}
};

interface NotificationItemProps {_notification: Notification;
  onMarkAsRead: (_id: string) => Promise<void>;
  onDismiss: (_id: string) => Promise<void>;}

export const NotificationItem: React.FC<NotificationItemProps> = (_{_notification, _onMarkAsRead, _onDismiss}) => {_const _router = useRouter(); // Changed from useNavigate to useRouter
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleClick = () => {
    if (!notification.read) {
<<<<<<< HEAD
      onMarkAsRead(notification.id)
    }
    // If there's an action URL, navigate to it
    if (notification.action_url) {
      router.push(notification.action_url), // Changed to router.push
    }
  },

  return (
    <div
      className={cn(
        'p-3 border-b border-zion-blue-light relative group',
        !notification.read ? 'bg-zion-blue-dark/30' : '')}
    >
      <div className=&quot;flex items-start gap-2&quot;>
        <div className=&quot;text-xl&quot;>{getTypeIcon(notification.type)}</div>
        <div className=&quot;flex-1&quot;>
          <div className=&quot;flex justify-between items-center mb-1&quot;>
            <h4 className=&quot;font-medium text-white&quot;>
              {notification.title || 'Notification'}
            </h4>
            {!notification.read && (
              <Badge className=&quot;bg-zion-cyan text-xs&quot;>New</Badge>
            )}
          </div>
          <p className=&quot;text-sm text-zion-slate-light&quot;>
            {notification.message || 'You have a new notification'}
          </p>
          <div className=&quot;flex justify-between items-center mt-1&quot;>
            <p className=&quot;text-xs text-zion-slate&quot;>
              {notification.created_at
                ? formatDistanceToNow(new Date(notification.created_at), {
=======
      onMarkAsRead(notification.id);}
    // If there's an action window.URL, navigate to it
    if (notification.action_url) {_router.push(notification.action_url); // Changed to router.push}
  };

  return (
    <div
      className={_cn(
        'p-3 border-b border-zion-blue-light relative group', _!notification.read ? 'bg-zion-blue-dark/30' : '', _)}
    >
      <div className="flex items-start gap-2">
        <div className="text-xl">{_getTypeIcon(notification.type)}</div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-white">
              {_notification.title || 'Notification'}
            </h4>
            {_!notification.read && (
              <Badge className="bg-zion-cyan text-xs">New</Badge>
            )}
          </div>
          <p className="text-sm text-zion-slate-light">
            {_notification.message || 'You have a new notification'}
          </p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-zion-slate">
              {_notification.created_at
                ? formatDistanceToNow(new Date(notification.created_at), _{
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    addSuffix: true})
                : 'Just now'}
            </p>

            {_notification.action_url && notification.action_text && (
              <Button
                variant=&quot;link&quot;
                size=&quot;sm&quot;
                className=&quot;text-zion-cyan p-0 h-auto&quot;
                onClick={handleClick}
              >
<<<<<<< HEAD
                {notification.action_text}
                <ChevronRight className=&quot;h-3 w-3 ml-1&quot; />
=======
                {_notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Button>
            )}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Action buttons that appear on hover */}
<<<<<<< HEAD
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">
=======
      <div className=&quot;absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      {_/* Action buttons that appear on hover */}
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
<<<<<<< HEAD
                variant=&quot;ghost&quot;
                size=&quot;icon&quot;
                className=&quot;h-6 w-6&quot;
                onClick={(e) => {
                  e.stopPropagation(),
                  onMarkAsRead(notification.id)
                }}
                aria-label=&quot;Mark as read&quot;
=======
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={_(_e) => {
                  e.stopPropagation();
                  onMarkAsRead(notification.id);}}
                aria-label="Mark as read"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Check className=&quot;h-3.5 w-3.5 text-green-400&quot; />
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
              <Button
<<<<<<< HEAD
                variant=&quot;ghost&quot;
                size=&quot;icon&quot;
                className=&quot;h-6 w-6&quot;
                onClick={(e) => {
                  e.stopPropagation(),
                  onDismiss(notification.id)
                }}
                aria-label=&quot;Dismiss notification&quot;
=======
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={_(_e) => {
                  e.stopPropagation();
                  onDismiss(notification.id);}}
                aria-label="Dismiss notification"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Trash2 className=&quot;h-3.5 w-3.5 text-red-400&quot; />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Dismiss</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
},
