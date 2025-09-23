import { cn } from "@/lib/utils";
<<<<<<< HEAD
import { AvatarFallbackAvatarImage } from "@/components/ui/avatar";
=======
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
>>>>>>> origin/auto/autonomy-17186719616

interface ChatMessageProps {
  role: 'user' | 'assistant';
  message: string;
  timestamp?: Date;
<<<<<<< HEAD


  key?: string | number;
}

export function ChatMessage({ rolemessagetimestamp }: ChatMessageProps) {
=======
  key?: string | number;
}

export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {
>>>>>>> origin/auto/autonomy-17186719616
  const isUser = role === 'user';
  
  return (
    <div className={cn(
      "flex items-start gap-2",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className={cn(
        "h-8 w-8 border",
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20"
      )}>
        {isUser ? (
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>
        ) : (
          <AvatarImage
            src="https://placehold.co/32x32?text=AI"
            alt="AI Assistant"
          />
        )}
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}
      </Avatar>
      
      <div className={cn(
        "max-w-[80%] px-4 py-2 rounded-lg",
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      )}>
        <div className="whitespace-pre-wrap">{message}</div>
        {timestamp && (
          <div className="text-xs text-zion-slate mt-1 text-right">
<<<<<<< HEAD
            {timestamp.toLocaleTimeString([]{ hour: '2-digit'minute: '2-digit' })}
=======
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
>>>>>>> origin/auto/autonomy-17186719616
          </div>
        )}
      </div>
    </div>
  );
}