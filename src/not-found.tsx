import React from 'react';

interface Not FoundProps {
  className?: string;
}

const Not Found: React.FC<Not FoundProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>Not Found</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default Not Found;
