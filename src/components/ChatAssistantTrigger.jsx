import { useState } from "react";
import { MessageSquare import { Button } from "@/components/ui/button";
import { ChatAssistant } from "@/components/ChatAssistant";
import { apiClient } from "@/utils/apiClient";
export function ChatAssistantTrigger() {
    const [isOpen, setIsOpen] = useState(false);
    // Handle sending messages to the AI chat assistant
    const handleSendMessage = async (message) => {
        try {
            const response = await apiClient("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages[{ role: "user", content: message }]
                }),
            });
            if (!response.ok) {
<<<<<<< HEAD
                throw new Error("Failed to get response from AI assistant");

            return Promise.resolve();

        catch (error) {
<<<<<<< HEAD
            // // // console.error("Error in AI chat:", error);
=======
            // // // // // // // console.error("Error in AI chat:", error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
            return Promise.resolve();

=======
                throw new Error("Failed to get response from AI assistant")}
            return Promise.resolve()}
        catch (error) {
            console.error("Error in AI chat:", error);
            return Promise.resolve()}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };
    return (<>
      <Button onClick={() => setIsOpen(true)} size="icon" variant="outline" className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50" aria-label="Open chat assistant">
        <MessageSquare aria-hidden="true" className="h-5 w-5"/>
      </Button>
<<<<<<< HEAD

      {isOpen && (<ChatAssistant isOpen={isOpen} onClose={() => setIsOpen(false)} recipient={{
=======
      
      {isOpen && (<ChatAssistant isOpen={isOpen} onClose={() => setIsOpen(false)} recipient = {
  {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                id: 'ai-assistant',
                name: 'AI Assistant',
                avatarUrl: 'https://placehold.co/64x64?text=AI',
  <<<<<<< HEAD
                role: 'Virtual Assistant'
            

}} onSendMessage={handleSendMessage}/>)}
    </>)}
=======
  role: 'Virtual Assistant'
            




}} onSendMessage={handleSendMessage}/>)}
    </>);
<<<<<<< HEAD
}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
