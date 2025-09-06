<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
import {Notification, as, BaseNotification} from '@/types/notifications';
export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
<<<<<<< HEAD
  | 'onboarding';
  | 'system';
<<<<<<< HEAD
export interface Notification extends BaseNotification {
=======

export interface Notification extends BaseNotification {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  | 'onboarding'
  | 'system';



export interface Notification extends BaseNotification {;


>>>>>>> main
  type: NotificationType;
  action_url?: string
  action_text?: string
}
export type FilterType =
  | 'all'
  | 'unread'
  | 'messages'
<<<<<<< HEAD
  | 'onboarding';
  | 'system';
<<<<<<< HEAD
export interface NotificationContextType {
=======

export interface NotificationContextType {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  | 'onboarding'
  | 'system';

import {Notification, as, BaseNotification} from '@/types / notifications';
=======


export interface NotificationContextType {;

>>>>>>> main
  notifications: Notification[];
  filteredNotifications: Notification[];
  unreadCount: number;
  loading: boolean;
  filter: FilterType;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  dismissNotification: (id: string) => Promise<void>;
  setFilter: (filter: FilterType) => void

  fetchNotifications: () => Promise<void>
=======
import { Notification as BaseNotification } from '@/types/notifications',;
<<<<<<< HEAD
=======

>>>>>>> main
export type NotificationType =;
  | 'message';
  | 'quote_request';
  | 'booking_confirmation';
  | 'hire_request';
  | 'onboarding';
<<<<<<< HEAD
  | 'system',;
export interface Notification extends BaseNotification {;
  type: NotificationType,;
  action_url?: string,;
  action_text?: string;
}
;
=======
  | 'system';
;
export interface Notification extends BaseNotification {
  type: NotificationType;
  action_url?: string,
  action_text?: string;
}
>>>>>>> main
export type FilterType =;
  | 'all';
  | 'unread';
  | 'messages';
  | 'onboarding';
<<<<<<< HEAD
=======

  markAsRead: (id: string) => Promise < void>;
  markAllAsRead: () => Promise < void>;
  dismiss_notification: (id: string) => Promise < void>;
  set_filter: (filter: FilterType) => void,
  fetch_notifications: () => Promise < void>;
}

=======
>>>>>>> main
  | 'system',;
export interface NotificationContextType {;
  notifications: Notification[],;
  filteredNotifications: Notification[],;
  unreadCount: number,;
  loading: boolean,;
  filter: FilterType,;
  markAsRead: (id: string) => Promise<void>,;
  markAllAsRead: () => Promise<void>,;
  dismissNotification: (id: string) => Promise<void>;
  setFilter: (filter: FilterType) => void;
  fetchNotifications: () => Promise<void>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
