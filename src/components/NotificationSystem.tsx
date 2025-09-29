// Minimal placeholder NotificationSystem component
import React from 'react';

export interface Notification {
  id: string;
  message?: string;
}

export default function NotificationSystem({ notifications, onRemove }: { notifications: Notification[]; onRemove: (id: string) => void; }): JSX.Element {
  return <div id="notification-root" />;
}
