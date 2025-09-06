<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
=======

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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import {toast} from "sonner";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",
import { cn } from "@/lib/utils",
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import React, { useState } from "react";"
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone} from "lucide-react";"
import {cn} from "@/lib/utils";"
import {useNavigate} from "react-router-dom";"
import {toast} from "sonner";
"
import React, { useState } from "react","
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react","
import { cn } from "@/lib/utils",";
import { useNavigate } from "react-router-dom";"
import { toast } from "sonner";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
import React, { useState } from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======


import React, { useState } from './react';'
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from './lucide-react';'
import { cn } from '@/lib / utils';'
import { use_navigate } from './react-router-dom';'
import { toast } from './sonner';
interface Message {}
=======

import React, { useState } from './react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from './lucide-react';
import { cn } from '@/lib / utils';
import { use_navigate } from './react-router-dom';
import { toast } from './sonner';
interface Message {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string,
  content: string,
  timestamp: string,
  sender?: string;
<<<<<<< HEAD
  avatar?: string;'
  status?: 'sent' | 'delivered' | 'read';
}
interface MobileChatViewProps {}
  contact: {}
    id: string;
    name: string;
    avatar?: string;
interface Message {}
=======
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}
interface MobileChatViewProps {
  contact: {

    id: string
    name: string
    avatar?: string;
interface Message {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string,
  content: string,
  timestamp: string,
  isMe: boolean,
  sender?: string,
<<<<<<< HEAD
  avatar?: string,'
  status?: 'sent' | 'delivered' | 'read'

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onSendMessage: (content: string) => void
}
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

  const [newMessage, setNewMessage] = useState("");

  const navigate = useNavigate();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      onSendMessage(newMessage);
=======
"
  const [newMessage, setNewMessage] = useState("");

  const navigate = useNavigate();
      onSendMessage(newMessage);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
      onSendMessage(newMessage);
      setNewMessage("");
    }


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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      handleSend();
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const startVideoCall = () => {
=======
      onSendMessage(newMessage);      setNewMessage("");
    }  const startVideoCall = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD
  const startAudioCall = () => {}`
    const roomId = `mobile-audio-${contact.id}`,"
    toast.success("Starting audio call", {}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      description: `Connecting with ${contact.name}...`

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }),
    
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
  

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
      description: `Connecting with ${contact.name}...`
<<<<<<< HEAD
=======
      description: `Connecting with ${contact.name}...`
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    });
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  }
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }),
    
    // Navigate to video call page with audio-only flag
    navigate(`/call/${roomId}?audioOnly=true`)
  },
  
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
<<<<<<< HEAD
=======

  return ("
    <div className="flex flex-col h-full pb-safe">"
      <header className="sticky top-0 z-10 bg-background border-b border-border">"
        <div className="flex items-center h-14 px-4">"
          <Button variant="ghost" size="icon" onClick={onBack}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
<<<<<<< HEAD
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                "max-w-[80%] rounded-2xl px-4 py-2",
                message.isMe "
                  ? "bg-primary text-primary-foreground rounded-tr-none" 


<<<<<<< HEAD
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
<<<<<<< HEAD
              <div className={cn(                "text-xs mt-1 flex justify-end";
=======
              <div className={cn(
"
                "text-xs mt-1 flex justify-end";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleSend = () => {;
    if (newMessage && newMessage.trim() !== "") {;
      onSendMessage(newMessage);
      setNewMessage("");
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    status?: string;
  }
  messages: Message[],
  on_back: () => void,
  onSendMessage: (content: string) => void;
}
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setNewMessage ("");
    }
  }
;
<<<<<<< HEAD
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {}
    // Check condition;
if ( {) {}
  $2;
=======
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {
    // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
      e.prevent_default (),
      handle_send ();
    }
  }
;
<<<<<<< HEAD
<<<<<<< HEAD
  const startVideoCall = () =>: any {
    const room_id = `mobile-${contact.id}`;
    toast.success ("Starting video call", {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const startVideoCall = () =>: any {}`
    const room_id = `mobile-${contact.id}`;"
    toast.success ("Starting video call", {}`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="flex items - center flex - 1 gap - 3 mx - 2">;
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>{contact.name.char_at (0).toUpperCase ()}</AvatarFallback>;
            </Avatar>;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <MoreVertical className="h - 5 w - 5" />;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD
      </header>;"
=======
      </header>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="flex - 1 overflow - y-auto p - 4 space - y-4">;
        {messages.map ((message) => (
          <div;
            key={message.id}
<<<<<<< HEAD
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

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                {message.timestamp}
                {message.is_me && message.status && (
                  <span className="ml - 1">;
                    {message.status === 'read' ? '✓✓' : '✓'}
<<<<<<< HEAD
=======


                {message.timestamp}
                {message.is_me && message.status && ("
                  <span className="ml - 1">;'
                    {message.status === 'read' ? '✓✓' : '✓'}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  };
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;'
    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault(),;
      handleSend();
    }
  };
<<<<<<< HEAD
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
  return (

import React, { useState } from "react",;
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { useNavigate } from "react-router-dom",;
=======
  const startVideoCall = () => {;`
    const roomId = `mobile-${contact && contact.id}`;"
    toast && toast.success("Starting video call", {;`
      description: `Connecting with ${contact && contact.name}...`;
    });
    // Navigate to video call page;`
    navigate(`/call/${roomId}`);
  };
  const startAudioCall = () => {;`
    const roomId = `mobile-audio-${contact && contact.id}`;"
    toast && toast.success("Starting audio call", {;`
      description: `Connecting with ${contact && contact.name}...`;
    });
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`);
  };

  return (
"
import React, { useState } from "react",;"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from "lucide-react",;"
import { cn } from "@/lib/utils",;"
import { useNavigate } from "react-router-dom",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
  const startVideoCall = () => {;
    const roomId = `mobile-${contact.id}`,;
<<<<<<< HEAD
    toast.success("Starting video call", {,
  description:`Connecting with ${contact.name}...`;
=======
  const startVideoCall = () => {;`
    const roomId = `mobile-${contact.id}`,;"
    toast.success("Starting video call", {;`
      description:`Connecting with ${contact.name}...`;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    toast.success("Starting video call", {;
      description:`Connecting with ${contact.name}...`;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }),;
    ;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`),;
  },;
  ;
<<<<<<< HEAD
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
<<<<<<< HEAD
    toast.success("Starting audio call", {,
  description:`Connecting with ${contact.name}...`;
=======
  const startAudioCall = () => {;`
    const roomId = `mobile-audio-${contact.id}`,;"
    toast.success("Starting audio call", {;`
      description:`Connecting with ${contact.name}...`;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    toast.success("Starting audio call", {;
      description:`Connecting with ${contact.name}...`;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }),;
    ;
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`),;
  },;
  ;
<<<<<<< HEAD
<<<<<<< HEAD
  return (,
  description: `Connecting with ${contact.name}...`;
=======
  return (;`
      description: `Connecting with ${contact.name}...`;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (;
      description: `Connecting with ${contact.name}...`;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }),;
    // Navigate to video call page;`
    navigate(`/call/${roomId}`);
  },;
<<<<<<< HEAD
  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact.id}`,;
<<<<<<< HEAD
    toast.success("Starting audio call", {,
  description: `Connecting with ${contact.name}...`;
=======
  const startAudioCall = () => {;`
    const roomId = `mobile-audio-${contact.id}`,;"
    toast.success("Starting audio call", {;`
      description: `Connecting with ${contact.name}...`;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    toast.success("Starting audio call", {;
      description: `Connecting with ${contact.name}...`;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }),;
    // Navigate to video call page with audio-only flag;`
    navigate(`/call/${roomId}?audioOnly=true`);
  },;
<<<<<<< HEAD
<<<<<<< HEAD
  return (;          ;
=======
  return (;
"
    <div className="flex flex-col h-full pb-safe">;"
      <header className="sticky top-0 z-10 bg-background border-b border-border">;"
        <div className="flex items-center h-14 px-4">;"
          <Button variant="ghost" size="icon" onClick={onBack}>;"
            <ChevronLeft className="h-5 w-5" />;
          </Button>;

          ;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (;
    <div className="flex flex-col h-full pb-safe">;
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

          ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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
=======
          </div>;
          <div className="flex">;
            <Button variant="ghost" size="icon" onClick={startAudioCall}>;
              <Phone className="h-5 w-5" />;
            </Button>;

            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;

            ;
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
            ;
            <Button variant="ghost" size="icon" onClick={startVideoCall}>;
              <Video className="h-5 w-5" />;
            </Button>;
            <Button variant="ghost" size="icon">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <MoreVertical className="h-5 w-5" />;
            </Button>;
          </div>;
        </div>;
      </header>;

<<<<<<< HEAD

              )}>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              )}>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

                  </span>;


                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>

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
<<<<<<< HEAD

      </div>;

      <div className="sticky bottom-0 bg-background border-t border-border p-2">;
        <div className="flex items-center gap-2">;
          <Button variant="ghost" size="icon">;
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

            placeholder="Type a message...";
            className="flex-1";
          />;

          <Button
            size="icon" 
            onClick={handleSend}
            disabled={!newMessage && newMessage.trim()}
            className={!newMessage && newMessage.trim() ? "opacity-50" : ""}>;
<<<<<<< HEAD
=======
          ;
=======
"
      <div className="sticky bottom-0 bg-background border-t border-border p-2">;"
        <div className="flex items-center gap-2">;"
          <Button variant="ghost" size="icon">;"
            <PaperclipIcon className="h-5 w-5" />;
          </Button>;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Input;
            value={newMessage}
            onChange={(e) => setNewMessage(e && e.target.value)}
            onKeyDown={handleKeyDown}
<<<<<<< HEAD
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
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Send className="h-5 w-5" />;
          </Button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  </span>)}
              </div>;
            </div>;
          </div>))}
<<<<<<< HEAD
      </div>;
      <div className="sticky bottom - 0 bg - background border - t border - border p - 2">;
        <div className="flex items - center gap - 2">;
          <Button variant="ghost" size="icon">;
<<<<<<< HEAD
            <PaperclipIcon className="h - 5 w-5" />;
=======
      </div>;"
      <div className="sticky bottom - 0 bg - background border - t border - border p - 2">;"
        <div className="flex items - center gap - 2">;"
          <Button variant="ghost" size="icon">;"
            <PaperclipIcon className="h - 5 w - 5" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <PaperclipIcon className="h - 5 w - 5" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </Button>;
          <Input;
            value={new_message}
            on_change={(e) => setNewMessage (e.target.value)}
<<<<<<< HEAD
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
<<<<<<< HEAD
            className="flex-1";
=======
            onKeyDown={handleKeyDown}"
            placeholder="Type a message...";"
            className="flex - 1";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            className="flex - 1";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          />;
          <Button;"
            size="icon";
            on_click={handle_send}
            disabled={!new_message.trim ()}"
            className={!new_message.trim () ? "opacity - 50" : ""}
<<<<<<< HEAD
          >;
<<<<<<< HEAD
            <Send className="h - 5 w-5" />;
=======
          >;"
            <Send className="h - 5 w - 5" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <Send className="h - 5 w - 5" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </Button>;
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

}
;


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
