import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function FavoriteButton({ itemId, itemType, className = '' }) {
  const { toast } = useToast();
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if item is already favorited on component mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    setIsFavorited(favorites[itemId] === true);
  }, [itemId]);

  const toggleFavorite = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
      
      if (isFavorited) {
        delete favorites[itemId];
        toast({
          title: "Removed from favorites",
          description: `Item removed from your favorites.`
        });
      } else {
        favorites[itemId] = true;
        toast({
          title: "Added to favorites",
          description: `Item added to your favorites.`
        });
      }
      
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorited(!isFavorited);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update favorites. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleFavorite}
      disabled={isLoading}
      className={`p-2 h-auto w-auto transition-all duration-200 ${
        isFavorited 
          ? 'text-red-500 hover:text-red-600 hover:bg-red-500/10' 
          : 'text-zion-slate-light hover:text-red-500 hover:bg-red-500/10'
      } ${className}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart 
        className={`h-4 w-4 transition-all duration-200 ${
          isFavorited ? 'fill-current' : ''
        }`}
      />
    </Button>
  );
}