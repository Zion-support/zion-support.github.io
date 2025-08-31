import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertTriangle,
  Archive,
  Bell,
  CheckCircle,
  Clock,
  Eye,
  Globe,
  Info,
  Search,
  Settings,
  Shield,
  X,
  XCircle,
  Zap
} from 'lucide-react';
import React from 'react';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'system';
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: 'user' | 'system' | 'security' | 'performance' | 'update';
  timestamp: Date;
  read: boolean;
  archived: boolean;
  actions?: NotificationAction[];
  metadata?: Record<string, any>;
  expiresAt?: Date;
}

export interface NotificationAction {
  label: string;
  action: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ComponentType<any>;
}

interface SmartNotificationSystemProps {
  enabled?: boolean;
  maxNotifications?: number;
  autoDismissDelay?: number;
  onNotificationClick?: (notification: Notification) => void;
  className?: string;
}

interface NotificationSettings {
  sound: boolean;
  desktop: boolean;
  autoDismiss: boolean;
  autoDismissDelay: number;
  groupByCategory: boolean;
}

const SmartNotificationSystem: React.FC<SmartNotificationSystemProps> = ({
  enabled = true,
  maxNotifications = 50,
  autoDismissDelay = 5000,
  onNotificationClick,
  className = ''
}) => {
  const [notifications, setNotifications] = React.useState<Notification[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [filter, setFilter] = React.useState<'all' | 'unread' | 'important'>('all');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [settings, setSettings] = React.useState<NotificationSettings>({
    sound: true,
    desktop: true,
    autoDismiss: true,
    autoDismissDelay: 5000,
    groupByCategory: true
  });

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  React.useEffect(() => {
    if (settings.sound) {
      audioRef.current = new Audio('/notification-sound.mp3');
      audioRef.current.volume = 0.5;
    }
  }, [settings.sound]);

  // Request notification permission
  const requestNotificationPermission = React.useCallback(async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted');
      }
    }
  }, []);

  // Add notification function
  const addNotification = React.useCallback((notification: Omit<Notification, 'id' | 'timestamp' | 'read' | 'archived'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      read: false,
      archived: false
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      return updated.slice(0, maxNotifications);
    });

    // Play sound if enabled
    if (settings.sound && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Ignore audio play errors
      });
    }

    // Auto-dismiss if enabled
    if (settings.autoDismiss && notification.priority !== 'critical') {
      setTimeout(() => {
        dismissNotification(newNotification.id);
      }, settings.autoDismissDelay);
    }

    // Show desktop notification if enabled
    if (settings.desktop && 'Notification' in window && Notification.permission === 'granted') {
      new Notification(notification.title, {
        body: notification.message,
        icon: '/favicon.ico',
        tag: newNotification.id,
        requireInteraction: notification.priority === 'critical'
      });
    }
  }, [maxNotifications, settings, autoDismissDelay]);

  // Dismiss notification
  const dismissNotification = React.useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Mark as read
  const markAsRead = React.useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  }, []);

  // Archive notification
  const archiveNotification = React.useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, archived: true } : n)
    );
  }, []);

  // Mark all as read
  const markAllAsRead = React.useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, []);

  // Clear all notifications
  const clearAllNotifications = React.useCallback(() => {
    setNotifications([]);
  }, []);

  // Filter notifications
  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread' && notification.read) return false;
    if (filter === 'important' && notification.priority !== 'high' && notification.priority !== 'critical') return false;

    if (searchTerm && !notification.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !notification.message.toLowerCase().includes(searchTerm.toLowerCase())) return false;

    return !notification.archived;
  });

  // Get notification icon
  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success': return CheckCircle;
      case 'error': return XCircle;
      case 'warning': return AlertTriangle;
      case 'info': return Info;
      case 'system': return Zap;
      default: return Info;
    }
  };

  // Get priority color
  const getPriorityColor = (priority: Notification['priority']) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'high': return 'text-orange-600 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800';
      case 'medium': return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'low': return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
    }
  };

  // Get category icon
  const getCategoryIcon = (category: Notification['category']) => {
    switch (category) {
      case 'user': return Eye;
      case 'system': return Zap;
      case 'security': return Shield;
      case 'performance': return Zap;
      case 'update': return Globe;
      default: return Info;
    }
  };

  // Group notifications by category
  const groupedNotifications = React.useMemo(() => {
    if (!settings.groupByCategory) {
      return { 'all': filteredNotifications };
    }

    return filteredNotifications.reduce((groups, notification) => {
      const category = notification.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(notification);
      return groups;
    }, {} as Record<string, Notification[]>);
  }, [filteredNotifications, settings.groupByCategory]);

  // Handle notification action
  const handleNotificationAction = React.useCallback((notification: Notification, action: NotificationAction) => {
    action.action();
    if (onNotificationClick) {
      onNotificationClick(notification);
    }
  }, [onNotificationClick]);

  if (!enabled) return null;

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
        aria-label="Open notifications"
      >
        <Bell className="w-6 h-6" />
        {notifications.filter(n => !n.read).length > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium"
          >
            {notifications.filter(n => !n.read).length}
          </motion.div>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <Bell className="w-6 h-6 text-blue-600" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Notifications
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {notifications.filter(n => !n.read).length} unread
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    title="Settings"
                  >
                    <Settings className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Settings Panel */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-b border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="p-4 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={settings.sound}
                            onChange={(e) => setSettings(prev => ({ ...prev, sound: e.target.checked }))}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-sm">Sound</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={settings.desktop}
                            onChange={(e) => setSettings(prev => ({ ...prev, desktop: e.target.checked }))}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-sm">Desktop</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={settings.autoDismiss}
                            onChange={(e) => setSettings(prev => ({ ...prev, autoDismiss: e.target.checked }))}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-sm">Auto-dismiss</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={settings.groupByCategory}
                            onChange={(e) => setSettings(prev => ({ ...prev, groupByCategory: e.target.checked }))}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-sm">Group by category</span>
                        </label>
                      </div>
                      <button
                        onClick={requestNotificationPermission}
                        className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Request Permission
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Filters and Actions */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-1">
                    {(['all', 'unread', 'important'] as const).map((filterType) => (
                      <button
                        key={filterType}
                        onClick={() => setFilter(filterType)}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                          filter === filterType
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                      >
                        {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                      </button>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={markAllAsRead}
                      className="px-3 py-1 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Mark All Read
                    </button>
                    <button
                      onClick={clearAllNotifications}
                      className="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Notifications List */}
              <div className="overflow-y-auto max-h-[60vh]">
                {Object.entries(groupedNotifications).map(([category, categoryNotifications]) => (
                  <div key={category} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    {settings.groupByCategory && (
                      <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800">
                        <div className="flex items-center space-x-2">
                          {React.createElement(getCategoryIcon(category as Notification['category']), { className: "w-4 h-4" })}
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                            {category}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            ({categoryNotifications.length})
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {categoryNotifications.map((notification) => (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer ${
                            !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                          }`}
                          onClick={() => {
                            markAsRead(notification.id);
                            if (onNotificationClick) {
                              onNotificationClick(notification);
                            }
                          }}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg ${getPriorityColor(notification.priority)}`}>
                              {React.createElement(getNotificationIcon(notification.type), { className: "w-4 h-4" })}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className={`text-sm font-medium ${
                                    !notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                                  }`}>
                                    {notification.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {notification.message}
                                  </p>
                                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                                    <span className="flex items-center space-x-1">
                                      <Clock className="w-3 h-3" />
                                      <span>{notification.timestamp.toLocaleTimeString()}</span>
                                    </span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                                      {notification.priority}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-1 ml-2">
                                  {!notification.read && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        markAsRead(notification.id);
                                      }}
                                      className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                                      title="Mark as read"
                                    >
                                      <Eye className="w-4 h-4" />
                                    </button>
                                  )}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      archiveNotification(notification.id);
                                    }}
                                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                                    title="Archive"
                                  >
                                    <Archive className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      dismissNotification(notification.id);
                                    }}
                                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                                    title="Dismiss"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>

                              {/* Actions */}
                              {notification.actions && notification.actions.length > 0 && (
                                <div className="flex space-x-2 mt-3">
                                  {notification.actions.map((action, index) => (
                                    <button
                                      key={index}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleNotificationAction(notification, action);
                                      }}
                                      className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                                        action.variant === 'primary'
                                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                                          : action.variant === 'danger'
                                          ? 'bg-red-600 text-white hover:bg-red-700'
                                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                      }`}
                                    >
                                      {action.icon && React.createElement(action.icon, { className: "w-3 h-3 inline mr-1" })}
                                      {action.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
                
                {filteredNotifications.length === 0 && (
                  <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                    <Bell className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No notifications to display</p>
                    <p className="text-sm">You're all caught up!</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Export the addNotification function for external use
export const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read' | 'archived'>) => {
  // This will be implemented by the component instance
  console.warn('addNotification called before component initialization');
};

export default SmartNotificationSystem;
