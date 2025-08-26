import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}

interface MessagingContextType {
  messages: Message[];
  unreadCount: number;
  sendMessage: (content: string) => void;
  markAsRead: (id: string) => void;
}

// "createContext" may be untyped if React type definitions are missing.
// To avoid TS2347 when the definitions are unavailable, we cast the default
// value instead of passing a generic type parameter directly.
const MessagingContext = createContext(
  undefined as MessagingContextType | undefined
);

export function MessagingProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      isRead: false,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const markAsRead = (id: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === id ? { ...msg, isRead: true } : msg
      )
    );
  };

  const unreadCount = messages.filter(msg => !msg.isRead).length;

  return (
    <MessagingContext.Provider value={{
      messages,
      unreadCount,
      sendMessage,
      markAsRead,
    }}>
      {children}
    </MessagingContext.Provider>
  );
}

export function useMessaging() {
  const context = useContext(MessagingContext);
  if (context === undefined) {
    throw new Error('useMessaging must be used within a MessagingProvider');
  }
  return context;
}