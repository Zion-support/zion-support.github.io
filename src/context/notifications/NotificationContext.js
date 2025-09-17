import React, { createContext, useContext } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const value = {
    notifications: [],
    addNotification: () => {},
    removeNotification: () => {}
  };
  
  return React.createElement(
    NotificationContext.Provider,
    { value },
    children
  );
};

export const useNotifications = () => useContext(NotificationContext);