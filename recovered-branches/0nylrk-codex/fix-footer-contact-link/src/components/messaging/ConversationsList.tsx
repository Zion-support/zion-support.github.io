<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/ConversationsList.tsx


<<<<<<< HEAD
=======


export function ConversationsList({ ;
  conversations;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import React from 'react';
import { User  } from 'lucide-react';
import { Conversation  } from '@/types/messaging';
import { ConversationItem } from './ConversationItem';
interface ConversationsListProps {

  conversations: Conversation[]
  activeConversation: Conversation | null
  setActiveConversation: (conversation: Conversation) => void

  markAsRead: (conversationId: string) => Promise<void>
}
export function ConversationsList({
  conversations;

  activeConversation
  setActiveConversation
  markAsRead

export function ConversationsList({ ;
  conversations;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import { User } from 'lucide-react',;
import { Conversation } from '@/types/messaging',;
import { ConversationItem } from './ConversationItem',;
interface ConversationsListProps {;
  conversations: Conversation[],;
  activeConversation: Conversation | null,;
  setActiveConversation: (conversation: Conversation) => void,;
  markAsRead: (conversationId: string) => Promise<void>;
}

export function ConversationsList({ 
  conversations,
<<<<<<< HEAD
<<<<<<< HEAD

  activeConversation, 
  setActiveConversation, 
  markAsRead 
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  activeConversation, 
  setActiveConversation, 
  markAsRead 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  activeConversation, 
  setActiveConversation, 
  markAsRead 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}: ConversationsListProps) {
  return (
    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">
      <div className="p-3 border-b border-zion-purple/20">
        <h3 className="font-medium text-white">Conversations</h3>
      </div>
      {conversations.length === 0 ? (
        <div className="p-8 text-center text-zion-slate">
          <User className="h-10 w-10 mx-auto mb-2 text-zion-purple/40" />
          <p>No conversations yet</p>
          <p className="text-sm mt-1">
            Start a conversation from a job or talent profile.
          </p>
        </div>
      ) : (
        <div>
          {conversations.map((conversation) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isActive={activeConversation?.id === conversation.id}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
========
<<<<<<< HEAD
import React from 'react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/ConversationsList.tsx
import {User} from 'lucide-react';
import {Conversation} from '@/types/messaging';
import {ConversationItem} from './ConversationItem';
interface ConversationsListProps {;
  conversations: Conversation[],;
  activeConversation: Conversation | null,;
  setActiveConversation: (conversation: Conversation) => void,;
  markAsRead: (conversationId: string) => Promise<void>;
}
export function ConversationsList(): any ({ ;
  conversations;
  activeConversation, ;
  setActiveConversation, ;
  markAsRead ;
}: ConversationsListProps) {;
  return (
=======

import React from 'react',;
import { User } from 'lucide-react',;
import { Conversation } from '@/types/messaging',;
import { ConversationItem } from './ConversationItem',;
;
interface ConversationsListProps {;
  conversations:Conversation[],;
  activeConversation:Conversation | null,;
  setActiveConversation:(conversation:Conversation) => void,;
  markAsRead:(conversationId:string) => Promise<void>;
}
;
export function ConversationsList({ ;
  conversations,;
  activeConversation, ;
  setActiveConversation, ;
  markAsRead ;
} ConversationsListProps) {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">;
      <div className="p-3 border-b border-zion-purple/20">;
        <h3 className="font-medium text-white">Conversations</h3>;
      </div>;
<<<<<<< HEAD
      {conversations && conversations.length === 0 ? (;
=======
      ;
      {conversations.length === 0 ? (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="p-8 text-center text-zion-slate">;
          <User className="h-10 w-10 mx-auto mb-2 text-zion-purple/40" />;
          <p>No conversations yet</p>;
          <p className="text-sm mt-1">;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>;
<<<<<<< HEAD
      ) : (;
        <div>;
          {conversations && conversations.map((conversation) => (;
            <ConversationItem
              key={conversation && conversation.id}
              conversation={conversation}

                markAsRead(conversation && conversation.id);

=======
              isActive={activeConversation?.id === conversation.id}

              onClick={() => {;
                setActiveConversation(conversation);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/ConversationsList.tsx
                markAsRead(conversation.id);

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                markAsRead(conversation && conversation.id);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/ConversationsList.tsx
              }}
            />;
          ))}
        </div>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/ConversationsList.tsx

    </div>;
  );
}

=======
========
    </div>;
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/ConversationsList.tsx
import {User} from 'lucide-react';
import {Conversation} from '@/types / messaging';
import {ConversationItem} from './ConversationItem';
interface ConversationsListProps {
  conversations: Conversation[],
  active_conversation: Conversation | null,
  setActiveConversation: (conversation: Conversation) => void,
  markAsRead: (conversation_id: string) => Promise < void>;
}
export /**
 * ConversationsList - Function description
 */
function ConversationsList() {
  return (
    <div className="w - full md:w - 80 border - r border - zion - purple / 20 overflow - y-auto">;
      <div className="p - 3 border - b border - zion - purple / 20">;
        <h3 className="font - medium text - white">Conversations</h3>;
      </div>;
      {conversations.length === 0 ? (
        <div className="p - 8 text - center text - zion - slate">;
          <User className="h - 10 w - 10 mx - auto mb - 2 text - zion - purple / 40" />;
          <p > No conversations yet</p>;
          <p className="text - sm mt - 1">;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>) : (
        <div>;
          {conversations.map ((conversation) => (
            <ConversationItem;
              key={conversation.id}
              conversation={conversation}
              is_active={active_conversation?.id === conversation.id}
              on_click={() => {
                setActiveConversation (conversation);
                markAsRead (conversation.id);
              }}
            />))}
        </div>)}
    </div>);
}
=======
      ) :(;
        <div>;
          {conversations.map((conversation) => (;
            <ConversationItem;
              key={conversation.id}
              conversation={conversation}
              isActive={activeConversation?.id === conversation.id}
              onClick={() => {;
                setActiveConversation(conversation),;
                markAsRead(conversation.id),;
              }}
            />;          ))}
        </div>;
      )}
    </div>;
  ),;}
 </div> {
  conversations.length === 0 ? (<div className="p-8 text-center text-zion-slate" > <User className="h-10 w-10 mx-auto mb-2 text-zion-purple/40" /> <p>No conversations yet</p> <p className="text-sm mt-1" > Start a conversation from a job or talent profile. </p> </div>) : (<div> {
  conversations.map ( (conversation) => (<ConversationItem key= {
  conversation.id 
}/>) ) 
}</div>) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              onClick={() => {
                setActiveConversation(conversation);

                markAsRead(conversation.id)
              onClick={() => {;
                setActiveConversation(conversation);
                markAsRead(conversation.id);
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
