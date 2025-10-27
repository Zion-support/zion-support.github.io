import React from 'react';

interface ContentPreviewCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`contentpreviewcard ${className}`}>
      {children || <p>ContentPreviewCard component</p>}
    </div>
  );
};

export default ContentPreviewCard;