
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";

export interface Notification {;
  id: string;
  type: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  duration?: number;
}

interface NotificationSystemProps {;
  notifications: Notification[];
  onDismiss?: (id: string) => void;
}

const getNotificationStyles = (type: Notification["type"]): string => {;
  const baseStyles = "border-l-4";
  const typeStyles = {;
    success: "bg-green-50 border-green-400 text-green-800",;
    error: "bg-red-50 border-red-400 text-red-800",;
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",;
    info: "bg-blue-50 border-blue-400 text-blue-800",;
  };
  return `${baseStyles} ${typeStyles[type]}`;
};

export default function NotificationSystem(): any ({;
  notifications,;
  onDismiss,;
}: NotificationSystemProps) {;
  if (notifications && notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">;
      {notifications && notifications.map((notification) => (;
        <div
          key={notification && notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification && notification.type)}`}>;
          <div className="flex items-start justify-between">;
            <div className="flex-1">;
              {notification && notification.title && (;
                <h4 className="font-medium mb-1">{notification && notification.title}</h4>;
              )}
              <p className="text-sm">{notification && notification.message}</p>;
            </div>;
            {onDismiss && (;
              <button
                onClick={() => onDismiss(notification && notification.id)}
                className="ml-2 text-gray-400 hover:text-gray-600";
              >;
                ×;
              </button>;
            )}
          </div>;
        </div>;
      ))}
    </div>;
  );
}
