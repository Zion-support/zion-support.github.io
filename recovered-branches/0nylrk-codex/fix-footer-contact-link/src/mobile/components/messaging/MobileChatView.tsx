<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone} from "lucide-react";
import {cn} from "@/lib/utils";
import {useNavigate} from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import {toast} from "sonner";
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",
import { cn } from "@/lib/utils",
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useNavigate } from "react-router-dom",;
import { toast } from "sonner",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface Message {;
  id: string,;
=======
import {toast} from "sonner";  id: string,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {toast} from "sonner";  id: string,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
avatar?: string;'
  status?: 'sent' | 'delivered' | 'read';
}
interface MobileChatViewProps {}
  contact: {}
    id: string;
    name: string;
    avatar?: string;
interface Message {}
  id: string,
  content: string,
  timestamp: string,
  isMe: boolean,
  sender?: string,
avatar?: string,'
  status?: 'sent' | 'delivered' | 'read'

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
=======
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState("");

  const navigate = useNavigate();
<<<<<<< HEAD
      onSendMessage(newMessage);
      setNewMessage("");
    }
"
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const startVideoCall = () => {
=======
      onSendMessage(newMessage);      setNewMessage("");
    }  const startVideoCall = () => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const startVideoCall = () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const roomId = `mobile-${contact.id}`;
    toast.success("Starting video call", {
=======
  const startVideoCall = () => {}
    const roomId = `mobile-${contact.id}`,"
    toast.success("Starting video call", {}`
      description: `Connecting with ${contact.name}...`
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

const startAudioCall = () => {}`
    const roomId = `mobile-audio-${contact.id}`,"
    toast.success("Starting audio call", {}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      description: `Connecting with ${contact.name}...`

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const startVideoCall = () => {
const roomId = `mobile-${contact.id}`,
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`
    });
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  }
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }),

    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },

=======
  const [newMessage, setNewMessage] = useState("");
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`;
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`

  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {
<<<<<<< HEAD
      description: `Connecting with ${contact.name}...`
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button variant="ghost" size="icon" onClick={onBack}>

            <ChevronLeft className="h-5 w-5" />
          </Button>"
=======
            <ChevronLeft className="h-5 w-5" />
          </Button>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="flex items-center flex-1 gap-3 mx-2">
            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
<div>"
              <h3 className="font-medium">{contact.name}</h3>"
              <p className="text-xs text-muted-foreground">"
                {contact.status |"Online"}
              </p>
            </div>
          </div>"
          <div className="flex">"
            <Button variant="ghost" size="icon" onClick={startAudioCall}>"
              <Phone className="h-5 w-5" />
            </Button>"
            <Button variant="ghost" size="icon" onClick={startVideoCall}>"
              <Video className="h-5 w-5" />
            </Button>"
            <Button variant="ghost" size="icon">"
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
</header>"
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div;
            key={message.id}
            className={cn(

"
              "flex",
"
              message.isMe ? "justify-end" : "justify-start"
            )}
          >
            <div;
              className={cn(
<<<<<<< HEAD
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe "
                  ? "bg-primary text-primary-foreground rounded-tr-none" 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  : "bg-muted rounded-tl-none"
=======
      description: `Connecting with ${contact.name}...`                  : "bg-muted rounded-tl-none"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      description: `Connecting with ${contact.name}...`                  : "bg-muted rounded-tl-none"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              )}
            >
              <p>{message.content}</p>
<div className={cn(                "text-xs mt-1 flex justify-end";
=======
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex";
              "flex",
              message.isMe ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(

                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 

                  : "bg-muted rounded-tl-none"
              )}
            >
              <p>{message.content}</p>
              <div className={cn(

                "text-xs mt-1 flex justify-end";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  },;
  const startVideoCall = () => {;`
    const roomId = `mobile-${contact.id}`,;"
    toast.success("Starting video call", {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const handleSend = () => {;
    if (newMessage && newMessage.trim() !== "") {;
      onSendMessage(newMessage);
      setNewMessage("");
    }
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    status?: string;
  }
  messages: Message[],
  on_back: () => void,
  onSendMessage: (content: string) => void;
}
export /**;
 * MobileChatView - Function description;
 */
function MobileChatView() { return null; }
  const handle_send = () =>: any {}
    // Check condition"
if (!== "") {) {}
  $2;
}
      onSendMessage (new_message);"
      setNewMessage ("");
    }
  }
;
const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      e.prevent_default (),
      handle_send ();
    }
  }
;
const startVideoCall = () =>: any {
    const room_id = `mobile-${contact.id}`;
    toast.success ("Starting video call", {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<div>;"
              <h3 className="font - medium">{contact.name}</h3>;"
              <p className="text - xs text - muted - foreground">;"
                {contact.status || "Online"}
              </p>;
            </div>;
          </div>;"
          <div className="flex">;"
            <Button variant="ghost" size="icon" on_click={startAudioCall}>;"
              <Phone className="h - 5 w - 5" />;
            </Button>;"
            <Button variant="ghost" size="icon" on_click={startVideoCall}>;"
              <Video className="h - 5 w - 5" />;
            </Button>;"
            <Button variant="ghost" size="icon">;"
              <MoreVertical className="h - 5 w - 5" />;
            </Button>;
          </div>;
        </div>;
</header>;"
      <div className="flex - 1 overflow - y-auto p - 4 space - y-4">;
        {messages.map ((message) => (
          <div;
            key={message.id}
className={cn ("
              "flex";"
              message.is_me ? "justify - end" : "justify - start")}
          >;
            <div;
              className={cn ("
                "max - w-[80%] rounded - 2xl px - 4 py - 2";
                message.is_me;"
                  ? "bg - primary text - primary - foreground rounded - tr - none";"
                  : "bg - muted rounded - tl - none")}
            >;
              <p>{message.content}</p>;
              <div className={cn ("
                "text - xs mt - 1 flex justify - end";"
                message.is_me ? "text - primary - foreground / 80" : "text - muted - foreground")}>;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                {message.timestamp}
                {message.is_me && message.status && (
                  <span className="ml-1">;
                    {message.status === 'read' ? '✓✓' : '✓'}

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    navigate(`/call/${roomId}?audioOnly=true`);
  };

  return (
  return (
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
export function MobileChatView() { return null; }
      setNewMessage(""),;    }
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
<<<<<<< HEAD
    toast.success("Starting video call", {,
  description:`Connecting with ${contact.name}...`;
=======
    toast.success("Starting video call", {,
  description:`Connecting with ${contact.name}...`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }),;
    ;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`),;
  },;
  ;
const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
<<<<<<< HEAD
    toast.success("Starting audio call", {,
  description:`Connecting with ${contact.name}...`;
=======
    toast.success("Starting audio call", {,
  description:`Connecting with ${contact.name}...`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }),;
    ;
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`),;
  },;
  ;
<<<<<<< HEAD
  return (,
  description: `Connecting with ${contact.name}...`;
=======
  return (,
  description: `Connecting with ${contact.name}...`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }),;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`);
  },;
const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
<<<<<<< HEAD
    toast.success("Starting audio call", {,
  description: `Connecting with ${contact.name}...`;
=======
    toast.success("Starting audio call", {,
  description: `Connecting with ${contact.name}...`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }),;
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`);
  },;
return (;          ;
          <div className="flex items-center flex-1 gap-3 mx-2">;
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>;
            </Avatar>;
            <div>;"
              <h3 className="font-medium">{contact.name}</h3>;"
              <p className="text-xs text-muted-foreground">;"
                {contact.status || "Online"}
              </p>;
            </div>;
<<<<<<< HEAD
          </div>;
"
          <div className="flex">;"
            <Button variant="ghost" size="icon" onClick={startAudioCall}>;"
              <Phone className="h-5 w-5" />;
            </Button>;

            ;"
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;"
              <Video className="h-5 w-5" />;
            </Button>;
            ;"
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;"
              <Video className="h-5 w-5" />;
            </Button>;
"
            <Button variant="ghost" size="icon">;"
              <MoreVertical className="h-5 w-5" />;
            </Button>;
          </div>;
        </div>;
      </header>;

)}>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <p>{message && message.content}</p>;
=======
          </div>;              )}>;              <p>{message && message.content}</p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          </div>;              )}>;              <p>{message && message.content}</p>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
              )}>;
              <p>{message && message.content}</p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <divclassName={cn(
                "text-xs mt-1 flex justify-end"
=======

              <p>{message && message.content}</p>;
              <divclassName={cn("
                "text-xs mt-1 flex justify-end""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                message && message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>;
                {message && message.timestamp}
                {message && message.isMe && message && message.status && (;"
                  <span className="ml-1">;'
                    {message && message.status === 'read' ? '✓✓' : '✓'}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  </span>;

"
                "text-xs mt-1 flex justify-end","
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>

                {message.timestamp}
                {message.isMe && message.status && ("
                  <span className="ml-1">'
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                )}
=======
                  </span>;                )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  </span>;                )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  </span>;

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
                  </span>;

                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>

"text-xs mt-1 flex justify-end";
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground";
              )}>;
                {message.timestamp}
                {message.isMe && message.status && (
                  <span className="ml-1">
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
                )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </div>;
            </div>;
          </div>;
        ))}
</div>;

</div>;
      ;
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}
<Send className="h-5 w-5" />;

          <Button
            size="icon" 
            onClick={handleSend}
            disabled={!newMessage && newMessage.trim()}
            className={!newMessage && newMessage.trim() ? "opacity-50" : ""}>;
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  </span>)}
              </div>;
            </div>;
          </div>))}
</div>;
      <div className="sticky bottom - 0 bg - background border - t border - border p-2">;
        <div className="flex items - center gap-2">;
          <Button variant="ghost" size="icon">;
<<<<<<< HEAD
            <PaperclipIcon className="h - 5 w-5" />;
=======
            <PaperclipIcon className="h - 5 w-5" />;

      </div>;"
      <div className="sticky bottom - 0 bg - background border - t border - border p - 2">;"
</div>"
        <div className="flex items - center gap - 2">;"
</div>"
          <Button variant="ghost" size="icon">;"
</Button>"
            <PaperclipIcon className="h - 5 w - 5" />;"
</PaperclipIcon>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </Button>;
          <Input;
            value={new_message}
            on_change={(e) => setNewMessage (e.target.value)}
onKeyDown={handleKeyDown}
            placeholder="Type a message...";
<<<<<<< HEAD
            className="flex-1";
=======
            className="flex-1";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          />;
          <Button;"
            size="icon";
            on_click={handle_send}
            disabled={!new_message.trim ()}"
            className={!new_message.trim () ? "opacity - 50" : ""}
>;
<<<<<<< HEAD
            <Send className="h - 5 w-5" />;
=======
            <Send className="h - 5 w-5" />;
</Input>
          <Button;"
            size="icon";"
            on_click={handle_send}
            disabled={!new_message.trim ()}"
            className={!new_message.trim () ? "opacity - 50" : ""}"
          >;
</Button>"
            <Send className="h - 5 w - 5" />;"
</Send>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </Button>;
        </div>;
      </div>;
    </div>);
}

}
;

  ),;}
 interface Message {}
  id: string;
content: string;
timestamp: string;
isMe: boolean;
sender?: string;
avatar?: string;'
status?: 'sent' | 'delivered' | 'read' 
}interface MobileChatViewProps {}
  contact: {}
  id: string;
name: string;
avatar?: string;
status?: string;
};
messages: Message[];
onBack: () => void;
onSendMessage: (content: string) => void;
}export function MobileChatView ({};
  contact, messages, onBack, onSendMessage;
}: MobileChatViewProps) {}
  const handleSend = () => {"
  if (newMessage.trim () !== "") {}
  onSendMessage (newMessage);"
setNewMessage ("") contact.avatar;
}alt= {}
  contact.name;
}/> <AvatarFallback> {}
  contact.name.charAt (0) .toUpperCase () "
}</AvatarFallback> </Avatar> <div> </p> </div> </div> </Button> <Button variant=" ghost"size=" icon"> <MoreVertical className="h-5 w-5"/> </Button> </div> </div> </header> <div className="flex-1 overflow-y-auto p-4 space-y-4"> {}
  messages.map ( (message) => (<div key= {}
  message.id;
}) 
}> {}
  message.timestamp;
}{"
  message.isMe && message.status && (<span className="ml-1"> {'
  message.status === 'read' ? '✓✓' : '✓' 
}</span>) 
}</div> </div> </div>) ) "
}</div> <div className="sticky bottom-0 bg-background border-t border-border p-2"> <div className="flex items-center gap-2"> <Button variant=" ghost"size=" icon"> <PaperclipIcon className="h-5 w-5"/> </Button> <Input > <Send className=" h-5 w-5" /> </Button> </div> </div> </div>) 
}
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import React, { useState } from "react";""
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";""
import {Button} from "@/components/ui/button";""
import {Input} from "@/components/ui/input";""
import {Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone} from "lucide-react";""
import {cn} from "@/lib/utils";""
import {useNavigate} from "react-router-dom";""
import {toast} from "sonner";""
import React, { useState } from "react",""
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input",""
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",""
import { cn } from "@/lib/utils",""
import { useNavigate } from "react-router-dom";""
import { toast } from "sonner";"
interface Message {
  // TODO: Implement
}
  id: string;,
  content: string;
  timestamp: string;,
  isMe: boolean;
  sender?: string;
  avatar?: string;"
  status?: 'sent' | 'delivered' | 'read
interface MobileChatViewProps {
  // TODO: Implement
  contact: {,
  id: string;
    name: string;
    avatar?: string;
    status?: string;
  messages: Message[],
  onBack: () => void;
import { useNavigate } from "react-router-dom",""
import { toast } from "sonner","
  // TODO: Implement
  id: string,
  content: string,
  timestamp: string,
  is_me: boolean,
  status?: 'sent' | 'delivered' | 'read';
  // TODO: Implement
  isMe: boolean,
  sender?: string,
  avatar?: string,

  // TODO: Implement
    name: string,
  };
  onBack: () => void,
  onSendMessage: (content: string) => void;

export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState("");"
  const navigate = useNavigate();
  const handleSend = () => {"
    if (newMessage.trim() !== "") {"
      onSendMessage(newMessage);"
      setNewMessage("")"
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;
"
    <div className="flex flex-col h-full pb-safe">"
</div>"
      <header className="sticky top-0 z-10 bg-background border-b border-border">"
</header>"
        <div className="flex items-center h-14 px-4">"
          <Button variant="ghost" size="icon" onClick={onBack}>"
            <ChevronLeft className="h-5 w-5" />"

          <div className="flex items-center flex-1 gap-3 mx-2">"
</div>
            <Avatar>

              <AvatarImage src={contact.avatar} alt={contact.name} />

              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}
            <div>
              <h3 className="font-medium">{contact.name}</h3>""
              <p className="text-xs text-muted-foreground">"
</p>
          <div className="flex">"
            <Button variant="ghost" size="icon" onClick={startAudioCall}>"
              <Phone className="h-5 w-5" />"

            <Button variant="ghost" size="icon" onClick={startVideoCall}>"
              <Video className="h-5 w-5" />"

            <Button variant="ghost" size="icon">"
              <MoreVertical className="h-5 w-5" />"

      <div className="flex-1 overflow-y-auto p-4 space-y-4">"
          <div;
            key={message.id}
            className={cn("
              "flex";""
              "flex",""
              message.isMe ? "justify-end" : "justify-start"")
            )}
          >
              className={cn(

                "max-w-[80%] rounded-2xl px-4 py-2","
                message.isMe;"
                  ? "bg-primary text-primary-foreground rounded-tr-none"""
                  : "bg-muted rounded-tl-none"")
              <p>{message.content}</p>
              <div className={cn(
                "text-xs mt-1 flex justify-end";"
  },;)
  const startVideoCall = () => {;
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {
  // TODO: Implement
    // Check condition;
if ( {) {
  $2;
      e.prevent_default (),
      handle_send ();
;
  const startVideoCall = () =>: any {
  // TODO: Implement
    const room_id = `mobile-${contact.id}`;"
    toast.success ("Starting video call", {"`;
      description: `Connecting with ${contact.name}...`;)
    });
    // Navigate to video call page;`;
    navigate (`/call/${room_id}`);
  const startAudioCall = () =>: any {
  // TODO: Implement
}`;
    const room_id = `mobile - audio-${contact.id}`;"
    toast.success ("Starting audio call", {"`;
    // Navigate to video call page with audio - only flag;`;
    navigate (`/call/${room_id}?audio_only = true`);
  return ("
    <div className="flex flex - col h - full pb - safe">;"
      <header className="sticky top - 0 z - 10 bg - background border - b border - border">;"
        <div className="flex items - center h - 14 px - 4">;"
          <Button variant="ghost" size="icon" on_click={on_back}>;"
            <ChevronLeft className="h - 5 w - 5" />;"

          ;"
          <div className="flex items - center flex - 1 gap - 3 mx - 2">;"
            <Avatar>;

              <AvatarImage src={contact.avatar} alt={contact.name} />;
)
              <AvatarFallback>{contact.name.char_at (0).toUpperCase ()};
            <div>;
              <h3 className="font - medium">{contact.name}</h3>;""
              <p className="text - xs text - muted - foreground">;"
              </p>;
            </div>;
          </div>;"
          <div className="flex">;"
            <Button variant="ghost" size="icon" on_click={startAudioCall}>;"
              <Phone className="h - 5 w - 5" />;"

            <Button variant="ghost" size="icon" on_click={startVideoCall}>;"
              <Video className="h - 5 w - 5" />;"

            <Button variant="ghost" size="icon">;"
              <MoreVertical className="h - 5 w - 5" />;"

      </header>;"
      <div className="flex - 1 overflow - y-auto p - 4 space - y-4">;"
            className={cn ("
              "flex";")"
              message.is_me ? "justify - end" : "justify - start")}"
          >;
                "max - w-[80%] rounded - 2xl px - 4 py - 2";"
                message.is_me;"
                  ? "bg - primary text - primary - foreground rounded - tr - none";")"
                  : "bg - muted rounded - tl - none")}"
              <p>{message.content}</p>;
              <div className={cn ("
                "text - xs mt - 1 flex justify - end";")"
                message.is_me ? "text - primary - foreground / 80" : "text - muted - foreground")}>;"
                  <span className="ml - 1">;"
</span>
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {;
    <div className="flex flex-col h-full pb-safe">;"
      <header className="sticky top-0 z-10 bg-background border-b border-border">;"
        <div className="flex items-center h-14 px-4">;"
          <Button variant="ghost" size="icon" onClick={onBack}>;"
            <ChevronLeft className="h-5 w-5" />;"

          <div className="flex items-center flex-1 gap-3 mx-2">;"

              <AvatarImage src={contact && contact.avatar} alt={contact && contact.name} />;

              <AvatarFallback>{contact && contact.name.charAt(0).toUpperCase()};
              <h3 className="font-medium">{contact && contact.name}</h3>;""
              <p className="text-xs text-muted-foreground">;"

              <AvatarFallback>{contact.name.charAt(0).toUpperCase()};
              <h3 className="font-medium">{contact.name}</h3>;""
            <Button variant="ghost" size="icon" onClick={startAudioCall}>;"
              <Phone className="h-5 w-5" />;"

            <Button variant="ghost" size="icon" onClick={startVideoCall}>;"
              <Video className="h-5 w-5" />;"

              <MoreVertical className="h-5 w-5" />;"

      <div className="flex-1 overflow-y-auto p-4 space-y-4">;"
            key={message && message.id} 
              "flex"""
              message && message.isMe ? "justify-end" : "justify-start"")
            )}>;
                "max-w-[80%] rounded-2xl px-4 py-2""
                message && message.isMe;"
              <p>{message && message.content}</p>;
              <divclassName={cn("
                "text-xs mt-1 flex justify-end"""
                message && message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"")
</divclassName>"
                  <span className="ml-1">;"
                  </span>;
                  </span>;"
                  <span className="ml-1">"
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;"
        <div className="flex items-center gap-2">;"
            <PaperclipIcon className="h-5 w-5" />;"

          <Input;
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}

          <Button;"
            size="icon""
            onClick={handleSend}
            disabled={!newMessage && newMessage.trim()}"
            className={!newMessage && newMessage.trim() ? "opacity-50" : ""}>;"
            <Send className="h-5 w-5" />;"

                  </span>)}
          </div>))}
      <div className="sticky bottom - 0 bg - background border - t border - border p - 2">;"
        <div className="flex items - center gap - 2">;"
            <PaperclipIcon className="h - 5 w - 5" />;"

            value={new_message}
            on_change={(e) => setNewMessage (e.target.value)}

            size="icon";"
            on_click={handle_send}
            disabled={!new_message.trim ()}"
            className={!new_message.trim () ? "opacity - 50" : ""}"
            <Send className="h - 5 w - 5" />;"

    </div>);

}/> <AvatarFallback> {
}  <div> </p> </div> </div>  <Button variant=" ghost"size=" icon"> <MoreVertical className="h-5 w-5"/>  </div> </div> </header> <div className="flex-1 overflow-y-auto p-4 space-y-4"> {"
  messages.map ( (message) => (<div key= {
  message.id;)
}) 
}> {
  message.isMe && message.status && (<span className="ml-1"> {"
</span>)
}</span>) 
}</div> </div> </div>) ) "
}</div> <div className="sticky bottom-0 bg-background border-t border-border p-2"> <div className="flex items-center gap-2"> <Button variant=" ghost"size=" icon"> <PaperclipIcon className="h-5 w-5"/>  <Input > <Send className=" h-5 w-5" />  </div> </div> </div>)""`;
pr-12325
}</div> </div> </div>) ) 
}</div> <div className=\"sticky bottom-0 bg-background border-t border-border p-2\" /> <div className=\"flex items-center gap-2\" /> <Button variant=\" ghost\"size=\" icon\" /> <PaperclipIcon className=\"h-5 w-5\"/> </Button> <Input  /> <Send className=\" h-5 w-5\" /> </Button> </div> </div> </div>) 
}
}
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
