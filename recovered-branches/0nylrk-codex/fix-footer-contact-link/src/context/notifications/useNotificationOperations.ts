import {useState, useCallback} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Notification, FilterType, NotificationContextType} from './types';

export const useNotificationOperations = (user_id?: string): NotificationContextType => {
  const [notifications, set_notifications] = useState < Notification[]>([]);
  const [loading, set_loading] = useState (false);
  const [filter, set_filter] = useState < FilterType>('all');
