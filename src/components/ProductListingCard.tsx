import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Eye } from 'lucide-react';
import Link from 'next/link';

interface ProductListing {
  id: number;
  title: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

interface ProductListingCardProps {
  listing: ProductListing;
  onRequestQuote: (listingId: number) => void;
  detailBasePath: string;
}

export function ProductListingCard({ listing, onRequestQuote, detailBasePath }: ProductListingCardProps) {
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onRequestQuote(listing.id);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2">
            <Button size="sm" variant="secondary">
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold mb-2 line-clamp-2">
          {listing.title}
        </CardTitle>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {listing.description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{listing.rating}</span>
            <span className="text-sm text-gray-500">({listing.reviews})</span>
          </div>
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
            {listing.price}
          </span>
        </div>
        <div className="flex space-x-2">
          <Link href={`${detailBasePath}/${listing.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Button onClick={handleRequestQuote} className="flex-1">
            Request Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}