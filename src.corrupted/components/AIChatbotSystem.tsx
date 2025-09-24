import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {;
  MessageCircle,;
  Send,;
  Bot,;
  User,;
  Sparkles,;
  X,;
  Settings,;
  Mic,;
  MicOff,;
  Paperclip,;
  RefreshCw,;
  ThumbsUp,;
  ThumbsDown,;
  Clock,;
  CheckCircle,;
  AlertCircle;
} from "lucide-react"
interface ChatMessage {;
  id: string,content: string,sender: 'user' | 'bot',timestamp: Date,type: 'text' | 'image' | 'file' | 'system',status: 'sending' | 'sent' | 'error'
  metadata?: {;
    confidence?: number,;
    suggestions?: string[],;
    relatedServices?: string[],;
    estimatedResponseTime?: number;
  },;
};

interface AIChatbotSystemProps {;
  showHeader?: boolean,;
  showSettings?: boolean,;
  maxMessages?: number,;
  autoScroll?: boolean,;
};

export const AIChatbotSystem: React.FC<AIChatbotSystemProps> = ({;
  showHeader = true;
  showSettings = true,;
  autoScroll = true;
}) => {;
  const [messages, setMessages] = useState<ChatMessage[]>([]),;
  const [inputValue, setInputValue] = useState(''),;
  const [isTyping, setIsTyping] = useState(false),;
  const [isOpen, setIsOpen] = useState(false),;
  const [showSettingsPanel, setShowSettingsPanel] = useState(false),;
  const [settings, setSettings] = useState({;
    voiceEnabled: false,autoResponse: true,language: 'en',theme: 'dark',responseSpeed: 'normal'
  });
  const [isListening, setIsListening] = useState(false),;

  const messagesEndRef = useRef<HTMLDivElement>(null);

  //[^;]*
  useEffect(() => {;
    if (isOpen && messages.length === 0) {;&& messages.length === 0) {; messages.length === 0) {
      const welcomeMessage: ChatMessage = {;
        id: 'welcome',content: "Hello! I'm Zion AI, your intelligent assistant. I can help you with: \n\n• Information about our services\n• Technical support and guidance\n• Project inquiries and quotes\n• General questions about Zion Tech Group\n\nHow can I assist you today?",sender: 'bot',timestamp: new Date(),type: 'text',status: 'sent',metadata: {;
          confidence: 0.95,suggestions: ['Tell me about your servicesGet a quote', 'Technical supportContact information'],;
          relatedServices: ['AI ConsultingCloud Solutions', 'Digital Transformation'],;
          estimatedResponseTime: 2;
        };
      };
      setMessages([welcomeMessage]),;
    };
  }, [isOpen, messages.length]),;

  //[^;]*
  useEffect(() => {;
    if (autoScroll && messagesEndRef.current) {;&& messagesEndRef.current) {; messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    };
  }, [messages, autoScroll]),;

  //[^;]*
  const simulateAIResponse = async (userMessage: string) => {;
    setIsTyping(true)
    //[^;]*
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000)),;

    const responses = [;
      {;
        content: "I'd be happy to help you with that! Zion Tech Group offers comprehensive AI consulting services including machine learning implementation, data analytics, and process automation. Would you like me to provide more specific details about any particular service?",;
        suggestions: ['AI Consulting detailsMachine Learning services', 'Data AnalyticsProcess Automation'],;
        relatedServices: ['AI ConsultingMachine Learning', 'Data Analytics']
      },;
      {;
        content: "Great question! Our cloud migration services help businesses transition smoothly to cloud infrastructure. We provide assessment, planning, implementation, and ongoing support. The typical timeline is 3-6 months depending on complexity.",;
        suggestions: ['Cloud Migration timelineInfrastructure assessment', 'Implementation processOngoing support'],;
        relatedServices: ['Cloud MigrationInfrastructure Modernization', 'DevOps Services']
      },;
      {;
        content: "For cybersecurity services, we offer threat detection, incident response, security audits, and employee training. Our team uses advanced tools and follows industry best practices to protect your digital assets.",;
        suggestions: ['Threat detectionIncident response', 'Security auditsEmployee training'],;
        relatedServices: ['CybersecurityThreat Detection', 'Security Training']
      },;
      {;
        content: "Digital transformation is our specialty! We help businesses modernize their technology stack, improve processes, and enhance customer experiences. Our approach includes strategy development, implementation, and change management.",;
        suggestions: ['Strategy developmentImplementation process', 'Change managementROI examples'],;
        relatedServices: ['Digital TransformationProcess Optimization', 'Change Management']
      };
    ],;

    const randomResponse = responses[Math.floor(Math.random() * responses.length)]

    const botMessage: ChatMessage = {;
      id: Date.now().toString(),content: randomResponse.content,sender: 'bot',timestamp: new Date(),type: 'text',status: 'sent',metadata: {;
        confidence: 0.85 + Math.random() * 0.1,suggestions: randomResponse.suggestions,relatedServices: randomResponse.relatedServices,estimatedResponseTime: 1 + Math.random() * 2;
      };
    };
    setMessages(prev => [...prev, botMessage]),;
    setIsTyping(false),;
  },;

  //[^;]*
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault()
    if (!inputValue.trim() || isTyping) return,

    const userMessage: ChatMessage = {;
      id: Date.now().toString(),content: inputValue,sender: 'user',timestamp: new Date(),type: 'text',status: 'sent'
    };
    setMessages(prev => [...prev, userMessage]),;
    setInputValue(''),;

    //[^;]*
    await simulateAIResponse(inputValue),;
  },;

  //[^;]*
  const toggleVoiceInput = () => {;
    setIsListening(!isListening),;
    //[^;]*
  },;

  //[^;]*
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0]
    if (file) {;
      const fileMessage: ChatMessage = {;
        id: Date.now().toString(),content: `Uploaded: ${file.name}`
        sender: 'user',timestamp: new Date(),type: 'file',status: 'sent'
      };
      setMessages(prev => [...prev, fileMessage]),;
    };
  },;

  //[^;]*
  const handleSuggestionClick = (suggestion: string) => {;
    setInputValue(suggestion)
  };
  //[^;]*
  const rateResponse = (messageId: string, rating: 'positive' | 'negative') => {;
    setMessages(prev => prev.map(msg =>;
      msg.id === messageId;
        ? { ...msg, metadata: { ...msg.metadata, userRating: rating } };
        : msg;
    ));
  },;

  //[^;]*
  const clearChat = () => {;
    setMessages([]),;
    setChatHistory([]),;
  },;

  return (
    <>;
      {/* Chat Toggle Button */};
      <motion.button
        onClick={() => setIsOpen(!isOpen)};
        className="[^"]*"
        whileHover={{ scale: 1.1 }};
        whileTap={{ scale: 0.95 }};
        aria-label="Toggle AI chatbot"
      >;
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </[^>]*>

      {/* Chat Window */};
      <AnimatePresence>;
        {isOpen && (;&& (; (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }};
            animate={{ opacity: 1, scale: 1, y: 0 }};
            exit={{ opacity: 0, scale: 0.9, y: 20 }};
            transition={{ duration: 0.3, ease: 'easeOut' }};
            className="[^"]*"
          >;
            {/* Header */};
            {showHeader && (;&& (; (
              <div className="p-4 bg-zinc-800/50 border-b border-zinc-700/50">;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-3">;
                    <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center">;
                      <[^>]*/>
                    </[^>]*>
                    <div>;
                      <h3 className="font-semibold text-white">Zion AI Assistant</[^>]*>
                      <div className="flex items-center gap-2 text-xs text-zinc-400">;
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></[^>]*>
                        Online;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div className="flex items-center gap-2">;
                    {showSettingsPanel && (;&& (; (
                      <button;
                        onClick={() => setShowSettingsPanel(!showSettingsPanel)};
                        className="[^"]*"
                        aria-label="Chat settings"
                      >;
                        <[^>]*/>
                      </[^>]*>
                    )};
                    <button;
                      onClick={clearChat};
                      className="[^"]*"
                      aria-label="Clear chat"
                    >;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            )};

            {/* Settings Panel */};
            <AnimatePresence>;
              {showSettingsPanel && (;&& (; (
                <motion.div
                  initial={{ height: 0, opacity: 0 }};
                  animate={{ height: 'auto', opacity: 1 }};
                  exit={{ height: 0, opacity: 0 }};
                  transition={{ duration: 0.3 }};
                  className="[^"]*"
                >;
                  <div className="p-4 space-y-3">;
                    <div className="flex items-center justify-between">;
                      <span className="text-sm text-zinc-300">Voice Input</[^>]*>
                      <button;
                        onClick={() => setSettings(prev => ({ ...prev, voiceEnabled: !prev.voiceEnabled }))};
                        className={`p-2 rounded-lg transition-colors ${;
                          settings.voiceEnabled
                            ? 'bg-zion-cyan text-white'
                            : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                        }`};
                      >;
                        {settings.voiceEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                      </[^>]*>
                    </[^>]*>

                    <div className="flex items-center justify-between">;
                      <span className="text-sm text-zinc-300">Auto Response</[^>]*>
                      <button;
                        onClick={() => setSettings(prev => ({ ...prev, autoResponse: !prev.autoResponse }))};
                        className={`p-2 rounded-lg transition-colors ${;
                          settings.autoResponse
                            ? 'bg-zion-cyan text-white'
                            : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                        }`};
                      >;
                        <[^>]*/>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              )};
            </[^>]*>

            {/* Messages */};
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">;
              {messages.map((message) => (;
                <motion.div
                  key={message.id};
                  initial={{ opacity: 0, y: 10 }};
                  animate={{ opacity: 1, y: 0 }};
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >;
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`p-3 rounded-lg ${;
                      message.sender === 'user'
                        ? 'bg-zion-cyan text-white'
                        : 'bg-zinc-800/50 text-zinc-100'
                    }`}>;
                      <div className="whitespace-pre-wrap">{message.content}</[^>]*>

                      {/* Message Metadata */};
                      {message.metadata && (;&& (; (
                        <div className="mt-2 pt-2 border-t border-zinc-600/30">;
                          {message.metadata.confidence && (;&& (; (
                            <div className="text-xs text-zinc-400 mb-1">;
                              Confidence: {Math.round(message.metadata.confidence * 100)}%;
                            </[^>]*>
                          )};

                          {message.metadata.suggestions && (;&& (; (
                            <div className="flex flex-wrap gap-1 mb-2">;
                              {message.metadata.suggestions.map((suggestion, index) => (;
                                <button;
                                  key={index};
                                  onClick={() => handleSuggestionClick(suggestion)};
                                  className="[^"]*"
                                >;
                                  {suggestion};
                                </[^>]*>
                              ))};
                            </[^>]*>
                          )};

                          {message.metadata.relatedServices && (;&& (; (
                            <div className="flex flex-wrap gap-1">;
                              {message.metadata.relatedServices.map((service, index) => (;
                                <span;
                                  key={index};
                                  className="[^"]*"
                                >;
                                  {service};
                                </[^>]*>
                              ))};
                            </[^>]*>
                          )};
                        </[^>]*>
                      )};
                    </[^>]*>

                    {/* Message Actions */};
                    <div className={`flex items-center gap-2 mt-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-xs text-zinc-500">;
                        {message.timestamp.toLocaleTimeString()};
                      </[^>]*>

                      {message.sender === 'bot' && (;&& (; (
                        <div className="flex items-center gap-1">;
                          <button;
                            onClick={() => rateResponse(message.id, 'positive')};
                            className="[^"]*"
                            aria-label="Rate response positively"
                          >;
                            <[^>]*/>
                          </[^>]*>
                          <button;
                            onClick={() => rateResponse(message.id, 'negative')};
                            className="[^"]*"
                            aria-label="Rate response negatively"
                          >;
                            <[^>]*/>
                          </[^>]*>
                        </[^>]*>
                      )};
                    </[^>]*>
                  </[^>]*>

                  {/* Avatar */};
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${;
                    message.sender === 'user' ? 'order-1 ml-2' : 'order-2 mr-2'
                  }`}>;
                    {message.sender === 'user' ? (;
                      <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">;
                        <[^>]*/>
                      </[^>]*>
                    ) : (;
                      <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center">;
                        <[^>]*/>
                      </[^>]*>
                    )};
                  </[^>]*>
                </[^>]*>
              ))};

              {/* Typing Indicator */};
              {isTyping && (;&& (; (
                <motion.div
                  initial={{ opacity: 0 }};
                  animate={{ opacity: 1 }};
                  className="[^"]*"
                >;
                  <div className="flex items-center gap-2 p-3 bg-zinc-800/50 rounded-lg">;
                    <div className="flex space-x-1">;
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></[^>]*>
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></[^>]*>
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></[^>]*>
                    </[^>]*>
                    <span className="text-sm text-zinc-400">Zion AI is typing...</[^>]*>
                  </[^>]*>
                </[^>]*>
              )};

              <[^>]*/>
            </[^>]*>

            {/* Input Area */};
            <div className="p-4 border-t border-zinc-700/50">;
              <form onSubmit={handleSubmit} className="flex items-center gap-2">;
                <div className="flex-1 relative">;
                  <input;
                    type="text"
                    value={inputValue};
                    onChange={(e) => setInputValue(e.target.value)};
                    placeholder="Ask me anything about Zion Tech Group..."
                    className="[^"]*"
                    disabled={isTyping};
                  />;

                  {/* File Upload */};
                  <label className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">;
                    <input;
                      type="file"
                      onChange={handleFileUpload};
                      className="[^"]*"
                      accept="image/*,.pdf,.doc,.docx,.txt"
                    />;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>

                {/* Voice Input */};
                {settings.voiceEnabled && (;&& (; (
                  <button;
                    type="button"
                    onClick={toggleVoiceInput};
                    className={`p-3 rounded-lg transition-colors ${;
                      isListening;
                        ? 'bg-red-500 text-white'
                        : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                    }`};
                    aria-label="Voice input"
                  >;
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </[^>]*>
                )};

                {/* Send Button */};
                <button;
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="[^"]*"
                  aria-label="Send message"
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>

              {/* Quick Actions */};
              <div className="flex items-center justify-between mt-3 text-xs text-zinc-500">;
                <div className="flex items-center gap-2">;
                  <[^>]*/>
                  <span>Powered by Zion AI</[^>]*>
                </[^>]*>
                <div className="flex items-center gap-1">;
                  <[^>]*/>
                  <span>24/7 Available</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>
    </[^>]*>
  );
};