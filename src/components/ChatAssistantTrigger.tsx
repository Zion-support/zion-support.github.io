<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react",
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button",

  // Handle sending messages to the AI chat assistant
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react"
import { MessageSquare } from 'lucide-react'import { Button } from "@/components/ui/button"
import { ChatAssistant } from "@/components/ChatAssistant"
import {logErrorToProduction} from '@/utils/productionLogger'
export function ChatAssistantTrigger() {

  const [isOpen, setIsOpen] = useState(false)
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button",
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { useState } from "react",
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ChatAssistant } from "@/components/ChatAssistant";
import {logErrorToProduction} from '@/utils/productionLogger';
export function ChatAssistantTrigger() {

  const [isOpen, setIsOpen] = useState(false)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   // Handle sending messages to the AI chat assistant
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ChatAssistant } from "@/components/ChatAssistant",
import {logErrorToProduction} from '@/utils/productionLogger',
export function ChatAssistantTrigger() {

  const [isOpen, setIsOpen] = useState(false),

  // Handle sending messages to the AI chat assistant
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
// Handle sending messages to the AI chat assistant
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
          "Content-Type": "application/json"}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          "Content-Type": "application/json"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        body: JSON.stringify({
          messages: [{ role: "user", content: message }]
        })})
            avatarUrl: 'https://placehold.co/64x64?text=AI'
            role: 'Virtual Assistant';      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        body: JSON.stringify({ ;
          messages: [{ role: "user", content: message }] ;
        })});
            avatarUrl: 'https://placehold.co/64x64?text=AI';
            role: 'Virtual Assistant';      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
import { useState } from "react",;
import { MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { ChatAssistant } from "@/components/ChatAssistant",;
import {logErrorToProduction} from '@/utils/productionLogger',;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
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

            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Virtual Assistant';      if (!response && response.ok) {;
        throw new Error("Failed to get response from AI assistant");
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      }
      return Promise.resolve()
    } catch (error) {
      logErrorToProduction('Error in AI chat:', { data: error })
      return Promise.resolve()
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  return (
    <>
      <Button
        onClick = {(,) => setIsOpen(true),}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
;
      return Promise.resolve();
    } catch (error) {;
      logErrorToProduction('Error in AI chat:', { data: error }),;
      return Promise.resolve();
    }
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },;
  return (;
    <>;
      <Button;
        onClick={() => setIsOpen(true)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        size="icon"
        variant="outline"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return Promise.resolve()
    } catch (error) {
      logErrorToProduction('Error in AI chat:', { data: error }),
      return Promise.resolve()
    }
  },

<<<<<<< HEAD

  return (
    <>;
=======
  return (
    <>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Button
        onClick = {(,) => setIsOpen(true),}
        size="icon"
        variant="outline"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      {isOpen && (
        <ChatAssistant

=======
>>>>>>>       {isOpen && (
        <ChatAssistant
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {isOpen && (
        <ChatAssistant
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      {isOpen && (
        <ChatAssistant
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          isOpen = {isOpen,}
          onClose = {(,) => setIsOpen(false),}
<<<<<<< HEAD
          recipient={{
            id: 'ai-assistant'
            name: 'AI Assistant'
            avatarUrl: 'https://placehold.co/64x64?text=AI'

            role: 'Virtual Assistant'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           }}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

          isOpen={isOpen}
          onClose={() => setIsOpen(false)}

          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant',;
            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Virtual Assistant';



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          }}
>>>>>>>           onSendMessage = {handleSendMessage,}
        />;
      )}
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant';
            avatarUrl: 'https://placehold.co/64x64?text=AI';
=======
import { useState  } from './react';
import { MessageSquare } from 'lucide-react'import { Button  } from '@/components / ui / button';
import { ChatAssistant  } from '@/components / ChatAssistant';
import {logErrorToProduction} from '@/utils / production_logger';
export /**
 * ChatAssistantTrigger - Function description
 */
function ChatAssistantTrigger() {
  const [is_open, setIsOpen] = useState (false);
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
            avatar_url: 'https://placehold.co / 64x64?text = AI',
            role: 'Virtual Assistant';      // Check condition
if ( {) {
  $2
}
        throw new Error ("Failed to get response from AI assistant");
      }
      return Promise.resolve ();
    } catch (error) {
      logErrorToProduction ('Error in AI chat:', { data: error }),
      return Promise.resolve ();
    }
  },
  return (
    <>;
      <Button;
        on_click = {(, ) => setIsOpen (true), }
        size="icon";
        variant="outline";
        className="fixed bottom - 4 right - 4 h - 12 w - 12 rounded - full shadow - lg bg - zion - purple text - white hover:bg - zion - purple - light z - 50";
        aria - label="Open chat assistant";
      >;
        <MessageSquare className="h - 5 w - 5" />;
      </Button>;
      {is_open && (
        <ChatAssistant;
          is_open = {is_open, }
          on_close = {(, ) => setIsOpen (false), }
          recipient={{
            id: 'ai - assistant',
            name: 'AI Assistant',
            avatar_url: 'https://placehold.co / 64x64?text = AI',
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            role: 'Virtual Assistant';
          }}
          onSendMessage = {handleSendMessage,}
        />
      )}
    </>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
