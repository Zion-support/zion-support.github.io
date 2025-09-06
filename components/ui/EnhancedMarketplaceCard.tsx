<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
import React from 'react';
          <div className="h-12 w-12 rounded bg-gray-200" />)};

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from 'react';
import Link from 'next/link';

interface EnhancedMarketplaceCardProps {
  title: string,
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
  )
};

export default EnhancedMarketplaceCard;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

<<<<<<< HEAD
<<<<<<< HEAD
interface EnhancedMarketplaceCardProps {;
  title: string, description: string,;
  price?: string;
=======
interface EnhancedMarketplaceCardProps {;
  title: string, description: string,;
  price?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  href: string, image?: string,;
  category?: string;
  rating?: number;
  reviews?: number;
  featured?: boolean;
  class_name?: string;
<<<<<<< HEAD
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
<<<<<<< HEAD

        <div className="flex items-start space-x-3 mb-4">;
          {image ? (;
            <Image
<<<<<<< HEAD
              src={image}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface MarketplaceCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  onAddToCart?: () => void;
  onFavorite?: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
}
export default EnhancedMarketplaceCard;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
const EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title,
  description,
  price,
  rating,
  image,
  onAddToCart,
  onFavorite
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
