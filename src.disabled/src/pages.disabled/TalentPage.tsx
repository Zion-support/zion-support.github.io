import React from 'react';

interface TalentPageProps {
  className?: string;
}

const TalentPage: React.FC<TalentPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentPage;