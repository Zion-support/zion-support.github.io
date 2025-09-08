export function ConversationsList({ 
  conversations,



          {conversations.map((conversation) => (


    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">;
      <div className="p-3 border-b border-zion-purple/20">;
        <h3 className="font-medium text-white">Conversations</h3>;
      </div>;
      ;
      {conversations.length === 0 ? (;
        <div className="p-8 text-center text-zion-slate">;
                markAsRead(conversation && conversation.id);
    </div>;
  );
}
import {User} from 'lucide-react';
import {Conversation} from '@/types / messaging';
import {ConversationItem} from './ConversationItem';
interface ConversationsListProps {



