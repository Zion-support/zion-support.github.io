import React from 'react';

interface StartupsProps {
  className?: string;
}

const Startups: React.FC<StartupsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Startups</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Startups;