/**
 * Notification utility for handling browser notifications
 * with fallbacks and error handling
 */

export interface NotificationOptions {
=======
=======
// Notification utilities
interface NotificationOptions {
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7720
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
  requireInteraction?: boolean;
  silent?: boolean;
  vibrate?: number[];
}

export const notifications = {
  /**
   * Check if notifications are supported
   */
  isSupported: (): boolean => {
    return typeof window !== 'undefined' && 'Notification' in window;
  },

  /**
   * Check if notifications are permitted
   */
  getPermission: (): NotificationPermission => {
    if (!notifications.isSupported()) return 'denied';
    return Notification.permission;
  },

  /**
   * Request notification permission
   */
  requestPermission: async (): Promise<NotificationPermission> => {
    if (!notifications.isSupported()) return 'denied';
    
    try {
      const permission = await Notification.requestPermission();
      return permission;
    } catch (error) {
      console.warn('Failed to request notification permission:', error);
      return 'denied';
    }
  },

  /**
   * Show a notification
   */
  show: (options: NotificationOptions): Notification | null => {
    if (!notifications.isSupported()) {
      console.warn('Notifications not supported');
      return null;
    }

    if (Notification.permission !== 'granted') {
      console.warn('Notification permission not granted');
      return null;
=======
=======
  data?: any;
>>>>>>> main
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
}

}

class NotificationManager {
  private permission: NotificationPermission = 'default';

  }

  async showNotification(options: NotificationOptions): Promise<Notification | null> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return null;
    }

    if (this.permission !== 'granted') {
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7720
    }

    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        badge: options.badge,
        tag: options.tag,
        data: options.data,
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions || [],
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7720
      });

      // Auto-close after 5 seconds unless requireInteraction is true
      if (!options.requireInteraction) {
        setTimeout(() => {
          notification.close();
        }, 5000);
      }

      return notification;
    } catch (error) {
      console.warn('Failed to show notification:', error);
      return null;
    }
  },

  /**
   * Show a success notification
   */
  success: (title: string, body?: string): Notification | null => {
    return notifications.show({
      title,
      body,
      icon: '/icons/success.png',
      tag: 'success'
    });
  },

  /**
   * Show an error notification
   */
  error: (title: string, body?: string): Notification | null => {
    return notifications.show({
=======
=======
>>>>>>> main
      console.error('Error showing notification:', error);
      return null;
    }
  }

>>>>>>> cursor/create-and-deploy-new-content-7720
      title,
      body,
      icon: '/icons/error.png',
      tag: 'error',
=======
=======
      requireInteraction: true,
    });
  }

  showInfo(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/info.png',
      tag: 'info',
    });
  }

  showWarning(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/warning.png',
      tag: 'warning',
    });
  }
}

export const notificationManager = new NotificationManager();
export default notificationManager;
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7720
>>>>>>> origin/backup-main-20250918-004015
