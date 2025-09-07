<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useNavigate} from "react-router-dom";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ProductListing} from "@/types/listings";
import {Star, DollarSign} from "lucide-react";
<<<<<<< HEAD
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
}
export function ProductListingCard(): any ({ ;
  listing, ;
=======

<<<<<<< HEAD
=======
interface ProductListingCardProps {;
  listing: ProductListing,;

  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
}


export function ProductListingCard(): any ({ ;
  listing, ;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  view = 'grid';
  onRequestQuote;
}: ProductListingCardProps) {;'
  const isGrid = view === 'grid';
  const navigate = useNavigate();
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings";
import { Star, DollarSign } from "lucide-react";
interface ProductListingCardProps {
<<<<<<< HEAD
  listing: ProductListing,
  view?: 'grid' | 'list',
  onRequestQuote?: (id: string) => void
}

export function ProductListingCard({ 
  listing, 
  view = $2;
  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = $2;
  const navigate = useNavigate($2);
  // Get the first image or use a placeholder
  const imageUrl = $2;
  // Format price display
  const formatPrice = $2;
    return `${listing.currency}${listing.price.toLocaleString()}`
  },

  // Handle image loading errors
  const handleImageError = $2;
  // Handle navigating to listing detail
  const handleViewListing = $2;
  // Handle request quote button click
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault($2);
    e.stopPropagation($2);
=======

  listing: ProductListing
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void
}
export function ProductListingCard({
  listing
  view = 'grid';
  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = view === 'grid';
  const navigate = useNavigate();
  // Get the first image or use a placeholder
  const imageUrl = listing.images && listing.images.length > 0
    ? listing.images[0]
    : '/placeholder.svg';
import { ProductListing } from "@/types/listings",
import { Star, DollarSign } from "lucide-react",
=======

<<<<<<< HEAD
import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings";
import { Star, DollarSign } from "lucide-react";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ProductListingCardProps {

interface ProductListingCardProps {;
  listing: ProductListing,;
'
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
}'
  view = 'grid';
  onRequestQuote;
}: ProductListingCardProps) {;'
  const isGrid = view === 'grid';
  const navigate = useNavigate();

  view?: 'grid' | 'list',
  onRequestQuote?: (id: string) => void;
}

<<<<<<< HEAD
=======
export function ProductListingCard({ 
<<<<<<< HEAD
  listing, 
  view = 'grid',

  listing, ;
  view = 'grid';
  listing, 
  view = 'grid',
=======

  listing, 
  view = 'grid',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = view === 'grid',
  const navigate = useNavigate(),

<<<<<<< HEAD
  // Get the first image or use a placeholder

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";

    return `${listing.currency}${listing.price.toLocaleString()}`

<<<<<<< HEAD
=======
import { use_navigate } from './react-router-dom';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { ProductListing } from '@/types / listings';
import { Star, DollarSign } from './lucide-react';
interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid' | 'list';

<<<<<<< HEAD
    
  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing",
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {

    e.currentTarget.src = '/placeholder.svg'
  }
  // Handle navigating to listing detail;
  const handleViewListing = () => {}`
    navigate(`/listing/${listing.id}`)
<<<<<<< HEAD
  }

    if (onRequestQuote) {

      onRequestQuote(listing.id)
    } else {}
      // Default behavior if no handler provided;`
      navigate(`/request-quote?listing=${listing.id}`)
=======
  },
  
  // Handle request quote button click
  const handleRequestQuote = (e: React.MouseEvent) => {
    e.preventDefault(),
    e.stopPropagation(),
    
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
    if (onRequestQuote) {
      onRequestQuote(listing.id)
    } else {
      // Default behavior if no handler provided
<<<<<<< HEAD
      navigate(`/request-quote?listing = $2;
=======
      navigate(`/request-quote?listing=${listing.id}`)
<<<<<<< HEAD
    }
  }
>>>>>>> merged-prs-20250907-203621
  return (
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useNavigate } from "react-router-dom",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { ProductListing } from "@/types/listings",;

import { Star, DollarSign } from "lucide-react",;
interface ProductListingCardProps {;
  listing: ProductListing,;'
  view?: 'grid' | 'list',;
<<<<<<< HEAD
=======

      navigate (`/request - quote?listing=${listing.id}`);
    }
  }

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Get the first image or use a placeholder;
  const imageUrl = listing && listing.images && listing && listing.images.length > 0 ;
    ? listing && listing.images[0] ;
    : '/placeholder && placeholder.svg';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Format price display;
  const formatPrice = () => {;
    if (listing && listing.price === null) return "Custom pricing";
    return `${listing && listing.currency}${listing && listing.price.toLocaleString()}`;
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Handle image loading errors;
  const handleImageError = (e: React && React.SyntheticEvent<HTMLImageElement>) => {;
    e && e.currentTarget.src = '/placeholder && placeholder.svg';
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Handle navigating to listing detail;
  const handleViewListing = () => {;

    navigate(`/listing/${listing && listing.id}`);
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Handle request quote button click;
  const handleRequestQuote = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (onRequestQuote) {;
      onRequestQuote(listing && listing.id);
    } else {;
      // Default behavior if no handler provided;`
      navigate(`/request-quote?listing=${listing && listing.id}`);
    }
  };
<<<<<<< HEAD
=======

  return (

    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;

        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>;
          <img;
            src={imageUrl} 
            alt={listing && listing.title}

      {/* Image */}
"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />;
          {listing && listing.featured && (;"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;

<<<<<<< HEAD
      {/* Image */}

{/* Image */}
=======


<<<<<<< HEAD
      {/* Image */}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Image */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className={isGrid ? 'block w-full' : 'block w-1/3'} onClick={handleViewListing}>;
        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>;
          <img
            src={imageUrl} 
            alt={listing && listing.title}
<<<<<<< HEAD
=======

<<<<<<< HEAD
      {/* Image */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            className="w-full h-full object-cover"
            onError={handleImageError}
          />;
          {listing && listing.featured && (;

            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
            </Badge>;
          )}
<<<<<<< HEAD
        </div>;
      </div>;
=======

<<<<<<< HEAD
=======
        </div>;
      </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {/* Category & Rating */}
<<<<<<< HEAD

            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">
=======
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
              </span>
              </span>;
            )}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={(e) => {
<<<<<<< HEAD
                e.stopPropagation($2);
                navigate(`/listing/${listing.id}`)
              }}
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  return (
    <div className={`bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden flex ${is_grid ? 'flex - col' : 'flex - row'} cursor - pointer`} on_click={handleViewListing}>;
      {/* Image */}
      <div className={is_grid ? 'block w - full' : 'block w - 1/3'} on_click={handleViewListing}>;
        <div className={`relative ${is_grid ? 'h - 48' : 'h - full'}`}>;
          <img;
            src={image_url}
            alt={listing.title}
            className="w - full h - full object - cover";
            on_error={handleImageError}
          />;
          {listing.featured && (
            <Badge className="absolute top - 2 right - 2 bg - zion - purple text - white border - none">;
              Featured;
            </Badge>)}
        </div>;
      </div>;
      {/* Content */}
      <div className={`flex flex - col justify - between ${is_grid ? 'p - 4 flex - 1' : 'p - 4 flex - 1'}`}>;
        <div>;
          {/* Category & Rating */}
          <div className="flex justify - between items - center mb - 2">;
            <Badge variant="outline" className="bg - zion - blue - light / 20 text - zion - slate - light border - zion - blue - light">;
              {listing.category}
            </Badge>;
            {listing.rating && (
              <div className="flex items - center text - zion - slate - light">;
                <Star className="h - 4 w - 4 fill - zion - cyan text - zion - cyan mr - 1" />;
                <span>{listing.rating}</span>;
                {listing.review_count && (
                  <span className="text - xs ml - 1">({listing.review_count})</span>)}
              </div>)}
          </div>;

          </div>;

          {/* Title & Description */}
          <div on_click={handleViewListing} className="block">;
            <h3 className="text - lg font - semibold text - white mb - 2 hover:text - zion - cyan transition - colors">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              {listing.title}
            </h3>
          </div>"
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">
            {listing.description}
<<<<<<< HEAD
          </p>
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && ("
            <div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, idx) => (
                <span;
                  key={idx}"
                  className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Footer with price and button */}"
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">"
          <div className="text-sm font-medium">
            {listing.price !== null ? ("
              <div className="flex items-center text-zion-purple">"
                <DollarSign className="h-4 w-4 mr-1" />
                {formatPrice()}
              </div>
            ) : ("
              <span className="text-zion-slate-light">
                {formatPrice()}

          {/* Title & Description */}"
          <div onClick={handleViewListing} className="block">;"

=======
          </div>;
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">;
              {listing && listing.title}
            </h3>;
          </div>;"
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">;
            {listing && listing.description}
          </p>;
          {/* Tags */}
          {listing && listing.tags && listing && listing.tags.length > 0 && (;"
            <div className="flex flex-wrap gap-1 mb-4">;
              {listing && listing.tags.map((tag, idx) => (;
                <span;
                  key={idx} "
                  className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full">;
                  {tag}
                </span>;
              ))}
            </div>;
          )}
<<<<<<< HEAD

        {/* Footer with price and button */}"
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;"
=======
        </div>;
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className="text-sm font-medium">;
            {listing && listing.price !== null ? (;"
              <div className="flex items-center text-zion-purple">;"
                <DollarSign className="h-4 w-4 mr-1" />;
                {formatPrice()}
              </div>;
            ) : (;"

              <span className="text-zion-slate-light">;
                {formatPrice()}
<<<<<<< HEAD

            )}
=======
                e.stopPropagation();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                e.stopPropagation(),
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                navigate(`/listing/${listing.id}`)

>>>>>>> merged-prs-20250907-203621
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              Buy Now;
            </Button>
            {onRequestQuote && (
<<<<<<< HEAD

=======
<<<<<<< HEAD
              </span>;
            )}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Button
                size="sm"
                variant="outline"
                onClick={handleRequestQuote}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Request Quote;
              </Button>;

            )}
          </div>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
=======
  );
=======
          </p>;
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className="flex flex - wrap gap - 1 mb - 4">;
              {listing.tags.map ((tag, idx) => (
                <span;
                  key={idx}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  className="text - xs text - zion - slate bg - zion - blue - light / 20 px - 2 py - 1 rounded - full";

                >;
                </span>))}

              </span>)}
          <div className="flex gap - 2">;"
              size="sm";"
              on_click={(e) => {

                className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
              >;
                Request Quote;
              </Button>)}
          </div>;
        </div>;
      </div>;
    </div>);
<<<<<<< HEAD

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
return (<div className= {`;
  `bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex $ {"
  isGrid ? 'flex-col' : 'flex-row`;
}cursor-pointer` 
}onClick= {
  handleViewListing;
}> {
}<div className= {
  isGrid ? 'block w-full' : 'block w-1/3
}> <div className= {
</div>)
}> <img Featured ) 
</img>
}</div> </div> {
}<div className= {`;
  `flex flex-col justify-between $ {
  isGrid ? 'p-4 flex-1' : 'p-4 flex-1`;
}` 
}> <div>) 
}</div>) 
}</div> <span key= {
  idx;
}className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full" > {"
}</span>) ) 
}</div> </span>) "
}</div> <div className="flex gap-2" > <Button;"
}className="bg-zion-purple hover:bg-zion-purple-dark text-white" > Buy Now  {""
  onRequestQuote && (<Button size="sm" variant="outline" onClick= {"
  handleRequestQuote;)"
}className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" > Request Quote )"
}</div> </div> </div> </div>) 
    </div>"`;
pr-12325
              </Button>
          </div>
        </div>
      </div>
    </div>
  )

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
}