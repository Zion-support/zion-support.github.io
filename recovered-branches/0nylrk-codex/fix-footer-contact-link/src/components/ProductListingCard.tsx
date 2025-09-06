<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",

=======
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useNavigate} from "react-router-dom";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ProductListing} from "@/types/listings";
import {Star, DollarSign} from "lucide-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

interface ProductListingCardProps {;
  listing: ProductListing,;

  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
}


export function ProductListingCard(): any ({ ;
  listing, ;

=======
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
}
export function ProductListingCard(): any ({ ;
  listing, ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  view = 'grid';
  onRequestQuote;
}: ProductListingCardProps) {;
  const isGrid = view === 'grid';
  const navigate = useNavigate();
<<<<<<< HEAD


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings";
import { Star, DollarSign } from "lucide-react";
interface ProductListingCardProps {
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

interface ProductListingCardProps {;
  listing: ProductListing,;

  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
}
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
import { ProductListing } from "@/types/listings",
import { Star, DollarSign } from "lucide-react",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid' | 'list',
  onRequestQuote?: (id: string) => void
}

<<<<<<< HEAD
export function ProductListingCard({

=======
export function ProductListingCard({ 
<<<<<<< HEAD
<<<<<<< HEAD

  listing, 
  view = 'grid',

=======
  listing, 
  view = 'grid',

  listing, ;
  view = 'grid';
  listing, 
  view = 'grid',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = view === 'grid',
  const navigate = useNavigate(),

  // Get the first image or use a placeholder
<<<<<<< HEAD
  const imageUrl = listing.images && listing.images.length > 0
    ? listing.images[0]
    : '/placeholder.svg',

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
  const imageUrl = listing.images && listing.images.length > 0 
    ? listing.images[0] 
    : '/placeholder.svg',
    

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`
<<<<<<< HEAD

=======
<<<<<<< HEAD

import { use_navigate } from './react-router-dom';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { ProductListing } from '@/types / listings';
import { Star, DollarSign } from './lucide-react';
interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid' | 'list';
<<<<<<< HEAD
=======

=======

    
  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing",
    return `${listing.currency}${listing.price.toLocaleString()}`
  }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
    e.preventDefault();
    e.stopPropagation()
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
=======

import React from 'react';import {useNavigate} from "react-router-dom";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ProductListing} from "@/types/listings";
import {Star, DollarSign} from "lucide-react";  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = view === 'grid',
  const navigate = useNavigate(),
  
  // Get the first image or use a placeholder  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import React from 'react';import {useNavigate} from "react-router-dom";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ProductListing} from "@/types/listings";
import {Star, DollarSign} from "lucide-react";  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = view === 'grid',
  const navigate = useNavigate(),
  
  // Get the first image or use a placeholder  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`  },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/placeholder.svg'
  },
  
  // Handle navigating to listing detail
  const handleViewListing = () => {
    navigate(`/listing/${listing.id}`)
  },
  
  // Handle request quote button click
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault(),
    e.stopPropagation(),
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (onRequestQuote) {
      onRequestQuote(listing.id)
    } else {
      // Default behavior if no handler provided
      navigate(`/request-quote?listing=${listing.id}`)
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    }
  }
  return (
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useNavigate } from "react-router-dom",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { ProductListing } from "@/types/listings",;
import { Star, DollarSign } from "lucide-react",;
interface ProductListingCardProps {;
  listing: ProductListing,;
  view?: 'grid' | 'list',;

  onRequestQuote?: (id: string) => void;
}
export /**
 * ProductListingCard - Function description
 */
function ProductListingCard() {
  const is_grid = view === 'grid';
  const navigate = use_navigate ();
;
  // Get the first image or use a placeholder;
  const image_url = listing.images && listing.images.length > 0;
    ? listing.images[0];
    : '/placeholder.svg';
;
  // Format price display;
  const format_price = () =>: any {
    // Check condition
if (return "Custom pricing") {
  $2
}
    return `${listing.currency}${listing.price.toLocaleString ()}`;
  }
;
  // Handle image loading errors;
  const handleImageError = (e: React.SyntheticEvent < HTMLImageElement>) =>: any {
    e.current_target.src = '/placeholder.svg';
  }
;
  // Handle navigating to listing detail;
  const handleViewListing = () =>: any {
    navigate (`/listing/${listing.id}`);
  }
;
  // Handle request quote button click;
  const handleRequestQuote = (e: React.MouseEvent) =>: any {
    e.prevent_default ();
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      onRequestQuote (listing.id);
      // Default behavior if no handler provided;
      navigate (`/request - quote?listing=${listing.id}`);
    }
  }

  // Format price display;
  const formatPrice = () => {;
    if (listing && listing.price === null) return "Custom pricing";
    return `${listing && listing.currency}${listing && listing.price.toLocaleString()}`
};
  // Handle navigating to listing detail;
  const handleViewListing = () => {;
    navigate(`/listing/${listing && listing.id}`)
};
    if (onRequestQuote) {;
      onRequestQuote(listing && listing.id);
    } else {;
      // Default behavior if no handler provided;
      navigate(`/request-quote?listing=${listing && listing.id}`);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Image */}

=======
      {/* Image */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className={isGrid ? 'block w-full' : 'block w-1/3'} onClick={handleViewListing}>;
        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>;
          <img
            src={imageUrl} 
            alt={listing && listing.title}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      {/* Image */}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            className="w-full h-full object-cover"
            onError={handleImageError}
          />;
          {listing && listing.featured && (;
            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
            </Badge>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD

        </div>;
      </div>;


=======
        </div>;
      </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
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

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
  onRequestQuote?: (id: string) => void;
}
;
export function ProductListingCard({;
  listing,;
  view = 'grid',;
  onRequestQuote;
}: ProductListingCardProps) {;
  const isGrid = view === 'grid',;
  const navigate = useNavigate(),;
  // Get the first image or use a placeholder;
  const imageUrl = listing.images && listing.images.length > 0;
    ? listing.images[0];
    : '/placeholder.svg',;
  // Format price display;
  const formatPrice = () => {;
    if (listing.price === null) return "Custom pricing",;
    return `${listing.currency}${listing.price.toLocaleString()}`;
  },;
  // Handle image loading errors;
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {;
    e.currentTarget.src = '/placeholder.svg';
  },;
  // Handle navigating to listing detail;
  const handleViewListing = () => {;
    navigate(`/listing/${listing.id}`);
  },;
  // Handle request quote button click;
  const handleRequestQuote = (e: React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onRequestQuote) {;
      onRequestQuote(listing.id);
    } else {;
      // Default behavior if no handler provided;
      navigate(`/request-quote?listing=${listing.id}`);
    }
  };
  return (;
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;
      {/* Image */}
      <div className={isGrid ? 'block w-full' : 'block w-1/3'} onClick={handleViewListing}>
        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>
          <img
            src={imageUrl}
            alt={listing.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          {listing.featured && (
            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">
              Featured
            </Badge>
          )}
        </div>
      </div>
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">
              {listing.category}
            </Badge>
            {listing.rating && (
              <div className="flex items-center text-zion-slate-light">
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />
                <span>{listing.rating}</span>
                {listing.reviewCount && (
                  <span className="text-xs ml-1">({listing.reviewCount})</span>
                )}
              </div>
            )}
          </div>
          </div>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      {/* Image */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      {/* Image */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">
          <div className="text-sm font-medium">
            {listing.price !== null ? (
              <div className="flex items-center text-zion-purple">
                <DollarSign className="h-4 w-4 mr-1" />
                {formatPrice()}
              </div>
            ) : (
              <span className="text-zion-slate-light">
                {formatPrice()}
<<<<<<< HEAD
=======
              </span>
              </span>;
            )}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={(e) => {
;
  return (
    <div className={`bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden flex ${is_grid ? 'flex - col' : 'flex - row'} cursor - pointer`} on_click={handleViewListing}>;
      {/* Image */}
      <div className={is_grid ? 'block w - full' : 'block w - 1/3'} on_click={handleViewListing}>;
        <div className={`relative ${is_grid ? 'h - 48' : 'h - full'}`}>;
          <img;
            src={image_url}
            alt={listing.title}
            className="w - full h - full object-cover";
            on_error={handleImageError}
          />;
          {listing.featured && (
            <Badge className="absolute top - 2 right - 2 bg - zion - purple text - white border-none">;
              Featured;
            </Badge>)}
        </div>;
      </div>;
      {/* Content */}
      <div className={`flex flex - col justify - between ${is_grid ? 'p - 4 flex - 1' : 'p - 4 flex - 1'}`}>;
        <div>;
          {/* Category & Rating */}
          <div className="flex justify - between items - center mb-2">;
            <Badge variant="outline" className="bg - zion - blue - light / 20 text - zion - slate - light border - zion - blue-light">;
              {listing.category}
            </Badge>;
            {listing.rating && (
              <div className="flex items - center text - zion - slate-light">;
                <Star className="h - 4 w - 4 fill - zion - cyan text - zion - cyan mr-1" />;
                <span>{listing.rating}</span>;
                {listing.review_count && (
                  <span className="text - xs ml-1">({listing.review_count})</span>)}
              </div>)}
          </div>;
          {/* Title & Description */}
          <div on_click={handleViewListing} className="block">;
            <h3 className="text - lg font - semibold text - white mb - 2 hover:text - zion - cyan transition-colors">;
              {listing.title}
            </h3>;
          </div>;
          <p className="text - sm text - zion - slate line - clamp - 2 mb-4">;
            {listing.description}

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
                  {tag}
                </span>;
              ))}
            </div>;
          )}

<<<<<<< HEAD
<<<<<<< HEAD
        </div>;


=======
        </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD


              </span>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            )}


                e.stopPropagation(),
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======
                e.stopPropagation();

                e.stopPropagation(),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


                e.stopPropagation(),
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                navigate(`/listing/${listing.id}`)
=======
        </div>;                navigate(`/listing/${listing.id}`)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        </div>;                navigate(`/listing/${listing.id}`)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              Buy Now
            </Button>
            {onRequestQuote && (
              <Button
                size="sm"
                variant="outline"
                onClick={handleRequestQuote}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;
=======
import { useNavigate } from "react-router-dom",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { ProductListing } from "@/types/listings",;
import { Star, DollarSign } from "lucide-react",;
;
interface ProductListingCardProps {;
  listing:ProductListing,;
  view?:'grid' | 'list',;
  onRequestQuote?:(id:string) => void;
}
;
export function ProductListingCard({ ;
  listing, ;
  view = 'grid',;
  onRequestQuote;
} ProductListingCardProps) {;
  const isGrid = view === 'grid',;
  const navigate = useNavigate(),;
  ;
  // Get the first image or use a placeholder;
  const imageUrl = listing.images && listing.images.length > 0 ;
    ? listing.images[0] ;
    :'/placeholder.svg',;
    ;
  // Format price display;
  const formatPrice = () => {;
    if (listing.price === null) return "Custom pricing",;
    return `${listing.currency}${listing.price.toLocaleString()}`,;
  },;
;
  // Handle image loading errors;
  const handleImageError = (e:React.SyntheticEvent<HTMLImageElement>) => {;
    e.currentTarget.src = '/placeholder.svg';
  },;
  ;
  // Handle navigating to listing detail;
  const handleViewListing = () => {;
    navigate(`/listing/${listing.id}`),;
  },;
  ;
  // Handle request quote button click;
  const handleRequestQuote = (e:React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    ;
    if (onRequestQuote) {;
      onRequestQuote(listing.id);
    } else {;
      // Default behavior if no handler provided;
      navigate(`/request-quote?listing=${listing.id}`),;
    }
  },;
  ;
  return (;
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' :'flex-row'} cursor-pointer`} onClick={handleViewListing}>;
      {/* Image */}
      <div className={isGrid ? 'block w-full' :'block w-1/3'} onClick={handleViewListing}>;
        <div className={`relative ${isGrid ? 'h-48' :'h-full'}`}>;
          <img ;
            src={imageUrl} ;
            alt={listing.title}
            className="w-full h-full object-cover";
            onError={handleImageError}
          />;
          {listing.featured && (;
            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
            </Badge>;
          )}
        </div>;
      </div>;
      ;
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' :'p-4 flex-1'}`}>;
        <div>;
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">;
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">;
              {listing.category}
            </Badge>;
            {listing.rating && (;
              <div className="flex items-center text-zion-slate-light">;
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />;
                <span>{listing.rating}</span>;
                {listing.reviewCount && (;
                  <span className="text-xs ml-1">({listing.reviewCount})</span>;
                )}
              </div>;            )}
          </div>;
          ;
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">;
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">;
              {listing.title}
            </h3>;
          </div>;
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">;            {listing.description}
          </p>;
          ;
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (;
            <div className="flex flex-wrap gap-1 mb-4">;
              {listing.tags.map((tag, idx) => (;
                <span ;
                  key={idx} ;
                  className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full";
                >;
                  {tag}
                </span>;              ))}
            </div>;
          )}
        </div>;
        ;
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;
          <div className="text-sm font-medium">;
            {listing.price !== null ? (;
              <div className="flex items-center text-zion-purple">;
                <DollarSign className="h-4 w-4 mr-1" />;
                {formatPrice()}
              </div>;
            ) :(;
              <span className="text-zion-slate-light">;
                {formatPrice()}
              </span>;
            )}
          </div>;
          ;
          <div className="flex gap-2">;
            <Button ;
              size="sm" ;
              onClick={(e) => {;
                e.stopPropagation(),;
                navigate(`/listing/${listing.id}`),;
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            >;
              Buy Now;
            </Button>;
            ;
            {onRequestQuote && (;
              <Button ;
                size="sm";
                variant="outline" ;
                onClick={handleRequestQuote}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
              >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                Request Quote;
              </Button>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            )}
          </div>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
          </p>;
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className="flex flex - wrap gap - 1 mb - 4">;
              {listing.tags.map ((tag, idx) => (
                <span;
                  key={idx}
                  className="text - xs text - zion - slate bg - zion - blue - light / 20 px - 2 py - 1 rounded - full";
                >;
                  {tag}
                </span>))}
            </div>)}
        </div>;
        {/* Footer with price and button */}
        <div className="flex items - center justify - between mt - auto pt - 3 border - t border - zion - blue - light">;
          <div className="text - sm font - medium">;
            {listing.price !== null ? (
              <div className="flex items - center text - zion - purple">;
                <DollarSign className="h - 4 w - 4 mr - 1" />;
                {format_price ()}
              </div>) : (
              <span className="text - zion - slate - light">;
                {format_price ()}
              </span>)}
          </div>;
          <div className="flex gap - 2">;
            <Button;
              size="sm";
              on_click={(e) => {
                e.stop_propagation ();
                navigate (`/listing/${listing.id}`);
              }}
              className="bg - zion - purple hover:bg - zion - purple - dark text - white";
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (
              <Button;
                size="sm";
                variant="outline";
                on_click={handleRequestQuote}
                className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
              >;
                Request Quote;
              </Button>)}
          </div>;
        </div>;
      </div>;
    </div>);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),; interface ProductListingCardProps {
  listing: ProductListing;
view?: 'grid' | 'list';
onRequestQuote?: (id: string) => void 
}export function ProductListingCard ({
  listing;
view = 'grid';
onRequestQuote 
}: ProductListingCardProps) {
  const isGrid = view === 'grid';
const navigate = useNavigate ();
//Format price display 
};
}
};
return (<div className= {
  `bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex $ {
  isGrid ? 'flex-col' : 'flex-row' 
}cursor-pointer` 
}onClick= {
  handleViewListing 
}> {
  /* Image */ 
}<div className= {
  isGrid ? 'block w-full' : 'block w-1/3' 
}onClick= {
  handleViewListing 
}> <div className= {
  `relative $ {
  isGrid ? 'h-48' : 'h-full' 
}` 
}> <img Featured </Badge>) 
}</div> </div> {
  /* Content */ 
}<div className= {
  `flex flex-col justify-between $ {
  isGrid ? 'p-4 flex-1' : 'p-4 flex-1' 
}` 
}> <div>) 
}</div>) 
}</div> <span key= {
  idx 
}className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full" > {
  tag 
}</span>) ) 
}</div>) 
}</div> </span>) 
}</div> <div className="flex gap-2" > <Button 
}
}className="bg-zion-purple hover:bg-zion-purple-dark text-white" > Buy Now </Button> {
  onRequestQuote && (<Button size="sm" variant="outline" onClick= {
  handleRequestQuote 
}className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" > Request Quote </Button>) 
}</div> </div> </div> </div>) 
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Request Quote
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;                Request Quote;
              </Button>;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;                Request Quote;
              </Button>;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
