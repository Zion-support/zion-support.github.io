import React from 'react';

interface LeadershipProps {
  className?: string;
}

const Leadership: React.FC<LeadershipProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Leadership</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Leadership;