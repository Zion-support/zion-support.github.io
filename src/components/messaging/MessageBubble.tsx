import React from 'react';
import { format } from 'date-fns';
import { PaperclipIcon } from 'lucide-react'
import { cn } from '@/lib/utils';
import { Message } from '@/types/messaging';

interface MessageBubbleProps {
  message: Message;
  isUserMessage: boolean;
}

export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (
    <div className={cn(
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
        
        {message.attachment_url && (
          <a 
            href={message.attachment_url}
            target=&quot;_blank&quot;
            rel=&quot;noopener noreferrer&quot;
            className=&quot;flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30&quot;
          >
            <PaperclipIcon className=&quot;h-3 w-3 mr-1&quot; aria-hidden=&quot;true&quot; />
            {message.attachment_name || 'Attachment'}
          </Link>
        )}
        
        <div className=&quot;text-xs opacity-70 text-right mt-1&quot;>
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  );
}
