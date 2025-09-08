
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useNavigate} from "react-router-dom";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ProductListing} from "@/types/listings";
import {Star, DollarSign} from "lucide-react";

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  view = 'grid';
  onRequestQuote;
}: ProductListingCardProps) {;'
  const isGrid = view === 'grid';
  const navigate = useNavigate();

<<<<<<< HEAD

  listing: ProductListing
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void
}
export function ProductListingCard({
  listing
  view = 'grid';
  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = view === 'grid';
  const navigate = useNavigate();
  // Get the first image or use a placeholder
  const imageUrl = listing.images && listing.images.length > 0
    ? listing.images[0]
    : '/placeholder.svg';
import { ProductListing } from "@/types/listings",
import { Star, DollarSign } from "lucide-react",
=======
import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings";
import { Star, DollarSign } from "lucide-react";
interface ProductListingCardProps {
import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings";
import { Star, DollarSign } from "lucide-react";

interface ProductListingCardProps {

interface ProductListingCardProps {;
  listing: ProductListing,;
'
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void;
}'
  view = 'grid';
  onRequestQuote;
}: ProductListingCardProps) {;'
  const isGrid = view === 'grid';
  const navigate = useNavigate();

  view?: 'grid' | 'list',
  onRequestQuote?: (id: string) => void;
}


  onRequestQuote
}: ProductListingCardProps) {
  const isGrid = view === 'grid',
  const navigate = useNavigate(),


  // Get the first image or use a placeholder

  // Format price display
  const formatPrice = () => {
    if (listing.price === null) return "Custom pricing";

    return `${listing.currency}${listing.price.toLocaleString()}`


  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {

    e.currentTarget.src = '/placeholder.svg'
  }
  // Handle navigating to listing detail;
  const handleViewListing = () => {}`
    navigate(`/listing/${listing.id}`)

  }

    if (onRequestQuote) {

      onRequestQuote(listing.id)
    } else {}
      // Default behavior if no handler provided;`
      navigate(`/request-quote?listing=${listing.id}`)

>>>>>>> origin/cursor/delete-old-data-records-6bba

    if (onRequestQuote) {
      onRequestQuote(listing.id)
    } else {
      // Default behavior if no handler provided
<<<<<<< HEAD

      navigate(`/request-quote?listing=${listing.id}`)

=======
      navigate(`/request-quote?listing = $2;
  return (
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useNavigate } from "react-router-dom",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { ProductListing } from "@/types/listings",;

import { Star, DollarSign } from "lucide-react",;
interface ProductListingCardProps {;
  listing: ProductListing,;'
  view?: 'grid' | 'list',;
<<<<<<< HEAD


      navigate (`/request - quote?listing=${listing.id}`);
    }
  }


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Get the first image or use a placeholder;
  const imageUrl = listing && listing.images && listing && listing.images.length > 0 ;
    ? listing && listing.images[0] ;
    : '/placeholder && placeholder.svg';
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Format price display;
  const formatPrice = () => {;
    if (listing && listing.price === null) return "Custom pricing";
    return `${listing && listing.currency}${listing && listing.price.toLocaleString()}`;
  };
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Handle image loading errors;
  const handleImageError = (e: React && React.SyntheticEvent<HTMLImageElement>) => {;
    e && e.currentTarget.src = '/placeholder && placeholder.svg';
  };
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Handle navigating to listing detail;
  const handleViewListing = () => {;

    navigate(`/listing/${listing && listing.id}`);
  };
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Handle request quote button click;
  const handleRequestQuote = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (onRequestQuote) {;
      onRequestQuote(listing && listing.id);
    } else {;
      // Default behavior if no handler provided;`
      navigate(`/request-quote?listing=${listing && listing.id}`);
    }
  };
<<<<<<< HEAD


  return (
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;

        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>;
          <img;
            src={imageUrl} 
            alt={listing && listing.title}

<<<<<<< HEAD
      {/* Image */}
"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />;
          {listing && listing.featured && (;"


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className={`bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer`} onClick={handleViewListing}>;


<<<<<<< HEAD




=======
      {/* Image */}

{/* Image */}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className={isGrid ? 'block w-full' : 'block w-1/3'} onClick={handleViewListing}>;
        <div className={`relative ${isGrid ? 'h-48' : 'h-full'}`}>;
          <img
            src={imageUrl} 
            alt={listing && listing.title}
<<<<<<< HEAD



=======
      {/* Image */}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            className="w-full h-full object-cover"
            onError={handleImageError}
          />;
          {listing && listing.featured && (;

            <Badge className="absolute top-2 right-2 bg-zion-purple text-white border-none">;
              Featured;
            </Badge>;
          )}
<<<<<<< HEAD



=======
        </div>;
      </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 flex-1'}`}>
        <div>
          {/* Category & Rating */}
<<<<<<< HEAD

          <div className="flex justify-between items-center mb-2">;
            <Badge variant="outline" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light">;
              {listing && listing.category}
            </Badge>;
            {listing && listing.rating && (;
              <div className="flex items-center text-zion-slate-light">;
                <Star className="h-4 w-4 fill-zion-cyan text-zion-cyan mr-1" />;
                <span>{listing && listing.rating}</span>;
                {listing && listing.reviewCount && (;
                  <span className="text-xs ml-1">({listing && listing.reviewCount})</span>;
                )}
              </div>;
            )}

=======


            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {listing.title}
            </h3>
          </div>"
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">
            {listing.description}

<<<<<<< HEAD
          </div>;
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <h3 className="text-lg font-semibold text-white mb-2 hover:text-zion-cyan transition-colors">;
              {listing && listing.title}
            </h3>;
          </div>;"
          <p className="text-sm text-zion-slate line-clamp-2 mb-4">;
            {listing && listing.description}
          </p>;
          {/* Tags */}
          {listing && listing.tags && listing && listing.tags.length > 0 && (;"
            <div className="flex flex-wrap gap-1 mb-4">;
              {listing && listing.tags.map((tag, idx) => (;
                <span;
                  key={idx} "
                  className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full">;

                  {tag}
                </span>;
              ))}
            </div>;
          )}
<<<<<<< HEAD

        </div>;
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;

=======


        {/* Footer with price and button */}"
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div className="text-sm font-medium">;
            {listing && listing.price !== null ? (;"
              <div className="flex items-center text-zion-purple">;"
                <DollarSign className="h-4 w-4 mr-1" />;
                {formatPrice()}
              </div>;
            ) : (;"

              <span className="text-zion-slate-light">;
                {formatPrice()}
<<<<<<< HEAD

                e.stopPropagation();


                e.stopPropagation(),



                navigate(`/listing/${listing.id}`)


=======


            )}

                e.stopPropagation(),
                navigate(`/listing/${listing.id}`)

>>>>>>> origin/cursor/delete-old-data-records-6bba
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              Buy Now;
            </Button>
            {onRequestQuote && (


          </div>;
          <div className="flex gap-2">;
            <Button
              size="sm" 
              onClick={(e) => {;
                e && e.stopPropagation();
                navigate(`/listing/${listing && listing.id}`);
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <Button
                size="sm"
                variant="outline"
                onClick={handleRequestQuote}


                Request Quote;
              </Button>;

            )}
          </div>;
        </div>;
      </div>;
    </div>;

<<<<<<< HEAD
=======

                  className="text - xs text - zion - slate bg - zion - blue - light / 20 px - 2 py - 1 rounded - full";
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
                className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
              >;
                Request Quote;
              </Button>)}
          </div>;
        </div>;
      </div>;
    </div>);


  ),; interface ProductListingCardProps {

  listing: ProductListing;
view?: 'grid' | 'list';
onRequestQuote?: (id: string) => void 
}export function ProductListingCard ({
  listing;
view = 'grid';
onRequestQuote 
}: ProductListingCardProps) {
  const isGrid = view === 'grid';
const navigate = useNavigate ();
//Format price display 
};
}
};
return (<div className= {
  `bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex $ {
  isGrid ? 'flex-col' : 'flex-row' 
return (<div className= {`;
  `bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex $ {"
  isGrid ? 'flex-col' : 'flex-row`;
}cursor-pointer` 
}onClick= {
  handleViewListing;
}> {
}<div className= {
  isGrid ? 'block w-full' : 'block w-1/3
}> <div className= {
</div>)
}> <img Featured ) 
</img>
}</div> </div> {
}<div className= {`;
  `flex flex-col justify-between $ {
  isGrid ? 'p-4 flex-1' : 'p-4 flex-1`;
}` 
}> <div>) 
}</div>) 
}</div> <span key= {
  idx;
}className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full" > {"
}</span>) ) 
}</div> </span>) "
}</div> <div className="flex gap-2" > <Button;"
}className="bg-zion-purple hover:bg-zion-purple-dark text-white" > Buy Now  {""
  onRequestQuote && (<Button size="sm" variant="outline" onClick= {"
  handleRequestQuote;)"
}className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" > Request Quote )"
}</div> </div> </div> </div>) 
    </div>"`;
pr-12325
              </Button>
          </div>
        </div>
      </div>
    </div>
  )


>>>>>>> origin/cursor/delete-old-data-records-6bba
}