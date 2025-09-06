import React from 'react';

interface KitProps {
  className?: string;
}

const Kit: React.FC<KitProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Kit</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Kit;