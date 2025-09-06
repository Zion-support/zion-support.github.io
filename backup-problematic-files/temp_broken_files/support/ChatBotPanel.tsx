
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatBotPanel.tsx
=======
import React, { useState, useRef, useEffect } from "react",;
=======
import React, { useState, useRef, useEffect } from "react",;
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatBotPanel.tsx
=======
import React, { useState, useRef, useEffect } from "react",;
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { Separator } from "@/components/ui/separator",;
import { toast } from "@/components/ui/use-toast",;
import { cn } from "@/lib/utils",;
import { ChatMessage } from "./ChatMessage",;
import { QuickReplyButton } from "./QuickReplyButton",;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatBotPanel.tsx
import { Send, Loader2 } from "lucide-react",;
=======
import { Send, Loader2 } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatBotPanel.tsx
=======
import { Send, Loader2 } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatBotPanel.tsx
      console.error("Error in AI chat:", error),;
=======
      logErrorToProduction("Error in AI chat", error as Error, { component:'ChatBotPanel' }),;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatBotPanel.tsx
      toast({;
        variant:"destructive",;
        title:"Communication Error",;
        description:"We're having trouble connecting to our support service."}),;
=======
      logErrorToProduction("Error in AI chat", error as Error, { component:'ChatBotPanel' }),;
      toast({;
        variant:"destructive",;
        title:"Communication Error",,
  description:"We're having trouble connecting to our support service."}),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatBotPanel.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatBotPanel.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      }
      ;
      const data = await response.json(),;
      return {;
        success:true,;
        message:data.message;
      },;
    } catch (error) {;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatBotPanel.tsx
      console.error("Error in AI chat:", error),;
=======
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component:'ChatBotPanel', functionName:'ai-chat' }),;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatBotPanel.tsx
=======
      logErrorToProduction("Error calling Supabase AI chat function", error as Error, { component:'ChatBotPanel', functionName:'ai-chat' }),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      return {;
        success:false,;
        message:"I'm experiencing technical difficulties. Please try again later.";
      },;
    }
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatBotPanel.tsx

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
      logDebug("Support escalation triggered", {;
        conversationHistory:messages.map(m => ({;
          content:m.content,;
          sender:m.sender,;
          timestamp:m.timestamp;
        })),;
        component:'ChatBotPanel';
      }),;
    } catch (error) {;
      logErrorToProduction("Failed to log support escalation", error as Error, { component:'ChatBotPanel' }),;
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
      title:"Support request submitted",,
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          {isLoading && (;
            <div className="flex items-center justify-center py-2">;
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;
            </div>;
          )}
        </div>;
      </ScrollArea>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatBotPanel.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatBotPanel.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              Email Support;
            </Button>;
          </div>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatBotPanel.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
          <Button;
            type="submit";
            size="icon";
            disabled={isLoading || !inputValue.trim()}
            className="bg-zion-cyan hover:bg-zion-cyan/80 text-white";
            aria-label="Send message";
          >;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatBotPanel.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <Send className="h-4 w-4" />;
          </Button>;
        </form>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/support/ChatBotPanel.tsx

}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ); type Message = {;
  id: string;
content: string;
export function ChatBotPanel () {;
  const [messages, setMessages] = useState<Message[]> ([ {;
  //Auto-scroll to bottom when messages change useEffect ( () => {;
  if (scrollAreaRef.current) {;
  scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight ;
}
}, [messages]);
//Focus input when component mounts useEffect ( () => {;
  if (inputRef.current) {;
  inputRef.current.focus () ;
}
}, []);
const handleSendMessage = async (text: string = inputValue) => {;
  if (!text.trim () ) return;
id: `user-$ {;
  Date.now () ;
}`;
content: text;
setIsLoading (true);
:temp_broken_files/support/ChatBotPanel.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/support/ChatBotPanel.tsx
  id: `bot-$ {;
  Date.now () ;
}`;
//After 3 failed attempts, suggest escalation if (failedAttempts >= 2) {;
  setFailedAttempts ( (prev) => prev + 1);
if (failedAttempts >= 2) {;
  suggestEscalation () ;
}
}finally {;
  setIsLoading (false) ;
}
};
const sendToAIAssistant = async (message: string) => {;
  try {;
<<<<<<< HEAD
  const response = await fetch ("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {";"  method: "POST","headers: {";"  "Content-Type" : "application/json" ;
=======
  const response = await fetch ("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {";"  method: "POST","headers: {";"  "Content-Type" : "application/json" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
body: JSON.stringify ({;
  ;
}) ;
});
:temp_broken_files/support/ChatBotPanel.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/support/ChatBotPanel.tsx
}const data = await response.json ();
return {;
  success: true;
message: data.message ;
}
}catch (error) {;
  ;
}
};
const suggestEscalation = () => {;
  const escalationMessage: Message = {;
  id: `bot-escalation-$ {;
  Date.now () ;
}`;
<<<<<<< HEAD
content: //Log this interaction for the support team logSupportEscalation () ;
=======
content: //Log this interaction for the support team logSupportEscalation () 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
const logSupportEscalation = async () => {;
  try {;
  //Send the conversation to the backend for logging //This would be implemented in a real system conversationHistory: messages.map (m => ({;
  content: m.content,  sender: m.sender, timestamp: m.timestamp ;
}) );
component: 'ChatBotPanel' ;
}
};
const handleEscalateToLiveAgent = () => {;
  setMessages ( (prev) => [ ...prev, {;
  id: `user-$ {;
  Date.now () ;"}`;'";"content: "I'd like to speak with a human agent",";"sender: "user",
<<<<<<< HEAD
timestamp: new Date () ;
};
timestamp: new Date () ;
}]);
//In a real implementation, this would trigger a live chat request ;
=======
timestamp: new Date () 
};
timestamp: new Date () ;
}]);
//In a real implementation, this would trigger a live chat request 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
:temp_broken_files/support/ChatBotPanel.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/support/ChatBotPanel.tsx
  setMessages ( (prev) => [ ...prev, {;
  id: `user-$ {;
  Date.now () ;"}`;'";"content: "I'd like to email support",";"sender: "user",
<<<<<<< HEAD
timestamp: new Date () ;
};
timestamp: new Date () ;
}]) ;
=======
timestamp: new Date () 
};
timestamp: new Date () ;
}]) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
</div>) ;
}</div> </ScrollArea> key= {;
  reply.id ;
}text= {;
  reply.text ;
}onClick={;
  () => handleQuickReply (reply.text) ;
<<<<<<< HEAD
}/>) ) ;"}</div> </div>) ";"}Need more help? </p> <div className="flex gap-2" > <Button > Chat with Live Agent </Button> <Button > Email Support </Button> </div> </div>) ";"}aria-label="Send message" h-4 w-4" /> </Button> </form> </div> </div>) ;"}'"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/support/ChatBotPanel.tsx
=======
}/>) ) ;"}</div> </div>) ";"}Need more help? </p> <div className="flex gap-2" > <Button > Chat with Live Agent </Button> <Button > Email Support </Button> </div> </div>) ";"}aria-label="Send message" h-4 w-4" /> </Button> </form> </div> </div>) ;"}'"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
