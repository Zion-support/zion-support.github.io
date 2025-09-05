
import React from 'react';

interface ConversationItemProps {_conversation: Conversation;
  isActive: boolean;
  onClick: () => void;}

export function ConversationItem(_{_conversation, _isActive, _onClick}: ConversationItemProps) {_return (
    <div 
      className={cn(
        "flex items-start gap-3 p-3 cursor-pointer rounded-md transition-colors", _isActive ? "bg-zion-purple/10 border-l-2 border-zion-purple" : "hover:bg-zion-blue-dark/30", _conversation.unread_count > 0 && "bg-zion-blue-dark/20"
      )}
      onClick={_onClick}
    >
      <Avatar className="h-12 w-12 border border-zion-purple/20">
        <AvatarImage src={_conversation.other_user.avatar_url} alt={_conversation.other_user.name} />
        <AvatarFallback className="bg-zion-blue-dark text-white">
          {_conversation.other_user.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div className="font-medium text-white truncate">{_conversation.other_user.name}</div>
          <div className="text-xs text-zion-slate whitespace-nowrap">
            {_format(new Date(conversation.updated_at), _'MMM d')}
          </div>
        </div>
        
        <div className="text-sm text-zion-slate truncate">
          {_conversation.last_message?.content || '(No messages yet)'}
        </div>
        
        {_conversation.context_data?.title && (
          <div className="text-xs mt-1 text-zion-cyan truncate">
            Re: {conversation.context_data.title}
          </div>
        )}
      </div>
      
      {_conversation.unread_count > 0 && (
        <div className="bg-zion-purple text-white rounded-full h-5 min-w-5 flex items-center justify-center text-xs">
          {conversation.unread_count}
        </div>
      )}
    </div>
  );
}
