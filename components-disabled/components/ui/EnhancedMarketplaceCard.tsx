import React from 'react';
import Link from 'next/link';

      </div>;
      <p className="text-sm text-gray-600 mb-4">{description}</p>;
      <div className="mt-auto flex items-center justify-between">;
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
import Image from 'next/image';
interface EnhancedMarketplaceCardProps  {title: string, description: string;
  price?: string;

interface EnhancedMarketplaceCardProps {
  // TODO: Implement
}
  title: string;,
  description: string;
  price?: string;
  image?: string;
  href: string;
  category?: string;
  rating?: number;
  reviews?: number;
  features?: string[];
  isNew?: boolean;
  isPopular?: boolean;

const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({

    <Link href={href} className="group block">"
"
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">"
</div>"
        <div className="relative h-48 bg-gray-200">"
</div>
            <img;
              src={image}
              alt={title}"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300""
            />
</img>"
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">"
              <span className="text-gray-400 text-sm">No Image</span>"
          <div className="absolute top-2 left-2 flex flex-col gap-1">"
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">"
</span>
              </span>"
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">"
        <div className="p-4">"
            <span className="text-xs text-gray-500 uppercase tracking-wide">"
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">"
</h3>
          </h3>"
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">"
</p>
          </p>"
            <div className="mt-3">"
              <ul className="text-xs text-gray-500 space-y-1">"
</ul>"
                  <li key={index} className="flex items-center">"
</li>"
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>"
                  </li>
              </ul>
            <div className="mt-3 flex items-center">"
              <div className="flex items-center">"
                  <span;
                    key={i}
                    className={`text-sm ${)"
                      i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300`;
                    }`}
                  >

interface MarketplaceCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  onAddToCart?: () => void;
  onFavorite?: () => void;

export default EnhancedMarketplaceCard;

const EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">"
      <div className="relative">"
        <img src={image} alt={title} className="w-full h-48 object-cover" />"
</img>
        <button;
          onClick={onFavorite}"
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100""
</button>"
          <Heart className="w-4 h-4 text-gray-600" />"

        </button>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>""
        <p className="text-gray-600 text-sm mb-3">{description}</p>""
        <div className="flex items-center justify-between mb-3">"
            <Star className="w-4 h-4 text-yellow-400 fill-current" />"
            <span className="text-sm text-gray-600 ml-1">{rating}</span>"
          <span className="text-lg font-bold text-blue-600">$ + {price}</span>"
        
          onClick={onAddToCart}"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center""
          <ShoppingCart className="w-4 h-4 mr-2" />"

    </div>)"`;