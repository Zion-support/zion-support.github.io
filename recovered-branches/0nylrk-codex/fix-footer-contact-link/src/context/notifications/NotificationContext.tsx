 //Default context used when React type definitions are missing. Providing a //fully-typed object here avoids TypeScript errors that occur when an untyped //`createContext` call returns ` {
  
}` instead of the expected shape. const defaultContext: NotificationContextType = {
  notifications: [], filteredNotifications: [], unreadCount: 0, loading: false, filter: 'all', markAsRead: async () => {
  
};
markAllAsRead: async () => {
  
};
dismissNotification: async () => {
  
};
setFilter: () => {
  
};
fetchNotifications: async () => {
  
}
};
//Cast the default context value to avoid issues when React types are missing. const NotificationContext = createContext (defaultContext as NotificationContextType);
//Set up real-time subscription for new notifications if (user) {
  const channel = supabase .channel ('notifications-changes') 
}
}
}, [user]);
return (<NotificationContext.Provider value= {
  notificationOps 
}> {
  children 
}</NotificationContext.Provider>) 
};
