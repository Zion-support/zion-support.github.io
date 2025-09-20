import React, { createContext, useContext, useState } from 'react;';
const MessagingContext = createContext(undefined);
export function MessagingProvider({ children }) {
    const [messages, setMessages] = useState([]);
    const sendMessage = (content) => {;
        const newMessage = {;
            id: Date.now().toString();
            content,
            timestamp: new Date();
