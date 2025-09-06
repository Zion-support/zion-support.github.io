
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";
import {toast} from "@/components/ui/use-toast";
import {cn} from "@/lib/utils";
import {ChatMessage} from "./ChatMessage";
import {QuickReplyButton} from "./QuickReplyButton";
import {Send, Loader2} from "lucide-react";
import {useTheme} from "@/hooks/useTheme";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState, useRef, useEffect } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton",
<<<<<<< HEAD
import { Send, Loader2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
=======
import { Send, Loader2 } from "lucide-react",
import { useTheme } from "@/hooks/useTheme",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
// Define suggested quick replies

const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" }
  { id: "match", text: "How do I get matched?" }
  { id: "billing", text: "Billing help" }]
type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
<<<<<<< HEAD
<<<<<<< HEAD
}
export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome"
      content: "Hi! How can I help you?"
      sender: "bot"
      timestamp: new Date()}])
=======

import React, { useState, useRef, useEffect } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";
import {toast} from "@/components/ui/use-toast";
import {cn} from "@/lib/utils";
import {ChatMessage} from "./ChatMessage";
import {QuickReplyButton} from "./QuickReplyButton";
import {Send, Loader2} from "lucide-react";
import {useTheme} from "@/hooks/useTheme";
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

>>>>>>> main
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
<<<<<<< HEAD
=======
=======


>>>>>>> main
},

export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",
<<<<<<< HEAD
<<<<<<< HEAD
      timestamp: new Date()}]),;
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
=======
      timestamp: new Date()}]),
  const [inputValue, setInputValue] = useState(""),
  const [isLoading, setIsLoading] = useState(false),
  const [failedAttempts, setFailedAttempts] = useState(0),
  const scrollAreaRef = useRef<HTMLDivElement>(null),
  const inputRef = useRef<HTMLInputElement>(null),
  const { theme } = useTheme(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
<<<<<<< HEAD
<<<<<<< HEAD
    }
  }, [messages]);
  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []);
=======
=======


  // Auto-scroll to bottom when messages change;
  useEffect(() => {;
    if (scrollAreaRef && scrollAreaRef.current) {;
      scrollAreaRef && scrollAreaRef.current.scrollTop = scrollAreaRef && scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when component mounts;
  useEffect(() => {;
    if (inputRef && inputRef.current) {;
      inputRef && inputRef.current.focus();
    }
  }, []);

  const handleSendMessage = async (text: string = inputValue) => {;
    if (!text && text.trim()) return,;

    const userMessage: Message = {;
      id: `user-${Date && Date.now()}`,;
      content: text,;
      sender: "user",;
      timestamp: new Date()},;

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {;
      // Call the OpenAI-powered support function;
      const response = await sendToAIAssistant(text);

      const botMessage: Message = {;
        id: `bot-${Date && Date.now()}`,;
        content: response && response.message || "Sorry, I couldn't process your request. Please try again.";
        sender: "bot",;
        timestamp: new Date()},;

      setMessages((prev) => [...prev, botMessage]);

      // Check if the request was successful;
      if (!response && response.success) {;
        setFailedAttempts((prev) => prev + 1);

        // After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {;
          suggestEscalation();

        }
      } else {;
        // Reset failed attempts if successful;
        setFailedAttempts(0);
=======
import React, { useState, useRef, useEffect } from './react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { ScrollArea } from '@/components / ui / scroll - area';
import { Separator } from '@/components / ui / separator';
import { toast } from '@/components / ui / use - toast';
import { cn } from '@/lib / utils';
import { ChatMessage } from './ChatMessage';
import { QuickReplyButton } from './QuickReplyButton';
import { Send, Loader2 } from './lucide-react';
import { use_theme } from '@/hooks / use_theme';
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
;
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
;
  // Auto - scroll to bottom when messages change;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      scrollAreaRef.current.scroll_top = scrollAreaRef.current.scroll_height;
    }
  }, [messages]);
;
  // Focus input when component mounts;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      input_ref.current.focus ();
    }
  }, []);
;
  const handleSendMessage = async (text: string = input_value) => {
    if () return, ) {
  $2
}
    const user_message: Message = {
      id: `user-${Date.now ()}`,
      content: text,
      sender: "user",
      timestamp: new Date ()},
    set_messages ((prev) => [...prev, user_message]);
    setInputValue ("");
    setIsLoading (true);
;
    try {
      // Call the OpenAI - powered support function;
      const response = await sendToAIAssistant (text);
;
      const bot_message: Message = {
        id: `bot-${Date.now ()}`,
        content: response.message || "Sorry, I couldn't process your request. Please try again.";
        sender: "bot",
        timestamp: new Date ()},
      set_messages ((prev) => [...prev, bot_message]);
;
      // Check if the request was successful;
      // Check condition
if ( {) {
  $2
}
        setFailedAttempts ((prev) => prev + 1);
;
        // After 3 failed attempts, suggest escalation;
        // Check condition
if ( {) {
  $2
}
          suggest_escalation ();
=======

>>>>>>> main
import React, { useState, useRef, useEffect } from "react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { Separator } from "@/components/ui/separator",;
import { toast } from "@/components/ui/use-toast",;
import { cn } from "@/lib/utils",;
import { ChatMessage } from "./ChatMessage",;
import { QuickReplyButton } from "./QuickReplyButton",;
import { Send, Loader2 } from "lucide-react",;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {
<<<<<<< HEAD
<<<<<<< HEAD
      id: `user-${Date.now()}`
      content: text
      sender: "user"
      timestamp: new Date()}
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    try {
      // Call the OpenAI-powered support function
      const response = await sendToAIAssistant(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`
        content: response.message |"Sorry, I couldn't process your request. Please try again.";
        sender: "bot"
        timestamp: new Date()}
      setMessages((prev) => [...prev, botMessage]);
      // Check if the request was successful
      if (!response.success) {
        setFailedAttempts((prev) => prev + 1);
        // After 3 failed attempts, suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation()
=======
=======

>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      } else {
        // Reset failed attempts if successful
        setFailedAttempts(0)
      }
    } catch (error) {
      console.error("Error in AI chat:", error),
      toast({
<<<<<<< HEAD
        variant: "destructive"
        title: "Communication Error"
        description: "We're having trouble connecting to our support service."})
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {
        suggestEscalation()
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        }
      } else {
        // Reset failed attempts if successful;
        setFailedAttempts (0);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }

    } catch (error) {;
      console && console.error("Error in AI chat:", error);
      toast({;
        variant: "destructive",;
        title: "Communication Error",;
        description: "We're having trouble connecting to our support service."}),;


      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {;
        suggestEscalation();
=======
    } catch (error) {
      console.error("Error in AI chat:", error),
      toast({

>>>>>>> main
        variant: "destructive",
        title: "Communication Error",
        description: "We're having trouble connecting to our support service."}),
      
      setFailedAttempts((prev) => prev + 1),
      if (failedAttempts >= 2) {
        suggestEscalation()
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    } catch (error) {;
      console.error("Error in AI chat:", error),;
      toast({;
        variant: "destructive",;
        title: "Communication Error",;
        description: "We're having trouble connecting to our support service."}),;
      setFailedAttempts((prev) => prev + 1),;
      if (failedAttempts >= 2) {;
        suggestEscalation();
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
    } finally {;
      setIsLoading(false);
    }


>>>>>>> main
  },
=======
  };
=======
  },
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======



>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
<<<<<<< HEAD
<<<<<<< HEAD
          "Content-Type": "application/json"}
        body: JSON.stringify({
          messages: [{ role: "user", content: message }]
        })});
=======
=======


>>>>>>> main
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
      if (!response.ok) {
        return {
          success: false
          message: "I'm having trouble connecting to my knowledge base right now."
        }
<<<<<<< HEAD
          message: "I'm having trouble connecting to my knowledge base right now."
        };
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
      
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      }


      


>>>>>>> main
      const data = await response.json();
      return {
        success: true
        message: data.message
=======
<<<<<<< HEAD
;
      const data = await response.json(),;
      return {;
        success: true,;
        message: data.message;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } catch (error) {
      console.error("Error in AI chat:", error),
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      }
      console.error("Error in AI chat:", error);
      return {
        success: false
        message: "I'm experiencing technical difficulties. Please try again later."
<<<<<<< HEAD
      }
    }
<<<<<<< HEAD
  }
  const suggestEscalation = () => {
    const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?"
      sender: "bot"
      timestamp: new Date()}
    setMessages((prev) => [...prev, escalationMessage]);
    // Log this interaction for the support team
    logSupportEscalation()
  }
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      console.error ("Error in AI chat:", error);
      toast ({
        variant: "destructive",
        title: "Communication Error",
        description: "We're having trouble connecting to our support service."}),
      setFailedAttempts ((prev) => prev + 1);
      // Check condition
if ( {) {
  $2
}
        suggest_escalation ();
      }
    } finally {
      setIsLoading (false);
    }
  }
;
  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {
        method: "POST",
        headers: {
          "Content - Type": "application / json"}
        body: JSON.stringify ({
          messages: [{ role: "user", content: message }];
        })});
;
      // Check condition
if ( {) {
  $2
}
        return {
          success: false,
          message: "I'm having trouble connecting to my knowledge base right now.";
        }
      }
      const data = await response.json ();
      return {
        success: true,
        message: data.message;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
    } catch (error) {
      console.error ("Error in AI chat:", error);
      return {


  };

>>>>>>> main
=======
      };
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main

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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
  const logSupportEscalation = async () => {
    try {
      // Send the conversation to the backend for logging
      // This would be implemented in a real system
<<<<<<< HEAD
<<<<<<< HEAD
      console.log("Support escalation triggered", {
=======
      // // // console.log("Support escalation triggered", { 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


      // // // console.log("Support escalation triggered", { 


>>>>>>> main
        conversationHistory: messages.map(m => ({
          content: m.content
          sender: m.sender
          timestamp: m.timestamp
        }))
      })
<<<<<<< HEAD
    } catch (error) {
      console.error("Failed to log support escalation:", error)
    }
<<<<<<< HEAD
  }
  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  }
=======
=======

        success: false,
        message: "I'm experiencing technical difficulties. Please try again later.";
      }
    }
  }
;
  const suggest_escalation = () =>: any {
    const escalation_message: Message = {
      id: `bot - escalation-${Date.now ()}`,
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
      timestamp: new Date ()},
    set_messages ((prev) => [...prev, escalation_message]);
;
    // Log this interaction for the support team;
    logSupportEscalation ();
  }
;
  const logSupportEscalation = async () => {
    try {
      // Send the conversation to the backend for logging;
      // This would be implemented in a real system;
      console.log ("Support escalation triggered", {
        conversation_history: messages.map (m => ({
          content: m.content,
          sender: m.sender,
          timestamp: m.timestamp;
        }));
      });

    } catch (error) {
      console.error ("Failed to log support escalation:", error);
    }
  }

    } catch (error) {
      console.error("Failed to log support escalation:", error)
    }

>>>>>>> main
  },

  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
  const handleEscalateToLiveAgent = () => {
    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to speak with a human agent"
        sender: "user"
        timestamp: new Date()
<<<<<<< HEAD
<<<<<<< HEAD
      }
      {
        id: `bot-${Date.now()}`
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";
        sender: "bot"
        timestamp: new Date()
      }
    ]);
=======
=======


>>>>>>> main
      },
      {
        id: `bot-${Date.now()}`,
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.",
        sender: "bot",
        timestamp: new Date()
      }
    ]),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
    // In a real implementation, this would trigger a live chat request
    toast({
      title: "Support request submitted"
      description: "A support agent will be with you shortly."})
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


  },



>>>>>>> main
  const handleEmailSupport = () => {
    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to email support"
        sender: "user"
        timestamp: new Date()
<<<<<<< HEAD
<<<<<<< HEAD
      }
=======
      },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


      },


>>>>>>> main
      {
        id: `bot-${Date.now()}`
        content: "Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours."
        sender: "bot"
        timestamp: new Date()
      }
    ])
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

  };

  const sendToAIAssistant = async (message: string) => {;
    try {;
      const response = await fetch("https://ziontechgroup && ziontechgroup.functions.supabase && supabase.co/functions/v1/ai-chat", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json"};
        body: JSON && JSON.stringify({ ;
          messages: [{ role: "user", content: message }] ;
        })});

      if (!response && response.ok) {;
        return {;
          success: false,;
          message: "I'm having trouble connecting to my knowledge base right now.";
        }
      }

      const data = await response && response.json();
      return {;
        success: true,;
        message: data && data.message;
      }
    } catch (error) {;
      console && console.error("Error in AI chat:", error);
      return {;
        success: false,;
        message: "I'm experiencing technical difficulties. Please try again later.";
      }
    }
  };

=======

  },


>>>>>>> main
  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

  },;

  const suggestEscalation = () => {;
    const escalationMessage: Message = {;
      id: `bot-escalation-${Date && Date.now()}`,;
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",;
      sender: "bot",;
      timestamp: new Date()},;

    setMessages((prev) => [...prev, escalationMessage]);

    // Log this interaction for the support team;
    logSupportEscalation();
  };

>>>>>>> main
  const logSupportEscalation = async () => {;
    try {;
      // Send the conversation to the backend for logging;
      // This would be implemented in a real system;
<<<<<<< HEAD
      // // // console.log("Support escalation triggered", {;
        conversationHistory: messages.map(m => ({;
          content: m.content,;
          sender: m.sender,;
          timestamp: m.timestamp;
        }));
      });
    } catch (error) {;
      console.error("Failed to log support escalation:", error);
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
=======
      console && console.log("Support escalation triggered", { ;
        conversationHistory: messages && messages.map(m => ({;
          content: m && m.content,;
          sender: m && m.sender,;
          timestamp: m && m.timestamp;
        }));
      });
    } catch (error) {;
      console && console.error("Failed to log support escalation:", error);
    }
  };

  const handleQuickReply = (text: string) => {;
    handleSendMessage(text);
  };

  const handleEscalateToLiveAgent = () => {;
    setMessages((prev) => [;
      ...prev, ;
      {;
        id: `user-${Date && Date.now()}`,;
        content: "I'd like to speak with a human agent",;
        sender: "user",;
        timestamp: new Date();
      };
      {;
        id: `bot-${Date && Date.now()}`,;
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";
>>>>>>> main
        sender: "bot",;
        timestamp: new Date();
      }
    ]);
<<<<<<< HEAD
  },;
  return (;
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;
          {messages.map((message) => (;
            <ChatMessage;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

    // In a real implementation, this would trigger a live chat request;
    toast({;
      title: "Support request submitted",;
      description: "A support agent will be with you shortly."});
  };

  const handleEmailSupport = () => {;
    setMessages((prev) => [;
      ...prev, ;
      {;
        id: `user-${Date && Date.now()}`,;
        content: "I'd like to email support",;
        sender: "user",;
        timestamp: new Date();
      };
      {;
        id: `bot-${Date && Date.now()}`,;
        content: "Please send your question to support@ziontechgroup && ziontechgroup.com. Our team will get back to you within 24 hours.",;
        sender: "bot",;
        timestamp: new Date();
      }
    ]);
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;

          {messages.map((message) => (;
            <ChatMessage;


>>>>>>> main
              key={message.id}
              message={message.content}
              isUser={message.sender === "user"}
              timestamp={message.timestamp}
            />
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

          

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
          {isLoading && (
            <div className="flex items-center justify-center py-2">
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />
            </div>
          )}
        </div>
      </ScrollArea>
      {messages.length === 1 && (
        <div className="px-4 py-3">
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Suggested questions:
          </p>
          <div className="flex flex-wrap gap-2">
            {QUICK_REPLIES.map((reply) => (
<<<<<<< HEAD
              <QuickReplyButton
                key={reply.id}
                text={reply.text}
                onClick={() => handleQuickReply(reply.text)}
              />
            ))}
          </div>
        </div>
      )}
<<<<<<< HEAD
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======

          {isLoading && (;
            <div className="flex items-center justify-center py-2">;
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;
            </div>;
          )}
        </div>;
      </ScrollArea>;

      {messages && messages.length === 1 && (;
        <div className="px-4 py-3">;
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;
            Suggested questions:;
          </p>;
          <div className="flex flex-wrap gap-2">;
            {QUICK_REPLIES && QUICK_REPLIES.map((reply) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <QuickReplyButton
                key={reply && reply.id}
                text={reply && reply.text}
                onClick={() => handleQuickReply(reply && reply.text)}
              />;
            ))}
          </div>;
        </div>;
      )}


      


>>>>>>> main
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
            >
              Chat with Live Agent
            </Button>
<<<<<<< HEAD
            <Button
              onClick={handleEmailSupport}
              size="sm"
              variant="outline"
            >
              Email Support
            </Button>
          </div>
        </div>
      )}
      <div className={cn(
        "p-4 border-t"
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200"
      )}>
        <form
          onSubmit={(e) => {
            e.preventDefault(),
            handleSendMessage()
          }}
          className="flex items-center gap-2"
        >
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question..."
            className={cn(
<<<<<<< HEAD
              "flex-1";
              theme === "dark"
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple"

=======
              "flex-1",
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======

      {failedAttempts >= 3 && (;
        <div className="px-4 py-3 border-t border-zion-purple/10">;
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;
            Need more help?;
          </p>;
          <div className="flex gap-2">;
            <Button
              onClick={handleEscalateToLiveAgent}
              size="sm"
              className="bg-zion-purple hover:bg-zion-purple-light text-white">;
              Chat with Live Agent;
            </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Button
              onClick={handleEmailSupport}
              size="sm"
              variant="outline">;
              Email Support;
            </Button>;
          </div>;
        </div>;
      )}


      <divclassName={cn(
        "p-4 border-t", 
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200"
      )}>;
        <form
          onSubmit={(e) => {;
            e && e.preventDefault();
            handleSendMessage();

          }}
          className="flex items-center gap-2";
        >;
          <Input
            ref={inputRef}
            value={inputValue}

            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question..."
            className={cn(

              "flex-1",
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 


>>>>>>> main
                : "bg-white border-gray-200"
            )}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading |!inputValue.trim()}
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;
=======


>>>>>>> main
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
              size="sm"
              variant="outline"
            >
              Email Support
            </Button>
          </div>
        </div>
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
          className="flex items-center gap-2"
        >
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question...";
            className={cn(;
              "flex-1";
              theme === "dark";
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple";
<<<<<<< HEAD
                : "bg-white border-gray-200";
            )}
          />;
          <Button;
            type="submit";
            size="icon";
            disabled={isLoading || !inputValue.trim()}
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white";
          >;
=======

                : "bg-white border-gray-200";
            )}
          />;
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !inputValue && inputValue.trim()}
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white">;
>>>>>>> main
            <Send className="h-4 w-4" />;
          </Button>;
        </form>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
  const handleQuickReply = (text: string) =>: any {
    handleSendMessage (text);
  }
;
  const handleEscalateToLiveAgent = () =>: any {
    set_messages ((prev) => [;
      ...prev,
      {
        id: `user-${Date.now ()}`,
        content: "I'd like to speak with a human agent",
        sender: "user",
        timestamp: new Date ();
      }
      {
        id: `bot-${Date.now ()}`,
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";
        sender: "bot",
        timestamp: new Date ();
      }
    ]);
;
    // In a real implementation, this would trigger a live chat request;
    toast ({
      title: "Support request submitted",
      description: "A support agent will be with you shortly."});
  }
;
  const handleEmailSupport = () =>: any {
    set_messages ((prev) => [;
      ...prev,
      {
        id: `user-${Date.now ()}`,
        content: "I'd like to email support",
        sender: "user",
        timestamp: new Date ();
      }
      {
        id: `bot-${Date.now ()}`,
        content: "Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours.",
        sender: "bot",
        timestamp: new Date ();
      }
    ]);
  }
;
  return (
    <div className="flex flex - col h - full">;
      <ScrollArea className="flex - 1 p - 4" ref={scrollAreaRef}>;
        <div className="flex flex - col gap - 4">;
          {messages.map ((message) => (
            <ChatMessage;
              key={message.id}
              message={message.content}
              is_user={message.sender === "user"}
              timestamp={message.timestamp}
            />))}
          {is_loading && (
            <div className="flex items - center justify - center py - 2">;
              <Loader2 className="h - 5 w - 5 animate - spin text - zion - purple" />;
            </div>)}
        </div>;
      </ScrollArea>;
      {messages.length === 1 && (
        <div className="px - 4 py - 3">;
          <p className={cn ("text - sm mb - 2", theme === "dark" ? "text - gray - 300" : "text - gray - 600")}>;
            Suggested questions:;
          </p>;
          <div className="flex flex - wrap gap - 2">;
            {QUICK_REPLIES.map ((reply) => (
              <QuickReplyButton;
                key={reply.id}
                text={reply.text}
                on_click={() => handleQuickReply (reply.text)}
              />))}
          </div>;
        </div>)}
      {failed_attempts >= 3 && (
        <div className="px - 4 py - 3 border - t border - zion - purple / 10">;
          <p className={cn ("text - sm mb - 2 font - medium", theme === "dark" ? "text - gray - 300" : "text - gray - 600")}>;
            Need more help?;
          </p>;
          <div className="flex gap - 2">;
            <Button;
              on_click={handleEscalateToLiveAgent}
              size="sm";
              className="bg - zion - purple hover:bg - zion - purple - light text - white";
            >;
              Chat with Live Agent;
            </Button>;
            <Button;
              on_click={handleEmailSupport}
              size="sm";
              variant="outline";
            >;
              Email Support;
            </Button>;
          </div>;
        </div>)}
      <div className={cn (
        "p - 4 border - t",
        theme === "dark" ? "border - zion - blue - light" : "border - gray - 200")}>;
        <form;
          on_submit={(e) => {
            e.prevent_default ();
            handleSendMessage ();
          }}
          className="flex items - center gap - 2";
        >;
          <Input;
            ref={input_ref}
            value={input_value}
            on_change={(e) => setInputValue (e.target.value)}
            placeholder="Type your question...";
            className={cn (
              "flex - 1";
              theme === "dark";
                ? "bg - zion - blue border - zion - blue - light focus - visible:ring - zion - purple";
                : "bg - white border - gray - 200")}
          />;
          <Button;
            type="submit";
            size="icon";
            disabled={is_loading || !input_value.trim ()}
            className="bg - zion - cyan hover: bg - zion - cyan / 80 text - white";
          >;
            <Send className="h - 4 w - 4" />;
          </Button>;
        </form>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
