import React, { useState } from 'react';
import { logErrorToProduction } from '@/utils/productionLogger';
import { useRouter } from 'next/router';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Star, Eye } from 'lucide-react';

interface ProductListing {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image?: string;
  category: string;
  tags: string[];
  provider: {
    name: string;
    verified: boolean;
  };
}

interface ProductListingCardProps {
  listing: ProductListing;
  onFavorite?: (id: string) => void;
  onView?: (id: string) => void;
}

export function ProductListingCard({ listing, onFavorite, onView }: ProductListingCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const router = useRouter();

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    if (onFavorite) {
      onFavorite(listing.id);
    }
  };

  const handleView = () => {
    if (onView) {
      onView(listing.id);
    } else {
      router.push(`/listings/${listing.id}`);
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{listing.title}</CardTitle>
          <button
            onClick={handleFavorite}
            className={`p-2 rounded-full ${
              isFavorited ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
            }`}
          >
            <Heart className={`h-5 w-5 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(listing.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{listing.rating}</span>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4">{listing.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{listing.category}</Badge>
          {listing.tags.map((tag, index) => (
            <Badge key={index} variant="outline">{tag}</Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold text-green-600">${listing.price}</p>
            <p className="text-sm text-gray-500">
              by {listing.provider.name}
              {listing.provider.verified && (
                <Badge variant="outline" className="ml-2">Verified</Badge>
              )}
            </p>
          </div>
          
          <Button onClick={handleView} className="flex items-center">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}