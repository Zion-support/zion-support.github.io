import { Notification as BaseNotification } from '@/types/notifications';
export type NotificationType = $2;
export interface Notification extends BaseNotification {
  type: NotificationType,
  action_url?: string,
  action_text?: string
}

export type FilterType = $2;
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
}