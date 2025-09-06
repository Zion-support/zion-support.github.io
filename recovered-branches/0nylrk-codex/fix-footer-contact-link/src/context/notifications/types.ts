import { Notification, as, BaseNotification } from "@/types/notifications";
export type NotificationType =
  | "message"
  | "quote_request"
  | "booking_confirmation"
  | "hire_request"
  | "onboarding"
  | "system";



export interface Notification extends BaseNotification {;


<<<<<<< HEAD
<<<<<<< HEAD
=======
  | 'onboarding';
  | 'system';
export interface Notification extends BaseNotification {

export interface Notification extends BaseNotification {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  type: NotificationType;
  action_url?: string;
  action_text?: string;
}
export type FilterType =
  | "all"
  | "unread"
  | "messages"
  | "onboarding"
  | "system";

import {Notification, as, BaseNotification} from '@/types / notifications';
=======
=======
import {Notification, as, BaseNotification} from '@/types / notifications';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export interface NotificationContextType {;

<<<<<<< HEAD
<<<<<<< HEAD
=======
  | 'onboarding';
  | 'system';
export interface NotificationContextType {

export interface NotificationContextType {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface NotificationContextType {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  notifications: Notification[];
  filtered_notifications: Notification[];
  unread_count: number;
  loading: boolean;
  filter: FilterType;
<<<<<<< HEAD
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  dismissNotification: (id: string) => Promise<void>;
  setFilter: (filter: FilterType) => void;
  fetchNotifications: () => Promise<void>;
}
