
import React, {_useState, _useRef, _useEffect} from "react";

// Define suggested quick replies
const _QUICK_REPLIES = [
  {_id: "hire", _text: "How do I hire?"},
  {_id: "match", _text: "How do I get matched?"},
  {_id: "billing", _text: "Billing help"}];

type Message = {_id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;};

export function ChatBotPanel() {_const [messages, _setMessages] = useState<Message[]>([
    {
      id: "welcome", _content: "Hi! How can I help you?", _sender: "bot", _timestamp: new Date()}]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const _scrollAreaRef = useRef<HTMLDivElement>(null);
  const _inputRef = useRef<HTMLInputElement>(null);
  const {_theme} = useTheme();

  // Auto-scroll to bottom when messages change
  useEffect__(() => {_if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;}
  }, [messages]);

  // Focus input when component mounts
  useEffect__(() => {_if (inputRef.current) {
      inputRef.current.focus();}
  }, []);

  const _handleSendMessage = async (_text: string = inputValue) => {_if (!text.trim()) return;
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: text,
      sender: "user",
      timestamp: new Date()};
    
    setMessages(_(prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    try {_// Call the OpenAI-powered support function
      const _response = await sendToAIAssistant(_text);
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: response.message || "Sorry, I couldn't process your request. Please try again.",
        sender: "bot",
        timestamp: new Date()};
      
      setMessages(_(prev) => [...prev, botMessage]);
      
      // Check if the request was successful
      if (!response.success) {_setFailedAttempts(_(prev) => prev + 1);
        
        // After 3 failed attempts, _suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation();}
      } else {_// Reset failed attempts if successful
        setFailedAttempts(0);}
    } catch (error) {_toast({
        variant: "destructive", _title: "Communication Error", _description: "We're having trouble connecting to our support service."});
      
      setFailedAttempts(_(prev) => prev + 1);
      if (failedAttempts >= 2) {_suggestEscalation();}
    } finally {_setIsLoading(false);}
  };

  const _sendToAIAssistant = async (_message: string) => {_try {
      const _response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", _{
        method: "POST", _headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({_messages: [{ role: "user", _content: message}] 
        })});
      
      if (!response.ok) {_return {
          success: false, _message: "I'm having trouble connecting to my knowledge base right now."};
      }
      
      const _data = await response.json();
      return {_success: true, _message: data.message};
    } catch (error) {_return {
        success: false, _message: "I'm experiencing technical difficulties. Please try again later."};
    }
  };

  const _suggestEscalation = () => {_const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`,
      content: 
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
      timestamp: new Date()};
    
    setMessages(_(prev) => [...prev, escalationMessage]);
    
    // Log this interaction for the support team
    logSupportEscalation();
  };

  const _logSupportEscalation = async () => {_try {
      // Send the conversation to the backend for logging
      // This would be implemented in a real system
      )});
    } catch (error) {}
  };

  const _handleQuickReply = (_text: string) => {_handleSendMessage(text);};

  const _handleEscalateToLiveAgent = () => {_setMessages(_(prev) => [
      ...prev, _{
        id: `user-${Date.now()}`,
        content: "I'd like to speak with a human agent",
        sender: "user",
        timestamp: new Date()
      },
      {_id: `bot-${Date.now()}`,
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.",
        sender: "bot",
        timestamp: new Date()
      }
    ]);
    
    // In a real implementation, this would trigger a live chat request
    toast({_title: "Support request submitted", _description: "A support agent will be with you shortly."});
  };

  const _handleEmailSupport = () => {_setMessages(_(prev) => [
      ...prev, _{
        id: `user-${Date.now()}`,
        content: "I'd like to email support",
        sender: "user",
        timestamp: new Date()
      },
      {_id: `bot-${Date.now()}`,
        content: "Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours.",
        sender: "bot",
        timestamp: new Date()
      }
    ]);
  };

  return (_<div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={_scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {_messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={_message.content}
              isUser={_message.sender === "user"}
              timestamp={_message.timestamp}
            />
          ))}
          
          {_isLoading && (
            <div className="flex items-center justify-center py-2">
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />
            </div>
          )}
        </div>
      </ScrollArea>
      
      {_messages.length === 1 && (
        <div className="px-4 py-3">
          <p className={cn("text-sm mb-2", _theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Suggested questions:
          </p>
          <div className="flex flex-wrap gap-2">
            {_QUICK_REPLIES.map(_(reply) => (_<QuickReplyButton
                key={reply.id}
                text={_reply.text}
                onClick={_() => handleQuickReply(reply.text)}
              />
            ))}
          </div>
        </div>
      )}
      
      {_failedAttempts >= 3 && (
        <div className="px-4 py-3 border-t border-zion-purple/10">
          <p className={cn("text-sm mb-2 font-medium", _theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Need more help?
          </p>
          <div className="flex gap-2">
            <Button 
              onClick={_handleEscalateToLiveAgent}
              size="sm"
              className="bg-zion-purple hover:bg-zion-purple-light text-white"
            >
              Chat with Live Agent
            </Button>
            <Button 
              onClick={_handleEmailSupport}
              size="sm"
              variant="outline"
            >
              Email Support
            </Button>
          </div>
        </div>
      )}
      
      <div className={_cn(
        "p-4 border-t", _theme === "dark" ? "border-zion-blue-light" : "border-gray-200"
      )}>
        <form 
          onSubmit={_(_e) => {
            e.preventDefault();
            handleSendMessage();}}
          className="flex items-center gap-2"
        >
          <Input
            ref={_inputRef}
            value={_inputValue}
            onChange={_(_e) => setInputValue(e.target.value)}
            placeholder="Type your question..."
            className={_cn(
              "flex-1", _theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 
                : "bg-white border-gray-200"
            )}
          />
          <Button 
            type="submit"
            size="icon"
            disabled={_isLoading || !inputValue.trim()}
            className="bg-zion-cyan hover:bg-zion-cyan/80 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
