<<<<<<< HEAD


<<<<<<< HEAD


export function ConversationsList({ ;
  conversations;

=======
=======
export function ConversationsList({ ;
  conversations;


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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function ConversationsList({
  conversations;

  activeConversation
  setActiveConversation
  markAsRead

export function ConversationsList({ ;
  conversations;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


export function ConversationsList({ ;
  conversations;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  activeConversation, 
  setActiveConversation, 
  markAsRead 
  activeConversation, 
  setActiveConversation, 
  markAsRead 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  activeConversation, 
  setActiveConversation, 
  markAsRead 
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isActive={activeConversation?.id === conversation.id}

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">;
      <div className="p-3 border-b border-zion-purple/20">;
        <h3 className="font-medium text-white">Conversations</h3>;
      </div>;
<<<<<<< HEAD

      {conversations && conversations.length === 0 ? (;
=======
      ;
      {conversations.length === 0 ? (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <ConversationItem
              key={conversation && conversation.id}
              conversation={conversation}

                markAsRead(conversation && conversation.id);

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              isActive={activeConversation?.id === conversation.id}

              onClick={() => {;
                setActiveConversation(conversation);
<<<<<<< HEAD
                markAsRead(conversation.id);

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                markAsRead(conversation && conversation.id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              isActive={activeConversation?.id === conversation && conversation.id}
              onClick={() => {;
                setActiveConversation(conversation);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              }}
            />;
          ))}
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
  );
}

=======
=======
    </div>;
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
