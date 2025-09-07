<<<<<<< HEAD
<<<<<<< HEAD
=======
interface EnhancedMarketplaceCardProps {
  title: string
  description: string
  price?: string
  image?: string
  href: string
  category?: string
  rating?: number
  reviews?: number
  features?: string[]
  isNew?: boolean
  isPopular?: boolean
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div className="h-12 w-12 rounded bg-gray-200" />)}
=======


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
import Image from 'next/image';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
ursor/automate-test-improve-and-merge-code-646c;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

pr-12243
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-sm text-gray-600 mb-4">{description}</p>;
      <div className="mt-auto flex items-center justify-between">;
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
import React from 'react';
=======
>>>>>>> origin/chore/fix-lint-and-merge
import Link from 'next/link';
import Link from next/link';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  price?: string;
<<<<<<< HEAD
  href: string, image?: string
import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
pr-12243
=======

>>>>>>> origin/chore/fix-lint-and-merge
  image?: string;
  href: string;
  category?: string;
  rating?: number;
  reviews?: number;
  features?: string[];
  isNew?: boolean;
  isPopular?: boolean;
}

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    <Link href={href} className="group block>
      <div className=bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Image */}
        <div className="relative h-48 bg-gray-200>
          {image ? (
            <img
              src={image}
              alt={title}
              className=w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="h-full w-full bg-gray-200 flex items-center justify-center>
              <span className=text-gray-400 text-sm">No Image</span>
            </div>
          )}
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1>
            {isNew && (
              <span className=bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            )}
            {isPopular && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full>
                Popular
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className=p-4">
          {/* Category */}
          {category && (
            <span className="text-xs text-gray-500 uppercase tracking-wide>
              {category}
            </span>
          )}

          {/* Title */}
          <h3 className=text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-2 line-clamp-2>
            {description}
          </p>

          {/* Features */}
          {features.length > 0 && (
            <div className=mt-3">
              <ul className="text-xs text-gray-500 space-y-1>
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className=flex items-center">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Rating */}
          {rating && (
            <div className=mt-3 flex items-center">
              <div className="flex items-center>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(rating) ? 'text-yellow-400 : text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className=text-xs text-gray-500 ml-2">
                {rating} ({reviews} reviews)
              </span>
            </div>
          )}

          {/* Price */}
          <div className="mt-4 flex items-center justify-between>
            {price && (
              <span className=text-lg font-bold text-blue-600">
                {price}
              </span>
            )}
            <span className="text-sm text-blue-600 group-hover:text-blue-800 transition-colors>
              Learn More →
            </span>
          </div>
        </div>
      </div>
    </Link>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )
}
export default EnhancedMarketplaceCard
interface MarketplaceCardProps {
interface EnhancedMarketplaceCardProps {
  title: string
  description: string
  price?: string
  image?: string
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
}

export default EnhancedMarketplaceCard;
<<<<<<< HEAD

pr-12243
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="h - 12 w - 12 rounded bg - gray - 200" />)}
        <h3 className="text - lg font - semibold text - gray - 900">{title}</h3>;
      </div>;
      <p className="text - sm text - gray - 600 mb - 4">{description}</p>;
      <div className="mt - auto flex items - center justify - between">;
        {price && <span className="text - sm font - medium text - blue - 600">{price}</span>}
;
import Link from 'next / link';
import Image from 'next / image';
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface EnhancedMarketplaceCardProps {
  title: string, description: string
  price?: string;
  href: string, image?: string
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Star, Heart, ShoppingCart } from lucide-react';
pr-12243
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD

=======
=======
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const EnhancedMarketplaceCard: React.FC < EnhancedMarketplaceCardProps> = ({
  title,
  description,
  price,
  href,
  image,
  category,
  rating,
  reviews,
  featured = false,
  class_name = '';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="flex items-start space-x-3 mb-4">;
          {image ? (;
            <Image
              src={image} 
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;
        </div>;
        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Link href={href} className={`block group ${class_name}`}>;
      <div className={`bg - white rounded - lg shadow - md hover:shadow - lg transition - shadow duration - 300 p - 6 h - full flex flex - col ${
        featured ? 'ring - 2 ring - blue - 500' : '';
      }`}>;
        {/* Header */}
        <div className="flex items - start space - x-3 mb - 4">;
          {image ? (
            <Image;
              src={image}
              alt={title}
              width={48}
              height={48}
              className="h - 12 w - 12 rounded - lg object - cover";
            />) : (
            <div className="h - 12 w - 12 rounded bg - gray - 200" />)}
          <div className="flex - 1">;
            <h3 className="text - lg font - semibold text - gray - 900 group - hover:text - blue - 600 transition - colors">;
              {title}
            </h3>;
            {category && (
              <span className="inline - block px - 2 py - 1 text - xs font - medium text - blue - 600 bg - blue - 100 rounded - full mt - 1">;
                {category}
              </span>)}
          </div>;
        </div>;
        {/* Description */}
        <p className="text - sm text - gray - 600 mb - 4 flex - 1">{description}</p>;
        {/* Rating */}
        {rating && reviews && (
          <div className="flex items - center space - x-1 mb - 4">;
            <div className="flex items - center">;
              {[...Array (5)].map ((_, i) => (
                <svg;
                  key={i}
                  className={`w - 4 h - 4 ${
                    i < Math.floor (rating) ? 'text - yellow - 400' : 'text - gray - 300';
                  }`}
                  fill="current_color";
                  view_box="0 0 20 20";
                >;
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l - 2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688 - 1.54 1.118l - 2.8 - 2.034a1 1 0 00 - 1.175 0l - 2.8 2.034c-.784.57 - 1.838-.197 - 1.539 - 1.118l1.07 - 3.292a1 1 0 00-.364 - 1.118L2.98 8.72c-.783-.57-.38 - 1.81.588 - 1.81h3.461a1 1 0 00.951-.69l1.07 - 3.292z" />;
                </svg>))}
            </div>;
            <span className="text - sm text - gray - 500">;
              {rating} ({reviews} reviews);
            </span>;
          </div>)}
        {/* Footer */}
        <div className="mt - auto flex items - center justify - between">;
          {price && (
            <span className="text - lg font - semibold text - blue - 600">;
              {price}
            </span>)}
          <div className="text - sm text - gray - 500 group - hover:text - blue - 600 transition - colors">;
            Learn more →;
          </div>;
        </div>;
      </div>;
    </Link>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface MarketplaceCardProps {
interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  price?: string;
<<<<<<< HEAD

        <h3 className=text-lg font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-sm text-gray-600 mb-4>{description}</p>;
      <div className=mt-auto flex items-center justify-between">;
        {price && <span className="text-sm font-medium text-blue-600>{price}</span>}
interface EnhancedMarketplaceCardProps {
  title: string, description: string
  price?: string;
  href: string, image?: string
  href: string, image?: string

interface MarketplaceCardProps {
  title: string,
  description: string,
  price: number,
  rating: number,
  image: string,
  onAddToCart?: () => void;
  onFavorite?: () => void;
}

const EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          <div className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">;
            Learn more →;
          </div>;
        </div>;
      </div>;
    </Link>;
interface MarketplaceCardProps {;
  title: string,;
  description: string,;
  price: number,;
  rating: number,;
  image: string,;
  onAddToCart?: () => void;
  on_favorite?: () => void;
}
<<<<<<< HEAD
const EnhancedMarketplaceCard: React.FC < MarketplaceCardProps> = ({
=======

const EnhancedMarketplaceCard: React.FC < MarketplaceCardProps> = ({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  title;
  description;
  price;
  rating;
  image;
  onAddToCart;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">;
          <Heart className="w-4 h-4 text-gray-600" />;
        </button>;
      </div>;
      <div className="p-4">;
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>;
        <p className="text-gray-600 text-sm mb-3">{description}</p>;
        <div className="flex items-center justify-between mb-3">;
          <div className="flex items-center">;
            <Star className="w-4 h-4 text-yellow-400 fill-current" />;
            <span className="text-sm text-gray-600 ml-1">{rating}</span>;
          </div>;
          <span className="text-lg font-bold text-blue-600">$ + {price}</span>;
        </div>;
        <button
          onClick={onAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center">;
          <ShoppingCart className="w-4 h-4 mr-2" />;
          Add to Cart;
        </button>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
export default EnhancedMarketplaceCard;

=======


  );
}
export default EnhancedMarketplaceCard;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
  image?: string;
}

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title,
  description,
  price,
  rating,
  image,
  onAddToCart,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onFavorite
}) => {
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onFavorite
}) => {
  return (
    <div className=bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative>
        <img src={image} alt={title} className=w-full h-48 object-cover" />
        <button
          onClick={onFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100
        >
          <Heart className=w-4 h-4 text-gray-600" />
        </button>
      </div>
      <div className="p-4>
        <h3 className=text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3>{description}</p>
        <div className=flex items-center justify-between mb-3">
          <div className="flex items-center>
            <Star className=w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1>{rating}</span>
          </div>
          <span className=text-lg font-bold text-blue-600">$ + {price}</span>
        </div>
        <button
          onClick={onAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center
        >
          <ShoppingCart className=w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
<<<<<<< HEAD
    </div>
  );
<<<<<<< HEAD
=======
</div>
  );
<<<<<<< HEAD
};
}

export default EnhancedMarketplaceCard;

          <div className;
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
<div className="h-12 w-12 rounded bg-gray-200" />)}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="mt-auto flex items-center justify-between">
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
=======
};

export default EnhancedMarketplaceCard;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
