
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        body: JSON.stringify({ ;
          messages: [{ role: "user", content: message }] ;
        })});
            avatarUrl: 'https://placehold.co/64x64?text=AI';
            role: 'Virtual Assistant';      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
      }

      return Promise && Promise.resolve();
    } catch (error) {;
      logErrorToProduction('Error in AI chat:', { data: error }),;
      return Promise && Promise.resolve();
    }


=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  },;
  return (;
    <>;
      <Button;
        onClick={() => setIsOpen(true)}
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        size="icon"
        variant="outline"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      
      return Promise.resolve()
    } catch (error) {
      logErrorToProduction('Error in AI chat:', { data: error }),
      return Promise.resolve()
    }
  },


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <>;
      <Button
        onClick = {(,) => setIsOpen(true),}
<<<<<<< HEAD

        size="icon";
        variant="outline";
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50";
        aria-label="Open chat assistant";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;

      {isOpen && (;
=======
        size="icon"
        variant="outline"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {isOpen && (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        <ChatAssistant
          isOpen = {isOpen,}
          onClose = {(,) => setIsOpen(false),}
=======

          isOpen={isOpen}
          onClose={() => setIsOpen(false)}

          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant',;
            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Virtual Assistant';
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          }}
          onSendMessage = {handleSendMessage,}
        />;
      )}

    </>;
  );
}
<<<<<<< HEAD

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
            role: 'Virtual Assistant';
          }}
          onSendMessage = {handleSendMessage, }
        />)}
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    </>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
