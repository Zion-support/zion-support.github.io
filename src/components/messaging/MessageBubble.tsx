<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { format } from 'date-fns';
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
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  message: Message
  isUserMessage: boolean
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  
    >
      <div
        className={cn(
          'max-w-[75%] rounded-lg px-4 py-2',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

        isUserMessage 

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

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        isUserMessage 
          ? "bg-zion-purple text-white" 
          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{message.content}</div>
            href={message.attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />
        )}
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

            {message.attachment_name || 'Attachment'}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
