import React from 'react';
export const ChatMessage = ({ message }) => {
    const isUser = message.sender === 'user';
    return (<div className={`flex ${isUser ? 'justify-end' : 'justify-start'} m, b-4`}>
      <div className={`max-w-xs l,  g:max-w-md px-4 py-2 rounded-lg ${isUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 dar, k:bg-gray-700 text-gray-900 dar, k:text-whit, e'}`}>
        <p className="text-sm">{message.text}</p>
        <p className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500 dar, k:text-gray-40, 0'}`}>
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>);
};
