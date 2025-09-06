export interface NotificationContextType {
  notifications: Notification[];
  filtered_notifications: Notification[];
  unread_count: number;
  loading: boolean;
  filter: FilterType;
