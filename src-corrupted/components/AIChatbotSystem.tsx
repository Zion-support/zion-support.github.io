import { AnimatePresence, motion } from 'framer-motion';
import {
  Bot,
  CheckCircle,
  Clock,
  MessageCircle,
  Mic,
  MicOff,
  Paperclip,
  RefreshCw,
  Send,
  Settings,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  User,
  X
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'image' | 'file' | 'system';
  status: 'sending' | 'sent' | 'error';
  metadata?: {
    confidence?: number;
    suggestions?: string[];
    relatedServices?: string[];
    estimatedResponseTime?: number;
  };
}

interface AIChatbotSystemProps {
  showHeader?: boolean;
  showSettings?: boolean;
  maxMessages?: number;
  autoScroll?: boolean;
}

export const AIChatbotSystem: React.FC<AIChatbotSystemProps> = ({
  showHeader = true,
  showSettings = true,
  maxMessages = 50,
  autoScroll = true
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  const [settings, setSettings] = useState({
    voiceEnabled: false,
    autoResponse: true,
    language: 'en',
    theme: 'dark',
    responseSpeed: 'normal'
  });
  const [isListening, setIsListening] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        content: "Hello! I'm Zion AI, your intelligent assistant. I can help you with:\n\n• Information about our services\n• Technical support and guidance\n• Project inquiries and quotes\n• General questions about Zion Tech Group\n\nHow can I assist you today?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
        status: 'sent',
        metadata: {
          confidence: 0.95,
          suggestions: ['Tell me about your services', 'Get a quote', 'Technical support', 'Contact information'],
          relatedServices: ['AI Consulting', 'Cloud Solutions', 'Digital Transformation'],
          estimatedResponseTime: 2
        }
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, autoScroll]);

  // Simulate AI response
  const simulateAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const responses = [
      {
        content: "I'd be happy to help you with that! Zion Tech Group offers comprehensive AI consulting services including machine learning implementation, data analytics, and process automation. Would you like me to provide more specific details about any particular service?",
        suggestions: ['AI Consulting details', 'Machine Learning services', 'Data Analytics', 'Process Automation'],
        relatedServices: ['AI Consulting', 'Machine Learning', 'Data Analytics']
      },
      {
        content: "Great question! Our cloud migration services help businesses transition smoothly to cloud infrastructure. We provide assessment, planning, implementation, and ongoing support. The typical timeline is 3-6 months depending on complexity.",
        suggestions: ['Cloud Migration timeline', 'Infrastructure assessment', 'Implementation process', 'Ongoing support'],
        relatedServices: ['Cloud Migration', 'Infrastructure Modernization', 'DevOps Services']
      },
      {
        content: "For cybersecurity services, we offer threat detection, incident response, security audits, and employee training. Our team uses advanced tools and follows industry best practices to protect your digital assets.",
        suggestions: ['Threat detection', 'Incident response', 'Security audits', 'Employee training'],
        relatedServices: ['Cybersecurity', 'Threat Detection', 'Security Training']
      },
      {
        content: "Digital transformation is our specialty! We help businesses modernize their technology stack, improve processes, and enhance customer experiences. Our approach includes strategy development, implementation, and change management.",
        suggestions: ['Strategy development', 'Implementation process', 'Change management', 'ROI examples'],
        relatedServices: ['Digital Transformation', 'Process Optimization', 'Change Management']
      }
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const botMessage: ChatMessage = {
      id: Date.now().toString(),
      content: randomResponse.content,
      sender: 'bot',
      timestamp: new Date(),
      type: 'text',
      status: 'sent',
      metadata: {
        confidence: 0.85 + Math.random() * 0.1,
        suggestions: randomResponse.suggestions,
        relatedServices: randomResponse.relatedServices,
        estimatedResponseTime: 1 + Math.random() * 2
      }
    };
    
    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  // Handle message submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
      type: 'text',
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Generate AI response
    await simulateAIResponse(inputValue);
  };

  // Handle voice input
  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // In a real implementation, this would integrate with Web Speech API
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileMessage: ChatMessage = {
        id: Date.now().toString(),
        content: `Uploaded: ${file.name}`,
        sender: 'user',
        timestamp: new Date(),
        type: 'file',
        status: 'sent'
      };
      setMessages(prev => [...prev, fileMessage]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  // Rate response
  const rateResponse = (messageId: string, rating: 'positive' | 'negative') => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, metadata: { ...msg.metadata, userRating: rating } }
        : msg
    ));
  };

  // Clear chat
  const clearChat = () => {
    setMessages([]);
    setChatHistory([]);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AIChatbotSystem</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AIChatbotSystem;
