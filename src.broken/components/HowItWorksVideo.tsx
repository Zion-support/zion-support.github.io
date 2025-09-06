import React from 'react';

interface HowItWorksVideoProps {
  className?: string;
}

const HowItWorksVideo: React.FC<HowItWorksVideoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HowItWorksVideo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HowItWorksVideo;