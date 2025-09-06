
import { Notification, as, BaseNotification  } from '@/types/notifications';
export type NotificationType =;
  | "message";
  | "quote_request";
  | "booking_confirmation";
  | "hire_request";
  | "onboarding";
  | "system";export interface Notification extends BaseNotification  {| 'onboarding';
  | 'system';
export interface Notification extends BaseNotification  {export interface Notification extends BaseNotification  {type: NotificationType;import { Notification, as, BaseNotification } from '@/types/notifications';
export type NotificationType =;
  | 'message';
  | 'quote_request';
  | 'booking_confirmation';
  | 'hire_request';
export interface Notification extends BaseNotification  {type: NotificationType;
  action_url?: string;
  action_text?: string;
}
export type FilterType =;
  | "all";
  | "unread";
  | "messages";
  | "onboarding";
  | "system";import { Notification, as, BaseNotification } from '@/types / notifications';
export interface NotificationContextType  {| 'onboarding';
  | 'system';
export interface NotificationContextType  {export interface NotificationContextType  {export interface NotificationContextType  {| 'all';
  | 'unread';
  | 'messages';
export interface NotificationContextType  {export interface NotificationContextType {export interface NotificationContextType  {notifications: Notification[];
  filtered_notifications: Notification[];
  unread_count: number;
  loading: boolean;
  filter: FilterType;export interface NotificationContextType  {notifications: Notification[];
import { Notification, as, BaseNotification } from "@/types/notifications";
export type NotificationType =
  | "message"
  | "quote_request"
  | "booking_confirmation"
  | "hire_request"
  | "onboarding"
  | "system";



export interface Notification extends BaseNotification {;


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


export interface NotificationContextType {;

export interface NotificationContextType {
  notifications: Notification[];
  filtered_notifications: Notification[];
  unread_count: number;
  loading: boolean;
  filter: FilterType;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  dismissNotification: (id: string) => Promise<void>;
  setFilter: (filter: FilterType) => void;
  fetchNotifications: () => Promise<void>;
}| 'system',export interface NotificationContextType  {notifications: Notification[],filteredNotifications: Notification[],unreadCount: number,loading: boolean,filter: FilterType,markAsRead: (id: string) => Promise<void>,markAllAsRead: () => Promise<void>,dismissNotification: (id: string) => Promise<void>;
  setFilter: (filter: FilterType) => void;
  fetchNotifications: () => Promise<void>;
}