import React, { useMemo } from "react",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils",
import { format } from "date-fns",
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context,
import { useTheme } from "@/hooks/useTheme",interface ChatMessageProps {
  message: string,
  isUser: boolean,
  timestamp: Date
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser,
  timestamp}: ChatMessageProps) => {
  const { theme } = useTheme(),
import React, {useMemo} from "react";
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context,
interface ChatMessageProps {message: string,
  isUser: boolean,
  timestamp: Date}

export const ChatMessage: React.FC<ChatMessageProps> = (_{message, isUser, timestamp}: ChatMessageProps) => {const { theme} = useTheme();
  
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.
  const sanitizedHtml = useMemo<{_html: string}>(_() => ({_html: formatMessageWithLinks(message)}),
    [message]
  ),

  return (
    <div className={cn(&quot;flex items-start gap-3&quot;, isUser && &quot;flex-row-reverse&quot;)}>
      <Avatar className=&quot;h-8 w-8&quot;>
        {isUser ? (          <>
            <AvatarImage src=&quot;https://i.pravatar.cc/40?img=1&quot; alt=&quot;User avatar&quot; />
            <AvatarFallback>U</AvatarFallback>
          </>
        ) : (
          <>
            <AvatarImage,
src=&quot;https://placehold.co/40x40?text=AI&quot;
              alt=&quot;Zion Support&quot;
            />
            <AvatarFallback className=&quot;bg-zion-purple text-white&quot;>Z</AvatarFallback>
          </>
        )}
      </Avatar>
      
      <div className={cn(
        &quot;max-w-[80%] rounded-lg px-4 py-2 text-sm&quot;,
        isUser 
          ? &quot;bg-zion-purple text-white&quot; 
          : theme === &quot;dark&quot;
            ? &quot;bg-zion-blue-light text-white&quot;
            : &quot;bg-gray-100 text-gray-800&quot;
      )}>
        <div dangerouslySetInnerHTML={sanitizedHtml} />
        <div className={cn(
          &quot;text-xs mt-1&quot;,
          isUser 
            ? &quot;text-white/70&quot; 
            : theme === &quot;dark&quot;
              ? &quot;text-gray-300&quot;
              : &quot;text-gray-500&quot;
        )}>
          {format(timestamp, &quot;h:mm a&quot;)}        </div>
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
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, """)
    .replace(/'/g, "&#039,")}
function escapeHtml(unsafe: string): string {return unsafe
    .replace(/&/g, _"&amp;")
    .replace(/</g, _"&lt;")
    .replace(/>/g, _"&gt;")
    .replace(/"/g, _"&quot;")
    .replace(/'/g, _"&#039;")}

function formatMessageWithLinks(message: string): string {_// First, escape any HTML so that user input cannot break out of the intended
  // markup.
  const safeText = escapeHtml(message),

  // Replace URLs,
const urlRegex = /(https?:\/\/[^\s]+)/g,
  let formattedMessage = safeText.replace(
    urlRegex,
    '<a href="$1" target="blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
  ),  );

  // Replace help-center references like [Getting Started]
  const helpCenterRegex = /\[([^\]]+)\]/g,
  formattedMessage = formattedMessage.replace(
    helpCenterRegex,
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
  ),  );

  return formattedMessage
}