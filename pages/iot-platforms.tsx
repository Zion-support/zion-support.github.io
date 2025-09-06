import React from 'react';

interface IotPlatformsProps {
  className?: string;
}

const IotPlatforms: React.FC<IotPlatformsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>IotPlatforms</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default IotPlatforms;