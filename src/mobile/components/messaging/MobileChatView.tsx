
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useRouter } from 'next/router',
import { toast } from "sonner",
=======
import React, { useState } from &quot;react&quot;;
import { Avatar, AvatarImage, AvatarFallback } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;
import { useRouter } from 'next/router';
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface Message {
  id: string,
  content: string,
  timestamp: string,
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
=======
import React, { useState } from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { useRouter } from 'next/router',;
import { toast } from "sonner",;
interface Message {;
  id: string,;
  content: string,;
  timestamp: string,;
  isMe: boolean,;
  sender?: string,;
  avatar?: string,;
  status?: 'sent' | 'delivered' | 'read';
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
interface MobileChatViewProps {;
  contact: {;
    id: string,;
    name: string,;
    avatar?: string,;
    status?: string;
  },;
  messages: Message[],;
  onBack: () => void,;
  onSendMessage: (content: string) => void;
}
<<<<<<< HEAD

export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
<<<<<<< HEAD
  const [newMessage, setNewMessage] = useState(""),
  const router = useRouter(),
  
  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage),
      setNewMessage("")
=======
  const [newMessage, setNewMessage] = useState("&quot;);
  const router = useRouter();
  
  const handleSend = () => {
    if (newMessage.trim() !== "&quot;) {
      onSendMessage(newMessage);
      setNewMessage("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState(""),;
  const router = useRouter(),;
  const handleSend = () => {;
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
<<<<<<< HEAD
  },
  
  const startVideoCall = () => {
<<<<<<< HEAD
    const roomId = `mobile-${contact.id}`,
    toast.success("Starting video call", {
=======
    const roomId = `mobile-${contact.id}`;
    toast.success(&quot;Starting video call&quot;, {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      description: `Connecting with ${contact.name}...`
    }),
    
    // Navigate to video call page
    router.push(`/call/${roomId}`)
  },
  
  const startAudioCall = () => {
<<<<<<< HEAD
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {
=======
    const roomId = `mobile-audio-${contact.id}`;
    toast.success(&quot;Starting audio call", {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      description: `Connecting with ${contact.name}...`
    }),
    
    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly=true`)
  },
  
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4&quot;>
          <Button
            variant=&quot;ghost&quot;
            size=&quot;icon&quot;
            onClick={onBack}
            aria-label=&quot;Go back"
          >
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
            <Button
              variant=&quot;ghost&quot;
              size=&quot;icon&quot;
              onClick={startAudioCall}
              aria-label=&quot;Start audio call"
            >
              <Phone className="h-5 w-5&quot; />
            </Button>
            
            <Button
              variant=&quot;ghost&quot;
              size=&quot;icon&quot;
              onClick={startVideoCall}
              aria-label=&quot;Start video call"
            >
              <Video className="h-5 w-5&quot; />
            </Button>
            
            <Button variant=&quot;ghost&quot; size=&quot;icon&quot; aria-label=&quot;More options">
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
=======
  },;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
    toast.success("Starting video call", {;
      description: `Connecting with ${contact.name}...`;
    }),;
    // Navigate to video call page;
    router.push(`/call/${roomId}`);
  },;
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
    toast.success("Starting audio call", {;
      description: `Connecting with ${contact.name}...`;
    }),;
    // Navigate to video call page with audio-only flag;
    router.push(`/call/${roomId}?audioOnly=true`);
  },;
  return (;
    <div className="flex flex-col h-full pb-safe">;
      <header className="sticky top-0 z-10 bg-background border-b border-border">;
        <div className="flex items-center h-14 px-4">;
          <Button;
            variant="ghost";
            size="icon";
            onClick={onBack}
            aria-label="Go back";
          >;
            <ChevronLeft className="h-5 w-5" />;
          </Button>;
          <div className="flex items-center flex-1 gap-3 mx-2">;
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>;
            </Avatar>;
            <div>;
              <h3 className="font-medium">{contact.name}</h3>;
              <p className="text-xs text-muted-foreground">;
                {contact.status || "Online"}
              </p>;
            </div>;
          </div>;
          <div className="flex">;
            <Button;
              variant="ghost";
              size="icon";
              onClick={startAudioCall}
              aria-label="Start audio call";
            >;
              <Phone className="h-5 w-5" />;
            </Button>;
            <Button;
              variant="ghost";
              size="icon";
              onClick={startVideoCall}
              aria-label="Start video call";
            >;
              <Video className="h-5 w-5" />;
            </Button>;
            <Button variant="ghost" size="icon" aria-label="More options">;
              <MoreVertical className="h-5 w-5" />;
            </Button>;
          </div>;
        </div>;
      </header>;
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;
        {messages.map((message) => (;
          <div;
            key={message.id} ;
            className={cn(;
              "flex",;
              message.isMe ? "justify-end" : "justify-start";
            )}
          >;
            <div;
              className={cn(;
                "max-w-[80%] rounded-2xl px-4 py-2";
                message.isMe;
                  ? "bg-primary text-primary-foreground rounded-tr-none";
                  : "bg-muted rounded-tl-none";
              )}
            >;
              <p>{message.content}</p>;
              <div className={cn(;
                "text-xs mt-1 flex justify-end";
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground";
              )}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                {message.timestamp}
                {message.isMe && message.status && (;
                  <span className="ml-1">;
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>;
                )}
              </div>;
            </div>;
          </div>;
        ))}
<<<<<<< HEAD
      </div>
      
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2&quot;>
          <Button variant=&quot;ghost&quot; size=&quot;icon&quot; aria-label=&quot;Attach file">
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
            aria-label=&quot;Send message&quot;
          >
            <Send className=&quot;h-5 w-5&quot; />
          </Button>
        </div>
      </div>
    </div>
  )
=======
      </div>;
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon" aria-label="Attach file">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;
          <Input;
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex-1";
          />;
          <Button;
            size="icon";
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" : ""}
            aria-label="Send message";
          >;
            <Send className="h-5 w-5" />;
          </Button>;
        </div>;
      </div>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;