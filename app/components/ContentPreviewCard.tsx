'use client';

import React, { memo } from 'react';

interface ContentPreviewCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`content-preview-card ${className}`}>
      {children}
    </div>
  );
});

ContentPreviewCard.displayName = 'ContentPreviewCard';

export default ContentPreviewCard;