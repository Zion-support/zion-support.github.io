import React from 'react';

interface AITalentMatchingPageProps {
  className?: string;
}

const AITalentMatchingPage: React.FC<AITalentMatchingPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AITalentMatchingPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AITalentMatchingPage;