import React from 'react';

interface ExpoPageProps {
  className?: string;
}

const ExpoPage: React.FC<ExpoPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ExpoPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ExpoPage;