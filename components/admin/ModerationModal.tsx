import React from 'react';

interface ModerationModalProps {
  className?: string;
}

const ModerationModal: React.FC<ModerationModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ModerationModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ModerationModal;