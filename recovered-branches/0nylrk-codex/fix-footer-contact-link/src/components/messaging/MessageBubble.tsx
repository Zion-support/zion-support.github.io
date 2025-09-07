<<<<<<< HEAD
message: Message,

=======
<<<<<<< HEAD
=======
message: Message,

<<<<<<< HEAD
=======
<<<<<<< HEAD
  message: Message,
  isUserMessage: boolean


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
import { format  } from 'date-fns';
import { PaperclipIcon  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
<<<<<<< HEAD
  message: Message,
  isUserMessage: boolean

import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react',;
import { cn } from '@/lib/utils',;

import { Message } from '@/types/messaging',;
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;

  message: Message

  message: Message;
  isUserMessage: boolean;
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {}
  return (

    <div className={cn(
      "flex",

      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
=======
<<<<<<< HEAD
  message: Message,
  isUserMessage: boolean}

  message: Message

  isUserMessage: boolean
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (
    <div className = $2;
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className = $2;
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
            <PaperclipIcon className="h-3 w-3 mr-1" />
            {message.attachment_name |'Attachment'}
          </a>
        )}
        <div className="text-xs opacity-70 text-right mt-1">
=======
<<<<<<< HEAD
  message: Message,
  isUserMessage: boolean

=======
  message: Message,
  isUserMessage: boolean
=======


  message: Message,
  isUserMessage: boolean

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react',;
import { cn } from '@/lib/utils',;

import { Message } from '@/types/messaging',;
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
<<<<<<< HEAD


}
}
}
=======

<<<<<<< HEAD
=======


}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  message: Message

  message: Message;
  isUserMessage: boolean;
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {}
  return (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    <div className={cn(
      "flex",

      isUserMessage ? "justify-end" : "justify-start"
    )}>
<<<<<<< HEAD
=======
      <div className={cn(

<<<<<<< HEAD
    <div className={cn(
      "flex",
=======
<<<<<<< HEAD
    <div className={cn(;
      "flex";
    <div className={cn(
      "flex",
      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[75%] rounded-lg px-4 py-2";
        isUserMessage
          ? "bg-zion-purple text-white"

        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
=======
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      isUserMessage ? "justify-end" : "justify-start"
    )}>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className={cn(";
        "max-w-[75%] rounded-lg px-4 py-2";
        isUserMessage"
          ? "bg-zion-purple text-white"

<<<<<<< HEAD
"
=======
<<<<<<< HEAD
"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          : "bg-zion-blue-dark text-white"
      )}>"
        <div className="whitespace-pre-wrap">{message.content}</div>
        {message.attachment_url && (
          <a;
            href={message.attachment_url}"
            target="_blank""
            rel="noopener noreferrer""
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >"
            <PaperclipIcon className="h-3 w-3 mr-1" />
<<<<<<< HEAD
'

        <div className="text-xs opacity-70 text-right mt-1">

=======
<<<<<<< HEAD
'
=======

<<<<<<< HEAD
            {message.attachment_name |'Attachment'}
          </a>
        )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {message.attachment_name || 'Attachment'}
          </Link>
        )}
        
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="text-xs opacity-70 text-right mt-1">

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
import React from 'react';
import {format} from 'date - fns';
import {PaperclipIcon} from 'lucide-react';
import {cn} from '@/lib / utils';

import {Message} from '@/types / messaging';
interface MessageBubbleProps {}
  message: Message,
  isUserMessage: boolean;
}
export /**;
 * MessageBubble - Function description;
 */
function MessageBubble() {}
  return (
    <div className={cn ("
      "flex";"
      isUserMessage ? "justify - end" : "justify - start")}>;
      <div className={cn ("
        "max - w-[75%] rounded - lg px - 4 py - 2";
        isUserMessage;"
          ? "bg - zion - purple text - white";"
          : "bg - zion - blue - dark text - white")}>;"
        <div className="whitespace - pre - wrap">{message.content}</div>;
        {message.attachment_url && (
          <a;
            href={message.attachment_url}"
            target="_blank";"
            rel="noopener noreferrer";"
            className="flex items - center mt - 2 p - 2 bg - black / 20 rounded text - xs hover:bg - black / 30";
          >;"
            <PaperclipIcon className="h - 3 w - 3 mr - 1" />;'
            {message.attachment_name || 'Attachment'}
          </a>)}"
        <div className="text - xs opacity - 70 text - right mt - 1">;'

          {format (new Date (message.created_at), 'h:mm a')}
<<<<<<< HEAD
        </div>;
      </div>;
    </div>);
}

  message: Message,
  isUserMessage: boolean;
pr-12325
=======
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react',;
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;
;
=======
}
=======
import {format} from 'date-fns';
import {PaperclipIcon} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Message} from '@/types/messaging';
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
}
=======
}
<<<<<<< HEAD

  message: Message,
  isUserMessage: boolean;
pr-12325
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
>>>>>>> merged-prs-20250907-203621
}
=======
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
