import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  itemId: string;
  itemType: 'product' | 'talent' | 'equipment' | 'service';
  className?: string;
  initialFavorited?: boolean;
  onToggle?: (favorited: boolean) => void;
}

export function FavoriteButton({ 
  itemId, 
  itemType, 
  className = '', 
  initialFavorited = false,
  onToggle 
}: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(initialFavorited);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const newFavorited = !isFavorited;
      setIsFavorited(newFavorited);
      
      if (onToggle) {
        onToggle(newFavorited);
      }
      
      // Here you would typically make an API call to update the favorite status
      // await api.toggleFavorite(itemId, itemType, newFavorited);
      
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
      // Revert the state change on error
      setIsFavorited(isFavorited);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isLoading}
      className={cn(
        'group relative p-2 rounded-full transition-all duration-300 hover:scale-110',
        'focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        className={cn(
          'w-5 h-5 transition-all duration-300',
          isFavorited
            ? 'fill-red-500 text-red-500 group-hover:fill-red-600 group-hover:text-red-600'
            : 'text-zion-slate-light group-hover:text-red-500 group-hover:fill-red-500/20'
        )}
      />
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </button>
  );
}