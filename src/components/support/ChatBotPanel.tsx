
import React, { useState, useRef, useEffect } from "react";
import { logDebug, logErrorToProduction  } from '@/utils/productionLogger';
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { ScrollArea } from "@/components/ui/scroll-area",
import { Separator } from "@/components/ui/separator",
import { toast } from "@/components/ui/use-toast",
import { cn } from "@/lib/utils",
import { ChatMessage } from "./ChatMessage",
import { QuickReplyButton } from "./QuickReplyButton";
import { Send, Loader2 } from 'lucide-react'
import { useTheme } from "@/hooks/useTheme";
// Define suggested quick replies
<<<<<<< HEAD
const QUICK_REPLIES = null;
              theme === "dark" 
                ? "bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple" 
                : "bg-white border-gray-200"
            )}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !inputValue.trim()}
            className="bg-zion-cyan hover: bg-zion-cyan/80 text-white"
            aria-label="Send message"><Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
=======
const QUICK_REPLIES = [
  { id: "hire", text: "How do I hire?" }
  { id: "match", text: "How do I get matched?" }
  { id: "billing", text: "Billing help" }]
type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}
export function ChatBotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome"
      content: "Hi! How can I help you?"
      sender: "bot"
      timestamp: new Date()}])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [failedAttempts, setFailedAttempts] = useState(0)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme } = useTheme()
  // Auto-scroll to bottom when messages change
  useEffect((,) => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])
  // Focus input when component mounts
  useEffect((,) => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return
      timestamp: new Date()}
        timestamp: new Date()}
        description: "We're having trouble connecting to our support service."})
      id: `bot-escalation-${Date.now()}`
      content: "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?"
      sender: "bot"
      timestamp: new Date()}
  const handleQuickReply = (text: string,) => {
    handleSendMessage(text)
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  )
}
  )
}