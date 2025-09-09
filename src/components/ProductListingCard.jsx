import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DollarSign } from "lucide-react";
import { RatingStars } from "@/components/RatingStars";

import Image from 'next/image'; // Import next/image
function ProductListingCardComponent({ listing, view = 'grid', onRequestQuote, detailBasePath = '/marketplace/listing' }) {
    const isGrid = view === 'grid';
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState(
        listing.images && listing.images.length > 0
            ? listing.images[0]
            : '/placeholder.svg'
    );
    const [imageError, setImageError] = useState(false);

    const formatPrice = () => {
        if (listing.price === null) return "Custom pricing";
        return `${listing.currency}${listing.price.toLocaleString()}`;
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
    return (<div data-testid="equipment-link" className={`bg-card/70 backdrop-blur-md border border-primary/10 sm:border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:animate-glowing-border transition-all duration-300`} onClick={handleViewListing} tabIndex={0} role="button" onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleViewListing();
            }
        }}>
      {/* Image */}
      <div className={isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'} onClick={handleViewListing} // Keep existing onClick for navigation
     role="button" tabIndex={-1} // Remove from tab order as parent is focusable
     onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleViewListing();
            }
        }}>
        <div className={`relative ${imageContainerClasses}`}> {/* Ensure this container has dimensions */}
          <Image src={imageSrc} alt={listing.title} layout="fill" objectFit="cover" onError={handleImageError} priority={false} // Assuming these are not LCP images
     sizes={isGrid ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "192px"} // 192px is w-48
    />
          {listing.featured && (<Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none">
              Featured
            </Badge>)}

        </div>
    );
}

export default ProductListingCard;
