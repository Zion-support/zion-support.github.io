import React, { useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context
import { useTheme } from "@/hooks/useTheme";
interface ChatMessageProps {
  message: string,
  isUser: boolean,
  timestamp: Date}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser,
  timestamp}: ChatMessageProps) => {
  const { theme } = useTheme($2);
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.
  const sanitizedHtml = $2;
    [message]
  ),

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
},

// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
// dependency like DOMPurify for now and instead escape the five critical
// characters. This ensures any user-supplied string is rendered harmless
// before we perform our link replacements below.
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp,")
    .replace(/</g, "&lt,")
    .replace(/>/g, "&gt,")
    .replace(/"/g, "&quot,")
    .replace(/'/g, "&#039,")
}

function formatMessageWithLinks(message: string): string {
  // First, escape any HTML so that user input cannot break out of the intended
  // markup.
  const safeText = escapeHtml($2);
  // Replace URLs
  const urlRegex = $2;
  let formattedMessage = safeText.replace($2);
  // Replace help-center references like [Getting Started]
  const helpCenterRegex = $2;
  formattedMessage = formattedMessage.replace($2);
  return formattedMessage
}
