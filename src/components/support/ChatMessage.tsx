<<<<<<< HEAD
<<<<<<< HEAD
import React, { useMemo } from "react",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { cn } from "@/lib/utils",
import { format } from "date-fns",
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context
import { useTheme } from "@/hooks/useTheme",
=======
import React, { useMemo } from &quot;react&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { format } from &quot;date-fns&quot;;
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context
import { useTheme } from &quot;@/hooks/useTheme&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ChatMessageProps {
  message: string,
  isUser: boolean,
  timestamp: Date
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser,
  timestamp}: ChatMessageProps) => {
  const { theme } = useTheme(),
=======
import React, {_useMemo} from "react";
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context

interface ChatMessageProps {_message: string;
  isUser: boolean;
  timestamp: Date;}

export const ChatMessage: React.FC<ChatMessageProps> = (_{_message, _isUser, _timestamp}: ChatMessageProps) => {_const { theme} = useTheme();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.
  const _sanitizedHtml = useMemo<{__html: string}>(_() => ({__html: formatMessageWithLinks(message)}),
    [message]
  ),

  return (
<<<<<<< HEAD
    <div className={cn(&quot;flex items-start gap-3&quot;, isUser && &quot;flex-row-reverse&quot;)}>
      <Avatar className=&quot;h-8 w-8&quot;>
        {isUser ? (
=======
    <div className={_cn("flex items-start gap-3", _isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        {_isUser ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <>
            <AvatarImage src=&quot;https://i.pravatar.cc/40?img=1&quot; alt=&quot;User avatar&quot; />
            <AvatarFallback>U</AvatarFallback>
          </>
        ) : (
          <>
            <AvatarImage
              src=&quot;https://placehold.co/40x40?text=AI&quot;
              alt=&quot;Zion Support&quot;
            />
            <AvatarFallback className=&quot;bg-zion-purple text-white&quot;>Z</AvatarFallback>
          </>
        )}
      </Avatar>
      
<<<<<<< HEAD
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
          {format(timestamp, &quot;h:mm a&quot;)}
=======
      <div className={_cn(
        "max-w-[80%] rounded-lg px-4 py-2 text-sm", _isUser 
          ? "bg-zion-purple text-white" 
          : theme === "dark"
            ? "bg-zion-blue-light text-white"
            : "bg-gray-100 text-gray-800"
      )}>
        <div dangerouslySetInnerHTML={_sanitizedHtml} />
        <div className={_cn(
          "text-xs mt-1", _isUser 
            ? "text-white/70" 
            : theme === "dark"
              ? "text-gray-300"
              : "text-gray-500"
        )}>
          {_format(timestamp, _"h:mm a")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>
    </div>
  )
},

// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
// dependency like DOMPurify for now and instead escape the five critical
// characters. This ensures any user-supplied string is rendered harmless
// before we perform our link replacements below.
<<<<<<< HEAD
function escapeHtml(unsafe: string): string {
  return unsafe
<<<<<<< HEAD
    .replace(/&/g, "&amp,")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, """)
    .replace(/'/g, "&#039,")
=======
    .replace(/&/g, &quot;&amp;&quot;)
    .replace(/</g, &quot;&lt;&quot;)
    .replace(/>/g, &quot;&gt;&quot;)
    .replace(/&quot;/g, &quot;&quot;&quot;)
    .replace(/'/g, &quot;&#039;");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}
=======
function escapeHtml(_unsafe: string): string {_return unsafe
    .replace(/&/g, _"&amp;")
    .replace(/</g, _"&lt;")
    .replace(/>/g, _"&gt;")
    .replace(/"/g, _"&quot;")
    .replace(/'/g, _"&#039;");}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

function formatMessageWithLinks(_message: string): string {_// First, _escape any HTML so that user input cannot break out of the intended
  // markup.
<<<<<<< HEAD
  const safeText = escapeHtml(message),

  // Replace URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g,
  let formattedMessage = safeText.replace(
    urlRegex,
<<<<<<< HEAD
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
  ),
=======
    '<a href="$1&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; class=&quot;text-zion-cyan underline hover:text-zion-cyan/80">$1</Link>'
=======
  const _safeText = escapeHtml(message);

  // Replace URLs
  const _urlRegex = /(https?:\/\/[^\s]+)/g;
  let _formattedMessage = safeText.replace(
    urlRegex, _'<a href="$1" target="_blank" rel="noopener noreferrer" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>'
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Replace help-center references like [Getting Started]
<<<<<<< HEAD
  const helpCenterRegex = /\[([^\]]+)\]/g,
  formattedMessage = formattedMessage.replace(
    helpCenterRegex,
<<<<<<< HEAD
    '<a href="/help/$1" class="text-zion-cyan underline hover: text-zion-cyan/80">$1</a>'
  ),
=======
    '<Link href="/help/$1&quot; class=&quot;text-zion-cyan underline hover:text-zion-cyan/80">$1</Link>'
=======
  const _helpCenterRegex = /\[([^\]]+)\]/g;
  formattedMessage = formattedMessage.replace(
    helpCenterRegex, _'<a href="/help/$1" class="text-zion-cyan underline hover:text-zion-cyan/80">$1</a>'
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return formattedMessage
}
=======
  return formattedMessage;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
