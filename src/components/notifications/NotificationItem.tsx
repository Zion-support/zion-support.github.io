import React from 'react';
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
    handleMarkAsRead();
  };

  return (
    <TooltipProvider>
      <div
        className={cn(
          'flex items-start gap-3 p-3 rounded-lg border transition-colors cursor-pointer',
          notification.read
            ? 'bg-muted/50 border-muted'
            : 'bg-background border-border hover:bg-muted/30',
        )}
        onClick={handleClick}
      >
        <div className="flex-shrink-0 mt-0.5">
          {getNotificationIcon(notification.type)}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p
                className={cn(
                  'text-sm font-medium truncate',
                  !notification.read && 'font-semibold',
                )}
              >
                {notification.title}
              </p>
              {notification.message && (
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {notification.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-1">
              {!notification.read && (
                <Badge variant="secondary" className="text-xs">
                  New
                </Badge>
              )}
              <span className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(notification.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMarkAsRead();
                  }}
                  className="h-6 px-2"
                >
                  <Check className="h-3 w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{notification.read ? 'Mark as unread' : 'Mark as read'}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDismiss();
                  }}
                  className="h-6 px-2 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Dismiss notification</p>
              </TooltipContent>
            </Tooltip>

            {notification.actionUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 px-2"
                  >
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View details</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};