import React from "react",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils",
import { format } from "date-fns";
import { useTheme } from "@/hooks/useTheme";
interface ChatMessageProps {
  message: string,
  isUser: boolean,
  timestamp: Date}

  message: string
  isUser: boolean

  timestamp: Date
}
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  const { theme } = useTheme();
  return (
export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  const { theme } = useTheme($2);
  return (

    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <Avatar className = $2;
        isUser 
          ? "bg-zion-purple text-white" 
          : theme = $2;
          isUser 
            ? "text-white/70" 
            : theme === "dark"
              ? "text-gray-300"
              : "text-gray-500"
        )}>
          {format(timestamp, "h:mm a")}
        </div>
      </div>
    </div>
  )
}
// Function to convert URLs and help links to actual clickable links
function formatMessageWithLinks(message: string): string {
  // Replace URLs
  const urlRegex = $2;
  let formattedMessage = message.replace($2);
  // Replace help center references like [Getting Started]
  const helpCenterRegex = $2;
  formattedMessage = formattedMessage.replace($2);
  return formattedMessage
}
}
;