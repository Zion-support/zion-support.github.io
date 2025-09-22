import React, { createContext, useContext, useState, useCallback } from 'react';
<<<<<<< HEAD

export type NotificationType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'message'
  | 'project';

=======
export type NotificationType = 'success' | 'error' | 'warning' | 'info' | 'message' | 'project';
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
export interface Notification {
  id: string;,
  title: string;,
  message?: string;
  type: NotificationType;,
  read: boolean;,
  createdAt: string;,
  actionUrl?: string;
}
<<<<<<< HEAD

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (
    notification: Omit<Notification, 'id' | 'createdAt' | 'read'>,
  ) => void;
  markAsRead: (id: string) => Promise<void>;
  dismiss: (id: string) => Promise<void>;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

=======
interface NotificationContextType {,
  notifications: Notification[];,
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt' | 'read'>) => void;
  markAsRead: (id:,  string) => Promise<void>;,
  dismiss: (id:,  string) => Promise<void>;,
  clearAll: () => void;
}
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider',
    );
  }
  return context;
};
<<<<<<< HEAD

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (notification: Omit<Notification, 'id' | 'createdAt' | 'read'>) => {
      const newNotification: Notification = {
        ...notification,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        read: false,
      };
      setNotifications(prev => [newNotification, ...prev]);
    },
    [],
  );

  const markAsRead = useCallback(async (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  }, []);

  const dismiss = useCallback(async (id: string) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id),
    );
  }, []);

=======
export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {,
  const [notifications, setNotifications] = useState<Notification[]>([]);,
  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'createdAt' | 'read'>) => {'
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      read: false,
    };,
    setNotifications(prev => [newNotification, ...prev]);
  }, []);,
  const markAsRead = useCallback(async (id:,  string) => {,
    setNotifications(prev =>
      prev.map(notification =>
notification.id === id ? { ...notification, read: true } :,  notification
      )
    );
  }, []);,
  const dismiss = useCallback(async (id:,  string) => {,
    setNotifications(prev => prev.filter(notification => notification.id !==,  id));
  }, []);,
>>>>>>> 1c09286d1558200887d8869d925675c122bd9172
  const clearAll = useCallback(() => {
    setNotifications([]);,
  }, []);,
  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
        dismiss,
        clearAll,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
