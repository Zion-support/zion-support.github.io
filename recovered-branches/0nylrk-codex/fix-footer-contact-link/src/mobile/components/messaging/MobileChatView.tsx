import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",
import { cn } from "@/lib/utils",
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
<<<<<<< HEAD
=======

interface Message {

  id: string
  content: string
  timestamp: string
  isMe: boolean

  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read'
}
interface MobileChatViewProps {
  contact: {

<<<<<<< HEAD
    id: string
    name: string
    avatar?: string;
    status?: string
  }
  messages: Message[]
  onBack: () => void
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone} from "lucide-react";
import {cn} from "@/lib/utils";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
<<<<<<< HEAD
=======
interface Message {;
  id: string,;
  content: string,;
  timestamp: string,;
  isMe: boolean,;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from './react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
<<<<<<< HEAD
import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",
import { cn } from "@/lib/utils",
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
interface Message {

  id: string
  content: string
  timestamp: string
  isMe: boolean

  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read'
}
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
interface Message {
  id: string,
  content: string,
  timestamp: string,
<<<<<<< HEAD
=======

<<<<<<< HEAD
  is_me: boolean,
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface MobileChatViewProps {
  contact: {
    id: string
    name: string
    avatar?: string;
<<<<<<< HEAD
    status?: string
  }
  messages: Message[]
  onBack: () => void
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
interface Message {
  id: string,
  content: string,
  timestamp: string,
  is_me: boolean,
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}
interface MobileChatViewProps {
  contact: {
    id: string
    name: string
    avatar?: string;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}

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

}

>>>>>>> merged-prs-20250907-203621
interface MobileChatViewProps {
  contact: {
    id: string,
    name: string,
<<<<<<< HEAD
    avatar?: string,
    status?: string
  },
  messages: Message[],
  onBack: () => void,
  onSendMessage: (content: string) => void
=======
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

interface Message {;
  id: string,;

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

  id: string,
  content: string,
  timestamp: string,
  sender?: string;

  id: string,
  content: string,
  timestamp: string,
  isMe: boolean,
  sender?: string,

  sender?: string,;
  avatar?: string,;'
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {

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
>>>>>>> merged-prs-20250907-203621
}
<<<<<<< HEAD
export function MobileChatView(): any ({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");

  const navigate = useNavigate();
  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage);
      setNewMessage("")
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }
=======

<<<<<<< HEAD
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState($2);
  const navigate = useNavigate($2);
  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage($2);
      setNewMessage("")
    }
  },
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault($2);
      handleSend()
    }
  },
  
  const startVideoCall = $2;
    toast.success($2);
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
  
  const startAudioCall = $2;
    toast.success($2);
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly = $2;
  return (
    <div className = $2;
              message.isMe ? "justify-end" : "justify-start"
            )}
          >
            <div 
              className = $2;
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
                  : "bg-muted rounded-tl-none"
              )}
            >
              <p>{message.content}</p>
              <div className = $2;
=======
export function MobileChatView(): any ({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;

onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState("");

  const navigate = useNavigate();

      setNewMessage("");
    }
<<<<<<< HEAD
"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [newMessage, setNewMessage] = useState(""),
  const navigate = useNavigate(),
  
  const handleSend = () => {"
    if (newMessage.trim() !== "") {}
      onSendMessage(newMessage),"
      setNewMessage("")
;
export function MobileChatView() { return null; }
    }

  },;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;'

    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },

<<<<<<< HEAD
=======
  
<<<<<<< HEAD
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`,
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`
    });
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  }
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const startVideoCall = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const roomId = `mobile-${contact.id}`;
    toast.success("Starting video call", {

  const startVideoCall = () => {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }),
    
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
<<<<<<< HEAD
=======
  

<<<<<<< HEAD
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`
    });
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`;
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`

  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {

    });
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }),
    
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  },
<<<<<<< HEAD
=======
  
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button variant="ghost" size="icon" onClick={onBack}>

            <ChevronLeft className="h-5 w-5" />
          </Button>"

          <div className="flex items-center flex-1 gap-3 mx-2">
            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>

              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
<<<<<<< HEAD
=======
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
<<<<<<< HEAD
              "flex",
=======
              "flex";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              message.isMe ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe "
                  ? "bg-primary text-primary-foreground rounded-tr-none" 

<<<<<<< HEAD
=======

<<<<<<< HEAD
                "max-w-[80%] rounded-2xl px-4 py-2";
                message.isMe
                  ? "bg-primary text-primary-foreground rounded-tr-none"
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  : "bg-muted rounded-tl-none"

              )}
            >
              <p>{message.content}</p>
<<<<<<< HEAD

  },;
  const startVideoCall = () => {;`
    const roomId = `mobile-${contact.id}`,;"
    toast.success("Starting video call", {;

  const handleSend = () => {;
    if (newMessage && newMessage.trim() !== "") {;
      onSendMessage(newMessage);
      setNewMessage("");
    }
=======
              <div className={cn(
<<<<<<< HEAD
                "text-xs mt-1 flex justify-end";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                "text-xs mt-1 flex justify-end",
>>>>>>> merged-prs-20250907-203621
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
  },;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
    toast.success("Starting video call", {;
<<<<<<< HEAD
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
=======
  const handleSend = () => {;
    if (newMessage && newMessage.trim() !== "") {;
      onSendMessage(newMessage);
      setNewMessage("");
    }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    status?: string;
  }
  messages: Message[],
  on_back: () => void,
  onSendMessage: (content: string) => void;
}

      setNewMessage ("");
    }
  }
;

}
      e.prevent_default (),
      handle_send ();
    }
  }
;

      description: `Connecting with ${contact.name}...`;
    });
;
    // Navigate to video call page;`
    navigate (`/call/${room_id}`);
  }
;
  const startAudioCall = () =>: any {}`
    const room_id = `mobile - audio-${contact.id}`;"
    toast.success ("Starting audio call", {}`
      description: `Connecting with ${contact.name}...`;
    });
;
    // Navigate to video call page with audio - only flag;`
    navigate (`/call/${room_id}?audio_only = true`);
  }
;
  return ("
    <div className="flex flex - col h - full pb - safe">;"
      <header className="sticky top - 0 z - 10 bg - background border - b border - border">;"
        <div className="flex items - center h - 14 px - 4">;"
          <Button variant="ghost" size="icon" on_click={on_back}>;"
            <ChevronLeft className="h - 5 w - 5" />;
          </Button>;"

          <div className="flex items - center flex - 1 gap - 3 mx - 2">;
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>{contact.name.char_at (0).toUpperCase ()}</AvatarFallback>;
            </Avatar>;

              <MoreVertical className="h - 5 w - 5" />;
            </Button>;
          </div>;
        </div>;

      <div className="flex - 1 overflow - y-auto p - 4 space - y-4">;
        {messages.map ((message) => (
          <div;
            key={message.id}
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {message.timestamp}
                {message.is_me && message.status && (
                  <span className="ml-1">;
                    {message.status === 'read' ? '✓✓' : '✓'}
  };
<<<<<<< HEAD
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;'
=======
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault(),;
      handleSend();
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
    }
    const roomId = `mobile-${contact && contact.id}`;`    toast && toast.success("Starting video call", {,"
  }
  "description": `Connecting with ${contact && contact.name}...`;`    });
    // Navigate to video call page;
    navigate(`/call/${roomId}`)`};
  const startAudioCall = () => {;
    }
    const roomId = `mobile-audio-${contact && contact.id}`;`    toast && toast.success("Starting audio call", {,"
  }
  "description": `Connecting with ${contact && contact.name}...`;`    });
=======
  const startVideoCall = () => {;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`)`};
return (  return (;
import React, { useState } from "react",;"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;"
import { Button } from "@/components/ui/button",;"
=======

import { toast } from "sonner",;
>>>>>>> origin/chore/fix-lint-and-merge
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
=======
export function MobileChatView() { return null; }
      setNewMessage(""),;    }
>>>>>>> origin/chore/fix-lint-and-merge
  },;
  ;
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {;'
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },;
  ;
<<<<<<< HEAD
    }
    const roomId = `mobile-${contact.id}`,;`    toast.success("Starting video call", {,"
  }
  "description":`Connecting with ${contact.name}...`;`    }),;
    ;
    // Navigate to video call page;
    navigate(`/call/${roomId}`),;`  },;
  ;
    }
    const roomId = `mobile-audio-${contact.id}`,;`    toast.success("Starting audio call", {,"
  }
  "description":`Connecting with ${contact.name}...`;`    }),;
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
=======

    }),;
    ;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`),;
>>>>>>> origin/chore/fix-lint-and-merge
  },;
  ;

    }),;
    ;
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`),;
  },;
  ;

    }),;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`);
  },;

    }),;
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`);
<<<<<<< HEAD
  },;

=======
  };
  return (
<<<<<<< HEAD

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
>>>>>>> merged-prs-20250907-203621
    navigate(`/call/${roomId}?audioOnly=true`);
  },;
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="flex flex-col h-full pb-safe">;
      <header className="sticky top-0 z-10 bg-background border-b border-border">;
        <div className="flex items-center h-14 px-4">;
          <Button variant="ghost" size="icon" onClick={onBack}>;
            <ChevronLeft className="h-5 w-5" />;
          </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          ;
>>>>>>> merged-prs-20250907-203621
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
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="flex">;
            <Button variant="ghost" size="icon" onClick={startAudioCall}>;
              <Phone className="h-5 w-5" />;
            </Button>;
<<<<<<< HEAD
            ;
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
            ;
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
=======

            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Button variant="ghost" size="icon">;
              <MoreVertical className="h-5 w-5" />;
            </Button>;
          </div>;
        </div>;
      </header>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      <div className="flex-1 overflow-y-auto p-4 space-y-4">;
        {messages && messages.map((message) => (;
          <div
            key={message && message.id} 
            className={cn(
              "flex"
              message && message.isMe ? "justify-end" : "justify-start"
            )}>;
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2"
                message && message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
                  : "bg-muted rounded-tl-none"
              )}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <p>{message && message.content}</p>;

                message && message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>;
                {message && message.timestamp}
                {message && message.isMe && message && message.status && (;"
                  <span className="ml-1">;'
                    {message && message.status === 'read' ? '✓✓' : '✓'}
<<<<<<< HEAD

                  </span>;

"
                "text-xs mt-1 flex justify-end","
=======
<<<<<<< HEAD
      ;
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;
        {messages.map((message) => (;
          <div ;
            key={message.id} ;
            className={cn(;
              "flex",;
              message.isMe ? "justify-end" :"justify-start";
            )}
          >;
            <div ;
              className={cn(;
                "max-w-[80%] rounded-2xl px-4 py-2",;
                message.isMe ;
                  ? "bg-primary text-primary-foreground rounded-tr-none" ;
                  :"bg-muted rounded-tl-none";
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                "text-xs mt-1 flex justify-end";
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground";
              )}>;
                {message.timestamp}
                {message.isMe && message.status && (
                  <span className="ml-1">
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
=======
=======
                  </span>;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                "text-xs mt-1 flex justify-end",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>

<<<<<<< HEAD
                "text-xs mt-1 flex justify-end";
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground";
              )}>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {message.timestamp}
                {message.isMe && message.status && ("
                  <span className="ml-1">'
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
<<<<<<< HEAD

                )}
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                )}
              </div>;
            </div>;
          </div>;
        ))}
<<<<<<< HEAD
      </div>;
      ;
=======

      </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;
<<<<<<< HEAD
          ;
          <Input;
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}
>>>>>>> merged-prs-20250907-203621
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
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" : ""}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}

<<<<<<< HEAD
            <Send className="h-5 w-5" />;

          <Button
            size="icon" 
            onClick={handleSend}
            disabled={!newMessage && newMessage.trim()}
            className={!newMessage && newMessage.trim() ? "opacity-50" : ""}>;

          <Input;
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}

            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" : ""}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )

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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </span>)}
              </div>;
            </div>;
          </div>))}

          </Button>;
          <Input;
            value={new_message}
            on_change={(e) => setNewMessage (e.target.value)}

          />;
          <Button;"
            size="icon";
            on_click={handle_send}
            disabled={!new_message.trim ()}"
            className={!new_message.trim () ? "opacity - 50" : ""}

          </Button>;
        </div>;
      </div>;
    </div>);
<<<<<<< HEAD
}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
