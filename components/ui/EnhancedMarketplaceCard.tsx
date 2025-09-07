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

        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-sm text-gray-600 mb-4">{description}</p>;
      <div className="mt-auto flex items-center justify-between">;
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
import Link from 'next/link';
import Image from 'next/image';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Link from 'next/link'
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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
const EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title,
  description,
  price,
  rating,
  image,
  onAddToCart,
>>>>>>> origin/main
  onFavorite
}) => {
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
