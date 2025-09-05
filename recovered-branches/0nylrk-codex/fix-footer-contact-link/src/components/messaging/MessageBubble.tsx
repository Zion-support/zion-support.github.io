
import React from 'react';

interface MessageBubbleProps {_message: Message;
  isUserMessage: boolean;}

export function MessageBubble(_{_message, _isUserMessage}: MessageBubbleProps) {_return (
    <div className={cn(
      "flex", _isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={_cn(
        "max-w-[75%] rounded-lg px-4 py-2", _isUserMessage 
          ? "bg-zion-purple text-white" 
          : "bg-zion-blue-dark text-white"
      )}>
        <div className="whitespace-pre-wrap">{_message.content}</div>
        
        {_message.attachment_url && (
          <a 
            href={message.attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30"
          >
            <PaperclipIcon className="h-3 w-3 mr-1" />
            {_message.attachment_name || 'Attachment'}
          </a>
        )}
        
        <div className="text-xs opacity-70 text-right mt-1">
          {_format(new Date(message.created_at), _'h:mm a')}
        </div>
      </div>
    </div>
  );
}
