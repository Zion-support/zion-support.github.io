import React from 'react';

interface TalentDirectoryHeaderProps {
  className?: string;
}

const TalentDirectoryHeader: React.FC<TalentDirectoryHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentDirectoryHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentDirectoryHeader;