

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

    <div 

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {format(new Date(conversation.updated_at), 'MMM d')}
          </div>
        </div>"
        <div className="text-sm text-zion-slate truncate">'
          {conversation.last_message?.content |'(No messages yet)'}
        </div>

<<<<<<< HEAD

=======
        <div className="text-sm text-zion-slate truncate">
          {conversation.last_message?.content |'(No messages yet)'}
        </div>
import React from 'react';import React from 'react';
        {conversation.context_data?.title && (
          <div className="text - xs mt - 1 text - zion-cyan truncate">;
            Re: {conversation.context_data.title}
      {conversation.unread_count > 0 && (
        <div className="bg - zion - purple text - white rounded - full h - 5 min - w-5 flex items - center justify - center text-xs">;
          {conversation.unread_count}
import {format} from 'date-fns';
import {cn} from '@/lib/utils';
import {Conversation} from '@/types/messaging';

import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

<<<<<<< HEAD

=======
  onClick: () => void;
import React from 'react',;''
import { format } from 'date-fns',;''
import { cn } from '@/lib/utils',;''
import { Conversation } from '@/types/messaging',;''
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;'
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface ConversationItemProps {;
  conversation: Conversation,;
  isActive: boolean,;
  onClick: () => void;
}

<<<<<<< HEAD


export function ConversationItem(): any ({ conversation, isActive, onClick }: ConversationItemProps) {;

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-3 cursor-pointer rounded-md transition-colors"
        isActive ? "bg-zion-purple/10 border-l-2 border-zion-purple" : "hover: bg-zion-blue-dark/30",
        conversation && conversation.unread_count> 0 && "bg-zion-blue-dark/20";        </div>)}
    </div>);
}
