
<<<<<<< HEAD
import React from "react",
import { Card } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input",
import { cn } from "@/lib/utils",
=======
import React from &quot;react&quot;;
import { Card } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Search } from &quot;lucide-react&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { cn } from &quot;@/lib/utils&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface Conversation {
  id: string,
  name: string,
  avatar?: string,
  lastMessage: string,
  timestamp: string,
  unreadCount: number,
  isTyping?: boolean
}

interface MobileConversationListProps {
  conversations: Conversation[],
  activeConversation?: string,
  onSelectConversation: (id: string) => void
}

export function MobileConversationList({
  conversations,
  activeConversation,
  onSelectConversation
}: MobileConversationListProps) {
  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;px-4 mb-2&quot;>
        <div className=&quot;relative&quot;>
          <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground&quot; />
          <Input
            placeholder=&quot;Search messages...&quot;
            className=&quot;pl-9&quot;
          />
        </div>
      </div>
      
      <div className=&quot;px-4 pb-4 space-y-2&quot;>
        <div className=&quot;flex space-x-2&quot;>
          <Badge variant=&quot;secondary&quot; className=&quot;rounded-full px-3&quot;>All</Badge>
          <Badge variant=&quot;outline&quot; className=&quot;rounded-full px-3&quot;>Unread</Badge>
          <Badge variant=&quot;outline&quot; className=&quot;rounded-full px-3&quot;>Interviews</Badge>
          <Badge variant=&quot;outline&quot; className=&quot;rounded-full px-3&quot;>Projects</Badge>
        </div>
      </div>
      
      <div className=&quot;space-y-2 pb-24&quot;>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={cn(
              &quot;px-4&quot;,
              activeConversation === conversation.id && &quot;bg-primary/5&quot;
            )}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <div className=&quot;flex items-center gap-3 py-3 cursor-pointer&quot;>
              <Avatar>
                <AvatarImage src={conversation.avatar} />
                <AvatarFallback>
                  {conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className=&quot;flex-1 min-w-0&quot;>
                <div className=&quot;flex justify-between items-baseline&quot;>
                  <h3 className=&quot;font-medium truncate&quot;>{conversation.name}</h3>
                  <span className=&quot;text-xs text-muted-foreground whitespace-nowrap ml-2&quot;>
                    {conversation.timestamp}
                  </span>
                </div>
                
                <div className=&quot;flex justify-between items-center&quot;>
                  <p className=&quot;text-sm text-muted-foreground truncate&quot;>
                    {conversation.isTyping 
                      ? <em>Typing...</em> 
                      : conversation.lastMessage}
                  </p>
                  
                  {conversation.unreadCount > 0 && (
                    <Badge className=&quot;ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full&quot;>
                      {conversation.unreadCount}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className=&quot;border-t border-border ml-12&quot;></div>
          </div>
        ))}
      </div>
    </div>
  )
}
