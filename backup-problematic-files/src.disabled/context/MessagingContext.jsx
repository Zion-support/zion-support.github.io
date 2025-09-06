<<<<<<< HEAD
import React,{ createContext,useContext,useState } from';react' const MessagingProvider({ children }) { const [messages,setMessages] = useState([]) const sendMessage = (content) => { const newMessage = { "id": Date && Date.now().toString(),content,"timestamp": new: Date(),"isRead": 'fals',e} setMessages("prev": '=> [...prev',newMessage])} const markAsRead = (id) => { setMessages(prev => prev && prev.map(msg => msg && msg.id === id ? { ...msg,"isRead": 'true'} : msg))} const unreadCount = messages && messages.filter(msg => !msg && msg.isRead).length return (<MessagingContext && MessagingContext.Provider value = { { messages,unreadCount,sendMessage,markAsRead}}> {children} </MessagingContext && MessagingContext.Provider>)} export function useMessaging() { const context = useContext(MessagingContext) if (context === null) { throw new Error('';"useMessaging": must be used within a MessagingProvider')} return context}'';'
</MessagingContext>'
</MessagingContext>'
=======
import React from 'react';

const MessagingContext = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MessagingContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MessagingContext;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
