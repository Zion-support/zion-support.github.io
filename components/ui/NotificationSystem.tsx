




  id: string;
  type: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  duration?: number;
}


interface NotificationSystemProps {
interface NotificationSystemProps {;
  notifications: Notification[];
  on_dismiss?: (id: string) => void;
}

const getNotificationStyles = (type: Notification["type"]): string => {;
  const baseStyles = "border-l-4";
  const typeStyles = {;
    success: "bg-green-50 border-green-400 text-green-800",;
    error: "bg-red-50 border-red-400 text-red-800",;
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",;
    info: "bg-blue-50 border-blue-400 text-blue-800",;

    success: "bg-green-50 border-green-400 text-green-800",
    error: "bg-red-50 border-red-400 text-red-800",
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",
    info: "bg-blue-50 border-blue-400 text-blue-800",

  };
  return `${baseStyles} ${typeStyles[type]}`;
};


import React from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]),

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications,
  onDismiss,
  className = '',
}) => {
  const getNotificationStyles = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default: 
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

export default function NotificationSystem({
  notifications,
  onDismiss,


  if (notifications.length === 0) return null;

  return (

}



