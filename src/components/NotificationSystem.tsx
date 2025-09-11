import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  X, 
  Bell, 
  Settings,
  Volume2,
  VolumeX,
  Zap,
  Star,
  MessageSquare,
  Shield,
  Clock
} from 'lucide-react';

export type NotificationType = 'success' | 'warning' | 'error' | 'info' | 'achievement';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
  priority: 'low' | 'medium' | 'high';
  category?: string;
  icon?: React.ReactNode;
}

interface NotificationSystemProps {
  maxNotifications?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  enableSound?: boolean;
  enableVibration?: boolean;
  autoDismiss?: boolean;
  defaultDuration?: number;
}

interface NotificationSettings {
  sound: boolean;
  vibration: boolean;
  autoDismiss: boolean;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  maxNotifications: number;
  defaultDuration: number;
}

export const NotificationSystem: React.FC<NotificationSystemProps> = ({
  maxNotifications = 5,
  position = 'top-right',
  enableSound = true,
  enableVibration = true,
  autoDismiss = true,
  defaultDuration = 5000
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [settings, setSettings] = useState<NotificationSettings>({
    sound: enableSound,
    vibration: enableVibration,
    autoDismiss: autoDismiss,
    position,
    maxNotifications,
    defaultDuration
  });
  const [showSettings, setShowSettings] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio for notification sounds
  useEffect(() => {
    if (settings.sound) {
      audioRef.current = new Audio('/notification-sound.mp3'); // You can add a custom sound file
      audioRef.current.volume = 0.3;
    }
  }, [settings.sound]);

  // Update unread count
  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);

  // Auto-dismiss notifications
  useEffect(() => {
    if (!settings.autoDismiss) return;

    const timeouts: NodeJS.Timeout[] = [];
    
    notifications.forEach(notification => {
      if (notification.duration !== 0) {
        const timeout = setTimeout(() => {
          dismissNotification(notification.id);
        }, notification.duration || settings.defaultDuration);
        timeouts.push(timeout);
      }
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [notifications, settings.autoDismiss, settings.defaultDuration]);

  // Play notification sound
  const playSound = useCallback(() => {
    if (settings.sound && audioRef.current) {
      try {
        audioRef.current.play().catch(() => {
          // Ignore autoplay restrictions
        });
      } catch (error) {
        console.warn('Could not play notification sound:', error);
      }
    }
  }, [settings.sound]);

  // Trigger vibration
  const triggerVibration = useCallback(() => {
    if (settings.vibration && 'vibrate' in navigator) {
      try {
        navigator.vibrate(200);
      } catch (error) {
        console.warn('Could not trigger vibration:', error);
      }
    }
  }, [settings.vibration]);

  // Add notification
  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      read: false,
      duration: notification.duration ?? settings.defaultDuration
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      return updated.slice(0, settings.maxNotifications);
    });

    // Play sound and vibrate
    playSound();
    triggerVibration();
  }, [settings.maxNotifications, settings.defaultDuration, playSound, triggerVibration]);

  // Dismiss notification
  const dismissNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Mark notification as read
  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  }, []);

  // Mark all as read
  const markAllAsRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, []);

  // Clear all notifications
  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  // Get notification icon
  const getNotificationIcon = (type: NotificationType, priority: string) => {
    const iconProps = { className: "w-5 h-5" };
    
    switch (type) {
      case 'success':
        return <CheckCircle {...iconProps} className={`w-5 h-5 ${priority === 'high' ? 'text-green-600' : 'text-green-500'}`} />;
      case 'warning':
        return <AlertTriangle {...iconProps} className={`w-5 h-5 ${priority === 'high' ? 'text-yellow-600' : 'text-yellow-500'}`} />;
      case 'error':
        return <AlertTriangle {...iconProps} className={`w-5 h-5 ${priority === 'high' ? 'text-red-600' : 'text-red-500'}`} />;
      case 'info':
        return <Info {...iconProps} className={`w-5 h-5 ${priority === 'high' ? 'text-blue-600' : 'text-blue-500'}`} />;
      case 'achievement':
        return <Star {...iconProps} className={`w-5 h-5 ${priority === 'high' ? 'text-purple-600' : 'text-purple-500'}`} />;
      default:
        return <Bell {...iconProps} className="w-5 h-5 text-zion-slate" />;
    }
  };

  // Get notification styles
  const getNotificationStyles = (type: NotificationType, priority: string) => {
    const baseStyles = "border-l-4 ";
    
    switch (type) {
      case 'success':
        return baseStyles + (priority === 'high' ? 'border-green-600 bg-green-50' : 'border-green-500 bg-green-50/80');
      case 'warning':
        return baseStyles + (priority === 'high' ? 'border-yellow-600 bg-yellow-50' : 'border-yellow-500 bg-yellow-50/80');
      case 'error':
        return baseStyles + (priority === 'high' ? 'border-red-600 bg-red-50' : 'border-red-500 bg-red-50/80');
      case 'info':
        return baseStyles + (priority === 'high' ? 'border-blue-600 bg-blue-50' : 'border-blue-500 bg-blue-50/80');
      case 'achievement':
        return baseStyles + (priority === 'high' ? 'border-purple-600 bg-purple-50' : 'border-purple-500 bg-purple-50/80');
      default:
        return baseStyles + 'border-zion-slate bg-zion-slate/10';
    }
  };

  // Get position classes
  const getPositionClasses = () => {
    switch (settings.position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      default:
        return 'top-4 right-4';
    }
  };

  // Update settings
  const updateSettings = useCallback((newSettings: Partial<NotificationSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  // Expose addNotification method globally for external use
  useEffect(() => {
    (window as any).addNotification = addNotification;
    return () => {
      delete (window as any).addNotification;
    };
  }, [addNotification]);

  return (
    <>
      {/* Notification Bell */}
      <div className={`fixed ${getPositionClasses()} z-50`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-3 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105"
          title="Notifications"
        >
          <Bell className="w-6 h-6 text-zion-slate-dark" />
          
          {/* Unread count badge */}
          {unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-xs font-bold rounded-full flex items-center justify-center"
            >
              {unreadCount > 99 ? '99+' : unreadCount}
            </motion.div>
          )}
        </button>

        {/* Settings button */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-2 bg-zion-slate/10 hover:bg-zion-slate/20 rounded-lg transition-colors"
          title="Notification Settings"
        >
          <Settings className="w-4 h-4 text-zion-slate" />
        </button>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className={`fixed ${getPositionClasses()} z-40 mt-20 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 p-6 w-80`}
          >
            <h3 className="text-lg font-semibold text-zion-slate-dark mb-4">Notification Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zion-slate">Sound</span>
                <button
                  onClick={() => updateSettings({ sound: !settings.sound })}
                  className={`p-2 rounded-lg transition-colors ${
                    settings.sound ? 'bg-green-100 text-green-600' : 'bg-zion-slate/10 text-zion-slate'
                  }`}
                >
                  {settings.sound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-zion-slate">Vibration</span>
                <button
                  onClick={() => updateSettings({ vibration: !settings.vibration })}
                  className={`p-2 rounded-lg transition-colors ${
                    settings.vibration ? 'bg-blue-100 text-blue-600' : 'bg-zion-slate/10 text-zion-slate'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-zion-slate">Auto-dismiss</span>
                <button
                  onClick={() => updateSettings({ autoDismiss: !settings.autoDismiss })}
                  className={`p-2 rounded-lg transition-colors ${
                    settings.autoDismiss ? 'bg-green-100 text-green-600' : 'bg-zion-slate/10 text-zion-slate'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-4 border-t border-zion-slate/20">
                <button
                  onClick={markAllAsRead}
                  className="w-full px-4 py-2 bg-zion-cyan/10 hover:bg-zion-cyan/20 text-zion-cyan rounded-lg transition-colors text-sm"
                >
                  Mark all as read
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={clearAll}
                  className="w-full px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors text-sm"
                >
                  Clear all notifications
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className={`fixed ${getPositionClasses()} z-40 mt-20 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 p-4 w-96 max-h-96 overflow-hidden`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-zion-slate-dark">Notifications</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-zion-slate/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-zion-slate" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="space-y-2 max-h-80 overflow-y-auto">
              <AnimatePresence>
                {notifications.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8 text-zion-slate/60"
                  >
                    <Bell className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>No notifications yet</p>
                    <p className="text-sm">We'll notify you when something important happens</p>
                  </motion.div>
                ) : (
                  notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50, height: 0 }}
                      layout
                      className={`p-4 rounded-xl ${getNotificationStyles(notification.type, notification.priority)} ${
                        !notification.read ? 'ring-2 ring-zion-cyan/20' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {notification.icon || getNotificationIcon(notification.type, notification.priority)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className={`text-sm font-medium ${
                              notification.read ? 'text-zion-slate/70' : 'text-zion-slate-dark'
                            }`}>
                              {notification.title}
                            </h4>
                            <button
                              onClick={() => dismissNotification(notification.id)}
                              className="p-1 hover:bg-zion-slate/10 rounded transition-colors"
                            >
                              <X className="w-3 h-3 text-zion-slate/60" />
                            </button>
                          </div>
                          
                          <p className={`text-sm mt-1 ${
                            notification.read ? 'text-zion-slate/60' : 'text-zion-slate'
                          }`}>
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-xs text-zion-slate/50">
                              {notification.timestamp.toLocaleTimeString()}
                            </span>
                            
                            <div className="flex items-center space-x-2">
                              {notification.action && (
                                <button
                                  onClick={() => {
                                    notification.action!.onClick();
                                    markAsRead(notification.id);
                                  }}
                                  className="text-xs px-2 py-1 bg-zion-cyan/10 hover:bg-zion-cyan/20 text-zion-cyan rounded transition-colors"
                                >
                                  {notification.action.label}
                                </button>
                              )}
                              
                              {!notification.read && (
                                <button
                                  onClick={() => markAsRead(notification.id)}
                                  className="text-xs px-2 py-1 bg-zion-slate/10 hover:bg-zion-slate/20 text-zion-slate rounded transition-colors"
                                >
                                  Mark read
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Hook for using notifications in components
export const useNotifications = () => {
  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    if ((window as any).addNotification) {
      (window as any).addNotification(notification);
    }
  }, []);

  return { addNotification };
};

// Utility functions for common notification types
export const notificationUtils = {
  success: (title: string, message: string, options?: Partial<Notification>) => {
    if ((window as any).addNotification) {
      (window as any).addNotification({
        type: 'success',
        title,
        message,
        priority: 'medium',
        ...options
      });
    }
  },

  warning: (title: string, message: string, options?: Partial<Notification>) => {
    if ((window as any).addNotification) {
      (window as any).addNotification({
        type: 'warning',
        title,
        message,
        priority: 'medium',
        ...options
      });
    }
  },

  error: (title: string, message: string, options?: Partial<Notification>) => {
    if ((window as any).addNotification) {
      (window as any).addNotification({
        type: 'error',
        title,
        message,
        priority: 'high',
        ...options
      });
    }
  },

  info: (title: string, message: string, options?: Partial<Notification>) => {
    if ((window as any).addNotification) {
      (window as any).addNotification({
        type: 'info',
        title,
        message,
        priority: 'low',
        ...options
      });
    }
  },

  achievement: (title: string, message: string, options?: Partial<Notification>) => {
    if ((window as any).addNotification) {
      (window as any).addNotification({
        type: 'achievement',
        title,
        message,
        priority: 'high',
        ...options
      });
    }
  }
};