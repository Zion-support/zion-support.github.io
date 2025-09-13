import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        message.role === 'user' 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 text-gray-800'
      }`}>
        <p className="text-sm">{message.content}</p>
        <p className="text-xs opacity-70 mt-1">
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};