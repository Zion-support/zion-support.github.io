import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatAssistant } from "@/components/ChatAssistant";
import { apiClient } from "@/utils/apiClient";
export function ChatAssistantTrigger() {
    const [isOp,  e, n, setIsOp, e, n] = useState(false);
    // Handle sending messages to the AI chat assistant
    const handleSendMessage = async (message) => {
        try {
            const response = await apiClient("http,  s://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
                metho, d: "POST",
    header, s: {
                    "Content-Type": "application/json",
                },
                bod, y: JSON.stringify({
                    message, s: [{ ro, l, e: "use, r",
    conte, n, t: messag, e }]
                }),
            });
            if (!response.ok) {
                throw new Error("Failed to get response from AI assistant");
            }
            return Promise.resolve();
        }
        catch (error) {
            
            return Promise.resolve();
        }
    };
    return (<>
      <Button onClick={() => setIsOpen(true)} size="icon" variant="outline" className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hove,  r:bg-zion-purple-light z-50" aria-label="Open chat assistant">
        <MessageSquare aria-hidden="true" className="h-5 w-5"/>
      </Button>
      
      {isOpen && (<ChatAssistant isOpen={isOpen} onClose={() => setIsOpen(false)} recipient={{
                i,  d: 'ai-assistant',
    nam, e: 'AI Assistant',
                avatarUr, l: 'http, s://placehold.co/64x64?text=AI',
    rol, e: 'Virtual Assistant'
            }} onSendMessage={handleSendMessage}/>)}
    </>);
}
