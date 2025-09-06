
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
export function ConversationsList({
  conversations;

  activeConversation
  setActiveConversation
  markAsRead
=======

export function ConversationsList({ ;
  conversations;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



export function ConversationsList({ ;
  conversations;

>>>>>>> main
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======

>>>>>>> main
  activeConversation, 
  setActiveConversation, 
  markAsRead 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
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
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isActive={activeConversation?.id === conversation.id}
<<<<<<< HEAD
              onClick={() => {
                setActiveConversation(conversation);

                markAsRead(conversation.id)
=======
              onClick={() => {;
                setActiveConversation(conversation);
                markAsRead(conversation.id);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
=======
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
    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">;
      <div className="p-3 border-b border-zion-purple/20">;
        <h3 className="font-medium text-white">Conversations</h3>;
      </div>;

      {conversations && conversations.length === 0 ? (;
        <div className="p-8 text-center text-zion-slate">;
          <User className="h-10 w-10 mx-auto mb-2 text-zion-purple/40" />;
          <p>No conversations yet</p>;
          <p className="text-sm mt-1">;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>;
      ) : (;
        <div>;
          {conversations && conversations.map((conversation) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <ConversationItem
              key={conversation && conversation.id}
              conversation={conversation}

                markAsRead(conversation && conversation.id);

=======
              isActive={activeConversation?.id === conversation.id}

              onClick={() => {;
                setActiveConversation(conversation);
                markAsRead(conversation.id);

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              }}
            />;
          ))}
        </div>;
      )}

    </div>;
  );
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
