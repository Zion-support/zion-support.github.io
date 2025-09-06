import React from 'react';
import { Star, Users, TrendingUp, ExternalLink } from 'lucide-react';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  users: number;
  growth: string;
  category: string;
  image?: string;
  href: string;
  featured?: boolean;
}

const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({
  title,
  description,
  price,
  rating,
  reviews,
  users,
  growth,
  category,
  image,
  href,
  featured = false
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
      featured ? 'border-blue-500' : 'border-gray-200 hover:border-blue-300'
    }`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {image ? (
              <img 
                src={image} 
                alt={title}
                className="h-12 w-12 rounded-lg object-cover"
              />
            ) : (
              <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-lg">
                  {title.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                {category}
              </span>
            </div>
          </div>
          {featured && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm text-gray-600">
              {rating} ({reviews} reviews)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-600">{users.toLocaleString()} users</span>
          </div>
        </div>

        {/* Growth indicator */}
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-sm text-green-600 font-medium">{growth}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">{price}</div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <span>View Details</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMarketplaceCard;