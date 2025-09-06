import React from 'react';

interface Request-to-hireProps {
  className?: string;
}

const Request-to-hire: React.FC<Request-to-hireProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Request-to-hire</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Request-to-hire;