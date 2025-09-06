<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageBubble.tsx


<<<<<<< HEAD
=======

  message: Message,
  isUserMessage: boolean

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
import React from 'react';
import { format  } from 'date-fns';
import { PaperclipIcon  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
<<<<<<< HEAD
=======
  message: Message,
  isUserMessage: boolean
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react',;
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
<<<<<<< HEAD

<<<<<<< HEAD
}
=======


}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  message: Message

  isUserMessage: boolean
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (
<<<<<<< HEAD

<<<<<<< HEAD
    <div className={cn(
      "flex",
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
    <div className={cn(;
      "flex";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <div className={cn(
      "flex",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
<<<<<<< HEAD
        "max-w-[75%] rounded-lg px-4 py-2";
        isUserMessage
          ? "bg-zion-purple text-white"

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            <PaperclipIcon className="h-3 w-3 mr-1" />
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
            {message.attachment_name |'Attachment'}
          </a>
        )}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {message.attachment_name || 'Attachment'}
          </Link>
        )}
        
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
========
<<<<<<< HEAD
import React from 'react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/messaging/MessageBubble.tsx
import {format} from 'date-fns';
import {PaperclipIcon} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Message} from '@/types/messaging';
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
}
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
            <PaperclipIcon className="h-3 w-3 mr-1" />;
            {message && message.attachment_name || 'Attachment'}
          </a>;
        )}
        <div className="text-xs opacity-70 text-right mt-1">;
          {format(new Date(message && message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>;
  );
}
import {format} from 'date - fns';
import {PaperclipIcon} from 'lucide-react';
import {cn} from '@/lib / utils';
import {Message} from '@/types / messaging';
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
            <PaperclipIcon className="h - 3 w - 3 mr - 1" />;
            {message.attachment_name || 'Attachment'}
          </a>)}
        <div className="text - xs opacity - 70 text - right mt - 1">;
          {format (new Date (message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>);
}
=======

import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react',;
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;
;
interface MessageBubbleProps {;
  message:Message,;
  isUserMessage:boolean;
}
;
export function MessageBubble({ message, isUserMessage } MessageBubbleProps) {;
  return (;
    <div className={cn(;
      "flex",;
      isUserMessage ? "justify-end" :"justify-start";
    )}>;
      <div className={cn(;
        "max-w-[75%] rounded-lg px-4 py-2",;
        isUserMessage ;
          ? "bg-zion-purple text-white" ;
          :"bg-zion-blue-dark text-white";
      )}>;
        <div className="whitespace-pre-wrap">{message.content}</div>;
        ;
        {message.attachment_url && (;
          <a ;
            href={message.attachment_url}
            target="_blank";
            rel="noopener noreferrer";
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30";
          >;
            <PaperclipIcon className="h-3 w-3 mr-1" />;
            {message.attachment_name || 'Attachment'}
          </a>;
        )}
        ;
        <div className="text-xs opacity-70 text-right mt-1">;
          {format(new Date(message.created_at), 'h:mm a')}
        </div>;
      </div>;
    </div>;
  ),;}
 export function MessageBubble ({
  message, isUserMessage 
}: MessageBubbleProps) {
  return (<div className= {
  cn ({
  message.attachment url && (<a href= {
  message.attachment url 
}target="blank" rel="noopener noreferrer" className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30" > </div> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
