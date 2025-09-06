import React from 'react';

interface InstantMessagingProps {
  className?: string;
}

const InstantMessaging: React.FC<InstantMessagingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InstantMessaging</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InstantMessaging;