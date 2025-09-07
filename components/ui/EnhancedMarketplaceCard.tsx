<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
import { Star, Heart, ShoppingCart } from 'lucide-react';
=======
import React from 'react';
import Link from 'next/link';
ursor/automate-test-improve-and-merge-code-646c;

=======

<<<<<<< HEAD
pr-12243
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-sm text-gray-600 mb-4">{description}</p>;
      <div className="mt-auto flex items-center justify-between">;
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
=======
import React from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import React from 'react';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Link from 'next/link';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  price?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  href: string, image?: string
import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
pr-12243
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  image?: string;
  href: string;
  category?: string;
  rating?: number;
  reviews?: number;
  features?: string[];
  isNew?: boolean;
  isPopular?: boolean;
}

const EnhancedMarketplaceCard: React.FC<EnhancedMarketplaceCardProps> = ({
  title,
  description,
  price,
  image,
  href,
  category,
  rating,
  reviews,
  features = [],
  isNew = false,
  isPopular = false,
}) => {
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
  );
};

export default EnhancedMarketplaceCard;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

pr-12243
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-sm text-gray-600 mb-4">{description}</p>;
      <div className="mt-auto flex items-center justify-between">;
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
import Link from 'next/link';
import Image from 'next/image';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Link from 'next/link'
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
interface EnhancedMarketplaceCardProps {
  title: string, description: string
  price?: string;
  href: string, image?: string
import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

interface MarketplaceCardProps {
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
interface EnhancedMarketplaceCardProps {
  title: string, description: string
  price?: string;

        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-sm text-gray-600 mb-4">{description}</p>;
      <div className="mt-auto flex items-center justify-between">;
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
import Link from 'next/link';
import Image from 'next/image';
interface EnhancedMarketplaceCardProps {
  title: string, description: string
  price?: string;
  href: string, image?: string
  href: string, image?: string
>>>>>>> origin/main

interface MarketplaceCardProps {
  title: string,
  description: string,
  price: number,
  rating: number,
  image: string,
  onAddToCart?: () => void;
  onFavorite?: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
const EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title;
  description;
  price;
  rating;
  image;
  onAddToCart;
=======
}
export default EnhancedMarketplaceCard;
=======
<<<<<<< HEAD
=======
}
export default EnhancedMarketplaceCard;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
const EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title,
  description,
  price,
  rating,
  image,
  onAddToCart,
<<<<<<< HEAD
>>>>>>> origin/main
  onFavorite
}) => {
=======
  onFavorite
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button
          onClick={onFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
          <span className="text-lg font-bold text-blue-600">$ + {price}</span>
        </div>
        <button
          onClick={onAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default EnhancedMarketplaceCard;
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

pr-12243
export default function EnhancedMarketplaceCard({ title, description, price, image }: EnhancedMarketplaceCardProps) {

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
<<<<<<< HEAD
        <Image src={image} alt={title} width={400} height={192} className="w-full h-48 object-cover" />
=======
        <img src={image} alt={title} className="w-full h-48 object-cover" />
>>>>>>> origin/main
        <button
          onClick={onFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
          <span className="text-lg font-bold text-blue-600">$ + {price}</span>
        </div>
        
        <button
          onClick={onAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
    </div>
  );
};

export default EnhancedMarketplaceCard;
=======
<<<<<<< HEAD

          <div className="h-12 w-12 rounded bg-gray-200" />)};
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-sm text-gray-600 mb-4">{description}</p>;
      <div className="mt-auto flex items-center justify-between">;
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>};
import React from 'react';
import EnhancedCard from './EnhancedCard';
export type MarketplaceCardProps = {
  title: string,
  subtitle?: string;
  description?: string;
  footer?: React.ReactNode
};

=======
</div>
  );
};
}

<<<<<<< HEAD
export default EnhancedMarketplaceCard;

          <div className;
>>>>>>> origin/main
export default function EnhancedMarketplaceCard({ title, subtitle, description, footer }: MarketplaceCardProps) {
  return (
    <EnhancedCard className="p-5">
      <div className="space-y-2">
        <div>
          <h3 className="text-base font-semibold leading-tight">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
        </div>
        {description && <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>}
        {footer && <div className="pt-2">{footer}</div>}
      </div>
    </EnhancedCard>
  )
}
<<<<<<< HEAD
>>>>>>> pr-11992
=======
          <div className="h-12 w-12 roundedbg-gray-200" />)};
        <h3 className=" text-lgfont-semiboldtext-gray-900">{title}</h3>;
      </div>;
      <p className=" text-smtext-gray-600mb-4">{description}</p>;
      <div className="mt- auto flexitems-centerjustify-between">;
        {price && <span className=" text-smfont-mediumtext-blue-600">{price}</span>};
<div className = "h-12 w-12 rounded bg-gray-200" />)}; <h3 className = "text-lg font-semibold text-gray-900">{title}</h3>; </div>; <p className = "text-sm text-gray-600 mb-4">{description}</p>; <div className = "mt-auto flex items-center justify-between">; {price && <span className = "text-sm font-medium text-blue-600">{price}</span>};
>>>>>>> origin/merge-automation-changes
=======
=======
<div className="h-12 w-12 rounded bg-gray-200" />)}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="mt-auto flex items-center justify-between">
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
