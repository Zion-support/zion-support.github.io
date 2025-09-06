import React from 'react';

interface AppFeaturesProps {
  className?: string;
}

const AppFeatures: React.FC<AppFeaturesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AppFeatures</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AppFeatures;