<<<<<<< HEAD

          <div className="h-12 w-12 rounded bg-gray-200" />)},
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>,
      </div>,
      <p className="text-sm text-gray-600 mb-4">{description}</p>,
      <div className="mt-auto flex items-center justify-between">,
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>},
import React from 'react',
import EnhancedCard from './EnhancedCard',

export type MarketplaceCardProps = {
  title: string,
  subtitle?: string,
  description?: string,
  footer?: React.ReactNode
},
=======
import React from 'react';
import EnhancedCard from './EnhancedCard';

export type MarketplaceCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  footer?: React.ReactNode;
};
>>>>>>> origin/auto/autonomy-17186719616

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
<<<<<<< HEAD
  ),
}
=======
  );
}
>>>>>>> origin/auto/autonomy-17186719616
