

import React, { useState, useRef, useEffect } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
}
export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome"
      content: "Hi! How can I help you?"
      sender: "bot"
      timestamp: new Date()}])
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
},

export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
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

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      }
    } finally {;
      setIsLoading(false);
    }
  }
  },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  };
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {

          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
      


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      const data = await response.json();
      return {
        success: true
        message: data.message

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      }
    } catch (error) {
      console.error ("Error in AI chat:", error);
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      }
      console.error("Error in AI chat:", error);
      return {
        success: false
        message: "I'm experiencing technical difficulties. Please try again later."
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        conversationHistory: messages.map(m => ({
          content: m.content
          sender: m.sender
          timestamp: m.timestamp
        }))
      })

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

  const handleEscalateToLiveAgent = () => {
    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to speak with a human agent"
        sender: "user"
        timestamp: new Date()

    // In a real implementation, this would trigger a live chat request
    toast({
      title: "Support request submitted"
      description: "A support agent will be with you shortly."})

  const handleEmailSupport = () => {
    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to email support"
        sender: "user"
        timestamp: new Date()

      {
        id: `bot-${Date.now()}`
        content: "Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours."
        sender: "bot"
        timestamp: new Date()
      }
    ])

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;

          {messages.map((message) => (;
            <ChatMessage;
              key={message.id}
              message={message.content}
              isUser={message.sender === "user"}
              timestamp={message.timestamp}
            />
          ))}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
              <QuickReplyButton
                key={reply.id}
                text={reply.text}
                onClick={() => handleQuickReply(reply.text)}
              />
            ))}
          </div>
        </div>
      )}

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
              "flex-1";
              theme === "dark"
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple"

=======
              "flex-1",
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

                : "bg-white border-gray-200";
            )}
          />;
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !inputValue && inputValue.trim()}
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white">;
            <Send className="h-4 w-4" />;
          </Button>;
        </form>;
      </div>;
    </div>;
  );
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
