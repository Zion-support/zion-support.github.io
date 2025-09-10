import React, {useState, useCallback, useEffect, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {MessageCircle, Send, Bot, User, X, Minimize2, Maximize2, Loader2, Sparkles} from 'lucide-react';
;
export const AIChatbot = (props: any) => {
    const { trackEvent } = useAnalytics({enableTracking: true,
        enableUserBehaviorTracking: true;}
    );
    const [isOpen, setIsOpen] = useState(false);'
    const [isMinimized, setIsMinimized] = useState(false);''
    const [messages, setMessages] = useState([]);'''
    const [inputValue, setInputValue] = useState('');