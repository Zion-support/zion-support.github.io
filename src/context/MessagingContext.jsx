import React, { createContext, useContext, useState } from 'react';

const MessagingContext = createContext();

export function MessagingProvider({ children }) {
    const [messages, setMessages] = useState([]);
    
    const sendMessage = (content) => {
        const newMessage = {
            id: Date.now().toString(),
            content,
            timestamp: new Date(),
<<<<<<< HEAD
            isRead: false
        };
        setMessages(prev => [...prev, newMessage]);
    };
    
=======
            isRead: false,
};
        setMessages(prev => [...prev, newMessage]);
    };
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    const markAsRead = (id) => {
        setMessages(prev => prev.map(msg => msg.id === id ? { ...msg, isRead: true } : msg));
    };
    
    const unreadCount = messages.filter(msg => !msg.isRead).length;
    
    return (
        <MessagingContext.Provider value={{
            messages,
            unreadCount,
            sendMessage,
<<<<<<< HEAD
            markAsRead
        }}>
            {children}
        </MessagingContext.Provider>
    );
}

=======
            markAsRead,
}}>
      {children}
    </MessagingContext.Provider>)}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
export function useMessaging() {
    const context = useContext(MessagingContext);
    if (context === null) {
        throw new Error('useMessaging must be used within a MessagingProvider');
<<<<<<< HEAD
    }
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    return context;
}
