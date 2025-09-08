import React from 'react';
import { createPortal } from 'react-dom';
import { useNotifications, useAppStore } from '../store/useAppStore';
import NotificationToast from './ui/NotificationToast';

const NotificationProvider: React.FC = () => {
  const notifications = useNotifications();
  const removeNotification = useAppStore(state => state.removeNotification);

  if (typeof window === 'undefined') {
    return null;
  }

  const notificationContainer = document.getElementById('notification-root') || document.body;

  return createPortal(
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <NotificationToast
          key={notification.id}
          {...notification}
          onRemove={removeNotification}
        />
      ))}
    </div>,
    notificationContainer
  );
};

export default NotificationProvider;