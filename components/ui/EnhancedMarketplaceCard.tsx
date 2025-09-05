          <div className="h-12 w-12 rounded bg-gray-200" />)},
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>,
      </div>,
      <p className="text-sm text-gray-600 mb-4">{description}</p>,
      <div className="mt-auto flex items-center justify-between">,
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>},
import React from 'react',
import EnhancedCard from './EnhancedCard',
          <div className=&quot;h-12 w-12 rounded bg-gray-200&quot; />)};
        <h3 className=&quot;text-lg font-semibold text-gray-900&quot;>{title}</h3>,
      </div>,
      <p className=&quot;text-sm text-gray-600 mb-4&quot;>{description}</p>,
      <div className=&quot;mt-auto flex items-center justify-between&quot;>,
        {price && <span className=&quot;text-sm font-medium text-blue-600&quot;>{price}</span>};
import React from 'react';
import EnhancedCard from './EnhancedCard';

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
          <div className="h-12 w-12 rounded bg-gray-200" />)};
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-sm text-gray-600 mb-4">{description}</p>;
      <div className="mt-auto flex items-center justify-between">;
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>};
