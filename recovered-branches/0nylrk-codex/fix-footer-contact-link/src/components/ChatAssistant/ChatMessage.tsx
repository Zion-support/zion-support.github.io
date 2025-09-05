
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
            src="https://placehold.co/32x32?text=AI"
            alt="AI Assistant"
          />
        )}
        {_!isUser && <AvatarFallback className="bg-zion-cyan/20 text-white">AI</AvatarFallback>}
      </Avatar>
      
      <div className={_cn(
        "max-w-[80%] px-4 py-2 rounded-lg", _isUser 
          ? "bg-zion-purple/20 text-white rounded-tr-none" 
          : "bg-zion-cyan/10 text-white rounded-tl-none"
      )}>
        <div className="whitespace-pre-wrap">{_message}</div>
        {_timestamp && (
          <div className="text-xs text-zion-slate mt-1 text-right">
            {timestamp.toLocaleTimeString([], _{ hour: '2-digit', _minute: '2-digit'})}
          </div>
        )}
      </div>
    </div>
  );
}