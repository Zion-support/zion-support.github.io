

import Image from 'next/image', // Import next/image

interface ProductListingCardProps {
  listing: ProductListing,

  view?: 'grid' | 'list',

  onRequestQuote?: (id: string) => void,
  detailBasePath?: string
}





const ProductListingCardComponent = ({
  listing,
  view = 'grid',
  onRequestQuote,

              {listing.category}
            </Badge>
            {listing.rating && (
              <RatingStars value={listing.rating} count={listing.reviewCount} />
            )}


            <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2.5vw,1.125rem)]">
              {listing.title}
            </h3>
          </div>
          <p className="text-foreground/80 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]">
            {listing.description}

          </p>;

          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full"
                >


            {listing.price !== null ? (
              <div className="flex items-center text-primary">
                <DollarSign className="h-4 w-4 mr-1" />
                {getPrice()}
              </div>
            ) : (


            )}
          </div>
          
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-primary hover: bg-primary/80 text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event
                addToCart()
              }}
              disabled={loading}



            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                "Add to Cart"
              )}
            </Button>


            
            <Button
              size="sm"
              variant="default"
              className="bg-green-600 hover: bg-green-700 text-white"
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event
                // Add to cart first, then redirect to checkout
                dispatch(
                  addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 })

                ),

                router.push('/checkout')
              }}

            
            {onRequestQuote && (
              <Button 
                size="sm"
                variant="outline" 
                onClick={handleRequestQuote}
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground"
              >
                Request Quote
              </Button>

          </div>;
          <div className="flex gap-2">;
            <Button;
              size="sm";
              className="bg-primary hover: bg-primary/80 text-primary-foreground";
              onClick={(e) => {;
                e.stopPropagation(), // Prevent card click event;
                addToCart();
              }}
              disabled={loading}
            >;
              {loading ? (;
                <>;
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">;
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>;
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>;
                  </svg>;
                  Loading...;
                </>;
              ) : (;
                "Add to Cart";
              )}
            </Button>;
            <Button;
              size="sm";
              variant="default";
              className="bg-green-600 hover: bg-green-700 text-white";
              onClick={(e) => {;
                e.stopPropagation(), // Prevent card click event;
                // Add to cart first, then redirect to checkout;
                dispatch(;
                  addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 });
                ),;
                router.push('/checkout');
              }}
              disabled={loading}
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (;
              <Button;
                size="sm";
                variant="outline";
                onClick={handleRequestQuote}
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground";
              >;
                Request Quote;
              </Button>;
            )}

