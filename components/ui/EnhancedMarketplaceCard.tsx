import React from 'react';
import Link from 'next/link';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  href: string;
  price?: string;
  image?: string;
  category?: string;
  rating?: number;
  reviews?: number;
  featured?: boolean;
}

const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({
  title,
  description,
  href,
  price,
  image,
  category,
  rating,
  reviews,
  featured = false,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 ${
      featured ? 'ring-2 ring-blue-500' : ''
    }`}>
      <div className="flex items-start space-x-4 mb-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-12 w-12 rounded object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded bg-gray-200" />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {category && (
            <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mt-1">
              {category}
            </span>
          )}
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      
      {(rating || reviews) && (
        <div className="flex items-center space-x-2 mb-4">
          {rating && (
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600 ml-1">{rating}</span>
            </div>
          )}
          {reviews && (
            <span className="text-sm text-gray-500">({reviews} reviews)</span>
          )}
        </div>
      )}
      
      <div className="mt-auto flex items-center justify-between">
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
        <Link
          href={href}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EnhancedMarketplaceCard;