import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Lightbulb, 
  Zap,
  Phone,
  Mail,
  Calendar,
  FileText,
  Globe,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Database,
  Code,
  Settings
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  action: () => void;
  color: string;
}

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m Zion, your AI assistant. I can help you with information about our services, schedule consultations, or answer any questions about Zion Tech Group. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const quickActions: QuickAction[] = [
    {
      id: 'services',
      label: 'Our Services',
      icon: Rocket,
      action: () => handleQuickAction('services'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'consultation',
      label: 'Schedule Consultation',
      icon: Calendar,
      action: () => handleQuickAction('consultation'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'contact',
      label: 'Contact Info',
      icon: Phone,
      action: () => handleQuickAction('contact'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'pricing',
      label: 'Pricing',
      icon: FileText,
      action: () => handleQuickAction('pricing'),
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-solutions',
      label: 'AI Solutions',
      icon: Brain,
      action: () => handleQuickAction('ai-solutions'),
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'cloud-services',
      label: 'Cloud Services',
      icon: Cloud,
      action: () => handleQuickAction('cloud-services'),
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const handleQuickAction = (action: string) => {
    let response = '';
    
    switch (action) {
      case 'services':
        response = `Here are our key services:

🚀 **AI & Machine Learning**
• AI Business Intelligence
• Machine Learning Solutions
• Natural Language Processing
• Computer Vision

☁️ **Cloud & DevOps**
• Cloud Infrastructure
• Automated Deployment
• Container Orchestration
• Serverless Solutions

🛡️ **Cybersecurity**
• AI-Powered Security
• Compliance Management
• Threat Detection
• Security Audits

💻 **Digital Transformation**
• Legacy System Modernization
• Process Automation
• Data Analytics
• Integration Services

Would you like me to provide more details about any specific service?`;
        break;
        
      case 'consultation':
        response = `Great! I can help you schedule a consultation. Here are your options:

📅 **Schedule a Call**
• Book a 30-minute discovery call
• Discuss your technology needs
• Get personalized recommendations

📧 **Email Consultation**
• Send detailed requirements
• Receive comprehensive proposal
• Get expert insights

🌐 **Online Meeting**
• Video conference consultation
• Screen sharing capabilities
• Interactive discussion

Would you like me to help you schedule one of these consultation types?`;
        break;
        
      case 'contact':
        response = `Here's how you can reach us:

📞 **Phone**: +1 302 464 0950
📧 **Email**: kleber@ziontechgroup.com
📍 **Office**: 364 E Main St STE 1008, Middletown, DE 19709
🌐 **Website**: ziontechgroup.com

⏰ **Business Hours**: Monday - Friday, 9:00 AM - 6:00 PM EST

We typically respond within 24 hours. For urgent matters, please call us directly.`;
        break;
        
      case 'pricing':
        response = `Our pricing structure is designed to be flexible and value-driven:

💎 **Enterprise Solutions**
• Custom pricing based on scope
• Volume discounts available
• Long-term partnership benefits

🚀 **AI Services**
• Starting from $5,000/month
• Pay-per-use models available
• ROI-focused pricing

☁️ **Cloud Services**
• Infrastructure: $2,000-$10,000/month
• Managed services: $3,000-$15,000/month
• Consulting: $200/hour

🛡️ **Cybersecurity**
• Assessment: $5,000-$25,000
• Implementation: $10,000-$100,000+
• Ongoing monitoring: $2,000-$10,000/month

Would you like a personalized quote for your specific needs?`;
        break;
        
      case 'ai-solutions':
        response = `Our AI solutions are cutting-edge and industry-leading:

🧠 **AI Business Intelligence**
• Predictive analytics
• Real-time dashboards
• Custom ML models
• Data visualization

📊 **Machine Learning**
• Supervised learning
• Unsupervised learning
• Deep learning
• Reinforcement learning

🗣️ **Natural Language Processing**
• Chatbots & virtual assistants
• Text analysis & sentiment
• Language translation
• Document processing

👁️ **Computer Vision**
• Image recognition
• Object detection
• Facial recognition
• Quality inspection

🔍 **AI Consulting**
• Strategy development
• Implementation planning
• Team training
• ROI optimization

What specific AI capability interests you most?`;
        break;
        
      case 'cloud-services':
        response = `Our cloud services provide enterprise-grade solutions:

☁️ **Cloud Infrastructure**
• AWS, Azure, Google Cloud
• Multi-cloud strategies
• Hybrid cloud solutions
• Disaster recovery

🚀 **DevOps & Automation**
• CI/CD pipelines
• Infrastructure as Code
• Container orchestration
• Monitoring & logging

🔒 **Cloud Security**
• Identity & access management
• Data encryption
• Compliance frameworks
• Threat detection

📊 **Data Management**
• Data lakes & warehouses
• ETL/ELT processes
• Real-time streaming
• Analytics platforms

💰 **Cost Optimization**
• Resource optimization
• Reserved instances
• Auto-scaling
• Cost monitoring

Which cloud service area would you like to explore?`;
        break;
        
      default:
        response = 'I\'m here to help! Please let me know what specific information you need.';
    }

    addMessage('assistant', response);
  };

  const addMessage = (type: 'user' | 'assistant', content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = async (response: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);
    addMessage('assistant', response);
  };

  const generateAIResponse = async (userInput: string): Promise<string> => {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const input = userInput.toLowerCase();
    
    // Service-related queries
    if (input.includes('service') || input.includes('offer')) {
      return `We offer a comprehensive range of technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation. Our services are designed to help businesses leverage cutting-edge technology for competitive advantage. Would you like me to detail any specific service area?`;
    }
    
    // AI-related queries
    if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning')) {
      return `Our AI capabilities are extensive! We specialize in machine learning, natural language processing, computer vision, and predictive analytics. We've helped companies across industries implement AI solutions that drive real business value. What specific AI application are you interested in?`;
    }
    
    // Pricing queries
    if (input.includes('price') || input.includes('cost') || input.includes('pricing') || input.includes('quote')) {
      return `Our pricing varies based on project scope and requirements. We offer flexible models including project-based pricing, monthly retainers, and pay-per-use for certain AI services. Would you like me to connect you with our sales team for a personalized quote?`;
    }
    
    // Contact queries
    if (input.includes('contact') || input.includes('reach') || input.includes('phone') || input.includes('email')) {
      return `You can reach us at +1 302 464 0950 or email kleber@ziontechgroup.com. We're located at 364 E Main St STE 1008, Middletown, DE 19709. We typically respond within 24 hours.`;
    }
    
    // Company information
    if (input.includes('company') || input.includes('about') || input.includes('zion')) {
      return `Zion Tech Group is a leading technology consulting firm specializing in AI-powered solutions, cloud infrastructure, and digital transformation. We help businesses leverage cutting-edge technology to achieve their goals and stay competitive in the digital age.`;
    }
    
    // Default response
    return `Thank you for your question! I'm here to help you with information about Zion Tech Group's services, pricing, and how we can assist with your technology needs. Could you please provide more specific details about what you're looking for?`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Add user message
    addMessage('user', userMessage);
    
    // Generate AI response
    const aiResponse = await generateAIResponse(userMessage);
    await simulateTyping(aiResponse);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const expandChat = () => {
    setIsMinimized(false);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-4 right-20 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Chat Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 z-50 w-96 bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Zion AI Assistant</h3>
                    <p className="text-sm text-blue-100">Powered by AI</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={minimizeChat}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    aria-label="Minimize chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.type === 'assistant' && (
                        <Bot className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                      )}
                      <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                    </div>
                    <div className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-blue-200' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-800 text-gray-200 p-3 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-blue-400" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-slate-700/50">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {quickActions.slice(0, 6).map((action) => (
                  <button
                    key={action.id}
                    onClick={action.action}
                    className={`p-2 bg-gradient-to-r ${action.color} text-white text-xs font-medium rounded-lg hover:shadow-lg transition-all duration-200 flex flex-col items-center gap-1`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <action.icon className="w-4 h-4" />
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about Zion Tech Group..."
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized Chat */}
      <AnimatePresence>
        {isMinimized && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={expandChat}
            className="fixed bottom-4 right-20 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Expand chat"
          >
            <MessageCircle className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
