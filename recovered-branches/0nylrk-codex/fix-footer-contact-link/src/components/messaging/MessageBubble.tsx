
message: Message,


import React from 'react';
import { format  } from 'date-fns';
import { PaperclipIcon  } from 'lucide-react';
import { cn  } from '@/lib/utils';
import { Message } from '@/types/messaging';
interface MessageBubbleProps {


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



        <div className="text-xs opacity-70 text-right mt-1">


          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  )


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


