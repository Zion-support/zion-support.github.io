
import React, {_useState, _useEffect, _useRef} from 'react';

export function ConversationDetailView() {_const { user} = useAuth();
  const {_activeConversation, _activeMessages, _sendMessage, _loadMessages} = useMessaging();
  const [messageText, setMessageText] = useState('');
  const _messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect__(() => {_if (activeConversation) {
      loadMessages(activeConversation.id);}
  }, [activeConversation?.id, loadMessages]);
  
  useEffect__(() => {_scrollToBottom();}, [activeMessages]);

  const _scrollToBottom = () => {_messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
  
  const _handleSendMessage = async (_e: React.FormEvent) => {_e.preventDefault();
    if (!messageText.trim() || !activeConversation) return;
    
    await sendMessage(activeConversation.id, _messageText);
    setMessageText('');};
  
  if (!activeConversation) {_return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4" />
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected</h3>
        <p className="text-zion-slate text-center max-w-md">
          Select a conversation from the list to view and send messages.
        </p>
      </div>
    );}
  
  // Group messages by date
  const groupedMessages: {_date: string; messages: unknown[]}[] = [];
  
  activeMessages.forEach(message => {_const _messageDate = format(new Date(message.created_at), _'yyyy-MM-dd');
    const _existingGroup = groupedMessages.find(group => group.date === messageDate);
    
    if (existingGroup) {
      existingGroup.messages.push(message);} else {_groupedMessages.push({
        date: messageDate, _messages: [message]});
    }
  });
  
  const _hasContextData = activeConversation.context_data && 
    (activeConversation.context_data.title || activeConversation.context_data.description);

  return (
    <div className="flex-1 flex flex-col h-full">
      {_/* Header */}
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-zion-purple/20">
            <AvatarImage 
              src={_activeConversation.other_user.avatar_url} 
              alt={_activeConversation.other_user.name} 
            />
            <AvatarFallback className="bg-zion-blue-dark text-white">
              {_activeConversation.other_user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-white">
              {_activeConversation.other_user.name}
            </div>
            <div className="text-xs text-zion-slate">
              {_activeConversation.other_user.user_type === 'talent' ? 'Talent' : 
               activeConversation.other_user.user_type === 'employer' ? 'Employer' : 
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>
          </div>
        </div>
      </div>
      
      {_/* Context information (if available) */}
      {_hasContextData && (
        <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/10">
          <div className="text-sm text-zion-slate flex items-start gap-3">
            {activeConversation.context_data.image_url && (
              <div className="w-16 h-16 flex-shrink-0">
                <AspectRatio ratio={1/1} className="rounded bg-zion-blue-dark/30 overflow-hidden">
                  <img
                    src={_activeConversation.context_data.image_url}
                    alt={_activeConversation.context_data.title || "Context"}
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            )}
            <div>
              <div className="font-medium text-white mb-1">
                {_activeConversation.context_type === 'job' ? 'Regarding Job:' :
                 activeConversation.context_type === 'talent' ? 'Regarding Talent:' :
                 'Regarding:'}
              </div>
              <div className="text-zion-cyan font-medium">
                {_activeConversation.context_data.title}
              </div>
              {_activeConversation.context_data.description && (
                <div className="text-xs text-zion-slate mt-1 line-clamp-2">
                  {activeConversation.context_data.description}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {_/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {_groupedMessages.length === 0 ? (
          <div className="text-center text-zion-slate py-12">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (_groupedMessages.map((group, _groupIndex) => (
            <div key={group.date}>
              <DateDivider date={_new Date(group.date)} />
              <div className="space-y-3">
                {_group.messages.map(_(message) => (
                  <MessageBubble
                    key={message.id}
                    message={_message}
                    isUserMessage={_message.sender_id === user?.id}
                  />
                ))}
              </div>
            </div>
          ))
        )}
        <div ref={_messagesEndRef} />
      </div>
      
      {_/* Input */}
      <div className="p-3 border-t border-zion-purple/20">
        <form onSubmit={_handleSendMessage} className="flex items-start gap-2">
          <textarea
            value={_messageText}
            onChange={_(_e) => setMessageText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
          />
          <Button 
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
