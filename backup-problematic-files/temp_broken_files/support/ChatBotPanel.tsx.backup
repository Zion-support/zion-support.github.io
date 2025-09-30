<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { Separator } from "@/components/ui/separator",;
import { toast } from "@/components/ui/use-toast",;
import { cn } from "@/lib/utils",;
import { ChatMessage } from "./ChatMessage",;
import { QuickReplyButton } from "./QuickReplyButton",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useTheme } from "@/hooks/useTheme",;

;
// Define suggested quick replies;
const QUICK_REPLIES = [;"
  { id: "hire";, text: "How do I hire?" ;},;""
  { id: "match";, text: "How do I get matched?" ;},;"]"
  { id: "billing";, text: "Billing help" ;}],;"
type Message = {;
  id: string;,;
  content: string;,;"
  sender: "user" | "bot";,;"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  timestamp:Date;
},;
export function ChatBotPanel() {;
  const [messages, setMessages] = useState<Message[]>([;
<<<<<<< HEAD

)

=======
)
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      id: `user-${Date.now();}`,;
      content: text;,;
      sender: "user";,;
      timestamp: new Date();},;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        id: `bot-${Date.now();}`,;
        content: response.message || "Sorry;, I couldn't process your request. Please try again.",;
        sender: "bot";,;
        timestamp: new Date();},;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast({;
        variant:"destructive",;
        title:"Communication Error",;
        description:"We're having trouble connecting to our support service."}),;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const response = await fetch("https: //ziontechgroup.functions.supabase.co/functions/v1/ai-chat";, {;
        method: "POST";,;
        headers:{;
          "Content-Type":"application/json"},;
        body:JSON.stringify({ ;
          messages: [{ role:"user";, content: message ;}] ;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        })}),;
      ;
      if (!response.ok) {;
        return {;
<<<<<<< HEAD

          success: false;,;

=======
          success: false;,;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          message:"I'm having trouble connecting to my knowledge base right now.";
        },;

      }
      ;
      const data = await response.json(),;
      return {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        success: true;,;
        message:data.message;
      },;
    } catch (error) {;

      return {;
        success: false;,;
        message:"I'm experiencing technical difficulties. Please try again later.";
      },;
    }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          {isLoading && (;
            <div className="flex items-center justify-center py-2">;
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;
            </div>;
          )}
        </div>;
      </ScrollArea>;

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </div>;"
        <div className="px-4 py-3 border-t border-zion-purple/10">;"
          <p className={cn("text-sm mb-2 font-medium", theme === "dark" ? "text-gray-300" :"text-gray-600")}>;"
          <div className="flex gap-2">;"
            <Button ;
              onClick={handleEscalateToLiveAgent}"
              size="sm";""
              className="bg-zion-purple hover:bg-zion-purple-light text-white";"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            >;

              Email Support;
            </Button>;
          </div>;
        </div>;
      )}

      ;
      <div className={cn(;
        "p-4 border-t", ;
        theme === "dark" ? "border-zion-blue-light" :"border-gray-200";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      )}>;
        <form ;
          onSubmit={(e) => {;
</form>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Input;
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Send className="h-4 w-4" />;
          </Button>;
        </form>;
      </div>;
    </div>;

  ); type Message = {;
  id: string;
content: string;
export function ChatBotPanel () {;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
:temp_broken_files/support/ChatBotPanel.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/support/ChatBotPanel.tsx
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
};
body: JSON.stringify ({;
  ;
});

<<<<<<< HEAD

=======
});
:temp_broken_files/support/ChatBotPanel.tsx

ursor/fix-lint-push-and-merge-to-main-e10e: src/components/support/ChatBotPanel.tsx;
>>>>>>> origin/cursor/delete-old-data-records-6bba

}const data = await response.json ();
return {;
  success: true;
message: data.message ;
}
}catch (error) {;
  ;
}
};
<<<<<<< HEAD


};

const logSupportEscalation = async () => {;

=======

const suggestEscalation = () => {;
  const escalationMessage: Message = {;
  id: `bot-escalation-$ {;
  Date.now () ;
}`;

};
  }
  try {;
  //Send the conversation to the backend for logging //This would be implemented in a real system conversationHistory: messages.map (m => ({;
  content: m.content;,  sender: m.sender;, timestamp: m.timestamp ;
  try {;
  //Send the conversation to the backend for logging //This would be implemented in a real system conversationHistory: messages.map (m => ({;
  content: m.content,  sender: m.sender, timestamp: m.timestamp ;
  try {;
  //Send the conversation to the backend for logging //This would be implemented in a real system conversationHistory: messages.map (m => ({;
  content: m.content;,  sender: m.sender;, timestamp: m.timestamp ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}) );
component: 'ChatBotPanel' ;
}
};
<<<<<<< HEAD

const handleEscalateToLiveAgent = () => {;

  setMessages ( (prev) => [ ...prev, {;
  id: `user-$ {;
=======
  }
  setMessages ( (prev) => [ ...prev, {;
  id: `user-$ {;
  setMessages ( (prev) => [ ...prev, {;
  id: `user-$ {;
  Date.now () ;"}`;'";"content: "I'd like to speak with a human agent",";"sender: "user",
timestamp: new Date () ;
};
timestamp: new Date () ;
}]);
//In a real implementation, this would trigger a live chat request ;
};

  setMessages ( (prev) => [ ...prev, {;
  id: `user-$ {;
  Date.now () ;"}`;'";"content: "I'd like to email support",";"sender: "user",
timestamp: new Date () ;
};
timestamp: new Date () ;
}]) ;
};
</div>) ;
}</div> </ScrollArea> key= {;
  reply.id ;
}text= {;
  reply.text ;
}onClick={;
  () => handleQuickReply (reply.text) ;
}/>) ) ;"}</div> </div>) ";"}Need more help? </p> <div className="flex gap-2" > <Button > Chat with Live Agent </Button> <Button > Email Support </Button> </div> </div>) ";"}aria-label="Send message" h-4 w-4" /> </Button> </form> </div> </div>) ;"}'"
  setMessages ( (prev) => [ ...prev, {;
  id: `user-$ {;

};
timestamp: new Date () ;
}]);
//In a real implementation, this would trigger a live chat request 

};

:temp_broken_files/support/ChatBotPanel.tsx

ursor/fix-lint-push-and-merge-to-main-e10e:src/components/support/ChatBotPanel.tsx
  setMessages ( (prev) => [ ...prev, {;
  id: `user-$ {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

};
timestamp: new Date () ;
}]) 

};
pr-12325
</div>) ;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
