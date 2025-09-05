import React from 'react';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  price?: string;
  image?: string;
}

export const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({
  title,
  description,
  price,
  image
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        {image ? (
          <img src={image} alt={title} className="h-12 w-12 rounded bg-gray-200" />
        ) : (
          <div className="h-12 w-12 rounded bg-gray-200" />
        )}
        <h3 className="text-lg font-semibold text-gray-900 ml-3">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="mt-auto flex items-center justify-between">
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
      </div>
    </div>
  );
};
