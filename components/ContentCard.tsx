import React from 'react';

interface ContentCardProps {
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContentCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContentCard;