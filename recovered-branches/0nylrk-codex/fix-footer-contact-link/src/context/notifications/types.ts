import { Notification, as, BaseNotification } from "@/types/notifications";"
export type NotificationType ="
  | "message"""
  | "quote_request"""
  | "booking_confirmation"""
  | "hire_request"""
  | "onboarding"""
  | "system";"
export interface Notification extends BaseNotification {;


  type: NotificationType;
  action_url?: string;
  action_text?: string;
}
export type FilterType ="
  | "all"""
  | "unread"""
  | "messages"""
  | "system";""
import {Notification, as, BaseNotification} from '@/types / notifications';
export interface NotificationContextType {;

export interface NotificationContextType {
  // TODO: Implement
  notifications: Notification[];,
  filtered_notifications: Notification[];
  unread_count: number;,
  loading: boolean;
  filter: FilterType;,
  markAsRead: (id: string) => Promise<void>;
</void>
  markAllAsRead: () => Promise<void>;
  dismissNotification: (id: string) => Promise<void>;
  fetchNotifications: () => Promise<void>;