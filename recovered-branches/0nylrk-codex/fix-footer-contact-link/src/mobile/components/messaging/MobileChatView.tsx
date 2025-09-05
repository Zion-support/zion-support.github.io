
import React, { useState } from &quot;react&quot;;
import { Avatar, AvatarImage, AvatarFallback } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { toast } from &quot;sonner&quot;;

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}

interface MobileChatViewProps {
  contact: {
    id: string;
    name: string;
    avatar?: string;
    status?: string;
  };
  messages: Message[];
  onBack: () => void;
  onSendMessage: (content: string) => void;
}

export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState("&quot;);
  const navigate = useNavigate();
  
  const handleSend = () => {
    if (newMessage.trim() !== "&quot;) {
      onSendMessage(newMessage);
      setNewMessage("&quot;);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`;
    toast.success(&quot;Starting video call&quot;, {
      description: `Connecting with ${contact.name}...`
    });
    
    // Navigate to video call page
    navigate(`/call/${roomId}`);
  };
  
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`;
    toast.success(&quot;Starting audio call", {
      description: `Connecting with ${contact.name}...`
    });
    
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`);
  };
  
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4&quot;>
          <Button variant=&quot;ghost&quot; size=&quot;icon" onClick={onBack}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center flex-1 gap-3 mx-2">
            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-xs text-muted-foreground&quot;>
                {contact.status || &quot;Online"}
              </p>
            </div>
          </div>
          
          <div className="flex&quot;>
            <Button variant=&quot;ghost&quot; size=&quot;icon" onClick={startAudioCall}>
              <Phone className="h-5 w-5&quot; />
            </Button>
            
            <Button variant=&quot;ghost&quot; size=&quot;icon" onClick={startVideoCall}>
              <Video className="h-5 w-5&quot; />
            </Button>
            
            <Button variant=&quot;ghost&quot; size=&quot;icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={cn(
              "flex&quot;,
              message.isMe ? &quot;justify-end&quot; : &quot;justify-start"
            )}
          >
            <div 
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2&quot;,
                message.isMe 
                  ? &quot;bg-primary text-primary-foreground rounded-tr-none&quot; 
                  : &quot;bg-muted rounded-tl-none"
              )}
            >
              <p>{message.content}</p>
              <div className={cn(
                "text-xs mt-1 flex justify-end&quot;,
                message.isMe ? &quot;text-primary-foreground/80&quot; : &quot;text-muted-foreground"
              )}>
                {message.timestamp}
                {message.isMe && message.status && (
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
        <div className="flex items-center gap-2&quot;>
          <Button variant=&quot;ghost&quot; size=&quot;icon">
            <PaperclipIcon className="h-5 w-5&quot; />
          </Button>
          
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder=&quot;Type a message..."
            className="flex-1&quot;
          />
          
          <Button 
            size=&quot;icon" 
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50&quot; : "&quot;}
          >
            <Send className=&quot;h-5 w-5&quot; />
          </Button>
        </div>
      </div>
    </div>
  );
}
