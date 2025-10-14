import React from 'react';

interface 404Props {
  className?: string;
}

const 404: React.FC<404Props> = ({ className = '' }) => {
  return (
    <div className={`404-container ${className}`}>
      <h1>404</h1>
      <p>This is the 404 component.</p>
    </div>
  );
};

export default 404;
