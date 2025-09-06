import React from 'react';

interface Future-of-workProps {
  className?: string;
}

const Future-of-work: React.FC<Future-of-workProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Future-of-work</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Future-of-work;