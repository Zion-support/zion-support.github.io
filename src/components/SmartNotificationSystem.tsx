import React, { useState, useEffect, useCallback, useRef } from 'react';'
import { motion, AnimatePresence } from 'framer-motion';
import {

  Bell,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  XCircle,
  Settings,
  Volume2,
  VolumeX,
  Clock,
  Star,
  Archive,
  Trash2,
  Filter,
  Search,
  MoreVertical,
  Eye,
  EyeOff,
  Zap,
  Shield,'
  Globe} from 'lucide-react';

  id: string;
  title: string;
  message: string;'
  type: 'success' | 'error' | 'warning' | 'info' | 'system';'
  priority: 'low' | 'medium' | 'high' | 'critical';'
  category: 'user' | 'system' | 'security' | 'performance' | 'update';
  timestamp: Date;
  read: boolean;
  archived: boolean;
  actions?: NotificationAction[];
  metadata?: Record < string, any>;
  expiresAt?: Date;

  label: string;
  action: () => void;'
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ComponentType < any>;
}

interface SmartNotificationSystemProps {
  // Add your props here


  enabled?: boolean;
  maxNotifications?: number;
  autoDismiss?: boolean;
  autoDismissDelay?: number;
  soundEnabled?: boolean;
  onNotificationAction?: notification: Notification, action: string void;

export function SmartNotificationSystem({

  enabled = true,
  maxNotifications = 5,
  autoDismiss = true,
  autoDismissDelay = 5000,
  soundEnabled = true,
  onNotificationAction}: SmartNotificationSystemProps) {

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);'
  const [filter, setFilter] = useState<'all' | 'unread' | 'important'>('all');'
  const [searchTerm, setSearchTerm] = useState('');
  const [settings, setSettings] = useState({

    sound: soundEnabled,
    desktop: true,
    autoDismiss: autoDismiss,
    autoDismissDelay,
    showPreview: true,
    grouping: true,
    priority: true});

  const audioRef = useRef < HTMLAudioElement | null> (null) ;
  const notificationCount = notifications.filter (n => !n.read) .length;

  // Initialize audio for notification sounds
  useEffect ( () => {
    if (settings.sound) {
'
      audioRef.current = new Audio('/notification-sound.mp3');
      audioRef.current.volume = 0.3;
    }
  }, [settings.sound]) ;

  // Add notification
  const addNotification = useCallback()
    ('
      notification: Omit<Notification, 'id' | 'timestamp' | 'read' | 'archived'>
    ) => {

      const newNotification: Notification = {

        ...notification,
        id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date(),
        read: false,
        archived: false};

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

      // Auto-dismiss if enabled'
      if (settings.autoDismiss && notification.priority !== 'critical') {

        setTimeout(() => {
          dismissNotification(newNotification.id);
        }, settings.autoDismissDelay);
      }

      // Show desktop notification if enabled
      if()
        settings.desktop &&'
        'Notification' in window &&'
        Notification.permission === 'granted'
      ) {

        new Notification(notification.title, {

          body: notification.message,'
          icon: '/favicon.ico',
          tag: notification.id,'
          requireInteraction: notification.priority === 'critical'});
      }
    },
    [maxNotifications, settings, autoDismissDelay]
  );

  // Dismiss notification
  const dismissNotification = useCallback((id: string) => {

    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Mark as read
  const markAsRead = useCallback((id: string) => {

    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  // Archive notification
  const archiveNotification = useCallback((id: string) => {

    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, archived: true } : n))
    );
  }, []);

  // Mark all as read
  const markAllAsRead = useCallback ( () => {
    setNotifications (prev => prev.map (n => ({ ...n, read: true }) ) ) ;
  }, []) ;

  // Clear all notifications
  const clearAllNotifications = useCallback ( () => {
    setNotifications ([]) ;
  }, []) ;

  // Filter notifications
  const filteredNotifications = notifications.filter(notification => {
'
    if (filter === 'unread' && notification.read) return false;
    if ('
      filter === 'important' &&'
      notification.priority !== 'high' &&'
      notification.priority !== 'critical'
    )
      return false;
    if()
      searchTerm &&
      !notification.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !notification.message.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return !notification.archived;
  });

  // Get notification icon'
  const getNotificationIcon = (type: Notification['type']) => {

    switch (type) {
'
      case 'success':
        return CheckCircle;'
      case 'error':
        return XCircle;'
      case 'warning':
        return AlertTriangle;'
      case 'info':
        return Info;'
      case 'system':
        return Zap;
      default:
        return Info;
    }
  };

  // Get priority color'
  const getPriorityColor = (priority: Notification['priority']) => {

    switch (priority) {
'
      case 'critical':'
        return 'text-red-600 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';'
      case 'high':'
        return 'text-orange-600 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800';'
      case 'medium':'
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';'
      case 'low':'
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      default:'
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
    }
  };

  // Get category icon'
  const getCategoryIcon = (category: Notification['category']) => {

    switch (category) {
'
      case 'user':
        return Eye;'
      case 'system':
        return Zap;'
      case 'security':
        return Shield;'
      case 'performance':
        return Zap;'
      case 'update':
        return Globe;
      default:
        return Info;
    }
  };

  // Request notification permission
  const requestNotificationPermission = useCallback(async () => {
'
    if ('Notification' in window && Notification.permission === 'default') {

      const permission = await Notification.requestPermission();'
      if (permission === 'granted') {

        setSettings(prev => ({ ...prev, desktop: true }));
      }
    }
  }, []) ;

  // Handle notification action
  const handleNotificationAction = useCallback()
    (notification: Notification, action: NotificationAction) => {

      action.action();
      markAsRead(notification.id);

      if (onNotificationAction) {

        onNotificationAction(notification, action.label);
      }
    },
    [markAsRead, onNotificationAction]
  );

  // Group notifications by category
  const groupedNotifications = settings.grouping
    ? filteredNotifications.reduce()
        (groups, notification) => {

          const category = notification.category;
          if (!groups[category]) groups[category] = [];
          groups[category].push(notification);
          return groups;
        },
        {} as Record<string, Notification[]>
      )
    : { All: filteredNotifications };

  if (!enabled) return null;

  return()
    <>
      {/* Notification Bell */}
      <motion.button
        onClick={ () => setIsOpen (true) }
        className="relative p - 2 text - gray - 600 dark:text - gray - 400 hover:text - gray - 900 dark:hover:text - white transition - colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}"
        aria-label="Open notifications"
      >"
        <Bell className="w-6 h-6" />
        {notificationCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}"
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium"
          >'
            {notificationCount > 99 ? '99+' : notificationCount}
          </motion.div>) }
      </motion.button>

      {/* Notification Panel */}
      <AnimatePresence>
        {isOpen && (<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}"
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
            >
              {/* Header */}"
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">"
                <div className="flex items-center space-x-3">"
                  <Bell className="w-6 h-6 text-blue-600" />
                  <div>"
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Notifications
                    </h2>"
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {notificationCount} unread
                    </p>
                  </div>
                </div>"
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowSettings(!showSettings)}"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >"
                    <Settings className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >"
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Settings Panel */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}'
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}"
                    className="border-b border-gray-200 dark:border-gray-700 overflow-hidden"
                  >"
                    <div className="p-4 space-y-4">"
                      <div className="grid grid-cols-2 gap-4">"
                        <label className="flex items-center space-x-2">
                          <input"
                            type="checkbox"
                            checked={settings.sound}
                            onChange={e =>
                              setSettings(prev => ({

                                ...prev,
                                sound: e.target.checked}))
                            }"
                            className="w-4 h-4 text-blue-600"
                          />"
                          <span className="text-sm">Sound</span>
                        </label>"
                        <label className="flex items-center space-x-2">
                          <input"
                            type="checkbox"
                            checked={settings.desktop}
                            onChange={e =>
                              setSettings(prev => ({

                                ...prev,
                                desktop: e.target.checked}))
                            }"
                            className="w-4 h-4 text-blue-600"
                          />"
                          <span className="text-sm">Desktop</span>
                        </label>"
                        <label className="flex items-center space-x-2">
                          <input"
                            type="checkbox"
                            checked={settings.autoDismiss}
                            onChange={e =>
                              setSettings(prev => ({

                                ...prev,
                                autoDismiss: e.target.checked}))
                            }"
                            className="w-4 h-4 text-blue-600"
                          />"
                          <span className="text-sm">Auto-dismiss</span>
                        </label>"
                        <label className="flex items-center space-x-2">
                          <input"
                            type="checkbox"
                            checked={settings.grouping}
                            onChange={e =>
                              setSettings(prev => ({

                                ...prev,
                                grouping: e.target.checked}))
                            }"
                            className="w-4 h-4 text-blue-600"
                          />"
                          <span className="text-sm">Group by category</span>
                        </label>
                      </div>
                      {settings.desktop &&'
                        Notification.permission === 'default' && (
                          <button
                            onClick={requestNotificationPermission}"
                            className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Enable Desktop Notifications
                          </button>
                        )}
                    </div>
                  </motion.div>) }
              </AnimatePresence>

              {/* Controls */}"
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">"
                <div className="flex items-center justify-between mb-3">"
                  <div className="flex space-x-1">'
                    {(['all', 'unread', 'important'] as const).map()
                      filterType => (
                        <button
                          key={filterType}
                          onClick={() => setFilter(filterType)}`
                          className={`px-3 py-1 text-sm rounded-lg transition-colors ${

                            filter === filterType'
                              ? 'bg-blue-600 text-white''
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'`
                          }`}
                        >
                          {filterType.charAt(0).toUpperCase() +
                            filterType.slice(1)}
                        </button>
                      )
                    )}
                  </div>"
                  <div className="flex space-x-2">
                    <button
                      onClick={markAllAsRead}"
                      className="px-3 py-1 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Mark All Read
                    </button>
                    <button
                      onClick={clearAllNotifications}"
                      className="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                </div>"
                <div className="relative">"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input"
                    type="text""
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Notifications List */}"
              <div className="overflow-y-auto max-h-[60vh]">
                {Object.entries(groupedNotifications).map()
                  ([category, categoryNotifications]) => (
                    <div
                      key={category}"
                      className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                    >
                      {settings.grouping && ("
                        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800">"
                          <div className="flex items-center space-x-2">
                            {getCategoryIcon('
                              category as Notification['category']'
                            )({ className: 'w-4 h-4' })}"
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                              {category}
                            </span>"
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              ({categoryNotifications.length})
                            </span>
                          </div>
                        </div>
                      )}"
                      <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {categoryNotifications.map(notification => (
                          <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}`
                            className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${

                              !notification.read'
                                ? 'bg-blue-50 dark:bg-blue-900/10''
                                : ''`
                            }`}
                          >"
                            <div className="flex items-start space-x-3">
                              <div`
                                className={`p-2 rounded-lg ${getPriorityColor(notification.priority)}`}
                              >
                                {getNotificationIcon(notification.type)({
'
                                  className: 'w-5 h-5'})}
                              </div>"
                              <div className="flex-1 min-w-0">"
                                <div className="flex items-start justify-between">"
                                  <div className="flex-1">
                                    <h4`
                                      className={`text-sm font-medium ${

                                        !notification.read'
                                          ? 'text-gray-900 dark:text-white''
                                          : 'text-gray-700 dark:text-gray-300'`
                                      }`}
                                    >
                                      {notification.title}
                                    </h4>"
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                      {notification.message}
                                    </p>"
                                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-gray-400">"
                                      <span className="flex items-center space-x-1">"
                                        <Clock className="w-3 h-3" />
                                        <span>
                                          {notification.timestamp.toLocaleTimeString()}
                                        </span>
                                      </span>
                                      <span`
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}
                                      >
                                        {notification.priority}
                                      </span>
                                    </div>
                                  </div>"
                                  <div className="flex items-center space-x-1 ml-2">
                                    {!notification.read && (
                                      <button
                                        onClick={() =>
                                          markAsRead(notification.id)
                                        }"
                                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors""
                                        title="Mark as read"
                                      >"
                                        <Eye className="w-4 h-4" />
                                      </button>
                                    )}
                                    <button
                                      onClick={() =>
                                        archiveNotification(notification.id)
                                      }"
                                      className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors""
                                      title="Archive"
                                    >"
                                      <Archive className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() =>
                                        dismissNotification(notification.id)
                                      }"
                                      className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors""
                                      title="Dismiss"
                                    >"
                                      <X className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>

                                {/* Actions */}
                                {notification.actions &&
                                  notification.actions.length > 0 && ("
                                    <div className="flex space-x-2 mt-3">
                                      {notification.actions.map()
                                        (action, index) => (
                                          <button
                                            key={index}
                                            onClick={() =>
                                              handleNotificationAction()
                                                notification,
                                                action
                                              )
                                            }`
                                            className={`px-3 py-1 text-xs rounded-lg transition-colors ${
'
                                              action.variant === 'primary''
                                                ? 'bg-blue-600 text-white hover:bg-blue-700''
                                                : action.variant === 'danger''
                                                  ? 'bg-red-600 text-white hover:bg-red-700''
                                                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'`
                                            }`}
                                          >
                                            {action.icon && ("
                                              <action.icon className="w-3 h-3 inline mr-1" />
                                            )}
                                            {action.label}
                                          </button>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                )}

                {filteredNotifications.length === 0 && ("
                  <div className="p-8 text-center text-gray-500 dark:text-gray-400">"
                    <Bell className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No notifications to display</p>'"
                    <p className="text-sm">You're all caught up!</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>
    </>) ;
}

// Export the addNotification function for external use
export const addNotification = ('
  notification: Omit<Notification, 'id' | 'timestamp' | 'read' | 'archived'>
) => {

  // This will be implemented by the component instance'
  // console.warn('addNotification called before component initialization');
};
'"`