// Notification context
import React, { createContext, useContext } from 'react';
const NotificationContext = createContext();
export const NotificationProvider = ({ children }) => {
  const value = {
    notifications: [],
    addNotification: () => {},
    removeNotification: () => {}
  };
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-60a7
export const useNotifications = () => useContext(NotificationContext);
