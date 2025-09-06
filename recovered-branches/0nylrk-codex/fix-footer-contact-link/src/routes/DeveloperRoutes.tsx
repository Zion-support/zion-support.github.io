import React from 'react';

interface DeveloperRoutesProps {
  className?: string;
}

const DeveloperRoutes: React.FC<DeveloperRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DeveloperRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DeveloperRoutes;