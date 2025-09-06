import React from 'react';

interface VideoCallProps {
  className?: string;
}

const VideoCall: React.FC<VideoCallProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>VideoCall</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default VideoCall;