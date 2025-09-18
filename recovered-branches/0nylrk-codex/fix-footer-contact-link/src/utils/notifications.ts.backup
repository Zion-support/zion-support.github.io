/**
=======
// Notification utilities
interface NotificationOptions {
// Notifications utility for handling browser notifications and toast messages
interface NotificationOptions {
<<<<<<< HEAD
/**
=======
// Notification utilities
interface NotificationOptions {
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
 * Notification utility for handling browser notifications
 * with fallbacks and error handling
 */
export interface NotificationOptions {
<<<<<<< HEAD
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
=======
// Notifications utility for handling browser notifications and toast messages
interface NotificationOptions {
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
// Notification utilities
interface NotificationOptions {
// Notification utilities
interface NotificationOptions {
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
=======
  data?: any;
  data?: any;
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
  async showNotification(options: NotificationOptions): Promise<Notification | null> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return null;
    }
    if (this.permission !== 'granted') {
=======
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
      this.permission = await this.requestPermission();
      if (this.permission !== 'granted') {
        console.warn('Notification permission denied');
        return null;
      }
<<<<<<< HEAD
=======
=======
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
  requireInteraction?: boolean;
  silent?: boolean;
  vibrate?: number[];
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
  data?: any;
  requireInteraction?: boolean;
  silent?: boolean;
  timestamp?: number;
  actions?: NotificationAction[];
<<<<<<< HEAD
}

=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
=======
interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
class NotificationManager {
  private permission: NotificationPermission = 'default';
  async requestPermission(): Promise<NotificationPermission> {
    if ('Notification' in window) {
      this.permission = await Notification.requestPermission();
    }
    return this.permission;
  };
  async showNotification(options: NotificationOptions): Promise<Notification | null> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return null;
    }
    if (this.permission !== 'granted') {
      this.permission = await this.requestPermission();
      if (this.permission !== 'granted') {
        console.warn('Notification permission denied');
        return null;
      }
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
    }
    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        badge: options.badge,
        tag: options.tag,
=======
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        vibrate: options.vibrate
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
        data: options.data,
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        timestamp: options.timestamp || Date.now(),
        actions: options.actions || [],
        requireInteraction: options.requireInteraction || false,
        silent: options.silent || false,
        vibrate: options.vibrate
      });
      // Auto-close after 5 seconds unless requireInteraction is true
      if (!options.requireInteraction) {
        setTimeout(() => {
          notification.close();
        }, 5000);
      }
      return notification;
    } catch (error) {
      console.error('Error showing notification:', error);
      return null;
    }
  }

=======
      console.error('Error showing notification:', error);
      return null;
    }
  };
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
  showSuccess(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/success.png',
      tag: 'success',
    });
  };
  showError(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
<<<<<<< HEAD
=======
=======
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
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
      console.error('Error showing notification:', error);
      return null;
    }
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
=======
  };
  showSuccess(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/success.png',
      tag: 'success',
    });
  };
  showError(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
      title,
      body,
      icon: '/icons/error.png',
      tag: 'error',
=======
      requireInteraction: true,
    });
  };
  showInfo(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/info.png',
      tag: 'info',
    });
  };
  showWarning(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/warning.png',
      tag: 'warning',
    });
  };
export const notificationManager = new NotificationManager();
export default notificationManager;
<<<<<<< HEAD
=======
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
      requireInteraction: true
    });
  },
  /**
   * Show an info notification
   */
  info: (title: string, body?: string): Notification | null => {
    return notifications.show({
      title,
      body,
      icon: '/icons/info.png',
      tag: 'info'
    });
  },
  /**
   * Show a warning notification
   */
  warning: (title: string, body?: string): Notification | null => {
    return notifications.show({
      title,
      body,
      icon: '/icons/warning.png',
      tag: 'warning'
    });
  };
export default notifications;
      requireInteraction: true,
    });
  };
  showInfo(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/info.png',
      tag: 'info',
    });
  };
  showWarning(title: string, body?: string): Promise<Notification | null> {
    return this.showNotification({
      title,
      body,
      icon: '/icons/warning.png',
      tag: 'warning',
    });
  };
export const notificationManager = new NotificationManager();
export default notificationManager;
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
=======
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005
