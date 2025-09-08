




      sender: "bot",


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











        variant: "destructive",

import { Send, Loader2 } from "lucide-react",;
import { useTheme } from "@/hooks/useTheme",;
// Define suggested quick replies

        description: "We're having trouble connecting to our support service."}),
      
      setFailedAttempts((prev) => prev + 1),
      if (failedAttempts >= 2) {}
        suggestEscalation()














      








        success: false,
        message: "I'm experiencing technical difficulties. Please try again later.";


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

    } catch (error) {
      console.error("Failed to log support escalation:", error)
    }



  },


  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  },



      }
    ]),
    








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









          ))}




      


            <Button
              onClick={handleEmailSupport}
              size="sm"
              variant="outline">;




      )}


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




