import React from 'react';

interface NotFound.testProps {
  className?: string;
}

const NotFound.test: React.FC<NotFound.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotFound.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotFound.test;