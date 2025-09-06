import React from 'react';

interface NewProps {
  className?: string;
}

const New: React.FC<NewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>New</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default New;