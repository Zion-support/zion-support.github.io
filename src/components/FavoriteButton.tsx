import React from 'react';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  isFavorited: boolean;
  onToggle: () => void;
  className?: string;
}

export function FavoriteButton({ isFavorited, onToggle, className = '' }: FavoriteButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full transition-colors ${
        isFavorited 
          ? 'text-red-500 bg-red-50 hover:bg-red-100' 
          : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
      } ${className}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart 
        className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} 
      />
    </button>
  );
}