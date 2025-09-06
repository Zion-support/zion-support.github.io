import React from 'react';

interface AppScreenshotsProps {
  className?: string;
}

const AppScreenshots: React.FC<AppScreenshotsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AppScreenshots</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AppScreenshots;