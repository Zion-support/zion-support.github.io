import React from 'react';

interface NotFoundProps {
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ className = '' }) => {
  return (
    <div className={`404-container ${className}`}>
      <h1>404</h1>
      <p>This is the 404 component.</p>
    </div>
  );
};

export default NotFound;
