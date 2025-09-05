
import React from &quot;react&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { format } from &quot;date-fns&quot;;
import { useTheme } from &quot;@/hooks/useTheme&quot;;

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  const { theme } = useTheme();
  
  return (
    <div className={cn(&quot;flex items-start gap-3&quot;, isUser && &quot;flex-row-reverse&quot;)}>
      <Avatar className=&quot;h-8 w-8&quot;>
        {isUser ? (
          <>
            <AvatarImage src=&quot;https://i.pravatar.cc/40?img=1&quot; alt=&quot;User&quot; />
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
        <div dangerouslySetInnerHTML={{ __html: formatMessageWithLinks(message) }} />
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
}

// Function to convert URLs and help links to actual clickable links
function formatMessageWithLinks(message: string): string {
  // Replace URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  let formattedMessage = message.replace(
    urlRegex, 
    '<a href=&quot;$1&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; class=&quot;text-zion-cyan underline hover:text-zion-cyan/80&quot;>$1</Link>'
  );
  
  // Replace help center references like [Getting Started]
  const helpCenterRegex = /\[([^\]]+)\]/g;
  formattedMessage = formattedMessage.replace(
    helpCenterRegex, 
    '<a href=&quot;/help/$1&quot; class=&quot;text-zion-cyan underline hover:text-zion-cyan/80&quot;>$1</Link>'
  );
  
  return formattedMessage;
}
