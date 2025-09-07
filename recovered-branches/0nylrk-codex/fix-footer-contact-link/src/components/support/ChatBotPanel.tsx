<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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
// Define suggested quick replies
=======
<<<<<<< HEAD

=======


import { Send, Loader2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Send, Loader2 } from "lucide-react",
import { useTheme } from "@/hooks/useTheme",
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Define suggested quick replies

const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" }
  { id: "match", text: "How do I get matched?" }
  { id: "billing", text: "Billing help" }]
type Message = {
  id: string
  content: string
  sender: "user" | "bot"

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
const QUICK_REPLIES = ["
  { id: "hire", text: "How do I hire?" }"
  { id: "match", text: "How do I get matched?" }"
  { id: "billing", text: "Billing help" }]
type Message = {}
  id: string;
  content: string"
  sender: "user" | "bot"
  timestamp: Date;

};

export function ChatBotPanel() {;
  const [messages, setMessages] = useState<Message[]>([;
    {;
      id: "welcome",;
      content: "Hi! How can I help you?",;
      sender: "bot",;
      timestamp: new Date()}]),;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [inputValue, setInputValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

=======
  const { theme } = useTheme();
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
},

export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi! How can I help you?",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      sender: "bot",
<<<<<<< HEAD
      timestamp: new Date()}]),
  const [inputValue, setInputValue] = useState($2);
  const [isLoading, setIsLoading] = useState($2);
  const [failedAttempts, setFailedAttempts] = useState($2);
  const scrollAreaRef = $2;
  const inputRef = $2;
  const { theme } = useTheme($2);
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages]),

=======
<<<<<<< HEAD
      timestamp: new Date()}]),;
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
      timestamp: new Date()}]),
  const [inputValue, setInputValue] = useState(""),
  const [isLoading, setIsLoading] = useState(false),
  const [failedAttempts, setFailedAttempts] = useState(0),
  const scrollAreaRef = useRef<HTMLDivElement>(null),
  const inputRef = useRef<HTMLInputElement>(null),
  const { theme } = useTheme(),
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Auto-scroll to bottom when messages change

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {

<<<<<<< HEAD
      id: `user-${Date.now()}`
      content: text"
      sender: "user"
      timestamp: new Date()}
    setMessages((prev) => [...prev, userMessage]);"
    setInputValue("");
    setIsLoading(true);
    try {}
      // Call the OpenAI-powered support function;
      const response = await sendToAIAssistant(text);
      const botMessage: Message = {}`
        id: `bot-${Date.now()}`"
        content: response.message |"Sorry, I couldn't process your request. Please try again.";"
        sender: "bot"
        timestamp: new Date()}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setMessages((prev) => [...prev, botMessage]);
      // Check if the request was successful;
      if (!response.success) {}
        setFailedAttempts((prev) => prev + 1);
<<<<<<< HEAD

=======
        // After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {;
          suggestEscalation();
        }
      } else {;
        // Reset failed attempts if successful;
        setFailedAttempts(0);
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [input_value, setInputValue] = useState ("");
  const [is_loading, setIsLoading] = useState (false);
  const [failed_attempts, setFailedAttempts] = useState (0);
  const scrollAreaRef = useRef < HTMLDivElement>(null);
  const input_ref = useRef < HTMLInputElement>(null);
  const { theme } = use_theme ();
;
  // Auto - scroll to bottom when messages change;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      scrollAreaRef.current.scroll_top = scrollAreaRef.current.scroll_height;
    }
  }, [messages]);
;
  // Focus input when component mounts;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      input_ref.current.focus ();
    }
  }, []);
<<<<<<< HEAD

=======
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

<<<<<<< HEAD
    }
  }, [messages]);
>>>>>>> merged-prs-20250907-203621
  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
<<<<<<< HEAD
  }, []),

  const handleSendMessage = $2;
    const userMessage: Message = $2;
      content: text,
      sender: "user",
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, userMessage]),
    setInputValue($2);
    setIsLoading($2);
    try {
      // Call the OpenAI-powered support function
      const response = await sendToAIAssistant($2);
      const botMessage: Message = $2;
        content: response.message || "Sorry, I couldn't process your request. Please try again.",
=======
  }, []);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      id: `user-${Date.now()}`,
      content: text,"
      sender: "user",
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, userMessage]),"
    setInputValue(""),
    setIsLoading(true),
    
    try {}
      // Call the OpenAI-powered support function;
      const response = await sendToAIAssistant(text),
      
      const botMessage: Message = {}`
        id: `bot-${Date.now()}`,'"
        content: response.message || "Sorry, I couldn't process your request. Please try again.","
>>>>>>> merged-prs-20250907-203621
        sender: "bot",
        timestamp: new Date()},
      
      setMessages((prev) => [...prev, botMessage]),
      
<<<<<<< HEAD
      // Check if the request was successful
      if (!response.success) {
        setFailedAttempts((prev) => prev + 1),
        
        // After 3 failed attempts, suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation()
=======
      // Check if the request was successful;
      if (!response.success) {}
        setFailedAttempts((prev) => prev + 1),
        
        // After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {}
          suggestEscalation()
<<<<<<< HEAD
=======

        }
      } else {}
        // Reset failed attempts if successful;
        setFailedAttempts (0);
      }

<<<<<<< HEAD
    } catch (error) {;"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      console && console.error("Error in AI chat:", error);
      toast({;"
        variant: "destructive",;"
        title: "Communication Error",'"
        description: "We're having trouble connecting to our support service."}),;
<<<<<<< HEAD
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {;
        suggestEscalation();
=======

<<<<<<< HEAD
    } catch (error) {"
=======

      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {;
        suggestEscalation();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      console.error("Error in AI chat:", error),

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

>>>>>>> merged-prs-20250907-203621
        }
      } else {
        // Reset failed attempts if successful
        setFailedAttempts(0)
      }

<<<<<<< HEAD
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
      } else {
        // Reset failed attempts if successful
        setFailedAttempts(0)
      }
    } catch (error) {
      console.error("Error in AI chat:", error),
      toast({
        variant: "destructive"
        title: "Communication Error"
        description: "We're having trouble connecting to our support service."})
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {
        suggestEscalation()
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        variant: "destructive",

import { Send, Loader2 } from "lucide-react",;
import { useTheme } from "@/hooks/useTheme",;
// Define suggested quick replies

        description: "We're having trouble connecting to our support service."}),
      
      setFailedAttempts((prev) => prev + 1),
      if (failedAttempts >= 2) {}
        suggestEscalation()
<<<<<<< HEAD
    } catch (error) {;
      console.error("Error in AI chat:", error),;
      toast({;
        variant: "destructive",;
        title: "Communication Error",;
        description: "We're having trouble connecting to our support service."}),;
      setFailedAttempts((prev) => prev + 1),;
      if (failedAttempts >= 2) {;
        suggestEscalation();
        variant: "destructive",
        title: "Communication Error",
        description: "We're having trouble connecting to our support service."}),
      
      setFailedAttempts((prev) => prev + 1),
      if (failedAttempts >= 2) {
        suggestEscalation()
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
        description: "We're having trouble connecting to our support service."}),;

      setFailedAttempts((prev) => prev + 1),;
      if (failedAttempts >= 2) {;
        suggestEscalation();

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    } finally {}
      setIsLoading(false)
    }

      }
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  },

=======

<<<<<<< HEAD
  },

  };
  },

=======
<<<<<<< HEAD
      }
    } finally {
      setIsLoading(false)
    }
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  };
  },


<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
<<<<<<< HEAD
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message}] 
        })}),
      
      if (!response.ok) {
        return {
          success: false
          message: "I'm having trouble connecting to my knowledge base right now."
        }
          message: "I'm having trouble connecting to my knowledge base right now."
        }
      }
      
      const data = await response.json($2);
      return {
        success: true
        message: data.message
      }
    } catch (error) {
      console.error($2);
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      }
    }
  },

  const suggestEscalation = $2;
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
      console.log("Support escalation triggered", { 
        conversationHistory: messages.map(m = $2;
          sender: m.sender,
          timestamp: m.timestamp
        }))
      })
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
          "Content-Type": "application/json"}
        body: JSON.stringify({
          messages: [{ role: "user", content: message }]
        })});
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          "Content-Type": "application/json"},
        body: JSON.stringify({ "
          messages: [{ role: "user", content: message }] 
        })}),
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      if (!response.ok) {}
        return {}
          success: false'"
          message: "I'm having trouble connecting to my knowledge base right now."
        }

      const data = await response.json();
      return {
        success: true
        message: data.message

      console.error ("Error in AI chat:", error);
      toast ({"
        variant: "destructive","
        title: "Communication Error",'"
        description: "We're having trouble connecting to our support service."}),
      setFailedAttempts ((prev) => prev + 1);
      // Check condition;
if ( {) {}
  $2;
}
        suggest_escalation ();
      }
    } finally {}
      setIsLoading (false);
    }
  }

;
  const sendToAIAssistant = async (message: string) => {}
    try {"
      const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {"
        method: "POST",
        headers: {"
          "Content - Type": "application / json"}
        body: JSON.stringify ({"
          messages: [{ role: "user", content: message }];
        })});
;
      // Check condition;
if ( {) {}
  $2;
}
        return {}
          success: false,'"
          message: "I'm having trouble connecting to my knowledge base right now.";
        }
      }
      const data = await response.json ();
      return {}
        success: true,
        message: data.message;

      }
    } catch (error) {"
      console.error ("Error in AI chat:", error);

        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      }
      console.error("Error in AI chat:", error);
      return {
        success: false
        message: "I'm experiencing technical difficulties. Please try again later."

  };

  }
  const suggestEscalation = () => {}
    const escalationMessage: Message = {}`
      id: `bot-escalation-${Date.now()}`'"
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?""
      sender: "bot"
      timestamp: new Date()}
    setMessages((prev) => [...prev, escalationMessage]);
    // Log this interaction for the support team;
    logSupportEscalation()
  }
  };
      };
    }
  },
      };
    }
  },

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (!response.ok) {
        return {
          success: false
          message: "I'm having trouble connecting to my knowledge base right now."
        }
<<<<<<< HEAD

      


          message: "I'm having trouble connecting to my knowledge base right now."
        };
      }
      
=======
      }

<<<<<<< HEAD
      const data = await response.json();
      return {
        success: true

=======

      


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const data = await response.json();
      return {
        success: true
        message: data.message
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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



      }
    } catch (error) {
      console.error ("Error in AI chat:", error);
      return {
;
      const data = await response.json(),;
      return {;
        success: true,;
        message: data.message;
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


  };

<<<<<<< HEAD
      }
    }
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
  };
      };
    }
  },
      };
    }
  },
=======
=======
      };
    }
  },



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const suggestEscalation = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`,
      content:
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",

      sender: "bot",
      timestamp: new Date()},

    setMessages((prev) => [...prev, escalationMessage]),

    logSupportEscalation()
  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const logSupportEscalation = async () => {
    try {
      // Send the conversation to the backend for logging
      // This would be implemented in a real system

<<<<<<< HEAD
=======
<<<<<<< HEAD
      // // // console.log("Support escalation triggered", { 


      console.log("Support escalation triggered", {
      // // // console.log("Support escalation triggered", { 
=======

      // // // console.log("Support escalation triggered", { 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        conversationHistory: messages.map(m => ({
          content: m.content
          sender: m.sender
          timestamp: m.timestamp
        }))
      })
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later.";
<<<<<<< HEAD
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
        conversationHistory: messages.map(m => ({}
          content: m.content;
          sender: m.sender;
          timestamp: m.timestamp;

      }
    }

    } catch (error) {"

      console.error ("Failed to log support escalation:", error);
    }
  }

=======

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
;
// Define suggested quick replies;
const QUICK_REPLIES = [;
  { id:"hire", text:"How do I hire?" },;
  { id:"match", text:"How do I get matched?" },;
  { id:"billing", text:"Billing help" }],;
;
type Message = {;
  id:string,;
  content:string,;
  sender:"user" | "bot",;
  timestamp:Date;
},;
;
export function ChatBotPanel() {;
  const [messages, setMessages] = useState<Message[]>([;
    {;
      id:"welcome",;
      content:"Hi! How can I help you?",;
      sender:"bot",;
      timestamp:new Date()}]),;
  const [inputValue, setInputValue] = useState(""),;
  const [isLoading, setIsLoading] = useState(false),;
  const [failedAttempts, setFailedAttempts] = useState(0),;
  const scrollAreaRef = useRef<HTMLDivElement>(null),;
  const inputRef = useRef<HTMLInputElement>(null),;
  const { theme } = useTheme(),;
;
  // Auto-scroll to bottom when messages change;
  useEffect(() => {;
    if (scrollAreaRef.current) {;
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight,;
    }
  }, [messages]),;
;
  // Focus input when component mounts;
  useEffect(() => {;
    if (inputRef.current) {;
      inputRef.current.focus(),;
    }
  }, []),;
;
  const handleSendMessage = async (text:string = inputValue) => {;
    if (!text.trim()) return,;
    ;
    const userMessage:Message = {;
      id:`user-${Date.now()}`,;
      content:text,;
      sender:"user",;
      timestamp:new Date()},;
    ;
    setMessages((prev) => [...prev, userMessage]),;
    setInputValue(""),;
    setIsLoading(true),;
    ;
    try {;
      // Call the OpenAI-powered support function;
      const response = await sendToAIAssistant(text),;
      ;
      const botMessage:Message = {;
        id:`bot-${Date.now()}`,;
        content:response.message || "Sorry, I couldn't process your request. Please try again.",;
        sender:"bot",;
        timestamp:new Date()},;
      ;
      setMessages((prev) => [...prev, botMessage]),;
      ;
      // Check if the request was successful;
      if (!response.success) {;
        setFailedAttempts((prev) => prev + 1),;
        ;
        // After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {;
          suggestEscalation(),;
        }
      } else {;
        // Reset failed attempts if successful;
        setFailedAttempts(0),;
      }
    } catch (error) {;
      console.error("Error in AI chat:", error),;
      toast({;
        variant:"destructive",;
        title:"Communication Error",;
        description:"We're having trouble connecting to our support service."}),;
      ;
      setFailedAttempts((prev) => prev + 1),;
      if (failedAttempts >= 2) {;
        suggestEscalation(),;
      }
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const sendToAIAssistant = async (message:string) => {;
    try {;
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {;
        method:"POST",;
        headers:{;
          "Content-Type":"application/json"},;
        body:JSON.stringify({ ;
          messages:[{ role:"user", content:message }] ;
        })}),;
      ;
      if (!response.ok) {;
        return {;
          success:false,;
          message:"I'm having trouble connecting to my knowledge base right now.";
        },;
      }
      ;
      const data = await response.json(),;
      return {;
        success:true,;
        message:data.message;
      },;
    } catch (error) {;
      console.error("Error in AI chat:", error),;
      return {;
        success:false,;
        message:"I'm experiencing technical difficulties. Please try again later.";
      },;
    }
    } catch (error) {
      console.error ("Failed to log support escalation:", error);
    }
  }
>>>>>>> merged-prs-20250907-203621
    } catch (error) {
      console.error("Failed to log support escalation:", error)
    }

<<<<<<< HEAD
  }
  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

<<<<<<< HEAD
  const handleQuickReply = $2;
  const handleEscalateToLiveAgent = $2;
      {
        id: `user-${Date.now()}`
        content: "I'd like to speak with a human agent"
        sender: "user"
        timestamp: new Date()
=======
  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  },

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleEscalateToLiveAgent = () => {

    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to speak with a human agent"

        sender: "user"

<<<<<<< HEAD
      {
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      }
      {
        id: `bot-${Date.now()}`
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";
        sender: "bot"
        timestamp: new Date()
<<<<<<< HEAD
=======
      }
    ]);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      },
      {
        id: `bot-${Date.now()}`,
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.",
        sender: "bot",
        timestamp: new Date()
>>>>>>> merged-prs-20250907-203621
      }
    ]),
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        id: `bot-${Date.now()}`
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";

        sender: "bot"
        timestamp: new Date()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // In a real implementation, this would trigger a live chat request
    toast({
      title: "Support request submitted"
      description: "A support agent will be with you shortly."})

  },

<<<<<<< HEAD
=======


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleEmailSupport = () => {

    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to email support"
        sender: "user"
        timestamp: new Date()
<<<<<<< HEAD
      }
    ])
  },

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
            <div className="flex items-center justify-center py-2">
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
      },


      }
      },
=======

      },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {
        id: `bot-${Date.now()}`
        content: "Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours."

        sender: "bot"
        timestamp: new Date()
      }
    ])

<<<<<<< HEAD
  },

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

  },


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },;

  const suggestEscalation = () => {;
    const escalationMessage: Message = {;`
      id: `bot-escalation-${Date && Date.now()}`,;'"
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",;"
      sender: "bot",;
      timestamp: new Date()},;
<<<<<<< HEAD
    setMessages((prev) => [...prev, escalationMessage]);
    // Log this interaction for the support team;
    logSupportEscalation();
  };
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

<<<<<<< HEAD
=======
    setMessages((prev) => [...prev, escalationMessage]);

    // Log this interaction for the support team;
    logSupportEscalation();
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const logSupportEscalation = async () => {;
    try {;
      // Send the conversation to the backend for logging;
      // This would be implemented in a real system;
<<<<<<< HEAD

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        sender: "bot",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

  return (
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;

<<<<<<< HEAD
=======
          {messages.map((message) => (;
            <ChatMessage;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              key={message.id}

              message={message.content}

              isUser={message.sender === "user"}
              timestamp={message.timestamp}
            />
<<<<<<< HEAD

=======
          ))}
<<<<<<< HEAD
          

          
          
=======

          

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {isLoading && (

            <div className="flex items-center justify-center py-2">

>>>>>>> merged-prs-20250907-203621
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />
            </div>
          )}
        </div>
      </ScrollArea>
<<<<<<< HEAD
      {messages.length === 1 && (
        <div className="px-4 py-3">
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Suggested questions:
          </p>
          <div className="flex flex-wrap gap-2">
            {QUICK_REPLIES.map((reply) => (
=======
      {messages.length === 1 && ("
        <div className="px-4 py-3">"
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Suggested questions:
          </p>"
          <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
=======
            {QUICK_REPLIES.map((reply) => (
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
      {failedAttempts >= 3 && (
        <div className="px-4 py-3 border-t border-zion-purple/10">
          <p className={cn("text-sm mb-2 font-medium", theme = $2;
=======
  },;
;
  const suggestEscalation = () => {;
    const escalationMessage:Message = {;
      id:`bot-escalation-${Date.now()}`,;
      content:;
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",;
      sender:"bot",;
      timestamp:new Date()},;
    ;
    setMessages((prev) => [...prev, escalationMessage]),;
    ;
    // Log this interaction for the support team;
    logSupportEscalation(),;
  },;
;
  const logSupportEscalation = async () => {;
    try {;
      // Send the conversation to the backend for logging;
      // This would be implemented in a real system;
      // // // console.log("Support escalation triggered", { ;
        conversationHistory:messages.map(m => ({;
          content:m.content,;
          sender:m.sender,;
          timestamp:m.timestamp;
        }));
      }),;
    } catch (error) {;
      console.error("Failed to log support escalation:", error),;
    }
  },;
;
  const handleQuickReply = (text:string) => {;
    handleSendMessage(text);
  },;
;
  const handleEscalateToLiveAgent = () => {;
    setMessages((prev) => [;
      ...prev, ;
      {;
        id:`user-${Date.now()}`,;
        content:"I'd like to speak with a human agent",;
        sender:"user",;
        timestamp:new Date();
      },;
      {;
        id:`bot-${Date.now()}`,;
        content:"I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.",;
        sender:"bot",;
        timestamp:new Date();
      }
    ]),;
    ;
    // In a real implementation, this would trigger a live chat request;
    toast({;
      title:"Support request submitted",;
      description:"A support agent will be with you shortly."}),;
  },;
;
  const handleEmailSupport = () => {;
    setMessages((prev) => [;
      ...prev, ;
      {;
        id:`user-${Date.now()}`,;
        content:"I'd like to email support",;
        sender:"user",;
        timestamp:new Date();
      },;
      {;
        id:`bot-${Date.now()}`,;
        content:"Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours.",;
        sender:"bot",;
        timestamp:new Date();
      }
    ]),;
  },;
;
  return (;
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;
          {messages.map((message) => (;
            <ChatMessage;
              key={message.id}              message={message.content}
              isUser={message.sender === &quot;user&quot}
              timestamp={message.timestamp}
            />;
          ))}
          ;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {isLoading && (;
            <div className="flex items-center justify-center py-2">;

              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;
            </div>;
          )}
        </div>;
      </ScrollArea>;
<<<<<<< HEAD

                key={reply && reply.id}
                text={reply && reply.text}
                onClick={() => handleQuickReply(reply && reply.text)}
              />;
            ))}
          </div>;
        </div>;
      )}

=======
      
<<<<<<< HEAD
      
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {failedAttempts >= 3 && (

        <div className="px-4 py-3 border-t border-zion-purple/10">

          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Need more help?
          </p>"
          <div className="flex gap-2">
            <Button;
              onClick={handleEscalateToLiveAgent}"
              size="sm""
              className="bg-zion-purple hover:bg-zion-purple-light text-white"
            >
              Chat with Live Agent;
            </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      {failedAttempts >= 3 && (;"
        <div className="px-4 py-3 border-t border-zion-purple/10">;"
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;
            Need more help?;
          </p>;"
          <div className="flex gap-2">;
            <Button;
              onClick={handleEscalateToLiveAgent}"
              size="sm""
              className="bg-zion-purple hover:bg-zion-purple-light text-white">;
              Chat with Live Agent;
            </Button>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Button
              onClick={handleEmailSupport}
              size="sm"
              variant="outline">;
<<<<<<< HEAD
      ;
      {messages.length === 1 && (;
        <div className="px-4 py-3">;
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" :"text-gray-600")}>;
            Suggested questions:;
          </p>;
          <div className="flex flex-wrap gap-2">;
            {QUICK_REPLIES.map((reply) => (;
              <QuickReplyButton;
                key={reply.id}
                text={reply.text}
                onClick={() => handleQuickReply(reply.text)}
              />;            ))}
          </div>;
        </div>;
      )}
      ;
      {failedAttempts >= 3 && (;
        <div className="px-4 py-3 border-t border-zion-purple/10">;
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" :"text-gray-600")}>;
            Need more help?;
          </p>;
          <div className="flex gap-2">;
            <Button ;
              onClick={handleEscalateToLiveAgent}
              size="sm";
              className="bg-zion-purple hover:bg-zion-purple-light text-white";
            >;
              Chat with Live Agent;
            </Button>;
            <Button ;
              onClick={handleEmailSupport}
              size="sm";
              variant="outline";
            >;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Email Support;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD

                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 

=======
      )}
<<<<<<< HEAD
=======


      <divclassName={cn(
        "p-4 border-t", 
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200"
      )}>;
        <form
          onSubmit={(e) => {;
            e && e.preventDefault();
            handleSendMessage();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          className="flex items-center gap-2";
        >;
          <Input
            ref={inputRef}
            value={inputValue}
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
>>>>>>> merged-prs-20250907-203621
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200"
      )}>
        <form
          onSubmit={(e) => {
<<<<<<< HEAD
            e.preventDefault($2);
            handleSendMessage()
          }}
          className = $2;
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
          >
=======
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
              "flex-1";
              theme === "dark"
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple"

              "flex-1",
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 
              "flex-1",
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 
=======

            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question..."
            className={cn(

              "flex-1",
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                : "bg-white border-gray-200"

            )}
          />
          <Button"
            type="submit""
            size="icon"
            disabled={isLoading |!inputValue.trim()}"
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
          >"
>>>>>>> merged-prs-20250907-203621
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
<<<<<<< HEAD
}
}
;
=======
<<<<<<< HEAD
            onChange={(e) => setInputValue(e && e.target.value)}
            placeholder="Type your question...";
            className={cn(;
              "flex-1";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;

              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;

<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
      {failedAttempts >= 3 && (;
        <div className="px-4 py-3 border-t border-zion-purple/10">;
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;
            Need more help?;
          </p>;
          <div className="flex gap-2">;
              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;

            <Send className="h-4 w-4" />;
        // Check condition;

if ( {) {
  $2;
}
          suggest_escalation ();
"
import React, { useState, useRef, useEffect } from "react",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { ScrollArea } from "@/components/ui/scroll-area",;""
import { Separator } from "@/components/ui/separator",;""
import { toast } from "@/components/ui/use-toast",;""
import { cn } from "@/lib/utils",;""
import { ChatMessage } from "./ChatMessage",;""
import { QuickReplyButton } from "./QuickReplyButton",;""
import { Send, Loader2 } from "lucide-react",;""
import { useTheme } from "@/hooks/useTheme",;"
// Define suggested quick replies;
const QUICK_REPLIES = [;"
  { id: "hire", text: "How do I hire?" },;""
  { id: "match", text: "How do I get matched?" },;"]"
  { id: "billing", text: "Billing help" }],;"
type Message = {;
  id: string,;
  content: string,;"
  sender: "user" | "bot",;"
  timestamp: Date;
},;
export function ChatBotPanel() {;
  const [messages, setMessages] = useState<Message[]>([;
</Message>)
  const scrollAreaRef = useRef<HTMLDivElement>(null),;
</HTMLDivElement>
  const inputRef = useRef<HTMLInputElement>(null),;
</HTMLInputElement>"
    <div className="flex flex-col h-full">"
</div>"
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>"
</ScrollArea>"
        <div className="flex flex-col gap-4">"
</div>
            <ChatMessage;
  },;

  const suggestEscalation = () => {;
</ChatMessage>"
    <div className="flex flex-col h-full">;"
</div>"
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;"
</ScrollArea>"
        <div className="flex flex-col gap-4">;"
</div>
            <ChatMessage;

              key={message.id}
              message={message.content}"
              isUser={message.sender === "user"}"
              timestamp={message.timestamp}
            />
</ChatMessage>"
            <div className="flex items-center justify-center py-2">"
</div>"
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />"
</Loader2>
            </div>
        </div>
      </ScrollArea>"
        <div className="px-4 py-3">"
</div>"
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>"
</p>
          </p>"
          <div className="flex flex-wrap gap-2">"
</div>"
            <div className="flex items-center justify-center py-2">;"
</div>"
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;"
</Loader2>
            </div>;
        </div>;
      </ScrollArea>;"
        <div className="px-4 py-3">;"
</div>"
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>;"
</p>
          </p>;"
          <div className="flex flex-wrap gap-2">;"
</div>
              <QuickReplyButton;
                key={reply && reply.id}
                text={reply && reply.text}
                onClick={() => handleQuickReply(reply && reply.text)}
</QuickReplyButton>
          </div>;
        </div>;"
        <div className="px-4 py-3 border-t border-zion-purple/10">"
</div>"
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" : "text-gray-600")}>"
</p>
          </p>"
          <div className="flex gap-2">"
</div>
            <Button;

            </Button>
          </div>
        </div>
      )}
;

        theme === "dark" ? "border-zion-blue-light" : "border-gray-200";

      )}>;
</div>
        <form;
          onSubmit={(e) => {;
            e.preventDefault();
            handleSendMessage();
<<<<<<< HEAD

=======
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
      ;
      <div className={cn(;
        "p-4 border-t", ;
        theme === "dark" ? "border-zion-blue-light" :"border-gray-200";
      )}>;
        <form ;
          onSubmit={(e) => {;
            e.preventDefault(),;
            handleSendMessage(),;
          }}
          className="flex items-center gap-2";
        >;
          <Input;
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question...";
            className={cn(;
              "flex-1",;
              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;
                :"bg-white border-gray-200";
            )}
          />;
          <Button ;
            type="submit";
            size="icon";
            disabled={isLoading || !inputValue.trim()}
            className="bg-zion-cyan hover:bg-zion-cyan/80 text-white";
          >;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <Send className="h-4 w-4" />;
</Input>
          <Button;"
            type="submit"""
            size="icon""
            disabled={isLoading || !inputValue && inputValue.trim()}"
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white">;"
</Button>"
            <Send className="h-4 w-4" />;"
</Send>

          </Button>;
        </form>;
      </div>;
    </div>;
<<<<<<< HEAD

<<<<<<< HEAD
}
            onChange={(e) => setInputValue(e && e.target.value)}
            placeholder="Type your question...";"
            className={cn(;
              "flex-1";"
;  ); type Message = {
  }
  "id": string;
"content": string;
export function ChatBotPanel() {
  }
  const [messages, setMessages] = useState<Message[]> ([ {
  //Auto-scroll to bottom when messages change useEffect ( () => {
  }
  if (scrollAreaRef.current) {
  }
  scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight 
}
}, [messages]);
//Focus input when component mounts useEffect ( () => {
  }
  if (inputRef.current) {
  }
  inputRef.current.focus () 
}
}, []);
  }
  if (!text.trim () ) return;
"id": `user-$ {`  }
  Date.now () 
}`;`"content": text;
setIsLoading (true);
  "id": `bot-$ {`  }
  Date.now () 
}`;`//After 3 failed attempts, suggest escalation if (failedAttempts >= 2) {
  }
  setFailedAttempts ( (prev) => prev + 1);
if (failedAttempts >= 2) {
  }
  suggestEscalation () 
}
}finally {
  }
  setIsLoading (false) 
}
};
  }
  try {
  }
  const response = await fetch (""https"://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {"
  }
  "method": "POST";"
"headers": {
  "Content-Type" : "application/json" "
};
"body": JSON.stringify ({
}) 
});
}const data = await response.json ();
return {
  }
  "success": true;
"message": data.message 
}
}catch (error) {
  
}
};
const suggestEscalation = () => {
  }
  }
  "id": `bot-escalation-$ {`  }
  Date.now () 
}`;`"content": //Log this interaction for the support team logSupportEscalation () 
};
  }
  try {
  //Send the conversation to the backend for logging //This would be implemented in a real system "conversationHistory": messages.map (m => ({
  }
  "content": m.content;
"sender": m.sender;
"timestamp": m.timestamp 
}) ) 
}) 
}catch (error) {
  
}
};
const handleQuickReply = ("text": string) => {
  }
  handleSendMessage (text) 
};
setMessages ( (prev) => [ ...prev, {
  }
  "id": `user-$ {`  }
  Date.now () 
}`;`"content": "I'd like to speak with a human agent";"
"sender": "user";"
"timestamp": new Date () 
};
"timestamp": new Date () 
}]);
//In a real implementation, this would trigger a live chat request 
};
  setMessages ( (prev) => [ ...prev, {
  }
  "id": `user-$ {`  }
  Date.now () 
}`;`
"content": "I'd like to email support";"
"sender": "user";"
"timestamp": new Date () 
};
"timestamp": new Date () 
}]) 
};
</div>) 
}</div> </ScrollArea> key= {
  }
  reply.id 
}text= {
  }
  reply.text 
}onClick= {
  () => handleQuickReply (reply.text) 
}/>) ) 
}</div> </div>) 
}Need more help? </p> <div className="flex gap-2" > <Button > Chat with Live Agent </Button> <Button > Email Support </Button> </div> </div>) "
}h-4 w-4" /> </Button> </form> </div> </div>) "
}
=======
<<<<<<< HEAD



}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );
}
;
}
}
;
=======
<<<<<<< HEAD
}
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  ); type Message = {
  id: string;
content: string;
export function ChatBotPanel () {
  const [messages, setMessages] = useState<Message[]> ([ {
  //Auto-scroll to bottom when messages change useEffect ( () => {
  if (scrollAreaRef.current) {
  scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight 
}
<<<<<<< HEAD
}, [messages]);
//Focus input when component mounts useEffect ( () => {
  if (inputRef.current) {
  inputRef.current.focus () 
}
}, []);
const handleSendMessage = async (text: string = inputValue) => {
  if (!text.trim () ) return;
id: `user-$ {
  Date.now () 
}`;
content: text;
setIsLoading (true);
  id: `bot-$ {
  Date.now () 
}`;
//After 3 failed attempts, suggest escalation if (failedAttempts >= 2) {
  setFailedAttempts ( (prev) => prev + 1);
if (failedAttempts >= 2) {
  suggestEscalation () 
}
}finally {
  setIsLoading (false) 
}
};
const sendToAIAssistant = async (message: string) => {
  try {
  const response = await fetch ("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
  method: "POST";
headers: {
  "Content-Type" : "application/json" 
};
body: JSON.stringify ({
  
}) 
});
}const data = await response.json ();
return {
  success: true;
message: data.message 
}
}catch (error) {
  
}
};
const suggestEscalation = () => {
  const escalationMessage: Message = {
  id: `bot-escalation-$ {
  Date.now () 
}`;
content: //Log this interaction for the support team logSupportEscalation () 
};
const logSupportEscalation = async () => {
  try {
  //Send the conversation to the backend for logging //This would be implemented in a real system conversationHistory: messages.map (m => ({
  content: m.content;
sender: m.sender;
timestamp: m.timestamp 
}) ) 
}) 
}catch (error) {
  
}
};
const handleQuickReply = (text: string) => {
  handleSendMessage (text) 
};
setMessages ( (prev) => [ ...prev, {
  id: `user-$ {
  Date.now () 
}`;
content: "I'd like to speak with a human agent";
sender: "user";
timestamp: new Date () 
};
timestamp: new Date () 
}]);
//In a real implementation, this would trigger a live chat request 
};
  setMessages ( (prev) => [ ...prev, {
  id: `user-$ {
  Date.now () 
}`;
content: "I'd like to email support";
sender: "user";
timestamp: new Date () 
};
timestamp: new Date () 
}]) 
};
</div>) 
}</div> </ScrollArea> key= {
  reply.id 
}text= {
  reply.text 
}onClick= {
  () => handleQuickReply (reply.text) 
}/>) ) 
}</div> </div>) 
}Need more help? </p> <div className="flex gap-2" > <Button > Chat with Live Agent </Button> <Button > Email Support </Button> </div> </div>) 
}h-4 w-4" /> </Button> </form> </div> </div>) 
}
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
