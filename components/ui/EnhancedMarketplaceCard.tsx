import React from 'react';

type Props = {
  title: string;
  description: string;
  price: string;
  image?: string;
};

export default function EnhancedMarketplaceCard({ title, description, price, image }: Props) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="w-full h-40 object-cover rounded mb-3" />
      ) : null}
      <div className="font-semibold text-gray-900 mb-1">{title}</div>
      <div className="text-sm text-gray-600 mb-3">{description}</div>
      <div className="text-blue-600 font-medium">{price}</div>
    </div>
  );
}

