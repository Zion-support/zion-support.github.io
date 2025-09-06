import React, { useState } from "react",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react'
import { cn } from "@/lib/utils",
import { useRouter } from 'next/router',
import { toast } from "sonner",
interface Message {
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
<<<<<<< HEAD

    id: string;
    name: string;
    avatar?: string;
    status?: string
  },
  messages: Message[];
  onBack: () => void;
  onSendMessage: (content: string) => void

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
=======

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
    id: string,;
    name: string,;
    avatar?: string,;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
<<<<<<< HEAD
  };

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
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="flex flex-col h-full pb-safe">
      <header className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="flex items-center h-14 px-4">
          <Button
<<<<<<< HEAD
            variant='ghost'
            size='icon'
            onClick={onBack}
            aria-label='Go back'          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          <div className='flex items-center flex-1 gap-3 mx-2'>
            variant="ghost"
            size="icon"
            onClick={onBack}
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center flex-1 gap-3 mx-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
<<<<<<< HEAD
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
=======
              variant="ghost"
              size="icon"
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              onClick={startAudioCall}
              aria-label="Start audio call"
            >
              <Phone className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={startVideoCall}
<<<<<<< HEAD
              aria-label='Start video call'            >
              <Video className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' aria-label='More options'>
              <MoreVertical className='h-5 w-5' />
              <h3 className="font-medium">{contact.name}</h3>
              <p className="text-xs text-muted-foreground">
                {contact.status || "Online"}
              </p>
            </div>
          </div>
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              aria-label="Start video call"
            >
              <Video className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" aria-label="More options">
              <MoreVertical className="h-5 w-5" />
=======
<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            </Button>
          </div>
        </div>
      </header>
<<<<<<< HEAD

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
                'max-w-[80%] rounded-2xl px-4 py-2',
                message && message.isMe

                  ? 'bg-primary text-primary-foreground rounded-tr-none'
                  : 'bg-muted rounded-tl-none'
              )}            >
              <p>{message.content}</p>
              <div
                className={cn(

                  'text-xs mt-1 flex justify-end',
                  message && message.isMe

                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground'
                )}

      <div className='flex - 1 overflow - y-auto p - 4 space - y-4'>;
        {messages.map (message => (

      
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
              <div;
                className={cn (
                  'text - xs mt - 1 flex justify - end',
                  message.is_me;
                    ? 'text - primary - foreground / 80';
                    : 'text - muted - foreground')}
              >;
                {message.timestamp}

                {message.isMe && message.status && (;
                  <span className="ml-1">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
          </Button>
          <Input
            value={newMessage}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            onChange={(e) => setNewMessage(e.target.value)}

            onKeyDown={handleKeyDown}

            className={!newMessage.trim() ? "opacity-50" : ""}
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          </Button>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}

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
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
