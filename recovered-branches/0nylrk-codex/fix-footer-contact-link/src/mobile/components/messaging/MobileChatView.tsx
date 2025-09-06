<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx


<<<<<<< HEAD
import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",
import { cn } from "@/lib/utils",

interface Message {
  id: string,
  content: string,
  timestamp: string,
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone} from "lucide-react";
import {cn} from "@/lib/utils";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
<<<<<<< HEAD
interface Message {;
  id: string,;
  content: string,;
  timestamp: string,;
  isMe: boolean,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
import React, { useState } from './react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",
import { cn } from "@/lib/utils",
<<<<<<< HEAD
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
interface MobileChatViewProps {
  contact: {

    id: string
    name: string
    avatar?: string;
    status?: string
  }
  messages: Message[]
  onBack: () => void
=======
import { useNavigate } from "react-router-dom",
import { toast } from "sonner",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface Message {
  id: string,
  content: string,
  timestamp: string,
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx


========
  is_me: boolean,
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
interface MobileChatViewProps {
  contact: {
    id: string
    name: string
    avatar?: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
<<<<<<< HEAD
<<<<<<< HEAD

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
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
export function MobileChatView(): any ({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx


  const handleSend = () => {;
    if (newMessage && newMessage.trim() !== "") {;

      onSendMessage(newMessage);
      setNewMessage("");
    }


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [newMessage, setNewMessage] = useState(""),
  const navigate = useNavigate(),
  
  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage),
      setNewMessage("")
;
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState(""),;
  const navigate = useNavigate(),;
  const handleSend = () => {;
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");
    }
  },;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },
<<<<<<< HEAD

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`;
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`,
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`
<<<<<<< HEAD
    });
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }),
    
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
  
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`;
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`

<<<<<<< HEAD
=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`
<<<<<<< HEAD
    });
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }),
    
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  },
  
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
              "flex";
=======
              "flex",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              message.isMe ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======

                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                "max-w-[80%] rounded-2xl px-4 py-2";
                message.isMe
                  ? "bg-primary text-primary-foreground rounded-tr-none"
=======
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  : "bg-muted rounded-tl-none"
              )}
            >
              <p>{message.content}</p>
              <div className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
                "text-xs mt-1 flex justify-end";

                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
=======
                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
    toast.success("Starting video call", {;
<<<<<<< HEAD
=======
========
  const handleSend = () => {;
    if (newMessage && newMessage.trim() !== "") {;
      onSendMessage(newMessage);
      setNewMessage("");
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
                {message.timestamp}
                {message.is_me && message.status && (
                  <span className="ml - 1">;
                    {message.status === 'read' ? '✓✓' : '✓'}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
  };
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault(),;
      handleSend();
    }
  };
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
    // Navigate to video call page with audio-only flag;
    navigate(`/call/${roomId}?audioOnly=true`);
  };
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="flex flex-col h-full pb-safe">;
      <header className="sticky top-0 z-10 bg-background border-b border-border">;
        <div className="flex items-center h-14 px-4">;
          <Button variant="ghost" size="icon" onClick={onBack}>;
            <ChevronLeft className="h-5 w-5" />;
          </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
          ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="flex">;
            <Button variant="ghost" size="icon" onClick={startAudioCall}>;
              <Phone className="h-5 w-5" />;
            </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
=======
            ;
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
            ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Button variant="ghost" size="icon">;
              <MoreVertical className="h-5 w-5" />;
            </Button>;
          </div>;
        </div>;
      </header>;
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
              <p>{message && message.content}</p>;
              <divclassName={cn(
                "text-xs mt-1 flex justify-end"
                message && message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>;
                {message && message.timestamp}
                {message && message.isMe && message && message.status && (;
                  <span className="ml-1">;
                    {message && message.status === 'read' ? '✓✓' : '✓'}
=======
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              )}
            >;
              <p>{message.content}</p>;
              <div className={cn(;
<<<<<<< HEAD
                "text-xs mt-1 flex justify-end",;
                message.isMe ? "text-primary-foreground/80" :"text-muted-foreground";
              )}>;                {message.timestamp}
                {message.isMe && message.status && (;
                  <span className="ml-1">;
                    {message.status === 'read' ? '✓✓' :'✓'}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </span>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx

=======

                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
                "text-xs mt-1 flex justify-end";
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground";
              )}>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {message.timestamp}
                {message.isMe && message.status && (
                  <span className="ml-1">
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
                )}
              </div>;
            </div>;
          </div>;
        ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
      </div>;
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx


========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
          <Input
=======
          ;
          <Input;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx

            placeholder="Type a message...";
            className="flex-1";
          />;

          <Button
            size="icon" 
            onClick={handleSend}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
========
            placeholder="Type a message...";
            className="flex-1";
          />;
<<<<<<< HEAD
          <Button
            size="icon" 
            onClick={handleSend}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
            disabled={!newMessage && newMessage.trim()}
            className={!newMessage && newMessage.trim() ? "opacity-50" : ""}>;
=======
          ;
          <Button ;
            size="icon" ;
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? "opacity-50" :""}
          >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Send className="h-5 w-5" />;
          </Button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/messaging/MobileChatView.tsx
=======
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
