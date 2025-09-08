import { Notification, as, BaseNotification } from "@/types/notifications";
export type NotificationType =
  | "message"
  | "quote_request"
  | "booking_confirmation"
  | "hire_request"
  | "onboarding"
  | "system";


<<<<<<< HEAD
=======

export interface Notification extends BaseNotification {;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  type: NotificationType;
  action_url?: string;
  action_text?: string;
}

<<<<<<< HEAD
export type FilterType =
  | "all"
  | "unread"
  | "messages"
  | "onboarding"
  | "system";

import {Notification, as, BaseNotification} from '@/types / notifications';

'
import {Notification, as, BaseNotification} from '@/types / notifications';

export interface NotificationContextType {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
}
