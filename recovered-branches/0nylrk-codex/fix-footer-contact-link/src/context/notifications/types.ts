<<<<<<< HEAD
import { Notification, as, BaseNotification } from "@/types/notifications";
export type NotificationType =
  | "message"
  | "quote_request"
  | "booking_confirmation"
  | "hire_request"
  | "onboarding"
  | "system";



export interface Notification extends BaseNotification {;


=======

import {Notification, as, BaseNotification} from '@/types/notifications';
export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'

export interface Notification extends BaseNotification {;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  type: NotificationType;
  action_url?: string;
  action_text?: string;
}
export type FilterType =
<<<<<<< HEAD
  | "all"
  | "unread"
  | "messages"
  | "onboarding"
  | "system";

import {Notification, as, BaseNotification} from '@/types / notifications';
import {Notification, as, BaseNotification} from '@/types / notifications';


export interface NotificationContextType {;

export interface NotificationContextType {
=======
  | 'all'
  | 'unread'
  | 'messages'

export interface NotificationContextType {;

export interface NotificationContextType {export interface NotificationContextType {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  notifications: Notification[];
  filtered_notifications: Notification[];
  unread_count: number;
  loading: boolean;
  filter: FilterType;
<<<<<<< HEAD
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  dismissNotification: (id: string) => Promise<void>;
=======
  | 'system',;
export interface NotificationContextType {;
  notifications: Notification[],;
  filteredNotifications: Notification[],;
  unreadCount: number,;
  loading: boolean,;
  filter: FilterType,;
  markAsRead: (id: string) => Promise<void>,;
  markAllAsRead: () => Promise<void>,;  dismissNotification: (id: string) => Promise<void>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  setFilter: (filter: FilterType) => void;
  fetchNotifications: () => Promise<void>;
}
