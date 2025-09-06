import React from 'react';

interface Green-itProps {
  className?: string;
}

const Green-it: React.FC<Green-itProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Green-it</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Green-it;