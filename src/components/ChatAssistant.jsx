import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2, Settings, HelpCircle } from 'lucide-react';

export function ChatAssistant({ isOpen: externalIsOpen, onClose, recipient, onSendMessage } = {}) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Use external state if provided, otherwise use internal state
    const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
    const setIsOpen = externalIsOpen !== undefined ? (onClose || (() => { })) : setInternalIsOpen;

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current && !isMinimized) {
            inputRef.current.focus();
        }
    }, [isOpen, isMinimized]);

    // Welcome message
    useEffect(() => {
        if (isOpen && chatHistory.length === 0 && showWelcome) {
            const welcomeMessage = {
                type: 'assistant',
                content: 'Hello! I\'m Zion AI Assistant, your dedicated technology consultant. I can help you with:\n\n• AI & Machine Learning solutions\n• Cybersecurity services\n• Cloud infrastructure\n• Digital transformation\n• Technical support\n\nHow can I assist you today?',
                timestamp: new Date(),
                id: 'welcome-1'
            };
            setChatHistory([welcomeMessage]);
            setShowWelcome(false);
        }
    }, [isOpen, chatHistory.length, showWelcome]);

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const userMessage = {
            type: 'user',
            content: message,
            timestamp: new Date(),
            id: `user-${Date.now()}`
        };

        setChatHistory(prev => [...prev, userMessage]);
        const currentMessage = message;
        setMessage('');

        if (onSendMessage) {
            try {
                await onSendMessage(currentMessage);
            } catch (error) {
                console.error('Error sending message:', error);
            }
        } else {
            // Simulate assistant response with typing indicator
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                const assistantMessage = {
                    type: 'assistant',
                    content: generateResponse(currentMessage),
                    timestamp: new Date(),
                    id: `assistant-${Date.now()}`
                };
                setChatHistory(prev => [...prev, assistantMessage]);
            }, 1500 + Math.random() * 1000); // Random delay for more natural feel
        }
    };

    const generateResponse = (userMessage) => {
        const message = userMessage.toLowerCase();
        
        if (message.includes('ai') || message.includes('artificial intelligence')) {
            return 'Our AI solutions include machine learning models, natural language processing, computer vision, and predictive analytics. We can help you implement AI to automate processes, gain insights from data, and create intelligent applications. Would you like to discuss a specific AI use case?';
        } else if (message.includes('security') || message.includes('cyber')) {
            return 'We offer comprehensive cybersecurity services including threat detection, vulnerability assessments, security audits, and compliance management. Our team can help protect your systems from evolving threats. What security challenges are you currently facing?';
        } else if (message.includes('cloud') || message.includes('aws') || message.includes('azure')) {
            return 'Our cloud services cover infrastructure setup, migration, optimization, and management across AWS, Azure, and Google Cloud. We help businesses scale efficiently while reducing costs. Are you looking to migrate to the cloud or optimize existing infrastructure?';
        } else if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
            return 'Our pricing varies based on the scope and complexity of your project. We offer flexible engagement models including project-based pricing and ongoing support contracts. I\'d be happy to connect you with our sales team for a detailed quote. Would you like me to arrange a consultation?';
        } else if (message.includes('contact') || message.includes('speak') || message.includes('call')) {
            return 'Absolutely! You can reach our team at +1 302 464 0950 or email kleber@ziontechgroup.com. We\'re available 24/7 for urgent matters and typically respond to inquiries within 2 hours during business hours. Would you like me to schedule a call?';
        } else {
            return 'Thank you for your message! I\'d be happy to help you with that. Our team specializes in AI, cybersecurity, cloud solutions, and digital transformation. Could you provide more details about your specific needs so I can better assist you?';
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const quickActions = [
        'AI Solutions',
        'Cybersecurity',
        'Cloud Services',
        'Get Quote',
        'Schedule Call'
    ];

    if (!isOpen) {
        return (
            <motion.button 
                onClick={() => setIsOpen(true)} 
                className="fixed bottom-6 right-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 z-50 group" 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
            >
                <MessageCircle className="w-6 h-6"/>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <motion.div
                    className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white text-zion-blue px-3 py-1 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                >
                    Need help?
                </motion.div>
            </motion.button>
        );
    }

    return (
        <AnimatePresence>
            <motion.div 
                className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden ${
                    isExpanded ? 'w-[500px] h-[600px]' : 'w-96 h-[500px]'
                }`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.8, y: 20 }} 
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot className="w-5 h-5"/>
                            </div>
                            <div>
                                <h3 className="font-semibold">Zion AI Assistant</h3>
                                <p className="text-xs text-white/80">Always here to help</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={() => setIsMinimized(!isMinimized)} 
                                className="p-1 hover:bg-white/20 rounded transition-colors"
                                title={isMinimized ? "Expand" : "Minimize"}
                            >
                                {isMinimized ? <Maximize2 className="w-4 h-4"/> : <Minimize2 className="w-4 h-4"/>}
                            </button>
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)} 
                                className="p-1 hover:bg-white/20 rounded transition-colors"
                                title={isExpanded ? "Collapse" : "Expand"}
                            >
                                <Settings className="w-4 h-4"/>
                            </button>
                            <button 
                                onClick={() => setIsOpen(false)} 
                                className="p-1 hover:bg-white/20 rounded transition-colors"
                                title="Close"
                            >
                                <X className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto h-80 bg-gray-50">
                            {chatHistory.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                                        <div className={`p-3 rounded-lg ${
                                            msg.type === 'user' 
                                                ? 'bg-zion-cyan text-white' 
                                                : 'bg-white text-gray-800 border border-gray-200'
                                        }`}>
                                            <p className="text-sm whitespace-pre-line">{msg.content}</p>
                                        </div>
                                        <div className={`text-xs text-gray-500 mt-1 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                                            {formatTime(msg.timestamp)}
                                        </div>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                        msg.type === 'user' ? 'order-1 bg-zion-cyan' : 'order-2 bg-zion-purple'
                                    }`}>
                                        {msg.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                                    </div>
                                </motion.div>
                            ))}
                            
                            {isTyping && (
                                <motion.div
                                    className="flex justify-start mb-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div className="order-1">
                                        <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-lg">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center order-2 bg-zion-purple ml-2">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                </motion.div>
                            )}
                            
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        {chatHistory.length === 1 && (
                            <div className="px-4 pb-3">
                                <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {quickActions.map((action, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setMessage(action)}
                                            className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full hover:bg-zion-cyan/20 transition-colors"
                                        >
                                            {action}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 border-t border-gray-200 bg-white">
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                                    disabled={isTyping}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!message.trim() || isTyping}
                                    className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                Press Enter to send • Shift+Enter for new line
                            </p>
                        </div>
                    </>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
