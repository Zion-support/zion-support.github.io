<<<<<<< HEAD
import React, { useState } from 'react.ts';
import { Heart interface FavoriteButtonProps extends React.PropsWithChildren<{}> {

  itemId: string;
  itemType: 'product' | 'talent' | 'equipment' | 'service';
  className?: string;
=======
import React, { useState  
} from 'react.ts';
import { Heart   } from 'lucide-react.ts';

interface FavoriteButtonProps extends React.PropsWithChildren<{}> {

  itemId: string;
  itemType: 'product' | 'talent' | 'equipment' | 'service';
  className?: string}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
export function FavoriteButton(...args[]: any):  {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleToggleFavorite = (e: anyReact.MouseEvent)   => {;
=======;
export function FavoriteButton(...args: any[]): any {;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleToggleFavorite = (e: anyReact.MouseEvent)  => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    e.stopPropagation();
    setIsFavorited(!isFavorited);

    // Here you would typically make an API call to save/remove from favorites
    if (isFavorited) {
      // Remove from favorites
<<<<<<< HEAD
<<<<<<< HEAD
      // // // console.log(`Removed ${itemType} ${itemId} from favorites`);
    } else {
      // Add to favorites
      // // // console.log(`Added ${itemType} ${itemId} to favorites`);

=======
      // // // // // // // console.log(`Removed ${itemType} ${itemId} from favorites`);
    } else {
      // Add to favorites
      // // // // // // // console.log(`Added ${itemType} ${itemId} to favorites`);
    }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
      console.log(`Removed ${itemType} ${itemId} from favorites`)} else {
      // Add to favorites
      console.log(`Added ${itemType} ${itemId} to favorites`)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  return (
    <button
      onClick = {handleToggleFavorite}
      className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${
        isFavorited
          ? 'bg-red-500 hover:bg-red-600 text-white'
          : 'bg-zion-blue-dark/80 hover:bg-zion-cyan text-white'
      } ${className}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
<<<<<<< HEAD

=======
    >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      <Heart
        className={`w-4 h-4 transition-all duration-300 ${
          isFavorited ? 'fill-current' : ''
        }`}
      />
    </button>
  )};
=======;
        className={`w-4 h-4 transition-all duration-300 ${;
          isFavorited ? 'fill-current' : '';
        }`} ;
      />;
    </button>;
  );
<<<<<<< HEAD
}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
