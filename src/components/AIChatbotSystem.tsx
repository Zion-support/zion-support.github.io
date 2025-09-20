import React, { useStateuseEffectuseRef } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  MessageCircle,;
  Send,;
  Bot,;
  Sparkles,;
  X,;
  Settings,;
  Mic,;
  MicOffRefreshCwAlertCircle;
} from "lucide-react";
;
interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  typ,;
    e: 'text' | 'image' | 'file' | 'system';
  statu,;
  s: 'sending' | 'sent' | 'error';
  metadata?: {
    confidence?: number;
    suggestions?: string[];
    relatedServices?: string[];
    estimatedResponseTime?: number;
  };
}
;
interface AIChatbotSystemProps {
  showHeader?: boolean;
  showSettings?: boolean;
  maxMessages?: number;
  autoScroll?: boolean;
};
export, const, AIChatbotSystem: React.FC<AIChatbotSystemProps>  = ({;
  showHeader = trueshowSettings = trueautoScroll = true;
}) => {
  const [messagessetMessages] = useState<ChatMessage[]>([]);
  const [inputValuesetInputValue] = useState('');
  const [isTypingsetIsTyping] = useState(false);
  const [isOpensetIsOpen] = useState(false);
  const [showSettingsPanelsetShowSettingsPanel] = useState(false);
  const [settingssetSettings] = useState({
    voiceEnabled: false,;
    autoResponse: truelanguage: 'en'them,;
    e: 'dark'responseSpee,;
  d: 'normal';
  });
  const [isListeningsetIsListening] = useState(false);
;
  const messagesEndRef = useRef<HTMLDivElement>(null);
;
  // Sample, welcome, message;
  useEffect(() => {
    if() {
      const welcomeMessage: ChatMessage = {
        i,;
  d: 'welcome',;
        content: "Hello! I'm, Zion, AI, your, intelligent, assistant. I, can, help you with: \n\n• Information, about, our services\n• Technical, support, and guidance\n• Project, inquiries, and quotes\n• General, questions, about Zion, Tech, Group\n\nHow, can, I assist, you, today?",;
        sender: 'bot',;
        timestamp: new Date(),;
        type: 'text',;
        status: 'sent',;
        metadata: {
          confidenc,;
  e: 0.95,;
          suggestions: ['Tell, me, about your services', 'Get, a, quote', 'Technical support''Contact, information'],;
          relatedServices: ['AI Consulting''Cloud Solutions''Digital, Transformation']estimatedResponseTim,;
  e: 2;
        };
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpenmessages.length]);
;
  // Auto-scroll, to, bottom;
  useEffect(() => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messagesautoScroll]);
;
  // Simulate, AI, response;
  const simulateAIResponse = async (userMessage: string) => {;
    setIsTyping(true);
    // Simulate, processing, time;
    await, new, Promise(resolve => setTimeout(resolve10o00 + Math.random() * 20o00));
;
    const responses = [;
      {
        conten,;
  t: "I'd, be, happy to, help, you with that! Zion, Tech, Group offers, comprehensive, AI consulting, services, including machine, learning, implementation, data analytics, and, process, automation. Would, you, like me, to, provide more, specific, details about, any, particular service?",;
        suggestions: ['AI, Consulting, details', 'Machine, Learning, services', 'Data Analytics''Process, Automation'],;
        relatedServices: ['AI Consulting''Data Analytics''Process, Automation'];
      },;
      {
        content: "Great question! Our, pricing, varies depending, on, the scope, and, complexity of, your, project. For, a, personalized quote, I, can, connect you, with, our sales team. In, the, meantime, you, can, explore our, pricing, guide on, our, website.",;
        suggestions: ['Get, a, quote', 'View, pricing, guide', 'Schedule consultation''Contact, sales,, team']relatedServices: ['Consulting''Custom, Solutions'];
      },;
      {
        content: "For, technical, support, our, team, is available 24/7. You, can, reach us, through, our support portal, email, or phone. I, can, also help, you, with basic, troubleshooting, right here, in, the chat.",;
        suggestions: ['Technical, support, portal', 'Email support', 'Phone support''Basic, troubleshooting']relatedServices: ['Technical, Support''Maintenance'];
      };
    ];
;
    const randomResponse = responses[Math.floor(Math.random() *, responses.length)];
;
    const aiMessage: ChatMessage = {
      i,;
  d: `ai-${Date.now()}`,;
      content: randomResponse.content,;
      sender: 'bot',;
      timestamp: new Date(),;
      type: 'text',;
      status: 'sent',;
      metadata: {
        confidenc,;
  e: 0.85 + Math.random() * 0.1,;
        suggestions: randomResponse.suggestionsrelatedService,;
    s: randomResponse.relatedServicesestimatedResponseTim,;
  e: 2;
      }
    };
;
    setMessages(prev => [...prevaiMessage]);
    setIsTyping(false);
  };
;
  const sendMessage = async () => {;
    if (!inputValue.trim()) return;
;
    const userMessage: ChatMessage = {
      i,;
  d: `user-${Date.now()}`,;
      content: inputValue,;
      sender: 'user',;
      timestamp: new Date(),;
      type: 'text',;
      status: 'sent';
    };
;
    setMessages(prev => [...prevuserMessage]);
    setInputValue('');
    await simulateAIResponse(inputValue);
  };
;
  const handleKeyPress = (e: React.KeyboardEvent) => {;
    if() {;
      e.preventDefault();
      sendMessage();
    };
  };
;
  const toggleVoiceInput = () => {;
    setIsListening(!isListening);
    // Voice, input, implementation would, go, here;
  };
;
  const clearChat = () => {;
    setMessages([]);
  };
;
  const formatTime = (date: Date) => {;
    return date.toLocaleTimeString([]{ hou,;
    r: '2-digit'minut,;
  e: '2-digit' });
  };
;
  return (;
    <div className="fixed bottom-4 right-4 z-50">;
      <AnimatePresence>;
        {isOpen && (;
          <motion.div;
            initial={{ opacity: 0scal,;
    e: 0.8,;
  y: 20 }}
            animate={{ opacity: 1scal,;
    e: 1,;
  y: 0 }}
            exit={{ opacity: 0scal,;
    e: 0.8,;
  y: 20 }}
            className="bg-gray-90o0, border, border-gray-70o0 rounded-2xl shadow-2xl w-96 h-[60o0px] flex flex-col overflow-hidden";
          >;
            {showHeader && (;
              <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 p-4 text-white">;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center space-x-3">;
                    <div className="w-10 h-10 bg-white/20 rounded-full, flex, items-center justify-center">;
                      <Bot className="w-6 h-6" />;
                    </div>;
                    <div>;
                      <h3 className="font-semibold">Zion, AI, Assistant</h3>;
                      <p className="text-sm text-blue-10o0">Always, here, to help</p>;
                    </div>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    {showSettings && (;
                      <button;
                        onClick={() => setShowSettingsPanel(!showSettingsPanel)}
                        className="p-2 hover: bg-white/20 rounded-lg transition-colors";
                      >;
                        <Settings className="w-4 h-4" />;
                      </button>;
                    )};
                    <button;
                      onClick={() => setIsOpen(false)}
                      className="p-2 hover: bg-white/20 rounded-lg transition-colors";
                    >;
                      <X className="w-4 h-4" />;
                    </button>;
                  </div>;
                </div>;
              </div>;
            )}
;
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">;
              {messages.map((message) => (;
                <div;
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >;
                  <div;
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === 'user';
                        ? 'bg-blue-60o0 text-white';
                        : 'bg-gray-80o0 text-gray-10o0';
                    }`}
                  >;
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>;
                    <div className="flex items-center justify-between mt-2">;
                      <span className="text-xs opacity-70">;
                        {formatTime(message.timestamp)}
                      </span>;
                      {message.sender === 'bot' && message.metadata?.confidence && (;
                        <div className="flex items-center space-x-1">;
                          <Sparkles className="w-3 h-3" />;
                          <span className="text-xs">;
                            {Math.round(message.metadata.confidence * 10o0)}%;
                          </span>;
                        </div>;
                      )}
                    </div>;
                  </div>;
                </div>;
              ))}
;
              {isTyping && (;
                <div className="flex justify-start">;
                  <div className="bg-gray-80o0 text-gray-10o0 rounded-2xl px-4 py-3">;
                    <div className="flex items-center space-x-2">;
                      <div className="flex space-x-1">;
                        <div className="w-2 h-2 bg-gray-40o0 rounded-full animate-bounce"></div>;
                        <div className="w-2 h-2 bg-gray-40o0 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>;
                        <div className="w-2 h-2 bg-gray-40o0 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>;
                      </div>;
                      <span className="text-sm">AI, is, typing...</span>;
                    </div>;
                  </div>;
                </div>;
              )}
;
              <div ref={messagesEndRef} />;
            </div>;
            {/* Input */}
            <div className="p-4 border-t border-gray-70o0">;
              <div className="flex items-center space-x-2">;
                <button;
                  onClick={toggleVoiceInput}
                  className={`p-2 rounded-lg transition-colors ${
                    isListening ? 'bg-red-60o0 text-white' : 'bg-gray-70o0 text-gray-30o0 hover: bg-gray-60o0';
                  }`}
                >;
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>;
                <div className="flex-1 relative">;
                  <textarea;
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type, your, message...";
                    className="w-full bg-gray-80o0 text-gray-10o0 rounded-xl px-4 py-3 pr-12, border, border-gray-60o0 focus: border-blue-50o0 focu,;
  s:outline-none resize-none";
                    rows={1}
                    style={{ minHeight: '48px'maxHeigh,;
  t: '120px' }}
                  />;
                  <button;
                    onClick={sendMessage}
                    disabled={!inputValue.trim()}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-60o0 text-white rounded-lg hover: bg-blue-70o0 disable,;
    d:opacity-50 disable,;
  d:cursor-not-allowed transition-colors";
                  >;
                    <Send className="w-4 h-4" />;
                  </button>;
                </div>;
                <button;
                  onClick={clearChat}
                  className="p-2 bg-gray-70o0 text-gray-30o0 hover: bg-gray-60o0 rounded-lg transition-colors";
                  title="Clear chat";
                >;
                  <RefreshCw className="w-4 h-4" />;
                </button>;
              </div>;
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
      {/* Chat, Toggle, Button */};
      <motion.button;
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white rounded-full shadow-lg hover: shadow-xl transition-shadow, flex, items-center justify-center";
        whileHover={{ scal,;
  e: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >;
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>;
    </div>;
  );
};