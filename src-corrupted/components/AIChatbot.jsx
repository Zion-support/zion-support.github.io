<<<<<<< HEAD

export default AIChatbot;
=======
import React, {useState, useCallback, useEffect, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {MessageCircle, Send, Bot, User, X, Minimize2, Maximize2, Loader2, Sparkles} from 'lucide-react';
;
export const AIChatbot = (props: any) => {
    const { trackEvent } = useAnalytics({enableTracking: true,
        enableUserBehaviorTracking: true;});
    const [isOpen, setIsOpen] = useState(false);'
    const [isMinimized, setIsMinimized] = useState(false);''
    const [messages, setMessages] = useState([]);'''
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    // Initialize chatbot;
    useEffect(() => {}
        if(isOpen && messages.length === 0) {}
            addBotMessage(welcomeMessage, {}
'
                intent: 'greeting',
                confidence: 1.0,
                suggestions: [
                    "Tell me about your services",
                    "How can I get a quote?",
                    "What technologies do you use?",
                    "Contact information"                ]
addBotMessage(welcomeMessage, {
                intent: &apos,greeting&apos,
                confidence: 1.0,
                suggestions: [,
                    &quot,Tell me about your services&quot,
                    &quot;How can I get a quote?&quot,
                    &quot;What technologies do you use?&quot,
                    &quot;Contact information&quot;"
        if (isOpen && messages.length = == 0) {"""
            addBotMessage(welcomeMessage, {""
                intent: "greeting","
                confidence: 1.0, suggestions: [""",
                    "Tell me about your services","""
                    "How can I get a quote?", "What technologies do you use?","""
                    "Contact information"]
})}

export default AIChatbot;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
