
<<<<<<< HEAD
import React from 'react';
import { format  } from 'date-fns';
import { PaperclipIcon  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {
  message: Message,
  isUserMessage: boolean
=======
import React from 'react',;
import { format } from 'date-fns',;
import { PaperclipIcon } from 'lucide-react',;
import { cn } from '@/lib/utils',;
import { Message } from '@/types/messaging',;
interface MessageBubbleProps {;
  message: Message,;
  isUserMessage: boolean;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  message: Message

  isUserMessage: boolean
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {
  return (
<<<<<<< HEAD
    <div className={cn(;
      "flex";
=======
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

=======
        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
            {message.attachment_name |'Attachment'}
          </a>
        )}
=======
            {message.attachment_name || 'Attachment'}
          </Link>
        )}
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <div className="text-xs opacity-70 text-right mt-1">
          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  )
}