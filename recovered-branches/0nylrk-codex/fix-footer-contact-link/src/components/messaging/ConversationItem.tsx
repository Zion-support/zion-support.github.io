
<<<<<<< HEAD
import React from 'react',
import { format } from 'date-fns',
import { cn } from '@/lib/utils',
import { Conversation } from '@/types/messaging',
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',

interface ConversationItemProps {
  conversation: Conversation,
  isActive: boolean,
  onClick: () => void
}
=======
import React from 'react';

interface ConversationItemProps {_conversation: Conversation;
  isActive: boolean;
  onClick: () => void;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ConversationItem(_{_conversation, _isActive, _onClick}: ConversationItemProps) {_return (
    <div 
      className={cn(
<<<<<<< HEAD
        &quot;flex items-start gap-3 p-3 cursor-pointer rounded-md transition-colors&quot;,
        isActive ? &quot;bg-zion-purple/10 border-l-2 border-zion-purple&quot; : &quot;hover:bg-zion-blue-dark/30&quot;,
        conversation.unread_count > 0 && &quot;bg-zion-blue-dark/20&quot;
=======
        "flex items-start gap-3 p-3 cursor-pointer rounded-md transition-colors", _isActive ? "bg-zion-purple/10 border-l-2 border-zion-purple" : "hover:bg-zion-blue-dark/30", _conversation.unread_count > 0 && "bg-zion-blue-dark/20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      onClick={_onClick}
    >
<<<<<<< HEAD
      <Avatar className=&quot;h-12 w-12 border border-zion-purple/20&quot;>
        <AvatarImage src={conversation.other_user.avatar_url} alt={conversation.other_user.name} />
        <AvatarFallback className=&quot;bg-zion-blue-dark text-white&quot;>
          {conversation.other_user.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className=&quot;flex-1 min-w-0&quot;>
        <div className=&quot;flex justify-between items-start&quot;>
          <div className=&quot;font-medium text-white truncate&quot;>{conversation.other_user.name}</div>
          <div className=&quot;text-xs text-zion-slate whitespace-nowrap&quot;>
            {format(new Date(conversation.updated_at), 'MMM d')}
          </div>
        </div>
        
        <div className=&quot;text-sm text-zion-slate truncate&quot;>
          {conversation.last_message?.content || '(No messages yet)'}
        </div>
        
        {conversation.context_data?.title && (
          <div className=&quot;text-xs mt-1 text-zion-cyan truncate&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Re: {conversation.context_data.title}
          </div>
        )}
      </div>
      
<<<<<<< HEAD
      {conversation.unread_count > 0 && (
        <div className=&quot;bg-zion-purple text-white rounded-full h-5 min-w-5 flex items-center justify-center text-xs&quot;>
=======
      {_conversation.unread_count > 0 && (
        <div className="bg-zion-purple text-white rounded-full h-5 min-w-5 flex items-center justify-center text-xs">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          {conversation.unread_count}
        </div>
      )}
    </div>
  )
}
