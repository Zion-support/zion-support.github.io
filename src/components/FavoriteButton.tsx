import React, { useState } from "react";
import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  isFavorite?: boolean;
  onToggle?: (isFavorite: boolean) => void;
  className?: string;
}

export function FavoriteButton({ 
  isFavorite = false, 
  onToggle, 
  className = "" 
}: FavoriteButtonProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleClick = () => {
    const newFavorite = !favorite;
    setFavorite(newFavorite);
    onToggle?.(newFavorite);
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart 
        className={`w-5 h-5 ${favorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
      />
    </button>
  );
}