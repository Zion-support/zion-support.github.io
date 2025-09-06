import { Button } from "@/components/ui/button",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton";
      id: `bot-escalation-${Date.now()}`,
      content: 
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
      timestamp: new Date()},
    
    setMessages((prev) => [...prev, escalationMessage]),
    
    // Log this interaction for the support team
    logSupportEscalation()
  },

  const logSupportEscalation = async () => {
    try {
      // Send the conversation to the backend for logging
      // This would be implemented in a real system
      logDebug("Support escalation triggered", {
        conversationHistory: messages.map(m => ({
          content: m.content,
          sender: m.sender,
          timestamp: m.timestamp
        })),
        component: 'ChatBotPanel'
      })
    } catch (error) {
      logErrorToProduction("Failed to log support escalation", error as Error, { component: 'ChatBotPanel' })
    }
  },

  const handleQuickReply = (text: string) => {
