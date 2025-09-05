import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, Calendar } from 'lucide-react';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  users: number;
  category: string;
  href: string;
}

const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({
  title,
  description,
  image,
  price,
  rating,
  users,
  category,
  href,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm">{users}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">{price}</span>
          <Link
            href={href}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedMarketplaceCard;