<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Send
  PaperclipIcon
  ChevronLeft
  MoreVertical
  Video
  Phone
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/router'
import { toast } from 'sonner'

interface Message {
  id: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
id: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  sender?: string;
  avatar?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  status?: 'sent' | 'delivered' | 'read'
interface MobileChatViewProps {
  contact: {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  status?: 'sent' | 'delivered' | 'read';

interface MobileChatViewProps {;
  contact: {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: string;
    name: string;
    avatar?: string;
    status?: string
  },
  messages: Message[];
  onBack: () => void;
  onSendMessage: (content: string) => void

<<<<<<< HEAD
<<<<<<< HEAD
export function MobileChatView({
  contact
  messages
  onBack
  onSendMessage
}: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState('')
  const router = useRouter()
  const handleSend = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage)
      setNewMessage('')


import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useRouter } from 'next/router',
import { toast } from "sonner",
interface Message {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import {
  Send,
  PaperclipIcon,
  ChevronLeft,
  MoreVertical,
  Video,
  Phone,
} from 'lucide-react';
import { cn } from '@/lib / utils';
import { use_router } from 'next / router';
import { toast } from 'sonner';
interface Message {
  id: string;
  content: string;
  timestamp: string;
  is_me: boolean;
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
interface MobileChatViewProps {
  contact: {
    id: string;
    name: string;
    avatar?: string;
    status?: string;
  }
  messages: Message[];
  on_back: () => void;
  onSendMessage: (content: string) => void;
export /**
 * MobileChatView - Function description
 */
function MobileChatView() {
  const [new_message, setNewMessage] = useState ('');
  const router = use_router ();
  const handle_send = () =>: any {
    // Check condition
if (!== '') {) {
  $2
}
      onSendMessage (new_message);
      setNewMessage ('');




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }
  }
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {    // Check condition
if ( {) {
  $2
}
      e.prevent_default ();
      handle_send ();
    }

  const startVideoCall = () =>: any {
    const room_id = `mobile-${contact.id}`;
    toast.success ('Starting video call', {
      description: `Connecting with ${contact.name}...`,
    });
    // Navigate to video call page;
    router.push (`/call/${room_id}`);
  }
  const startAudioCall = () =>: any {
    const room_id = `mobile - audio-${contact.id}`;
    toast.success ('Starting audio call', {
      description: `Connecting with ${contact.name}...`,
    });
    // Navigate to video call page with audio - only flag;
    router.push (`/call/${room_id}?audio_only = true`);

  }
export function MobileChatView(): any ({;
  contact,;
  messages,;
  onBack,;
  onSendMessage,;
}: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState('');
  const router = useRouter();
  const handleSend = () => {;
<<<<<<< HEAD
<<<<<<< HEAD
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
=======
    if (newMessage && newMessage.trim() !== '') {;
      onSendMessage(newMessage);
      setNewMessage('');
=======
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  };

  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
      e && e.preventDefault();
      handleSend();
    }
  };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const startVideoCall = () => {;
    const roomId = `mobile-${contact && contact.id}`;
    toast && toast.success('Starting video call', {;
      description: `Connecting with ${contact && contact.name}...`,;
    });

    // Navigate to video call page;
    router && router.push(`/call/${roomId}`);
  };

  const startAudioCall = () => {;
    const roomId = `mobile-audio-${contact && contact.id}`;
    toast && toast.success('Starting audio call', {;
      description: `Connecting with ${contact && contact.name}...`,;
    });

    // Navigate to video call page with audio-only flag;
    router && router.push(`/call/${roomId}?audioOnly=true`);
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
  }
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`
    toast.success('Starting video call', {
      description: `Connecting with ${contact.name}...`
    })
    // Navigate to video call page
    router.push(`/call/${roomId}`)
  }
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`
    toast.success('Starting audio call', {
      description: `Connecting with ${contact.name}...`
    })
    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly=true`)
  }
  id: string,
  content: string,
  timestamp: string,
  isMe: boolean,
  sender?: string,
  avatar?: string,
  status?: 'sent' | 'delivered' | 'read'
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

export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState(""),
  const router = useRouter(),
  
  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage),
      setNewMessage("")
;
export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {;
  const [newMessage, setNewMessage] = useState(""),;
  const router = useRouter(),;
  const handleSend = () => {;
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`
    toast.success('Starting video call', {
      description: `Connecting with ${contact.name}...`
    })
    // Navigate to video call page
    router.push(`/call/${roomId}`)
  }
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`
    toast.success('Starting audio call', {
      description: `Connecting with ${contact.name}...`
    })
    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly=true`)
  }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  
  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`,
    toast.success("Starting video call", {
      description: `Connecting with ${contact.name}...`
    }),
    
    // Navigate to video call page
    router.push(`/call/${roomId}`)
  },
  
  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`,
    toast.success("Starting audio call", {
      description: `Connecting with ${contact.name}...`
    }),
    
    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly=true`)
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            variant='ghost'
            size='icon'
            onClick={onBack}
            aria-label='Go back'          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          <div className='flex items-center flex-1 gap-3 mx-2'>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            variant="ghost"
            size="icon"
            onClick={onBack}
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center flex-1 gap-3 mx-2">

            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h3 className='font-medium'>{contact.name}</h3>
              <p className='text-xs text-muted-foreground'>
                {contact.status |'Online'}
              </p>
            </div>
          </div>
          <div className='flex'>
<<<<<<< HEAD
=======

            aria-label='Go back'>;
            <ChevronLeft className='h-5 w-5' />;
          </Button>;

          <div className='flex items-center flex-1 gap-3 mx-2'>;
            <Avatar>;
              <AvatarImage src={contact && contact.avatar} alt={contact && contact.name} />;
              <AvatarFallback>;
                {contact && contact.name.charAt(0).toUpperCase()}
              </AvatarFallback>;
            </Avatar>;
            <div>;
              <h3 className='font-medium'>{contact && contact.name}</h3>;
              <p className='text-xs text-muted-foreground'>;
                {contact && contact.status || 'Online'}
              </p>;
            </div>;
          </div>;

          <div className='flex'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              variant='ghost'
              size='icon'
              onClick={startAudioCall}
<<<<<<< HEAD
<<<<<<< HEAD
              aria-label='Start audio call'            >
              <Phone className='h-5 w-5' />
            </Button>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              aria-label='Start audio call'>;
              <Phone className='h-5 w-5' />;
            </Button>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              variant='ghost'
              size='icon'
              onClick={startVideoCall}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              aria-label='Start video call'            >
              <Video className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' aria-label='More options'>
              <MoreVertical className='h-5 w-5' />
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-xs text-muted-foreground">
                {contact.status || "Online"}
              </p>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='flex'>
            <Button
              variant='ghost'
              size='icon'
              onClick={startAudioCall}
              aria-label='Start audio call'            >
              <Phone className='h-5 w-5' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              onClick={startVideoCall}
              aria-label='Start video call'            >
              <Video className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' aria-label='More options'>
              <MoreVertical className='h-5 w-5' />
          
          <div className="flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={startAudioCall}
              aria-label="Start audio call"
            >
              <Phone className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={startVideoCall}
              aria-label="Start video call"
            >
              <Video className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" aria-label="More options">
              <MoreVertical className="h-5 w-5" />
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={startVideoCall}
              aria-label="Start video call"
            >
              <Video className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" aria-label="More options">
              <MoreVertical className="h-5 w-5" />
          </div>
        </div>
      </header>
<<<<<<< HEAD
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
        {messages.map(message => (
          <div
            key={message.id}
            className={cn(
              'flex'
              message.isMe ? 'justify-end' : 'justify-start'
            )}
          >
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


            </Button>
          </div>
        </div>
      </header>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              aria-label='Start video call'>;
              <Video className='h-5 w-5' />;
            </Button>;

            <Button variant='ghost' size='icon' aria-label='More options'>;
              <MoreVertical className='h-5 w-5' />;
    <div className='flex flex - col h - full pb - safe'>;
      <header className='sticky top - 0 z - 10 bg - background border - b border - border'>;
        <div className='flex items - center h - 14 px - 4'>;
          <Button;
            variant='ghost';
            size='icon';
            on_click={on_back}
            aria - label='Go back'          >;
            <ChevronLeft className='h - 5 w - 5' />;
          </Button>;
          <div className='flex items - center flex - 1 gap - 3 mx - 2'>;
            <Avatar>;
              <AvatarImage src={contact.avatar} alt={contact.name} />;
              <AvatarFallback>;
                {contact.name.char_at (0).toUpperCase ()}
              </AvatarFallback>;
            </Avatar>;
            <div>;
              <h3 className='font - medium'>{contact.name}</h3>;
              <p className='text - xs text - muted - foreground'>;
                {contact.status || 'Online'}
              </p>;
            </div>;
          </div>;
          <div className='flex'>;
            <Button;
              variant='ghost';
              size='icon';
              on_click={startAudioCall}
              aria - label='Start audio call'            >;
              <Phone className='h - 5 w - 5' />;
            </Button>;
            <Button;
              variant='ghost';
              size='icon';
              on_click={startVideoCall}
              aria - label='Start video call'            >;
              <Video className='h - 5 w - 5' />;
            </Button>;
            <Button variant='ghost' size='icon' aria - label='More options'>;
              <MoreVertical className='h - 5 w - 5' />;

            </Button>;
          </div>;
        </div>;
      </header>;

              'flex',
              message && message.isMe ? 'justify-end' : 'justify-start'
            )}>;
            <div
              className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
                'max-w-[80%] rounded-2xl px-4 py-2'
                message.isMe
=======
                'max-w-[80%] rounded-2xl px-4 py-2',
                message && message.isMe

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                'max-w-[80%] rounded-2xl px-4 py-2',
                message && message.isMe

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  ? 'bg-primary text-primary-foreground rounded-tr-none'
                  : 'bg-muted rounded-tl-none'
              )}            >
              <p>{message.content}</p>
              <div
                className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
                  'text-xs mt-1 flex justify-end'
                  message.isMe
                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground'
                )}
              >
      <div className='flex - 1 overflow - y-auto p - 4 space - y-4'>;
        {messages.map (message => (

                {message.timestamp}
                {message.isMe && message.status && (
                  <span className='ml-1'>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  'text-xs mt-1 flex justify-end',
                  message && message.isMe

                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground'
                )}

      <div className='flex - 1 overflow - y-auto p - 4 space - y-4'>;
        {messages.map (message => (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={cn(
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
                "text-xs mt-1 flex justify-end",
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <div;
                className={cn (
                  'text - xs mt - 1 flex justify - end',
                  message.is_me;
                    ? 'text - primary - foreground / 80';
                    : 'text - muted - foreground')}
              >;
                {message.timestamp}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {message.isMe && message.status && (;
                  <span className="ml-1">;


                    {message.status === 'read' ? '✓✓' : '✓'}
<<<<<<< HEAD
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

      
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Attach file">
            <PaperclipIcon className="h-5 w-5" />

          </Button>
          <Input
            value={newMessage}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...'
            className='flex-1'          />
          <Button
            size='icon'
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50' : ''}
            aria-label='Send message'          >
            <Send className='h-5 w-5' />
<<<<<<< HEAD
          </Button>
          <Input
            value={newMessage}
ursor/fix-website-loading-errors-and-merge-6662
                    {message.status === 'read' ? '✓✓' : '✓'}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </div>;
            </div>;
          </div>;
        ))}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Attach file">
            <PaperclipIcon className="h-5 w-5" />
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>
          <Input
            value={newMessage}

            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...'
            className='flex-1'          />

<<<<<<< HEAD
          </Button>
        </div>

      </div>;

      <div className='sticky bottom-0 bg-background border-t border-border p-2'>;
        <div className='flex items-center gap-2'>;
          <Button variant='ghost' size='icon' aria-label='Attach file'>;
            <PaperclipIcon className='h-5 w-5' />;
          </Button>;

          <Input
            value={newMessage}



            onKeyDown={handleKeyDown}

      <div className='sticky bottom-0 bg-background border-t border-border p-2'>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' aria-label='Attach file'>
            <PaperclipIcon className='h-5 w-5' />
          </Button>
          <Input
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...'
            className='flex-1'          />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button
            size='icon'
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50' : ''}
            aria-label='Send message'          >
            <Send className='h-5 w-5' />
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Attach file">
            <PaperclipIcon className="h-5 w-5" />
          </Button>
          <Input
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...'
            className='flex-1'          />

          <Button
            size='icon'
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50' : ''}
            aria-label='Send message'          >
            <Send className='h-5 w-5' />
          </Button>
        </div>
      </div>;
    </div>;
  );
};
}
}
      
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Attach file">
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
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>
        </div>

      </div>;

      <div className='sticky bottom-0 bg-background border-t border-border p-2'>;
        <div className='flex items-center gap-2'>;
          <Button variant='ghost' size='icon' aria-label='Attach file'>;
            <PaperclipIcon className='h-5 w-5' />;
          </Button>;

          <Input
            value={newMessage}


            onChange={(e) => setNewMessage(e.target.value)}

            onKeyDown={handleKeyDown}

            className={!newMessage.trim() ? "opacity-50" : ""}
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}
}
;
=======
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </span>)}
              </div>;
            </div>;
          </div>))}
      </div>;
      <div className='sticky bottom - 0 bg - background border - t border - border p - 2'>;
        <div className='flex items - center gap - 2'>;
          <Button variant='ghost' size='icon' aria - label='Attach file'>;
            <PaperclipIcon className='h - 5 w - 5' />;
          </Button>;
          <Input;
            value={new_message}
            on_change={e => setNewMessage (e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...';
            className='flex - 1'          />;
          <Button;
            size='icon';
            on_click={handle_send}
            disabled={!new_message.trim ()}
            className={!new_message.trim () ? 'opacity - 50' : ''}
            aria - label='Send message'          >;
            <Send className='h - 5 w - 5' />;
          </Button>;
        </div>;
      </div>;
    </div>);
}

}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
