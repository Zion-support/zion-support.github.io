
import React, { useState, useRef, useEffect } from &quot;react&quot;;
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { ScrollArea } from &quot;@/components/ui/scroll-area&quot;;
import { Separator } from &quot;@/components/ui/separator&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { ChatMessage } from &quot;./ChatMessage&quot;;
import { QuickReplyButton } from &quot;./QuickReplyButton&quot;;
import { Send, Loader2 } from 'lucide-react'
import { useTheme } from &quot;@/hooks/useTheme&quot;;

// Define suggested quick replies
const QUICK_REPLIES = [
  { id: &quot;hire&quot;, text: &quot;How do I hire?&quot; },
  { id: &quot;match&quot;, text: &quot;How do I get matched?&quot; },
  { id: &quot;billing&quot;, text: &quot;Billing help&quot; }];

type Message = {
  id: string;
  content: string;
  sender: &quot;user&quot; | &quot;bot&quot;;
  timestamp: Date;
};

export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: &quot;welcome&quot;,
      content: &quot;Hi! How can I help you?&quot;,
      sender: &quot;bot&quot;,
      timestamp: new Date()}]);
  const [inputValue, setInputValue] = useState("&quot;);
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return;
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: text,
      sender: &quot;user&quot;,
      timestamp: new Date()};
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("&quot;);
    setIsLoading(true);
    
    try {
      // Call the OpenAI-powered support function
      const response = await sendToAIAssistant(text);
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: response.message || &quot;Sorry, I couldn't process your request. Please try again.&quot;,
        sender: &quot;bot&quot;,
        timestamp: new Date()};
      
      setMessages((prev) => [...prev, botMessage]);
      
      // Check if the request was successful
      if (!response.success) {
        setFailedAttempts((prev) => prev + 1);
        
        // After 3 failed attempts, suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation();
        }
      } else {
        // Reset failed attempts if successful
        setFailedAttempts(0);
      }
    } catch (error) {
      logErrorToProduction(&quot;Error in AI chat&quot;, error as Error, { component: 'ChatBotPanel' });
      toast({
        variant: &quot;destructive&quot;,
        title: &quot;Communication Error&quot;,
        description: &quot;We're having trouble connecting to our support service.&quot;});
      
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {
        suggestEscalation();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch(&quot;https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat&quot;, {
        method: &quot;POST&quot;,
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot;},
        body: JSON.stringify({ 
          messages: [{ role: &quot;user&quot;, content: message }] 
        })});
      
      if (!response.ok) {
        return {
          success: false,
          message: &quot;I'm having trouble connecting to my knowledge base right now.&quot;
        };
      }
      
      const data = await response.json();
      return {
        success: true,
        message: data.message
      };
    } catch (error) {
      logErrorToProduction(&quot;Error calling Supabase AI chat function&quot;, error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' });
      return {
        success: false,
        message: &quot;I'm experiencing technical difficulties. Please try again later.&quot;
      };
    }
  };

  const suggestEscalation = () => {
    const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`,
      content: 
        &quot;I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?&quot;,
      sender: &quot;bot&quot;,
      timestamp: new Date()};
    
    setMessages((prev) => [...prev, escalationMessage]);
    
    // Log this interaction for the support team
    logSupportEscalation();
  };

  const logSupportEscalation = async () => {
    try {
      // Send the conversation to the backend for logging
      // This would be implemented in a real system
      logDebug(&quot;Support escalation triggered&quot;, {
        conversationHistory: messages.map(m => ({
          content: m.content,
          sender: m.sender,
          timestamp: m.timestamp
        })),
        component: 'ChatBotPanel'
      });
    } catch (error) {
      logErrorToProduction(&quot;Failed to log support escalation&quot;, error as Error, { component: 'ChatBotPanel' });
    }
  };

  const handleQuickReply = (text: string) => {
    handleSendMessage(text);
  };

  const handleEscalateToLiveAgent = () => {
    setMessages((prev) => [
      ...prev, 
      {
        id: `user-${Date.now()}`,
        content: &quot;I'd like to speak with a human agent&quot;,
        sender: &quot;user&quot;,
        timestamp: new Date()
      },
      {
        id: `bot-${Date.now()}`,
        content: &quot;I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.&quot;,
        sender: &quot;bot&quot;,
        timestamp: new Date()
      }
    ]);
    
    // In a real implementation, this would trigger a live chat request
    toast({
      title: &quot;Support request submitted&quot;,
      description: &quot;A support agent will be with you shortly.&quot;});
  };

  const handleEmailSupport = () => {
    setMessages((prev) => [
      ...prev, 
      {
        id: `user-${Date.now()}`,
        content: &quot;I'd like to email support&quot;,
        sender: &quot;user&quot;,
        timestamp: new Date()
      },
      {
        id: `bot-${Date.now()}`,
        content: &quot;Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours.&quot;,
        sender: &quot;bot&quot;,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className=&quot;flex flex-col h-full&quot;>
      <ScrollArea className=&quot;flex-1 p-4&quot; ref={scrollAreaRef}>
        <div className=&quot;flex flex-col gap-4&quot;>
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isUser={message.sender === &quot;user&quot;}
              timestamp={message.timestamp}
            />
          ))}
          
          {isLoading && (
            <div className=&quot;flex items-center justify-center py-2&quot;>
              <Loader2 className=&quot;h-5 w-5 animate-spin text-zion-purple&quot; />
            </div>
          )}
        </div>
      </ScrollArea>
      
      {messages.length === 1 && (
        <div className=&quot;px-4 py-3&quot;>
          <p className={cn(&quot;text-sm mb-2&quot;, theme === &quot;dark&quot; ? &quot;text-gray-300&quot; : &quot;text-gray-600&quot;)}>
            Suggested questions:
          </p>
          <div className=&quot;flex flex-wrap gap-2&quot;>
            {QUICK_REPLIES.map((reply) => (
              <QuickReplyButton
                key={reply.id}
                text={reply.text}
                onClick={() => handleQuickReply(reply.text)}
              />
            ))}
          </div>
        </div>
      )}
      
      {failedAttempts >= 3 && (
        <div className=&quot;px-4 py-3 border-t border-zion-purple/10&quot;>
          <p className={cn(&quot;text-sm mb-2 font-medium&quot;, theme === &quot;dark&quot; ? &quot;text-gray-300&quot; : &quot;text-gray-600&quot;)}>
            Need more help?
          </p>
          <div className=&quot;flex gap-2&quot;>
            <Button 
              onClick={handleEscalateToLiveAgent}
              size=&quot;sm&quot;
              className=&quot;bg-zion-purple hover:bg-zion-purple-light text-white&quot;
            >
              Chat with Live Agent
            </Button>
            <Button 
              onClick={handleEmailSupport}
              size=&quot;sm&quot;
              variant=&quot;outline&quot;
            >
              Email Support
            </Button>
          </div>
        </div>
      )}
      
      <div className={cn(
        &quot;p-4 border-t&quot;, 
        theme === &quot;dark&quot; ? &quot;border-zion-blue-light&quot; : &quot;border-gray-200&quot;
      )}>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className=&quot;flex items-center gap-2&quot;
        >
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder=&quot;Type your question...&quot;
            className={cn(
              &quot;flex-1&quot;,
              theme === &quot;dark&quot; 
                ? &quot;bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple&quot; 
                : &quot;bg-white border-gray-200&quot;
            )}
          />
          <Button
            type=&quot;submit&quot;
            size=&quot;icon&quot;
            disabled={isLoading || !inputValue.trim()}
            className=&quot;bg-zion-cyan hover:bg-zion-cyan/80 text-white&quot;
            aria-label=&quot;Send message&quot;
          >
            <Send className=&quot;h-4 w-4&quot; />
          </Button>
        </form>
      </div>
    </div>
  );
}
