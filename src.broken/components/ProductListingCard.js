import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DollarSign } from "lucide-react";

export function ProductListingCard({ listing, view = 'grid', onRequestQuote, detailBasePath = '/marketplace/listing' }) {
  const isGrid = view === 'grid';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(listing.images && listing.images.length > 0
    ? listing.images[0]
    : '/placeholder.svg');
  const [imageError, setImageError] = useState(false);

  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";
    return `${listing.currency || '$'}${listing.price.toLocaleString()}`;
  };

  const handleImageError = () => {
    if (!imageError) {
      setImageSrc('/placeholder.svg');
      setImageError(true);
    }
  };

  const handleViewListing = () => {
    navigate(`${detailBasePath}/${listing.id}`);
  };

  const handleRequestQuote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRequestQuote) {
      onRequestQuote(listing.id);
    } else {
      navigate(`/request-quote?listing=${listing.id}`);
    }
  };

  const imageContainerClasses = isGrid ? 'h-48' : 'h-32 w-48';

  return (
    <div 
      data-testid="equipment-link" 
      className={`bg-slate-800/70 backdrop-blur-md border border-slate-600/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 hover:border-cyan-500/50 transition-all duration-300`} 
      onClick={handleViewListing} 
      tabIndex={0} 
      role="button" 
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleViewListing();
        }
      }}
    >
      {/* Image */}
      <div 
        className={isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'} 
        onClick={handleViewListing}
        role="button" 
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleViewListing();
          }
        }}
      >
        <div className={`relative ${imageContainerClasses}`}>
          <img 
            src={imageSrc} 
            alt={listing.title} 
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          {listing.featured && (
            <div className="absolute top-2 right-2 bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">
            <div className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full text-xs border border-slate-600/30">
              {listing.category}
            </div>
            {listing.rating && (
              <div className="flex items-center text-yellow-400">
                {'★'.repeat(Math.floor(listing.rating))}
                <span className="text-slate-400 text-xs ml-1">({listing.reviewCount})</span>
              </div>
            )}
          </div>
          
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">
            <h3 className="font-semibold text-white mb-2 hover:text-cyan-400 transition-colors text-[clamp(1rem,2.5vw,1.125rem)]">
              {listing.title}
            </h3>
          </div>
          <p className="text-slate-300 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]">
            {listing.description}
          </p>
          
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, idx) => (
                <span key={idx} className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-600/20">
          <div className="text-sm font-medium">
            {listing.price !== null ? (
              <div className="flex items-center text-cyan-400">
                <DollarSign className="h-4 w-4 mr-1"/>
                {formatPrice()}
              </div>
            ) : (
              <span className="text-slate-300">
                {formatPrice()}
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <button 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50" 
              onClick={(e) => {
                e.stopPropagation();
                navigate(`${detailBasePath}/${listing.id}`);
              }} 
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                "Add to Cart"
              )}
            </button>
            {onRequestQuote && (
              <button 
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors" 
                onClick={handleRequestQuote}
              >
                Request Quote
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
