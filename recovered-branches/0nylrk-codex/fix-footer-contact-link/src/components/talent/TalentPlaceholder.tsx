import React from 'react';

interface TalentPlaceholderProps {
  className?: string;
}

const TalentPlaceholder: React.FC<TalentPlaceholderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentPlaceholder</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentPlaceholder;