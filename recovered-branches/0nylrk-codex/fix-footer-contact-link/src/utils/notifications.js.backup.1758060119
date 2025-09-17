<<<<<<< HEAD
=======
// Notifications utility for handling browser notifications

export const notifications = {
  // Request notification permission
  requestPermission: async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    return false;
  },
  
  // Check if notifications are supported
  isSupported: () => {
    return 'Notification' in window;
  },
  
  // Check if permission is granted
  hasPermission: () => {
    if ('Notification' in window) {
      return Notification.permission === 'granted';
    }
    return false;
  },
  
  // Show a notification
  show: (title, options = {}) => {
    if (notifications.hasPermission()) {
      const notification = new Notification(title, {
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        ...options
      });
      
      // Auto-close after 5 seconds
      setTimeout(() => {
        notification.close();
      }, 5000);
      
      return notification;
    }
    return null;
  },
  
  // Show success notification
  success: (message, title = 'Success') => {
    return notifications.show(title, {
      body: message,
      icon: '/favicon.ico'
    });
  },
  
  // Show error notification
  error: (message, title = 'Error') => {
    return notifications.show(title, {
      body: message,
      icon: '/favicon.ico'
    });
  },
  
  // Show info notification
  info: (message, title = 'Info') => {
    return notifications.show(title, {
      body: message,
      icon: '/favicon.ico'
    });
>>>>>>> cursor/create-and-deploy-new-content-d9c7
  }
};

export default notifications;