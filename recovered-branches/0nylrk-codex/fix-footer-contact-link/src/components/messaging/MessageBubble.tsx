
<<<<<<< HEAD

import React from 'react';
import { format  } from 'date-fns';
import { PaperclipIcon  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
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











}

  message: Message

  isUserMessage: boolean
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (



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

          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{message.content}</div>
        {message.attachment_url && (
          <a
=======
import React from 'react';
import { format } from 'date-fns';
import { PaperclipIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Message } from '@/types/messaging';

interface MessageBubbleProps {
  message: Message;
  isUserMessage: boolean;
}

export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (
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
>>>>>>> origin/auto/autonomy-17186719616
            href={message.attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >
            <PaperclipIcon className="h-3 w-3 mr-1" />
<<<<<<< HEAD

            {message.attachment_name |'Attachment'}
          </a>
        )}
            {message.attachment_name || 'Attachment'}
          </a>
        )}
            {message.attachment_name || 'Attachment'}
          </Link>
        )}
        

=======
            {message.attachment_name || 'Attachment'}
          </a>
        )}
        
>>>>>>> origin/auto/autonomy-17186719616
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}

import {format} from 'date-fns';
import {PaperclipIcon} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Message} from '@/types/messaging';
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
}




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
  );
}
>>>>>>> origin/auto/autonomy-17186719616
