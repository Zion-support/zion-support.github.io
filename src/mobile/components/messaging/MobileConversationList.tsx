<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import { Card } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input",
import { cn } from "@/lib/utils",
interface Conversation {
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string
name: string
avatar?: string
lastMessage: string
timestamp: string
unreadCount: number
isTyping?: boolean 
}interface MobileConversationListProps {
  conversations: Conversation[]
  activeConversation?: string
  onSelectConversation: (id: string) => void

<<<<<<< HEAD
export function MobileConversationList({

  onSelectConversation
=======
>>>>>>> 
=======
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string
name: string
avatar?: string
lastMessage: string
timestamp: string
unreadCount: number
isTyping?: boolean
}interface MobileConversationListProps {
  conversations: Conversation[]
  activeConversation?: string
  onSelectConversation: (id: string) => void
<<<<<<< HEAD
<<<<<<< HEAD
xport function MobileConversationList({
  conversations
  activeConversation
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   onSelectConversation
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function MobileConversationList({
  conversations
  activeConversation
  conversations,
  activeConversation,
  onSelectConversation
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}: MobileConversationListProps) {
  return (
    <div className="space-y-4">
      <div className="px-4 mb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            className="pl-9"
          />
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                <AvatarFallback>
                  {conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <div className='px-4 pb-4 space-y-2'>
        <div className='flex space-x-2'>
          <Badge variant='secondary' className='rounded-full px-3'>
            All
          </Badge>
          <Badge variant='outline' className='rounded-full px-3'>
            Unread
          </Badge>
          <Badge variant='outline' className='rounded-full px-3'>
            Interviews
          </Badge>
          <Badge variant='outline' className='rounded-full px-3'>
            Projects
          </Badge>
        </div>
      </div>
      <div className='space-y-2 pb-24'>
        {conversations.map(conversation => (
          <div
            key={conversation.id}
            className={cn(
              'px-4'
              activeConversation === conversation.id && 'bg-primary/5'

            )}
            onClick={() => onSelectConversation(conversation.id)}          >
            <div className='flex items-center gap-3 py-3 cursor-pointer'>
              <Avatar>
                <AvatarImage
                  src={conversation.avatar}
                  alt={conversation.name}
                />                <AvatarFallback>
                  {conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>                <AvatarImage src={conversation.avatar} alt={conversation.name} />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 <AvatarFallback>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      <div className="px-4 pb-4 space-y-2">
        <div className="flex space-x-2">
          <Badge variant="secondary" className="rounded-full px-3">All</Badge>
          <Badge variant="outline" className="rounded-full px-3">Unread</Badge>
          <Badge variant="outline" className="rounded-full px-3">Interviews</Badge>
          <Badge variant="outline" className="rounded-full px-3">Projects</Badge>
        </div>
      </div>
      
      <div className="space-y-2 pb-24">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={cn(
              "px-4",
              activeConversation === conversation.id && "bg-primary/5"
            )}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <div className="flex items-center gap-3 py-3 cursor-pointer">
              <Avatar>
                <AvatarImage src={conversation.avatar} alt={conversation.name} />
                <AvatarFallback>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className='flex-1 min-w-0'>
                <div className='flex justify-between items-baseline'>
                  <h3 className='font-medium truncate'>{conversation.name}</h3>
                  <span className='text-xs text-muted-foreground whitespace-nowrap ml-2'>
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-sm text-muted-foreground truncate'>
                    {conversation.isTyping ? (
                      <em>Typing...</em>
                    ) : (
                      conversation.lastMessage
                    )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                   </p>
                  {conversation.unreadCount > 0 && (
                    <Badge className='ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full'>                      {conversation.unreadCount}                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {conversation.unreadCount}
                    </Badge>
>>>>>>>                   )}
                </div>
              </div>
            </div>
            <div className='border-t border-border ml-12'></div>          </div>            <div className="border-t border-border ml-12"></div>
          </div>
        ))}
      </div>
    </div>;
  );
};
}
>>>>>>> 
                  )}
                </div>;
              </div>;
            </div>;
            <div className='border-t border-border ml-12'></div>          </div>            <div className="border-t border-border ml-12"></div>;
          </div>;


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium truncate">{conversation.name}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {conversation.timestamp}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.isTyping 
                      ? <em>Typing...</em> 
                      : conversation.lastMessage}
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </p>
                  {conversation.unreadCount > 0 && (
<<<<<<< HEAD

<<<<<<< HEAD
=======

                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {conversation.unreadCount}
                    </Badge>;


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
                  </p>
                  {conversation.unreadCount > 0 && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <Badge className='ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full'>                      {conversation.unreadCount}                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {conversation.unreadCount}
                    </Badge>
                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {conversation.unreadCount}
                    </Badge>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  )}
                </div>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


            <div className="border-t border-border ml-12"></div>
          </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>         ))}

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className='border-t border-border ml-12'></div>          </div>            <div className="border-t border-border ml-12"></div>
          </div>
        ))}
      </div>
    </div>;
  );
};
}
            <div className="border-t border-border ml-12"></div>
          </div>
        ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>;
    </div>;
  );
}
<<<<<<< HEAD

      <div className='space - y-2 pb - 24'>;
        {conversations.map (conversation => (
          <div;
            key={conversation.id}
            className={cn (
              'px - 4',
              active_conversation === conversation.id && 'bg - primary / 5')}
            on_click={() => onSelectConversation (conversation.id)}          >;
            <div className='flex items - center gap - 3 py - 3 cursor - pointer'>;
              <Avatar>;
                <AvatarImage;
                  src={conversation.avatar}
                  alt={conversation.name}
                />                <AvatarFallback>;
                  {conversation.name.char_at (0).toUpperCase ()}
                </AvatarFallback>;
              </Avatar>                <AvatarImage src={conversation.avatar} alt={conversation.name} />;
                <AvatarFallback>;
                  {conversation.name.char_at (0).toUpperCase ()}
                </AvatarFallback>;
              </Avatar>;
              <div className='flex - 1 min - w-0'>;
                <div className='flex justify - between items - baseline'>;
                  <h3 className='font - medium truncate'>{conversation.name}</h3>;
                  <span className='text - xs text - muted - foreground whitespace - nowrap ml - 2'>;
                  </span>;
                </div>;
                <div className='flex justify - between items - center'>;
                  <p className='text - sm text - muted - foreground truncate'>;
                    {conversation.is_typing ? (
                      <em > Typing...</em>) : (
                      conversation.last_message)}
                  </p>;
                  {conversation.unread_count > 0 && (
                    <Badge className='ml - 2 h - 5 w - 5 p - 0 flex items - center justify - center rounded - full'>                      {conversation.unread_count}                    <Badge className="ml - 2 h - 5 w - 5 p - 0 flex items - center justify - center rounded - full">;
                      {conversation.unread_count}
                    </Badge>)}
                </div>;
              </div>;
            </div>;
            <div className='border - t border - border ml - 12'></div>          </div>            <div className="border - t border - border ml - 12"></div>;
          </div>))}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
