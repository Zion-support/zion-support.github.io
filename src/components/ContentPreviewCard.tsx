'use client';
import React from 'react';

interface ContentPreviewCardProps {
  className?: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ContentPreviewCard</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default ContentPreviewCard;
