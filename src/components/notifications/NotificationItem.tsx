import React from 'react';
import { Notification } from '@/context/notifications';
import { Button } from '@/components/ui/Button';
import { X, Check, AlertCircle, Info } from 'lucide-react';

interface NotificationItemProps {
  notification: Notification;
  onDismiss: (id: string) => void;
  onMarkAsRead: (id: string) => void;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onDismiss,
  onMarkAsRead,
}) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <Check className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <div className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex-shrink-0">
        {getIcon()}
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900">
          {notification.title}
        </h4>
        {notification.message && (
          <p className="mt-1 text-sm text-gray-600">
            {notification.message}
          </p>
        )}
        <p className="mt-1 text-xs text-gray-500">
          {new Date(notification.createdAt).toLocaleString()}
        </p>
      </div>
      
      <div className="flex space-x-2">
        {!notification.read && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onMarkAsRead(notification.id)}
            className="text-xs"
          >
            Mark as read
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDismiss(notification.id)}
          className="text-xs text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};