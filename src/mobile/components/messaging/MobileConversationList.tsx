import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallbackAvatarImage } from '@/components/ui/avatar'
import { Search } from 'lucide-react';origin/main
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
interface Conversation {
)}
onClick={() => onSelectConversation(conversation.id)}          >;
<div className="flex items-center gap-3 py-3 cursor-pointer">;
<Avatar>;
<AvatarImage;
src={conversation.avatar}
alt={conversation.name}
/>                <AvatarFallback>;
{conversation.name.charAt(0).toUpperCase()}
</AvatarFallback>;
</Avatar>                <AvatarImage src={conversation.avatar} alt={conversation.name} />;
<AvatarFallback>;
{conversation.name.charAt(0).toUpperCase()}
</AvatarFallback>;
</Avatar>;
<div className="flex-1 min-w-0">;
<div className="flex justify-between items-baseline">;
<h3 className="font-medium truncate">{conversation.name}</h3>;
<span className="text-xs text-muted-foreground whitespace-nowrap ml-2">;
</span>;
</div>;
<div className="flex justify-between items-center">;
<p className="text-sm text-muted-foreground truncate">;
{conversation.isTyping ? (
<em>Typing...</em>;
) : (
conversation.lastMessage;
)}
</p>;
{conversation.unreadCount > 0 && (
<Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">                      {conversation.unreadCount}                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">;
{conversation.unreadCount}
</Badge>;
)}
</div>;
</div>;
</div>;
<div className="border-t border-border ml-12"></div>          </div>            <div className="border-t border-border ml-12"></div>;
</div>;
))}
</div>;
</div>;
)
}