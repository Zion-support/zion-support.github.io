<<<<<<< HEAD
import React from 'react',
import { format } from 'date-fns',
import { PaperclipIcon } from 'lucide-react'
import { cn } from '@/lib/utils',
import { Message } from '@/types/messaging',
interface MessageBubbleProps {
  message: Message,
  isUserMessage: boolean
}
=======
import React from 'react';

interface MessageBubbleProps {_message: Message;
  isUserMessage: boolean;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function MessageBubble(_{_message, _isUserMessage}: MessageBubbleProps) {_return (
    <div className={cn(
<<<<<<< HEAD
      &quot;flex&quot;,
      isUserMessage ? &quot;justify-end&quot; : &quot;justify-start&quot;
    )}>
      <div className={cn(
        &quot;max-w-[75%] rounded-lg px-4 py-2&quot;,
        isUserMessage 
          ? &quot;bg-zion-purple text-white&quot; 
          : &quot;bg-zion-blue-dark text-white&quot;
      )}>
        <div className=&quot;whitespace-pre-wrap&quot;>{message.content}</div>
=======
      "flex", _isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={_cn(
        "max-w-[75%] rounded-lg px-4 py-2", _isUserMessage 
          ? "bg-zion-purple text-white" 
          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{_message.content}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        {_message.attachment_url && (
          <a 
            href={message.attachment_url}
            target=&quot;_blank&quot;
            rel=&quot;noopener noreferrer&quot;
            className=&quot;flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30&quot;
          >
<<<<<<< HEAD
            <PaperclipIcon className=&quot;h-3 w-3 mr-1&quot; aria-hidden=&quot;true&quot; />
            {message.attachment_name || 'Attachment'}
          </Link>
        )}
        
        <div className=&quot;text-xs opacity-70 text-right mt-1&quot;>
          {format(new Date(message.created_at), 'h:mm a')}
=======
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />
            {_message.attachment_name || 'Attachment'}
          </a>
        )}
        
        <div className="text-xs opacity-70 text-right mt-1">
          {_format(new Date(message.created_at), _'h:mm a')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>
    </div>
  )
}
