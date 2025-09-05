import React from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  price?: string;
  image?: string;
  rating?: number;
  reviews?: number;
  isFavorite?: boolean;
  onFavorite?: () => void;
  onAddToCart?: () => void;
  onView?: () => void;
}

const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({
  title,
  description,
  price,
  image,
  rating = 0,
  reviews = 0,
  isFavorite = false,
  onFavorite,
  onAddToCart,
  onView,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {image && (
        <div className="relative h-48 w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onFavorite}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
              }`}
            />
          </button>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        {rating > 0 && (
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              {rating} ({reviews} reviews)
            </span>
          </div>
        )}
        
        {price && (
          <div className="text-xl font-bold text-gray-900 mb-3">{price}</div>
        )}
        
        <div className="flex space-x-2">
          <button
            onClick={onAddToCart}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </button>
          <button
            onClick={onView}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMarketplaceCard;