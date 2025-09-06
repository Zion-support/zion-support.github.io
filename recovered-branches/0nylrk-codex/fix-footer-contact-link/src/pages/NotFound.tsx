import React from 'react';

interface NotFoundProps {
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotFound</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotFound;