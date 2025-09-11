<<<<<<< HEAD
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
=======
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton";
<<<<<<< HEAD
<<<<<<< HEAD
import { Send, Loader2 } from 'lucide-react'
import { useTheme } from "@/hooks/useTheme";
// Define suggested quick replies
import { useTheme } from "@/hooks/useTheme",
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
export /**
 * ChatBotPanel - Function description
 */
function ChatBotPanel() {
  const [messages, set_messages] = useState < Message[]>([;
    {

      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",
      timestamp: new Date ()}]),
  const [input_value, setInputValue] = useState ("");
  const [is_loading, setIsLoading] = useState (false);
  const [failed_attempts, setFailedAttempts] = useState (0);
  const scrollAreaRef = useRef < HTMLDivElement>(null);
  const input_ref = useRef < HTMLInputElement>(null);
  const { theme } = use_theme ();
  // Auto - scroll to bottom when messages change;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      scrollAreaRef.current.scroll_top = scrollAreaRef.current.scroll_height;

    }
  }, [messages]);
  // Focus input when component mounts;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      input_ref.current.focus ();
    }

import { Send, Loader2 } from 'lucide-react'import { useTheme } from "@/hooks/useTheme";
import { Send, Loader2 } from 'lucide-react'

import { useTheme } from "@/hooks/useTheme",

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Define suggested quick replies
const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" },
  { id: "match", text: "How do I get matched?" },
  { id: "billing", text: "Billing help" }],


<<<<<<< HEAD
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!text.trim()) return;
      timestamp: new Date()},
    
        timestamp: new Date()},
<<<<<<< HEAD
      
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
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: text,
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
        
        // After 3 failed attempts, suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation()
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
      
      if (!response.ok) {
        return {
          success: false,
          message: "I'm having trouble connecting to my knowledge base right now."
        }
    }, []);
    const _handleSendMessage = async (text = inputValue) => {
        if (!text.trim())
            return;
        const _userMessage = {
            id: `user-${Date.now()}`,
            content: text,
            sender: "user",
            timestamp: new Date(),
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


  const handleEmailSupport = () => {
    setMessages((prev) => [
      ...prev, 
      {
        id: `user-${Date.now()}`,
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
          {messages.map((message) => (<ChatMessage key={message.id} message={message.content} isUser={message.sender === "user"} timestamp={message.timestamp}/>))}
          
          {isLoading && (<div className="flex items-center justify-center py-2">
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple"/>
            </div>)}
        </div>
      </ScrollArea>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
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
};

export function ChatBotPanel() {;
  const [messages, setMessages] = useState<Message[]>([;
    {;
      id: "welcome",;
      content: "Hi! How can I help you?",;
      sender: "bot",;
      timestamp: new Date()}]),;
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  // Auto-scroll to bottom when messages change;
  useEffect((,) => {;
    if (scrollAreaRef && scrollAreaRef.current) {;
      scrollAreaRef && scrollAreaRef.current.scrollTop = scrollAreaRef && scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when component mounts;
  useEffect((,) => {;
    if (inputRef && inputRef.current) {;
      inputRef && inputRef.current.focus();
    }
  }, []);

  const handleSendMessage = async (text: string = inputValue) => {;
    if (!text && text.trim()) return;
      timestamp: new Date()},;

        timestamp: new Date()},;

        description: "We're having trouble connecting to our support service."}),;


  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
ursor/fix-website-loading-errors-and-merge-6662
;
    handleSendMessage(text)
=======
=======

  }, []);
  const handleSendMessage = async (text: string = input_value) => {
    if () return) {
  $2
}
      timestamp: new Date ()},
        timestamp: new Date ()},
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    handleSendMessage(text)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    handleSendMessage(text)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
