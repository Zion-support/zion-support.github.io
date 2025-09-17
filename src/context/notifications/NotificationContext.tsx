// Notification provider component
import React from 'react';
import { NotificationContext }  from './NotificationContext';
export const NotificationProvider = ({ children }) => {
  const value = {
    notifications: [],
    addNotification: () => {},
    removeNotification: () => {}
  }
];
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
  }
];
