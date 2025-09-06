<<<<<<< HEAD
=======
<<<<<<< HEAD




<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from './react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
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
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface Message {;
  id: string,;
  content: string,;
  timestamp: string,;
  isMe: boolean,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import React, { useState } from './react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
interface Message {
  id: string,
  content: string,
  timestamp: string,
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}
interface MobileChatViewProps {
  contact: {

    id: string
    name: string
    avatar?: string;
interface Message {
  id: string,
  content: string,
  timestamp: string,
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
<<<<<<< HEAD
=======
<<<<<<< HEAD



=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {


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
<<<<<<< HEAD

export function MobileChatView(): any ({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;

=======
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const [newMessage, setNewMessage] = useState("");

  const navigate = useNavigate();
      onSendMessage(newMessage);
<<<<<<< HEAD
=======
      setNewMessage("");
    }
<<<<<<< HEAD


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      setNewMessage("");
    }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },
  
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`;
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`,
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`
<<<<<<< HEAD
=======
<<<<<<< HEAD
    });
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }),
    
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
  

<<<<<<< HEAD

  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`;
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`
<<<<<<< HEAD
=======
<<<<<<< HEAD
    });
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }),
    
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  },
  
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
              "flex",
=======
<<<<<<< HEAD
<<<<<<< HEAD
              "flex";
=======
              "flex",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              "flex",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              message.isMe ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 


<<<<<<< HEAD
=======
                "max-w-[80%] rounded-2xl px-4 py-2";
                message.isMe
                  ? "bg-primary text-primary-foreground rounded-tr-none"
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                  : "bg-muted rounded-tl-none"
              )}
            >
              <p>{message.content}</p>
              <div className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                "text-xs mt-1 flex justify-end";

  },;
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
    toast.success("Starting video call", {;
<<<<<<< HEAD
  const handleSend = () => {;
    if (newMessage && newMessage.trim() !== "") {;
      onSendMessage(newMessage);
      setNewMessage("");
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {message.timestamp}
                {message.is_me && message.status && (
                  <span className="ml - 1">;
                    {message.status === 'read' ? '✓✓' : '✓'}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    <div className="flex flex-col h-full pb-safe">;
      <header className="sticky top-0 z-10 bg-background border-b border-border">;
        <div className="flex items-center h-14 px-4">;
          <Button variant="ghost" size="icon" onClick={onBack}>;
            <ChevronLeft className="h-5 w-5" />;
          </Button>;
<<<<<<< HEAD
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          ;
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
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          <div className="flex">;
            <Button variant="ghost" size="icon" onClick={startAudioCall}>;
              <Phone className="h-5 w-5" />;
            </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            ;
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
            ;
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            <Button variant="ghost" size="icon">;
              <MoreVertical className="h-5 w-5" />;
            </Button>;
          </div>;
        </div>;
      </header>;
<<<<<<< HEAD
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              )}>;
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              )}>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <p>{message && message.content}</p>;
              <divclassName={cn(
                "text-xs mt-1 flex justify-end"
                message && message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>;
                {message && message.timestamp}
                {message && message.isMe && message && message.status && (;
                  <span className="ml-1">;
                    {message && message.status === 'read' ? '✓✓' : '✓'}
<<<<<<< HEAD
<<<<<<< HEAD
                  </span>;

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  </span>;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>

<<<<<<< HEAD
<<<<<<< HEAD
=======
                "text-xs mt-1 flex justify-end";
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground";
              )}>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {message.timestamp}
                {message.isMe && message.status && (
                  <span className="ml-1">
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                )}
              </div>;
            </div>;
          </div>;
        ))}
<<<<<<< HEAD
<<<<<<< HEAD

      </div>;

=======
      </div>;
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}
<<<<<<< HEAD
=======
<<<<<<< HEAD

            placeholder="Type a message...";
            className="flex-1";
          />;

          <Button
            size="icon" 
            onClick={handleSend}
            disabled={!newMessage && newMessage.trim()}
            className={!newMessage && newMessage.trim() ? "opacity-50" : ""}>;
=======
          ;
          <Input;
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <Send className="h-5 w-5" />;
          </Button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
