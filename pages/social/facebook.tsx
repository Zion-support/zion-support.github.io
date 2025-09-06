import React from 'react';

interface FacebookProps {
  className?: string;
}

const Facebook: React.FC<FacebookProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Facebook</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Facebook;