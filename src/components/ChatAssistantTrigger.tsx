
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState } from "react"
import { MessageSquare } from 'lucide-react'import { Button } from "@/components/ui/button"
import { ChatAssistant } from "@/components/ChatAssistant"
import {logErrorToProduction} from '@/utils/productionLogger'
export function ChatAssistantTrigger() {

  const [isOpen, setIsOpen] = useState(false)
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
import { ChatAssistant } from "@/components/ChatAssistant";
import {logErrorToProduction} from '@/utils/productionLogger';
export function ChatAssistantTrigger() {

  const [isOpen, setIsOpen] = useState(false)
=======
import { ChatAssistant } from "@/components/ChatAssistant",
import {logErrorToProduction} from '@/utils/productionLogger',
export function ChatAssistantTrigger() {

  const [isOpen, setIsOpen] = useState(false),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
<<<<<<< HEAD
          "Content-Type": "application/json"}
<<<<<<< HEAD
        body: JSON.stringify({
          messages: [{ role: "user", content: message }]
        })})
            avatarUrl: 'https://placehold.co/64x64?text=AI'
            role: 'Virtual Assistant';      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
=======
        body: JSON.stringify({ ;
          messages: [{ role: "user", content: message }] ;
        })});
            avatarUrl: 'https://placehold.co/64x64?text=AI';
            role: 'Virtual Assistant';      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      }
      return Promise.resolve()
    } catch (error) {
      logErrorToProduction('Error in AI chat:', { data: error })
      return Promise.resolve()
    }
<<<<<<< HEAD
  }
  return (
    <>
      <Button
        onClick = {(,) => setIsOpen(true),}
=======
=======
      }
;
      return Promise.resolve();
    } catch (error) {;
      logErrorToProduction('Error in AI chat:', { data: error }),;
      return Promise.resolve();
    }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  },;
  return (;
    <>;
      <Button;
        onClick={() => setIsOpen(true)}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        size="icon"
        variant="outline"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      
      return Promise.resolve()
    } catch (error) {
      logErrorToProduction('Error in AI chat:', { data: error }),
      return Promise.resolve()
    }
  },

  return (
    <>
      <Button
        onClick = {(,) => setIsOpen(true),}
        size="icon"
        variant="outline"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {isOpen && (
        <ChatAssistant
<<<<<<< HEAD
          isOpen = {isOpen,}
          onClose = {(,) => setIsOpen(false),}
          recipient={{
            id: 'ai-assistant'
            name: 'AI Assistant'
            avatarUrl: 'https://placehold.co/64x64?text=AI'

            role: 'Virtual Assistant'
=======
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant';
            avatarUrl: 'https://placehold.co/64x64?text=AI';
            role: 'Virtual Assistant';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          }}
          onSendMessage = {handleSendMessage,}
        />
      )}
<<<<<<< HEAD
    </>
  )
}
<<<<<<< HEAD
=======
    </>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
