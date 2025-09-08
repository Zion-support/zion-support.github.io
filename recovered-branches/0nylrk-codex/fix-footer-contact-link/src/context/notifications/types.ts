
export type FilterType =
  | 'all'
  | 'unread'
  | 'messages'

  setFilter: (filter: FilterType) => void

  fetchNotifications: () => Promise<void>
import { Notification as BaseNotification } from '@/types/notifications',;






