<<<<<<< HEAD
import { Notification as BaseNotification } from '@/types/notifications',;
;
export type NotificationType =;
  | 'message';
  | 'quote_request';
  | 'booking_confirmation';
  | 'hire_request';
  | 'onboarding';
  | 'system',;
;
export interface Notification extends BaseNotification {;
  type:NotificationType,;
  action_url?:string,;
  action_text?:string;
}
;
export type FilterType =;
  | 'all';
  | 'unread';
  | 'messages';
  | 'onboarding';
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
  fetchNotifications:() => Promise<void>;
=======
import { Notification as BaseNotification } from '@/types/notifications',export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
  | 'onboarding'
  | 'system',

export interface Notification extends BaseNotification {
  type: NotificationType,
  action_url?: string,
  action_text?: string
}
export type FilterType =
  | 'all'
  | 'unread'
  | 'messages'
  | 'onboarding'
  | 'system',

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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}