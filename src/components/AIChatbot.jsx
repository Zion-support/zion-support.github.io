import React, { useState, useCallback, useEffect, useRef } from &apos;
import { motion } from &apos;framer-motion';;react';
import { motion, AnimatePresence } from &apos;framer-motion';
import { MessageCircle, Send, Bot, User, X, Minimize2, Maximize2, Loader2, Sparkles } from &apos;lucide-react';
import { useAnalytics } from &quot;../hooks/useAnalytics";&quot;&quot;
export const AIChatbot = ({ welcomeMessage = &quot;Hello! I&apos;m Zion Tech Group&apos;s AI assistant. How can I help you today?&quot;, maxMessages = 50, enableSuggestions = true, enableContext = true, responseDelay = 1000 }) => {&quot;}
    const;const { trackEvent } = useAnalytics({
        enableTracking: true,
        enableUserBehaviorTracking: true
    });
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState(&apos;&apos;);&apos;&apos;
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    // Initialize chatbot
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addBotMessage(welcomeMessage, {
                intent: &apos;greeting&apos;,
                confidence: 1.0,
                suggestions: [
                    &quot;Tell me about your services&quot;,
                    &quot;How can I get a quote?&quot;,
                    &quot;What technologies do you use?&quot;,
                    &quot;Contact information&quot;
                ]
            });
        }
    }, [isOpen, messages.length, welcomeMessage]);
    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: &apos;smooth&apos; });
    }, [messages]);
    // Track chatbot interactions&apos;
    const trackChatbotInteraction = useCallback((action, metadata) => {
        trackEvent(&apos;chatbot&apos;, action, &apos;chatbot_interaction&apos;, null, metadata);
    }, [trackEvent]);
    // Add message to chat&apos;
    const addMessage = useCallback((message) => {}
        const;const;const newMessage = {
            ...message,
            id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date()
        };
        setMessages(prev => {}
            const updated = [...prev, newMessage];
            // Keep only the last maxMessages
            return updated.slice(-maxMessages);
        });
        // Update conversation context
        if (enableContext && message.content.length > 10) {
            // setConversationContext(prev => [...prev.slice(-4), message.content]); // This line was removed
        }
        return newMessage;
    }, [maxMessages, enableContext]);
    // Add bot message with typing effect
    const addBotMessage = useCallback((content, metadata) => {}
        const;const;const message = addMessage({
            type: &apos;bot&apos;,
            content,
            metadata
        });
        // Track bot response
        trackChatbotInteraction(&apos;bot_response&apos;, {
            messageId: message.id,
            intent: metadata?.intent,
            confidence: metadata?.confidence
        });
        return message;
    }, [addMessage, trackChatbotInteraction]);
    // Simulate AI processing&apos;
    const simulateAIProcessing = useCallback(async (userInput) => {
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, responseDelay));
        // Simple AI logic - in production, this would connect to a real AI service}
        const input = userInput.toLowerCase();
        // Intent recognition
        if (input.includes(&apos;service&apos;) || input.includes(&apos;offer&apos;)) {
            return &quot;We offer a comprehensive range of services including AI & Machine Learning, Cybersecurity, Cloud Infrastructure, and Digital Transformation. What specific area are you interested in?";
        }
        if (input.includes(&apos;quote&apos;) || input.includes(&apos;price&apos;) || input.includes(&apos;cost&apos;)) {
            return &quot;I&apos;d be happy to help you get a quote! Could you tell me more about your project requirements? This will help me provide a more accurate estimate.";
        }
        if (input.includes(&apos;contact&apos;) || input.includes(&apos;phone&apos;) || input.includes(&apos;email&apos;)) {
            return &quot;You can reach us at:\n📧 kleber@ziontechgroup.com\n📞 +1 (302) 464-0950\n🌐 http,s://ziontechgroup.com\n\nWhen would be the best time to call you?";
        }
        if (input.includes(&apos;technology&apos;) || input.includes(&apos;tech&apos;) || input.includes(&apos;stack&apos;)) {
            return &quot;We work with cutting-edge technologies including React, Node.js, Python, AWS, Azure, AI/ML frameworks, and more. What technology stack are you currently using?";
        }
        if (input.includes(&apos;experience&apos;) || input.includes(&apos;portfolio&apos;) || input.includes(&apos;work&apos;)) {
            return &quot;We have extensive experience across various industries including healthcare, finance, e-commerce, and enterprise solutions. Would you like me to share some case studies?";
        }
        // Default response with suggestions
        return &quot;I understand you&apos;re asking about &apos;&quot; + userInput + "&apos;. Let me help you better. Could you provide more details about what you&apos;re looking for?";
    }, [responseDelay]);
    // Handle user input&quot;&quot;
    const handleUserInput = useCallback(async (input) => {
        if (!input.trim())
            return;
        // Add user message}
        const userMessage = addMessage({
            type: &apos;user&apos;,
            content: input.trim()
        });
        // Track user input
        trackChatbotInteraction(&apos;user_input&apos;, {
            messageId: userMessage.id,
            inputLength: input.length
        });
        // Clear input
        setInputValue(&apos;&apos;);
        setIsTyping(true);
        try {
            // Get AI response&apos;}&apos;
            const response = await simulateAIProcessing(input);
            // Add bot response
            addBotMessage(response, {
                intent: &apos;response&apos;,
                confidence: 0.9,
                suggestions: [
                    &quot;Tell me more&quot;,
                    &quot;Get a quote&quot;,
                    &quot;View services&quot;,
                    &quot;Contact sales&quot;
                ]
            });
            // Track successful interaction
            trackChatbotInteraction(&apos;conversation_success&apos;, {
                userInput: input,
                responseLength: response.length
            })}
        catch (error) {
            // Handle error
            addBotMessage(&quot;I apologize, but I&apos;m experiencing some technical difficulties. Please try again or contact our team directly.&quot;, {
                intent: &apos;error&apos;,
                confidence: 0.8
            });
            trackChatbotInteraction(&apos;conversation_error&apos;, {
                error: error instanceof Error ? error.message : &apos;Unknown error&apos;
            })}
        finally {
            setIsTyping(false)}
    }, [addMessage, addBotMessage, simulateAIProcessing, trackChatbotInteraction]);
    // Handle form submission&apos;
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        handleUserInput(inputValue)}, [inputValue, handleUserInput]);
    // Handle suggestion click
    const handleSuggestionClick = useCallback((suggestion) => {
        handleUserInput(suggestion);
        trackChatbotInteraction(&apos;suggestion_clicked&apos;, { suggestion })}, [handleUserInput, trackChatbotInteraction]);
    // Toggle chatbot&apos;
    const toggleChatbot = useCallback(() => {
        setIsOpen(!isOpen);
        trackChatbotInteraction(&apos;chatbot_toggled&apos;, { action: !isOpen ? &apos;opened&apos; : &apos;closed&apos; })}, [isOpen, trackChatbotInteraction]);
    // Minimize/maximize&apos;
    const toggleMinimize = useCallback(() => {
        setIsMinimized(!isMinimized);
        trackChatbotInteraction(&apos;chatbot_minimized&apos;, { action: !isMinimized ? &apos;minimized&apos; : &apos;maximized&apos; })}, [isMinimized, trackChatbotInteraction]);
    // Clear conversation&apos;
    const clearConversation = useCallback(() => {
        setMessages([]);
        // setConversationContext([]); // This line was removed
        trackChatbotInteraction(&apos;conversation_cleared&apos;)}, [trackChatbotInteraction]);
    // Get typing indicator&apos;
    const TypingIndicator = () => (<;<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className=&quot;flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg&quot;>&quot;"
      <Bot className=&quot;w-5 h-5 text-blue-500&quot;/>&quot;
      <div className=&quot;flex space-x-1&quot;>&quot;"
        <div className=&quot;w-2 h-2 bg-gray-400 rounded-full animate-bounce&quot; style={{ animationDela,y: &apos;0ms&apos; }}>&apos;</div>
        <div className=&quot;w-2 h-2 bg-gray-400 rounded-full animate-bounce&quot; style={{ animationDelay: &apos;150ms&apos; }}>&apos;</div>
        <div className=&quot;w-2 h-2 bg-gray-400 rounded-full animate-bounce&quot; style={{ animationDelay: &apos;300ms&apos; }}>&apos;</div>
      </div>
      <span className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>AI is typing...&quot;</span>
    <;</motion.div>);
    // Get message suggestions
    const MessageSuggestions = ({ suggestions }) => (<;<motion.div initial = {
  { opacity: 0,
  y: 10 






}} animate = {
  { opacity: 1,
  y: 0 






}} className=&quot;flex flex-wrap gap-2 mt-3&quot;>
      {suggestions.map((suggestion, index) => (&quot;}<button key={index} onClick={() => handleSuggestionClick(suggestion)} className=&quot;px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hove,r:bg-blue-900/50 transition-colors&quot;>
          {suggestion}&quot;
        </button>))}
    <;</motion.div>);
    return (<>
      {/* Chatbot Toggle Button */}
      <motion.button onClick={toggleChatbot} className=&quot;fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300&quot; whileHover={{ scal,e: 1.1 }} whileTap={{ scale: 0.9 }} aria-label=&quot;Open AI chatbot&quot;>&quot;"
        <MessageCircle className=&quot;w-6 h-6&quot;/>
        {messages.length > 0 && (&quot;}<div className=&quot;absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center&quot;>
            {Math.min(messages.length, 9)}&quot;
          </div>)}
      </motion.button>

      {/* Chatbot Interface */}
      <AnimatePresence>
        {isOpen && (}<motion.div initial = {
  { opacity: 0, scale: 0.9,
  y: 20 






}} animate = {
  { opacity: 1, scale: 1,
  y: 0 






}} exit = {
  { opacity: 0, scale: 0.9,
  y: 20 






}} className={`fixed bottom-24 right-6 z-40 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dar,k:border-gray-700 overflow-hidden ${isMinimized ? &apos;h-16&apos; : &apos;h-[500px]&apos;}`}>
            {/* Header */}&apos;
            <div className=&quot;bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white&quot;>&quot;"
              <div className=&quot;flex items-center justify-between&quot;>&quot;"
                <div className=&quot;flex items-center gap-2&quot;>&quot;"
                  <Bot className=&quot;w-5 h-5&quot;/>&quot;
                  <span className=&quot;font-semibold&quot;>AI Assistant&quot;</span>
                  <div className=&quot;flex items-center gap-1&quot;>&quot;"
                    <Sparkles className=&quot;w-3 h-3 text-yellow-300&quot;/>&quot;
                    <span className=&quot;text-xs&quot;>Powered by AI&quot;</span>
                  </div>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>&quot;"
                  <button onClick={toggleMinimize} className=&quot;p-1 hover:bg-white/20 rounded transition-colors&quot; aria-label={isMinimized ? &apos;Maximize&apos; : &apos;Minimize&apos;}>
                    {isMinimized ?&apos;} <Maximize2 className=&quot;w-4 h-4&quot;/> :&quot; <Minimize2 className=&quot;w-4 h-4&quot;/>}&quot;
                  </button>
                  <button onClick={toggleChatbot} className=&quot;p-1 hover:bg-white/20 rounded transition-colors&quot; aria-label=&quot;Close chatbot&quot;>&quot;"
                    <X className=&quot;w-4 h-4&quot;/>&quot;
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (}<>
                {/* Messages */}
                <div className=&quot;flex-1 p-4 space-y-4 overflow-y-auto max-h-80&quot;>
                  {messages.map((message) => (&quot;}<motion.div key={message.id} initial = {
  { opacity: 0,
  x: message.type === &apos;user&apos; ? 20 : -20 






}} animate = {
  { opacity: 1,
  x: 0 






}} className={`flex ${message.type === &apos;user&apos; ? &apos;justify-end&apos; : &apos;justify-start&apos;}`}>&apos;
                      <div className={`flex items-start gap-2 max-w-[80%] ${message.type === &apos;user&apos; ? &apos;flex-row-reverse&apos; : &apos;flex-row&apos;}`}>&apos;
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === &apos;user&apos;
                        ? &apos;bg-blue-500 text-white&apos;
                        : &apos;bg-gray-200 dark:bg-gray-600 text-gray-700 dar,k:text-gray-300&apos;}`}>
                          {message.type === &apos;user&apos; ?&apos;} <User className=&quot;w-4 h-4&quot;/> :&quot; <Bot className=&quot;w-4 h-4&quot;/>}&quot;
                        </div>

                        <div className={`rounded-lg p-3 ${message.type === &apos;user&apos;
                        ? &apos;bg-blue-500 text-white&apos;
                        : &apos;bg-gray-100 dark:bg-gray-700 text-gray-800 dar,k:text-gray-200&apos;}`}>&apos;
                          <p className=&quot;text-sm whitespace-pre-wrap&quot;>{message.content}&quot;</p>

                          {/* Message Metadata */}
                          {message.metadata && (}<div className=&quot;mt-2 text-xs opacity-70&quot;>
                              {message.metadata.confidence && (&quot;}<span className=&quot;mr-2&quot;>Confidence: {Math.round(message.metadata.confidence * 100)}%&quot;</span>)}
                              {message.metadata.intent && (}<span>Intent: {message.metadata.intent}</span>)}
                            </div>)}

                          {/* Suggestions */}
                          {message.type === &apos;bot&apos; && message.metadata?.suggestions && enableSuggestions && (&apos;}<MessageSuggestions suggestions={message.metadata.suggestions}/>)}
                        </div>
                      </div>
                    </motion.div>))}

                  {/* Typing Indicator */}
                  {isTyping &&} <TypingIndicator />}

                  {/* Scroll anchor */}
                  <div ref={messagesEndRef}/>
                </div>

                {/* Input Area */}
                <div className=&quot;p-4 border-t border-gray-200 dark:border-gray-700&quot;>&quot;"
                  <form onSubmit={handleSubmit} className=&quot;flex gap-2&quot;>&quot;"
                    <input ref={inputRef} type=&quot;text&quot; value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder=&quot;Type your message...&quot; className=&quot;flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dar,k:text-gray-100&quot; disabled={isTyping}/>&quot;
                    <button type=&quot;submit&quot; disabled={!inputValue.trim() || isTyping} className=&quot;px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg transition-colors disable,d:cursor-not-allowed flex items-center gap-2&quot;>
                      {isTyping ? (&quot;}<Loader2 className=&quot;w-4 h-4 animate-spin&quot;/>) : (&quot;<Send className=&quot;w-4 h-4&quot;/>)}&quot;
                    </button>
                  </form>

                  {/* Quick Actions */}
                  <div className=&quot;flex items-center justify-between mt-3 text-xs text-gray-500&quot;>&quot;"
                    <button onClick={clearConversation} className=&quot;hover:text-gray-700 dark:hove,r:text-gray-300 transition-colors&quot;>
                      Clear chat&quot;
                    </button>
                    <span>{messages.length} messages</span>
                  </div>
                </div>
              </>)}
          </motion.div>)}
      </AnimatePresence>
    </>)};
