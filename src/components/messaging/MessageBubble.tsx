import React from 'react';
import { format } from 'date-fns';
import { PaperclipIcon } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
  isUserMessage: boolean;

export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {

    >
      <div
        className={cn(
          'max-w-[75%] rounded-lg px-4 py-2',
          isUserMessage
            ? 'bg-zion-purple text-white'
            : 'bg-zion-blue-dark text-white'
        )}
      >
        <div className='whitespace-pre-wrap'>{message.content}</div>

        {message.attachment_url && (

          >
            <PaperclipIcon className='h-3 w-3 mr-1' aria-hidden='true' />
            {message.attachment_name || 'Attachment'}
          </a>
        )}

        <div className='text-xs opacity-70 text-right mt-1'>          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>
  );

          {format(new Date(message.created_at), 'h:mm a')}
        </div>
      </div>
    </div>