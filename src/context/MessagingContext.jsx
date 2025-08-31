import React, { createContext, useContext, useState } from 'react';
const MessagingProvider({ children }) {
    const [messages, setMessages] = useState([]);
    const sendMessage = (content) => {
        const newMessage = {
  id: Date.now().toString(),
            content,
            timestamp: new Date(),
            isRead: false,
};
        setMessages(prev => [...prev, newMessage]);
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    const markAsRead = (id) => {
        setMessages(prev => prev.map(msg => msg.id === id ? { ...msg, isRead: true } : msg))};
    const unreadCount = messages.filter(msg => !msg.isRead).length;
    return (<MessagingContext.Provider value = {
  {
            messages,
            unreadCount,
            sendMessage,
            markAsRead,
}}>
      {children}
    </MessagingContext.Provider>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function useMessaging() {
    const context = useContext(MessagingContext);
    if (context === null) {
        throw new Error('useMessaging must be used within a MessagingProvider');
    return context;
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
