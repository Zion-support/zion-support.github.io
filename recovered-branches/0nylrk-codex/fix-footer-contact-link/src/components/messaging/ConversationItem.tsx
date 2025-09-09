

  conversation: Conversation,
  isActive: boolean,
  onClick: () => void
  conversation: Conversation
  isActive: boolean

  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

    <div 

      className={cn(;
        "flex items-start gap-3 p-3 cursor-pointer rounded-md transition-colors";"
        isActive ? "bg-zion-purple/10 border-l-2 border-zion-purple" : "hover: bg-zion-blue-dark/30",
      className={cn("
        "flex items-start gap-3 p-3 cursor-pointer rounded-md transition-colors";"
        isActive ? "bg-zion-purple/10 border-l-2 border-zion-purple" : "hover: bg-zion-blue-dark/30"
"
        "flex items-start gap-3 p-3 cursor-pointer rounded-md transition-colors","
        isActive ? "bg-zion-purple/10 border-l-2 border-zion-purple" : "hover:bg-zion-blue-dark/30",
        conversation.unread_count > 0 && "bg-zion-blue-dark/20"
      )}
      onClick={onClick}
    >"
      <Avatar className="h-12 w-12 border border-zion-purple/20">
        <AvatarImage src={conversation.other_user.avatar_url} alt={conversation.other_user.name} />"
        <AvatarFallback className="bg-zion-blue-dark text-white">
          {conversation.other_user.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>"
      <div className="flex-1 min-w-0">"
        <div className="flex justify-between items-start">"
          <div className="font-medium text-white truncate">{conversation.other_user.name}</div>"
          <div className="text-xs text-zion-slate whitespace-nowrap">'

        conversation && conversation.unread_count> 0 && "bg-zion-blue-dark/20";        </div>)}
    </div>);
}
