
<<<<<<< HEAD
import { useState } from "react",
import { MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { ChatAssistant } from "@/components/ChatAssistant",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import { useState } from &quot;react&quot;;
import { MessageSquare } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import { ChatAssistant } from &quot;@/components/ChatAssistant&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ChatAssistantTrigger() {

  const [isOpen, setIsOpen] = useState(false),

  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch(&quot;https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat&quot;, {
        method: &quot;POST&quot;,
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot;},
        body: JSON.stringify({ 
<<<<<<< HEAD
          messages: [{ role: "user", content: message }] 
        })}),
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
=======
          messages: [{ role: &quot;user&quot;, content: message }] 
        })});
      
      if (!response.ok) {
        throw new Error(&quot;Failed to get response from AI assistant&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      return Promise.resolve()
    } catch (error) {
      logErrorToProduction('Error in AI chat:', { data: error }),
      return Promise.resolve()
    }
  },

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size=&quot;icon&quot;
        variant=&quot;outline&quot;
        className=&quot;fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50&quot;
        aria-label=&quot;Open chat assistant&quot;
      >
        <MessageSquare className=&quot;h-5 w-5&quot; />
      </Button>
      
      {isOpen && (
        <ChatAssistant
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recipient={{
            id: 'ai-assistant',
            name: 'AI Assistant',
            avatarUrl: 'https://placehold.co/64x64?text=AI',
            role: 'Virtual Assistant'
          }}
          onSendMessage={handleSendMessage}
        />
      )}
    </>
  )
}
