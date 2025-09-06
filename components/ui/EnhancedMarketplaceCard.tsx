import React from 'react';
import Image from 'next/image';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  price?: string;
  image?: string;
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
  );
}