
import { useState } from "react",
import { MessageSquare } from "lucide-react",
import { Button } from "@/components/ui/button",
import { ChatAssistant } from "@/components/ChatAssistant",export function ChatAssistantTrigger() {
  const [isOpen, setIsOpen] = useState(false),

export function ChatAssistantTrigger() {const [isOpen, setIsOpen] = useState(false);

  // Handle sending messages to the AI chat assistant,
const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch(&quot;https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat&quot;, {
        method: &quot;POST&quot;,
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot},
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        })}),
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")      }
      
      return Promise.resolve()
    } catch (error) {
      console.error("Error in AI chat:", error),
      return Promise.resolve()    }
  },
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", _{
        method: "POST", headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({messages: [{ role: "user", content: message}] 
        })});
      
      if (!response.ok) {throw new Error("Failed to get response from AI assistant")}
      
      return Promise.resolve()
    } catch (error) {return Promise.resolve()}
  };

  return (_<>
      <Button,
onClick={() => setIsOpen(true)}
        size=&quot;icon&quot;
        variant=&quot;outline&quot;
        className=&quot;fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50&quot;
        aria-label=&quot;Open chat assistant&quot;      >
        <MessageSquare className=&quot;h-5 w-5&quot; />
      </Button>
      
      {isOpen && (_<ChatAssistant,
isOpen={isOpen}
          onClose={_() => setIsOpen(false)}
          recipient={_{
            id: 'ai-assistant', name: 'AI Assistant', avatarUrl: 'https://placehold.co/64x64?text=AI', role: 'Virtual Assistant'}}
          onSendMessage={handleSendMessage}
        />
      )}
    </>
  )
}
