import React, { useState, useRef, useEffect } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton",
import { Send, Loader2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Send, Loader2 } from "lucide-react",
import { useTheme } from "@/hooks/useTheme",
// Define suggested quick replies

const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" }
  { id: "match", text: "How do I get matched?" }
  { id: "billing", text: "Billing help" }]
type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();    {
      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages]),


  // Auto-scroll to bottom when messages change

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {

          suggest_escalation ();        variant: "destructive",
        title: "Communication Error",
    } catch (error) {;
      console.error("Error in AI chat:", error),;
      toast({;
        variant: "destructive",;
        title: "Communication Error",,
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

  };
  },

  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
      

      const data = await response.json();
      return {
        success: true
        message: data.message  const suggestEscalation = () => {
    const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`,
      content:
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",

      sender: "bot",
      timestamp: new Date()},

    setMessages((prev) => [...prev, escalationMessage]),

    logSupportEscalation()
  },
        conversationHistory: messages.map(m => ({
          content: m.content
          sender: m.sender
          timestamp: m.timestamp
        }))
      })
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
      });  const handleEscalateToLiveAgent = () => {
    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to speak with a human agent"

        sender: "user"
        timestamp: new Date()      {
        id: `bot-${Date.now()}`
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";
        sender: "bot"
        timestamp: new Date()
      }  const handleEmailSupport = () => {
    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to email support"
        sender: "user"
        timestamp: new Date()

      },
  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
  const logSupportEscalation = async () => {;
    try {;
      // Send the conversation to the backend for logging;
      // This would be implemented in a real system;
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
    handleSendMessage(text)
};

  const handleEscalateToLiveAgent = () => {;
    setMessages((prev) => [;
      ...prev, ;
      {;
        id: `user-${Date && Date.now()}`,;
        content: "I'd like to speak with a human agent",;
        sender: "user",;
        timestamp: new Date()
};
      {;
        id: `bot-${Date && Date.now()}`,;
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";        sender: "bot",;
        timestamp: new Date();
      }
    ]);

    // In a real implementation, this would trigger a live chat request;
    toast({;
      title: "Support request submitted",,
  description: "A support agent will be with you shortly."})
};

  const handleEmailSupport = () => {;
    setMessages((prev) => [;
      ...prev, ;
      {;
        id: `user-${Date && Date.now()}`,;
        content: "I'd like to email support",;
        sender: "user",;
        timestamp: new Date()
};
      {;
        id: `bot-${Date && Date.now()}`,;
        content: "Please send your question to support@ziontechgroup && ziontechgroup.com. Our team will get back to you within 24 hours.",;
        sender: "bot",;
        timestamp: new Date();
      }
    ])
};

    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;              key={message.id}
              message={message.content}

              isUser={message.sender === "user"}
              timestamp={message.timestamp}
            />
          ))}          {isLoading && (
            <div className="flex items-center justify-center py-2">




              Email Support;
            </Button>;
          </div>;
        </div>;
      )}                : "bg-white border-gray-200"
            )}
          />
          <Button"
            type="submit""
            size="icon"
            disabled={isLoading |!inputValue.trim()}"
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
          >"

