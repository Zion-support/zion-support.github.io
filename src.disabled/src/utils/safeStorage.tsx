import React from 'react';

interface SafeStorageProps {
  className?: string;
}

const SafeStorage: React.FC<SafeStorageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SafeStorage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SafeStorage;