"use client";
import React from 'react';

interface ContentPreviewCardProps {
  className?: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        ContentPreviewCard
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default ContentPreviewCard;