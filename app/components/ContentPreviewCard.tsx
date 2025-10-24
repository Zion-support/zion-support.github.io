'use client';

import React from 'react';

interface ContentPreviewCardProps {
  children?: React.ReactNode;
  className?: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ContentPreviewCard;