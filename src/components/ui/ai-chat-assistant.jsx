import React, {useState, useRef, useEffect, useCallback} from 'react';''
import {motion, AnimatePresence} from 'framer-motion';''
import {MessageSquare, Send, Bot, User, X, Minimize2, Maximize2, Mic, MicOff, Settings, Brain, Paperclip, Smile} from 'lucide-react';''
import {Button} from "button.tsx";"
export function AIChatAssistant($1) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [messages, setMessages] = useState([{"
            "id": '1',''
            "type": 'assistant',''
            "content": 'Hello! I\'m Zion AI Assistant. I can help you with technology solutions, business insights, and answer  questions about our services. How can I assist you today?',')'
            "timestamp": new Date(),""
            "status": 'sent',''
            "metadata": {"
                confidence: 0.95,]"
                suggestions['Tell me about your AI services', 'What cloud solutions do you offer?', 'How can I get started?'];'
            }
        }'
    ]);';';''
    const [inputValue, setInputValue] = useState(");"
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    // Auto-scroll to bottom;
    const scrollToBottom = (props) => {"
        messagesEndRef.current?.scrollIntoView({ "behavior": 'smooth' })};'
    useEffect(() => {scrollToBottom()}, [messages]);
    // Focus input when opened;
    useEffect(() => {
        if (isOpen && !isMinimized) {
            inputRef.current?.focus()}
    }, [isOpen, isMinimized]);
    // Simulate AI typing;
    useEffect(() => {
        if (isTyping) {
            const timer = setTimeout(() => {
                setIsTyping(false)};, 2000);
            return () => clearTimeout(timer)}
    }, [isTyping]);
    // Generate AI response;
    const generateAIResponse = (props) => {
        setIsTyping(true);
        // Simulate API call delay;
        const timer = setTimeout(() => {
            // Mock AI responses based on user input;
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const aiMessage = {'
  "id": Date.now().toString(),""
                "type": 'assistant',''
                "content": randomResponse.content,""
                "timestamp": new Date(),""
                "status": 'sent',''
                "metadata": {"
                    confidence: 0.85 + Math.random() * 0.1,"
  "suggestions": randomResponse.suggestions;"
}
            };
            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
            onAssistantResponse?.(aiMessage.content)}, 1500 + Math.random() * 1000);
        return () => clearTimeout(timer)};
    // Send message;
    const sendMessage = async () => {
        if (!inputValue.trim() || isTyping)
            return;
        const userMessage = {"
  "id": Date.now().toString(),""
            "type": 'user',''
            "content": inputValue.trim(),""
            "timestamp": new Date(),""
  "status": 'sending''
};
        setMessages(prev => [...prev, userMessage]);
        onMessageSend?.(userMessage.content);
        // Generate AI response;
        generateAIResponse(userMessage.content)};
    // Handle enter key;
    const handleKeyPress = (props) => {'
        if (e.key === 'Enter' && !e.shiftKey) {'
            e.preventDefault();
            sendMessage()}
    };
    // Toggle voice input;
    const toggleVoiceInput = (props) => {setIsRecording(!isRecording);
        // In a real implementation, this would start/stop speech recognition};
    // Handle suggestion click;
    const handleSuggestionClick = useCallback((suggestion) => {setInputValue(suggestion);
        inputRef.current?.focus()}, []);
    // Clear chat;
    const clearChat = (props) => {setMessages([messages[0]]); // Keep welcome message};
    if (!enabled)
        return null;
    return ('
    <div className="min-h-screen bg-white">"
</div>)"
      <motion.button onClick={() => setIsOpen(!isOpen)} className="p-3 bg-zion-purple "hover": bg-zion-purple-dark text-white rounded-full shadow-lg transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ "scale": 0.9 }} aria-label="AI Chat Assistant">"
</motion>"
        <MessageSquare className="w-6 h-6" />"
</MessageSquare>
      </motion.button>
      {/* Chat Window */}
      <AnimatePresence>
</AnimatePresence>"
        {isOpen && (<motion.div className="fixed inset-0 z-50" initial={{ "opacity": 0 }} animate={{ "opacity": 1 }} exit={{ "opacity": 0 }} transition={{ "duration": 0.2 }}>"
</motion>)"
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}/>"
</div>"
            <motion.div className={`absolute bottom-4 right-4 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl overflow-hidden ${isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'}`} initial = {''
  { "opacity": 0, "y": 20,""
  "scale": 0.95;"
}} animate = {"
  { "opacity": 1, "y": 0,""
  "scale": 1;"
}} exit = {"
  { "opacity": 0, "y": 20,""
  "scale": 0.95;"
}} transition = {"
  { "duration": 0.3,""
  "ease": "easeOut""
}}>
</motion>"
              <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/30 bg-zion-blue/20">"
</div>"
                <div className="flex items-center gap-3">"
</div>"
                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">"
</div>"
                    <Bot className="w-5 h-5 text-white" />"
</Bot>
                  </div>
                  <div>
</div>"
                    <h3 className="text-white font-semibold">Zion AI Assistant</h3>""
                    <divclassName="flex items-center gap-2">';'
</divclassName>'
                      <divclassName={`w-2 h-2 rounded-full ${isTyping ? 'bg-zion-cyan animate-pulse' : 'bg-green-400'}`} />'
</divclassName>'
                      <spanclassName="text-zinc-400 text-xs">';'
</spanclassName>
                      </span>
                    </div>
                  </div>
                </div>'
                <div className="flex items-center gap-1">"
</div>"
                  <Button size="sm" variant="ghost" onClick={() => setShowSettings(!showSettings)} className="text-zinc-400 "hover": text-white p-2">"
</Button>"
                    <Settings className="w-4 h-4" />"
</Settings>
                  </Button>"
                  <Button size="sm" variant="ghost" onClick={() => setIsMinimized(!isMinimized)} className="text-zinc-400 "hover": text-white p-2">"
</Button>"
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}"
</Maximize2>
                  </Button>"
                  <Button size="sm" variant="ghost" onClick={() => setIsOpen(false)} className="text-zinc-400 "hover": text-white p-2">"
</Button>"
                    <X className="w-4 h-4" />"
</X>
                  </Button>
                </div>
              </div>
              <AnimatePresence>
</AnimatePresence>"
                {showSettings && !isMinimized && (<motion.div className="p-4 border-b border-zion-blue-light/30 bg-zion-blue/10" initial = {""
  { "height": 0,""
  "opacity": 0;"
}} animate = {"
  { "height": 'auto',''
  "opacity": 1;"
}} exit = {"
  { "height": 0,""
  "opacity": 0;""
}} transition={{ "duration": 0.2 }}>"
</motion>"
                    <div className="space-y-3">"
</div>"
                      <divclassName="flex items-center justify-between">"
</divclassName>"
                        <span className="text-zinc-300 text-sm">Voice Input</span>';''
                        <Button size="sm" variant="ghost" onClick={toggleVoiceInput} className={`p-2 ${isRecording ? 'text-zion-cyan' : 'text-zinc-400'}`}>'
</Button>'
                          {isRecording ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}"
</Mic>
                        </Button>
                      </div>"
                      <div className="flex items-center justify-between">"
</div>"
                        <span className="text-zinc-300 text-sm">Clear Chat</span>""
                        <Button size="sm" variant="ghost" onClick={clearChat} className="text-zinc-400 "hover": text-red-400 p-2">"
</Button>
                        </Button>
                      </div>
                    </div>)
                  </motion.div>)}
              </AnimatePresence>"
              {!isMinimized && (<divclassName="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">';'
</divclassName>)'
                  {messages.map((message) => (<motion.div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`} initial = {''
  { "opacity": 0,""
  "y": 10;"
}} animate = {"
  { "opacity": 1,""
  "y": 0;""
}} transition={{ "duration": 0.3 }}>';'
</motion>'
                      {message.type === 'assistant' && (<div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center flex-shrink-0">"
</div>"
                          <Bot className="w-5 h-5 text-white" />"
</Bot>
                            </div>"
                      <divclassName={`max-w-[280px] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>';'
</divclassName>'
                        <div className={`p-3 rounded-lg ${message.type === 'user'''
                        ? 'bg-zion-purple text-white'''
                        : 'bg-zion-blue/20 text-zinc-200'}`}>'
</div>'
                          <p className="text-sm leading-relaxed">{message.content}</p>"
                        </div>"
                        {message.metadata && (<div className="mt-2 space-y-2">"
</div>"
                            {message.metadata.confidence && (<div className="flex items-center gap-2 text-xs text-zinc-400">"
</div>"
                                <Brain className="w-3 h-3" />"
</Brain>)"
                                <span>"Confidence": {(message.metadata.confidence * 100).toFixed(0)}%</span>"
                                  </div>"
                            {message.metadata.suggestions && (<div className="flex flex-wrap gap-1">"
</div>)"
                                {message.metadata.suggestions.map((suggestion, index) => (<button key={index} onClick={() => handleSuggestionClick(suggestion)} className="px-2 py-1 bg-zion-blue/30 "hover": bg-zion-blue/50 border border-zion-blue-light/30 rounded text-xs text-zinc-300 hover:text-white transition-all duration-200">"
</button>
                                  </button>))}
                                  </div>
                              </div>"
                        <div className="text-xs text-zinc-500 mt-1">"
</div>
                        </div>
                      </div>"
                      {message.type === 'user' && (<div className="w-8 h-8 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center flex-shrink-0">"
</div>"
                          <User className="w-5 h-5 text-white" />"
</User>
                            </div>)
                    </motion.div>))}
                  {/* Typing indicator */}"
                  {isTyping && (<motion.div className="flex gap-3" initial = {""
  { "opacity": 0,""
  "y": 10;"
}} animate = {"
  { "opacity": 1,""
  "y": 0;""
}} transition={{ "duration": 0.3 }}>"
</motion>"
                      <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">"
</div>"
                        <Bot className="w-5 h-5 text-white" />"
</Bot>
                      </div>"
                      <div className="p-3 rounded-lg bg-zion-blue/20">"
</div>"
                        <divclassName="flex items-center gap-1">"
</divclassName>"
                          <divclassName="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" />';'
</divclassName>'
                          <divclassName="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style="{{{ "animationDelay": '0.1s'}}"} />';'
</divclassName>'
                          <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style="{{{ "animationDelay": '0.2s'}}"} />"
</div>
                        </div>
                      </div>)
                    </motion.div>)}
                  <div ref={messagesEndRef} />
</div>
                    </div>"
              {!isMinimized && (<div className="p-4 border-t border-zion-blue-light/30">"
</div>"
                  <div className="flex items-center gap-2">"
</div>"
                    <Button size="sm" variant="ghost" className="text-zinc-400 "hover": text-white p-2">"
</Button>"
                      <Paperclip className="w-4 h-4" />"
</Paperclip>
                    </Button>"
                    <Button size="sm" variant="ghost" className="text-zinc-400 hover:text-white p-2">"
</Button>"
                      <Smile className="w-4 h-4" />"
</Smile>
                    </Button>"
                    <div className="flex-1 relative">"
</div>)"
                        <input ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} placeholder="Ask me thing..." className="w-full px-4 py-3 bg-zion-blue/20 border border-zion-blue-light/30 text-white placeholder-zinc-400 pr-20 rounded-lg "focus": outline-none focus:border-zion-cyan/50 transition-colors duration-200" disabled={isTyping}/>"
</input>"
                        {isRecording && (<div className="absolute right-3 top-1/2 transform -translate-y-1/2">"
</div>"
                            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />"
</div>
                              </div>
                      </div>"
                    <Button size="sm" variant="ghost" onClick={toggleVoiceInput} className={`p-2 ${isRecording ? 'text-red-400' : 'text-zinc-400'} "hover": text-white`}>"
</Button>"
                      {isRecording ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}"
</Mic>
                    </Button>)"
                    <Button onClick={sendMessage} disabled={!inputValue.trim() || isTyping} className="bg-zion-cyan "hover": bg-zion-cyan-light text-zion-blue-dark disabled:opacity-50">"
</Button>"
                      <Send className="w-4 h-4" />"
</Send>
                    </Button>
                  </div>"
                  <divclassName="mt-3 flex flex-wrap gap-2">';'
</divclassName>'
                    {['AI Services', 'Cloud Solutions', 'Cybersecurity', 'Get Started'].map((action) => (<button key={action} onClick={() => handleSuggestionClick(action)} className="px-3 py-1 bg-zion-blue/20 "hover": bg-zion-blue/30 border border-zion-blue-light/30 rounded-full text-xs text-zinc-300 hover:text-white transition-all duration-200">"
</button>
                      </button>))}
                  </div>
                    </div>
            </motion.div>
          </motion.div>)}
      </AnimatePresence>
        </div>
</motion>
</motion>"
</div>;';';''
import React,{useState,useRef,useEffect,useCallback} from 'react'; import { motion, AnimatePresence, MessageSquare, Send, Bot, User, X, Minimize2, Maximize2, Mic, MicOff, Settings, Brain, Paperclip, Smile } from 'lucide-react'; import {Button} from "button.tsx"; export function AIChatAssistant($1) { const [isOpen,setIsOpen] = useState(false); const [isMinimized,setIsMinimized] = useState(false); const [isRecording,setIsRecording] = useState(false); const [showSettings,setShowSettings] = useState(false); const [messages,setMessages] = useState([ { id: '1',type: 'assistant',content: 'Hello! I\'m Zion AI Assistant. I can help you with technology solutions,business insights,and answer questions about our services. How can I assist you today?',timestamp: new Date(),status: 'sent',metadata: { confidence: 0.95,suggestions['Tell me about your AI services','What cloud solutions do you offer?','How can I get started?']} } ]);';'; const [inputValue,setInputValue] = useState("); const [isTyping,setIsTyping] = useState(false); const messagesEndRef = useRef(null); const inputRef = useRef(null); const scrollToBottom = (props) => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })};; useEffect(() => {scrollToBottom()},[messages]); useEffect(() => { if (isOpen && !isMinimized) { inputRef.current?.focus()} },[isOpen,isMinimized]); useEffect(() => { if (isTyping) { const timer = setTimeout(() => { setIsTyping(false)};,2000); return () => clearTimeout(timer)} },[isTyping]); const generateAIResponse = (props) => { setIsTyping(true); const timer = setTimeout(() => { const randomResponse = responses[Math.floor(Math.random() * responses.length)]; const aiMessage = { id: Date.now().toString(),type: 'assistant',content: randomResponse.content,timestamp: new Date(),status: 'sent',metadata: { confidence: 0.85 + Math.random() * 0.1,suggestions: randomResponse.suggestions } };; setMessages(prev => [...prev,aiMessage]); setIsTyping(false); onAssistantResponse?.(aiMessage.content)},1500 + Math.random() * 1000); return () => clearTimeout(timer)}; const sendMessage = async () => { if (!inputValue.trim() || isTyping) return; const userMessage = { id: Date.now().toString(),type: 'user',content: inputValue.trim(),timestamp: new Date(),status: 'sending' };; setMessages(prev => [...prev,userMessage]); onMessageSend?.(userMessage.content); generateAIResponse(userMessage.content)}; const handleKeyPress = (props) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage()} }; const toggleVoiceInput = (props) => {setIsRecording(!isRecording); const handleSuggestionClick = useCallback((suggestion) => {setInputValue(suggestion); inputRef.current?.focus()},[]); const clearChat = (props) => {setMessages([messages[0]]); if (!enabled) return null; return ( <div className="min-h-screen bg-white"> {} <motion.button onClick={() => setIsOpen(!isOpen)} className="p-3 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-full shadow-lg transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="AI Chat Assistant"> <MessageSquare className="w-6 h-6" /> </motion.button> {} <AnimatePresence> {isOpen && (<motion.div className="fixed inset-0 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}> {} <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}/> '; {} <motion.div className={`absolute bottom-4 right-4 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl overflow-hidden ${isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'}`} initial = { { opacity: 0,y: 20,scale: 0.95 }} animate = { { opacity: 1,y: 0,scale: 1 }} exit = { { opacity: 0,y: 20,scale: 0.95 }} transition = { { duration: 0.3,ease: "easeOut" }}> {} <div className="flex items-center justify-between p-4 border-b border-zion-blue-light/30 bg-zion-blue/20"> <div className="flex items-center gap-3"> <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center"> <Bot className="w-5 h-5 text-white" /> </div> <div> <h3 className="text-white font-semibold">Zion AI Assistant</h3> <divclassName="flex items-center gap-2">'; <divclassName={`w-2 h-2 rounded-full ${isTyping ? 'bg-zion-cyan animate-pulse' : 'bg-green-400'}`} /> <spanclassName="text-zinc-400 text-xs">'; {isTyping ? 'Typing...' : 'Online'} </span> </div> </div> </div> <div className="flex items-center gap-1"> <Button size="sm" variant="ghost" onClick={() => setShowSettings(!showSettings)} className="text-zinc-400 hover:text-white p-2"> <Settings className="w-4 h-4" /> </Button> <Button size="sm" variant="ghost" onClick={() => setIsMinimized(!isMinimized)} className="text-zinc-400 hover:text-white p-2"> {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />} </Button> <Button size="sm" variant="ghost" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white p-2"> <X className="w-4 h-4" /> </Button> </div> </div> {} <AnimatePresence> {showSettings && !isMinimized && (<motion.div className="p-4 border-b border-zion-blue-light/30 bg-zion-blue/10" initial = { { height: 0,opacity: 0 }} animate = { { height: 'auto',opacity: 1 }} exit = { { height: 0,opacity: 0 }} transition={{ duration: 0.2 }}> <div className="space-y-3"> <divclassName="flex items-center justify-between"> <span className="text-zinc-300 text-sm">Voice Input</span>'; <Button size="sm" variant="ghost" onClick={toggleVoiceInput} className={`p-2 ${isRecording ? 'text-zion-cyan' : 'text-zinc-400'}`}> {isRecording ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />} </Button> </div> <div className="flex items-center justify-between"> <span className="text-zinc-300 text-sm">Clear Chat</span> <Button size="sm" variant="ghost" onClick={clearChat} className="text-zinc-400 hover:text-red-400 p-2"> Clear </Button> </div> </div> </motion.div>)} </AnimatePresence> {} {!isMinimized && (<divclassName="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">'; {messages.map((message) => (<motion.div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`} initial = { { opacity: 0,y: 10 }} animate = { { opacity: 1,y: 0 }} transition={{ duration: 0.3 }}>'; {message.type === 'assistant' && (<div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center flex-shrink-0"> <Bot className="w-5 h-5 text-white" /> </div> )} ';'; <divclassName={`max-w-[280px] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>'; <div className={`p-3 rounded-lg ${message.type === 'user' ? 'bg-zion-purple text-white' : 'bg-zion-blue/20 text-zinc-200'}`}> <p className="text-sm leading-relaxed">{message.content}</p> </div> {} {message.metadata && (<div className="mt-2 space-y-2"> {} {message.metadata.confidence && (<div className="flex items-center gap-2 text-xs text-zinc-400"> <Brain className="w-3 h-3" /> <span>Confidence: {(message.metadata.confidence * 100).toFixed(0)}%</span> </div> )} {} {message.metadata.suggestions && (<div className="flex flex-wrap gap-1"> {message.metadata.suggestions.map((suggestion,index) => (<button key={index} onClick={() => handleSuggestionClick(suggestion)} className="px-2 py-1 bg-zion-blue/30 hover:bg-zion-blue/50 border border-zion-blue-light/30 rounded text-xs text-zinc-300 hover:text-white transition-all duration-200"> {suggestion} </button>))} </div> )} </div> )} {} <div className="text-xs text-zinc-500 mt-1"> {message.timestamp.toLocaleTimeString()} </div> </div> ';'; {message.type === 'user' && (<div className="w-8 h-8 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center flex-shrink-0"> <User className="w-5 h-5 text-white" /> </div> )} </motion.div>))} {} {isTyping && (<motion.div className="flex gap-3" initial = { { opacity: 0,y: 10 }} animate = { { opacity: 1,y: 0 }} transition={{ duration: 0.3 }}> <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center"> <Bot className="w-5 h-5 text-white" /> </div> <div className="p-3 rounded-lg bg-zion-blue/20"> <divclassName="flex items-center gap-1"> <divclassName="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" />'; <divclassName="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style="{{{ animationDelay: '0.1s'}}"} />'; <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style="{{{ animationDelay: '0.2s'}}"} /> </div> </div> </motion.div>)} <div ref={messagesEndRef} /> </div> )} {} {!isMinimized && (<div className="p-4 border-t border-zion-blue-light/30"> <div className="flex items-center gap-2"> <Button size="sm" variant="ghost" className="text-zinc-400 hover:text-white p-2"> <Paperclip className="w-4 h-4" /> </Button> <Button size="sm" variant="ghost" className="text-zinc-400 hover:text-white p-2"> <Smile className="w-4 h-4" /> </Button> <div className="flex-1 relative"> <input ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} placeholder="Ask me thing..." className="w-full px-4 py-3 bg-zion-blue/20 border border-zion-blue-light/30 text-white placeholder-zinc-400 pr-20 rounded-lg focus:outline-none focus:border-zion-cyan/50 transition-colors duration-200" disabled={isTyping}/> {} {isRecording && (<div className="absolute right-3 top-1/2 transform -translate-y-1/2"> <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" /> </div> )} </div> ';'; <Button size="sm" variant="ghost" onClick={toggleVoiceInput} className={`p-2 ${isRecording ? 'text-red-400' : 'text-zinc-400'} hover:text-white`}> {isRecording ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />} </Button> <Button onClick={sendMessage} disabled={!inputValue.trim() || isTyping} className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark disabled:opacity-50"> <Send className="w-4 h-4" /> </Button> </div> {} <divclassName="mt-3 flex flex-wrap gap-2">'; {['AI Services','Cloud Solutions','Cybersecurity','Get Started'].map((action) => (<button key={action} onClick={() => handleSuggestionClick(action)} className="px-3 py-1 bg-zion-blue/20 hover:bg-zion-blue/30 border border-zion-blue-light/30 rounded-full text-xs text-zinc-300 hover:text-white transition-all duration-200"> {action} </button>))} </div> </div> )} </motion.div> </motion.div>)} </AnimatePresence> </div> )} </motion> </motion> </div>;';';''