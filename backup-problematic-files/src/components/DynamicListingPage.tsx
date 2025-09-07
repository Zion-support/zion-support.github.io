import { useState, useEffect } from "react",;""
import { useRouter } from 'next/router',;''
import { GradientHeading } from "@/components/GradientHeading",;""
import { ProductListingCard } from "@/components/ProductListingCard",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;'
import {;
  Select,;
  SelectValue,;
  SelectTrigger,;
  SelectContent,;'
  SelectItem} from "@/components/ui/select",;""
import { Checkbox } from "@/components/ui/checkbox",;""
import Skeleton from "react-loading-skeleton",;""
import "react-loading-skeleton/dist/skeleton.css",;""
import { Slider } from "@/components/ui/slider",;""
import { ProductListing, ListingView } from "@/types/listings",;""
import { Search, Filter, LayoutGrid, List, Star } from 'lucide-react';''
import { toast } from "@/hooks/use-toast",;""
import { captureException } from "@/utils/sentry",;"
;
interface PriceRange {;
  min:number,;
  max:number;
}
;
interface DynamicListingPageProps {;
  title:string,;
  description:string,;
  categorySlug:string,;
  listings:ProductListing[],;
  categoryFilters:{ label:string, value:string }[],;
  initialPrice?:PriceRange,;
  /**;
   * Base path for listing detail pages. Defaults to `/marketplace/listing`.;
   */;
  detailBasePath?:string,;
}
;
export function DynamicListingPage({;
  title,;
  description,;
  categorySlug,;
  listings:allListings,;
  categoryFilters,;
  initialPrice = { min:0, max:10000 },;)"
  detailBasePath = "/marketplace/listing"} DynamicListingPageProps) {;"
  const router = useRouter(),;"
  const [searchQuery, setSearchQuery] = useState(""),;"
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]),;
</string>"
  const [view, setView] = useState<ListingView>("grid"),;"
</ListingView>"
    <List className="h-4 w-4" />;"
</List>"
    <LayoutGrid className="h-4 w-4" />;"
</LayoutGrid>
  const [priceRange, setPriceRange] = useState<PriceRange>({;
</PriceRange>)
  const [selectedRating, setSelectedRating] = useState<number | null>(null),;
</number>
  const [currentPriceFilter, setCurrentPriceFilter] = useState<;
    [number, number];
  >([0, initialPrice.max]),;
;
  const handleSliderChange = (values:number[]) => {;
    const [min, max] = values.map(Number),;
    if (min == null || max == null || isNaN(min) || isNaN(max)) return,;
    setCurrentPriceFilter([min, max]),;
  },;
;
  let filteredListings:ProductListing[] = [],;
  try {;
    filteredListings = allListings.filter((listing) => {;
      const matchesSearch =;
        !searchQuery ||;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags &&;)
          listing.tags.some((tag:string) =>;
            tag.toLowerCase().includes(searchQuery.toLowerCase()))),;
;
      const matchesBrand =;"
        selectedBrand === "all" ||;"
        (listing.brand && listing.brand === selectedBrand),;
;
      const matchesSpecs =;
        !specQuery ||;
        (listing.specifications &&;)
          listing.specifications.some((s) =>;
            s.toLowerCase().includes(specQuery.toLowerCase()))) ||;
        (listing.tags &&;)
          listing.tags.some((tag) =>;
            tag.toLowerCase().includes(specQuery.toLowerCase()))),;
;
      const matchesAvailability =;"
        selectedAvailability === "all" ||;"
        (listing.availability && listing.availability === selectedAvailability),;
;
      const matchesCategory =;
        selectedCategories.length === 0 ||;
        selectedCategories.includes(listing.category),;
;
      const matchesPrice =;
        listing.price === null ||;
        (listing.price >= currentPriceFilter[0] &&;)
          listing.price <= currentPriceFilter[1]),;
;
      const matchesRating =;
        selectedRating === null ||;
        (listing.rating !== undefined && listing.rating >= selectedRating),;
;
      return (;
        matchesSearch &&;
        matchesCategory &&;
        matchesPrice &&;
        matchesRating &&;
        matchesBrand &&;
        matchesSpecs &&;
        matchesAvailability;)
      );
    }),;
    filteredListings.sort((a, b) => {;
      switch (sortOption) {;"
        case "price-asc":return (a.price || 0) - (b.price || 0),;""
        case "price-desc":;"
          return (b.price || 0) - (a.price || 0),;"
        case "rating":;"
          return (b.rating || 0) - (a.rating || 0),;"
        case "newest":;"
        default:;
          return (;)
            new Date(b.createdAt).getTime() -;
            new Date(a.createdAt).getTime();
          );
      }
    }),;
  } catch (error) {;
    captureException(error),;"
    logErrorToProduction('Listing filter error:', { data:error }),;'
  }
;
  const handleRequestQuote = (listingId:string) => {;
    setIsLoading(true),;
;
    const listing = allListings.find((item) => item.id === listingId),;
;
    setTimeout(() => {;
      setIsLoading(false),;
      if (listing) {;
        toast({;'
          title:"Quote Requested",;")
          description:`Your quote request for ${listing.title} has been sent.`}),;
;
        // Store quote data in sessionStorage for the request-quote page;
        const quoteData = {;
          serviceType:categorySlug,;
          specificItem: {;,
  id:listing.id,;
            title:listing.title,;
            category:listing.category,;
            image:listing.images?.[0]}},;
        ;"
        if (typeof window !== 'undefined') {;''
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData)),;'
        }
;'
        router.push("/request-quote"),;"
      }
    }, 500),;
  },;
;
  return (;"
    <div className="min-h-screen bg-zion-blue py-12 px-4">;"
</div>"
      <div className="container mx-auto">;"
</div>"
        <div className="text-center mb-12">;"
</div>
          <GradientHeading>{title}</GradientHeading>;"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">;"
</div>"
          <div className="lg:col-span-1">;"
</div>"
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">;"
</div>"
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">;"
</h3>"
                <Filter className="mr-2 h-5 w-5" /> Filters;"
</Filter>
              </h3>;"
              <div className="mb-6">;"
</div>"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;"
</label>
                </label>;"
                <div className="space-y-2">;"
</div>"
                    <div key={filter.value} className="flex items-center">;"
</div>
                      <Checkbox;
                        id={`cat-${filter.value}`})
                        checked={selectedCategories.includes(filter.value)}
                        onCheckedChange={() => toggleCategory(filter.value)}
</Checkbox>
                      <label;
                        htmlFor={`cat-${filter.value}`}"
                        className="ml-2 text-sm text-zion-slate-light cursor-pointer";"
                      >;                        {filter.label}
</label>
                      </label>;
                    </div>;
                </div>;
              </div>;"
                <div className="mb-6">;"
</div>"
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">;"
</label>
                  </label>;
                  <Select;
                    value={selectedBrand}
                    onValueChange={(value:string) => setSelectedBrand(value)}
</Select>"
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
</SelectTrigger>"
                      <SelectValue placeholder="Select Brand" />;"
</SelectValue>
                    </SelectTrigger>;"
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;"
</SelectContent>"
                      <SelectItem value="all" className="text-white">;"
</SelectItem>
                      </SelectItem>;"
                        <SelectItem key={b || 'unknown-brand'} value={b || ''} className="text-white">;"
</SelectItem>
                        </SelectItem>;                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;"
              <div className="mb-6">;"
</div>"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;"
</label>
                </label>;
                <Input;"
                  type="text";""
                  placeholder="Search specifications...";                  value={specQuery}"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) =>;
</Input>
              </div>;"
                <div className="mb-6">;"
</div>"
                  <label className="text-sm font-medium text-zion-slate-light block mb-2">;"
</label>
                  </label>;
                  <Select;
                    value={selectedAvailability}
                    onValueChange={(value:string) =>;
</Select>"
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;"
</SelectTrigger>"
                      <SelectValue placeholder="Select Availability" />;"
</SelectValue>
                    </SelectTrigger>;"
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;"
</SelectContent>"
                      <SelectItem value="all" className="text-white">;"
</SelectItem>
                      </SelectItem>;"
                        <SelectItem key={a || 'unknown-availability'} value={a || ''} className="text-white">;"
</SelectItem>
                        </SelectItem>;                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;"
              <div className="mb-6">;"
</div>"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;"
</label>
                </label>;"
                <div className="mt-6 px-2">;"
</div>
                  <Slider;"
                    aria-label="Price range";                    defaultValue={[0, priceRange.max]}"
                    min={0}
                    max={priceRange.max}
                    step={priceRange.max / 100}
                    value={currentPriceFilter}
                    onValueChange={handleSliderChange}"
                    className="mb-4";"
                  />;
</Slider>"
                  <div className="flex justify-between text-sm text-zion-slate-light">;"
</div>
                    <span>${currentPriceFilter[0].toLocaleString()}</span>;
                    <span>${currentPriceFilter[1].toLocaleString()}</span>;
                  </div>;
                </div>;
              </div>;"
              <div className="mb-6">;"
</div>"
                <label className="text-sm font-medium text-zion-slate-light block mb-2">;"
</label>
                </label>;"
                <div className="flex flex-wrap gap-2">;"
</div>
                    <Button;"
                      key={rating === null ? "any" :rating}""
                      variant="outline";""
                      size="sm";"
                      onClick={() => {;
</Button>"
                        <div className="flex items-center">;"
</div>
                            <Star;
                              key={i}"
                              className="h-3 w-3 fill-zion-cyan text-zion-cyan";"
                            />;
</Star>"
                          <span className="ml-1">& Up</span>;"
                        </div>;                      )}
                    </Button>;
                </div>;
              </div>;
              <Button;"
                variant="outline";""
                className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10";"
                onClick={() => {;
</Button>
              </Button>;
            </div>;
          </div>;"
          <div className="lg:col-span-3">;"
</div>"
            <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light">;"
</div>"
              <div className="flex flex-col md:flex-row gap-4">;"
</div>"
                <div className="relative flex-grow">;"
</div>"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"
</Search>
                  <Input;"
                    type="text";""
                    placeholder="Search listings...";"
                    value={searchQuery}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {;
</Input>
                </div>;"
                <div className="flex items-center gap-2 ml-auto">;"
</div>
                  <Select value={sortOption} onValueChange={setSortOption}>;
</Select>"
                    <SelectTrigger className="w-[150px] bg-zion-blue border border-zion-blue-light text-white">;"
</SelectTrigger>"
                      <SelectValue placeholder="Sort" />;"
</SelectValue>
                    </SelectTrigger>;"
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;"
</SelectContent>"
                      <SelectItem value="newest" className="text-white">Newest</SelectItem>;""
                      <SelectItem value="price-asc" className="text-white">Price:Low to High</SelectItem>;""
                      <SelectItem value="price-desc" className="text-white">Price:High to Low</SelectItem>;""
                      <SelectItem value="rating" className="text-white">Highest Rating</SelectItem>;"
                    </SelectContent>;
                  </Select>;
                  <Button;"
                    variant="outline";""
                    size="icon";""
                    onClick={() => setView(isGrid ? "list" :"grid")}"
</Button>"
                    <span className="sr-only">;"
</span>
                    </span>;
                  </Button>;
                </div>;
              </div>;
            </div>;"
            <div className="mb-6">;"
</div>"
              <p className="text-zion-slate-light">;"
</p>
              </p>;
            </div>;
              <div;
                className={;"
                  view === "grid";""
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6";""
                    :"flex flex-col gap-6";"
                }
              >;
</div>
                  <div;
                    key={i}"
                    className="rounded-lg overflow-hidden border border-zion-blue-light";"
                  >;
</div>"
                    <Skeleton height={192} width="100%" />;"
</Skeleton>"
                    <div className="p-4">;"
</div>"
                      <Skeleton height={24} width="33%" className="mb-2" />;"
</Skeleton>"
                      <Skeleton height={32} width="83%" className="mb-4" />;"
</Skeleton>"
                      <Skeleton height={16} width="100%" className="mb-2" />;"
</Skeleton>"
                      <Skeleton height={16} width="80%" className="mb-4" />;"
</Skeleton>"
                      <div className="flex justify-between items-center pt-4">;"
</div>"
                        <Skeleton height={24} width="25%" />;"
</Skeleton>"
                        <Skeleton height={32} width="25%" />;"
</Skeleton>
                      </div>;
                    </div>;
                  </div>;
              </div>;
              <div;
                className={;"
                  view === "grid";""
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6";""
                    :"flex flex-col gap-6";"
                }
              >;
</div>
                  <ProductListingCard;
                    key={listing.id}                    listing={listing}
                    view={view}
                    onRequestQuote={handleRequestQuote}
                    detailBasePath={detailBasePath}
                  />;
</ProductListingCard>
              </div>;"
              <div className="text-center py-20">;"
</div>"
                <h3 className="text-xl font-bold text-white mb-2">;"
</h3>
                </h3>;"
                <p className="text-zion-slate-light mb-6">;"
</p>
                </p>;
                <Button;"
                  variant="outline";"
                  onClick={() => {;
</Button>
                </Button>;
              </div>;
          </div>;
        </div>;
      </div>;
    </div>;
const [currentPriceFilter, setCurrentPriceFilter] = useState< [number, number] > ([0, initialPrice.max]);"
!searchQuery || listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || (listing.tags && listing.tags.some ( (tag: string) => selectedBrand === "all" || (listing.brand && listing.brand === selectedBrand);"
const matchesPrice = listing.price === null || (listing.price >= currentPriceFilter[0] && listing.price <= currentPriceFilter[1]);"
const matchesRating = selectedRating === null || (listing.rating !== undefined && listing.rating >= selectedRating);";""
return (matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesBrand && matchesSpecs && matchesAvailability case "price-desc": return (b.price || 0) - (a.price || 0);";""
case "rating": return (b.rating || 0) - (a.rating || 0);";""
case "newest": serviceType: categorySlug;",
  specificItem: {;
  id: listing.id;,
  title: listing.title;
category: listing.category;,
  image: listing.images?.[0] ;
}
};"
if (typeof window !== 'undefined') {';''
  sessionStorage.setItem ('quoteRequestData', JSON.stringify (quoteData) ) ;'
}
}
}, 500) ;'
};";""
return (</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" > <div className="lg:col-span-1" > <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6" > <h3 className="text-lg font-medium text-white mb-4 flex items-center" > <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Categories </label> > {;"
</div>)
}</label> </div>) ) ;
}</div> </div> Brand </label> <Select value= {;
  selectedBrand ;
}onValueChange= {;"
  (value: string) => setSelectedBrand (value) ";"
</Select>"
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Brand" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All Brands </SelectItem> </SelectItem>) ) ;""
}</SelectContent> </Select> </div>) ";""
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Specifications </label> <Input Availability </label> <Select value= {;"
</div>"
}> <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white" > <SelectValue placeholder="Select Availability" /> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="all" className="text-white" > All </SelectItem> </SelectItem>) ) ;""
}</SelectContent> </Select> </div>) ";""
}<div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Price Range </label> <div className="mt-6 px-2" > <Slider </div> </div> </div> <div className="mb-6" > <label className="text-sm font-medium text-zion-slate-light block mb-2" > Minimum Rating </label> ;"
  selectedRating === rating <Star key= {;"
  i ";""
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) ) ";"
</Star>"
}<span className="ml-1" >& Up</span> </div>) ;"
}</Button>) ) ;
}</div> </div> <Button clearCategories ();
setCurrentPriceFilter ([0, priceRange.max]);"
setSelectedRating (null);";""
> Clear All </Button> </div> </div> <div className="lg:col-span-3" > <div className="bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light" > <div className="flex flex-col md:flex-row gap-4" > <div className="relative flex-grow" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> <Input ;""
}";""
}className="pl-10 bg-zion-blue border border-zion-blue-light text-white" /> </div> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="newest" className="text-white" >Newest</SelectItem> <SelectItem value="price-asc" className="text-white" >Price: Low to High</SelectItem> <SelectItem value="price-desc" className="text-white" >Price: High to Low</SelectItem> <SelectItem value="rating" className="text-white" >Highest Rating</SelectItem> </SelectContent> </Select> <Button </span> </Button> </div> </div> </div> </p> </div> {;"
  isLoading ? (<div className= {;
  > {;
</div>)
  [1, 2,  3, 4].map ( (i) => (<div key= {;"
  i ";")"
}className="rounded-lg overflow-hidden border border-zion-blue-light" > </div> </div> </div>) ) ;"
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
  detailBasePath ;)"
}/>) ) ";"
</ProductListingCard>"
}</div> No listings found </h3> <p className="text-zion-slate-light mb-6" > Try adjusting your filters or search query </p> <Button clearCategories ();"
setCurrentPriceFilter ([0, priceRange.max]);
setSelectedRating (null);
> Clear All </Button> </div>) ;
}</div> </div> </div> </div>) ;"