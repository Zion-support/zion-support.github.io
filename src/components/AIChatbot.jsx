
    const { trackEvent } = useAnalytics({
        enableTracking: true, enableUserBehaviorTracking: true

    });


export const AIChatbot = ({ welcomeMessage = "Hello! I&apos;m Zion Tech Group&apos;s AI assistant. How can I help you today?", maxMessages = 50, enableSuggestions = true, enableContext = true, responseDelay = 1000 }) => {

    const { trackEvent } = useAnalytics({
        enableTracking: true, enableUserBehaviorTracking: true });


    const [isOpen, setIsOpen] = useState(false);

    const [messages, setMessages] = useState([]);""
    const [inputValue, setInputValue] = useState('');

    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    // Initialize chatbot

                    "How can I get a quote?", "What technologies do you use?",

                    "Contact information"

                ]
            })}


    }, [isOpen, messages.length, welcomeMessage])};
        setMessages(prev => {const updated = [...prev, newMessage];
            // Keep only the last maxMessages
            return updated.slice(-maxMessages)})
        // Update conversation context
        if (enableContext && message.content.length > 10) {// setConversationContext(prev => [...prev.slice(-4), message.content]); // This line was removed }
        return newMessage}, [maxMessages, enableContext]);
    // Add bot message with typing effect
    const addBotMessage = useCallback((content, metadata) => {const message = addMessage({

        setMessages(prev => {

            const updated = [...prev, newMessage];
            // Keep only the last maxMessages
            return updated.slice(-maxMessages)});
        // Update conversation context
        if (enableContext && message.content.length > 10) {
            // setConversationContext(prev => [...prev.slice(-4), message.content]); // This line was removed }
        return newMessage}, [maxMessages, enableContext]);
    // Add bot message with typing effect


            type: 'bot', content,

            metadata
        });

            messageId: message.id,

            intent: metadata?.intent, confidence: metadata?.confidence
        });
        return message}, [addMessage, trackChatbotInteraction]);

            type: 'bot', content,
            metadata });
        // Track bot response""
        trackChatbotInteraction('bot_response' {
            messageId: message.id,
            intent: metadata?.intent, confidence: metadata?.confidence });


    // Simulate AI processing

    const simulateAIProcessing = useCallback(async (userInput) => {
        // Simulate processing delay

        await new Promise(resolve => setTimeout(resolve, responseDelay));
        // Simple AI logic - in production, this would connect to a real AI service}
        const input = userInput.toLowerCase()}
        if (input.includes(&apos;technology&apos;) || input.includes(&apos;tech&apos;) || input.includes(&apos;stack&apos;)) {
            return &quot;We work with cutting-edge technologies including React, Node.js, Python, AWS, Azure, AI/ML frameworks, and more. What technology stack are you currently using?"}
        if (input.includes(&apos;experience&apos;) || input.includes(&apos;portfolio&apos;) || input.includes(&apos;work&apos;)) {
            return &quot;We have extensive experience across various industries including healthcare, finance, e-commerce, and enterprise solutions. Would you like me to share some case studies?"}
        // Default response with suggestions


    // Handle user input
    const handleUserInput = useCallback(async (input) => {if (!input.trim())
            return;
        // Add user message


        trackChatbotInteraction('user_input' {
            messageId: userMessage.id,
            inputLength: input.length })""
        // Clear input""


        setInputValue('');

        setIsTyping(true);

            const response = await simulateAIProcessing(input);

                    "Get a quote", "View services",

                    "Contact sales"

                ]

]

            });

                responseLength: response.length })}
        catch (error) {// Handle error

                userInput: input,
                responseLength: response.length })}
        catch (error) {


            addBotMessage("I apologize, but I&apos;m experiencing some technical difficulties. Please try again or contact our team directly." {'

                intent: 'error',
                confidence: 0.8, "",

})""
            trackChatbotInteraction('conversation_error' {""
                error: error instanceof Error ? error.message : 'Unknown error' })}

        finally {
            setIsTyping(false)}
    }, [addMessage, addBotMessage, simulateAIProcessing, trackChatbotInteraction]);
    // Handle form submission&apos;
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        handleUserInput(inputValue)}, [inputValue, handleUserInput]);
    // Handle suggestion click

      </div>""
      <span className="text-sm text-gray-600 dark:text-gray-400">AI is typing...</span>
    </motion.div>)
    // Get message suggestions
    const MessageSuggestions = ({ suggestions }) => (<motion.div initial = {

}} animate = {
  { opacity: 1, y: 0 






      {suggestions.map((suggestion, index) => (<button key={index} onClick={() => handleSuggestionClick(suggestion)} className="px-3 py-1 text-xs bg-blue-100 dark: bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">



          {suggestion}

        </button>))}

    return (<>

        <MessageCircle className="w-6 h-6"/" >"


        {messages.length > 0 && (<div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {Math.min(messages.length, 9)}

          </div>)}
      </motion.button>

      {/* Chatbot Interface */}
      <AnimatePresence>

  { opacity: 0, scale: 0.9,
  y: 20 }} animate = {
  { opacity: 1, scale: 1, y: 0,

}} exit = {
  { opacity: 0, scale: 0.9,
  y: 20 





            {/* Header */}""
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">""
              <div className="flex items-center justify-between">""
                <div className="flex items-center gap-2">""


                    <span className="text-xs">Powered by AI</span>

                  </div>

                    <X className="w-4 h-4"/>



                  </button>
                </div>
              </div>
            </div>









  { opacity: 0, x: message.type === 'user' ? 20 : -20,

}} animate = {
  { opacity: 1, x: 0 





                          {/* Message Metadata */}""
                          {message.metadata && (<div className="mt-2 text-xs opacity-70">""
                              {message.metadata.confidence && (<span className="mr-2">Confidence: {Math.round(message.metadata.confidence * 100)}%</span>)}, {message.metadata.intent && (<span>Intent: {message.metadata.intent}</span>)}
                            </div>)}


                        </div>
                      </div>
                    </motion.div>))}, {/* Scroll anchor */}""
                  <div ref={messagesEndRef}/"" >

                </div>


                      {isTyping ? (<Loader2 className="w-4 h-4 animate-spin"/>) : (<Send className="w-4 h-4"/>)}

                    </button>
                  </form>


                    <input ref={inputRef} type="text" value={inputValue} onChange={(e) =" > setInputValue(e.target.value)} placeholder="Type your message..." className="flex-1 px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" disabled={isTyping}/>"
                    <button type="submit" disabled={!inputValue.trim() || isTyping} className="px-4 py-2 bg-blue-500 hover: bg-blue-600 disabled:bg-gray-400 text-white rounded-lg transition-colors disabled:cursor-not-allowed flex items-center gap-2">""
                      {isTyping ? (<Loader2 className="w-4 h-4 animate-spin"/" >) : (<Send className="w-4 h-4"/" >)}
                    </button>
                  </form>



                    <button onClick={clearConversation} className="hover: text-gray-700 dark:hover:text-gray-300 transition-colors">

                      Clear chat

                    </button>
                    <span>{messages.length} messages</span>
                  </div>
                </div>
              </React.Fragment>)}
          </motion.div>)}
      </AnimatePresence>







