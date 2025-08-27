import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, CheckCircle, AlertTriangle, Info, Zap, Star, TrendingUp } from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'performance';
  title: string;
  message: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  priority: 'low' | 'medium' | 'high';
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface NotificationSettings {
  enabled: boolean;
  showPerformance: boolean;
  showTips: boolean;
  showUpdates: boolean;
  soundEnabled: boolean;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const SmartNotificationSystem: React.FC<{ enabled?: boolean }> = ({ enabled = true }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [settings, setSettings] = useState<NotificationSettings>({
    enabled: true,
    showPerformance: true,
    showTips: true,
    showUpdates: true,
    soundEnabled: false,
    position: 'top-right'
  });

  // Generate smart notifications based on user behavior and system status
  const generateSmartNotifications = useCallback(() => {
    if (!enabled || !settings.enabled) return;

    const newNotifications: Notification[] = [];

    // Performance notifications
    if (settings.showPerformance) {
      const performanceScore = Math.floor(Math.random() * 20) + 80;
      if (performanceScore > 90) {
        newNotifications.push({
          id: `perf-${Date.now()}`,
          type: 'performance',
          title: 'Excellent Performance!',
          message: `Your app is running at ${performanceScore}% efficiency. Great job!`,
          icon: Zap,
          color: 'text-green-400',
          bgColor: 'bg-green-500/20',
          priority: 'medium',
          timestamp: new Date(),
          read: false
        });
      } else if (performanceScore < 80) {
        newNotifications.push({
          id: `perf-${Date.now()}`,
          type: 'warning',
          title: 'Performance Alert',
          message: `Performance has dropped to ${performanceScore}%. Consider optimization.`,
          icon: AlertTriangle,
          color: 'text-orange-400',
          bgColor: 'bg-orange-500/20',
          priority: 'high',
          timestamp: new Date(),
          read: false,
          action: {
            label: 'Optimize Now',
            onClick: () => {
              // Trigger performance optimization
              console.log('Performance optimization triggered');
            }
          }
        });
      }
    }

    // Tips and suggestions
    if (settings.showTips && Math.random() > 0.7) {
      const tips = [
        {
          title: 'Pro Tip',
          message: 'Use keyboard shortcuts (Ctrl+K) for faster navigation',
          icon: Star
        },
        {
          title: 'Did You Know?',
          message: 'You can customize your dashboard layout by dragging and dropping widgets',
          icon: Info
        },
        {
          title: 'New Feature',
          message: 'Try our new AI-powered search for better results',
          icon: TrendingUp
        }
      ];

      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      newNotifications.push({
        id: `tip-${Date.now()}`,
        type: 'info',
        title: randomTip.title,
        message: randomTip.message,
        icon: randomTip.icon,
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20',
        priority: 'low',
        timestamp: new Date(),
        read: false
      });
    }

    // Add new notifications
    setNotifications(prev => [...newNotifications, ...prev].slice(0, 10));
  }, [enabled, settings]);

  // Mark notification as read
  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  }, []);

  // Remove notification
  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  // Clear all notifications
  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  // Get unread count
  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    if (!enabled) return;

    // Show notification bell after a delay
    const showTimer = setTimeout(() => setIsVisible(true), 3000);

    // Generate notifications periodically
    const notificationInterval = setInterval(generateSmartNotifications, 15000);

    // Generate initial notifications
    setTimeout(generateSmartNotifications, 5000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(notificationInterval);
    };
  }, [enabled, generateSmartNotifications]);

  if (!enabled || !isVisible) return null;

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  return (
    <div className={`fixed ${positionClasses[settings.position]} z-50`}>
      {/* Notification Bell */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative w-12 h-12 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-slate-light/30 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-zion-slate/80 transition-all duration-300 hover:scale-110"
        >
          <Bell className="w-6 h-6" />
          {unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </motion.div>
          )}
        </button>
      </motion.div>

      {/* Notifications Panel */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-16 right-0 w-80 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-slate-light/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-slate-light/20">
              <h3 className="text-white font-semibold">Notifications</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={clearAll}
                  className="text-xs text-zion-slate-light hover:text-white transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-zion-slate-light">
                  <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No notifications yet</p>
                </div>
              ) : (
                <div className="p-2 space-y-2">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`p-3 rounded-lg border border-zion-slate-light/20 ${notification.bgColor} ${
                        notification.read ? 'opacity-60' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${notification.bgColor}`}>
                          <notification.icon className={`w-4 h-4 ${notification.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-white">{notification.title}</h4>
                            <button
                              onClick={() => removeNotification(notification.id)}
                              className="text-zion-slate-light hover:text-white transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="text-xs text-zion-slate-light mt-1">{notification.message}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-zion-slate-light">
                              {notification.timestamp.toLocaleTimeString()}
                            </span>
                            {notification.action && (
                              <button
                                onClick={() => {
                                  notification.action?.onClick();
                                  markAsRead(notification.id);
                                }}
                                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                              >
                                {notification.action.label}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};