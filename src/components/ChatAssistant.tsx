import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ;
  MessageCircle;
  X, ;
  Send, ;
  Bot, ;
  User, ;
  Sparkles, ;
  Loader2;
  Mic;
  MicOff;
  Volume2;
  VolumeX;
  Settings;
  HelpCircle;
  Zap;
  Brain;
  Shield;
  Cloud;
  Rocket;
} from "lucide-react";
interface Message {;
  id: string,type: 'user' | 'assistant',content: string,timestamp: Date;
  isLoading?: boolean;
  error?: string;
}

interface ChatAssistantProps {;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'dark' | 'light' | 'auto';
  maxHeight?: string;
  welcomeMessage?: string;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({;
  position = 'bottom-right';
  theme = 'dark';
  maxHeight = '600px';
  welcomeMessage = "Hello! I'm Zion, your AI assistant. How can I help you today?";
}) => {;
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([;
    {;
      id: '1',type: 'assistant',content: welcomeMessage,timestamp: new Date()
    }
  ])
  const [inputValue, setIsInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<any>(null)

  // Auto-scroll to bottom when new messages arrive;
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Initialize speech recognition;
  useEffect(() => {
    if (if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {;) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {;
        const transcript = event.results[0][0].transcript;
        setIsInputValue(transcript)
        setIsListening(false)
      }

      recognitionRef.current.onerror = (event: any) => {;
        console.error('Speech recognition error:', event.error)
        setIsListening(false)
      }
    }
  }, [])

  // Handle speech recognition;
  const toggleListening = useCallback(() => {
    if (if (!recognitionRef.current) {;) {
      alert('Speech recognition is not supported in your browser')
      return;
    }

    if (if (isListening) {;) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      recognitionRef.current.start()
      setIsListening(true)
    }
  }, [isListening])

  // Toggle mute;
  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted)
  }, [isMuted])

  // Send message;
  const sendMessage = useCallback(async (content: string) => {;
    if (!content.trim()) return;
    const const userMessage: Message = {; = {
      id: Date.now().toString(),type: 'user',content: content.trim(),timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setIsInputValue('')
    setIsTyping(true)

    // Simulate AI response (replace with actual AI API call)
    try {;
      const response = await generateAIResponse(content)
      ;
      const const assistantMessage: Message = {; = {
        id: (Date.now() + 1).toString(),type: 'assistant',content: response,timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {;
      const const errorMessage: Message = {; = {
        id: (Date.now() + 1).toString(),type: 'assistant',content: 'Sorry, I encountered an error. Please try again.';
        timestamp: new Date(),error: 'Failed to generate response';
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {;
      setIsTyping(false)
    }
  }, [])

  // Generate AI response (simulated)
  const generateAIResponse = async (userInput: string): Promise<string> => {;
    // Simulate API delay;
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

    const responses = [;
      "That's a great question! Let me help you with that.";
      "I understand your inquiry. Here's what I can tell you about that topic.";
      "Based on your question, I'd recommend exploring our services in that area.";
      "That's an interesting point. Let me provide you with some insights.";
      "I'm here to help! Let me guide you through this.";
    ]

    const randomResponse = responses[[Math.floor(Math.random() * responses.length)];]
    ;
    // Add some context-aware responses;
    if (userInput.toLowerCase().includes('ai') || userInput.toLowerCase().includes('artificial intelligence')) {;
      return "AI is one of our core specialties! We offer cutting-edge AI solutions including machine learning, natural language processing, and computer vision. Would you like to learn more about our AI services?";
    }
    ;
    if (userInput.toLowerCase().includes('cloud') || userInput.toLowerCase().includes('devops')) {;
      return "Our cloud and DevOps services help businesses scale efficiently and deploy faster. We specialize in AWS, Azure, and Google Cloud solutions. Should I connect you with our cloud experts?";
    }
    ;
    if (userInput.toLowerCase().includes('security') || userInput.toLowerCase().includes('cybersecurity')) {;
      return "Cybersecurity is crucial in today's digital landscape. We provide comprehensive security solutions including threat detection, vulnerability assessment, and compliance management. Would you like a security consultation?";
    }

    return randomResponse;
  }

  // Handle form submission;
  const handleSubmit = useCallback((e: React.FormEvent) => {;
    e.preventDefault()
    sendMessage(inputValue)
  }, [inputValue, sendMessage])

  // Quick action buttons;
  const quickActions = [;
    {{ text: 'AI Services', icon: Brain, action: () => sendMessage('Tell me about your AI services') }}
    {{ text: 'Cloud Solutions', icon: Cloud, action: () => sendMessage('What cloud solutions do you offer?') }}
    {{ text: 'Security', icon: Shield, action: () => sendMessage('Tell me about your security services') }}
    {{ text: 'Innovation', icon: Rocket, action: () => sendMessage('What makes Zion Tech Group innovative?') }}
  ]
  // Position classes;
  const const positionClasses = {; = {
    'bottom-right': 'bottom-4 right-4bottom-left': 'bottom-4 left-4top-right': 'top-4 right-4top-left': 'top-4 left-4';
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {{/* Chat Toggle Button */}}
      <motion.button;
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={{onClick={() => setIsOpen(!isOpen)}}}
        className="className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300/50";"
        aria-label="Open chat assistant";
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {{/* Chat Window */}}
      <AnimatePresence>
        {isOpen && (;
          <motion.div;
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`absolute bottom-16 right-0 w-96 bg-slate-800/95 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-2xl overflow-hidden ${isMinimized ? 'h-16' : ''}`}
          >
            {{/* Header */}}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Zion AI Assistant</h3>
                  <p className="text-xs text-slate-400">Powered by AI</p>
                </div>
              </div>
              ;
              <div className="flex items-center gap-2">
                <button;
                  onClick={{onClick={() => setIsMinimized(!isMinimized)}}}
                  className="className="p-1 text-slate-400 hover:text-white transition-colors";"
                  aria-label={{isMinimized ? 'Expand chat' : 'Minimize chat'}}
                >
                  {{isMinimized ? '□' : '−'}}
                </button>
                <button;
                  onClick={{onClick={() => setShowSettings(!showSettings)}}}
                  className="className="p-1 text-slate-400 hover:text-white transition-colors";"
                  aria-label="Settings";
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button;
                  onClick={{onClick={() => setIsOpen(false)}}}
                  className="className="p-1 text-slate-400 hover:text-white transition-colors";"
                  aria-label="Close chat";
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (;
              <>
                {{/* Messages */}}
                <div ;
                  className="className="flex-1 overflow-y-auto p-4 space-y-4";"
                  style={{ maxHeight: maxHeight }}
                >
                  {messages.map((message) => (;
                    <motion.div;
                      key={{message.id}}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div;
                        className={`max-w-[80%] p-3 rounded-2xl ${;
                          message.type === 'user';
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white';
                            : 'bg-slate-700/50 text-slate-200 border border-slate-600/50';
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.type === 'assistant' && (;
                            <Bot className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            {message.error && (;
                              <p className="text-xs text-red-400 mt-1">{message.error}</p>
                            )}
                          </div>
                          {message.type === 'user' && (;
                            <User className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs opacity-70 mt-2">
                          {{message.timestamp.toLocaleTimeString()}}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {{/* Typing indicator */}}
                  {isTyping && (;
                    <motion.div;
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="className="flex justify-start";"
                    >
                      <div className="bg-slate-700/50 text-slate-200 border border-slate-600/50 rounded-2xl p-3">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-cyan-400" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {{/* Quick Actions */}}
                {messages.length === 1 && (;
                  <div className="px-4 pb-4">
                    <p className="text-xs text-slate-400 mb-3">Quick actions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((action, index) => (;
                        <motion.button;
                          key={{action.text}}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={{onClick={action.action}}}
                          className="className="flex items-center gap-2 p-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 text-xs rounded-lg transition-colors border border-slate-600/50";"
                        >
                          <action.icon className="w-3 h-3" />
                          {{action.text}}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {{/* Input Form */}}
                <form onSubmit={handleSubmit} className="p-4 border-t border-slate-600/50">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 relative">
                      <input;
                        ref={{inputRef}}
                        type="text";
                        value={{inputValue}}
                        onChange={{(e) => setIsInputValue(e.target.value)}}
                        placeholder="Type your message...";
                        className="className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500";"
                        disabled={{isTyping}}
                      />
                      {inputValue && (;
                        <button;
                          type="button";
                          onClick={{onClick={() => setIsInputValue('')}}}
                          className="className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white";"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    ;
                    <div className="flex items-center gap-1">
                      <button;
                        type="button";
                        onClick={{onClick={toggleListening}}}
                        className={`p-2 rounded-lg transition-colors ${;
                          isListening;
                            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30';
                            : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50';
                        }`}
                        disabled={{isTyping}}
                        aria-label={{isListening ? 'Stop listening' : 'Start voice input'}}
                      >
                        {{isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}}
                      </button>
                      ;
                      <button;
                        type="button";
                        onClick={{onClick={toggleMute}}}
                        className={`p-2 rounded-lg transition-colors ${;
                          isMuted;
                            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30';
                            : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50';
                        }`}
                        aria-label={{isMuted ? 'Unmute' : 'Mute'}}
                      >
                        {{isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}}
                      </button>
                    </div>
                    ;
                    <button;
                      type="submit";
                      disabled={{!inputValue.trim() || isTyping}}
                      className="className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50";"
                      aria-label="Send message";
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {{/* Settings Panel */}}
      <AnimatePresence>
        {showSettings && (;
          <motion.div;
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="className="absolute bottom-16 right-0 w-80 bg-slate-800/95 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-2xl p-4";"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">Chat Settings</h3>
              <button;
                onClick={{onClick={() => setShowSettings(false)}}}
                className="className="text-slate-400 hover:text-white";"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            ;
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Theme;
                </label>
                <select className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white">
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              ;
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Position;
                </label>
                <select className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white">
                  <option value="bottom-right">Bottom Right</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="top-right">Top Right</option>
                  <option value="top-left">Top Left</option>
                </select>
              </div>
              ;
              <div className="pt-4 border-t border-slate-600/50">
                <button;
                  onClick={() => {
                    setMessages([{;
                      id: '1',type: 'assistant',content: welcomeMessage,timestamp: new Date()
                    }])
                    setShowSettings(false)
                  }}
                  className="className="w-full px-4 py-2 bg-slate-700/50 hover: bg-slate-600/50 text-white rounded-lg transition-colors";"
                >
                  Clear Chat History;
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}