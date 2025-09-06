import React from 'react';

interface MobileChatViewProps {
  className?: string;
}

const MobileChatView: React.FC<MobileChatViewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileChatView</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileChatView;