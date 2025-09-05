import React, { useMemo } from &quot;react&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { format } from &quot;date-fns&quot;;
// Use the wrapper hook so TypeScript properly infers the return type
// from the ThemeProvider context
import { useTheme } from &quot;@/hooks/useTheme&quot;;

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser,
  timestamp}: ChatMessageProps) => {
  const { theme } = useTheme();
  
  // Memoise the sanitized + formatted HTML so we don't create a new object on every render –
  // this avoids the `react/jsx-no-constructed-context-values` & `react/jsx-no-bind` warnings.
  const sanitizedHtml = useMemo<{ __html: string}>(
    () => ({ __html: formatMessageWithLinks(message) }),
    [message]
  );

  return (
    <div className={cn(&quot;flex items-start gap-3&quot;, isUser && &quot;flex-row-reverse&quot;)}>
      <Avatar className=&quot;h-8 w-8&quot;>
        {isUser ? (
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
        </div>
      </div>
    </div>
  );
};

// A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy
// dependency like DOMPurify for now and instead escape the five critical
// characters. This ensures any user-supplied string is rendered harmless
// before we perform our link replacements below.
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, &quot;&amp;&quot;)
    .replace(/</g, &quot;&lt;&quot;)
    .replace(/>/g, &quot;&gt;&quot;)
    .replace(/&quot;/g, &quot;&quot;&quot;)
    .replace(/'/g, &quot;&#039;");
}

function formatMessageWithLinks(message: string): string {
  // First, escape any HTML so that user input cannot break out of the intended
  // markup.
  const safeText = escapeHtml(message);

  // Replace URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  let formattedMessage = safeText.replace(
    urlRegex,
    '<a href="$1&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; class=&quot;text-zion-cyan underline hover:text-zion-cyan/80">$1</Link>'
  );

  // Replace help-center references like [Getting Started]
  const helpCenterRegex = /\[([^\]]+)\]/g;
  formattedMessage = formattedMessage.replace(
    helpCenterRegex,
    '<Link href="/help/$1&quot; class=&quot;text-zion-cyan underline hover:text-zion-cyan/80">$1</Link>'
  );

  return formattedMessage;
}
