import React, { createContext, useContext, useState } from 'react';
const MessagingContext = createContext(undefined);
export function MessagingProvider({ children }) {
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
    const markAsRead = (id) => {
        setMessages(prev => prev.map(msg => msg.id === id ? { ...msg, isRead: true } : msg));
    };
    const unreadCount = messages.filter(msg => !msg.isRead).length;
    return (<MessagingContext.Provider value={{
            messages,
            unreadCount,
            sendMessage,
            markAsRead,
        }}>
      {children}
    </MessagingContext.Provider>);
}
export function useMessaging() {
    const context = useContext(MessagingContext);
    if (context === undefined) {
        throw new Error('useMessaging must be used within a MessagingProvider');
    }
    return context;
}
