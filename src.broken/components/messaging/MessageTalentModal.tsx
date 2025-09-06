import React from 'react';

interface MessageTalentModalProps {
  className?: string;
}

const MessageTalentModal: React.FC<MessageTalentModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MessageTalentModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MessageTalentModal;