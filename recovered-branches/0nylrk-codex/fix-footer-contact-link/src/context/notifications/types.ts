



import {Notification, as, BaseNotification} from '@/types/notifications';
export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
<<<<<<< HEAD
  | 'onboarding'
  | 'system';
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



export interface Notification extends BaseNotification {;


<<<<<<< HEAD
=======
  | 'onboarding';
  | 'system';
export interface Notification extends BaseNotification {

export interface Notification extends BaseNotification {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  type: NotificationType;
  action_url?: string
  action_text?: string
}
export type FilterType =
  | 'all'
  | 'unread'
  | 'messages'
<<<<<<< HEAD
  | 'onboarding'
  | 'system';

import {Notification, as, BaseNotification} from '@/types / notifications';
=======
=======
import {Notification, as, BaseNotification} from '@/types / notifications';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export interface NotificationContextType {;

<<<<<<< HEAD
=======
  | 'onboarding';
  | 'system';
export interface NotificationContextType {

export interface NotificationContextType {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
import { Notification as BaseNotification } from '@/types/notifications',;
<<<<<<< HEAD

=======
;
import { Notification as BaseNotification } from '@/types/notifications',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  | 'system',;
export interface Notification extends BaseNotification {;
  type: NotificationType,;
  action_url?: string,;
  action_text?: string;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type FilterType =;
  | 'all';
  | 'unread';
  | 'messages';
  | 'onboarding';
<<<<<<< HEAD

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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

}
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
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
