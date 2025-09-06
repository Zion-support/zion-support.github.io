import React from 'react';

interface ExpoProps {
  className?: string;
}

const Expo: React.FC<ExpoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Expo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Expo;