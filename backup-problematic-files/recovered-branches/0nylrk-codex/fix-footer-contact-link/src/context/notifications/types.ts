<<<<<<< HEAD
import {Notification, as, BaseNotification} from '@/types / notifications';
=======
import { Notification as BaseNotification } from '@/types/notifications',;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export type NotificationType =;
  | 'message';
  | 'quote_request';
  | 'booking_confirmation';
  | 'hire_request';
  | 'onboarding';
<<<<<<< HEAD
  | 'system';
;
export interface Notification extends BaseNotification {
  type: NotificationType;
  action_url?: string,
  action_text?: string;
}
=======
  | 'system',;
;
export interface Notification extends BaseNotification {;
  type:NotificationType,;
  action_url?:string,;
  action_text?:string;
}
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export type FilterType =;
  | 'all';
  | 'unread';
  | 'messages';
  | 'onboarding';
<<<<<<< HEAD
  | 'system';
;
export interface NotificationContextType {
  notifications: Notification[];
  filtered_notifications: Notification[];
  unread_count: number;
  loading: boolean;
  filter: FilterType;
  markAsRead: (id: string) => Promise < void>;
  markAllAsRead: () => Promise < void>;
  dismiss_notification: (id: string) => Promise < void>;
  set_filter: (filter: FilterType) => void,
  fetch_notifications: () => Promise < void>;
}
=======
  | 'system',;
;
export interface NotificationContextType {;
  notifications:Notification[],;
  filteredNotifications:Notification[],;
  unreadCount:number,;
  loading:boolean,;
  filter:FilterType,;
  markAsRead:(id:string) => Promise<void>,;
  markAllAsRead:() => Promise<void>,;
  dismissNotification:(id:string) => Promise<void>,;
  setFilter:(filter:FilterType) => void,;
  fetchNotifications:() => Promise<void>;}
 export type NotificationType = | 'message' | 'quote request' | 'booking confirmation' | 'hire request' | 'onboarding' | 'system';
export type FilterType = | 'all' | 'unread' | 'messages' | 'onboarding' | 'system';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
