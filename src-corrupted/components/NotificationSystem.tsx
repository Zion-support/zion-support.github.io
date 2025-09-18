<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useRef } from 'react.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { CheckCircle, 
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
 } from 'lucide-react.ts';

export type NotificationType = 'success' | 'warning' | 'error' | 'info' | 'achievement';

export interface Notification {

  id: anystring;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  timestamp: Date;
  read: boolean;
action?: {
    label: string;
    onClick: ()  => void;
  
};
  priority: 'low' | 'medium' | 'high';
  category?: string;
  icon?: React.ReactNode;
}

interface NotificationSystemProps extends React.PropsWithChildren<{}> {

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
  const [notifications, setNotifications] = useState<any>([]);
  const [settings, setSettings] = useState<any>({
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
  const addNotification = useCallback((notification: anyOmit<Notification, 'id' | 'timestamp' | 'read'>)  => {
    const newNotification: Notification = {
      ...notification,
      id: any`notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      read: false,
      duration: notification.duration ?? settings.defaultDuration
    };

    setNotifications(prev  => {
      const updated = [newNotification, ...prev];
      return updated.slice(0, settings.maxNotifications);
    });

    // Play sound and vibrate
    playSound();
    triggerVibration();
  }, [settings.maxNotifications, settings.defaultDuration, playSound, triggerVibration]);

  // Dismiss notification
  const dismissNotification = useCallback((id: anystring)  => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Mark notification as read
  const markAsRead = useCallback((id: anystring)  => {
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
  const getNotificationIcon = (type: anyNotificationType, priority: string)  => {
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
  const getNotificationStyles = (type: anyNotificationType, priority: string)  => {
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
  const updateSettings = useCallback((newSettings: anyPartial<NotificationSettings>)  => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  // Expose addNotification method globally for external use
  useEffect(() => {
    (window as any).addNotification = addNotification;
    return () => {
      delete (window as any).addNotification;
    };
  }, [addNotification]);
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const NotificationSystem: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NotificationSystem</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default NotificationSystem;
