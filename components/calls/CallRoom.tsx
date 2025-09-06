import React from 'react';

interface CallRoomProps {
  className?: string;
}

const CallRoom: React.FC<CallRoomProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CallRoom</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CallRoom;