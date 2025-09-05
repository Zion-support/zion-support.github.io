<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
interface MarketplaceCardProps {
  title: string;
=======
interface MarketplaceCardProps {_title: string;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  description: string;
  price: number;
  rating: number;
  image: string;
  onAddToCart?: () => void;
  onFavorite?: () => void;}

const EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = (_{_title, _description, _price, _rating, _image, _onAddToCart, _onFavorite, _}) => {_return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={_title} className="w-full h-48 object-cover" />
        <button
          onClick={_onFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{_title}</h3>
        <p className="text-gray-600 text-sm mb-3">{_description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{_rating}</span>
          </div>
          <span className="text-lg font-bold text-blue-600">$ + {_price}</span>
        </div>

        <button
          onClick={_onAddToCart}
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
=======

          <div className="h-12 w-12 rounded bg-gray-200" />)},
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>,
      </div>,
      <p className="text-sm text-gray-600 mb-4">{description}</p>,
      <div className="mt-auto flex items-center justify-between">,
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>},
import React from 'react',
import EnhancedCard from './EnhancedCard',
=======
          <div className=&quot;h-12 w-12 rounded bg-gray-200&quot; />)};
        <h3 className=&quot;text-lg font-semibold text-gray-900&quot;>{title}</h3>,
      </div>,
      <p className=&quot;text-sm text-gray-600 mb-4&quot;>{description}</p>,
      <div className=&quot;mt-auto flex items-center justify-between&quot;>,
        {price && <span className=&quot;text-sm font-medium text-blue-600&quot;>{price}</span>};
import React from 'react';
import EnhancedCard from './EnhancedCard';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export type MarketplaceCardProps = {
  title: string,
  subtitle?: string,
  description?: string,
  footer?: React.ReactNode
},

export default function EnhancedMarketplaceCard({ title, subtitle, description, footer }: MarketplaceCardProps) {
  return (
    <EnhancedCard className=&quot;p-5&quot;>
      <div className=&quot;space-y-2&quot;>
        <div>
          <h3 className=&quot;text-base font-semibold leading-tight&quot;>{title}</h3>
          {subtitle && <p className=&quot;text-sm text-gray-500 dark:text-gray-400&quot;>{subtitle}</p>}
        </div>
        {description && <p className=&quot;text-sm text-gray-700 dark:text-gray-300&quot;>{description}</p>}
        {footer && <div className=&quot;pt-2&quot;>{footer}</div>}
      </div>
    </EnhancedCard>
  )
}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
