export interface CreateNotificationParams {
  user_id: string;
  title: string;
  message: string;
  type: NotificationType;
}
export interface SystemNotificationParams {
  user_id: string;
  title: string;
  message: string;
}