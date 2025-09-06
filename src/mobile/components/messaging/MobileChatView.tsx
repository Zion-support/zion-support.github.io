import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Send,
  PaperclipIcon,
  ChevronLeft,
  MoreVertical,
  Video,
  Phone,;
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import { toast } from 'sonner';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  sender?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';

interface MobileChatViewProps {
  contact: {

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage);
      setNewMessage('');
    }

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const startVideoCall = () => {
    const roomId = `mobile-${contact.id}`;
    toast.success('Starting video call', {
      description: `Connecting with ${contact.name}...`,
    });

    // Navigate to video call page
    router.push(`/call/${roomId}`);
  };

  const startAudioCall = () => {
    const roomId = `mobile-audio-${contact.id}`;
    toast.success('Starting audio call', {
      description: `Connecting with ${contact.name}...`,
    });

    // Navigate to video call page with audio-only flag
    router.push(`/call/${roomId}?audioOnly=true`);
  };

  return (
    <div className='flex flex-col h-full pb-safe'>
      <header className='sticky top-0 z-10 bg-background border-b border-border'>
        <div className='flex items-center h-14 px-4'>
          <Button

          >
            <ChevronLeft className='h-5 w-5' />
          </Button>

          <div className='flex items-center flex-1 gap-3 mx-2'>
            <Avatar>
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>
                {contact.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className='font-medium'>{contact.name}</h3>
              <p className='text-xs text-muted-foreground'>
                {contact.status || 'Online'}
              </p>
            </div>
          </div>

          <div className='flex'>
            <Button

            >
              <Phone className='h-5 w-5' />
            </Button>

            <Button

            >
              <Video className='h-5 w-5' />
            </Button>

            <Button variant='ghost' size='icon' aria-label='More options'>
              <MoreVertical className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </header>

            >
              <p>{message.content}</p>
              <div
                className={cn(
                  'text-xs mt-1 flex justify-end',
                  message.isMe
                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground'
                )}
              >
                {message.timestamp}
                {message.isMe && message.status && (
                  <span className='ml-1'>
                    {message.status === 'read' ? '✓✓' : '✓'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='sticky bottom-0 bg-background border-t border-border p-2'>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' aria-label='Attach file'>
            <PaperclipIcon className='h-5 w-5' />
          </Button>

          <Input

          />

          <Button

          >
            <Send className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  );