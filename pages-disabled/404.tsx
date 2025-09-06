import React from 'react';

interface 404Props {
  className?: string;
}

const 404: React.FC<404Props> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>404</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default 404;