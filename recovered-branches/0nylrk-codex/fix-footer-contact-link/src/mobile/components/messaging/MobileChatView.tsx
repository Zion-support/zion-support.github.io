
import React, {_useState} from "react";

interface Message {_id: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';}

interface MobileChatViewProps {_contact: {
    id: string;
    name: string;
    avatar?: string;
    status?: string;};
  messages: Message[];
  onBack: () => void;
  onSendMessage: (_content: string) => void;
}

export function MobileChatView(_{_contact, _messages, _onBack, _onSendMessage}: MobileChatViewProps) {_const [newMessage, _setNewMessage] = useState("");
  const _navigate = useNavigate();
  
  const _handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage);
      setNewMessage("");}
  };
  
  const _handleKeyDown = (_e: React.KeyboardEvent<HTMLInputElement>) => {_if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();}
  };
  
  const _startVideoCall = () => {_const _roomId = `mobile-${contact.id}`;
    toast.success("Starting video call", {_description: `Connecting with ${contact.name}...`
    });
    
    // Navigate to video call page
    navigate(`/call/${_roomId}`);
  };
  
  const _startAudioCall = () => {_const _roomId = `mobile-audio-${contact.id}`;
    toast.success("Starting audio call", {_description: `Connecting with ${contact.name}...`
    });
    
    // Navigate to video call page with audio-only flag
    navigate(`/call/${_roomId}?audioOnly=true`);
  };
  
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button variant="ghost" size="icon" onClick={_onBack}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center flex-1 gap-3 mx-2">
            <Avatar>
              <AvatarImage src={_contact.avatar} alt={_contact.name} />
              <AvatarFallback>{_contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{_contact.name}</h3>
              <p className="text-xs text-muted-foreground">
                {_contact.status || "Online"}
              </p>
            </div>
          </div>
          
          <div className="flex">
            <Button variant="ghost" size="icon" onClick={_startAudioCall}>
              <Phone className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" onClick={_startVideoCall}>
              <Video className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {_messages.map(_(message) => (
          <div 
            key={message.id} 
            className={_cn(
              "flex", _message.isMe ? "justify-end" : "justify-start"
            )}
          >
            <div 
              className={_cn(
                "max-w-[80%] rounded-2xl px-4 py-2", _message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
                  : "bg-muted rounded-tl-none"
              )}
            >
              <p>{_message.content}</p>
              <div className={_cn(
                "text-xs mt-1 flex justify-end", _message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                {_message.timestamp}
                {_message.isMe && message.status && (
                  <span className="ml-1">
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <PaperclipIcon className="h-5 w-5" />
          </Button>
          
          <Input
            value={_newMessage}
            onChange={_(_e) => setNewMessage(e.target.value)}
            onKeyDown={_handleKeyDown}
            placeholder="Type a message..."
            className="flex-1"
          />
          
          <Button 
            size="icon" 
            onClick={_handleSend}
            disabled={_!newMessage.trim()}
            className={_!newMessage.trim() ? "opacity-50" : ""}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
