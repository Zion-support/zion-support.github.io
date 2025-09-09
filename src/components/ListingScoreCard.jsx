import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

export function ListingScoreCard({ 
    title, 
    description, 
    category, 
    image, 
    tags, 
    author, 
    aiScore, 
    rating, 
    reviewCount,
    onClick 
}) {
    return (
        <div 
            className="bg-white/10 backdrop-blur-md border border-zion-blue-light rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-all duration-300"
            onClick={onClick}
        >
            {/* Header with AI Score */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-zion-cyan" />
                    <span className="text-sm text-zion-slate-light">AI Match</span>
                </div>
                <div className="bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full text-sm font-medium">
                    {aiScore || 85}%
                </div>
            </div>

            {/* Title and Category */}
            <h3 className="font-semibold text-white mb-2 line-clamp-2">{title}</h3>
            <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-zion-purple/20 text-zion-cyan px-2 py-1 rounded-full">
                    {category}
                </span>
            </div>

            {/* Description */}
            <p className="text-zion-slate-light text-sm mb-3 line-clamp-2">
                {description}
            </p>

            {/* Tags */}
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                    {tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-zion-blue/50 text-zion-slate-light px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Footer with Rating and Author */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-white">{rating || 4.5}</span>
                    <span className="text-xs text-zion-slate-light">({reviewCount || 25})</span>
                </div>
                {author && (
                    <span className="text-xs text-zion-slate-light">by {author}</span>
                )}
            </div>
        </div>
    );
}