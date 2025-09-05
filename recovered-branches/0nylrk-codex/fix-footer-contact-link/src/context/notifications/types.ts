<<<<<<< HEAD
import { Notification as BaseNotification } from '@/types/notifications',
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
  | 'onboarding'
  | 'system',

<<<<<<< HEAD
export interface Notification extends BaseNotification {
  type: NotificationType,
  action_url?: string,
  action_text?: string
}
=======
export interface Notification extends BaseNotification {_type: NotificationType;
  action_url?: string;
  action_text?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type FilterType =
  | 'all'
  | 'unread'
  | 'messages'
  | 'onboarding'
  | 'system',

<<<<<<< HEAD
export interface NotificationContextType {
  notifications: Notification[],
  filteredNotifications: Notification[],
  unreadCount: number,
  loading: boolean,
  filter: FilterType,
  markAsRead: (id: string) => Promise<void>,
  markAllAsRead: () => Promise<void>,
  dismissNotification: (id: string) => Promise<void>,
  setFilter: (filter: FilterType) => void,
  fetchNotifications: () => Promise<void>
}
=======
export interface NotificationContextType {_notifications: Notification[];
  filteredNotifications: Notification[];
  unreadCount: number;
  loading: boolean;
  filter: FilterType;
  markAsRead: (_id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  dismissNotification: (_id: string) => Promise<void>;
  setFilter: (_filter: FilterType) => void;
  fetchNotifications: () => Promise<void>;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
