<<<<<<< HEAD
import { cn } from "@/lib/utils",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
;
interface ChatMessageProps {;
  role:'user' | 'assistant',;
  message:string,;
  timestamp?:Date,;
  key?:string | number;
}
;
export function ChatMessage({ role, message, timestamp } ChatMessageProps) {;
  const isUser = role === 'user',;
  ;
  return (;
    <div className={cn(;
      "flex items-start gap-2",;
      isUser ? "flex-row-reverse" :"flex-row";
    )}>;
      <Avatar className={cn(;
        "h-8 w-8 border",;
        isUser ? "border-zion-purple/20" :"border-zion-cyan/20";
      )}>;
        {isUser ? (;
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>;
        ) :(;
          <AvatarImage;
            src="https://placehold.co/32x32?text=AI";
            alt="AI Assistant";
          />;
        )}
        {!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}
      </Avatar>;
      ;
      <div className={cn(;
        "max-w-[80%] px-4 py-2 rounded-lg",;
        isUser ;
          ? "bg-zion-purple/20 text-white rounded-tr-none" ;
          :"bg-zion-cyan/10 text-white rounded-tl-none";
      )}>;
        <div className="whitespace-pre-wrap">{message}</div>;
        {timestamp && (;
          <div className="text-xs text-zion-slate mt-1 text-right">;
            {timestamp.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}
          </div>;
        )}
      </div>;
    </div>;
  ),;
=======
import { cn } from "@/lib/utils",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
interface ChatMessageProps {
  role: 'user' | 'assistant',
  message: string,
  timestamp?: Date,
  key?: string | number
}

export function ChatMessage({ role, message, timestamp }: ChatMessageProps) {
  const isUser = role === 'user',
  
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

interface ChatMessageProps {_role: 'user' | 'assistant';
  message: string;
  timestamp?: Date;
  key?: string | number;}

export function ChatMessage(_{_role, _message, _timestamp}: ChatMessageProps) {_const _isUser = role === 'user';
  
  return (
    <div className={cn(
      "flex items-start gap-2", _isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className={_cn(
        "h-8 w-8 border", _isUser ? "border-zion-purple/20" : "border-zion-cyan/20"
      )}>
        {_isUser ? (
          <AvatarFallback className="bg-zion-purple/20 text-white">U</AvatarFallback>
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
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}          </div>
        )}
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}