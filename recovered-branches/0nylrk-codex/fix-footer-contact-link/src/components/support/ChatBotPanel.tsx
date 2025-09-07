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


import React, { useState, useRef, useEffect } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton",


// Define suggested quick replies

const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" }
  { id: "match", text: "How do I get matched?" }
  { id: "billing", text: "Billing help" }]
type Message = {
  id: string
  content: string
  sender: "user" | "bot"

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


  // Auto-scroll to bottom when messages change

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {


      setMessages((prev) => [...prev, botMessage]);
      // Check if the request was successful;
      if (!response.success) {}
        setFailedAttempts((prev) => prev + 1);


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


  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
    const userMessage: Message = {

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
        sender: "bot",
        timestamp: new Date()},
      
      setMessages((prev) => [...prev, botMessage]),
      
      // Check if the request was successful;
      if (!response.success) {}
        setFailedAttempts((prev) => prev + 1),
        
        // After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {}
          suggestEscalation()

        }
      } else {}
        // Reset failed attempts if successful;
        setFailedAttempts (0);
      }

    } catch (error) {;"

      console && console.error("Error in AI chat:", error);
      toast({;"
        variant: "destructive",;"
        title: "Communication Error",'"
        description: "We're having trouble connecting to our support service."}),;
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {;
        suggestEscalation();
    } catch (error) {
    } catch (error) {"
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

        }
      } else {
        // Reset failed attempts if successful
        setFailedAttempts(0)
      }

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

      }
    } finally {}
      setIsLoading(false)
    }

      }
    } finally {
      setIsLoading(false)
    }


  },

  };
  },


  const sendToAIAssistant = async (message: string) => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message}] 
        })}),
      
      if (!response.ok) {
        return {
          success: false
          message: "I'm having trouble connecting to my knowledge base right now."
        }

          "Content-Type": "application/json"},
        body: JSON.stringify({ "
          messages: [{ role: "user", content: message }] 
        })}),


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

      if (!response.ok) {
        return {
          success: false
          message: "I'm having trouble connecting to my knowledge base right now."
        }

      


          message: "I'm having trouble connecting to my knowledge base right now."
        };
      }
      
      const data = await response.json();
      return {
        success: true

      const data = await response.json();
      return {
        success: true
        message: data.message
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

  const suggestEscalation = () => {
    const escalationMessage: Message = {
      id: `bot-escalation-${Date.now()}`,
      content:
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",

      sender: "bot",
      timestamp: new Date()},

    setMessages((prev) => [...prev, escalationMessage]),

    logSupportEscalation()
  },


  const logSupportEscalation = async () => {
    try {
      // Send the conversation to the backend for logging
      // This would be implemented in a real system


        conversationHistory: messages.map(m => ({
          content: m.content
          sender: m.sender
          timestamp: m.timestamp
        }))
      })
        success: false,
        message: "I'm experiencing technical difficulties. Please try again later.";

  const handleEscalateToLiveAgent = () => {

    setMessages((prev) => [
      ...prev
      {
        id: `user-${Date.now()}`
        content: "I'd like to speak with a human agent"

        sender: "user"


      {

        id: `bot-${Date.now()}`
        content: "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.";

        sender: "bot"
        timestamp: new Date()

    // In a real implementation, this would trigger a live chat request
    toast({
      title: "Support request submitted"
      description: "A support agent will be with you shortly."})

  },


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


  },

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
  },;

  const suggestEscalation = () => {;
    const escalationMessage: Message = {;`
      id: `bot-escalation-${Date && Date.now()}`,;'"
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",;"
      sender: "bot",;
      timestamp: new Date()},;

  const logSupportEscalation = async () => {;
    try {;
      // Send the conversation to the backend for logging;
      // This would be implemented in a real system;


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

  return (
    <div className="flex flex-col h-full">;
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;
        <div className="flex flex-col gap-4">;


              key={message.id}

              message={message.content}

              isUser={message.sender === "user"}
              timestamp={message.timestamp}
            />


          {isLoading && (

            <div className="flex items-center justify-center py-2">

              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />
            </div>
          )}
        </div>
      </ScrollArea>
      {messages.length === 1 && ("
        <div className="px-4 py-3">"
          <p className={cn("text-sm mb-2", theme === "dark" ? "text-gray-300" : "text-gray-600")}>
            Suggested questions:
          </p>"
          <div className="flex flex-wrap gap-2">


          {isLoading && (;
            <div className="flex items-center justify-center py-2">;

              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;
            </div>;
          )}
        </div>;
      </ScrollArea>;

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


              Email Support;
            </Button>;
          </div>;
        </div>;


                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 

                : "bg-white border-gray-200"

            )}
          />
          <Button"
            type="submit""
            size="icon"
            disabled={isLoading |!inputValue.trim()}"
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
          >"
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )

              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;

              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;

}
              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;

              theme === "dark" ;
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" ;


}
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

  );
}
;
}
}
;

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
}
