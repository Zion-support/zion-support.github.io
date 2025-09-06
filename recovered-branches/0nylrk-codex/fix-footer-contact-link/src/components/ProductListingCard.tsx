import { useNavigate } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { ProductListing } from "@/types/listings";
import { Star, DollarSign } from "lucide-react";
interface ProductListingCardProps {
  listing: ProductListing;
  view?: 'grid' | 'list';
  onRequestQuote?: (id: string) => void
}

export function ProductListingCard({ 
  listing;
  view;
                navigate(`/listing/${listing.id}`)
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              Buy Now
            </Button>
            
            {onRequestQuote && (
              <Button 
                size="sm"
                variant="outline" 
                onClick={handleRequestQuote}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              >
                Request Quote
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};