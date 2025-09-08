import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  isFavorited?: boolean;
  onToggle?: (isFavorited: boolean) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function FavoriteButton({
  isFavorited = false,
  onToggle,
  className,
  size = 'md'
}: FavoriteButtonProps) {
  const [favorited, setFavorited] = useState(isFavorited);

  const handleClick = () => {
    const newFavorited = !favorited;
    setFavorited(newFavorited);
    onToggle?.(newFavorited);
  };

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800',
        favorited ? 'text-red-500' : 'text-gray-400 hover:text-red-500',
        className
      )}
      aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        className={cn(
          sizeClasses[size],
          favorited ? 'fill-current' : 'fill-none'
        )}
      />
    </button>
  );
}