import React from 'react';

interface WebVitalsProps {
  className?: string;
}

const WebVitals: React.FC<WebVitalsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WebVitals</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WebVitals;