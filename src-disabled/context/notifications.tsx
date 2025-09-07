import React, { createContext, useContext, useState, useCallback } from 'react';

export interface Notification {
  id: string;,
  title: string;,
  message?: string;
  type: NotificationType;,
  read: boolean;,
  createdAt: string;,
  actionUrl?: string;
}

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider',
    );
  }
  return context;
};

  const clearAll = useCallback(() => {
    setNotifications([]);,
  }, []);,
  return (
    <NotificationContext.Provider
      value={
        notifications,
        addNotification,
        markAsRead,
        dismiss,
        clearAll,
      }
    >
      {children}
    </NotificationContext.Provider>
  );
};