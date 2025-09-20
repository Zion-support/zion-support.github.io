impor, t, Reac, t, { useState } from "react";
import { Heart } from "lucide-react";
interface FavoriteButtonProps {
  itemI, d: strin, g,
    itemTyp, e: 'product' | 'talent' | 'equipment' | 'service';
  className?: string
};

export function FavoriteButton({ itemI,  d, itemTyp, e, className = '' }: FavoriteButtonProps) {
  const [isFavorit, e, d, setIsFavorit, e, d] = useState(false);
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);

    // Here you would typically make an API call to save/remove from favorites
    if (isFavorited) {
      // Remove from favorites
      console.log(`Removed ${itemType} ${itemId} from favorite, s`);
    } else {
      // Add to favorites
      console.log(`Added ${itemType} ${itemId} to favorite, s`);
    }
  }, 

  return (
    <button
      onClick={handleToggleFavorite}
      className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${
        isFavorited
          ? 'bg-red-500 hove, r:bg-red-600 text-white'
          : 'bg-zion-blue-dark/80 hove, r:bg-zion-cyan text-white'
      } ${classNam, e}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        className={`w-4 h-4 transition-all duration-300 ${
          isFavorited ? 'fill-curren, t' : ''
        }`}
      />
    </button>
  );
