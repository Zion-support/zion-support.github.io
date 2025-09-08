import { DollarSign } from 'lucide-react';
import { RatingStars } from "@/components/RatingStars";""
import { FavoriteButton } from "@/components/FavoriteButton";""
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import { toast } from '@/hooks/use-toast';
import { useCurrency } from '@/hooks/useCurrency';
import Image from 'next/image', // Import next/image;
;
interface ProductListingCardProps {;
  listing: ProductListing;,;
  view?:'grid' | 'list',;
  onRequestQuote?:(id: string) => void;,;
  detailBasePath?:string;
}
const ProductListingCardComponent = ({;
  listing,;
  view = 'grid',;
  onRequestQuote,;
  detailBasePath = '/marketplace/listing';')
} ProductListingCardProps) => {;
  const isGrid = view === 'grid',;
  const router = useRouter(),;
  const [loading, setLoading] = useState(false),;
  const [imageSrc, setImageSrc] = useState(;
    listing.images && listing.images.length > 0 && listing.images[0];
    ? listing.images[0] ;
    :'/placeholder.svg';')
  ),;
  const [imageError, setImageError] = useState(false),;
  const stockStatus =;
    listing.stock === undefined;
      ? 'In stock';
      :listing.stock <= 0;
      ? 'Out of stock';
      :listing.stock <= 5;
      ? 'Low stock';
      :'In stock',;
  const stockVariant =;
      ? 'success';
      ? 'destructive';
      ? 'warning';
      :'success',;
  const { formatPrice } = useCurrency(),;
  const getPrice = () => {;
    if (listing.price === null) return "Custom pricing",;"
    return formatPrice(listing.price),;
  },;
  const handleImageError = () => {;
    if (!imageError) { // Prevent infinite loops if placeholder also fails;"
      setImageSrc('/placeholder.svg'),;
      setImageError(true),;
  const handleViewListing = () => {;
    // Debug logging for development;
    if (process.env.NODE_ENV === 'development') {;
      logDebug('[ProductCard] Navigating to: ';, { path: `${detailBasePath;}/${listing.id}` }),;
      logDebug('[ProductCard] Listing ID: ';, { id: listing.id ;}),;
      logDebug('[ProductCard] Listing Title: ';, { title: listing.title ;}),;
    // Validate listing ID exists before navigation;
    if (!listing.id) {;
      logErrorToProduction('[ProductCard] Missing listing ID, cannot navigate', new Error('Missing listing ID'), { component: 'ProductListingCard' ;}),;
      toast({;
        title: "Navigation Error";,,
  description: "Product information is incomplete";,;
        variant: "destructive";}),;
        title: "Navigation Error";,;""
        description: "Product information is incomplete";,;")"
        variant: "destructive";}),;"
pr-12325
      return,;
    ;`;
    router.push(`${detailBasePath}/${listing.id}`),;
  const dispatch = useDispatch<AppDispatch>(),;

    <div;"
      data-testid="equipment-link";""`;
      className={`bg-card/70 backdrop-blur-md border border-primary/10 sm: border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' :'flex-row';} cursor-pointer focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-primary hover:animate-glowing-border transition-all duration-300`;}
      onClick={handleViewListing}
      tabIndex={0}
      role="button";"
      onKeyDown={(e) => {;
</div>
        className={isGrid ? 'block w-full' :'block w-48 flex-shrink-0'}
        onClick={handleViewListing} // Keep existing onClick for navigation;
        tabIndex={-1} // Remove from tab order as parent is focusable;
</div>`;
        <div className={`relative ${imageContainerClasses}`}> {/* Ensure this container has dimensions */}
          <Image;
            src={imageSrc}            alt={listing.title}
            fill={true}"
            style={{ objectFit: 'cover' ;}}
            onError={handleImageError}
            priority={false} // Assuming these are not LCP images;
            sizes={isGrid ? "(max-width: 768px) 100vw;, (max-width: 1200px) 50vw;, 33vw" :"192px"} // 192px is w-48;"
          />;
"
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none">;"

            <Badge;
              variant={stockVariant as any}"
              className="absolute top-2 left-2";"
            >;              {stockStatus}

           <FavoriteButton itemId={listing.id} />;

        </div>;
      </div>;"`;
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' :'p-4 flex-1'}`}>;
        <div>;
          <div className="flex justify-between items-center mb-2">;"
</div>"
            <Badge variant="outline" className="bg-background text-foreground/80 border-primary/10">;"

              <RatingStars value={listing.rating} count={listing.reviewCount} />;            )}

          </div>;"
          <div onClick={handleViewListing} className="block">;"
              <p className="text-primary font-semibold text-sm mb-1">;                {listing.uspHeadline}"
</p>
              </p>;"
            <h3 className="font-semibold text-foreground mb-2 hover: text-primary transition-colors text-[clamp(1rem;,2.5vw,1.125rem)]">;"
</h3>
            </h3>;
          <p className="text-foreground/80 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]">;            {listing.description}"
            <div className="flex flex-wrap gap-1 mb-4">;"
                <span ;
                  key={idx} ;"
                  className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full";"
                >;                  {tag}

              onClick={(e) => {;

                <>;"
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">;"
</svg>"
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>;""
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>;"
                  </svg>;
                </>;
              ) :(;"
                "Add to Cart";")
              )}
              variant="default";""
              className="bg-green-600 hover:bg-green-700 text-white";"

              <Button ;"
                variant="outline" ;"
                onClick={handleRequestQuote}"
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground";"
              >;


//Import next/image const stockVariant = listing.stock === undefined ? 'success' : listing.stock <= 0 ? 'destructive' : listing.stock <= 5 ? 'warning' : 'success';
  if (!imageError) {';
  //Prevent infinite loops if placeholder also fails setImageSrc ('/placeholder.svg');

setImageError (true) ;
};';
//Debug logging for development if (process.env.NODE ENV === 'development') {;
  return;
};
}> {;
  /* Image */ ;
}<div ;
}> <div className= {;

  stockStatus && (<Badge variant= {;
  stockVariant as any ;
}className="absolute top-2 left-2" > {;"
)
});
}<FavoriteButton itemId= {;
  listing.id ;
}/> </div> </div> {;

}<div className= {;"`;
  `flex flex-col justify-between $ {';
  isGrid ? 'p-4 flex-1' : 'p-4 flex-1' ;`;
}` ;
}> <div>  {;
  listing.rating && (<RatingStars value= {;
  listing.rating ;
}count= {;
  listing.reviewCount ;)
}/>) ;

}</div> <span key= {;

  (e) => {;
  e.stopPropagation (), //Prevent card click event addToCart () ;
}
}disabled= {;
  loading ";
}loading ? (<> <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" > <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle> <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path> </svg> Loading... </>) : ("Add to Cart") ;
}</Button> <Button onClick={;
  (e) => {;
  e.stopPropagation (), //Prevent card click event //Add to cart first, then redirect to checkout dispatch (addItem ({;
  id: listing.id;,  title: listing.title;, price: listing.price ?? 0 ;
}) );';
router.push ('/checkout') ;
}
}disabled= {;
  loading ;
}> Buy Now </Button> {";
  onRequestQuote && (<Button size="sm" variant="outline" onClick={;
  handleRequestQuote ";
}className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" > Request Quote </Button>) ;
}</div> </div> </div> </div>) 
};
'"