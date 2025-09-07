<<<<<<< HEAD
=======
<<<<<<< HEAD
export function ConversationsList({ ;
  conversations;
=======


<<<<<<< HEAD
export function ConversationsList({ ;
  conversations;


>>>>>>> merged-prs-20250907-203621
import React from 'react';
import { User  } from 'lucide-react';
import { Conversation  } from '@/types/messaging';
import { ConversationItem } from './ConversationItem';
interface ConversationsListProps {
<<<<<<< HEAD
  conversations: Conversation[],
  activeConversation: Conversation | null,
  setActiveConversation: (conversation: Conversation) => void,
  markAsRead: (conversationId: string) => Promise<void>
}

export function ConversationsList({ 
  conversations,
=======

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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export function ConversationsList({ ;
  conversations;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react',;
import { User } from 'lucide-react',;
import { Conversation } from '@/types/messaging',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { ConversationItem } from './ConversationItem',;
interface ConversationsListProps {;
  conversations: Conversation[],;
  activeConversation: Conversation | null,;
  setActiveConversation: (conversation: Conversation) => void,;
  markAsRead: (conversationId: string) => Promise<void>;
}

<<<<<<< HEAD
  activeConversation, 
  setActiveConversation, 
  markAsRead 
>>>>>>> merged-prs-20250907-203621
  activeConversation, 
  setActiveConversation, 
  markAsRead 

  setActiveConversation, 
  markAsRead 

=======
export function ConversationsList({ 
  conversations,
<<<<<<< HEAD
  activeConversation, 
  setActiveConversation, 
  markAsRead 
  activeConversation, 
  setActiveConversation, 
  markAsRead 
=======

  activeConversation, 
  setActiveConversation, 
  markAsRead 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}: ConversationsListProps) {

  return (
    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">"
      <div className="p-3 border-b border-zion-purple/20">"
        <h3 className="font-medium text-white">Conversations</h3>
      </div>
      {conversations.length === 0 ? ("
        <div className="p-8 text-center text-zion-slate">"
          <User className="h-10 w-10 mx-auto mb-2 text-zion-purple/40" />
          <p>No conversations yet</p>"
          <p className="text-sm mt-1">
            Start a conversation from a job or talent profile.
          </p>
        </div>
      ) : (
        <div>
<<<<<<< HEAD

=======
          {conversations.map((conversation) => (
<<<<<<< HEAD
            <ConversationItem
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              key={conversation.id}
              conversation={conversation}
              isActive={activeConversation?.id === conversation.id}
<<<<<<< HEAD
=======

import React from 'react',;
import { User } from 'lucide-react',;
import { Conversation } from '@/types/messaging',;
import { ConversationItem } from './ConversationItem',;
;
<<<<<<< HEAD
=======
=======
=======
import {User} from 'lucide-react';
import {Conversation} from '@/types/messaging';
import {ConversationItem} from './ConversationItem';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

      <div className="p-3 border-b border-zion-purple/20">;
        <h3 className="font-medium text-white">Conversations</h3>;
      </div>;

=======
    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">;
      <div className="p-3 border-b border-zion-purple/20">;
        <h3 className="font-medium text-white">Conversations</h3>;
      </div>;
      ;
      {conversations.length === 0 ? (;
        <div className="p-8 text-center text-zion-slate">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <User className="h-10 w-10 mx-auto mb-2 text-zion-purple/40" />;
          <p>No conversations yet</p>;"
          <p className="text-sm mt-1">;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              isActive={activeConversation?.id === conversation.id}

              onClick={() => {;
                setActiveConversation(conversation);
<<<<<<< HEAD

=======
                markAsRead(conversation && conversation.id);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              }}
            />;
          ))}
        </div>;
      )}
<<<<<<< HEAD

=======
    </div>;
  );
}
import {User} from 'lucide-react';
import {Conversation} from '@/types / messaging';
import {ConversationItem} from './ConversationItem';
interface ConversationsListProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  conversations: Conversation[],
  active_conversation: Conversation | null,
  setActiveConversation: (conversation: Conversation) => void,
  markAsRead: (conversation_id: string) => Promise < void>;

}

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

                setActiveConversation (conversation);
                markAsRead (conversation.id);
              }}
            />))}
        </div>)}
    </div>);
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
