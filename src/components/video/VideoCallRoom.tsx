import React from 'react';

interface VideoCallRoomProps {
  className?: string;
}

const VideoCallRoom: React.FC<VideoCallRoomProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>VideoCallRoom</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default VideoCallRoom;