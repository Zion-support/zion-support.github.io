import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton";

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

// Define suggested quick replies
const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" },
  { id: "match", text: "How do I get matched?" },
  { id: "billing", text: "Billing help" }],


  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight

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