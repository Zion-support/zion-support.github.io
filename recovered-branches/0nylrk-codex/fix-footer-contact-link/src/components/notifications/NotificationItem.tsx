
import React from 'react',
// Use the centralized icon wrapper to avoid missing icons
<<<<<<< HEAD
import { Check, Trash2, ChevronRight } from '@/components/icons',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { formatDistanceToNow } from 'date-fns',
import { cn } from '@/lib/utils',
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',
import { useNavigate } from 'react-router-dom',
import { Notification, NotificationType } from '@/context/notifications',
=======
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
  onDismiss 
}) => {
  const navigate = useNavigate(),
=======
      return <span className="text-gray-500">📣</span>;}
};

interface NotificationItemProps {_notification: Notification;
  onMarkAsRead: (_id: string) => Promise<void>;
  onDismiss: (_id: string) => Promise<void>;}

export const NotificationItem: React.FC<NotificationItemProps> = (_{_notification, _onMarkAsRead, _onDismiss}) => {_const _navigate = useNavigate();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleClick = () => {
    if (!notification.read) {
<<<<<<< HEAD
      onMarkAsRead(notification.id)
    }
    // If there's an action URL, navigate to it
    if (notification.action_url) {
      navigate(notification.action_url)
    }
  },

  return (
    <div 
      className={cn(
        &quot;p-3 border-b border-zion-blue-light relative group&quot;,
        !notification.read ? &quot;bg-zion-blue-dark/30&quot; : ""
=======
      onMarkAsRead(notification.id);}
    // If there's an action window.URL, navigate to it
    if (notification.action_url) {_navigate(notification.action_url);}
  };

  return (
    <div 
      className={_cn(
        "p-3 border-b border-zion-blue-light relative group", _!notification.read ? "bg-zion-blue-dark/30" : ""
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
    >
      <div className="flex items-start gap-2">
        <div className="text-xl">{_getTypeIcon(notification.type)}</div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
<<<<<<< HEAD
            <h4 className="font-medium text-white&quot;>{notification.title || &quot;Notification"}</h4>
            {!notification.read && (
              <Badge className="bg-zion-cyan text-xs">New</Badge>
            )}
          </div>
          <p className="text-sm text-zion-slate-light&quot;>{notification.message || &quot;You have a new notification"}</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-zion-slate&quot;>
              {notification.created_at ? formatDistanceToNow(new Date(notification.created_at), { addSuffix: true }) : &quot;Just now&quot;}
=======
            <h4 className="font-medium text-white">{_notification.title || "Notification"}</h4>
            {_!notification.read && (
              <Badge className="bg-zion-cyan text-xs">New</Badge>
            )}
          </div>
          <p className="text-sm text-zion-slate-light">{_notification.message || "You have a new notification"}</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-zion-slate">
              {_notification.created_at ? formatDistanceToNow(new Date(notification.created_at), _{ addSuffix: true}) : "Just now"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
            
            {_notification.action_url && notification.action_text && (
              <Button
                variant=&quot;link&quot;
                size=&quot;sm"
                className="text-zion-cyan p-0 h-auto"
                onClick={handleClick}
              >
                {_notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />
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
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      {_/* Action buttons that appear on hover */}
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant=&quot;ghost&quot; 
                size=&quot;icon" 
                className="h-6 w-6"
<<<<<<< HEAD
                onClick={(e) => {
                  e.stopPropagation(),
                  onMarkAsRead(notification.id)
                }}
=======
                onClick={_(_e) => {
                  e.stopPropagation();
                  onMarkAsRead(notification.id);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Check className="h-3.5 w-3.5 text-green-400&quot; />
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
                variant=&quot;ghost&quot; 
                size=&quot;icon" 
                className="h-6 w-6"
<<<<<<< HEAD
                onClick={(e) => {
                  e.stopPropagation(),
                  onDismiss(notification.id)
                }}
=======
                onClick={_(_e) => {
                  e.stopPropagation();
                  onDismiss(notification.id);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Trash2 className="h-3.5 w-3.5 text-red-400" />
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
