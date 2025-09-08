

import React, { useState } from "react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone} from "lucide-react";
import {cn} from "@/lib/utils";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";  id: string,;
  content: string,;
  timestamp: string,;
  isMe: boolean,;
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

  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {

interface MobileChatViewProps {;
  contact: {;
    id: string,;
    name: string,;
    avatar?: string;
    status?: string
};
  messages: Message[],;
  onBack: () => void,;
  onSendMessage: (content: string) => void;
}

export function MobileChatView(): any ({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState("");

  const navigate = useNavigate();
      onSendMessage(newMessage);      setNewMessage("");
    }  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`;
    toast.success("Starting video call", {

  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`,
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`
    });
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  }
    }),
    
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
<<<<<<< HEAD

  

  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`;
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`

  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`                  : "bg-muted rounded-tl-none"
              )}
            >
              <p>{message.content}</p>
              <div className={cn(                "text-xs mt-1 flex justify-end";

                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
    toast.success("Starting video call", {;
  const handleSend = () => {;
    if (newMessage && newMessage.trim() !== "") {;
      onSendMessage(newMessage);
      setNewMessage("");
    }
                {message.timestamp}
                {message.is_me && message.status && (
                  <span className="ml-1">;
                    {message.status === 'read' ? '✓✓' : '✓'}
  };
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;'

    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault(),;
      handleSend();
    }
  };
  const startVideoCall = () => {;
    const roomId = `mobile-${contact && contact.id}`;
    toast && toast.success("Starting video call", {,
  description: `Connecting with ${contact && contact.name}...`;
    });
    // Navigate to video call page;
    navigate(`/call/${roomId}`)
};
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact && contact.id}`;
    toast && toast.success("Starting audio call", {,
  description: `Connecting with ${contact && contact.name}...`;
    });
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`)
};

  return (  return (

import React, { useState } from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
interface Message {;
  id:string,;
  content:string,;
  timestamp:string,;
  isMe:boolean,;
  sender?:string,;
  avatar?:string,;'
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
<<<<<<< HEAD

export function MobileChatView() { return null; }
      setNewMessage(""),;    }

=======
export function MobileChatView() {;
  }
  const [newMessage, setNewMessage] = useState(""),;"
  const navigate = useNavigate(),;
  ;
    }
    if (newMessage.trim() !== "") {;"
      }
      onSendMessage(newMessage),;
      setNewMessage(""),;    }"
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
  ;
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {;'
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },;
  ;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
    toast.success("Starting video call", {,
  description:`Connecting with ${contact.name}...`;
    }),;
    ;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`),;

=======
    }
    const roomId = `mobile-${contact.id}`,;`    toast.success("Starting video call", {,"
  }
  "description":`Connecting with ${contact.name}...`;`    }),;
    ;
    // Navigate to video call page;
    navigate(`/call/${roomId}`),;`  },;
  ;
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
    toast.success("Starting audio call", {,
  description:`Connecting with ${contact.name}...`;
    }),;
    ;
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`),;`  },;
  ;
return (,;
  "description": `Connecting with ${contact.name}...`;`    }),;
    // Navigate to video call page;
    navigate(`/call/${roomId}`);`  },;
    }
  }
  "description": `Connecting with ${contact.name}...`;`    }),;
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`);`
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;
  ;

    }),;
    ;
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`),;
  },;
  ;
  return (,
  description: `Connecting with ${contact.name}...`;
    }),;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`);
  },;
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
    toast.success("Starting audio call", {,
  description: `Connecting with ${contact.name}...`;
    }),;
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`);
<<<<<<< HEAD

  };
  return (
=======
  },;
  return (;          ;
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
          </div>;              )}>;              <p>{message && message.content}</p>;
              <divclassName={cn(
                "text-xs mt-1 flex justify-end"
                message && message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>;
                {message && message.timestamp}
                {message && message.isMe && message && message.status && (;"
                  <span className="ml-1">;'
                    {message && message.status === 'read' ? '✓✓' : '✓'}
                  </span>;                )}
              </div>;
            </div>;
          </div>;
        ))}

      </div>;
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;

            <Send className="h-5 w-5" />;
            disabled={!newMessage && newMessage.trim()}"
            className={!newMessage && newMessage.trim() ? "opacity-50" : ""}>;"
</Button>"
            <Send className="h-5 w-5" />;"
</Send>

          </Button>;
        </div>;
      </div>;
    </div>;
  );
}
                  </span>)}
              </div>;
            </div>;
          </div>))}
      </div>;
      <div className="sticky bottom - 0 bg - background border - t border - border p-2">;
        <div className="flex items - center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h - 5 w-5" />;
          </Button>;
          <Input;
            value={new_message}
            on_change={(e) => setNewMessage (e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex-1";
          />;
          <Button;"
            size="icon";
            on_click={handle_send}
            disabled={!new_message.trim ()}"
            className={!new_message.trim () ? "opacity - 50" : ""}
          >;
            <Send className="h - 5 w-5" />;
          </Button>;
        </div>;
      </div>;
    </div>);
}
}
;

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df