



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from "react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone} from "lucide-react";
import {cn} from "@/lib/utils";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
=======
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read'
}
=======
==============interface Message {
  id: string,
  content: string,
  timestamp: string,


    id: string
    name: string
    avatar?: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
interface MobileChatViewProps {
  contact: {
    id: string,
    name: string,
    avatar?: string;
    status?: string
  };
  messages: Message[],
  onBack: () => void,
  onSendMessage: (content: string) => void
}

export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();
  
  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage);
      setNewMessage("")
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(),
      handleSend()
    }
  };
import React, { useState } from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
interface Message {;
  id: string,;
  content: string,;
  timestamp: string,;
  isMe: boolean,;
  sender?: string,;
  avatar?: string,;
  status?: 'sent' | 'delivered' | 'read';
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



=======
=======




interface MobileChatViewProps {;
  contact: {;
    id: string,;
    name: string,;
    avatar?: string;
    status?: string;
  };
  messages: Message[],;
  onBack: () => void,;
  onSendMessage: (content: string) => void;
}
=======  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`;
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    });
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  }    }),
    
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
  
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`;
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }),
    
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  },
  
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center flex-1 gap-3 mx-2">
            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-xs text-muted-foreground">
                {contact.status |"Online"}
              </p>
            </div>
          </div>
          <div className="flex">
            <Button variant="ghost" size="icon" onClick={startAudioCall}>
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={startVideoCall}>
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
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

                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
  },;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
    toast.success("Starting video call", {;
  const handleSend = () => {;
    if (newMessage && newMessage.trim() !== "") {;
      onSendMessage(newMessage);
      setNewMessage("");
    }
=======
=======
                "text-xs mt-1 flex justify-end";
    status?: string;
  }
  messages: Message[],
  on_back: () => void,
  onSendMessage: (content: string) => void;
}
export /**
 * MobileChatView - Function description
 */
function MobileChatView() {
  const [new_message, setNewMessage] = useState ("");
  const navigate = use_navigate ();
;
  const handle_send = () =>: any {
    // Check condition
if (!== "") {) {
  $2
}
      onSendMessage (new_message);
      setNewMessage ("");
    }
  }
;
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default (),
      handle_send ();
    }
  }
;
  const startVideoCall = () =>: any {
    const room_id = `mobile-${contact.id}`;
    toast.success ("Starting video call", {
      description: `Connecting with ${contact.name}...`;
    });
;
    // Navigate to video call page;
    navigate (`/call/${room_id}`);
  }
;
  const startAudioCall = () =>: any {
    const room_id = `mobile - audio-${contact.id}`;
    toast.success ("Starting audio call", {
      description: `Connecting with ${contact.name}...`;
    });
;
    // Navigate to video call page with audio - only flag;
    navigate (`/call/${room_id}?audio_only = true`);
  }
;
  return (
    <div className="flex flex - col h - full pb - safe">;
      <header className="sticky top - 0 z - 10 bg - background border - b border - border">;
        <div className="flex items - center h - 14 px - 4">;
          <Button variant="ghost" size="icon" on_click={on_back}>;
            <ChevronLeft className="h - 5 w - 5" />;
          </Button>;
          <div className="flex items - center flex - 1 gap - 3 mx - 2">;
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>{contact.name.char_at (0).toUpperCase ()}</AvatarFallback>;
            </Avatar>;
            <div>;
              <h3 className="font - medium">{contact.name}</h3>;
              <p className="text - xs text - muted - foreground">;
                {contact.status || "Online"}
              </p>;
            </div>;
          </div>;
          <div className="flex">;
            <Button variant="ghost" size="icon" on_click={startAudioCall}>;
              <Phone className="h - 5 w - 5" />;
            </Button>;
            <Button variant="ghost" size="icon" on_click={startVideoCall}>;
              <Video className="h - 5 w - 5" />;
            </Button>;
            <Button variant="ghost" size="icon">;
              <MoreVertical className="h - 5 w - 5" />;
            </Button>;
          </div>;
        </div>;
      </header>;
      <div className="flex - 1 overflow - y-auto p - 4 space - y-4">;
        {messages.map ((message) => (
          <div;
            key={message.id}
            className={cn (
              "flex";
              message.is_me ? "justify - end" : "justify - start")}
          >;
            <div;
              className={cn (
                "max - w-[80%] rounded - 2xl px - 4 py - 2";
                message.is_me;
                  ? "bg - primary text - primary - foreground rounded - tr - none";
                  : "bg - muted rounded - tl - none")}
            >;
              <p>{message.content}</p>;
              <div className={cn (
                "text - xs mt - 1 flex justify - end";
                message.is_me ? "text - primary - foreground / 80" : "text - muted - foreground")}>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {message.timestamp}
                {message.is_me && message.status && (
                  <span className="ml - 1">;
                    {message.status === 'read' ? '✓✓' : '✓'}
  };
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault(),;
      handleSend();
    }
  };  const startVideoCall = () => {;
    const roomId = `mobile-${contact && contact.id}`;
    toast && toast.success("Starting video call", {;
      description: `Connecting with ${contact && contact.name}...`;
    });
    // Navigate to video call page;
    navigate(`/call/${roomId}`);
  };
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact && contact.id}`;
    toast && toast.success("Starting audio call", {;
      description: `Connecting with ${contact && contact.name}...`;
    });
import React, { useState } from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
;
interface Message {;
  id:string,;
  content:string,;
  timestamp:string,;
  isMe:boolean,;
  sender?:string,;
  avatar?:string,;
  status?:'sent' | 'delivered' | 'read';}
;
interface MobileChatViewProps {;
  contact:{;
    id:string,;
    name:string,;
    avatar?:string,;
    status?:string;
  },;
  messages:Message[],;
  onBack:() => void,;
  onSendMessage:(content:string) => void;
}
;
export function MobileChatView({ contact, messages, onBack, onSendMessage } MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState(""),;
  const navigate = useNavigate(),;
  ;
  const handleSend = () => {;
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage(""),;    }
  },;
  ;
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {;
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },;
  ;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
    toast.success("Starting video call", {;
      description:`Connecting with ${contact.name}...`;
    }),;
    ;
    // Navigate to video call page;
    navigate(`/call/${roomId}`),;
  },;
  ;
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
    toast.success("Starting audio call", {;
      description:`Connecting with ${contact.name}...`;
    }),;
    ;
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`),;
  },;
  ;
  return (;
      description: `Connecting with ${contact.name}...`;
    }),;
    // Navigate to video call page;
    navigate(`/call/${roomId}`);
  },;
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
    toast.success("Starting audio call", {;
      description: `Connecting with ${contact.name}...`;
    }),;
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`);
  },;
  return (;
==============

    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`);
  };

  return (    <div className="flex flex-col h-full pb-safe">;
      <header className="sticky top-0 z-10 bg-background border-b border-border">;
        <div className="flex items-center h-14 px-4">;
          <Button variant="ghost" size="icon" onClick={onBack}>;
            <ChevronLeft className="h-5 w-5" />;
          </Button>;
          <div className="flex items-center flex-1 gap-3 mx-2">;
            <Avatar>;
              <AvatarImage src={contact && contact.avatar} alt={contact && contact.name} />;
              <AvatarFallback>{contact && contact.name.charAt(0).toUpperCase()}</AvatarFallback>;
            </Avatar>;
            <div>;
              <h3 className="font-medium">{contact && contact.name}</h3>;
              <p className="text-xs text-muted-foreground">;
                {contact && contact.status || "Online"}
              </p>;
            </div>;
          </div>;

      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;

          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}

            placeholder="Type a message...";
            className="flex-1";
          />;

          <Button
            size="icon"             onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" : ""}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )

          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex-1";
          />;
          ;
          <Button ;
            size="icon" ;
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" :""}
          >;
            <Send className="h-5 w-5" />;
          </Button>;
        </div>;
      </div>;
    </div>;
                  </span>)}
              </div>;
            </div>;
          </div>))}
      </div>;
      <div className="sticky bottom - 0 bg - background border - t border - border p - 2">;
        <div className="flex items - center gap - 2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h - 5 w - 5" />;
          </Button>;
          <Input;
            value={new_message}
            on_change={(e) => setNewMessage (e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex - 1";
          />;
          <Button;
            size="icon";
            on_click={handle_send}
            disabled={!new_message.trim ()}
            className={!new_message.trim () ? "opacity - 50" : ""}
          >;
            <Send className="h - 5 w - 5" />;
          </Button>;
        </div>;
      </div>;
    </div>);
}

}
;

<<<<<<< HEAD
  ),;}
 interface Message {
  id: string;
content: string;
timestamp: string;
isMe: boolean;
sender?: string;
avatar?: string;
status?: 'sent' | 'delivered' | 'read' 
}interface MobileChatViewProps {
  contact: {
  id: string;
name: string;
avatar?: string;
status?: string 
};
messages: Message[];
onBack: () => void;
onSendMessage: (content: string) => void 
}export function MobileChatView ({
  contact, messages, onBack, onSendMessage 
}: MobileChatViewProps) {
  const handleSend = () => {
  if (newMessage.trim () !== "") {
  onSendMessage (newMessage);
setNewMessage ("") contact.avatar 
}alt= {
  contact.name 
}/> <AvatarFallback> {
  contact.name.charAt (0) .toUpperCase () 
}</AvatarFallback> </Avatar> <div> </p> </div> </div> </Button> <Button variant=" ghost"size=" icon"> <MoreVertical className="h-5 w-5"/> </Button> </div> </div> </header> <div className="flex-1 overflow-y-auto p-4 space-y-4"> {
  messages.map ( (message) => (<div key= {
  message.id 
}) 
}> {
  message.timestamp 
}{
  message.isMe && message.status && (<span className="ml-1"> {
  message.status === 'read' ? '✓✓' : '✓' 
}</span>) 
}</div> </div> </div>) ) 
}</div> <div className="sticky bottom-0 bg-background border-t border-border p-2"> <div className="flex items-center gap-2"> <Button variant=" ghost"size=" icon"> <PaperclipIcon className="h-5 w-5"/> </Button> <Input > <Send className=" h-5 w-5" /> </Button> </div> </div> </div>) 
}
}
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
