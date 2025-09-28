import React, { useState, useEffect, useCallback } from 'react';
import { X, Bell, BellRing, CheckCircle, AlertTriangle, Info, XCircle, Settings } from 'lucide-react';

export interface EnhancedNotification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info' | 'system';
  title: string;
  message: string;
  timestamp: number;
  duration?: number;
  persistent?: boolean;
  actions?: NotificationAction[];
  priority?: 'low' | 'normal' | 'high' | 'urgent';
  category?: string;
  metadata?: Record<string, unknown>;
}

interface NotificationAction {
  label: string;
  action: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

interface EnhancedNotificationSystemProps {
  notifications: EnhancedNotification[];
  onRemove: (id: string) => void;
  onAction?: (notificationId: string, action: string) => void;
  maxNotifications?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center';
  showSoundToggle?: boolean;
  showHistoryToggle?: boolean;
}

const EnhancedNotificationSystem: React.FC<EnhancedNotificationSystemProps> = ({
  notifications,
  onRemove,
  onAction,
  maxNotifications = 5,
  position = 'top-right',
  showSoundToggle = true,
  showHistoryToggle = true
}) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [notificationHistory, setNotificationHistory] = useState<EnhancedNotification[]>([]);
  // const [isMinimized, setIsMinimized] = useState(false);

  // Auto-remove notifications based on duration
  useEffect(() => {
    notifications.forEach(notification => {
      if (!notification.persistent && notification.duration && notification.duration > 0) {
        const timer = setTimeout(() => {
          onRemove(notification.id);
        }, notification.duration);

        return () => clearTimeout(timer);
      }
    });
  }, [notifications, onRemove]);

  // Add to history when notification is removed
  const handleRemove = useCallback((id: string) => {
    const notification = notifications.find(n => n.id === id);
    if (notification) {
      setNotificationHistory(prev => [notification, ...prev.slice(0, 99)]); // Keep last 100
    }
    onRemove(id);
  }, [notifications, onRemove]);

  // Play notification sound
  const playNotificationSound = useCallback((type: string) => {
    if (!isSoundEnabled) return;

    try {
      const audioContext = new (window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Different frequencies for different notification types
      const frequencies = {
        success: 800,
        warning: 600,
        error: 400,
        info: 1000,
        system: 1200
      };

      oscillator.frequency.setValueAtTime(frequencies[type as keyof typeof frequencies] || 800, audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
      console.warn('Could not play notification sound:', error);
    }
  }, [isSoundEnabled]);

  // Play sound for new notifications
  useEffect(() => {
    if (notifications.length > 0) {
      const latestNotification = notifications[notifications.length - 1];
      playNotificationSound(latestNotification.type);
    }
  }, [notifications, playNotificationSound]);

  // Get notification icon
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'system':
        return <BellRing className="w-5 h-5 text-blue-400" />;
      default:
        return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  // Get notification background color
  const getNotificationBgColor = (type: string, priority?: string) => {
    const baseColors = {
      success: 'bg-green-900/20 border-green-500/30',
      warning: 'bg-yellow-900/20 border-yellow-500/30',
      error: 'bg-red-900/20 border-red-500/30',
      info: 'bg-blue-900/20 border-blue-500/30',
      system: 'bg-purple-900/20 border-purple-500/30'
    };

    const priorityModifiers = {
      urgent: 'ring-2 ring-red-500/50',
      high: 'ring-1 ring-orange-500/30',
      normal: '',
      low: 'opacity-75'
    };

    return `${baseColors[type as keyof typeof baseColors] || baseColors.info} ${priorityModifiers[priority as keyof typeof priorityModifiers] || priorityModifiers.normal}`;
  };

  // Get position classes
  const getPositionClasses = () => {
    const positions = {
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'top-center': 'top-4 left-1/2 transform -translate-x-1/2'
    };
    return positions[position];
  };

  const visibleNotifications = notifications.slice(0, maxNotifications);

  return (
    <div className={`fixed z-50 ${getPositionClasses()}`}>
      {/* Notification Container */}
      <div className="space-y-2 max-w-sm">
        {visibleNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border shadow-lg backdrop-blur-sm transition-all duration-300 ${getNotificationBgColor(notification.type, notification.priority)}`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {getNotificationIcon(notification.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {notification.title}
                    </h4>
                    <p className="text-sm text-gray-300 mb-2">
                      {notification.message}
                    </p>
                    
                    {/* Metadata */}
                    {notification.metadata && Object.keys(notification.metadata).length > 0 && (
                      <div className="text-xs text-gray-400 mb-2">
                        {Object.entries(notification.metadata).map(([key, value]) => (
                          <div key={key} className="flex gap-1">
                            <span className="font-medium">{key}:</span>
                            <span>{String(value)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Actions */}
                    {notification.actions && notification.actions.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {notification.actions.map((action, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              action.action();
                              onAction?.(notification.id, action.label);
                            }}
                            className={`px-3 py-1 text-xs rounded transition-colors ${
                              action.variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                              action.variant === 'danger' ? 'bg-red-600 hover:bg-red-700 text-white' :
                              'bg-gray-600 hover:bg-gray-700 text-white'
                            }`}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleRemove(notification.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close notification"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Timestamp and Category */}
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <span>{new Date(notification.timestamp).toLocaleTimeString()}</span>
                  {notification.category && (
                    <span className="px-2 py-0.5 bg-gray-700 rounded-full">
                      {notification.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Control Panel */}
      {(showSoundToggle || showHistoryToggle) && (
        <div className="mt-4 flex gap-2">
          {showSoundToggle && (
            <button
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
              className={`p-2 rounded-lg transition-colors ${
                isSoundEnabled 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
              }`}
              title={isSoundEnabled ? 'Sound enabled' : 'Sound disabled'}
            >
              <Bell className="w-4 h-4" />
            </button>
          )}
          
          {showHistoryToggle && (
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors"
              title="Notification history"
            >
              <Settings className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* History Panel */}
      {showHistory && (
        <div className="mt-4 bg-gray-900 border border-gray-700 rounded-lg shadow-xl p-4 max-h-64 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white">Notification History</h3>
            <button
              onClick={() => setShowHistory(false)}
              className="text-gray-400 hover:text-white text-sm"
            >
              ✕
            </button>
          </div>
          
          {notificationHistory.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">No notification history</p>
          ) : (
            <div className="space-y-2">
              {notificationHistory.slice(0, 10).map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center gap-2 p-2 rounded bg-gray-800 text-xs"
                >
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-white truncate">{notification.title}</p>
                    <p className="text-gray-400">
                      {new Date(notification.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnhancedNotificationSystem;