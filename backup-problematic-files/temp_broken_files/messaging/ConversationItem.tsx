
import React from 'react',;
import { format } from 'date-fns',;
import { cn } from '@/lib/utils',;
import { Conversation } from '@/types/messaging',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
;
interface ConversationItemProps {;
  conversation:Conversation,;
  isActive:boolean,;
  onClick:() => void;
}
;
export function ConversationItem({ conversation, isActive, onClick } ConversationItemProps) {;
  return (;
    <div ;
      className={cn(;
        "flex items-start gap-3 p-3 cursor-pointer rounded-md transition-colors",;
        isActive ? "bg-zion-purple/10 border-l-2 border-zion-purple" :"hover:bg-zion-blue-dark/30",;
        conversation.unread_count > 0 && "bg-zion-blue-dark/20";
      )}
      onClick={onClick}
    >;
      <Avatar className="h-12 w-12 border border-zion-purple/20">;
