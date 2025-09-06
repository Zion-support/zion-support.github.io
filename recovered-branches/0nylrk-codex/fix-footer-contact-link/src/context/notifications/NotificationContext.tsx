import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useNotificationOperations } from './useNotificationOperations';
import { NotificationContextType } from './types';
// Default context used when React type definitions are missing. Providing a
// fully-typed object here avoids TypeScript errors that occur when an untyped
// `createContext` call returns `{}` instead of the expected shape.
const defaultContext: NotificationContextType = $2;
  filteredNotifications: [],
  unreadCount: 0,
  loading: false,
  filter: 'all',
  markAsRead: async() => {},
  markAllAsRead: async() => {},
  dismissNotification: async() => {},
  setFilter: () => {},
  fetchNotifications: async() => {}},

// Cast the default context value to avoid issues when React types are missing.
const NotificationContext = createContext($2);
export const useNotifications = $2;
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
},

export const NotificationProvider = ({ children }: { children: ReactNode}): JSX.Element => {
  const { user } = useAuth($2);
  const notificationOps = useNotificationOperations($2);
  // Load notifications when user changes
  useEffect(() => {
    notificationOps.fetchNotifications($2);
    // Set up real-time subscription for new notifications
    if (user) {
      const channel = $2;
          {
            event: '*', 
            schema: 'public',
            table: 'notifications',
            filter: `user_id = $2;
          (payload) => {
            console.log($2);
            notificationOps.fetchNotifications()
          }
        )
        .subscribe($2);
      return () => {
        supabase.removeChannel(channel)
      }
    }
  }, [user]),
  
  return (
    <NotificationContext.Provider value = $2;