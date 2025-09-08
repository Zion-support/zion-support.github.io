import {;
  Select,;
  SelectValue,;
  SelectTrigger,;
  SelectContent,;

import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react';
import { toast } from "@/hooks/use-toast";""
import { captureException } from "@/utils/sentry";"
;
interface PriceRange {;
  min: number;,;
  max:number;
}
interface DynamicListingPageProps {;
  title: string;,,
  description: string;,;
  categorySlug: string;,;
  listings: ProductListing[];,;
  categoryFilters: { label:string;, value: string ;}[],;
  initialPrice?:PriceRange,;
  /**;
   * Base path for listing detail pages. Defaults to `/marketplace/listing`.;
   */;
  detailBasePath?:string,;
export function DynamicListingPage({;
  title,;
  description,;
  categorySlug,;
  listings: allListings;,;
  categoryFilters,;
  initialPrice = { min: 0;, max: 10000 ;},;)"
  detailBasePath = "/marketplace/listing"} DynamicListingPageProps) {;"
  const router = useRouter(),;"
  const [searchQuery, setSearchQuery] = useState(""),;"
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]),;
</string>"
  const [view, setView] = useState<ListingView>("grid"),;"
"
    <List className="h-4 w-4" />;"
    <LayoutGrid className="h-4 w-4" />;"

  const [priceRange, setPriceRange] = useState<PriceRange>({;
)
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
</number>
  const [currentPriceFilter, setCurrentPriceFilter] = useState<;
    [number, number];
  >([0, initialPrice.max]),;
  const handleSliderChange = (values:number[]) => {;
    const [min, max] = values.map(Number),;
    if (min == null || max == null || isNaN(min) || isNaN(max)) return,;
    setCurrentPriceFilter([min, max]),;
  },;
  let filteredListings: ProductListing[] = [];,;
  try {;
    filteredListings = allListings.filter((listing) => {;
      const matchesSearch =;
        !searchQuery ||;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags &&;)
          listing.tags.some((tag:string) =>;
            tag.toLowerCase().includes(searchQuery.toLowerCase()))),;
      const matchesBrand =;"
        selectedBrand === "all" ||;"
        (listing.brand && listing.brand === selectedBrand),;
      const matchesSpecs =;
        !specQuery ||;
        (listing.specifications &&;)
          listing.specifications.some((s) =>;
            s.toLowerCase().includes(specQuery.toLowerCase()))) ||;
          listing.tags.some((tag) =>;
            tag.toLowerCase().includes(specQuery.toLowerCase()))),;
      const matchesAvailability =;"
        selectedAvailability === "all" ||;"
        (listing.availability && listing.availability === selectedAvailability),;
      const matchesCategory =;
        selectedCategories.length === 0 ||;
        selectedCategories.includes(listing.category),;
      const matchesPrice =;
        listing.price === null ||;
        (listing.price >= currentPriceFilter[0] &&;)
          listing.price <= currentPriceFilter[1]),;
      const matchesRating =;
        selectedRating === null ||;
        (listing.rating !== undefined && listing.rating >= selectedRating),;
      return (;

        matchesSearch &&;
        matchesCategory &&;
        matchesPrice &&;
        matchesRating &&;
        matchesBrand &&;
        matchesSpecs &&;
        matchesAvailability;)
      );

                      </label>;
                    </div>;

                    </SelectContent>;
                  </Select>;
                </div>;
              )}

                  onChange={(e:React.ChangeEvent<HTMLInputElement>) =>;

                    value={selectedAvailability}
                    onValueChange={(value:string) =>;

                    min={0}
<<<<<<< HEAD

                    max={priceRange.max}
                    step={priceRange.max / 100}

=======
                    max={priceRange.max}
                    step={priceRange.max / 100}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    value={currentPriceFilter}

                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                  </div>;
                </div>;
              </div>;

                      onClick={() => {;
                        <div className="flex items-center">;"
                            <Star;
                              key={i}"
                              className="h-3 w-3 fill-zion-cyan text-zion-cyan";"
                          <span className="ml-1">& Up</span>;"
                        </div>;                      )}

              >;
                Clear All;
              </Button>;
            </div>;
          </div>;

                    value={searchQuery}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {;

                <div className="flex items-center gap-2 ml-auto">;"
                  <Select value={sortOption} onValueChange={setSortOption}>;

              <div;
                className={;"
                  view === "grid";""
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6";""
                    :"flex flex-col gap-6";"
              >;
                    className="rounded-lg overflow-hidden border border-zion-blue-light";"
                    <Skeleton height={192} width="100%" />;"
                    <div className="p-4">;"
                      <Skeleton height={24} width="33%" className="mb-2" />;"
                      <Skeleton height={32} width="83%" className="mb-4" />;"
                      <Skeleton height={16} width="100%" className="mb-2" />;"
                      <Skeleton height={16} width="80%" className="mb-4" />;"
                      <div className="flex justify-between items-center pt-4">;"
                        <Skeleton height={24} width="25%" />;"
                        <Skeleton height={32} width="25%" />;"

                  <ProductListingCard;
                    key={listing.id}                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                    detailBasePath={detailBasePath}
                  />;
                ))}
              </div>;
            ) :(;
              <div className="text-center py-20">;
                <h3 className="text-xl font-bold text-white mb-2">;
                  No listings found;
                </h3>;
                <p className="text-zion-slate-light mb-6">;
                  Try adjusting your filters or search query;
                </p>;
                <Button;
                  variant="outline";
                  onClick={() => {;
                    setSearchQuery(""),;
                    clearCategories(),;
                    setCurrentPriceFilter([0, priceRange.max]),;
                    setSelectedRating(null),;
                    setSelectedBrand("all"),;
                    setSpecQuery(""),;
                    setSelectedAvailability("all"),;
                  }}
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";

                >;
                  Clear All;
                </Button>;
              </div>;
            )}
          </div>;
        </div>;
      </div>;

    </div>;
<<<<<<< HEAD
  ),; import {;
  Select;
SelectValue;
SelectTrigger;
SelectContent;
interface PriceRange {;
  min: number;
max: number ;
}interface DynamicListingPageProps {;
  title: string;
description: string;
categorySlug: string;
listings: ProductListing[];
categoryFilters: {;
  label: string, value: string ;
}[];
initialPrice?: PriceRange;
}const toggleCategory = (category: string) => {;
  setSelectedCategories (prev => prev.includes (category) ? prev.filter (c => c !== category) : [...prev, category] min: 0;
max: 10000 ;
});
}
}, [allListings]);
const [currentPriceFilter, setCurrentPriceFilter] = useState< [number, number] > ([0, initialPrice.max]);
!searchQuery || listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || (listing.tags && listing.tags.some ( (tag: string) => selectedBrand === "all" || (listing.brand && listing.brand === selectedBrand);
const matchesPrice = listing.price === null || (listing.price >= currentPriceFilter[0] && listing.price <= currentPriceFilter[1]);
const matchesRating = selectedRating === null || (listing.rating !== undefined && listing.rating >= selectedRating);";
return (matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesBrand && matchesSpecs && matchesAvailability case "price-desc": return (b.price || 0) - (a.price || 0);";
case "rating": return (b.rating || 0) - (a.rating || 0);";
case "newest": serviceType: categorySlug;
specificItem: {;
  id: listing.id;
title: listing.title;
category: listing.category;
image: listing.images?.[0] ;
}
};
if (typeof window !== 'undefined') {';
  sessionStorage.setItem ('quoteRequestData', JSON.stringify (quoteData) ) ;
}
}
}, 500) ;
};";
return (</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" > <div className="lg:col-span-1" > <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6" > <h3 className="text-lg font-medium text-white mb-4 flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Categories </label> > {;
  filter.label ;
}</label> </div>) ) ;
}</div> </div> Brand </label> <Select value= {;
  selectedBrand ;
}onValueChange= {;
  (value: string) => setSelectedBrand (value) ";
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Brand" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All Brands </SelectItem> </SelectItem>) ) ;
}</SelectContent> </Select> </div>) ";
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Specifications </label> <Input Availability </label> <Select value= {;
  selectedAvailability ;
}onValueChange= {;
  (value: string) => setSelectedAvailability (value) ";
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Availability" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All </SelectItem> </SelectItem>) ) ;
}</SelectContent> </Select> </div>) ";
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Price Range </label> <div className="mt-6 px-2" > <Slider </div> </div> </div> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Minimum Rating </label> ;
}
}aria-pressed= {;
  selectedRating === rating ;
}className= {;
  ` {;
  selectedRating === rating <Star key= {;
  i ";
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) ) ";
}<span className="ml-1" >& Up</span> </div>) ;
}</Button>) ) ;
}</div> </div> <Button clearCategories ();
setCurrentPriceFilter ([0, priceRange.max]);
setSelectedRating (null);";
> Clear All </Button> </div> </div> <div className="lg:col-span-3" > <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light" > <div className="flex flex-col md:flex-row gap-4" > <div className="relative flex-grow" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input ;
}";
}className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="newest" className="text-white" >Newest</SelectItem> <SelectItem value="price-asc" className="text-white" >Price: Low to High</SelectItem> <SelectItem value="price-desc" className="text-white" >Price: High to Low</SelectItem> <SelectItem value="rating" className="text-white" >Highest Rating</SelectItem> </SelectContent> </Select> <Button </span> </Button> </div> </div> </div> </p> </div> {;
  isLoading ? (<div className= {;
  > {;
  [1, 2,  3, 4].map ( (i) => (<div key= {;
  i ";
}className="rounded-lg overflow-hidden border border-zion-blue-light" > </div> </div> </div>) ) ;
}</div> > {;
  filteredListings.map ( (listing) => (<ProductListingCard key= {;
  listing.id ;
}listing= {;
  listing ;
}view= {;
  view ;
}onRequestQuote= {;
  handleRequestQuote ;
}detailBasePath= {;
  detailBasePath ;
}/>) ) ";
}</div> No listings found </h3> <p className="text-zion-slate-light mb-6" > Try adjusting your filters or search query </p> <Button clearCategories ();
setCurrentPriceFilter ([0, priceRange.max]);
setSelectedRating (null);
> Clear All </Button> </div>) ;
}</div> </div> </div> </div>) ;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
