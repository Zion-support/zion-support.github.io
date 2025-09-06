import React from 'react';

interface PrivateProps {
  className?: string;
}

const Private: React.FC<PrivateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Private</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Private;