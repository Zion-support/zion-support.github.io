'use client';

import React from 'react';

interface ContentPreviewCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  className?: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        {link && (
          <a 
            href={link}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Read More →
          </a>
        )}
      </div>
    </div>
  );
};

export default ContentPreviewCard;
