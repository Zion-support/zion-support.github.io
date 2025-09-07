<<<<<<< HEAD

import React, { useState, useRef, useEffect } from "react";
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { ChatMessage } from "./ChatMessage";
import { QuickReplyButton } from "./QuickReplyButton";
import { Send, Loader2 } from 'lucide-react'
import { useTheme } from "@/hooks/useTheme";
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
<<<<<<< HEAD
};
=======
}
=======
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import { logDebug, logErrorToProduction  } from '@/utils/productionLogger';
import React, { useState, useRef, useEffect } from "react",
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',
ursor/fix-website-loading-errors-and-merge-6662
import React, { useState, useRef, useEffect } from "react";
import { logDebug, logErrorToProduction  } from '@/utils/productionLogger';
import React, { useState, useRef, useEffect } from "react"
import { logDebug, logErrorToProduction } from '@/utils/productionLogger'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { ChatMessage } from "./ChatMessage"
import { QuickReplyButton } from "./QuickReplyButton"
import { Send, Loader2 } from 'lucide-react'import { useTheme } from "@/hooks/useTheme"
import React, { useState, useRef, useEffect } from "react",
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Button } from "@/components/ui/button",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton";
<<<<<<< HEAD
import { Send, Loader2 } from 'lucide-react'
import { useTheme } from "@/hooks/useTheme";
// Define suggested quick replies
import { useTheme } from "@/hooks/useTheme",
// Define suggested quick replies
const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" },
  { id: "match", text: "How do I get matched?" },
  { id: "billing", text: "Billing help" }],


const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" }
  { id: "match", text: "How do I get matched?" }
  { id: "billing", text: "Billing help" }]
type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}
export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
import { useTheme } from "@/hooks/useTheme";
// Define suggested quick replies
const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" },
  { id: "match", text: "How do I get matched?" },
  { id: "billing", text: "Billing help" }],


const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" }
  { id: "match", text: "How do I get matched?" }
  { id: "billing", text: "Billing help" }]
      id: "welcome"
      content: "Hi! How can I help you?"
      sender: "bot"
      timestamp: new Date()}])
export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",
      timestamp: new Date()}]),
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [failedAttempts, setFailedAttempts] = useState(0)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme } = useTheme()
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

      id: "welcome"
      content: "Hi! How can I help you?"
      sender: "bot"
      timestamp: new Date()}])

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
<<<<<<< HEAD
      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",
=======
<<<<<<< HEAD
      id: "welcome,
      content: Hi! How can I help you?",
      sender: "bot,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      timestamp: new Date()}]),
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
=======
      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",
      timestamp: new Date()}]),
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [failedAttempts, setFailedAttempts] = useState(0)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme } = useTheme()
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
>>>>>>> merged-prs-20250907-203621

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
<<<<<<< HEAD
    }
  }, [messages]);

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []);

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return;
=======
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])
  // Focus input when component mounts
  useEffect((,) => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
      timestamp: new Date()}
        timestamp: new Date()}
        description: "We're having trouble connecting to our support service."})
      id: `bot-escalation-${Date.now()}`
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?"
      sender: "bot"
      timestamp: new Date()}
  const handleQuickReply = (text: string,) => {
    handleSendMessage(text)
  }

  )
}
  )
}
    if (!text.trim()) return;
      timestamp: new Date()},
    
        timestamp: new Date()},
      
        description: "We're having trouble connecting to our support service."}),
            

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
    }
  }, [messages]),;
  // Focus input when component mounts;
  useEffect(() => {;
    if (inputRef.current) {;
      inputRef.current.focus();
    }
  }, []),

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return,
>>>>>>> merged-prs-20250907-203621
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: text,
<<<<<<< HEAD
      sender: "user",
=======
<<<<<<< HEAD
      sender: "user,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    try {
      // Call the OpenAI-powered support function
      const response = await sendToAIAssistant(text);
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: response.message || "Sorry, I couldn't process your request. Please try again.";
        sender: "bot",
        timestamp: new Date()},
      
      setMessages((prev) => [...prev, botMessage]);
      
      // Check if the request was successful
      if (!response.success) {
        setFailedAttempts((prev) => prev + 1);
=======
      sender: "user",
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, userMessage]),
    setInputValue(""),
    setIsLoading(true),
    
    try {
      // Call the OpenAI-powered support function
      const response = await sendToAIAssistant(text),
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: response.message || "Sorry, I couldn't process your request. Please try again.",
        sender: "bot",
        timestamp: new Date()},
      
      setMessages((prev) => [...prev, botMessage]),
      
      // Check if the request was successful
      if (!response.success) {
        setFailedAttempts((prev) => prev + 1),
>>>>>>> merged-prs-20250907-203621
        
        // After 3 failed attempts, suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation()
<<<<<<< HEAD
        }
      } else {
        // Reset failed attempts if successful
        setFailedAttempts(0)
      }
    } catch (error) {
      logErrorToProduction("Error in AI chat", error as Error, { component: 'ChatBotPanel' }),
      toast({
        variant: "destructive",
        title: "Communication Error",
        description: "We're having trouble connecting to our support service."}),
      
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {
        suggestEscalation()
      }
    } finally {
      setIsLoading(false)
    }
  };

  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"};
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })});
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
        }
      } else {;
        // Reset failed attempts if successful;
        setFailedAttempts(0);
      }
    } catch (error) {
      logErrorToProduction("Error in AI chat", error as Error, { component: 'ChatBotPanel' }),
      toast({
        variant: "destructive",
        title: "Communication Error",
        description: "We're having trouble connecting to our support service."}),
      
      setFailedAttempts((prev) => prev + 1),
      if (failedAttempts >= 2) {
        suggestEscalation()
    } catch (error) {;
      logErrorToProduction("Error in AI chat", error as Error, { component: 'ChatBotPanel' }),;
      toast({;
        variant: "destructive",;
        title: "Communication Error",;
        description: "We're having trouble connecting to our support service."}),;
      setFailedAttempts((prev) => prev + 1),;
      if (failedAttempts >= 2) {;
        suggestEscalation();
      }
    } finally {;
      setIsLoading(false);
    }
  },

        description: "We're having trouble connecting to our support service."}),
      id: `bot - escalation-${Date.now ()}`,
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
      timestamp: new Date ()},
  const handleQuickReply = (text: string, ) =>: any {
    handleSendMessage (text);
  }
  );
}
  );
}
  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
>>>>>>> merged-prs-20250907-203621
      
      if (!response.ok) {
        return {
          success: false,
<<<<<<< HEAD
          message: "I'm having trouble connecting to my knowledge base right now."
=======
<<<<<<< HEAD
          message: I'm having trouble connecting to my knowledge base right now."
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        }
      }
      
      const data = await response.json();
      return {
        success: true,
        message: data.message
      }
    } catch (error) {
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' }),
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      }
    }
  };

  const suggestEscalation = () => {
    const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`,
      content: 
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?";
      sender: "bot",
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, escalationMessage]);
    
    // Log this interaction for the support team
    logSupportEscalation()
<<<<<<< HEAD
  };
=======
  }
=======
          message: "I'm having trouble connecting to my knowledge base right now."
        }
          message: "I'm having trouble connecting to my knowledge base right now."
        };
      }
;
      const data = await response.json(),;
      return {;
        success: true,;
        message: data.message;
      }
    } catch (error) {
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' }),
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      }
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' });
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      };
    }
  },

  const suggestEscalation = () => {
    const escalationMessage: Message = {


=======

import React, { useState, useRef, useEffect } from './react';
import { log_debug, logErrorToProduction } from '@/utils / production_logger';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { ScrollArea  } from '@/components / ui / scroll - area';
import { Separator  } from '@/components / ui / separator';
import { toast  } from '@/components / ui / use - toast';
import { cn  } from '@/lib / utils';
import { ChatMessage  } from './ChatMessage';
import { QuickReplyButton  } from './QuickReplyButton';
import { Send, Loader2 } from 'lucide-react'import { use_theme  } from '@/hooks / use_theme';
// Define suggested quick replies;
const QUICK_REPLIES = [;
  { id: "hire", text: "How do I hire?" },
  { id: "match", text: "How do I get matched?" },
  { id: "billing", text: "Billing help" }],
type Message = {
  id: string,
  content: string,
  sender: "user" | "bot",
  timestamp: Date;

}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      id: `bot-escalation-${Date.now()}`,
      content: 
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, escalationMessage]),
    
    // Log this interaction for the support team
    logSupportEscalation()
  },
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const logSupportEscalation = async () => {
    try {
      // Send the conversation to the backend for logging
      // This would be implemented in a real system
<<<<<<< HEAD
      logDebug("Support escalation triggered", {
=======
<<<<<<< HEAD
      logDebug("Support escalation triggered, {
=======
      logDebug("Support escalation triggered", {
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        conversationHistory: messages.map(m => ({
          content: m.content,
          sender: m.sender,
          timestamp: m.timestamp
<<<<<<< HEAD
        }));
        component: 'ChatBotPanel'
      })
    } catch (error) {
      logErrorToProduction("Failed to log support escalation", error as Error, { component: 'ChatBotPanel' })
    }
  };

  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  };

  const handleEscalateToLiveAgent = () => {
    setMessages((prev) => [
      ...prev, 
      {
        id: `user-${Date.now()}`,
        content: "I'd like to speak with a human agent",
        sender: "user",
        timestamp: new Date()
      };
      {
        id: `bot-${Date.now()}`,
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";
        sender: "bot",
        timestamp: new Date()
      }
    ]);
    
    // In a real implementation, this would trigger a live chat request
    toast({
<<<<<<< HEAD
      title: "Support request submitted",
      description: "A support agent will be with you shortly."})
  };
=======
      title: "Support request submitted,
      description: A support agent will be with you shortly."})
  }
=======
        })),
        component: 'ChatBotPanel'
      })
    } catch (error) {
      logErrorToProduction("Failed to log support escalation", error as Error, { component: 'ChatBotPanel' })
    }
  },

  const handleQuickReply = (text: string) => {
      id: `bot-escalation-${Date.now()}`,
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, escalationMessage]),
    
    // Log this interaction for the support team
    logSupportEscalation()
  },

  const logSupportEscalation = async () => {
    try {
      // Send the conversation to the backend for logging
      // This would be implemented in a real system
      logDebug("Support escalation triggered", {
        conversationHistory: messages.map(m => ({
          content: m.content,
          sender: m.sender,
          timestamp: m.timestamp
        })),
        component: 'ChatBotPanel'
      })
    } catch (error) {
      logErrorToProduction("Failed to log support escalation", error as Error, { component: 'ChatBotPanel' })
    }
  },

  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
<<<<<<< HEAD
  }
  );
};
  );
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const handleEmailSupport = () => {
    setMessages((prev) => [
      ...prev, 
      {
        id: `user-${Date.now()}`,
<<<<<<< HEAD
        content: "I'd like to email support",
        sender: "user",
=======
<<<<<<< HEAD
        content: "I'd like to email support,
        sender: user",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        timestamp: new Date()
      };
      {
        id: `bot-${Date.now()}`,
        content: "Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours.",
        sender: "bot",
        timestamp: new Date()
      }
    ])
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isUser={message.sender === "user"}
              timestamp={message.timestamp}
            />
          ))}
          
          {isLoading && (
<<<<<<< HEAD
            <div className="flex items-center justify-center py-2">
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />
=======
            <div className="flex items-center justify-center py-2>
              <Loader2 className=h-5 w-5 animate-spin text-zion-purple" />
=======
        content: "I'd like to email support",
        sender: "user",
        timestamp: new Date()
      },
      {
        id: `bot-${Date.now()}`,
        content: "Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours.",
        sender: "bot",
        timestamp: new Date()
      }
    ])
  },

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
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
              key={message.id}
              message={message.content}
              isUser={message.sender === "user"}
              timestamp={message.timestamp}
            />;
          ))}
          
          {isLoading && (
            <div className="flex items-center justify-center py-2">
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>
          )}
        </div>
      </ScrollArea>
      
      {messages.length === 1 && (
<<<<<<< HEAD
        <div className="px-4 py-3">
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Suggested questions:
          </p>
          <div className="flex flex-wrap gap-2">
=======
<<<<<<< HEAD
        <div className="px-4 py-3>
          <p className={cn(text-sm mb-2", theme === "dark ? text-gray-300" : "text-gray-600)}>
            Suggested questions:
          </p>
          <div className=flex flex-wrap gap-2">
=======
        <div className="px-4 py-3">
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Suggested questions:
          </p>
          <div className="flex flex-wrap gap-2">
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            {QUICK_REPLIES.map((reply) => (
              <QuickReplyButton
                key={reply.id}
                text={reply.text}
                onClick={() => handleQuickReply(reply.text)}
<<<<<<< HEAD
              />
            ))}
          </div>
        </div>
      )}
      
      {failedAttempts >= 3 && (
        <div className="px-4 py-3 border-t border-zion-purple/10">
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Need more help?
          </p>
          <div className="flex gap-2">
            <Button 
              onClick={handleEscalateToLiveAgent}
<<<<<<< HEAD
              size="sm"
              className="bg-zion-purple hover:bg-zion-purple-light text-white"
=======
              size="sm
              className=bg-zion-purple hover:bg-zion-purple-light text-white"
=======
              />;
            ))}
          </div>;
        </div>;
      )}
      
      {failedAttempts >= 3 && (
        <div className="px-4 py-3 border-t border-zion-purple/10">
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Need more help?
          </p>
          <div className="flex gap-2">
            <Button 
              onClick={handleEscalateToLiveAgent}
              size="sm"
              className="bg-zion-purple hover:bg-zion-purple-light text-white"
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            >
              Chat with Live Agent
            </Button>
            <Button 
              onClick={handleEmailSupport}
<<<<<<< HEAD
              size="sm"
              variant="outline"
=======
<<<<<<< HEAD
              size="sm
              variant=outline"
=======
              size="sm"
              variant="outline"
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            >
              Email Support
            </Button>
          </div>
        </div>
      )}
      
      <div className={cn(
<<<<<<< HEAD
        "p-4 border-t", 
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200"
=======
<<<<<<< HEAD
        "p-4 border-t, 
        theme === dark" ? "border-zion-blue-light : border-gray-200"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      )}>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage()
          }}
<<<<<<< HEAD
          className="flex items-center gap-2"
=======
          className="flex items-center gap-2
=======
        "p-4 border-t", 
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200"
      )}>
        <form 
          onSubmit={(e) => {
            e.preventDefault(),
            handleSendMessage()
          }}
          className="flex items-center gap-2"
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        >
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
<<<<<<< HEAD
            placeholder="Type your question..."
=======
<<<<<<< HEAD
            placeholder=Type your question..."
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            className={cn(
              "flex-1";
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 
                : "bg-white border-gray-200"
            )}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !inputValue.trim()}
<<<<<<< HEAD
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
            aria-label="Send message"
=======
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white
            aria-label=Send message"
=======
            placeholder="Type your question..."
            className={cn(
              "flex-1",
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 
                : "bg-white border-gray-200"
            )}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !inputValue.trim()}
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
            aria-label="Send message"
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
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
}
<<<<<<< HEAD
;
ursor/fix-website-loading-errors-and-merge-6662
;
    handleSendMessage(text)
=======
  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
      
      if (!response.ok) {
        return {
          success: false,
          message: "I'm having trouble connecting to my knowledge base right now."
        }
          message: "I'm having trouble connecting to my knowledge base right now."
        };
      }
;
      const data = await response.json(),;
      return {;
        success: true,;
        message: data.message;
      }
    } catch (error) {
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' }),
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      }
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' });
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      };
    }
  },

  const suggestEscalation = () => {
    const escalationMessage: Message = {


      id: `bot-escalation-${Date.now()}`,
      content: 
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, escalationMessage]),
    
    // Log this interaction for the support team
    logSupportEscalation()
  },

  const logSupportEscalation = async () => {
    try {
      // Send the conversation to the backend for logging
      // This would be implemented in a real system
      logDebug("Support escalation triggered", {
        conversationHistory: messages.map(m => ({
          content: m.content,
          sender: m.sender,
          timestamp: m.timestamp
        })),
        component: 'ChatBotPanel'
      })
    } catch (error) {
      logErrorToProduction("Failed to log support escalation", error as Error, { component: 'ChatBotPanel' })
    }
  },

  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
