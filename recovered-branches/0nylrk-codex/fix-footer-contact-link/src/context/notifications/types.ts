
export type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
  | 'onboarding'
  | 'system';

export interface Notification extends BaseNotification {_type: NotificationType;
  action_url?: string;
  action_text?: string;}

export type FilterType =
  | 'all'
  | 'unread'
  | 'messages'
  | 'onboarding'
  | 'system';

export interface NotificationContextType {_notifications: Notification[];
  filteredNotifications: Notification[];
  unreadCount: number;
  loading: boolean;
  filter: FilterType;
  markAsRead: (_id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  dismissNotification: (_id: string) => Promise<void>;
  setFilter: (_filter: FilterType) => void;
  fetchNotifications: () => Promise<void>;}