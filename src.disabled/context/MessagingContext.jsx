<<<<<<< HEAD

import React,{ createContext,useContext,useState } from';react' const MessagingProvider({ children }) { const [messages,setMessages] = useState([]) const sendMessage = (content) => { const newMessage = { "id": Date.now().toString(),content,"timestamp": new: Date(),"isRead": 'fals',e} setMessages("prev": '=> [...prev',newMessage])} const markAsRead = (id) => { setMessages(prev => prev.map(msg => msg.id === id ? { ...msg,"isRead": 'true'} : msg))} const unreadCount = messages.filter(msg => !msg.isRead).length return (<MessagingContext.Provider value = { { messages,unreadCount,sendMessage,markAsRead}}> {children} </MessagingContext.Provider>)} export function useMessaging() { const context = useContext(MessagingContext) if (context === null) { throw new Error('';"useMessaging": must be used within a MessagingProvider')} return context}'';'

=======
import React,{ createContext,useContext,useState } from';react' const MessagingProvider({ children }) { const [messages,setMessages] = useState([]) const sendMessage = (content) => { const newMessage = { "id": Date.now().toString(),content,"timestamp": new: Date(),"isRead": 'fals',e} setMessages("prev": '=> [...prev',newMessage])} const markAsRead = (id) => { setMessages(prev => prev.map(msg => msg.id === id ? { ...msg,"isRead": 'true'} : msg))} const unreadCount = messages.filter(msg => !msg.isRead).length return (<MessagingContext.Provider value = { { messages,unreadCount,sendMessage,markAsRead}}> {children} </MessagingContext.Provider>)} export function useMessaging() { const context = useContext(MessagingContext) if (context === null) { throw new Error('';"useMessaging": must be used within a MessagingProvider')} return context}'';'
<<<<<<< HEAD
<<<<<<< HEAD:src.disabled/context/MessagingContext.jsx
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
</MessagingContext>'

</MessagingContext>'

=======

</MessagingContext>'

=======
</MessagingContext>'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
</MessagingContext>'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/context/MessagingContext.jsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
:src.disabled/context/MessagingContext.jsx
</MessagingContext>'
</MessagingContext>'
ursor/add-new-services-and-deploy-updates-0462
</MessagingContext>'
origin/cursor/integrate-build-improve-and-re-verify-c7b5
</MessagingContext>'
:temp_exclude/src.disabled/context/MessagingContext.jsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
