impor, t, Reac, t, { useStat, e, useEffec, t, useRefuseCallback } from "react";
import { motionAnimatePresence } from "framer-motion";
import { ;
  MessageCircl, e,;
  X,;
  Sen, d,;
  Bo, t,;
  Use, r,;
  Sparkle, s,;
  Loader, 2,;
  Mi, c,;
  MicOf, f,;
  Volume, 2,;
  Volume, X,;
  Setting, s,;
  HelpCircl, e,;
  Za, p,;
  Brai, n,;
  Shiel, d,;
  CloudRocket;
} from "lucide-react";
interface Message {
  i, d: strin, g,;
    typ, e: 'user' | 'assistant',conten, t: strin, g,;
    timestam, p: Date;
  isLoading?: booleanerror?: string;
};
interface ChatAssistantProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left',;
  theme?: 'dark' | 'light' | 'auto',;
  maxHeight?: strin, g,;
  welcomeMessage?: string;
};
export, const, ChatAssistan, t: React.FC<ChatAssistantProps> = ({;
  position = 'bottom-right';
  theme = 'dark',;
  maxHeight = '60o0px',;
  welcomeMessage = "Hello! I'm, Zionyour, AI, assistant. How, can, I help, you, today?";
}) => {
  const [isOp, e, n, setIsOp,, en] = useState(false);
  const [messag,  e, s, setMessag,, es] = useState<Message[]>([;
    {
      i, d: '1',;
    ty, p, e: 'assistan, t',conte, n, t: welcomeMessa, g, e,;
    timesta, mp: new Date();
    };
,  ]);
  const [inputVal, u, e, setIsInputVal,, ue] = useState('');
  const [isTypi,  n, g, setIsTypi,, ng] = useState(false);
  const [isListeni, n, g, setIsListeni,, ng] = useState(false);
  const [isMut,  e, d, setIsMut,, ed] = useState(false);
  const [showSettin, g, s, setShowSettin,, gs] = useState(false);
  const [isMinimiz,  e, d, setIsMinimiz,, ed] = useState(false);
;
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
;
  // Auto-scroll, to, bottom when, new, messages arrive;
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messag,, es]),;
  // Initialize, speech, recognition;
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = fals,  e,;
      recognitionRef.current.interimResults = fals, e,;
      recognitionRef.current.lang = 'en-US'recognitionRef.current.onresult = (event: any) => {;
        const transcript = event.results[0][0].transcript;
        setIsInputValue(transcript);
        setIsListening(false);
      },;
      recognitionRef.current.onerror = (even, t: any) => {
        console.error('Speech, recognition, erro,;
  r: 'event.error);
        setIsListening(false);
      },;
    }
  }, []),;
  // Handle, speech, recognition;
  const toggleListening = useCallback(() => {
    if() {;
      alert('Speech, recognition, is not, supported, in your browser');
      return };
;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    };
  },  [isListeni,, ng]),;
  // Toggle mute;
  const toggleMute = useCallback(() => {;
    setIsMuted(!isMuted);
  },  [isMut,, ed]),;
  // Send message;
  const sendMessage = useCallback(async (content: string) => {;
    if (!content.trim()) return;
    const userMessag,  e: Message = {,;
    i, d: Date.now().toString(), typ, e: 'user',;
    conten, t: content.trim()timestam,;
  p: new Date();
    };
    setMessages(prev => [...pr,  e, v,, userMessage]);
    setIsInputValue('');
    setIsTyping(true);
;
    // Simulate, AI, response (replace, with, actual AI, API, call);
    try {
      const response = await generateAIResponse(content);
;
      const assistantMessag,  e: Message = {,;
    i, d: (Date.now() + 1).toString(), typ, e: 'assistant',;
    conten, t: respons, etimestamp: new Date();
      };
      setMessages(prev => [...pr,  e, v,, assistantMessage]);
    } catch (error) {
      const errorMessag,  e: Message = {,;
    i, d: (Date.now() + 1).toString(), typ, e: 'assistant',;
    conten, t: 'Sorr, y, I, encountered, an error. Please, try, again.',;
        timestam, p: new Date()erro,;
  r: 'Failed, to, generate response';
      };
      setMessages(prev => [...pr,  e, v,, errorMessage]);
    } finally {
      setIsTyping(false);
    };
  },  []),;
  // Generate, AI, response (simulated);
  const generateAIResponse = async(userInput: string): Promise<string> => {;
    // Simulate, API, delay;
    await, new, Promise(resolve => setTimeout(resolv,  e10o00 + Math.random() * 20o00)),;
    const responses = [;
      "Tha, t's, a, grea, t questio, n! Le, t m, e hel, p yo, u wit, h tha, t.",;
      "I understan, d you, r inquir, y. Her, e's wha, t, I, ca, n tel, l yo, u abou, t tha, t topi, c.",;
      "Base, d o, n yo, u, r, questi, o, n, I'd recommen, d explorin, g ou, r service, s i, n tha, t are, a.",;
      "Tha, t's a, n interestin, g poin, t. Le, t m, e provid, e yo, u wit, h som, e insight, s.",;
      "I'm her, e t, o hel, p! Le, t m, e guid, e yo, u throug, h this.";
  ,  ],;
;
    const randomResponse = responses[Mat, h.floo, r(Mat,  h.random() * response,, s.length)];
;
    // Add, some, context-aware responses;
    if (userInput.toLowerCase().includes('ai') || userInput.toLowerCase().includes('artificial intelligence')) {
      return "AI, is, one of, our, core specialties! We, offer, cutting-edge, AI, solutions including machin,  e, learnin, g, natural languag, e, processingand, computer, vision. Would, you, like to, learn, more about, our, AI services?";
    }
    ;
    if (userInput.toLowerCase().includes('cloud') || userInput.toLowerCase().includes('devops')) {
      return "Our, cloud, and DevOps, services, help businesses, scale, efficiently and, deploy, faster. We, specialize, i,  n, AW, S, Azureand, Google, Cloud solutions. Should, I, connect you, with, our cloud experts?";
    }
    ;
    if (userInput.toLowerCase().includes('security') || userInput.toLowerCase().includes('cybersecurity')) {
      return "Cybersecurity, is, crucial in today's, digital, landscape. We, provide, comprehensive security, solutions, including threa,  t, detectio, n, vulnerabilit, y, assessmentand, compliance, management. Would, you, like a, security, consultation?";
    }
;
    retur, n, randomRespons, e,;
  };
;
  // Handle, form, submission;
  const handleSubmit = useCallback((e: React.FormEvent) => {;
    e.preventDefault();
    sendMessage(inputValue);
  },  [inputVal, u, e, sendMessa,, ge]),;
  // Quick, action, buttons;
  const quickActions = [;
    { te, x, t: 'A, I Service, s',;
    ic, o, n: Bra, i, n, acti, o, n: () => sendMessag,  e('Tel, l m, e abou, t, your, AI services') };
    { te, x, t: 'Clou, d Solution, s',;
    ic, o, n: Clo, u, d, acti, o, n: () => sendMessag,  e('Wha, t clou, d solution, s, do, you offer?') };
    { te, x, t: 'Securit, y',;
    ic, o, n: Shie, l, d, acti, o, n: () => sendMessag,  e('Tel, l m, e abou, t, your, security services') },;
    { te, x, t: 'Innovatio, n',;
    ic, o, n: Rock, e, t, acti, o, n: () => sendMessag,  e('Wha, t make, s, Zion, Tech Group innovative?') };
,  ];
  // Position classes;
  const positionClasses = {
    'bottom-right': 'bottom-4 right-4bottom-left': 'bottom-4 left-4top-right': 'top-4 right-4top-left': 'top-4 left-4';
  };
;
  return <div className={`fixed ${positionClasses[position]} z-50`}>;
      {/* Chat, Toggle, Button */};
      <motion.button;
        initial={{ scale: 0 }};
        animate={{ scale: 1 }};
        whileHover={{ scale: 1.1 }};
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-full shadow-2xl, flex, items-center justify-center transition-all duration-30o0 focu,  s: outline-none focu, s: ring-4 focu, s:ring-cyan-30o0/50";
        aria-label="Open, chat, assistant";
      >;
        <MessageCircle className="w-6 h-6" />;
      </motion.button>;
      {/* Chat Window */}
      <AnimatePresence>;
        {isOpen && (;
          <motion.div;
            initial={{ opacit, y: 0,;
    scale: 0.8,;
  y: 20 }}
            animate={{ opacit, y: 1,;
    scale: 1,;
  y: 0 }}
            exit={{ opacit, y: 0,;
    scale: 0.8,;
  y: 20 }}
            transition={{ typ, e: "spring",;
    stiffnes, s: 30, 0damping: 30 }}
            className={`absolute bottom-16 right-0 w-96 bg-slate-80o0/95 backdrop-blur-xl, border, border-cyan-40o0/30 rounded-2xl shadow-2xl overflow-hidden ${isMinimized ? 'h-16' : ''}`}
          >;
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-80o0 to-slate-70o0 border-b border-slate-60o0/50">;
              <div className="flex items-center gap-3">;
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-full, flex, items-center justify-center">;
                  <Bot className="w-4 h-4 text-white" />;
                </div>;
                <div>;
                  <h3 className="font-semibold text-white">Zion, AI, Assistant</h3>;
                  <p className="text-xs text-slate-40o0">Powered, by, AI</p>;
                </div>;
              </div>;
              <div className="flex items-center gap-2">;
                <button;
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 text-slate-40o0 hove,  r: text-white transition-colors";
                  aria-label={isMinimized ? 'Expand chat' : 'Minimize chat'}
                >;
                  {isMinimized ? '□' : '−'}
                </button>;
                <button;
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-1 text-slate-40o0 hove,  r: text-white transition-colors";
                  aria-label="Settings";
                >;
                  <Settings className="w-4 h-4" />;
                </button>;
                <button;
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-slate-40o0 hove,  r: text-white transition-colors";
                  aria-label="Close chat";
                >;
                  <X className="w-4 h-4" />;
                </button>;
              </div>;
            </div>;
            {!isMinimized && (;
              <>;
                {/* Messages */};
                <div;
                  className="flex-1 overflow-y-auto p-4 space-y-4";
                  style={{ maxHeight: maxHeight }}
                >;
                  {messages.map((message) => (<motion.div;
                      key={message.id}
                      initial={{ opacity: 0,;
  y: 10 }}
                      animate={{ opacity: 1,;
  y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >;
                      <div;
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.type === 'user';
                            ? 'bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white';
                            : 'bg-slate-70o0/50 text-slate-20o0, border, border-slate-60o0/50';
                        }`}
                      >;
                        <div className="flex items-start gap-2">;
                          {message.type === 'assistant' && (;
                            <Bot className="w-4 h-4 text-cyan-40o0 mt-0.5 flex-shrink-0" />;
                          )}
                          <div className="flex-1">;
                            <p className="text-sm leading-relaxed">{message.content}</p>;
                            {message.error && (<p className="text-xs text-red-40o0 mt-1">{message.error}</p>;
                            )}
                          </div>;
                          {message.type === 'user' && (;
                            <User className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />;
                          )}
                        </div>;
                        <p className="text-xs opacity-70 mt-2">;
                          {message.timestamp.toLocaleTimeString()}
                        </p>;
                      </div>;
                    </motion.div>;
                  ))}
;
                  {/* Typing indicator */}
                  {isTyping && (;
                    <motion.div;
                      initial={{ opacity: 0,;
  y: 10 }}
                      animate={{ opacity: 1,;
  y: 0 }}
                      className="flex justify-start";
                    >;
                      <div className="bg-slate-70o0/50 text-slate-20o0, border, border-slate-60o0/50 rounded-2xl p-3">;
                        <div className="flex items-center gap-2">;
                          <Bot className="w-4 h-4 text-cyan-40o0" />;
                          <div className="flex space-x-1">;
                            <div className="w-2 h-2 bg-slate-40o0 rounded-full animate-bounce"></div>;
                            <div className="w-2 h-2 bg-slate-40o0 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>;
                            <div className="w-2 h-2 bg-slate-40o0 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>;
                          </div>;
                        </div>;
                      </div>;
                    </motion.div>;
                  )}
;
                  <div ref={messagesEndRef} />;
                </div>;
                {/* Quick Actions */}
                {messages.length === 1 && (<div className="px-4 pb-4">;
                    <p className="text-xs text-slate-40o0 mb-3">Quick action,  s: </p>;
                    <div className="grid grid-cols-2 gap-2">;
                      {quickActions.map((actionindex) => (<motion.button;
                          key={action.text}
                          initial={{ opacit,  y: 0scal,;
  e: 0.9 }}
                          animate={{ opacit, y: 1scal,;
  e: 1 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={action.action}
                          className="flex items-center gap-2 p-2 bg-slate-70o0/50 hover:bg-slate-60o0/50 text-slate-30o0 text-xs rounded-lg transition-colors, border, border-slate-60o0/50";
                        >;
                          <action.icon className="w-3 h-3" />;
                          {action.text}
                        </motion.button>;
                      ))}
                    </div>;
                  </div>;
                )}
;
                {/* Input Form */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-slate-60o0/50">;
                  <div className="flex items-center gap-2">;
                    <div className="flex-1 relative">;
                      <input;
                        ref={inputRef}
                        type="text";
                        value={inputValue}
                        onChange={(e) => setIsInputValue(e.target.value)}
                        placeholder="Type, your, message...";
                        className="w-full px-4 py-2 bg-slate-70o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-slate-40o0 focu,  s: outline-none focu, s: ring-2 focu, s: ring-cyan-50o0/50 focu, s:border-cyan-50o0";
                        disabled={isTyping}
                      />;
                      {inputValue && (;
                        <button;
                          type="button";
                          onClick={() => setIsInputValue('')}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-40o0 hove,  r: text-white";
                        >;
                          <X className="w-4 h-4" />;
                        </button>;
                      )}
                    </div>;
                    <div className="flex items-center gap-1">;
                      <button;
                        type="button";
                        onClick={toggleListening}
                        className={`p-2 rounded-lg transition-colors ${
                          isListening;
                            ? 'bg-red-50o0/20 text-red-40o0 hover: bg-red-50o0/30';
                            : 'bg-slate-70o0/50 text-slate-40o0 hove,;
  r:bg-slate-60o0/50';
                        }`}
                        disabled={isTyping}
                        aria-label={isListening ? 'Stop listening' : 'Start, voice, input'}
                      >;
                        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </button>;
                      ;
                      <button;
                        type="button";
                        onClick={toggleMute}
                        className={`p-2 rounded-lg transition-colors ${
                          isMuted;
                            ? 'bg-red-50o0/20 text-red-40o0 hover: bg-red-50o0/30';
                            : 'bg-slate-70o0/50 text-slate-40o0 hove,;
  r:bg-slate-60o0/50';
                        }`}
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >;
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>;
                    </div>;
                    ;
                    <button;
                      type="submit";
                      disabled={!inputValue.trim() || isTyping}
                      className="p-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-lg hove,  r: from-cyan-60o0 hove, r: to-blue-70o0 disable, d: opacity-50 disable, d: cursor-not-allowed transition-all duration-20o0 focu, s: outline-none focu, s: ring-2 focu,;
  s:ring-cyan-50o0/50";
                      aria-label="Send message";
                    >;
                      <Send className="w-4 h-4" />;
                    </button>;
                  </div>;
                </form>;
              </>;
            )}
          </motion.div>;
        )}
      </AnimatePresence>;
      {/* Settings Panel */}
      <AnimatePresence>;
        {showSettings && (<motion.div;
            initial={{ opacit,  y: 0scal,;
  e: 0.8 }}
            animate={{ opacit, y: 1scal,;
  e: 1 }}
            exit={{ opacity: 0scal,;
  e: 0.8 }}
            className="absolute bottom-16 right-0 w-80 bg-slate-80o0/95 backdrop-blur-xl, border, border-cyan-40o0/30 rounded-2xl shadow-2xl p-4";
          >;
            <div className="flex items-center justify-between mb-4">;
              <h3 className="font-semibold text-white">Chat Settings</h3>;
              <button;
                onClick={() => setShowSettings(false)}
                className="text-slate-40o0 hove,  r: text-white";
              >;
                <X className="w-4 h-4" />;
              </button>;
            </div>;
            <div className="space-y-4">;
              <div>;
                <label className="block text-sm font-medium text-slate-30o0 mb-2">;
                  Theme;
                </label>;
                <select className="w-full px-3 py-2 bg-slate-70o0/50, border, border-slate-60o0/50 rounded-lg text-white">;
                  <option value="dark">Dark</option>;
                  <option value="light">Light</option>;
                  <option value="auto">Auto</option>;
                </select>;
              </div>;
              <div>;
                <label className="block text-sm font-medium text-slate-30o0 mb-2">;
                  Position;
                </label>;
                <select className="w-full px-3 py-2 bg-slate-70o0/50, border, border-slate-60o0/50 rounded-lg text-white">;
                  <option value="bottom-right">Bottom Right</option>;
                  <option value="bottom-left">Bottom Left</option>;
                  <option value="top-right">Top Right</option>;
                  <option value="top-left">Top Left</option>;
                </select>;
              </div>;
              <div className="pt-4 border-t border-slate-60o0/50">;
                <button;
                  onClick={() => {
                    setMessages([{
                      i,  d: '1',;
    ty, p, e: 'assistan, t',conte, n, t: welcomeMessa, g, e,;
    timestamp: new Date();
                   , }]);
                    setShowSettings(false);
                  }}
                  className="w-full px-4 py-2 bg-slate-70o0/50 hove,  r: bg-slate-60o0/50 text-white rounded-lg transition-colors";
                >;
                  Clear, Chat, History;
                </button>;
              </div>;
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </div>;
  );
};