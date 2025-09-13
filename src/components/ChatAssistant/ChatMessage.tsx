import React from 'react';

interface ChatMessageProps {
  message: string;
  role?: 'user' | 'assistant';
  isUser?: boolean;
  timestamp?: Date;
  className?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  role,
  isUser = false,
  timestamp,
  className = ''
}) => {
  const isUserMessage = isUser || role === 'user';
  return (
    <div className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} mb-4 ${className}`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isUserMessage 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-muted text-muted-foreground'
      }`}>
        <p className="text-sm">{message}</p>
        {timestamp && (
          <p className="text-xs opacity-70 mt-1">
            {timestamp.toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
};