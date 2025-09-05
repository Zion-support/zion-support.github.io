<<<<<<< HEAD
interface EnhancedMarketplaceCardProps {
=======
import React from 'react';
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
  return (
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        {image ? (
          <Image src={image} alt={title} width={48} height={48} className="rounded" />
        ) : (
          <div className="h-12 w-12 rounded bg-gray-200" />
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
  );
}
