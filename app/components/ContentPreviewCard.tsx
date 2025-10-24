'use client';
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
      {children}
    </div>
  );
};

export default ContentPreviewCard;
