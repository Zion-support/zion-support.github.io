import React from "react";

interface ChatMessageProps {
  message: string;
  role?: 'user' | 'assistant';
  isUser?: boolean;
  timestamp?: Date;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, role, isUser, timestamp }) => {
  const isUserMessage = isUser !== undefined ? isUser : role === 'user';
  return (
    <div className={`flex ${isUserMessage ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isUserMessage 
          ? "bg-blue-500 text-white" 
          : "bg-gray-200 text-gray-800"
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
