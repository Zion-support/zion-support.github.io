import { cn } from &quot;@/lib/utils&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;

interface ChatMessageProps {
  role: 'user' | 'assistant';
  message: string;
  timestamp?: Date;
  key?: string | number;
}

export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {
  const isUser = role === 'user';
  
  return (
    <div className={cn(
      &quot;flex items-start gap-2&quot;,
      isUser ? &quot;flex-row-reverse&quot; : &quot;flex-row&quot;
    )}>
      <Avatar className={cn(
        &quot;h-8 w-8 border&quot;,
        isUser ? &quot;border-zion-purple/20&quot; : &quot;border-zion-cyan/20&quot;
      )}>
        {isUser ? (
          <AvatarFallback className=&quot;bg-zion-purple/20 text-white&quot;>U</AvatarFallback>
        ) : (
          <AvatarImage
            src=&quot;https://placehold.co/32x32?text=AI&quot;
            alt=&quot;AI Assistant&quot;
          />
        )}
        {!isUser && <AvatarFallback className=&quot;bg-zion-cyan/20 text-white&quot;>AI</AvatarFallback>}
      </Avatar>
      
      <div className={cn(
        &quot;max-w-[80%] px-4 py-2 rounded-lg&quot;,
        isUser 
          ? &quot;bg-zion-purple/20 text-white rounded-tr-none&quot; 
          : &quot;bg-zion-cyan/10 text-white rounded-tl-none&quot;
      )}>
        <div className=&quot;whitespace-pre-wrap&quot;>{message}</div>
        {timestamp && (
          <div className=&quot;text-xs text-zion-slate mt-1 text-right&quot;>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
    </div>
  );
}