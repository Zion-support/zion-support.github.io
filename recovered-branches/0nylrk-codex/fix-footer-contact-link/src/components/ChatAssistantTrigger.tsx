
import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatAssistant } from '@/components/ChatAssistant';
export function ChatAssistantTrigger() {const [isOpen, setIsOpen]  = useState(false)import { useState } from "react",import { MessageSquare } from "lucide-react",import { Button  } from '@/components/ui/button';
import { ChatAssistant  } from '@/components/ChatAssistant';
export function ChatAssistantTrigger() {const [isOpen, setIsOpen] = useState(false)import { Button } from "@/components/ui/button",import { ChatAssistant } from "@/components/ChatAssistant",export function ChatAssistantTrigger() {const [isOpen, setIsOpen] = useState(false),// Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {try {const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {method: "POST";
        headers: {"Content-Type": "application/json"},body: JSON.stringify({messages: [{ role: "user", content: message }];
        })}),if (!response.ok) {throw new Error("Failed to get response from AI assistant")}
      return Promise.resolve()} catch (error) {}}
          onSendMessage={handleSendMessage}
        />;
      )}</>;
  )}} catch (error) {console.error("Error in AI chat:", error),return Promise.resolve()}



import { useState } from "react",
import { MessageSquare } from "lucide-react",
import { Button } from "@/components/ui/button";
import { ChatAssistant } from "@/components/ChatAssistant";
export function ChatAssistantTrigger() {
  const [isOpen, setIsOpen] = useState(false);
import { Button } from "@/components/ui/button",
import { ChatAssistant } from "@/components/ChatAssistant",
export function ChatAssistantTrigger() {
  const [isOpen, setIsOpen] = useState(false),



  // Handle sending messages to the AI chat assistant

  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {


          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
      


      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
      return Promise.resolve()
    } catch (error) {
      console.error("Error in AI chat:", error);
      return Promise.resolve()

import {useState} from "react";
import {MessageSquare} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ChatAssistant} from "@/components/ChatAssistant";

      console.error("Error in AI chat:", error),
      return Promise.resolve()
    }
  }
  return (console.error("Error in AI chat:", error),return Promise.resolve()}
  }
  return (<>;
      <Button;export function ChatAssistantTrigger() {const [isOpen, setIsOpen]  = useState(false)// Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {try {const response = await fetch("https://ziontechgroup && ziontechgroup.functions.supabase && supabase.co/functions/v1/ai-chat", {method: "POST",headers: {"Content-Type": "application/json"}body: JSON && JSON.stringify({messages: [{ role: "user", content: message }] ;
        })})if (!response && response.ok) {throw new Error("Failed to get response from AI assistant")}return Promise && Promise.resolve()} catch (error) {console && console.error("Error in AI chat:", error)return Promise && Promise.resolve()}
  }
  return (<>;<Button;onClick={() => setIsOpen(true)}<>;
      <Button;
  return (
    <>;

      <Button;


        onClick={() => setIsOpen(true)}

    <>;
      <Button
        onClick={() => setIsOpen(true)}
        size="icon";
        variant="outline";
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50";
        aria-label="Open chat assistant";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;
          }}
          onSendMessage={handleSendMessage}
        />;
      )}
    </>;
  )}
      <Button;
        onClick={() => setIsOpen(true)}        onClick={() => setIsOpen(true)}
import { useState  } from './react';
import { MessageSquare  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import { ChatAssistant  } from '@/components / ChatAssistant';
export /**;
 * ChatAssistantTrigger - Function description;
 */;
function ChatAssistantTrigger() {const [is_open, setIsOpen]  = useState (false)// Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise < void> => {try {const response = await fetch ("https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat", {method: "POST",headers: {"Content - Type": "application / json"}
        body: JSON.stringify ({messages: [{ role: "user", content: message }];
        })})// Check condition;
if ( {) {$2;
}
        throw new Error ("Failed to get response from AI assistant")}
      return Promise.resolve ()} catch (error) {console.error ("Error in AI chat:", error)return Promise.resolve ()}
  }return (<>;
      <Button;
        on_click={() => setIsOpen (true)}
        size="icon";
        variant="outline";
        className="fixed bottom - 4 right - 4 h - 12 w - 12 rounded - full shadow - lg bg - zion - purple text - white hover:bg - zion - purple - light z - 50";
        aria - label="Open chat assistant";
      >;
        <MessageSquare className="h - 5 w - 5" />;
      </Button>;
      {is_open && (<ChatAssistant;
          is_open={is_open}
          on_close={() => setIsOpen (false)}
          recipient={{id: 'ai - assistant',name: 'AI Assistant',avatar_url: 'https://placehold.co / 64x64?text = AI',role: 'Virtual Assistant';
          }}
          onSendMessage={handleSendMessage}
        />)}
    </>){isOpen && (<ChatAssistant;
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{id:'ai-assistant',name:'AI Assistant',avatarUrl:'https://placehold.co/64x64?text=AI',role:'Virtual Assistant';
          }}          onSendMessage={handleSendMessage}
        />;
      )}
    </>;
  ),export function ChatAssistantTrigger () {const [isOpen, setIsOpen] = useState (false)try {}return Promise.resolve ()}catch (error) {}
}h-5 w-5" /> </Button> {isOpen && (<ChatAssistant isOpen= {isOpen;
}onClose= {() => setIsOpen (false)}recipient= {{id: 'ai-assistant', name: 'AI Assistant', avatarUrl: 'https://placehold.co/64x64?text=AI', role: 'Virtual Assistant';
}
}onSendMessage= {handleSendMessage;
}/>)}</>)}
export function ChatAssistantTrigger() {const [isOpen, setIsOpen] = useState(false),// Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {try {const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({messages: [{ role: "user", content: message }];
        })}),if (!response.ok) {throw new Error("Failed to get response from AI assistant")}return Promise.resolve()} catch (error) {console.error("Error in AI chat:", error),return Promise.resolve()}
  },return (<>;
      <Button;
        onClick={() => setIsOpen(true)}
        size="icon";
        variant="outline";
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50";
        aria-label="Open chat assistant";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;
      {isOpen && (<ChatAssistant;
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{id: 'ai-assistant';
            name: 'AI Assistant';
            avatarUrl: 'https://placehold.co/64x64?text=AI';
            role: 'Virtual Assistant';

      {isOpen && (;
        <ChatAssistant
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant',;
            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Virtual Assistant';

          }}
          onSendMessage={handleSendMessage}
        />;
      )}
    </>;
  )}
    </>;
  )};

    </>;
  );
}
import { useState } from './react';
import { MessageSquare } from './lucide-react';
import { Button } from '@/components / ui / button';
import { ChatAssistant } from '@/components / ChatAssistant';
export /**
 * ChatAssistantTrigger - Function description
 */
function ChatAssistantTrigger() {
  const [is_open, setIsOpen] = useState (false);
;



