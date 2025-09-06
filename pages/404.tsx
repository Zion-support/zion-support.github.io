import React from 'react';

interface NotFoundProps {
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotFound</h1>
      <p>This page could not be found.</p>
    </div>
  );
};

export default NotFound;