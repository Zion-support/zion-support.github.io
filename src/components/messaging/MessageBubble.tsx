<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { PaperclipIcon } from 'lucide-react'
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import { format  } from 'date-fns';
import React from 'react'
import { format } from 'date-fns'
import { PaperclipIcon } from 'lucide-react'
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
<<<<<<< HEAD


interface MessageBubbleProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
interface MessageBubbleProps {
  message: Message
  isUserMessage: boolean
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
            className='flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30'          >
            <PaperclipIcon className='h-3 w-3 mr-1' aria-hidden='true' />
            {message.attachment_name || 'Attachment'}
          </a>
        )}

        <div className='text-xs opacity-70 text-right mt-1'>          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  )
        <div className="text-xs opacity-70 text-right mt-1">
interface MessageBubbleProps {
  message: Message,
  isUserMessage: boolean
}

export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (
    <div className={cn(
      "flex"
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[75%] rounded-lg px-4 py-2"
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react';
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  message: Message
  isUserMessage: boolean
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
<<<<<<< HEAD
<<<<<<< HEAD

        isUserMessage 
=======
>>>>>>> 
  message: Message
  isUserMessage: boolean
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

import { format } from 'date-fns';
import { PaperclipIcon } from 'lucide-react'
import { cn } from '@/lib/utils';
import { Message } from '@/types/messaging';

=======
            className='flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30'          >
            <PaperclipIcon className='h-3 w-3 mr-1' aria-hidden='true' />
            {message.attachment_name |'Attachment'}
          </a>
        )}
        <div className='text-xs opacity-70 text-right mt-1'>          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  )
        <div className="text-xs opacity-70 text-right mt-1">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface MessageBubbleProps {
  message: Message

  isUserMessage: boolean
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (

    <div className={cn(
      "flex"
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[75%] rounded-lg px-4 py-2"
        isUserMessage
          ? "bg-zion-purple text-white"

          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{message.content}</div>
        {message.attachment_url && (
          <a
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>         isUserMessage 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className={cn(
      "flex",
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          ? "bg-zion-purple text-white" 
          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{message.content}</div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        {message.attachment_url && (
          <a 

=======
        {message.attachment_url && (
          <a 
>>>>>>>             href={message.attachment_url}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        {message.attachment_url && (
          <a 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            href={message.attachment_url}
>>>>>>>             target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        )}
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}

=======
            {message.attachment_name |'Attachment'}
          </a>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {message.attachment_name |'Attachment'}
          </a>
            {message.attachment_name || 'Attachment'}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </a>
        )}
        
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')};
        </div>;
      </div>;
    </div>;
  );  )
}

}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
          </Link>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          </Link>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        )}
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  );  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {message.attachment_name || 'Attachment'}
          </Link>
        )}
        
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </div>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
