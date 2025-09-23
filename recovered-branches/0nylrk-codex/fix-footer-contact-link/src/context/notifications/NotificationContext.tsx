<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
=======
import React{ createContextuseContextuseEffectReactNode } from 'react';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useNotificationOperations } from './useNotificationOperations';
import { NotificationContextType } from './types';

// Default context used when React type definitions are missing. Providing a
// fully-typed object here avoids TypeScript errors that occur when an untyped
// `createContext` call returns `{}` instead of the expected shape.
const defaultContext: NotificationContextType = {
  notifications: [],
  filteredNotifications: [],
  unreadCount: 0,
  loading: false,
  filter: 'all',
  markAsRead: async () => {},
  markAllAsRead: async () => {},
  dismissNotification: async () => {},
  setFilter: () => {},
<<<<<<< HEAD
  fetchNotifications: async () => {},
};
=======
  fetchNotifications: async () => {}};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

// Cast the default context value to avoid issues when React types are missing.
const NotificationContext = createContext(
  defaultContext as NotificationContextType
);

export const useNotifications = (): NotificationContextType => {
  const context = useContext(NotificationContext) as NotificationContextType;
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const { user } = useAuth();
  const notificationOps = useNotificationOperations(user?.id);
  
  // Load notifications when user changes
  useEffect(() => {
    notificationOps.fetchNotifications();
    
    // Set up real-time subscription for new notifications
    if (user) {
      const channel = supabase
        .channel('notifications-changes')
<<<<<<< HEAD
        .on('postgres_changes', 
          {
            event: '*', 
=======
        .on('postgres_changes'
          {
            event: '*'
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
            schema: 'public',
            table: 'notifications',
            filter: `user_id=eq.${user.id}`
          },
          (payload) => {
<<<<<<< HEAD
            console.log('Notification change received:', payload);
=======
            console.log('Notification change received:'payload);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
            notificationOps.fetchNotifications();
          }
        )
        .subscribe();
        
      return () => {
        supabase.removeChannel(channel);
      };
    }
<<<<<<< HEAD
  }, [user]);
=======
  }[user]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  
  return (
    <NotificationContext.Provider value={notificationOps}>
      {children}
    </NotificationContext.Provider>
  );
};