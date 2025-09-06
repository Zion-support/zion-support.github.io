<<<<<<< HEAD
import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings";
import { Star, DollarSign } from "lucide-react";
interface ProductListingCardProps {

  listing: ProductListing
=======
import React from 'react';
import {useNavigate} from "react-router-dom";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ProductListing} from "@/types/listings";
import {Star, DollarSign} from "lucide-react";

interface ProductListingCardProps {;
  listing: ProductListing,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
}
<<<<<<< HEAD
export function ProductListingCard({
  listing
=======

export function ProductListingCard(): any ({ ;
  listing, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  view = 'grid';
  onRequestQuote;
}: ProductListingCardProps) {;
  const isGrid = view === 'grid';
  const navigate = useNavigate();
<<<<<<< HEAD
  // Get the first image or use a placeholder
  const imageUrl = listing.images && listing.images.length > 0
    ? listing.images[0]
    : '/placeholder.svg';
  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`
  }
  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/placeholder.svg'
  }
  // Handle navigating to listing detail
  const handleViewListing = () => {
    navigate(`/listing/${listing.id}`)
  }
  // Handle request quote button click
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation()
    if (onRequestQuote) {
      onRequestQuote(listing.id)
    } else {
      // Default behavior if no handler provided
      navigate(`/request-quote?listing=${listing.id}`)
    }
  }
=======

  // Get the first image or use a placeholder;
  const imageUrl = listing && listing.images && listing && listing.images.length > 0 ;
    ? listing && listing.images[0] ;
    : '/placeholder && placeholder.svg';

  // Format price display;
  const formatPrice = () => {;
    if (listing && listing.price === null) return "Custom pricing";
    return `${listing && listing.currency}${listing && listing.price.toLocaleString()}`;
  };

  // Handle image loading errors;
  const handleImageError = (e: React && React.SyntheticEvent<HTMLImageElement>) => {;
    e && e.currentTarget.src = '/placeholder && placeholder.svg';
  };

  // Handle navigating to listing detail;
  const handleViewListing = () => {;
    navigate(`/listing/${listing && listing.id}`);
  };

  // Handle request quote button click;
  const handleRequestQuote = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;

    if (onRequestQuote) {;
      onRequestQuote(listing && listing.id);
    } else {;
      // Default behavior if no handler provided;
      navigate(`/request-quote?listing=${listing && listing.id}`);
    }
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;
      {/* Image */}
<<<<<<< HEAD
      <div className={isGrid ? 'block w-full' : 'block w-1/3'} onClick={handleViewListing}>
        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>
          <img
            src={imageUrl}
            alt={listing.title}
=======
      <div className={isGrid ? 'block w-full' : 'block w-1/3'} onClick={handleViewListing}>;
        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>;
          <img
            src={imageUrl} 
            alt={listing && listing.title}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            className="w-full h-full object-cover"
            onError={handleImageError}
          />;
          {listing && listing.featured && (;
            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
            </Badge>;
          )}
<<<<<<< HEAD
        </div>
      </div>
=======
        </div>;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>;
        <div>;
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">;
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">;
              {listing && listing.category}
            </Badge>;
            {listing && listing.rating && (;
              <div className="flex items-center text-zion-slate-light">;
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />;
                <span>{listing && listing.rating}</span>;
                {listing && listing.reviewCount && (;
                  <span className="text-xs ml-1">({listing && listing.reviewCount})</span>;
                )}
              </div>;
            )}
<<<<<<< HEAD
          </div>
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">
              {listing.title}
            </h3>
          </div>
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">
            {listing.description}
          </p>
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full"
                >
=======
          </div>;

          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">;
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">;
              {listing && listing.title}
            </h3>;
          </div>;
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">;
            {listing && listing.description}
          </p>;

          {/* Tags */}
          {listing && listing.tags && listing && listing.tags.length > 0 && (;
            <div className="flex flex-wrap gap-1 mb-4">;
              {listing && listing.tags.map((tag, idx) => (;
                <span
                  key={idx} 
                  className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  {tag}
                </span>;
              ))}
            </div>;
          )}
<<<<<<< HEAD
        </div>
=======
        </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;
          <div className="text-sm font-medium">;
            {listing && listing.price !== null ? (;
              <div className="flex items-center text-zion-purple">;
                <DollarSign className="h-4 w-4 mr-1" />;
                {formatPrice()}
              </div>;
            ) : (;
              <span className="text-zion-slate-light">;
                {formatPrice()}
              </span>;
            )}
<<<<<<< HEAD
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();

                navigate(`/listing/${listing.id}`)
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              Buy Now
            </Button>
            {onRequestQuote && (
=======
          </div>;

          <div className="flex gap-2">;
            <Button
              size="sm" 
              onClick={(e) => {;
                e && e.stopPropagation();
                navigate(`/listing/${listing && listing.id}`);
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            >;
              Buy Now;
            </Button>;

            {onRequestQuote && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                size="sm"
                variant="outline"
                onClick={handleRequestQuote}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;
                Request Quote;
              </Button>;
            )}
          </div>;
        </div>;
      </div>;
    </div>;
  );
}