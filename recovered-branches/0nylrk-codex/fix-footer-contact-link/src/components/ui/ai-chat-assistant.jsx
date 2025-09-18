import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Bot, User, X, Minimize2, Maximize2, Mic, MicOff, Settings, Brain, Paperclip, Smile } from 'lucide-react';
import { Button } from './button';
export function AIChatAssistant({ enabled = true, className = "", onMessageSend, onAssistantResponse }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: '1',
            type: 'assistant',
            content: 'Hello! I\'m Zion AI Assistant. I can help you with technology solutions, business insights, and answer any questions about our services. How can I assist you today?',
            timestamp: new Date(),
            status: 'sent',
            metadata: {
                confidence: 0.95,
                suggestions: ['Tell me about your AI services', 'What cloud solutions do you offer?', 'How can I get started?']
            }
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    // Focus input when opened
    useEffect(() => {
        if (isOpen && !isMinimized) {
            inputRef.current?.focus();
        }
    }, [isOpen, isMinimized]);
    // Simulate AI typing
    useEffect(() => {
        if (isTyping) {
            const timer = setTimeout(() => {
                setIsTyping(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isTyping]);
    // Generate AI response
    const generateAIResponse = (_userMessage) => {
        setIsTyping(true);
        // Simulate API call delay
        const timer = setTimeout(() => {
            // Mock AI responses based on user input
            const responses = [
                {
                    content: "That's a great question! Zion Tech Group specializes in cutting-edge AI solutions that can transform your business operations. Our AI services include machine learning models, natural language processing, and predictive analytics.",
                    suggestions: ['Tell me more about AI pricing', 'What industries do you serve?', 'Can you provide a demo?']
                },
                {
                    content: "Our cloud solutions are designed for scalability and security. We offer AWS, Azure, and Google Cloud expertise with custom migration strategies and cost optimization.",
                    suggestions: ['What about security?', 'How long does migration take?', 'Do you provide 24/7 support?']
                },
                {
                    content: "Cybersecurity is our top priority. We implement enterprise-grade security measures including threat detection, data encryption, and compliance management.",
                    suggestions: ['What compliance standards?', 'How do you handle breaches?', 'Security audit process?']
                },
                {
                    content: "Getting started is easy! We begin with a free consultation to understand your needs, then create a customized roadmap for your digital transformation journey.",
                    suggestions: ['Schedule consultation', 'View case studies', 'Meet the team']
                }
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const aiMessage = {
                id: Date.now().toString(),
                type: 'assistant',
                content: randomResponse.content,
                timestamp: new Date(),
                status: 'sent',
                metadata: {
                    confidence: 0.85 + Math.random() * 0.1,
                    suggestions: randomResponse.suggestions
                }
            };
            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
            onAssistantResponse?.(aiMessage.content);
        }, 1500 + Math.random() * 1000);
        return () => clearTimeout(timer);
    };
    // Send message
    const sendMessage = async () => {
        if (!inputValue.trim() || isTyping)
            return;
        const userMessage = {
            id: Date.now().toString(),
            type: 'user',
            content: inputValue.trim(),
            timestamp: new Date(),
            status: 'sending'
        };
        setMessages(prev => [...prev, userMessage]);
        onMessageSend?.(userMessage.content);
        // Generate AI response
        generateAIResponse(userMessage.content);
    };
    // Handle enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    // Toggle voice input
    const toggleVoiceInput = () => {
        setIsRecording(!isRecording);
        // In a real implementation, this would start/stop speech recognition
    };
    // Handle suggestion click
    const handleSuggestionClick = useCallback((suggestion) => {
        setInputValue(suggestion);
        inputRef.current?.focus();
    }, []);
    // Clear chat
    const clearChat = () => {
        setMessages([messages[0]]); // Keep welcome message
    };
    if (!enabled)
        return null;
    return (<div className={`fixed bottom-4 right-4 z-40 ${className}`}>
      {/* Chat Toggle Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className="p-3 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-full shadow-lg transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="AI Chat Assistant">
        <MessageSquare className="w-6 h-6"/>
      </motion.button>

export default ai-chat-assistant;
