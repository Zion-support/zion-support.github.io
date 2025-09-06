<<<<<<< HEAD
import React from 'react';
import { format } from 'date-fns';
import { PaperclipIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format  } from 'date-fns';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { format  } from 'date-fns';
=======
import React from 'react'
import { format } from 'date-fns'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { PaperclipIcon } from 'lucide-react'
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
<<<<<<< HEAD
=======
  message: Message
  isUserMessage: boolean
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
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
            href={message && message.attachment_url}
            target='_blank'
            rel='noopener noreferrer'
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
interface MessageBubbleProps {
<<<<<<< HEAD
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react';
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035


=======
interface MessageBubbleProps {;
  message: Message;
  isUserMessage: boolean;


        )}>;
        <div className='whitespace-pre-wrap'>{message && message.content}</div>;

        {message && message.attachment_url && (;

          <a
            href={message && message.attachment_url}
            target='_blank'
            rel='noopener noreferrer'

import { format } from 'date-fns';
import { PaperclipIcon } from 'lucide-react'
import { cn } from '@/lib/utils';
import { Message } from '@/types/messaging';

interface MessageBubbleProps {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
=======
  message: Message
  isUserMessage: boolean
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {

  return (
    <div className={cn(
      "flex",
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[75%] rounded-lg px-4 py-2",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        isUserMessage 
          ? "bg-zion-purple text-white" 
          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{message.content}</div>

        

        {message.attachment_url && (
          <a 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            href={message.attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />
<<<<<<< HEAD
            {message.attachment_name |'Attachment'}
          </a>
        )}
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
=======
<<<<<<< HEAD
<<<<<<< HEAD
            {message.attachment_name |'Attachment'}
          </a>
=======
            {message.attachment_name || 'Attachment'}
<<<<<<< HEAD
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
=======
          </Link>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        )}
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        </div>
      </div>
    </div>
  );  )
<<<<<<< HEAD
}
  )
}
import { format } from 'date - fns';
import { PaperclipIcon } from 'lucide-react';
import { cn } from '@/lib / utils';
import { Message } from '@/types / messaging';
interface MessageBubbleProps {
  message: Message;
  isUserMessage: boolean;
export /**
 * MessageBubble - Function description
 */
function MessageBubble() {
    >;
      <div;
        className={cn (
          'max - w-[75%] rounded - lg px - 4 py - 2',
          isUserMessage;
            ? 'bg - zion - purple text - white';
            : 'bg - zion - blue - dark text - white')}
      >;
        <div className='whitespace - pre - wrap'>{message.content}</div>;
        {message.attachment_url && (
          <a;
            href={message.attachment_url}
            target='_blank';
            rel='noopener noreferrer';
            className='flex items - center mt - 2 p - 2 bg - black / 20 rounded text - xs hover:bg - black / 30'          >;
            <PaperclipIcon className='h - 3 w - 3 mr - 1' aria - hidden='true' />;
            {message.attachment_name || 'Attachment'}
          </a>)}
        <div className='text - xs opacity - 70 text - right mt - 1'>          {format (new Date (message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>);
        <div className="text - xs opacity - 70 text - right mt - 1">;
interface MessageBubbleProps {
  message: Message,
  isUserMessage: boolean;
}
export /**
 * MessageBubble - Function description
 */
function MessageBubble() {
  return (
    <div className={cn (
      "flex";
      isUserMessage ? "justify - end" : "justify - start")}>;
      <div className={cn (
        "max - w-[75%] rounded - lg px - 4 py - 2";
        isUserMessage;
          ? "bg - zion - purple text - white";
          : "bg - zion - blue - dark text - white")}>;
        <div className="whitespace - pre - wrap">{message.content}</div>;
        {message.attachment_url && (
          <a;
            href={message.attachment_url}
            target="_blank";
            rel="noopener noreferrer";
            className="flex items - center mt - 2 p - 2 bg - black / 20 rounded text - xs hover:bg - black / 30";
          >;
            <PaperclipIcon className="h - 3 w - 3 mr - 1" aria - hidden="true" />;
            {message.attachment_name || 'Attachment'}
          </a>)}
        <div className="text - xs opacity - 70 text - right mt - 1">;
          {format (new Date (message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>));
}
=======
}
=======
            {message.attachment_name || 'Attachment'}
          </Link>
        )}
        
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        </div>;
      </div>;
    </div>;
  );

        <div className="text-xs opacity-70 text-right mt-1">;
import { cn } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
