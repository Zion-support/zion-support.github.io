<<<<<<< HEAD
import { Notification as BaseNotification } from '@/types/notifications';
export type NotificationType = any;
=======
import {Notification, as, BaseNotification} from '@/types/notifications';
export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
  | 'onboarding'
  | 'system';
export interface Notification extends BaseNotification {
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
export interface NotificationContextType {
  notifications: Notification[];
  filteredNotifications: Notification[];
  unreadCount: number;
  loading: boolean;
  filter: FilterType;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  dismissNotification: (id: string) => Promise<void>;
  setFilter: (filter: FilterType) => void
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  fetchNotifications: () => Promise<void>
}