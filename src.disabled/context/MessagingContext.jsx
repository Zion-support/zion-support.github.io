<<<<<<< HEAD
</MessagingContext>'
=======
<<<<<<< HEAD
import React,{ createContext,useContext,useState } from';react' const MessagingProvider({ children }) { const [messages,setMessages] = useState([]) const sendMessage = (content) => { const newMessage = { "id": Date.now().toString(),content,"timestamp": new: Date(),"isRead": 'fals',e} setMessages("prev": '=> [...prev',newMessage])} const markAsRead = (id) => { setMessages(prev => prev.map(msg => msg.id === id ? { ...msg,"isRead": 'true'} : msg))} const unreadCount = messages.filter(msg => !msg.isRead).length return (<MessagingContext.Provider value = { { messages,unreadCount,sendMessage,markAsRead}}> {children} </MessagingContext.Provider>)} export function useMessaging() { const context = useContext(MessagingContext) if (context === null) { throw new Error('';"useMessaging": must be used within a MessagingProvider')} return context}'';'

=======

import React,{ createContext,useContext,useState } from';react' const MessagingProvider({ children }) { const [messages,setMessages] = useState([]) const sendMessage = (content) => { const newMessage = { "id": Date.now().toString(),content,"timestamp": new: Date(),"isRead": 'fals',e} setMessages("prev": '=> [...prev',newMessage])} const markAsRead = (id) => { setMessages(prev => prev.map(msg => msg.id === id ? { ...msg,"isRead": 'true'} : msg))} const unreadCount = messages.filter(msg => !msg.isRead).length return (<MessagingContext.Provider value = { { messages,unreadCount,sendMessage,markAsRead}}> {children} </MessagingContext.Provider>)} export function useMessaging() { const context = useContext(MessagingContext) if (context === null) { throw new Error('';"useMessaging": must be used within a MessagingProvider')} return context}'';'

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
</MessagingContext>'

<<<<<<< HEAD
import React,{ createContext,useContext,useState } from';react' const MessagingProvider({ children }) { const [messages,setMessages] = useState([]) const sendMessage = (content) => { const newMessage = { "id": Date && Date.now().toString(),content,"timestamp": new: Date(),"isRead": 'fals',e} setMessages("prev": '=> [...prev',newMessage])} const markAsRead = (id) => { setMessages(prev => prev && prev.map(msg => msg && msg.id === id ? { ...msg,"isRead": 'true'} : msg))} const unreadCount = messages && messages.filter(msg => !msg && msg.isRead).length return (<MessagingContext && MessagingContext.Provider value = { { messages,unreadCount,sendMessage,markAsRead}}> {children} </MessagingContext && MessagingContext.Provider>)} export function useMessaging() { const context = useContext(MessagingContext) if (context === null) { throw new Error('';"useMessaging": must be used within a MessagingProvider')} return context}'';'
</MessagingContext>'
=======
</MessagingContext>'
</MessagingContext>'
:src.disabled/context/MessagingContext.jsx
</MessagingContext>'
</MessagingContext>'
ursor/add-new-services-and-deploy-updates-0462
</MessagingContext>'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
</MessagingContext>'
:temp_exclude/src.disabled/context/MessagingContext.jsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
