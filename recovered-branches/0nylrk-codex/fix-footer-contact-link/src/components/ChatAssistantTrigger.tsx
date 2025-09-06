
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatAssistant } from "@/components/ChatAssistant";
export function ChatAssistantTrigger() {
  const [isOpen, setIsOpen] = useState($2);
  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message}] 
        })}),
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }
      
      return Promise.resolve()
    } catch (error) {
      console.error($2);
      return Promise.resolve()
    }
  },

  return (
    <>
      <Button
        onClick = $2;
            name: 'AI Assistant',
            avatarUrl: 'https://placehold.co/64x64?text = $2;
            role: 'Virtual Assistant'
          }}
          onSendMessage={handleSendMessage}
        />
      )}
    </>
  )
}
