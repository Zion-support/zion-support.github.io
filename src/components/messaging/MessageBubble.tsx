import React from 'react';
<<<<<<< HEAD
import { format  } from 'date-fns';
import { PaperclipIcon } from 'lucide-react'
import { cn  } from '@/lib/utils';
=======
import { format } from 'date-fns';
import { PaperclipIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
<<<<<<< HEAD
  message: Message;
<<<<<<< HEAD
=======
  message: Message
  isUserMessage: boolean
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
=======
  isUserMessage: boolean;
}

export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    >
      <div
        className={cn(
          'max-w-[75%] rounded-lg px-4 py-2'
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
            className='flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30'          >
            <PaperclipIcon className='h-3 w-3 mr-1' aria-hidden='true' />
            {message.attachment_name |'Attachment'}
          </a>
        )}
<<<<<<< HEAD
        <div className='text-xs opacity-70 text-right mt-1'>          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  )
        <div className="text-xs opacity-70 text-right mt-1">
interface MessageBubbleProps {
  message: Message
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  isUserMessage: boolean
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (
<<<<<<< HEAD
    <div className;
        isUserMessage 
          ? "bg-zion-purple text-white" 
=======
    <div className={cn(
      "flex"
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[75%] rounded-lg px-4 py-2"
        isUserMessage
          ? "bg-zion-purple text-white"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
            {message.attachment_name |'Attachment'}
          </a>
        )}
        <div className="text-xs opacity-70 text-right mt-1">
=======

        <div className='text-xs opacity-70 text-right mt-1'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
