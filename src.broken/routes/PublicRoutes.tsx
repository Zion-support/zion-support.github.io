import React from 'react';

interface PublicRoutesProps {
  className?: string;
}

const PublicRoutes: React.FC<PublicRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PublicRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PublicRoutes;