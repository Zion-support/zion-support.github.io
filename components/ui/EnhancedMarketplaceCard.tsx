import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  price?: string;
  href: string;
  image?: string;
  category?: string;
  rating?: number;
  reviews?: number;
  featured?: boolean;
  className?: string;
}

const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({
  title,
  description,
  price,
  href,
  image,
  category,
  rating,
  reviews,
  featured = false,
  className = ''
}) => {
  return (
    <Link href={href} className={`block group ${className}`}>
      <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full flex flex-col ${
        featured ? 'ring-2 ring-blue-500' : ''
      }`}>
        {/* Header */}
        <div className="flex items-start space-x-3 mb-4">
          {image ? (
            <Image 
              src={image} 
              alt={title}
              width={48}
              height={48}
              className="h-12 w-12 rounded-lg object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded bg-gray-200" />
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            {category && (
              <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mt-1">
                {category}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>

        {/* Rating */}
        {rating && reviews && (
          <div className="flex items-center space-x-1 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {rating} ({reviews} reviews)
            </span>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          {price && (
            <span className="text-lg font-semibold text-blue-600">
              {price}
            </span>
          )}
          <div className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
            Learn more →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EnhancedMarketplaceCard;