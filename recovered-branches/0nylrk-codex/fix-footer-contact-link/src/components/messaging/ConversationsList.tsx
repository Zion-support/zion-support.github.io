

export function ConversationsList({ ;
  conversations;
export function ConversationsList({
  conversations;

  activeConversation
  setActiveConversation
  markAsRead

export function ConversationsList({ ;
  conversations;  activeConversation, 
  setActiveConversation, 
  markAsRead 
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
          {conversations.map((conversation) => (    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">;
      <div className="p-3 border-b border-zion-purple/20">;
        <h3 className="font-medium text-white">Conversations</h3>;
      </div>;

      {conversations && conversations.length === 0 ? (;        <div className="p-8 text-center text-zion-slate">;
          <User className="h-10 w-10 mx-auto mb-2 text-zion-purple/40" />;
          <p>No conversations yet</p>;"
          <p className="text-sm mt-1">;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>;
      ) : (;
        <div>;
          {conversations && conversations.map((conversation) => (;
            <ConversationItem
              key={conversation && conversation.id}
              conversation={conversation}

                markAsRead(conversation && conversation.id);
              isActive={activeConversation?.id === conversation.id}

              onClick={() => {;
                setActiveConversation(conversation);
                markAsRead(conversation.id);

              onClick={() => {;
                setActiveConversation(conversation);
              }}
            />;
          ))}
        </div>;
      )}

    </div>;
  );
}
