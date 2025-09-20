<<<<<<< HEAD

export default AIChatbot.js;
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
    // Initialize chatbot
    useEffect(() => {
  // TODO: Add dependencies if needed

export default AIChatbot.js;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
