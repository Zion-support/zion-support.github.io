import React from 'react';

interface SimpleHeaderProps {
  className?: string;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimpleHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimpleHeader;