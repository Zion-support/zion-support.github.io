<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistantTrigger.tsx

<<<<<<< HEAD

import { useState } from "react",
import { MessageSquare } from "lucide-react",

=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState} from "react";
import {MessageSquare} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ChatAssistant} from "@/components/ChatAssistant";
export function ChatAssistantTrigger() {;
  const [isOpen, setIsOpen] = useState(false);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { MessageSquare } from "lucide-react",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { ChatAssistant } from "@/components/ChatAssistant";
export function ChatAssistantTrigger() {
  const [isOpen, setIsOpen] = useState(false);
=======
import { Button } from "@/components/ui/button",
import { ChatAssistant } from "@/components/ChatAssistant",
export function ChatAssistantTrigger() {
  const [isOpen, setIsOpen] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Handle sending messages to the AI chat assistant

  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
          "Content-Type": "application/json"}
        body: JSON.stringify({
          messages: [{ role: "user", content: message }]
        })});
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
      return Promise.resolve()
    } catch (error) {
<<<<<<< HEAD
      console.error("Error in AI chat:", error);
      return Promise.resolve()

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistantTrigger.tsx
import {useState} from "react";
import {MessageSquare} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ChatAssistant} from "@/components/ChatAssistant";
=======

=======
      console.error("Error in AI chat:", error),
      return Promise.resolve()
<<<<<<< HEAD
    }
  }
  return (
    <>
      <Button
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",;
import { MessageSquare } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { ChatAssistant } from "@/components/ChatAssistant",;
<<<<<<< HEAD

export function ChatAssistantTrigger() {;
  const [isOpen, setIsOpen] = useState(false);
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {;
    try {;
      const response = await fetch("https://ziontechgroup && ziontechgroup.functions.supabase && supabase.co/functions/v1/ai-chat", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json"};
        body: JSON && JSON.stringify({ ;
          messages: [{ role: "user", content: message }] ;
        })});
      if (!response && response.ok) {;
        throw new Error("Failed to get response from AI assistant");
      }
      return Promise && Promise.resolve();
    } catch (error) {;
      console && console.error("Error in AI chat:", error);
      return Promise && Promise.resolve();
    }
  }
  return (
    <>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistantTrigger.tsx

      <Button;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        onClick={() => setIsOpen(true)}

========
      <Button
=======

import { useState } from "react",;
import { MessageSquare } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { ChatAssistant } from "@/components/ChatAssistant",;
;
export function ChatAssistantTrigger() {;
  const [isOpen, setIsOpen] = useState(false),;
;
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message:string):Promise<void> => {;
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
        throw new Error("Failed to get response from AI assistant"),;
      }
      ;
      return Promise.resolve(),;
    } catch (error) {;
      console.error("Error in AI chat:", error),;
      return Promise.resolve(),;
    }
  },;
;
  return (;
    <>;
      <Button;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        onClick={() => setIsOpen(true)}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistantTrigger.tsx
        size="icon";
        variant="outline";
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50";
        aria-label="Open chat assistant";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;
<<<<<<< HEAD
      {isOpen && (;
        <ChatAssistant
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant',;
            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Virtual Assistant';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistantTrigger.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistantTrigger.tsx
          }}
          onSendMessage={handleSendMessage}
        />;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistantTrigger.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistantTrigger.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistantTrigger.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise < void> => {
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
        throw new Error ("Failed to get response from AI assistant");
      }
      return Promise.resolve ();
    } catch (error) {
      console.error ("Error in AI chat:", error);
      return Promise.resolve ();
    }
  }
;
  return (
    <>;
      <Button;
        on_click={() => setIsOpen (true)}
        size="icon";
        variant="outline";
        className="fixed bottom - 4 right - 4 h - 12 w - 12 rounded - full shadow - lg bg - zion - purple text - white hover:bg - zion - purple - light z - 50";
        aria - label="Open chat assistant";
      >;
        <MessageSquare className="h - 5 w - 5" />;
      </Button>;
      {is_open && (
        <ChatAssistant;
          is_open={is_open}
          on_close={() => setIsOpen (false)}
          recipient={{
            id: 'ai - assistant',
            name: 'AI Assistant',
            avatar_url: 'https://placehold.co / 64x64?text = AI',
            role: 'Virtual Assistant';
          }}
          onSendMessage={handleSendMessage}
        />)}
    </>);
=======
      ;
      {isOpen && (;
        <ChatAssistant;
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{;
            id:'ai-assistant',;
            name:'AI Assistant',;
            avatarUrl:'https://placehold.co/64x64?text=AI',;
            role:'Virtual Assistant';
          }}          onSendMessage={handleSendMessage}
        />;
      )}
    </>;
  ),; export function ChatAssistantTrigger () {
  const [isOpen, setIsOpen] = useState (false);
try {
  
}return Promise.resolve () 
}catch (error) {
  
}
};
h-5 w-5" /> </Button> {
  isOpen && (<ChatAssistant isOpen= {
  isOpen 
}onClose= {
  () => setIsOpen (false) 
}recipient= {
  {
  id: 'ai-assistant', name: 'AI Assistant', avatarUrl: 'https://placehold.co/64x64?text=AI', role: 'Virtual Assistant' 
}
}onSendMessage= {
  handleSendMessage 
}/>) 
}</>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ChatAssistantTrigger.tsx
=======
export function ChatAssistantTrigger() {;
  const [isOpen, setIsOpen] = useState(false),;
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {;
    try {;
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {;
        method: "POST",;
        headers: {;
          "Content-Type": "application/json"},;
        body: JSON.stringify({;
          messages: [{ role: "user", content: message }];
        })}),;
      if (!response.ok) {;
        throw new Error("Failed to get response from AI assistant");
      }
;
      return Promise.resolve();
    } catch (error) {;
      console.error("Error in AI chat:", error),;
      return Promise.resolve();
    }
  },;
  return (;
    <>;
      <Button;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        onClick={() => setIsOpen(true)}
        size="icon"
        variant="outline"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
      {isOpen && (
        <ChatAssistant
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{
            id: 'ai-assistant'
            name: 'AI Assistant'
            avatarUrl: 'https://placehold.co/64x64?text=AI'

            role: 'Virtual Assistant'
          }}
          onSendMessage={handleSendMessage}
        />
      )}
<<<<<<< HEAD
    </>
  )
}
=======
    </>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
