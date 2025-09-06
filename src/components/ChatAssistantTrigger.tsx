
import { useState } from "react";
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { ChatAssistant } from "@/components/ChatAssistant";
import {logErrorToProduction} from '@/utils/productionLogger';
export function ChatAssistantTrigger() {

  const [isOpen, setIsOpen] = useState(false);

  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"};
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      
            avatarUrl: 'https://placehold.co/64x64?text=AI',
            role: 'Virtual Assistant';
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
