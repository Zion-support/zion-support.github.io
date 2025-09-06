import React from 'react';

interface SimpleFooterProps {
  className?: string;
}

const SimpleFooter: React.FC<SimpleFooterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimpleFooter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimpleFooter;