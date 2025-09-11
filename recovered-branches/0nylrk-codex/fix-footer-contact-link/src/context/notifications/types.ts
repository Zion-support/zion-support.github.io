



import {Notification, as, BaseNotification} from '@/types/notifications';
export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'


export interface Notification extends BaseNotification {;


  | 'onboarding';
  | 'system';
export interface Notification extends BaseNotification {

export interface Notification extends BaseNotification {;
=======
=======  | 'onboarding'
  | 'system';



export interface Notification extends BaseNotification {;



export interface NotificationContextType {;

  | 'onboarding';
  | 'system';
export interface NotificationContextType {

export interface NotificationContextType {;
=======
=======  | 'onboarding'
  | 'system';

import {Notification, as, BaseNotification} from '@/types / notifications';
=======


export interface NotificationContextType {;

  fetchNotifications: () => Promise<void>
import { Notification as BaseNotification } from '@/types/notifications',;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type NotificationType =;
  | 'message';
  | 'quote_request';
  | 'booking_confirmation';
  | 'hire_request';
  | 'onboarding';
  markAsRead: (id: string) => Promise < void>;
  markAllAsRead: () => Promise < void>;
  dismiss_notification: (id: string) => Promise < void>;
  set_filter: (filter: FilterType) => void,
  fetch_notifications: () => Promise < void>;
}

=======
<<<<<<< HEAD=======  | 'system',;
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

}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
