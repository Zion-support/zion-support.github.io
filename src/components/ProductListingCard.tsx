import React, { useState } from 'react',
import { useRouter } from 'next/router',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { DollarSign, Star, Eye } from 'lucide-react',
interface ProductListing {
  id: string,
  title: string,
  description: string;
  price?: number;
  rating?: number;
  category: string,
  tags: string[],
  imageUrl?: string;
  provider: {
    name: string,
    verified: boolean, }, }

interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid' | 'list',
  onRequestQuote?: (id: string) => void,
  detailBasePath?: string, }

export function ProductListingCard({ 
  listing, 
  view = 'grid', 
  onRequestQuote,
  detailBasePath = '/listings'
}: ProductListingCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleViewDetails = async () => {
    setIsLoading(true);
    try {
      await router.push(`${detailBasePath}/${listing.id}`); catch (error) {
      console.error('Navigation error:', error); finally {
      setIsLoading(false);
  };

  const handleRequestQuote = () => {
    if (onRequestQuote) {
      onRequestQuote(listing.id);
  };

  if (view === 'list') {
    return (
      <Card className="w-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            {listing.imageUrl && (
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
            )}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {listing.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {listing.description}
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <Badge >{listing.category}</Badge>
                    {listing.rating && (
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {listing.rating}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  {listing.price && (
                    <div className="text-lg font-bold text-gray-900">
                      ${listing.price}
                    </div>
                  )}
                  <div className="text-sm text-gray-500">
                    by {listing.provider.name}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex flex-wrap gap-2">
                  {listing.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index}  className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleViewDetails}
                    disabled={isLoading}
                    
                    size="sm"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  {onRequestQuote && (
                    <Button
                      onClick={handleRequestQuote}
                      
                      size="sm"
                    >
                      Request Quote
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );

  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        {listing.imageUrl && (
          <img
            src={listing.imageUrl}
            alt={listing.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        <CardTitle className="text-lg">{listing.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {listing.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <Badge >{listing.category}</Badge>
          {listing.rating && (
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">
                {listing.rating}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {listing.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index}  className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            {listing.price && (
              <div className="text-lg font-bold text-gray-900">
                ${listing.price}
              </div>
            )}
            <div className="text-sm text-gray-500">
              by {listing.provider.name}
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={handleViewDetails}
              disabled={isLoading}
              
              size="sm"
            >
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
            {onRequestQuote && (
              <Button
                onClick={handleRequestQuote}
                
                size="sm"
              >
                Quote
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
