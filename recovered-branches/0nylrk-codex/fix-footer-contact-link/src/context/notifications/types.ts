
import {Notification, as, BaseNotification} from '@/types/notifications';

export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'

  type: NotificationType;
  action_url?: string;
  action_text?: string;
}

export type FilterType =
  | 'all'
  | 'unread'
  | 'messages'

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
import { Notification as BaseNotification } from '@/types/notifications',;

export type NotificationType =;
  | 'message';
  | 'quote_request';
  | 'booking_confirmation';
  | 'hire_request';
  | 'onboarding';


export type FilterType =;
  | 'all';
  | 'unread';
  | 'messages';
  | 'onboarding';



  | 'system',;
export interface NotificationContextType {;
  notifications: Notification[],;
  filteredNotifications: Notification[],;
  unreadCount: number,;
  loading: boolean,;
  filter: FilterType,;
  markAsRead: (id: string) => Promise<void>,;

  setFilter: (filter: FilterType) => void;
  fetchNotifications: () => Promise<void>;
}

  | 'system',;
export interface NotificationContextType {;
  notifications: Notification[],;
  filteredNotifications: Notification[],;
  unreadCount: number,;
  loading: boolean,;
  filter: FilterType,;
  markAsRead: (id: string) => Promise<void>,;

  setFilter: (filter: FilterType) => void;
  fetchNotifications: () => Promise<void>;

}




