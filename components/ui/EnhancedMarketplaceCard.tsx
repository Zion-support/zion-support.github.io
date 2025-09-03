import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card';

type EnhancedMarketplaceCardProps = {
  title: string;
  description: string;
  price?: string;
  image?: string;
  className?: string;
};

export default function EnhancedMarketplaceCard({ title, description, price, image, className }: EnhancedMarketplaceCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {price ? <CardDescription>{price}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        {image ? (
          <div className="mb-4">
            <Image src={image} alt={title} width={400} height={240} className="rounded-md object-cover w-full h-auto" />
          </div>
        ) : null}
        <p className="text-sm text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
}

