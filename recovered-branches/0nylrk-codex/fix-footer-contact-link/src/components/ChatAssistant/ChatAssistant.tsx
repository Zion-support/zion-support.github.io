import React, {_useState, _useEffect, _useRef, _ReactNode} from 'react';

export interface Message {_id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean;}

export interface ChatAssistantProps {_isOpen: boolean;
  onClose: () => void;
  recipient: {
    id: string;
    name: string;
    avatarUrl?: string;
    role?: string;};
  conversationId?: string;
  initialMessages?: Message[];
  onSendMessage: (_message: string, _conversationId?: string) => Promise<void>;
  contextHeader?: ReactNode;
}

export function ChatAssistant(_{_isOpen, _onClose, _recipient, _conversationId, _initialMessages = [], _onSendMessage, _contextHeader}: ChatAssistantProps) {_const [messages, _setMessages] = useState<Message[]>(initialMessages);
  const _messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  useEffect__(() => {
    if (initialMessages.length > 0) {
      setMessages(initialMessages);}
  }, [initialMessages]);

  useEffect__(() => {_scrollToBottom();}, [messages]);

  const _scrollToBottom = () => {_messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
  
  const _handleSendMessage = async (_message: string) => {_if (!message.trim()) return;
    
    // Add user message to the chat
    const newMessage: Message = {
      id: Date.now().toString(), _role: 'user', _message, _timestamp: new Date()};
    
    setMessages(_(prev: Message[]) => [...prev, newMessage]);
    
    // Send message to recipient via the provided handler
    await onSendMessage(message, conversationId);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
        {_/* Header */}
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border border-zion-purple/20">
              <AvatarImage src={_recipient.avatarUrl} alt={_recipient.name} />
              <AvatarFallback className="bg-zion-purple/20 text-white">
                {_recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-white">{_recipient.name}</div>
              {_recipient.role && (
                <div className="text-xs text-zion-slate">{recipient.role}</div>
              )}
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-zion-purple/10 rounded-full"
            onClick={_onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {_/* Context Header (Optional) */}
        {_contextHeader && (
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">
            {contextHeader}
          </div>
        )}
        
        {_/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {_messages.length === 0 ? (
            <div className="text-center text-zion-slate py-8">
              <p>Start a conversation with {recipient.name}</p>
            </div>
          ) : (_messages.map((msg) => (
              <ChatMessage
                key={_msg.id} 
                role={_msg.role}
                message={_msg.message}
              />
            ))
          )}
          <div ref={_messagesEndRef} />
        </div>
        
        {_/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={_handleSendMessage} />
        </div>
      </div>
    </div>
  );
}