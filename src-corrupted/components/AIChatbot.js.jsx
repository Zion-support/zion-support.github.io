<<<<<<< HEAD
import React from 'react';
=======
import React, {useState, useCallback, useEffect, useRef} from 'react';

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AIChatbot.js: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AIChatbot.js</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AIChatbot.js;