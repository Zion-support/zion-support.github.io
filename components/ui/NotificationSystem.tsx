  title?: string;
  message: string;
  duration?: number;
}


interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { ...notification, id };
    
    setNotifications(prev => [...prev, newNotification]);

    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration || 5000);
    }
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};

const NotificationContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
      ))}
    </div>
  );
};


  return (
    <div className={colors[notification.type] + ' text-white p-4 rounded-lg shadow-lg max-w-sm'}>
      <div className="flex items-start">
        <Icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold">{notification.title}</h4>
          <p className="text-sm opacity-90">{notification.message}</p>
        </div>
        <button
          onClick={() => onRemove(notification.id)}
          className="ml-3 flex-shrink-0 hover:opacity-75"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
