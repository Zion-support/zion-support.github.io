import React from 'react';

interface WikiProps {
  className?: string;
}

const Wiki: React.FC<WikiProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Wiki</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Wiki;