

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
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
      return Promise.resolve()
    } catch (error) {

      console.error("Error in AI chat:", error),
      return Promise.resolve()
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




import { useState } from "react",""
import { MessageSquare } from "lucide-react",""
import { Button } from "@/components/ui/button";""
import { ChatAssistant } from "@/components/ChatAssistant";"
export function ChatAssistantTrigger() {
  const [isOpen, setIsOpen] = useState(false);"
import { Button } from "@/components/ui/button",""
import { ChatAssistant } from "@/components/ChatAssistant","
  const [isOpen, setIsOpen] = useState(false),



  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {
</void>
    <>
      <Button;"
import { useState } from "react",;""
import { MessageSquare } from "lucide-react",;""
import { Button } from "@/components/ui/button",;""
import { ChatAssistant } from "@/components/ChatAssistant",;"
pr-12325

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
      <Button
        onClick={() => setIsOpen(true)}        onClick={() => setIsOpen(true)}

    <>;

      <Button;


        onClick={() => setIsOpen(true)}


"
        <MessageSquare className="h-5 w-5" />;"

      ;
        <ChatAssistant;
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}

    </>;
  );
}"
pr-12325
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
</Button>

    <>;
      <Button;



        onClick={() => setIsOpen(true)}
</Button>

    <>;
      <Button;
        onClick={() => setIsOpen(true)}
</Button>"
        <MessageSquare className="h-5 w-5" />;"
</MessageSquare>
      </Button>;
        <ChatAssistant;
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
</ChatAssistant>
    </>;
  );
}"
import { useState } from './react';''
import { MessageSquare } from './lucide-react';''
import { Button } from '@/components / ui / button';''
import { ChatAssistant } from '@/components / ChatAssistant';'

export /**
 * ChatAssistantTrigger - Function description;
 */
function ChatAssistantTrigger() {

  const [is_open, setIsOpen] = useState (false);



pr-12325
'

