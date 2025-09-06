import React from 'react';

interface Services-overviewProps {
  className?: string;
}

const Services-overview: React.FC<Services-overviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Services-overview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Services-overview;