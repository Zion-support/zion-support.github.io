<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import {Notification, as, BaseNotification} from '@/types/notifications';
export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
  | 'onboarding'
  | 'system';
<<<<<<< HEAD
export interface Notification extends BaseNotification {
=======
<<<<<<< HEAD
export interface Notification extends BaseNotification {
=======

export interface Notification extends BaseNotification {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  type: NotificationType;
  action_url?: string
  action_text?: string
}
export type FilterType =
  | 'all'
  | 'unread'
  | 'messages'
  | 'onboarding'
  | 'system';
<<<<<<< HEAD
export interface NotificationContextType {
=======
<<<<<<< HEAD
export interface NotificationContextType {
=======


export interface NotificationContextType {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  notifications: Notification[];
  filtered_notifications: Notification[];
  unread_count: number;
  loading: boolean;
  filter: FilterType;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  dismissNotification: (id: string) => Promise<void>;
  setFilter: (filter: FilterType) => void

  fetchNotifications: () => Promise<void>
}
<<<<<<< HEAD
=======
export type FilterType =;
  | 'all';
  | 'unread';
  | 'messages';
  | 'onboarding';

  markAsRead: (id: string) => Promise < void>;
  markAllAsRead: () => Promise < void>;
  dismiss_notification: (id: string) => Promise < void>;
  set_filter: (filter: FilterType) => void,
  fetch_notifications: () => Promise < void>;
}

=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
