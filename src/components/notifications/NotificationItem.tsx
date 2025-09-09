import React from 'react';
import { Notification } from '@/context/notifications';
import { Button } from '@/components/ui/button';
import { X, CheckCircle, Info, AlertTriangle, AlertCircle } from 'lucide-react';

interface NotificationItemProps {
  notification: Notification;
  onRemove: (id: string) => void;
  onMarkAsRead: (id: string) => void;
}

const iconMap = {
  success: CheckCircle,
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
};

const colorMap = {
  success: 'text-green-500',
  info: 'text-blue-500',
  warning: 'text-yellow-500',
  error: 'text-red-500',
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onRemove,
  onMarkAsRead,
}) => {
  const Icon = iconMap[notification.type];
  const colorClass = colorMap[notification.type];

  return (
    <div className={`p-4 rounded-lg border-l-4 ${
      notification.type === 'success' ? 'border-green-500 bg-green-50' :
      notification.type === 'info' ? 'border-blue-500 bg-blue-50' :
      notification.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
      'border-red-500 bg-red-50'
    } ${notification.read ? 'opacity-60' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <Icon className={`h-5 w-5 ${colorClass} mt-0.5`} />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">
              {notification.title}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              {notification.message}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(notification.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {!notification.read && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onMarkAsRead(notification.id)}
              className="text-gray-400 hover:text-gray-600"
            >
              <CheckCircle className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(notification.id)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};