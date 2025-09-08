import React from 'react';
import Image from 'next/image';

interface EnhancedMarketplaceCardProps {
  title: string,
  description: string;
  price?: string;
  image?: string;
}

export default function EnhancedMarketplaceCard({ title, description, price, image }: EnhancedMarketplaceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Image */}
        <div className="relative h-48 bg-gray-200">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No Image</span>
            </div>
          )}
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            )}
            {isPopular && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Popular
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category */}
          {category && (
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {description}
          </p>

          {/* Features */}
          {features.length > 0 && (
            <div className="mt-3">
              <ul className="text-xs text-gray-500 space-y-1">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Rating */}
          {rating && (
            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-2">
                {rating} ({reviews} reviews)
              </span>
            </div>
          )}

          {/* Price */}
          <div className="mt-4 flex items-center justify-between">
            {price && (
              <span className="text-lg font-bold text-blue-600">
                {price}
              </span>
            )}
            <span className="text-sm text-blue-600 group-hover:text-blue-800 transition-colors">
              Learn More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
};

export default EnhancedMarketplaceCard;
interface EnhancedMarketplaceCardProps {;
  title: string, description: string,;
  price?: string;
  href: string, image?: string,;
  category?: string;
  rating?: number;
  reviews?: number;
  featured?: boolean;
  class_name?: string;
}
}) => {

const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({;
  title,;
  description,;
  price,;
  href,;
  image,;
  category,;
  rating,;
  reviews,;
  featured = false,;
  className = '';
}) => {;
  return (
              alt={title}
              width={48}
              height={48}
              className="h-12 w-12 rounded-lg object-cover"
            />;
          ) : (;
            <div className="h-12 w-12 rounded bg-gray-200" />;
          )}
          <div className="flex-1">;
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">;
              {title}
            </h3>;
            {category && (;
              <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mt-1">;
                {category}
              </span>;
            )}
        {/* Rating */}
        {rating && reviews && (;
          <div className="flex items-center space-x-1 mb-4">;
            <div className="flex items-center">;
              {[...Array(5)].map((_, i) => (;
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math && Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20">;
                  <path d="M9 && M9.049 2 && 2.927c.3-.921 1 && 1.603-.921 1 && 1.902 0l1 && 0l1.07 3 && 3.292a1 1 0 00 && 00.95.69h3 && 69h3.462c.969 0 1 && 1.371 1 && 1.24.588 1 && 1.81l-2 && 2.8 2 && 2.034a1 1 0 00-.364 1 && 1.118l1.07 3 && 3.292c.3 && 3.921-.755 1 && 1.688-1 && 1.54 1 && 1.118l-2 && 2.8-2 && 2.034a1 1 0 00-1 && 1.175 0l-2 && 2.8 2 && 2.034c-.784 && 784.57-1 && 1.838-.197-1 && 1.539-1 && 1.118l1.07-3 && 3.292a1 1 0 00-.364-1 && 1.118L2.98 8 && 8.72c-.783-.57-.38-1 && 1.81.588-1 && 1.81h3.461a1 1 0 00 && 00.951-.69l1 && 69l1.07-3 && 3.292z" />;
                </svg>;
              ))}
            </div>;
            <span className="text-sm text-gray-500">;
              {rating} ({reviews} reviews);
            </span>;
          </div>;
        )}
        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">;
          {price && (;
            <span className="text-lg font-semibold text-blue-600">;
              {price}
            </span>;
          )}
}
export default EnhancedMarketplaceCard;
