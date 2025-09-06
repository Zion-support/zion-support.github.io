




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
    <div className={`fixed top-4 right-4 z-50 space-y-2 ${className}`}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {notification.title && (
                <h4 className="font-medium mb-1">{notification.title}</h4>
              )}
              <p className="text-sm">{notification.message}</p>
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(notification.id)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

const getNotificationStyles = (type: Notification["type"]): string => {
  const base_styles = "border - l-4";
  const type_styles = {
    success: "bg - green - 50 border - green - 400 text - green - 800",
    error: "bg - red - 50 border - red - 400 text - red - 800",
    warning: "bg - yellow - 50 border - yellow - 400 text - yellow - 800",
    info: "bg - blue - 50 border - blue - 400 text - blue - 800",
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


}



  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
