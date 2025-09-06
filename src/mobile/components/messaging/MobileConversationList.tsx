

import React from "react",
import { Card } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input",
import { cn } from "@/lib/utils",
interface Conversation {
  id: string,
  name: string,
  avatar?: string,
  lastMessage: string,
  timestamp: string,
  unreadCount: number,
  isTyping?: boolean
import React from "react",;
import { Card } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input",;
import { cn } from "@/lib/utils",;
interface Conversation {;
  id: string,;
  name: string,;
  avatar?: string,;
  lastMessage: string,;
  timestamp: string,;
  unreadCount: number,;
  isTyping?: boolean;
}
;
interface MobileConversationListProps {;
  conversations: Conversation[],;
  activeConversation?: string,;
  onSelectConversation: (id: string) => void;
}

export function MobileConversationList({

  onSelectConversation
}: MobileConversationListProps) {
  return (
    <div className='space-y-4'>
      <div className='px-4 mb-2'>
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
          <Input placeholder='Search messages...' className='pl-9' />
        </div>
      </div>

                <AvatarFallback>
                  {conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

                  </p>
                  
                  {conversation.unreadCount > 0 && (

                  )}
                </div>
              </div>
            </div>

