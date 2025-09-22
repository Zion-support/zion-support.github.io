<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
import {useState} from "react";
import {MessageSquare} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ChatAssistant} from "@/components/ChatAssistant";
export function ChatAssistantTrigger() {;
  const [isOpen, setIsOpen] = useState(false);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",
import { MessageSquare } from "lucide-react",
import { Button } from "@/components/ui/button";
=======
import { useState } from "react","
import { MessageSquare } from "lucide-react",";
import { Button } from "@/components/ui/button";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ChatAssistant } from "@/components/ChatAssistant";
export function ChatAssistantTrigger() {};
  const [isOpen, setIsOpen] = useState(false);"
import { Button } from "@/components/ui/button","
import { ChatAssistant } from "@/components/ChatAssistant",
export function ChatAssistantTrigger() {}
  const [isOpen, setIsOpen] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Handle sending messages to the AI chat assistant

  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          "Content-Type": "application/json"},
        body: JSON.stringify({ "
          messages: [{ role: "user", content: message }] 
        })}),

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
      return Promise.resolve()
    } catch (error) {
      console.error("Error in AI chat:", error);
      return Promise.resolve()

=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {useState} from "react";
import {MessageSquare} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ChatAssistant} from "@/components/ChatAssistant";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      console.error("Error in AI chat:", error),
      return Promise.resolve()
    }
  }
  return (
<>
      <Button
import { useState } from "react",;
import { MessageSquare } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { ChatAssistant } from "@/components/ChatAssistant",;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
  }
  return (
    <>;
<<<<<<< HEAD

      <Button;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

      <Button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        onClick={() => setIsOpen(true)}

          }}
          onSendMessage={handleSendMessage}
        />;
      )}
</>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      <Button
        onClick={() => setIsOpen(true)}        onClick={() => setIsOpen(true)}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

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
  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from './react';
import { MessageSquare } from './lucide-react';
import { Button } from '@/components / ui / button';
=======

import { useState } from './react';'
import { MessageSquare } from './lucide-react';'
import { Button } from '@/components / ui / button';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ChatAssistant } from '@/components / ChatAssistant';
export /**;
 * ChatAssistantTrigger - Function description;
 */
function ChatAssistantTrigger() {}
  const [is_open, setIsOpen] = useState (false);
<<<<<<< HEAD
;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export function ChatAssistantTrigger() {;
  const [isOpen, setIsOpen] = useState(false);
import { useState } from "react",
import { MessageSquare } from "lucide-react",

import { Button } from "@/components/ui/button";
import { ChatAssistant } from "@/components/ChatAssistant";
export function ChatAssistantTrigger() {
  const [isOpen, setIsOpen] = useState(false);

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
