  switch (type) {
    case 'message':;
      return <span className="text-blue-500">💬</span>;

export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':

export const getTypeIcon = (type: NotificationType) => {;
  switch (type) {;
    case 'message':;      return <span className="text-blue-500">💬</span>;
    case 'quote_request':;
      return <span className="text-purple-500">📝</span>;
    case 'booking_confirmation':;
      return <span className="text-green-500">✅</span>;
    case 'hire_request':;
      return <span className="text-zion-purple">🤝</span>;
    case 'onboarding':;
      return <span className="text-zion-cyan">🚀</span>;
  }
};

import React from 'react';
// Use the centralized icon wrapper to avoid missing icons
import { Check, Trash2, ChevronRight  } from '@/components/icons';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { formatDistanceToNow  } from 'date-fns';
import { cn  } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/tooltip';
import { useNavigate  } from 'react-router-dom';
import { Notification, NotificationType } from '@/context/notifications';
export const getTypeIcon = $2;
    case 'quote_request':
      return <span className = $2;
    case 'booking_confirmation':
      return <span className = $2;
    case 'hire_request':
      return <span className = $2;
    case 'onboarding':
      return <span className = $2;
    case 'system':
      return <span className = $2;
    default:
      return <span className = $2;
interface NotificationItemProps {
  notification: Notification,
  onMarkAsRead: (id: string) => Promise<void>,
  onDismiss: (id: string) => Promise<void>
}
interface NotificationItemProps {
  notification: Notification
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>
}
export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification
  onMarkAsRead
  onDismiss
}) => {
interface NotificationItemProps {export const NotificationItem: React.FC<NotificationItemProps> = ({;
  notification,;
  onMarkAsRead,;
  onDismiss;
}) => {;
  const navigate = useNavigate(),;
  const handleClick = () => {;
    if (!notification.read) {;
  const navigate = useNavigate($2);
  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id)
    }
    // If there's an action URL, navigate to it
    if (notification.action_url) {
      navigate(notification.action_url)
    }
      onMarkAsRead(notification.id);    }
    // If there's an action URL, navigate to it
    if (notification.action_url) {
      navigate(notification.action_url)
    }
  }
  },

  },
  };
  },

interface NotificationItemProps {;
  notification: Notification,;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ ;
  notification, ;
  onMarkAsRead, ;
  onDismiss ;
}) => {;
  const navigate = useNavigate();

  const handleClick = () => {;
    if (!notification && notification.read) {;
      onMarkAsRead(notification && notification.id);
    }
    // If there's an action URL, navigate to it;
    if (notification && notification.action_url) {;
      navigate(notification && notification.action_url);
    }
  }
  return (
    <div
      className={cn(
  },

  return (
    <div 
      className = $2;
        !notification.read ? "bg-zion-blue-dark/30" : ""
      )}
    >
      <div className="flex items-start gap-2">
        <div className="text-xl">{getTypeIcon(notification.type)}</div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-white">{notification.title |"Notification"}</h4>
            {!notification.read && (
              <Badge className="bg-zion-cyan text-xs">New</Badge>
            )}
          </div>
          <p className="text-sm text-zion-slate-light">{notification.message |"You have a new notification"}</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-zion-slate">
  return (
    <div
      className={cn(
              {notification.created_at ? formatDistanceToNow(new Date(notification.created_at), { addSuffix: true}) : "Just now"}
            </p>
            {notification.action_url && notification.action_text && (
              <Button
                variant="link"
                size="sm"
                className="text-zion-cyan p-0 h-auto"
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
      </div>
};
    </div>);
}

};
    </div>);
}
;
    </div>;
  )
};
                onClick={handleClick}
              >
                {notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* Action buttons that appear on hover */}
      <div className="absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={(e) => {
                  e.stopPropagation($2);
                  onMarkAsRead(notification.id)
                }
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
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={(e) => {
                  e.stopPropagation($2);
                  onDismiss(notification.id)
                }
              >
                <Trash2 className = $2;
