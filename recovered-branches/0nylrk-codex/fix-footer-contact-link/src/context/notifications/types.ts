



import {Notification, as, BaseNotification} from '@/types/notifications';
export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
<<<<<<< HEAD
<<<<<<< HEAD



export interface Notification extends BaseNotification {;


  | 'onboarding';
  | 'system';
export interface Notification extends BaseNotification {

export interface Notification extends BaseNotification {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  | 'onboarding'
  | 'system';



export interface Notification extends BaseNotification {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  type: NotificationType;
  action_url?: string
  action_text?: string
}
export type FilterType =
  | 'all'
  | 'unread'
  | 'messages'
<<<<<<< HEAD
<<<<<<< HEAD
import {Notification, as, BaseNotification} from '@/types / notifications';


export interface NotificationContextType {;

  | 'onboarding';
  | 'system';
export interface NotificationContextType {

export interface NotificationContextType {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  | 'onboarding'
  | 'system';

import {Notification, as, BaseNotification} from '@/types / notifications';
=======


export interface NotificationContextType {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
import { Notification as BaseNotification } from '@/types/notifications',;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type NotificationType =;
  | 'message';
  | 'quote_request';
  | 'booking_confirmation';
  | 'hire_request';
  | 'onboarding';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  | 'system';
;
export interface Notification extends BaseNotification {
  type: NotificationType;
  action_url?: string,
  action_text?: string;
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type FilterType =;
  | 'all';
  | 'unread';
  | 'messages';
  | 'onboarding';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  markAsRead: (id: string) => Promise < void>;
  markAllAsRead: () => Promise < void>;
  dismiss_notification: (id: string) => Promise < void>;
  set_filter: (filter: FilterType) => void,
  fetch_notifications: () => Promise < void>;
}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
