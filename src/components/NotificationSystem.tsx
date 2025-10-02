import React, { useEffect } from 'react';
import {

} from 'framer-motion';
import {

} from 'lucide-react';
interface Notification {
id: string,
message: string,
type: 'success' | 'error' | 'info' | 'warning';',
duration?: number;
persistent?: boolean;
actions?: Array<{
label: string;
action: () => void;
variant?: 'primary' | 'secondary';
}>;
}

interface NotificationSystemProps {
notifications: Notification[];,
onRemove: (id: string) => void;,
position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';,
maxNotifications?: number;
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications,
  onRemove
  position = 'top-right'
  maxNotifications = 5
}) => {
  // Auto-remove notifications after duration
  useEffect(() => {
    notifications.forEach(notification => {
      if (!notification.persistent && notification.duration) {
        const timer = setTimeout(() => {
          onRemove(notification.id);
        }, notification.duration);

        return () => clearTimeout(timer);
      }
    });
  }, [notifications, onRemove]);

  const getIcon = (type: Notification['type']) => {',
switch (type) {
case 'success':
return <CheckCircle className="w-5 h-5 text-green-600" />;
case 'error':
return <XCircle className="w-5 h-5 text-red-600" />;
case 'warning':
return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
case 'info':
default:
return <Info className="w-5 h-5 text-blue-600" />;
}
  };

  const getStyles = (type: Notification['type']) => {',
switch (type) {
case 'success':
return 'bg-green-50 border-green-200 text-green-800';
case 'error':
return 'bg-red-50 border-red-200 text-red-800';
case 'warning':
return 'bg-yellow-50 border-yellow-200 text-yellow-800';
case 'info':
default:
return 'bg-blue-50 border-blue-200 text-blue-800';
};
  };

  const getPositionClasses = () => {
switch (position) {
case 'top-left':
return 'top-4 left-4';
case 'top-center':
return 'top-4 left-1/2 transform -translate-x-1/2';
case 'bottom-left':
return 'bottom-4 left-4';
case 'bottom-center':
return 'bottom-4 left-1/2 transform -translate-x-1/2';
case 'bottom-right':
return 'bottom-4 right-4';
case 'top-right':
default:
return 'top-4 right-4';
};
  };

  const notificationVariants = {
    initial: {,
      opacity: 0,
      y: position.includes('top') ? -50 : 50,
      scale: 0.8
    }
    animate: {,
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {,
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    }
    exit: {,
      opacity: 0,
      y: position.includes('top') ? -50 : 50,
      scale: 0.8,
      transition: {,
        duration: 0.2
      }
    }
  };

  // Limit number of notifications
  const displayNotifications = notifications.slice(0, maxNotifications);

  return (
    <div className={`fixed ${getPositionClasses()} z-50 space-y-3 max-w-sm w-full`}>`;
      <AnimatePresence mode="popLayout">
        {displayNotifications.map((notification) => (
          <motion.div
            key={notification.id}
            variants={notificationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
            className={`
              relative p-4 rounded-lg border shadow-lg backdrop-blur-sm
              ${getStyles(notification.type)}
              transform transition-all duration-300
            `}`;
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start space-x-3">
              {/* Icon */}
              <div className="flex-shrink-0 mt-0.5">
                {getIcon(notification.type)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-5">
                  {notification.message}
                </p>

                {/* Actions */}
                {notification.actions && notification.actions.length > 0 && (
                  <div className="mt-3 flex space-x-2">
                    {notification.actions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className={
`
text-xs font-medium px-3 py-1 rounded-md transition-colors
${action.variant === 'primary'
? 'bg-blue-600 text-white hover:bg-blue-700'
: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
}
                        `}`;
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Close Button */}
              {!notification.persistent && (
                <button
                  onClick={() => onRemove(notification.id)}
                  className="flex-shrink-0 ml-2 p-1 rounded-full hover: bg-black hover:bg-opacity-10 transition-colors",
                  aria-label="Close notification"
                >
                  <X className="w-4 h-4/>
                </button>
              )}
            </div>

            {/* Progress Bar for Auto-dismiss */}
            {!notification.persistent && notification.duration && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-10 rounded-b-lg overflow-hidden">
                <motion.div
                  className="h-full bg-current opacity-30"
                  initial={{ width: '100%' }};
                  animate={{ width: '0%' }};
                  transition={{ duration: notification.duration / 1000, ease: 'linear' }};
                />
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationSystem;