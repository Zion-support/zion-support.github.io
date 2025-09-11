interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface AIChatbotProps {  className?: string;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ className = "" }) => {
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  },
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

  // AI response simulation
  const generateAIResponse = async (userMessage: string): Promise<string> => {
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    
    // Generate AI response
    const aiResponse = await generateAIResponse(userMessage.content);
    
    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: aiResponse,
      timestamp: new Date()
    };

    setMessages([...newMessages, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();      handleSendMessage();
    }
  };

  const quickReplies = [
    "Tell me about AI services",
    "Quantum computing pricing",
    "Business solutions",
    "Contact sales team",
    "Technical support"
  ];

  const handleQuickReply = (reply: string) => {
  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
  },;
  const quickReplies = [;
    "Tell me about AI services",;
    "Quantum computing pricing",;
    "Business solutions",;
    "Contact sales team",;
    "Technical support";
  ],;
  const handleQuickReply = (reply: string) => {;
    setInputValue(reply),;
    setTimeout(() => handleSendMessage(), 100);
  },;
  return (;
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>;
      {/* Chat Toggle Button */}
      {!isOpen && (;
        <motion.button;
    setInputValue(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <motion.button          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center";
        >;
          <MessageCircle className="w-6 h-6" />;
        </motion.button>;
      )}
;
      {/* Chat Window */}
                {/* Chat Input */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center";
                    >;
                      <Send className="w-4 h-4" />;
                    </button>;
                  </div>;
                </div>;
              </>;
            )}
          </motion.div>;
        )}
      </AnimatePresence>;
    </div>;
  );
},;