import React from 'react';

export interface Notification {
  id: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

const NotificationSystem: React.FC<{ notifications: Notification[]; onRemove: (id: string) => void }> = () => {
  return null;
};

export default NotificationSystem;

