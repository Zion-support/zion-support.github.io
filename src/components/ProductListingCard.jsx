import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DollarSign } from "lucide-react";

// Simple Badge component to avoid import issues
const Badge = ({ children, variant = 'default', className = '' }) => {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    const variantClasses = {
        default: 'bg-blue-100 text-blue-800',
        outline: 'bg-gray-100 text-gray-800 border border-gray-300'
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
    
    return <span className={classes}>{children}</span>;
};

// Simple Button component to avoid import issues
const Button = ({ children, size = 'md', variant = 'default', onClick, disabled = false, className = '' }) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
        default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500'
    };
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm'
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

// Simple RatingStars component to avoid import issues
const RatingStars = ({ value, count }) => {
    const stars = Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`text-yellow-400 ${i < value ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
        </span>
    ));
    
    return (
        <div className="flex items-center">
            <div className="flex">{stars}</div>
            {count && <span className="ml-1 text-sm text-gray-500">({count})</span>}
        </div>
    );
};

// Simple FavoriteButton component to avoid import issues
const FavoriteButton = ({ itemId, itemType }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    const toggleFavorite = (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };
    
    return (
        <button
            onClick={toggleFavorite}
            className="absolute top-2 left-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
            <span className={`text-lg ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}>
                {isFavorite ? '❤️' : '🤍'}
            </span>
        </button>
    );
};

// Simple Image component to avoid Next.js import issues
const Image = ({ src, alt, className = '', onError }) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            className={className}
            onError={onError}
        />
    );
};

export function ProductListingCard({ listing, view = 'grid', onRequestQuote, detailBasePath = '/marketplace/listing' }) {
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

    return (
        <div 
            data-testid="equipment-link" 
            className={`bg-white/70 backdrop-blur-md border border-gray-200 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:shadow-lg transition-all duration-300`} 
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
            <div className={`${isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'}`}>
                <div className={`relative ${imageContainerClasses}`}>
                    <Image 
                        src={imageSrc} 
                        alt={listing.title} 
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                    {listing.featured && (
                        <Badge className="absolute top-2 right-2 bg-yellow-500 text-white border-none">
                            Featured
                        </Badge>
                    )}
                    <FavoriteButton itemId={listing.id} itemType="product"/>
                </div>
            </div>
            
            {/* Content */}
            <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
                <div>
                    {/* Category & Rating */}
                    <div className="flex justify-between items-center mb-2">
                        <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300">
                            {listing.category}
                        </Badge>
                        {listing.rating && <RatingStars value={listing.rating} count={listing.reviewCount}/>}
                    </div>
                    
                    {/* Title & Description */}
                    <div onClick={handleViewListing} className="block">
                        <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors text-lg">
                            {listing.title}
                        </h3>
                    </div>
                    <p className="text-gray-600 line-clamp-2 mb-4 text-sm">
                        {listing.description}
                    </p>
                    
                    {/* Tags */}
                    {listing.tags && listing.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                            {listing.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                
                {/* Footer with price and button */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200">
                    <div className="text-sm font-medium">
                        {listing.price !== null ? (
                            <div className="flex items-center text-blue-600">
                                <DollarSign className="h-4 w-4 mr-1"/>
                                {formatPrice()}
                            </div>
                        ) : (
                            <span className="text-gray-600">
                                {formatPrice()}
                            </span>
                        )}
                    </div>
                    
                    <div className="flex gap-2">
                        <Button 
                            size="sm" 
                            className="bg-blue-600 hover:bg-blue-700 text-white" 
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`${detailBasePath}/${listing.id}`);
                            }} 
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Loading...
                                </>
                            ) : (
                                "Add to Cart"
                            )}
                        </Button>
                        {onRequestQuote && (
                            <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={handleRequestQuote} 
                                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                                Request Quote
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductListingCard;
