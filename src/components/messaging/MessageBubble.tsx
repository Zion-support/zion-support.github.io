<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react';
<<<<<<< HEAD
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;
interface MessageBubbleProps {;
  message: Message,;
=======
import { cn } from '@/lib/utils';
import { Message } from '@/types/messaging';

interface MessageBubbleProps {
  message: Message;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  isUserMessage: boolean;
}

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
=======
  message: Message
  isUserMessage: booleanexport function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
<<<<<<< HEAD
    <div className={cn(
      "flex",
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{message.content}</div>
        
        {message.attachment_url && (
          <a 
=======
    <div
      className={cn(
        'flex',
        isUserMessage ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'max-w-[75%] rounded-lg px-4 py-2',
          isUserMessage
            ? 'bg-zion-purple text-white'
            : 'bg-zion-blue-dark text-white'
        )}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
        
        {message.attachment_url && (
          <a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            href={message.attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />
            {message.attachment_name || 'Attachment'}
<<<<<<< HEAD
          </Link>
        )}
        
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
<<<<<<< HEAD
        </div>;
      </div>;
    </div>;
  );
}
;
=======
          </a>
        )}

        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
        <div className="text - xs opacity - 70 text - right mt-1">;
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
        <div className="whitespace - pre-wrap">{message.content}</div>;
        {message.attachment_url && (
          <a;
            href={message.attachment_url}
            target="_blank";
            rel="noopener noreferrer";
            className="flex items - center mt - 2 p - 2 bg - black / 20 rounded text - xs hover:bg-black / 30";
          >;
            <PaperclipIcon className="h - 3 w - 3 mr-1" aria - hidden="true" />;
            {message.attachment_name || 'Attachment'}
          </a>)}
        <div className="text - xs opacity - 70 text - right mt-1">;
          {format (new Date (message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>));
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
