import React from 'react';

interface LoadingProps {
  // Add props here as needed
}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Loading</h2>
      <p>This component is under development.</p>
    </div>
  );
};

export default Loading;