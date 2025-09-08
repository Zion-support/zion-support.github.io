import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/hooks/use-toast';

interface FavoriteButtonProps {
  itemId: string;
  itemType: 'product' | 'service' | 'listing';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'outline';
}

export function FavoriteButton({ 
  itemId, 
  itemType, 
  className = '',
  size = 'md',
  variant = 'ghost'
}: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Load favorite status from localStorage on mount
  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorited(favorites.includes(itemId));
  }, [itemId]);

  const getFavorites = (): string[] => {
    try {
      const stored = localStorage.getItem(`favorites_${itemType}`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  const saveFavorites = (favorites: string[]) => {
    try {
      localStorage.setItem(`favorites_${itemType}`, JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorites:', error);
    }
  };

  const handleToggleFavorite = async () => {
    if (isLoading) return;

    setIsLoading(true);
    
    try {
      const favorites = getFavorites();
      let newFavorites: string[];
      let newIsFavorited: boolean;

      if (isFavorited) {
        newFavorites = favorites.filter(id => id !== itemId);
        newIsFavorited = false;
        toast({
          title: 'Removed from favorites',
          description: 'Item has been removed from your favorites.',
        });
      } else {
        newFavorites = [...favorites, itemId];
        newIsFavorited = true;
        toast({
          title: 'Added to favorites',
          description: 'Item has been added to your favorites.',
        });
      }

      saveFavorites(newFavorites);
      setIsFavorited(newIsFavorited);
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
      toast({
        title: 'Error',
        description: 'Failed to update favorites. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={handleToggleFavorite}
      disabled={isLoading}
      className={`${sizeClasses[size]} ${className} ${
        isFavorited ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-red-500'
      } transition-colors`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart 
        className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''} ${
          isLoading ? 'animate-pulse' : ''
        }`} 
      />
    </Button>
  );
}