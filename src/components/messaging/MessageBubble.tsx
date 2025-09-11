<<<<<<< HEAD
<<<<<<< HEAD
import { Message } from '@/types/messaging';
interface MessageBubbleProps {

import React from 'react';
import { format  } from 'date-fns';
import React from 'react'
import { format } from 'date-fns'
import { PaperclipIcon } from 'lucide-react'
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
=======
import { Message } from '@/types/messaging';


interface MessageBubbleProps {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react';
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;


interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
}

  message: Message
  isUserMessage: boolean
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
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
            href={message.attachment_url}
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        isUserMessage 
          ? "bg-zion-purple text-white" 
          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{message.content}</div>
<<<<<<< HEAD
        {message.attachment_url && (
          <a 
        
        {message.attachment_url && (
          <a 
            href={message.attachment_url}
=======

        

        {message.attachment_url && (
          <a 
            href={message.attachment_url}
            target="_blank"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />
<<<<<<< HEAD
            {message.attachment_name |'Attachment'}
          </a>
            {message.attachment_name |'Attachment'}
          </a>
            {message.attachment_name || 'Attachment'}
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
          </Link>
          </Link>
        )}
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  );  )
}
            {message.attachment_name || 'Attachment'}
          </Link>
        )}
        
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
=======

            className='flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30'>;
            <PaperclipIcon className='h-3 w-3 mr-1' aria-hidden='true' />;
            {message && message.attachment_name || 'Attachment'}
          </a>;
        )}

        <div className='text-xs opacity-70 text-right mt-1'>          {format(new Date(message && message.created_at), 'h:mm a')}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
;
ursor/fix-website-loading-errors-and-merge-6662
  )
}
import { format } from 'date - fns';
=======
import React from 'react';
import { format } from 'date-fns';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { PaperclipIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: string;
  attachments?: Array<{
    id: string;
    name: string;
    url: string;
    type: string;
  }>;
}

interface MessageBubbleProps {
  message: Message;
  isUserMessage: boolean;
}

<<<<<<< HEAD
            {message.attachment_name || 'Attachment'}
=======
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        'flex w-full mb-4',
        isUserMessage ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'max-w-xs lg:max-w-md px-4 py-2 rounded-lg',
          isUserMessage
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-900'
        )}
      >
        <div className="text-sm">{message.content}</div>
        
        {message.attachments && message.attachments.length > 0 && (
          <div className="mt-2 space-y-1">
            {message.attachments.map((attachment) => (
              <div
                key={attachment.id}
                className="flex items-center space-x-2 text-xs opacity-80"
              >
                <PaperclipIcon className="h-3 w-3" />
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {attachment.name}
                </a>
              </div>
            ))}
          </div>
        )}
        
        <div
          className={cn(
            'text-xs mt-1',
            isUserMessage ? 'text-blue-100' : 'text-gray-500'
          )}
        >
          {format(new Date(message.timestamp), 'HH:mm')}
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export function MessageBubble(): any ({ message, isUserMessage }: MessageBubbleProps) {;
  return (
    <divclassName={cn(
      "flex"
      isUserMessage ? "justify-end" : "justify-start"
    )}>;
      <divclassName={cn(
        "max-w-[75%] rounded-lg px-4 py-2"
        isUserMessage 
          ? "bg-zion-purple text-white" 
          : "bg-zion-blue-dark text-white"
      )}>;
        <div className="whitespace-pre-wrap">{message && message.content}</div>;

        {message && message.attachment_url && (;
          <a
            href={message && message.attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30">;
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />;
            {message && message.attachment_name || 'Attachment'}
          </a>;
        )}

        <div className="text-xs opacity-70 text-right mt-1">;
          {format(new Date(message && message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>;
  );  );
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

            {message.attachment_name || 'Attachment'}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
