import React from 'react';

interface ErrorProps {
  className?: string;
}

const Error: React.FC<ErrorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Error</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Error;