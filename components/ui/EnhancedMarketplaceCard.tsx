import React from 'react';
import Image from 'next/image';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  price?: string;
  image?: string;
  category?: string;
  rating?: number;
  reviews?: number;
  onClick?: () => void;
}

const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({
  title,
  description,
  price,
  image,
  category,
  rating,
  reviews,
  onClick,
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        {category && (
          <span className="text-sm text-blue-600 font-medium">{category}</span>
        )}
        <h3 className="text-lg font-semibold text-gray-900 mt-1">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          {price && (
            <span className="text-xl font-bold text-gray-900">{price}</span>
          )}
          {rating && (
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600 ml-1">
                {rating} ({reviews} reviews)
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedMarketplaceCard;