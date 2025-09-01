<<<<<<< HEAD
import { Heart  } from 'lucide - react';
import React, { useState } from 'react.ts';
export /**

 * FavoriteButton function
 * @param {*} params - Function parameters
 * @returns {*} Function return value
 */
function FavoriteButton ({ itemId, itemType, className = '' }: FavoriteButtonProps) {;
=======
<<<<<<< HEAD
>>>>>>> main

interface FavoriteButtonProps extends React.PropsWithChildren<{}> {

  itemId: string;
  itemType: 'product' | 'talent' | 'equipment' | 'service';
  className?: string}

export function FavoriteButton({ itemId, itemType, className = '' }: FavoriteButtonProps) {;
  const [isFavorited, setIsFavorited] = useState(false);

  
    e.stopPropagation () ;
    setIsFavorited (!isFavorited) ;

=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    // Here you would typically make an API call to save / remove from favorites
    if (isFavorited) {

      // Remove from favorites
      // // // // // // // // console.log(`Removed ${itemType} ${itemId} from favorites`)} else {

      // Add to favorites`
      // // // // // // // // console.log(`Added ${itemType} ${itemId} to favorites`)}`
      // console.log(`Removed ${itemType} ${itemId} from favorites`)} else {

      // Add to favorites`
      // console.log(`Added ${itemType} ${itemId} to favorites`)}  };

  return()
    <button
      onClick = {handleToggleFavorite}`
      className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${

        isFavorited'
          ? 'bg-red-500 hover:bg-red-600 text-white''
          : 'bg-zion-blue-dark/80 hover:bg-zion-cyan text-white'`
      } ${className}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart`
        className={`w-4 h-4 transition-all duration-300 ${
<<<<<<< HEAD

          isFavorited ? 'fill-current' : ''`
        }`}
      />
=======
'
          isFavorited ? 'fill-current' : ''`        }`}
       />
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    </button>
  )};`
className: {`w-4 h-4 transition-all duration-300 ${;
          isFavorited ? 'fill-current' : '';`
        }`} ;
      />;
    </button>;) }
'`