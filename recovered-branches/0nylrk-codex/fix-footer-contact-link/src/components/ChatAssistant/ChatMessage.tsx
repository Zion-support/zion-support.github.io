import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ChatMessageProps {
<<<<<<< HEAD
  role: 'user' | 'assistant';
  message: string;
=======
  role: 'user' | 'assistant'
  message: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  timestamp?: Date;
  key?: string | number
}
export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {
<<<<<<< HEAD
  const isUser = null;
        isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
=======
  const isUser = role === 'user';
  return (
    <div className={cn(
      "flex items-start gap-2";
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className={cn(
        "h-8 w-8 border";
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
        "max-w-[80%] px-4 py-2 rounded-lg";
        isUser
          ? "bg-zion-purple/20 text-white rounded-tr-none"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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