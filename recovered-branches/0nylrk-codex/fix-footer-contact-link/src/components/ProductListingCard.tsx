



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

      navigate(`/request-quote?listing=${listing.id}`)



      navigate (`/request - quote?listing=${listing.id}`);
    }
  }



















  return (
      {/* Image */}
"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />;
          {listing && listing.featured && (;"













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

          </div>;
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">;


        </div>;
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light">;


                e.stopPropagation();


                e.stopPropagation(),



                navigate(`/listing/${listing.id}`)



