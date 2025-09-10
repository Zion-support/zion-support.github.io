<<<<<<< HEAD
interface EnhancedMarketplaceCardProps {
=======
import React from 'react';
<<<<<<< HEAD
import Image from 'next/image';
import { Card } from './Card';
import { Badge } from './Badge';
type EnhancedMarketplaceCardProps = {;
>>>>>>> origin/automation-fixes
  title: string;
  description: string;
  price?: string;
  image?: string;
<<<<<<< HEAD
}
export default function EnhancedMarketplaceCard({ title, description, price, image }: EnhancedMarketplaceCardProps) {
  return (;
    <Card className="flex flex-col h-full">;
      <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md bg-gray-100">;
        {image ? (;
          <Image src={image} alt={title} fill className="object-cover" />;
        ) : (;
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">No image</div>;
        )}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="mt-auto flex items-center justify-between">
        {price && <span className="text-sm font-medium text-blue-600">{price}</span>}
        <a href="/contact" className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded">
          Get started
        </a>
      </div>
    </div>
=======
};
export default function EnhancedMarketplaceCard({ title, description, price, image }: EnhancedMarketplaceCardProps) {;
  return (;
    <Card className="flex flex-col h-full">;
      <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md bg-gray-100">;
        {image ? (;
          <Image src={image} alt={title} fill className="object-cover" />;
        ) : (;
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">No image</div>;
        )}
      </div>;
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>;
      <p className="text-sm text-gray-600 mt-1 flex-1">{description}</p>;
      <div className="mt-3 flex items-center justify-between">;
        <Badge variant="secondary">Featured</Badge>;
        {price && <span className="text-sm font-semibold text-gray-900">{price}</span>}
      </div>;
    </Card>;
>>>>>>> origin/automation-fixes
=======
import EnhancedCard from './EnhancedCard';

export type MarketplaceCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  footer?: React.ReactNode;
};

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
>>>>>>> origin/automation/changelog
  );
}
