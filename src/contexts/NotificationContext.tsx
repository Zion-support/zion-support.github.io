import React, { createContext, useContext, useState, useCallback } from 'react';
import Notification, { NotificationProps } from '../components/Notification';
import './NotificationProvider.css';

interface NotificationContextType {
  showNotification: (
    notification: Omit<NotificationProps, 'id' | 'onClose'>
  ) => void;
  hideNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

interface NotificationProviderProps {
  children: React.ReactNode;
  maxNotifications?: number;
}

export function NotificationProvider({
  children,
  maxNotifications = 5,
}: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const showNotification = useCallback(
    (notification: Omit<NotificationProps, 'id' | 'onClose'>) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newNotification: NotificationProps = {
        ...notification,
        id,
        onClose: hideNotification,
      };

      setNotifications(prev => {
        const updated = [newNotification, ...prev];
        // Keep only the most recent notifications
        return updated.slice(0, maxNotifications);
      });
    },
    [maxNotifications]
  );

  const hideNotification = useCallback((id: string) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id)
    );
  }, []);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const value: NotificationContextType = {
    showNotification,
    hideNotification,
    clearAllNotifications,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <div className='notification-container'>
        {notifications.map(notification => (
          <Notification key={notification.id} {...notification} />
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

export function useNotifications(): NotificationContextType {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider'
    );
  }
  return context;
}
