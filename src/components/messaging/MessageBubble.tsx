import React from 'react';
import { format } from 'date-fns';
<<<<<<< HEAD
import { PaperclipIcon } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { PaperclipIcon } from 'lucide-react';
=======
import { PaperclipIcon } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { cn } from '@/lib/utils';
import { Message } from '@/types/messaging';

interface MessageBubbleProps {
  message: Message;
  isUserMessage: boolean;

export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  
    >
      <div
        className={cn(
          'max-w-[75%] rounded-lg px-4 py-2',
          isUserMessage
            ? 'bg-zion-purple text-white'
            : 'bg-zion-blue-dark text-white'
        )}
      >
        <div className='whitespace-pre-wrap'>{message.content}</div>

        {message.attachment_url && (
          <a
            href={message.attachment_url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30'
          >
            <PaperclipIcon className='h-3 w-3 mr-1' aria-hidden='true' />
            {message.attachment_name || 'Attachment'}
          </a>
        )}
<<<<<<< HEAD

        <div className='text-xs opacity-70 text-right mt-1'>          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  );
=======
<<<<<<< HEAD

        <div className='text-xs opacity-70 text-right mt-1'>
=======
import { PaperclipIcon } from 'lucide-react'
import { cn } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
  message: Message,
  isUserMessage: boolean
}

export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (
    <div className = {cn(
      "flex",
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className = {cn(
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{message.content}</div>
        
        {message.attachment_url && (
          <a 
            href={message.attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />
            {message.attachment_name || 'Attachment'}
          </a>
        )}
        
        <div className="text-xs opacity-70 text-right mt-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        <div className="text-xs opacity-70 text-right mt-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
