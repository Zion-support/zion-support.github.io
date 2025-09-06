import React from 'react';

interface TalentRoutesProps {
  className?: string;
}

const TalentRoutes: React.FC<TalentRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentRoutes;