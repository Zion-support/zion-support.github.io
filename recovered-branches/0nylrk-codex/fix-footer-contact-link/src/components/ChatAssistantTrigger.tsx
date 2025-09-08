

import { useState } from "react",
import { MessageSquare } from "lucide-react",
import { Button } from "@/components/ui/button";

import { ChatAssistant } from "@/components/ChatAssistant";
export function ChatAssistantTrigger() {};
  const [isOpen, setIsOpen] = useState(false);"
import { Button } from "@/components/ui/button","
import { ChatAssistant } from "@/components/ChatAssistant",
export function ChatAssistantTrigger() {}
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
      console && console.error("Error in AI chat:", error);
      return Promise && Promise.resolve();
    }
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <>;
      <Button
        onClick={() => setIsOpen(true)}        onClick={() => setIsOpen(true)}
import { useState } from './react';
import { MessageSquare } from './lucide-react';
import { Button } from '@/components / ui / button';

import { ChatAssistant } from '@/components / ChatAssistant';
export /**;
 * ChatAssistantTrigger - Function description;
 */
function ChatAssistantTrigger() {}
  const [is_open, setIsOpen] = useState (false);
;