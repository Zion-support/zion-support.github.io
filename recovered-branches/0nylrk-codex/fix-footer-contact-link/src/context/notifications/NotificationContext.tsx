<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { useNotificationOperations  } from './useNotificationOperations';
import { NotificationContextType } from './types';
// Default context used when React type definitions are missing. Providing a
// fully-typed object here avoids TypeScript errors that occur when an untyped
// `createContext` call returns `{}` instead of the expected shape.

const defaultContext: NotificationContextType = {
  notifications: []
  filteredNotifications: []
  unreadCount: 0
  loading: false
  filter: 'all'
  markAsRead: async () => {}
  markAllAsRead: async () => {}
  dismissNotification: async () => {}
  setFilter: () => {}
  fetchNotifications: async () => {}}
// Cast the default context value to avoid issues when React types are missing.
const NotificationContext = createContext(
  defaultContext as NotificationContextType
);
<<<<<<< HEAD
export const useNotifications = (): NotificationContextType => {
  const context = useContext(NotificationContext) as NotificationContextType;
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}
export const NotificationProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const { user } = useAuth();
  const notificationOps = useNotificationOperations(user?.id);
  // Load notifications when user changes
  useEffect(() => {
    notificationOps.fetchNotifications();
=======

export const useNotifications = (): NotificationContextType => {;
  const context = useContext(NotificationContext) as NotificationContextType;
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { createContext, useContext, useEffect, ReactNode } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
import { useNotificationOperations } from './useNotificationOperations',;
import { NotificationContextType } from './types',;
// Default context used when React type definitions are missing. Providing a;
// fully-typed object here avoids TypeScript errors that occur when an untyped;
// `createContext` call returns `{}` instead of the expected shape.;
const defaultContext: NotificationContextType = {;
  notifications: [],;
  filteredNotifications: [],;
  unreadCount: 0,;
  loading: false,;
  filter: 'all',;
  markAsRead: async () => {},;
  markAllAsRead: async () => {},;
  dismissNotification: async () => {},;
  setFilter: () => {},;
  fetchNotifications: async () => {}},;
// Cast the default context value to avoid issues when React types are missing.;
const NotificationContext = createContext(;
  defaultContext as NotificationContextType;
),;
export const useNotifications = (): NotificationContextType => {;
  const context = useContext(NotificationContext) as NotificationContextType,;
  if (!context) {;
    throw new Error('useNotifications must be used within a NotificationProvider');
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  return context
},

<<<<<<< HEAD
export const NotificationProvider = ({ children }: { children: ReactNode }): JSX.Element => {;
  const { user } = useAuth();
  const notificationOps = useNotificationOperations(user?.id);
=======
export const NotificationProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const { user } = useAuth(),
  const notificationOps = useNotificationOperations(user?.id),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  // Load notifications when user changes
  useEffect(() => {
    notificationOps.fetchNotifications(),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Set up real-time subscription for new notifications
    if (user) {
      const channel = supabase
        .channel('notifications-changes')
        .on('postgres_changes'
          {
            event: '*'
            schema: 'public'
            table: 'notifications'
            filter: `user_id=eq.${user.id}`
<<<<<<< HEAD
          }
=======
          },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          (payload) => {
            // // // console.log('Notification change received:', payload),
            notificationOps.fetchNotifications()
<<<<<<< HEAD
          }
        )
        .subscribe();
      return () => {
        supabase.removeChannel(channel)
      }
    }
  }, [user]);
  return (
    <NotificationContext.Provider value={notificationOps}>
      {children}
    </NotificationContext.Provider>
  )
<<<<<<< HEAD
}

=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  return context;
},;
export const NotificationProvider = ({ children }: { children: ReactNode }): JSX.Element => {;
  const { user } = useAuth(),;
  const notificationOps = useNotificationOperations(user?.id),;
  // Load notifications when user changes;
  useEffect(() => {;
    notificationOps.fetchNotifications(),;
    // Set up real-time subscription for new notifications;
    if (user) {;
      const channel = supabase;
        .channel('notifications-changes');
        .on('postgres_changes',;
          {;
            event: '*',;
            schema: 'public',;
            table: 'notifications',;
            filter: `user_id=eq.${user.id}`;
          },;
          (payload) => {;
            // // // console.log('Notification change received:', payload),;
            notificationOps.fetchNotifications();
          }
        );
        .subscribe(),;
      return () => {;
        supabase.removeChannel(channel);
      }
    }
  }, [user]);
  return (;
    <NotificationContext.Provider value={notificationOps}>;
      {children}
    </NotificationContext.Provider>;
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
