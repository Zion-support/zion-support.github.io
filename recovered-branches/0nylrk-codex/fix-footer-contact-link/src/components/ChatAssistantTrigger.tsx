



==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle sending messages to the AI chat assistant

  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST"
        headers: {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
      
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
      return Promise.resolve()
    } catch (error) {
      console.error("Error in AI chat:", error),
=======
      console.error("Error in AI chat:", error);      return Promise.resolve()
    }
  }
  return (
    <>
      <Button
import {useState} from "react";
import {MessageSquare} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ChatAssistant} from "@/components/ChatAssistant";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      console.error("Error in AI chat:", error),;
      return Promise.resolve(),;
    }
  },;
;
  return (;
    <>;
      <Button;
        onClick={() => setIsOpen(true)}
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  return (
    <>;

      <Button;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        onClick={() => setIsOpen(true)}

      {isOpen && (;
        <ChatAssistant
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant',;
            avatarUrl: 'https://placehold && placehold.co/64x64?text=AI',;
            role: 'Virtual Assistant';


=======