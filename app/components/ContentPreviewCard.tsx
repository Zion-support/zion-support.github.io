'use client'
import React from 'react';

interface ContentPreviewCardProps {
  className?: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Content Preview Card</h2>
      <p className="text-gray-600">This is a placeholder component for Content Preview Card.</p>
    </div>
  );
};

export default ContentPreviewCard;
