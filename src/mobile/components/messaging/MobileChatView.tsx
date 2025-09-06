<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
interface Message {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
=======
id: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  content: string;
  timestamp: string;
  isMe: boolean;
  sender?: string;
  avatar?: string;
<<<<<<< HEAD

  status?: 'sent' | 'delivered' | 'read';

interface MobileChatViewProps {;
  contact: {;

=======
  status?: 'sent' | 'delivered' | 'read'
interface MobileChatViewProps {
  contact: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    id: string;
    name: string;
    avatar?: string;
    status?: string
  },
  messages: Message[];
  onBack: () => void;
  onSendMessage: (content: string) => void

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useRouter } from 'next/router',
import { toast } from "sonner",
interface Message {
<<<<<<< HEAD
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
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
    if (newMessage.trim() !== "") {;
      onSendMessage(newMessage),;
      setNewMessage("");
<<<<<<< HEAD

    }
=======
>>>>>>>     }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
=======
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
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
  
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            variant='ghost'
            size='icon'
            onClick={onBack}
            aria-label='Go back'          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          <div className='flex items-center flex-1 gap-3 mx-2'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             <Avatar>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <Avatar>
>>>>>>>               <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>
                {contact.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
<<<<<<< HEAD

=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            variant="ghost"
            size="icon"
            onClick={onBack}
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center flex-1 gap-3 mx-2">
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <h3 className='font-medium'>{contact.name}</h3>
              <p className='text-xs text-muted-foreground'>
                {contact.status |'Online'}
              </p>
            </div>
          </div>
          <div className='flex'>
            <Button
              variant='ghost'
              size='icon'
              onClick={startAudioCall}
<<<<<<< HEAD

              aria-label='Start audio call'>;
              <Phone className='h-5 w-5' />;
            </Button>;


=======
              aria-label='Start audio call'            >
              <Phone className='h-5 w-5' />
            </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Button
              variant='ghost'
              size='icon'
              onClick={startVideoCall}
              aria-label='Start video call'            >
              <Video className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' aria-label='More options'>
              <MoreVertical className='h-5 w-5' />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-xs text-muted-foreground">
                {contact.status || "Online"}
              </p>
            </div>
          </div>
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              variant="ghost"
              size="icon"
              onClick={startAudioCall}
              aria-label="Start audio call"
            >
              <Phone className="h-5 w-5" />
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

            </Button>
          </div>
        </div>
      </header>

<<<<<<< HEAD
                    {message.status === 'read' ? '✓✓' : '✓'}
=======
>>>>>>>             </Button>
          </div>
        </div>
      </header>
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <div
              className={cn(
<<<<<<< HEAD
                'max-w-[80%] rounded-2xl px-4 py-2',
                message && message.isMe

=======
                'max-w-[80%] rounded-2xl px-4 py-2'
                message.isMe
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  ? 'bg-primary text-primary-foreground rounded-tr-none'
                  : 'bg-muted rounded-tl-none'
              )}            >
              <p>{message.content}</p>
              <div
                className={cn(
<<<<<<< HEAD

                  'text-xs mt-1 flex justify-end',
                  message && message.isMe

=======
                  'text-xs mt-1 flex justify-end'
                  message.isMe
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground'
                )}
<<<<<<< HEAD

<<<<<<< HEAD
                {message.timestamp}
                {message.isMe && message.status && (
                  <span className='ml-1'>
>>>>>>>                     {message.status === 'read' ? '✓✓' : '✓'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              >
=======
      <div className='flex - 1 overflow - y-auto p - 4 space - y-4'>;
        {messages.map (message => (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

                {message.timestamp}
                {message.isMe && message.status && (
                  <span className='ml-1'>
      
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
<<<<<<< HEAD
              <div className={cn(;
                "text-xs mt-1 flex justify-end";
                message.isMe ? "text-primary-foreground/80" : "text-muted-foreground";
              )}>;
=======
              <div;
                className={cn (
                  'text - xs mt - 1 flex justify - end',
                  message.is_me;
                    ? 'text - primary - foreground / 80';
                    : 'text - muted - foreground')}
              >;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                {message.timestamp}
                {message.isMe && message.status && (;
                  <span className="ml-1">;
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    {message.status === 'read' ? '✓✓' : '✓'}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
<<<<<<< HEAD
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

      
      <div className="sticky bottom-0 bg-background border-t border-border p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Attach file">
            <PaperclipIcon className="h-5 w-5" />

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
          <Input
            value={newMessage}
ursor/fix-website-loading-errors-and-merge-6662
                    {message.status === 'read' ? '✓✓' : '✓'}

              </div>;
            </div>;
          </div>;
        ))}
      
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

          </Button>
<<<<<<< HEAD
          <Input
            value={newMessage}

            onChange={(e) => setNewMessage(e.target.value)}
=======
        </div>

      </div>;

      <div className='sticky bottom-0 bg-background border-t border-border p-2'>;
        <div className='flex items-center gap-2'>;
          <Button variant='ghost' size='icon' aria-label='Attach file'>;
            <PaperclipIcon className='h-5 w-5' />;
          </Button>;

          <Input
            value={newMessage}


>>>>>>>             onChange={(e) => setNewMessage(e.target.value)}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            onKeyDown={handleKeyDown}

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
          <Button
            size='icon'
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50' : ''}
            aria-label='Send message'          >
            <Send className='h-5 w-5' />
      
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className={!newMessage.trim() ? "opacity-50" : ""}
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </Button>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
}
>>>>>>> 
}
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
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
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
