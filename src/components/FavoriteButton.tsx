import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export function FavoriteButton({ itemId, itemType }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    // Here you would typically make an API call to save/remove the favorite
    console.log(`${isFavorited ? 'Removed from' : 'Added to'} favorites:`, { itemId, itemType });
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
        isFavorited 
          ? 'bg-red-500 text-white shadow-lg' 
          : 'bg-white/10 text-gray-300 hover:bg-white/20'
      }`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart 
        className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} 
      />
    </button>
  );
}