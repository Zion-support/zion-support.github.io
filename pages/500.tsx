import React from 'react';

interface ServerErrorProps {
  className?: string;
}

const ServerError: React.FC<ServerErrorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServerError</h1>
      <p>An internal server error occurred.</p>
    </div>
  );
};

export default ServerError;