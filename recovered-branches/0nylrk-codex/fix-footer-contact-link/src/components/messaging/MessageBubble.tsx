
<<<<<<< HEAD
<<<<<<< HEAD
  message: Message,
  isUserMessage: boolean


import React from 'react';
import { format  } from 'date-fns';
import { PaperclipIcon  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
  message: Message,
  isUserMessage: boolean
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  message: Message,
  isUserMessage: boolean

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  message: Message

  isUserMessage: boolean
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (



      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
    <div className={cn(;
      "flex";
    <div className={cn(
      "flex",
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "max-w-[75%] rounded-lg px-4 py-2";
        isUserMessage
          ? "bg-zion-purple text-white"

        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
<<<<<<< HEAD
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
=======
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            {message.attachment_name |'Attachment'}
          </a>
        )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            {message.attachment_name |'Attachment'}
          </a>
        )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {message.attachment_name || 'Attachment'}
          </Link>
        )}
        
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react',;
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
=======
import {format} from 'date-fns';
import {PaperclipIcon} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Message} from '@/types/messaging';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
