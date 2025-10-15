import React from 'react';

interface ChatPageProps {
  className?: string;
  children?: React.ReactNode;
}

const ChatPage: React.FC<ChatPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`chatpage ${className}`}>
      {children}
    </div>
  );
};

export default ChatPage;