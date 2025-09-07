  message: Message
  isUserMessage: boolean
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {

    >
      <div
        className={cn(
          'max-w-[75%] rounded-lg px-4 py-2',
          isUserMessage
            ? 'bg-zion-purple text-white'
            : 'bg-zion-blue-dark text-white'
        )}
        <div className='whitespace-pre-wrap'>{message.content}</div>
        {message.attachment_url && (
          <a
            href={message.attachment_url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30'          >
            <PaperclipIcon className='h-3 w-3 mr-1' aria-hidden='true' />
            {message.attachment_name || 'Attachment'}
          </a>

        <div className='text-xs opacity-70 text-right mt-1'>          {format(new Date(message.created_at), 'h:mm a')}
        </div>
  )
        <div className="text-xs opacity-70 text-right mt-1">
interface MessageBubbleProps {
  message: Message,
}

  return (
    <div className={cn(
      "flex"
      isUserMessage ? "justify-end" : "justify-start"
    )}>
        "max-w-[75%] rounded-lg px-4 py-2"

import { PaperclipIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: string;
  attachments?: Array<{
    name: string;
    url: string;
    type: string;
  }>;

        </div>;
  );

export function MessageBubble(): any ({ message, isUserMessage }: MessageBubbleProps) {;
    <divclassName={cn(
    )}>;
          ? "bg-zion-purple text-white" 
          : "bg-zion-blue-dark text-white"
        <div className="whitespace-pre-wrap">{message && message.content}</div>;

        {message && message.attachment_url && (;
            href={message && message.attachment_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 p-2 bg-black/20 rounded text-xs hover:bg-black/30">;
            <PaperclipIcon className="h-3 w-3 mr-1" aria-hidden="true" />;
            {message && message.attachment_name || 'Attachment'}
          </a>;

        <div className="text-xs opacity-70 text-right mt-1">;
          {format(new Date(message && message.created_at), 'h:mm a')}
  );  );

import { format } from 'date - fns';
import { cn } from '@/lib / utils';
import { Message } from '@/types / messaging';

  message: Message;
  isUserMessage: boolean;

        'flex w-full mb-4',
        isUserMessage ? 'justify-end' : 'justify-start'
          'max-w-xs lg:max-w-md px-4 py-2 rounded-lg',
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-900'
        <div className="text-sm">{message.content}</div>

        {message.attachments && message.attachments.length > 0 && (
          <div className="mt-2 space-y-1">
            {message.attachments.map((attachment) => (
                key={attachment.id}
                className="flex items-center space-x-2 text-xs opacity-80"
                <PaperclipIcon className="h-3 w-3" />
                  href={attachment.url}
                  className="hover:underline"
                  {attachment.name}
            ))}

            'text-xs mt-1',
            isUserMessage ? 'text-blue-100' : 'text-gray-500'
          {format(new Date(message.timestamp), 'HH:mm')}