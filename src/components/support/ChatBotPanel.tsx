
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react",
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton",
import { Send, Loader2 } from 'lucide-react'
import { useTheme } from "@/hooks/useTheme",
// Define suggested quick replies
const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" },
  { id: "match", text: "How do I get matched?" },
  { id: "billing", text: "Billing help" }],

type Message = {
  id: string,
  content: string,
  sender: "user" | "bot",
  timestamp: Date
},
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
<<<<<<< HEAD
      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",
      timestamp: new Date()}]),
  const [inputValue, setInputValue] = useState(""),
  const [isLoading, setIsLoading] = useState(false),
  const [failedAttempts, setFailedAttempts] = useState(0),
  const scrollAreaRef = useRef<HTMLDivElement>(null),
  const inputRef = useRef<HTMLInputElement>(null),
  const { theme } = useTheme(),
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
=======
import React, { useState, useRef, useEffect } from "react",;
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { Separator } from "@/components/ui/separator",;
import { toast } from "@/components/ui/use-toast",;
import { cn } from "@/lib/utils",;
import { ChatMessage } from "./ChatMessage",;
import { QuickReplyButton } from "./QuickReplyButton",;
import { Send, Loader2 } from 'lucide-react';
import { useTheme } from "@/hooks/useTheme",;
// Define suggested quick replies;
const QUICK_REPLIES = [;
  { id: "hire", text: "How do I hire?" },;
  { id: "match", text: "How do I get matched?" },;
  { id: "billing", text: "Billing help" }],;
type Message = {;
  id: string,;
  content: string,;
  sender: "user" | "bot",;
  timestamp: Date;
},;
export function ChatBotPanel() {;
  const [messages, setMessages] = useState<Message[]>([;
    {;
      id: "welcome",;
      content: "Hi! How can I help you?",;
      sender: "bot",;
      timestamp: new Date()}]),;
  const [inputValue, setInputValue] = useState(""),;
  const [isLoading, setIsLoading] = useState(false),;
  const [failedAttempts, setFailedAttempts] = useState(0),;
  const scrollAreaRef = useRef<HTMLDivElement>(null),;
  const inputRef = useRef<HTMLInputElement>(null),;
  const { theme } = useTheme(),;
  // Auto-scroll to bottom when messages change;
  useEffect(() => {;
    if (scrollAreaRef.current) {;
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  }, [messages]),;
  // Focus input when component mounts;
  useEffect(() => {;
    if (inputRef.current) {;
      inputRef.current.focus();
    }
<<<<<<< HEAD
  }, []),

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return,
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: text,
<<<<<<< HEAD
      sender: "user",
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, userMessage]),
    setInputValue(""),
    setIsLoading(true),
=======
      sender: &quot;user&quot;,
      timestamp: new Date()};
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("&quot;);
    setIsLoading(true);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    try {
      // Call the OpenAI-powered support function
      const response = await sendToAIAssistant(text),
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
<<<<<<< HEAD
        content: response.message || "Sorry, I couldn't process your request. Please try again.",
        sender: "bot",
        timestamp: new Date()},
=======
        content: response.message || &quot;Sorry, I couldn't process your request. Please try again.&quot;,
        sender: &quot;bot&quot;,
        timestamp: new Date()};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      setMessages((prev) => [...prev, botMessage]),
      
      // Check if the request was successful
      if (!response.success) {
        setFailedAttempts((prev) => prev + 1),
        
        // After 3 failed attempts, suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation()
=======
  }, []),;
  const handleSendMessage = async (text: string = inputValue) => {;
    if (!text.trim()) return,;
    const userMessage: Message = {;
      id: `user-${Date.now()}`,;
      content: text,;
      sender: "user",;
      timestamp: new Date()},;
    setMessages((prev) => [...prev, userMessage]),;
    setInputValue(""),;
    setIsLoading(true),;
    try {;
      // Call the OpenAI-powered support function;
      const response = await sendToAIAssistant(text),;
      const botMessage: Message = {;
        id: `bot-${Date.now()}`,;
        content: response.message || "Sorry, I couldn't process your request. Please try again.",;
        sender: "bot",;
        timestamp: new Date()},;
      setMessages((prev) => [...prev, botMessage]),;
      // Check if the request was successful;
      if (!response.success) {;
        setFailedAttempts((prev) => prev + 1),;
        // After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {;
          suggestEscalation();
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        }
      } else {;
        // Reset failed attempts if successful;
        setFailedAttempts(0);
      }
<<<<<<< HEAD
    } catch (error) {
<<<<<<< HEAD
      logErrorToProduction("Error in AI chat", error as Error, { component: 'ChatBotPanel' }),
      toast({
        variant: "destructive",
        title: "Communication Error",
        description: "We're having trouble connecting to our support service."}),
=======
      logErrorToProduction(&quot;Error in AI chat&quot;, error as Error, { component: 'ChatBotPanel' });
      toast({
        variant: &quot;destructive&quot;,
        title: &quot;Communication Error&quot;,
        description: &quot;We're having trouble connecting to our support service.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      setFailedAttempts((prev) => prev + 1),
      if (failedAttempts >= 2) {
        suggestEscalation()
=======
    } catch (error) {;
      logErrorToProduction("Error in AI chat", error as Error, { component: 'ChatBotPanel' }),;
      toast({;
        variant: "destructive",;
        title: "Communication Error",;
        description: "We're having trouble connecting to our support service."}),;
      setFailedAttempts((prev) => prev + 1),;
      if (failedAttempts >= 2) {;
        suggestEscalation();
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
  },

  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch(&quot;https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat&quot;, {
        method: &quot;POST&quot;,
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot;},
        body: JSON.stringify({ 
<<<<<<< HEAD
          messages: [{ role: "user", content: message }] 
        })}),
=======
          messages: [{ role: &quot;user&quot;, content: message }] 
        })});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      if (!response.ok) {
        return {
          success: false,
<<<<<<< HEAD
          message: "I'm having trouble connecting to my knowledge base right now."
=======
  },;
  const sendToAIAssistant = async (message: string) => {;
    try {;
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json"},;
        body: JSON.stringify({;
          messages: [{ role: "user", content: message }];
        })}),;
      if (!response.ok) {;
        return {;
          success: false,;
          message: "I'm having trouble connecting to my knowledge base right now.";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        }
=======
          message: &quot;I'm having trouble connecting to my knowledge base right now.&quot;
        };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
;
      const data = await response.json(),;
      return {;
        success: true,;
        message: data.message;
      }
<<<<<<< HEAD
    } catch (error) {
<<<<<<< HEAD
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' }),
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
=======
    } catch (error) {;
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' }),;
      return {;
        success: false,;
        message: "I'm experiencing technical difficulties. Please try again later.";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
=======
      logErrorToProduction(&quot;Error calling Supabase AI chat function&quot;, error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' });
      return {
        success: false,
        message: &quot;I'm experiencing technical difficulties. Please try again later.&quot;
      };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
<<<<<<< HEAD
  },

  const suggestEscalation = () => {
    const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`,
      content: 
<<<<<<< HEAD
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
      timestamp: new Date()},
=======
        &quot;I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?&quot;,
      sender: &quot;bot&quot;,
      timestamp: new Date()};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    setMessages((prev) => [...prev, escalationMessage]),
    
    // Log this interaction for the support team
    logSupportEscalation()
  },

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
      })
    } catch (error) {
<<<<<<< HEAD
      logErrorToProduction("Failed to log support escalation", error as Error, { component: 'ChatBotPanel' })
=======
      logErrorToProduction(&quot;Failed to log support escalation&quot;, error as Error, { component: 'ChatBotPanel' });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  },

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
    ]),
    
    // In a real implementation, this would trigger a live chat request
    toast({
<<<<<<< HEAD
      title: "Support request submitted",
      description: "A support agent will be with you shortly."})
  },
=======
      title: &quot;Support request submitted&quot;,
      description: &quot;A support agent will be with you shortly.&quot;});
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
    ])
  },

  return (
    <div className=&quot;flex flex-col h-full&quot;>
      <ScrollArea className=&quot;flex-1 p-4&quot; ref={scrollAreaRef}>
        <div className=&quot;flex flex-col gap-4&quot;>
          {messages.map((message) => (
            <ChatMessage
=======
  },;
  const suggestEscalation = () => {;
    const escalationMessage: Message = {;
      id: `bot-escalation-${Date.now()}`,;
      content:;
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",;
      sender: "bot",;
      timestamp: new Date()},;
    setMessages((prev) => [...prev, escalationMessage]),;
    // Log this interaction for the support team;
    logSupportEscalation();
  },;
  const logSupportEscalation = async () => {;
    try {;
      // Send the conversation to the backend for logging;
      // This would be implemented in a real system;
      logDebug("Support escalation triggered", {;
        conversationHistory: messages.map(m => ({;
          content: m.content,;
          sender: m.sender,;
          timestamp: m.timestamp;
        })),;
        component: 'ChatBotPanel';
      });
    } catch (error) {;
      logErrorToProduction("Failed to log support escalation", error as Error, { component: 'ChatBotPanel' });
    }
  },;
  const handleQuickReply = (text: string) => {;
    handleSendMessage(text);
  },;
  const handleEscalateToLiveAgent = () => {;
    setMessages((prev) => [;
      ...prev,;
      {;
        id: `user-${Date.now()}`,;
        content: "I'd like to speak with a human agent",;
        sender: "user",;
        timestamp: new Date();
      },;
      {;
        id: `bot-${Date.now()}`,;
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.",;
        sender: "bot",;
        timestamp: new Date();
      }
    ]),;
    // In a real implementation, this would trigger a live chat request;
    toast({;
      title: "Support request submitted",;
      description: "A support agent will be with you shortly."});
  },;
  const handleEmailSupport = () => {;
    setMessages((prev) => [;
      ...prev,;
      {;
        id: `user-${Date.now()}`,;
        content: "I'd like to email support",;
        sender: "user",;
        timestamp: new Date();
      },;
      {;
        id: `bot-${Date.now()}`,;
        content: "Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours.",;
        sender: "bot",;
        timestamp: new Date();
      }
    ]);
  },;
  return (;
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;
          {messages.map((message) => (;
            <ChatMessage;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              key={message.id}
              message={message.content}
              isUser={message.sender === &quot;user&quot;}
              timestamp={message.timestamp}
            />;
          ))}
<<<<<<< HEAD
          
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
=======
;
          {isLoading && (;
            <div className="flex items-center justify-center py-2">;
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;
            </div>;
          )}
        </div>;
      </ScrollArea>;
      {messages.length === 1 && (;
        <div className="px-4 py-3">;
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;
            Suggested questions:;
          </p>;
          <div className="flex flex-wrap gap-2">;
            {QUICK_REPLIES.map((reply) => (;
              <QuickReplyButton;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                key={reply.id}
                text={reply.text}
                onClick={() => handleQuickReply(reply.text)}
              />;
            ))}
          </div>;
        </div>;
      )}
<<<<<<< HEAD
      
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
            e.preventDefault(),
            handleSendMessage()
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
<<<<<<< HEAD
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
            aria-label="Send message"
=======
            className=&quot;bg-zion-cyan hover:bg-zion-cyan/80 text-white&quot;
            aria-label=&quot;Send message&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          >
            <Send className=&quot;h-4 w-4&quot; />
          </Button>
        </form>
      </div>
    </div>
  )
=======
;
      {failedAttempts >= 3 && (;
        <div className="px-4 py-3 border-t border-zion-purple/10">;
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;
            Need more help?;
          </p>;
          <div className="flex gap-2">;
            <Button;
              onClick={handleEscalateToLiveAgent}
              size="sm";
              className="bg-zion-purple hover:bg-zion-purple-light text-white";
            >;
              Chat with Live Agent;
            </Button>;
            <Button;
              onClick={handleEmailSupport}
              size="sm";
              variant="outline";
            >;
              Email Support;
            </Button>;
          </div>;
        </div>;
      )}
;
      <div className={cn(;
        "p-4 border-t",;
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200";
      )}>;
        <form;
          onSubmit={(e) => {;
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2";
        >;
          <Input;
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question...";
            className={cn(;
              "flex-1";
              theme === "dark";
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple";
                : "bg-white border-gray-200";
            )}
          />;
          <Button;
            type="submit";
            size="icon";
            disabled={isLoading || !inputValue.trim()}
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white";
            aria-label="Send message";
          >;
            <Send className="h-4 w-4" />;
          </Button>;
        </form>;
      </div>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;