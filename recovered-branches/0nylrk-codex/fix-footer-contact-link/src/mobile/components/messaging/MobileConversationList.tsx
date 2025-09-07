<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react",
import { Card } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
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

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
lastMessage: string,;
  timestamp: string,;
  unreadCount: number,;
  isTyping?: boolean;
}

interface MobileConversationListProps {;
  conversations: Conversation[],;

import React from "react",
import { Card } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
interface Conversation {

  id: string

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
<<<<<<< HEAD
import React from "react",
import { Card } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
interface Conversation {

  id: string
  name: string
  avatar?: string;
  lastMessage: string
  timestamp: string
  unreadCount: number

  isTyping?: boolean
}
interface MobileConversationListProps {

  conversations: Conversation[]

  activeConversation?: string;
  onSelectConversation: (id: string) => void
}
import { Input } from "@/components/ui/input",
import { cn } from "@/lib/utils",
=======
interface Conversation {;
  id: string,;
  name: string,;
  avatar?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  lastMessage: string,;
  timestamp: string,;
  unreadCount: number,;
  isTyping?: boolean;
}

interface MobileConversationListProps {;
  conversations: Conversation[],;

  onSelectConversation: (id: string) => void
}
import { Input } from "@/components/ui/input",
import { cn } from "@/lib/utils",

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface Conversation {

  id: string,
  name: string,
  avatar?: string,
  lastMessage: string,
  timestamp: string,
  unreadCount: number,
<<<<<<< HEAD

export function MobileConversationList({
=======
<<<<<<< HEAD

export function MobileConversationList({
=======
  isTyping?: boolean
<<<<<<< HEAD
}

interface MobileConversationListProps {
  conversations: Conversation[],
  activeConversation?: string;
  onSelectConversation: (id: string) => void
}

export function MobileConversationList({;
  conversations;
  activeConversation;
import React from "react",;
import { Card } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Search } from "lucide-react",;
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



export function MobileConversationList({
<<<<<<< HEAD

  activeConversation?: string;
  onSelectConversation: (id: string) => void;
}
export function MobileConversationList(): any ({;
  conversations;
  activeConversation;
  onSelectConversation;
}: MobileConversationListProps) {;
  return (
>>>>>>> merged-prs-20250907-203621
export function MobileConversationList({
  conversations,
  activeConversation,
  onSelectConversation
}: MobileConversationListProps) {
  return (
<<<<<<< HEAD
    <div className = $2;
              activeConversation === conversation.id && "bg-primary/5"
            )}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <div className="flex items-center gap-3 py-3 cursor-pointer">
              <Avatar>
                <AvatarImage src={conversation.avatar} />
                <AvatarFallback>
                  {conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
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
                  </p>
                  {conversation.unreadCount > 0 && (
                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {conversation.unreadCount}
                    </Badge>
=======

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

import React from "react",;
import { Card } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { cn } from "@/lib/utils",;
;
interface Conversation {;
  id:string,;
  name:string,;
  avatar?:string,;
  lastMessage:string,;
  timestamp:string,;
  unreadCount:number,;
  isTyping?:boolean;}
;
interface MobileConversationListProps {;
  conversations:Conversation[],;
  activeConversation?:string,;
  onSelectConversation:(id:string) => void;
}
;
export function MobileConversationList({;
  conversations,;
  activeConversation,;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export function MobileConversationList(): any ({;
  activeConversation?: string;
  onSelectConversation: (id: string) => void;
}

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

  activeConversation?: string;
  onSelectConversation: (id: string) => void;
}
export function MobileConversationList(): any ({;

  conversations;
  activeConversation;
<<<<<<< HEAD
  onSelectConversation;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onSelectConversation;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}: MobileConversationListProps) {;
  return (

  onSelectConversation;
}: MobileConversationListProps) {;

  return (
          <div;
            key={conversation && conversation.id}
            className={cn(

import React from "react",;
import { Card } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { cn } from "@/lib/utils",;
;
interface Conversation {;
  id:string,;
  name:string,;
  avatar?:string,;
  lastMessage:string,;
  timestamp:string,;
  unreadCount:number,;
  isTyping?:boolean;}
;
interface MobileConversationListProps {;
  conversations:Conversation[],;
  activeConversation?:string,;
  onSelectConversation:(id:string) => void;
}
;
export function MobileConversationList({;
  conversations,;
  activeConversation,;
  onSelectConversation;
} MobileConversationListProps) {;
  return (;

<<<<<<< HEAD
      <div className="px-4 mb-2">;
        <div className="relative">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />;
          <Input
            placeholder="Search messages..."
            className="pl-9"
          />;
        </div>;
      </div>;

=======
=======
} MobileConversationListProps) {;
  return (;
    <div className="space-y-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="px-4 mb-2">;
        <div className="relative">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />;
          <Input;
            placeholder="Search messages...";
            className="pl-9";
          />;
        </div>;
      </div>;
      ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="px-4 pb-4 space-y-2">;
        <div className="flex space-x-2">;
          <Badge variant="secondary" className="rounded-full px-3">All</Badge>;
          <Badge variant="outline" className="rounded-full px-3">Unread</Badge>;
          <Badge variant="outline" className="rounded-full px-3">Interviews</Badge>;
          <Badge variant="outline" className="rounded-full px-3">Projects</Badge>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      <div className="space-y-2 pb-24">;
        {conversations && conversations.map((conversation) => (;

          <div
            key={conversation && conversation.id}
            className={cn(

<<<<<<< HEAD
=======
=======
              "px-4";

              "px-4",
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              activeConversation === conversation.id && "bg-primary/5"
            )}
            onClick={() => onSelectConversation(conversation.id)}
          >"

            <div className="flex items-center gap-3 py-3 cursor-pointer">

              <Avatar>

                <AvatarImage src={conversation.avatar} />

                <AvatarFallback>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
                  {conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium truncate">{conversation.name}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {conversation.timestamp}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground truncate">

<<<<<<< HEAD
                    {conversation.isTyping 


                    {conversation.isTyping
                    {conversation.isTyping 
=======

                    {conversation.isTyping 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      ? <em>Typing...</em>
                      : conversation.lastMessage}
                  </p>
                  {conversation.unreadCount > 0 && ("
                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {conversation.unreadCount}
                    </Badge>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <div className="flex-1 min-w-0">"
                <div className="flex justify-between items-baseline">"
                  <h3 className="font-medium truncate">{conversation.name}</h3>""
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">"
</span>
                <div className="flex justify-between items-center">"
                  <p className="text-sm text-muted-foreground truncate">"
</p>
                      ? <em>Typing...</em>

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
          <div
            key={conversation && conversation.id}
            className={cn(
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              "px-4"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              activeConversation === conversation && conversation.id && "bg-primary/5"
            )}
            onClick={() => onSelectConversation(conversation && conversation.id)}
          >;"
            <div className="flex items-center gap-3 py-3 cursor-pointer">;

              <Avatar>;

                <AvatarImage src={conversation && conversation.avatar} />;

                <AvatarFallback>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                      ? <em>Typing...</em> ;
                  </p>;"
                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">;"

</Badge>

<<<<<<< HEAD
                    </Badge>;

=======
                    </Badge>;

=======
                  {conversation && conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>;
              </Avatar>;
              <div className="flex-1 min-w-0">;
                <div className="flex justify-between items-baseline">;
                  <h3 className="font-medium truncate">{conversation && conversation.name}</h3>;
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">;
                    {conversation && conversation.timestamp}
                  </span>;
                </div>;
                <div className="flex justify-between items-center">;
                  <p className="text-sm text-muted-foreground truncate">;
                    {conversation && conversation.isTyping ;
                      ? <em>Typing...</em> ;
                      : conversation && conversation.lastMessage}
                  </p>;
                  {conversation && conversation.unreadCount > 0 && (;
                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">;
                      {conversation && conversation.unreadCount}
      ;
      <div className="space-y-2 pb-24">;
        {conversations.map((conversation) => (;
          <div;
            key={conversation.id}
            className={cn(;
              "px-4",;
              activeConversation === conversation.id && "bg-primary/5";
            )}
            onClick={() => onSelectConversation(conversation.id)}
          >;
            <div className="flex items-center gap-3 py-3 cursor-pointer">;
              <Avatar>;
                <AvatarImage src={conversation.avatar} />;
                <AvatarFallback>;
                  {conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>;
              </Avatar>;
              ;
              <div className="flex-1 min-w-0">;
                <div className="flex justify-between items-baseline">;
                  <h3 className="font-medium truncate">{conversation.name}</h3>;
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">;
                    {conversation.timestamp}
                  </span>;
                </div>;
                ;
                <div className="flex justify-between items-center">;
                  <p className="text-sm text-muted-foreground truncate">;
                    {conversation.isTyping ;
                      ? <em>Typing...</em> ;
                      :conversation.lastMessage}
                  </p>;
                  ;
                  {conversation.unreadCount > 0 && (;
                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full">;
                      {conversation.unreadCount}
                    </Badge>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  )}
                </div>;
              </div>;
            </div>;"
            <div className="border-t border-border ml-12"></div>;
          </div>;
        ))}
<<<<<<< HEAD

<<<<<<< HEAD
  id: string,
  name: string,
  avatar?: string;
  last_message: string,
  timestamp: string,
  unread_count: number,
  is_typing?: boolean;
}

  conversations: Conversation[],
  active_conversation?: string;
  onSelectConversation: (id: string) => void;
}

      <div className="space - y-2 pb - 24">;
        {conversations.map ((conversation) => (
          <div;
            key={conversation.id}

            <div className="flex items - center gap - 3 py - 3 cursor - pointer">;
              <Avatar>;
                <AvatarImage src={conversation.avatar} />;
                <AvatarFallback>;
                  {conversation.name.char_at (0).toUpperCase ()}
                </AvatarFallback>;

                  <p className="text - sm text - muted - foreground truncate">;
                    {conversation.is_typing;
                      ? <em > Typing...</em>;
                      : conversation.last_message}
                  </p>;

                    <Badge className="ml - 2 h - 5 w - 5 p - 0 flex items - center justify - center rounded - full">;
                      {conversation.unread_count}
                    </Badge>)}
                </div>;
              </div>;

            <div className="border - t border - border ml - 12"></div>;

          </div>))}
      </div>;
    </div>);
}
=======
=======
      </div>;
    </div>;
import React from './react';
import { Card } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Search } from './lucide-react';
import { Input } from '@/components / ui / input';
import { cn } from '@/lib / utils';
interface Conversation {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string,
  name: string,
  avatar?: string;
  last_message: string,
  timestamp: string,
  unread_count: number,
  is_typing?: boolean;
}

  conversations: Conversation[],
  active_conversation?: string;
  onSelectConversation: (id: string) => void;
}

      <div className="space - y-2 pb - 24">;
        {conversations.map ((conversation) => (
          <div;
            key={conversation.id}

            <div className="flex items - center gap - 3 py - 3 cursor - pointer">;
              <Avatar>;
                <AvatarImage src={conversation.avatar} />;
                <AvatarFallback>;
                  {conversation.name.char_at (0).toUpperCase ()}
                </AvatarFallback>;

                  <p className="text - sm text - muted - foreground truncate">;
                    {conversation.is_typing;
                      ? <em > Typing...</em>;
                      : conversation.last_message}
                  </p>;

                    <Badge className="ml - 2 h - 5 w - 5 p - 0 flex items - center justify - center rounded - full">;
                      {conversation.unread_count}
                    </Badge>)}
                </div>;
              </div>;

            <div className="border - t border - border ml - 12"></div>;

          </div>))}
      </div>;
    </div>);
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
  ),;}
 interface Conversation {
  id: string;
name: string;
avatar?: string;
lastMessage: string;
timestamp: string;
unreadCount: number;
isTyping?: boolean 
}interface MobileConversationListProps {
  conversations: Conversation[];
activeConversation?: string;
onSelectConversation: (id: string) => void 
}export function MobileConversationList ({
  conversations;
activeConversation;
onSelectConversation 
}: MobileConversationListProps) {
  return (<div className="space-y-4" > <div className="px-4 mb-2" > <div className="relative" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" /> Search messages..."className=" pl-9"/> </div> </div> <div className=" px-4 pb-4 space-y-2"> <div className=" flex space-x-2"> <Badge variant=" secondary"className=" rounded-full px-3">All</Badge> <Badge variant=" outline"className=" rounded-full px-3">Unread</Badge> <Badge variant=" outline"className=" rounded-full px-3">Interviews</Badge> <Badge variant=" outline"className=" rounded-full px-3">Projects</Badge> </div> </div> <div className=" space-y-2 pb-24"> {
  conversations.map ( (conversation) => (<div key= {
  conversation.id 
}) 
}onClick= {
  () => onSelectConversation (conversation.id) 
}> <div className=" flex items-center gap-3 py-3 cursor-pointer"> <Avatar> <AvatarImage src= {
  conversation.avatar 
}/> <AvatarFallback> {
  conversation.name.charAt (0) .toUpperCase () 
}</AvatarFallback> </Avatar> ? <em>Typing...</em> : conversation.lastMessage 
}</p> {
  conversation.unreadCount 
}</Badge>) 
}</div> </div> </div> <div className=" border-t border-border ml-12" ></div> </div>) ) 
}</div> </div>) 
}
>>>>>>> merged-prs-20250907-203621
                  )}
                </div>
              </div>
            </div>
            <div className="border-t border-border ml-12"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
