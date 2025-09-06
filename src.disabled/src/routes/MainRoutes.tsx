import React from 'react';

interface MainRoutesProps {
  className?: string;
}

const MainRoutes: React.FC<MainRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MainRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MainRoutes;