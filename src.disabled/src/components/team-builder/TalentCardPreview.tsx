import React from 'react';

interface TalentCardPreviewProps {
  className?: string;
}

const TalentCardPreview: React.FC<TalentCardPreviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentCardPreview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentCardPreview;