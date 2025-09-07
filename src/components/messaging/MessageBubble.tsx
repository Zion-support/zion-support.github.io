<<<<<<< HEAD
=======
  message: Message
  isUserMessage: boolean
import React from 'react';
import { format } from 'date-fns';
import { PaperclipIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Message } from '@/types/messaging';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

;
  message: Message;
  isUserMessage: boolean;
<<<<<<< HEAD
import React from 'react';
import { format  } from 'date-fns';
import { PaperclipIcon  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { Message  } from '@/types/messaging';
interface MessageBubbleProps  {message: Message;
  isUserMessage: boolean;
}export function MessageBubble() {return (<div;
      className={cn('flex',isUserMessage ? 'justify-end' : 'justify-start';
=======
}

export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        'flex',
        isUserMessage ? 'justify-end' : 'justify-start'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      )}
    >;
      <div;
        className={cn('max-w-[75%] rounded-lg px-4 py-2',isUserMessage;
            ? 'bg-zion-purple text-white';
            : 'bg-zion-blue-dark text-white';
        )}
<<<<<<< HEAD
      >;
interface MessageBubbleProps  {<div className='text-xs opacity-70 text-right mt-1'>;
  isUserMessage: boolean;
}
export function MessageBubble() {return (<div className;
        isUserMessage;
          ? "bg-zion-purple text-white";
          : "bg-zion-blue-dark text-white";
      )}>;
        <div className="whitespace-pre-wrap">{message.content}</div>;
        {message.attachment_url && (<a;
=======
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
        
        {message.attachment_url && (
          <a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
            href={message.attachment_url}
            target="_blank";
            rel="noopener noreferrer";
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30";
          >;
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />;
            {message.attachment_name || 'Attachment'}
<<<<<<< HEAD
          </a>;
        )}<div className="text-xs opacity-70 text-right mt-1">;
          {format(new Date(message.created_at), 'h:mm a')}</div>;
=======
          </a>
        )}

        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
        </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      </div>;
    </div>;
  )}export function MessageBubble(): any ({ message, isUserMessage }: MessageBubbleProps) {return (<divclassName={cn("flex";
      isUserMessage ? "justify-end" : "justify-start";
    )}>;
      <divclassName={cn("max-w-[75%] rounded-lg px-4 py-2";
        isUserMessage;
          ? "bg-zion-purple text-white";
          : "bg-zion-blue-dark text-white";
      )}>;
        <div className="whitespace-pre-wrap">{message && message.content}</div>;{message && message.attachment_url && (<a;
            href={message && message.attachment_url}
            target="_blank";
            rel="noopener noreferrer";
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30">;
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />;
            {message && message.attachment_name || 'Attachment'}
          </a>;
        )}<div className="text-xs opacity-70 text-right mt-1">;
          {format(new Date(message && message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>;
  ))})}
import { format  } from 'date - fns';
import { cn  } from '@/lib / utils';
import { Message  } from '@/types / messaging';
interface MessageBubbleProps  {message: Message;
  isUserMessage: boolean;
export /**;
 * MessageBubble - Function description;
 */;
function MessageBubble() {>;
      <div;
        className={cn ('max - w-[75%] rounded - lg px - 4 py - 2',isUserMessage;
            ? 'bg - zion - purple text - white';
            : 'bg - zion - blue - dark text - white')}
      >;
        <div className='whitespace - pre - wrap'>{message.content}</div>;
        {message.attachment_url && (<a;
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
    </div>)<div className="text - xs opacity - 70 text - right mt - 1">;
interface MessageBubbleProps  {message: Message,isUserMessage: boolean;
}
export /**;
 * MessageBubble - Function description;
 */;
function MessageBubble() {return (<div className={cn ("flex";
      isUserMessage ? "justify - end" : "justify - start")}>;
      <div className={cn ("max - w-[75%] rounded - lg px - 4 py - 2";
        isUserMessage;
          ? "bg - zion - purple text - white";
          : "bg - zion - blue - dark text - white")}>;
        <div className="whitespace - pre - wrap">{message.content}</div>;
        {message.attachment_url && (<a;
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
<<<<<<< HEAD
    </div>))}</div>;
      </div>;
    </div>;
  )})
=======
    </div>));
}

);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
