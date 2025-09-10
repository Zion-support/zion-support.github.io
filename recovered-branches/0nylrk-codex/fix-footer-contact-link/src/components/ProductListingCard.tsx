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
    
import { useNavigate } from "react-router-dom",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { ProductListing } from "@/types/listings",;

import { Star, DollarSign } from "lucide-react",;
interface ProductListingCardProps {;
  listing: ProductListing,;'
  view?: 'grid' | 'list',;
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
      // Default behavior if no handler provided;`
      navigate(`/request-quote?listing=${listing && listing.id}`);
    }
  };

      {/* Image */}
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">
              {listing.title}
            </h3>
          </div>"
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
