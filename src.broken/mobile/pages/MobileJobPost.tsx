import React from 'react';

interface MobileJobPostProps {
  className?: string;
}

const MobileJobPost: React.FC<MobileJobPostProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileJobPost</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileJobPost;