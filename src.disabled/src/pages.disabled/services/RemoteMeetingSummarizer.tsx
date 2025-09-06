import React from 'react';

interface RemoteMeetingSummarizerProps {
  className?: string;
}

const RemoteMeetingSummarizer: React.FC<RemoteMeetingSummarizerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RemoteMeetingSummarizer</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RemoteMeetingSummarizer;