
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
=======
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
>>>>>>> origin/auto/autonomy-17186719616

// Define suggested quick replies
const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" },
  { id: "match", text: "How do I get matched?" },
<<<<<<< HEAD
  { id: "billing", text: "Billing help" }],

type Message = {
  id: string,
  content: string,
  sender: "user" | "bot",
  timestamp: Date
},
=======
  { id: "billing", text: "Billing help" },
];

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};
>>>>>>> origin/auto/autonomy-17186719616

export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi! How can I help you?",
      sender: "bot",
<<<<<<< HEAD
      timestamp: new Date()}]),
  const [inputValue, setInputValue] = useState(""),
  const [isLoading, setIsLoading] = useState(false),
  const [failedAttempts, setFailedAttempts] = useState(0),
  const scrollAreaRef = useRef<HTMLDivElement>(null),
  const inputRef = useRef<HTMLInputElement>(null),
  const { theme } = useTheme(),
=======
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
>>>>>>> origin/auto/autonomy-17186719616

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
<<<<<<< HEAD
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight,
    }
  }, [messages]),
=======
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);
>>>>>>> origin/auto/autonomy-17186719616

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
<<<<<<< HEAD
      inputRef.current.focus(),
    }
  }, []),

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return,
=======
      inputRef.current.focus();
    }
  }, []);

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return;
>>>>>>> origin/auto/autonomy-17186719616
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: text,
      sender: "user",
<<<<<<< HEAD
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, userMessage]),
    setInputValue(""),
    setIsLoading(true),
    
    try {
      // Call the OpenAI-powered support function
      const response = await sendToAIAssistant(text),
=======
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    try {
      // Call the OpenAI-powered support function
      const response = await sendToAIAssistant(text);
>>>>>>> origin/auto/autonomy-17186719616
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: response.message || "Sorry, I couldn't process your request. Please try again.",
        sender: "bot",
<<<<<<< HEAD
        timestamp: new Date()},
      
      setMessages((prev) => [...prev, botMessage]),
      
      // Check if the request was successful
      if (!response.success) {
        setFailedAttempts((prev) => prev + 1),
        
        // After 3 failed attempts, suggest escalation
        if (failedAttempts >= 2) {
          suggestEscalation(),
        }
      } else {
        // Reset failed attempts if successful
        setFailedAttempts(0),
      }
    } catch (error) {
      logErrorToProduction("Error in AI chat", error as Error, { component: 'ChatBotPanel' }),
      toast({
        variant: "destructive",
        title: "Communication Error",
        description: "We're having trouble connecting to our support service."}),
      
      setFailedAttempts((prev) => prev + 1),
      if (failedAttempts >= 2) {
        suggestEscalation(),
      }
    } finally {
      setIsLoading(false),
    }
  },
=======
        timestamp: new Date(),
      };
      
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
      logErrorToProduction("Error in AI chat", error as Error, { component: 'ChatBotPanel' });
      toast({
        variant: "destructive",
        title: "Communication Error",
        description: "We're having trouble connecting to our support service.",
      });
      
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {
        suggestEscalation();
      }
    } finally {
      setIsLoading(false);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616

  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
<<<<<<< HEAD
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
=======
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        }),
      });
>>>>>>> origin/auto/autonomy-17186719616
      
      if (!response.ok) {
        return {
          success: false,
          message: "I'm having trouble connecting to my knowledge base right now."
<<<<<<< HEAD
        },
      }
      
      const data = await response.json(),
      return {
        success: true,
        message: data.message
      },
    } catch (error) {
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' }),
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      },
    }
  },
=======
        };
      }
      
      const data = await response.json();
      return {
        success: true,
        message: data.message
      };
    } catch (error) {
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component: 'ChatBotPanel', functionName: 'ai-chat' });
      return {
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later."
      };
    }
  };
>>>>>>> origin/auto/autonomy-17186719616

  const suggestEscalation = () => {
    const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`,
      content: 
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
<<<<<<< HEAD
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, escalationMessage]),
    
    // Log this interaction for the support team
    logSupportEscalation(),
  },
=======
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, escalationMessage]);
    
    // Log this interaction for the support team
    logSupportEscalation();
  };
>>>>>>> origin/auto/autonomy-17186719616

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
<<<<<<< HEAD
      }),
    } catch (error) {
      logErrorToProduction("Failed to log support escalation", error as Error, { component: 'ChatBotPanel' }),
    }
  },

  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  },
=======
      });
    } catch (error) {
      logErrorToProduction("Failed to log support escalation", error as Error, { component: 'ChatBotPanel' });
    }
  };

  const handleQuickReply = (text: string) => {
    handleSendMessage(text);
  };
>>>>>>> origin/auto/autonomy-17186719616

  const handleEscalateToLiveAgent = () => {
    setMessages((prev) => [
      ...prev, 
      {
        id: `user-${Date.now()}`,
        content: "I'd like to speak with a human agent",
        sender: "user",
        timestamp: new Date()
      },
      {
        id: `bot-${Date.now()}`,
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.",
        sender: "bot",
        timestamp: new Date()
      }
<<<<<<< HEAD
    ]),
=======
    ]);
>>>>>>> origin/auto/autonomy-17186719616
    
    // In a real implementation, this would trigger a live chat request
    toast({
      title: "Support request submitted",
<<<<<<< HEAD
      description: "A support agent will be with you shortly."}),
  },
=======
      description: "A support agent will be with you shortly.",
    });
  };
>>>>>>> origin/auto/autonomy-17186719616

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
<<<<<<< HEAD
    ]),
  },
=======
    ]);
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
<<<<<<< HEAD
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
=======
>>>>>>> origin/auto/autonomy-17186719616
              key={message.id}
              message={message.content}
              isUser={message.sender === "user"}
              timestamp={message.timestamp}
<<<<<<< HEAD
            />;
=======
            />
>>>>>>> origin/auto/autonomy-17186719616
          ))}
          
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
<<<<<<< HEAD
              />;
            ))}
          </div>;
        </div>;
=======
              />
            ))}
          </div>
        </div>
>>>>>>> origin/auto/autonomy-17186719616
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
            >
              Chat with Live Agent
            </Button>
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
        "p-4 border-t", 
        theme === "dark" ? "border-zion-blue-light" : "border-gray-200"
      )}>
        <form 
          onSubmit={(e) => {
<<<<<<< HEAD
            e.preventDefault(),
            handleSendMessage(),
=======
            e.preventDefault();
            handleSendMessage();
>>>>>>> origin/auto/autonomy-17186719616
          }}
          className="flex items-center gap-2"
        >
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
<<<<<<< HEAD
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
=======
            className="bg-zion-cyan hover:bg-zion-cyan/80 text-white"
>>>>>>> origin/auto/autonomy-17186719616
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
<<<<<<< HEAD
  )
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


    handleSendMessage(text)

=======
  );
}
>>>>>>> origin/auto/autonomy-17186719616
