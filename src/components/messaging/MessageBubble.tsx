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

export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
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
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
