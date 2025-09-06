
;
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProductListing } from '@/types/listings';
import { Star, DollarSign } from 'lucide-react';
  view = 'grid';
  onRequestQuote;
}: ProductListingCardProps) {const isGrid = view === 'grid';
  const navigate = useNavigate()import { useNavigate } from "react-router-dom",import { Badge } from "@/components/ui/badge",import { Button } from "@/components/ui/button",import { ProductListing  } from '@/types/listings';
import { Star, DollarSign  } from 'lucide-react';
interface ProductListingCardProps  {interface ProductListingCardProps  {listing: ProductListing,view?: 'grid' | 'list';
import React from 'react';
import {useNavigate} from "react-router-dom";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ProductListing} from "@/types/listings";
import {Star, DollarSign} from "lucide-react";

interface ProductListingCardProps {;
  listing: ProductListing,;

  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
}


export function ProductListingCard(): any ({ ;
  listing, ;

  view = 'grid';
  onRequestQuote;
}: ProductListingCardProps) {;
  const isGrid = view === 'grid';
  const navigate = useNavigate();


import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings";
import { Star, DollarSign } from "lucide-react";
interface ProductListingCardProps {

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
  // Get the first image or use a placeholder
  const imageUrl = listing.images && listing.images.length > 0
    ? listing.images[0]
    : '/placeholder.svg';
import { ProductListing } from "@/types/listings",
import { Star, DollarSign } from "lucide-react",


interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid' | 'list',
  onRequestQuote?: (id: string) => void
}

export function ProductListingCard({ 

  listing, 
  view = 'grid',

  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = view === 'grid',
  const navigate = useNavigate(),
  
  // Get the first image or use a placeholder
  const imageUrl = listing.images && listing.images.length > 0 
    ? listing.images[0] 
    : '/placeholder.svg',
    

  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`

import { use_navigate } from './react-router-dom';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { ProductListing } from '@/types / listings';
import { Star, DollarSign } from './lucide-react';
interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid' | 'list';
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
  },

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
    

    if (onRequestQuote) {
      onRequestQuote(listing.id)
    } else {
      // Default behavior if no handler provided
      navigate(`/request-quote?listing=${listing.id}`)

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
export function ProductListingCard(): any ({listing,view = 'grid';
  onRequestQuote;
}: ProductListingCardProps) {const isGrid = view === 'grid';
  const navigate  = useNavigate()interface ProductListingCardProps  {listing: ProductListing,view?: 'grid' | 'list',onRequestQuote?: (id: string) => void;
}export function ProductListingCard() {const isGrid = view === 'grid',const navigate = useNavigate(),// Get the first image or use a placeholder;
  // Format price display;
  const formatPrice = () => {if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`;
  // Handle image loading errors;
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {e.currentTarget.src = '/placeholder.svg';
  }
  // Handle navigating to listing detail;
  const handleViewListing = () => {navigate(`/listing/${listing.id}`)}
  // Handle request quote button click;
  const handleRequestQuote = (e: React.MouseEvent) => {},// Get the first image or use a placeholder  // Format price display;
  const formatPrice = () => {if (listing.price === null) return "Custom pricing";
    return `${listing.currency}${listing.price.toLocaleString()}`  },// Handle image loading errors;
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {e.currentTarget.src = '/placeholder.svg';
  },// Handle navigating to listing detail;
  const handleViewListing = () => {navigate(`/listing/${listing.id}`)},// Handle request quote button click;
  const handleRequestQuote = (e: React.MouseEvent) => {e.preventDefault(),e.stopPropagation(),if (onRequestQuote) {onRequestQuote(listing.id)} else {// Default behavior if no handler provided;
      navigate(`/request-quote?listing=${listing.id}`)import { ProductListing } from "@/types/listings",import { Star, DollarSign } from "lucide-react",interface ProductListingCardProps  {listing: ProductListing,view?: 'grid' | 'list'} else {onRequestQuote?: (id: string) => void;
}
export /**;
 * ProductListingCard - Function description;
 */;
function ProductListingCard() {const is_grid = view === 'grid';
  const navigate  = use_navigate ()// Get the first image or use a placeholder;
  const image_url = listing.images && listing.images.length > 0;
    ? listing.images[0];
    : '/placeholder.svg';// Format price display;
  const format_price = () =>: any {// Check condition;
if (return "Custom pricing") {$2;
}
    return `${listing.currency}${listing.price.toLocaleString ()}`;
  }// Handle image loading errors;
  const handleImageError = (e: React.SyntheticEvent < HTMLImageElement>) =>: any {e.current_target.src = '/placeholder.svg';
  }// Handle navigating to listing detail;
  const handleViewListing = () =>: any {navigate (`/listing/${listing.id}`)}// Handle request quote button click;
  const handleRequestQuote = (e: React.MouseEvent) =>: any {e.prevent_default ()e.stop_propagation (),// Check condition;
if ( {) {$2;
}
      onRequestQuote (listing.id)// Default behavior if no handler provided;
      navigate (`/request - quote?listing=${listing.id}`)}
  }
      onRequestQuote (listing.id);
    } else {
      // Default behavior if no handler provided;
      navigate (`/request - quote?listing=${listing.id}`);
    }
  }


  // Get the first image or use a placeholder;
  const imageUrl = listing && listing.images && listing && listing.images.length > 0 ;
    ? listing && listing.images[0] ;
    : '/placeholder && placeholder.svg';
  // Format price display;
  const formatPrice = () => {if (listing && listing.price === null) return "Custom pricing";
    return `${listing && listing.currency}${listing && listing.price.toLocaleString()}`;
  }// Handle image loading errors;
  const handleImageError = (e: React && React.SyntheticEvent<HTMLImageElement>) => {e && e.currentTarget.src = '/placeholder && placeholder.svg';
  }// Handle navigating to listing detail;
  const handleViewListing = () => {navigate(`/listing/${listing && listing.id}`)}// Handle request quote button click;
  const handleRequestQuote = (e: React && React.MouseEvent) => {e && e.preventDefault()e && e.stopPropagation(),// Format price display;
  const formatPrice = () => {if (listing && listing.price === null) return "Custom pricing";
    return `${listing && listing.currency}${listing && listing.price.toLocaleString()}`;
}// Handle navigating to listing detail;
  const handleViewListing = () => {navigate(`/listing/${listing && listing.id}`)}if (onRequestQuote) {onRequestQuote(listing && listing.id)} else {// Default behavior if no handler provided;
      navigate(`/request-quote?listing=${listing && listing.id}`)}
  }return (<div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;{/* Image */}{/* Image */}
      <div className={isGrid ? 'block w-full' : 'block w-1/3'} onClick={handleViewListing}>;
        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>;
          <img;
            src={imageUrl}alt={listing && listing.title}
      {/* Image */}
            className="w-full h-full object-cover";
            onError={handleImageError}
          />;
          {listing && listing.featured && (<Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
            </Badge>;
          )}</div>;
      </div>;{/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>;
        <div>;

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


  return (
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;



      {/* Image */}

      {/* Image */}
      <div className={isGrid ? 'block w-full' : 'block w-1/3'} onClick={handleViewListing}>;
        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>;
          <img
            src={imageUrl} 
            alt={listing && listing.title}

      {/* Image */}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />;
          {listing && listing.featured && (;
            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
            </Badge>;
          )}

        </div>;
      </div>;


      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">;
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">;
              {listing && listing.category}
            </Badge>;
            {listing && listing.rating && (<div className="flex items-center text-zion-slate-light">;
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />;
                <span>{listing && listing.rating}</span>;
                {listing && listing.reviewCount && (<span className="text-xs ml-1">({listing && listing.reviewCount})</span>;
                )}
              </div>;
            )}onRequestQuote?: (id: string) => void;
}export function ProductListingCard() {const isGrid = view === 'grid';
  const navigate = useNavigate()// Get the first image or use a placeholder;
  const imageUrl = listing.images && listing.images.length > 0;
    ? listing.images[0];
    : '/placeholder.svg',// Format price display;
  const formatPrice = () => {if (listing.price === null) return "Custom pricing",return `${listing.currency}${listing.price.toLocaleString()}`;
  },// Handle image loading errors;
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {e.currentTarget.src = '/placeholder.svg';
  },// Handle navigating to listing detail;
  const handleViewListing = () => {navigate(`/listing/${listing.id}`)},// Handle request quote button click;
  const handleRequestQuote = (e: React.MouseEvent) => {e.preventDefault(),e.stopPropagation(),if (onRequestQuote) {onRequestQuote(listing.id)} else {// Default behavior if no handler provided;
      navigate(`/request-quote?listing=${listing.id}`)}
  }return (<div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;
      {/* Image */}
      <div className={isGrid ? 'block w-full' : 'block w-1/3'} onClick={handleViewListing}>;
        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>;
          <img;
            src={imageUrl}
            alt={listing.title}
            className="w-full h-full object-cover";
            onError={handleImageError}
          />;
          {listing.featured && (<Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
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
        </div>;
      </div>;
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>;
        <div>;
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">;
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">;
              {listing.category}
            </Badge>;
            {listing.rating && (<div className="flex items-center text-zion-slate-light">;
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />;
                <span>{listing.rating}</span>;
                {listing.reviewCount && (<span className="text-xs ml-1">({listing.reviewCount})</span>;
                )}
              </div>;
            )}
          </div>;
          </div>;{/* Image */}
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">;
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">;
              {listing.title}
            </h3>;
          </div>;
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">;
            {listing.description}
          </p>;
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (<div className="flex flex-wrap gap-1 mb-4">;
              {listing.tags.map((tag, idx) => (<span;
                  key={idx}
                  className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full";
                >;
                  {tag}
                </span>;
              ))}
            </div>;
          )}
        </div>;
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;
          <div className="text-sm font-medium">;
            {listing.price !== null ? (<div className="flex items-center text-zion-purple">;
                <DollarSign className="h-4 w-4 mr-1" />;
                {formatPrice()}
              </div>;
            ) : (<span className="text-zion-slate-light">;
                {formatPrice()}
              </span>;
              </span>;
            )}
          </div>;
          <div className="flex gap-2">;
            <Button;
              size="sm";
              onClick={(e) => {return (<div className={`bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden flex ${is_grid ? 'flex - col' : 'flex - row'} cursor - pointer`} on_click={handleViewListing}>;
      {/* Image */}
      <div className={is_grid ? 'block w - full' : 'block w - 1/3'} on_click={handleViewListing}>;
        <div className={`relative ${is_grid ? 'h - 48' : 'h - full'}`}>;
          <img;
            src={image_url}
            alt={listing.title}
            className="w - full h - full object - cover";
            on_error={handleImageError}
          />;
          {listing.featured && (<Badge className="absolute top - 2 right - 2 bg - zion - purple text - white border - none">;
            className="w - full h - full object-cover";
            on_error={handleImageError}
          />;
          {listing.featured && (<Badge className="absolute top - 2 right - 2 bg - zion - purple text - white border-none">;
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
            {listing.rating && (<div className="flex items - center text - zion - slate - light">;
                <Star className="h - 4 w - 4 fill - zion - cyan text - zion - cyan mr - 1" />;
                <span>{listing.rating}</span>;
                {listing.review_count && (<span className="text - xs ml - 1">({listing.review_count})</span>)}
              </div>)}
          </div>;</div>;e.stopPropagation(){/* Title & Description */}
          <div on_click={handleViewListing} className="block">;
            <h3 className="text - lg font - semibold text - white mb - 2 hover:text - zion - cyan transition - colors">;
              {listing.title}
            </h3>;
          </div>;
          <p className="text - sm text - zion - slate line - clamp - 2 mb - 4">;
            {listing.description}</div>;<div className="flex justify - between items - center mb-2">;
            <Badge variant="outline" className="bg - zion - blue - light / 20 text - zion - slate - light border - zion - blue-light">;
              {listing.category}
            </Badge>;
            {listing.rating && (<div className="flex items - center text - zion - slate-light">;
                <Star className="h - 4 w - 4 fill - zion - cyan text - zion - cyan mr-1" />;
                <span>{listing.rating}</span>;
                {listing.review_count && (<span className="text - xs ml-1">({listing.review_count})</span>)}
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

                e.stopPropagation();

          {/* Title & Description */}
          <div on_click={handleViewListing} className="block">;
            <h3 className="text - lg font - semibold text - white mb - 2 hover:text - zion - cyan transition - colors">;
              {listing.title}
            </h3>;
          </div>;
          <p className="text - sm text - zion - slate line - clamp - 2 mb-4">;
            {listing.description}{/* Title & Description */}
          <p className="text - sm text - zion - slate line - clamp - 2 mb - 4">;
            {listing.description}

          </div>;

          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">;
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">;
              {listing && listing.title}
            </h3>;
          </div>;
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">;
            {listing && listing.description}
          </p>;{/* Tags */}
          {listing && listing.tags && listing && listing.tags.length > 0 && (<div className="flex flex-wrap gap-1 mb-4">;
              {listing && listing.tags.map((tag, idx) => (<span;
                  key={idx}className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full">;{tag}
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
          )}</div>;{/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;
          <div className="text-sm font-medium">;
            {listing && listing.price !== null ? (<div className="flex items-center text-zion-purple">;
                <DollarSign className="h-4 w-4 mr-1" />;
                {formatPrice()}
              </div>;
            ) : (<span className="text-zion-slate-light">;
                {formatPrice()}
            )}e.stopPropagation(),e.stopPropagation()e.stopPropagation(),e.stopPropagation(),navigate(`/listing/${listing.id}`)</div>;                navigate(`/listing/${listing.id}`)}}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (</div>;<div className="flex gap-2">;
            <Button;
              size="sm";
              onClick={(e) => {e && e.stopPropagation()navigate(`/listing/${listing && listing.id}`)}}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (<Button;
                size="sm";
                variant="outline";
                onClick={handleRequestQuote}interface ProductListingCardProps  {listing:ProductListing,view?:'grid' | 'list',onRequestQuote?:(id:string) => void;
}export function ProductListingCard() {const isGrid = view === 'grid';
  const navigate  = useNavigate(),// Get the first image or use a placeholder;
  const imageUrl = listing.images && listing.images.length > 0 ;
    ? listing.images[0] ;
    :'/placeholder.svg',// Format price display;
  const formatPrice = () => {if (listing.price === null) return "Custom pricing",return `${listing.currency}${listing.price.toLocaleString()}`},// Handle image loading errors;
  const handleImageError = (e:React.SyntheticEvent<HTMLImageElement>) => {e.currentTarget.src = '/placeholder.svg';
  },// Handle navigating to listing detail;
  const handleViewListing = () => {navigate(`/listing/${listing.id}`)},// Handle request quote button click;
  const handleRequestQuote = (e:React.MouseEvent) => {e.preventDefault(),e.stopPropagation(),if (onRequestQuote) {onRequestQuote(listing.id)} else {// Default behavior if no handler provided;
      navigate(`/request-quote?listing=${listing.id}`)}
  },return (<div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' :'flex-row'} cursor-pointer`} onClick={handleViewListing}>;
      {/* Image */}
      <div className={isGrid ? 'block w-full' :'block w-1/3'} onClick={handleViewListing}>;
        <div className={`relative ${isGrid ? 'h-48' :'h-full'}`}>;
          <img ;
            src={imageUrl}alt={listing.title}
            className="w-full h-full object-cover";
            onError={handleImageError}
          />;
          {listing.featured && (<Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
            </Badge>;
          )}
        </div>;
      </div>;{/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' :'p-4 flex-1'}`}>;
        <div>;
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">;
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">;
              {listing.category}
            </Badge>;
            {listing.rating && (<div className="flex items-center text-zion-slate-light">;
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />;
                <span>{listing.rating}</span>;
                {listing.reviewCount && (<span className="text-xs ml-1">({listing.reviewCount})</span>;
                )}
              </div>;            )}
          </div>;{/* Title & Description */}
          <div onClick={handleViewListing} className="block">;
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">;
              {listing.title}
            </h3>;
          </div>;
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">;            {listing.description}
          </p>;{/* Tags */}
          {listing.tags && listing.tags.length > 0 && (<div className="flex flex-wrap gap-1 mb-4">;
              {listing.tags.map((tag, idx) => (<span ;
                  key={idx}className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full";
                >;
                  {tag}
                </span>;              ))}
            </div>;
          )}
        </div>;{/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;
          <div className="text-sm font-medium">;
            {listing.price !== null ? (<div className="flex items-center text-zion-purple">;
                <DollarSign className="h-4 w-4 mr-1" />;
                {formatPrice()}
              </div>;
            ) :(<span className="text-zion-slate-light">;
                {formatPrice()}
              </span>;
            )}
          </div>;<div className="flex gap-2">;
            <Button ;
              size="sm" ;
              onClick={(e) => {e.stopPropagation(),navigate(`/listing/${listing.id}`)}}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            >;
              Buy Now;
            </Button>;{onRequestQuote && (<Button ;
                size="sm";
                variant="outline" ;
                onClick={handleRequestQuote}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
              >;Request Quote;
              </Button>;Request Quote;

        </div>;


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


                e.stopPropagation(),


                e.stopPropagation();

                e.stopPropagation(),


                e.stopPropagation(),
                navigate(`/listing/${listing.id}`)
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              Buy Now
            </Button>
            {onRequestQuote && (
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
    </div>;)</p>;
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (<div className="flex flex - wrap gap - 1 mb - 4">;
              {listing.tags.map ((tag, idx) => (<span;
    </div>;
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
            {listing.price !== null ? (<div className="flex items - center text - zion - purple">;
                <DollarSign className="h - 4 w - 4 mr - 1" />;
                {format_price ()}
              </div>) : (<span className="text - zion - slate - light">;
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
              on_click={(e) => {e.stop_propagation ()navigate (`/listing/${listing.id}`)}}
              on_click={(e) => {
                e.stop_propagation ();
                navigate (`/listing/${listing.id}`);
              }}
              className="bg - zion - purple hover:bg - zion - purple - dark text - white";
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (<Button;
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
    </div>)),interface ProductListingCardProps  {listing: ProductListing;
view?: 'grid' | 'list';
onRequestQuote?: (id: string) => void;
}export function ProductListingCard () {const isGrid = view === 'grid';
const navigate = useNavigate ()//Format price display;
}}
}return (<div className= {`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex $ {isGrid ? 'flex-col' : 'flex-row';
}cursor-pointer`;
}onClick= {handleViewListing;
}> {/* Image */;
}<div className= {isGrid ? 'block w-full' : 'block w-1/3';
}onClick= {handleViewListing;
}> <div className= {`relative $ {isGrid ? 'h-48' : 'h-full';
}`;
}> <img Featured </Badge>)}</div> </div> {/* Content */;
}<div className= {`flex flex-col justify-between $ {isGrid ? 'p-4 flex-1' : 'p-4 flex-1';
}`;
}> <div>)}</div>)}</div> <span key= {idx;
}className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full" > {tag;
}</span>) )}</div>)}</div> </span>)}</div> <div className="flex gap-2" > <Button;
}
}className="bg-zion-purple hover:bg-zion-purple-dark text-white" > Buy Now </Button> {onRequestQuote && (<Button size="sm" variant="outline" onClick= {handleRequestQuote;
}className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" > Request Quote </Button>)}</div> </div> </div> </div>)className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
              >;
                Request Quote;
              </Button>;
            )}
          </div>;
        </div>;
      </div>;
    </div>;
  )}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;                Request Quote;
              </Button>;}
    </div>);
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
}
