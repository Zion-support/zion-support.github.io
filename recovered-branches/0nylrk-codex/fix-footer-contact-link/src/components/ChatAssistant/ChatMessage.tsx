import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ChatMessageProps {
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date,
  key?: string | number
}

  role: 'user' | 'assistant'
  message: string

  timestamp?: Date;
interface ChatMessageProps {
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date,
  key?: string | number
}
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {
  const isUser = $2;
  return (
    <div className = $2;
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className = $2;
        isUser ? "border-zion-purple/20" : "border-zion-cyan/20"
      )}>
        {isUser ? (
          <AvatarFallback className = $2;
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      )}>
        <div className="whitespace-pre-wrap">{message}</div>
        {timestamp && (
          <div className="text-xs text-zion-slate mt-1 text-right">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
    </div>
  )
}