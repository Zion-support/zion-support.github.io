import React from 'react';

interface Services-brokenProps {
  className?: string;
}

const Services-broken: React.FC<Services-brokenProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Services-broken</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Services-broken;