import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  itemId: string;
  initialFavorited?: boolean;
  onToggle?: (itemId: string, isFavorited: boolean) => void;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  itemId,
  initialFavorited = false,
  onToggle,
  className = '',
}) => {
  const [isFavorited, setIsFavorited] = useState(initialFavorited);

  const handleToggle = () => {
    const newFavorited = !isFavorited;
    setIsFavorited(newFavorited);
    onToggle?.(itemId, newFavorited);
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full transition-colors ${
        isFavorited
          ? 'text-red-500 hover:text-red-600 bg-red-50'
          : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
      } ${className}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        size={20}
        fill={isFavorited ? 'currentColor' : 'none'}
        className="transition-all"
      />
    </button>
  );
};

export default FavoriteButton;