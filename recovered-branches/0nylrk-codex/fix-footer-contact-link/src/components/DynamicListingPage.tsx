<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useNavigate } from "react-router-dom",
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { Skeleton } from "@/components/ui/skeleton",
import { Slider } from "@/components/ui/slider",
import { ProductListing, ListingView } from "@/types/listings",
import { Search, Filter, LayoutGrid, List, Star } from "lucide-react",
import { toast } from "@/hooks/use-toast",
=======
import { useState, useEffect } from &quot;react&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { ProductListingCard } from &quot;@/components/ProductListingCard&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from &quot;@/components/ui/select&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;
import { Slider } from &quot;@/components/ui/slider&quot;;
import { ProductListing, ListingView } from &quot;@/types/listings&quot;;
import { Search, Filter, LayoutGrid, List, Star } from &quot;lucide-react&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PriceRange {
  min: number,
  max: number
}

interface DynamicListingPageProps {
  title: string,
  description: string,
  categorySlug: string,
  listings: ProductListing[],
  categoryFilters: { label: string, value: string }[],
  initialPrice?: PriceRange
}

export function DynamicListingPage({
  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 }
}: DynamicListingPageProps) {
<<<<<<< HEAD
  const navigate = useNavigate(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedCategory, setSelectedCategory] = useState("all"),
  const [view, setView] = useState<ListingView>("grid"),
  const [isLoading, setIsLoading] = useState(false),
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice),
=======
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("&quot;);
  const [selectedCategory, setSelectedCategory] = useState(&quot;all&quot;);
  const [view, setView] = useState<ListingView>(&quot;grid&quot;);
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>(initialPrice);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const [selectedRating, setSelectedRating] = useState<number | null>(null),

  useEffect(() => {
    const listingsWithPrice = allListings.filter(l => l.price !== null),
    if (listingsWithPrice.length > 0) {
      const min = Math.min(...listingsWithPrice.map(l => l.price || 0)),
      const max = Math.max(...listingsWithPrice.map(l => l.price || 0)),
      setPriceRange({ min, max })
=======

interface PriceRange {_min: number;
  max: number;}

interface DynamicListingPageProps {_title: string;
  description: string;
  categorySlug: string;
  listings: ProductListing[];
  categoryFilters: { label: string; value: string}[];
  initialPrice?: PriceRange;
}

export function DynamicListingPage(_{_title, _description, _categorySlug, _listings: allListings, _categoryFilters, _initialPrice = { min: 0, _max: 10000}
}: DynamicListingPageProps) {_const _navigate = useNavigate();
  const [searchQuery, _setSearchQuery] = useState("");
  const [selectedCategory, _setSelectedCategory] = useState("all");
  const [view, _setView] = useState<ListingView>("grid");
  const [isLoading, _setIsLoading] = useState(false);
  const [priceRange, _setPriceRange] = useState<PriceRange>(initialPrice);

  const [selectedRating, _setSelectedRating] = useState<number | null>(null);

  useEffect__(() => {
    const _listingsWithPrice = allListings.filter(l => l.price !== null);
    if (listingsWithPrice.length > 0) {
      const _min = Math.min(...listingsWithPrice.map(l => l.price || 0));
      const _max = Math.max(...listingsWithPrice.map(l => l.price || 0));
      setPriceRange({ min, _max});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [allListings]),

  const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]>([
    initialPrice.min,
    initialPrice.max
  ]),

<<<<<<< HEAD
  const handleSliderChange = (values: number[]) => {
    setCurrentPriceFilter([values[0], values[1]])
  },
=======
  const _handleSliderChange = (_values: number[]) => {_setCurrentPriceFilter([values[0], _values[1]]);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredListings = allListings.filter(listing => {_const _matchesSearch = !searchQuery || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
<<<<<<< HEAD
      (listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
    
<<<<<<< HEAD
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory,
=======
    const matchesCategory = selectedCategory === &quot;all&quot; || listing.category === selectedCategory;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      (_listing.tags && listing.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const _matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    const _matchesPrice = listing.price === null || (
      listing.price >= currentPriceFilter[0] && 
      listing.price <= currentPriceFilter[1]
    ),
    
    const _matchesRating = 
      selectedRating === null || 
      (listing.rating !== undefined && listing.rating >= selectedRating),
    
<<<<<<< HEAD
    return matchesSearch && matchesCategory && matchesPrice && matchesRating
  }),

  const handleRequestQuote = (listingId: string) => {
    setIsLoading(true),
    
    const listing = allListings.find(item => item.id === listingId),
    
    setTimeout(() => {
      setIsLoading(false),
      if (listing) {
        toast({
          title: &quot;Quote Requested&quot;,
          description: `Your quote request for ${listing.title} has been sent.`
        }),
        
        navigate(&quot;/request-quote", {
          state: { 
            serviceType: categorySlug,
            specificItem: {
              id: listing.id,
              title: listing.title,
              category: listing.category,
              image: listing.images?.[0]
            }
=======
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;});

  const _handleRequestQuote = (_listingId: string) => {_setIsLoading(true);
    
    const _listing = allListings.find(item => item.id === listingId);
    
    setTimeout__(() => {
      setIsLoading(false);
      if (listing) {
        toast({
          title: "Quote Requested", _description: `Your quote request for ${listing.title} has been sent.`
        });
        
        navigate("/request-quote", {_state: { 
            serviceType: categorySlug, _specificItem: {
              id: listing.id, _title: listing.title, _category: listing.category, _image: listing.images?.[0]}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          }
        })
      }
    }, 500)
  },

  return (_<div className="min-h-screen bg-zion-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <GradientHeading>{_title}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            {_description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h3>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2&quot;>
                  Category
                </label>
                <Select 
<<<<<<< HEAD
                  value={selectedCategory} 
                  onValueChange={(value: string) => {
<<<<<<< HEAD
                    // // // console.log("Category selected:", value),
                    setSelectedCategory(value)
=======
                    // console.log(&quot;Category selected:", value);
                    setSelectedCategory(value);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  }}
=======
                  value={_selectedCategory} 
                  onValueChange={_(value: string) => {
                    
                    setSelectedCategory(value);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white&quot;>
                    <SelectValue placeholder=&quot;Select Category" />
                  </SelectTrigger>
<<<<<<< HEAD
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light&quot;>
                    <SelectItem value=&quot;all" className="text-white">All Categories</SelectItem>
                    {categoryFilters.map((filter) => (
                      <SelectItem key={filter.value} value={filter.value} className="text-white">
                        {filter.label}
=======
                  <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>
                    {_categoryFilters.map(_(filter) => (
                      <SelectItem key={filter.value} value={_filter.value} className="text-white">
                        {_filter.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Price Range
                </label>
                <div className="mt-6 px-2">
                  <Slider
                    defaultValue={_[priceRange.min, _priceRange.max]}
                    min={_priceRange.min}
                    max={_priceRange.max}
                    step={_(priceRange.max - priceRange.min) / 100}
                    value={_currentPriceFilter}
                    onValueChange={_handleSliderChange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>${_currentPriceFilter[0].toLocaleString()}</span>
                    <span>${_currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-zion-slate-light block mb-2">
                  Minimum Rating
                </label>
<<<<<<< HEAD
                <div className="flex flex-wrap gap-2&quot;>
                  {[null, 3, 4, 5].map((rating) => (
                    <Button
                      key={rating === null ? 'any' : rating}
                      variant=&quot;outline&quot;
                      size=&quot;sm&quot;
                      onClick={() => {
<<<<<<< HEAD
                        // // // console.log("Rating selected:", rating),
                        setSelectedRating(rating)
=======
                        // console.log(&quot;Rating selected:", rating);
                        setSelectedRating(rating);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                      }}
                      className={`${
                        selectedRating === rating 
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple&quot; 
                          : &quot;border-zion-blue-light text-zion-slate-light&quot;
                      }`}
                    >
                      {rating === null ? (
                        &quot;Any"
=======
                <div className="flex flex-wrap gap-2">
                  {_[null, _3, _4, _5].map(_(rating) => (_<Button
                      key={rating === null ? 'any' : rating}
                      variant="outline"
                      size="sm"
                      onClick={_() => {
                        
                        setSelectedRating(rating);}}
                      className={_`${
                        selectedRating === rating 
                          ? "bg-zion-purple/20 border-zion-purple text-zion-purple" 
                          : "border-zion-blue-light text-zion-slate-light"}`}
                    >
                      {_rating === null ? (
                        "Any"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ) : (
                        <div className="flex items-center">
                          {[...Array(rating)].map(_(_, _i) => (
                            <Star key={i} className="h-3 w-3 fill-zion-cyan text-zion-cyan" />
                          ))}
                          <span className="ml-1&quot;>& Up</span>
                        </div>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Button 
<<<<<<< HEAD
                variant="outline" 
<<<<<<< HEAD
                className="w-full border-zion-purple text-zion-purple hover: bg-zion-purple/10"
                onClick={() => {
                  // // // console.log("Resetting filters"),
                  setSearchQuery(""),
                  setSelectedCategory("all"),
                  setCurrentPriceFilter([priceRange.min, priceRange.max]),
                  setSelectedRating(null)
=======
                variant=&quot;outline" 
                className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
                onClick={() => {
                  // console.log(&quot;Resetting filters&quot;);
                  setSearchQuery("&quot;);
                  setSelectedCategory(&quot;all&quot;);
                  setCurrentPriceFilter([priceRange.min, priceRange.max]);
                  setSelectedRating(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                }}
=======
                className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                onClick={_() => {
                  
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setCurrentPriceFilter([priceRange.min, _priceRange.max]);
                  setSelectedRating(null);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          <div className=&quot;lg:col-span-3&quot;>
            <div className=&quot;bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light&quot;>
              <div className=&quot;flex flex-col md:flex-row gap-4&quot;>
                <div className=&quot;relative flex-grow&quot;>
                  <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4&quot; />
                  <Input
<<<<<<< HEAD
                    type=&quot;text&quot;
                    placeholder=&quot;Search listings...&quot;
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
                      // // // console.log("Search query:", e.target.value),
                      setSearchQuery(e.target.value)
=======
                      // console.log(&quot;Search query:&quot;, e.target.value);
                      setSearchQuery(e.target.value);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                    }}
                    className=&quot;pl-10 bg-zion-blue border border-zion-blue-light text-white&quot;
=======
                    type="text"
                    placeholder="Search listings..."
                    value={_searchQuery}
                    onChange={_(_e: React.ChangeEvent<HTMLInputElement>) => {
                      
                      setSearchQuery(e.target.value);}}
                    className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>
                
                <div className=&quot;flex items-center gap-2 ml-auto&quot;>
                  <Button
<<<<<<< HEAD
                    variant=&quot;outline&quot;
                    size=&quot;icon&quot;
                    onClick={() => setView(&quot;grid&quot;)}
                    className={`${view === &quot;grid&quot; ? &quot;bg-zion-purple/20 border-zion-purple text-zion-purple&quot; : &quot;border-zion-blue-light text-zion-slate&quot;}`}
=======
                    variant="outline"
                    size="icon"
                    onClick={_() => setView("grid")}
                    className={_`${view === "grid" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <LayoutGrid className=&quot;h-4 w-4&quot; />
                  </Button>
                  <Button
<<<<<<< HEAD
                    variant=&quot;outline&quot;
                    size=&quot;icon&quot;
                    onClick={() => setView(&quot;list&quot;)}
                    className={`${view === &quot;list&quot; ? &quot;bg-zion-purple/20 border-zion-purple text-zion-purple&quot; : &quot;border-zion-blue-light text-zion-slate&quot;}`}
=======
                    variant="outline"
                    size="icon"
                    onClick={_() => setView("list")}
                    className={_`${view === "list" ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate"}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <List className=&quot;h-4 w-4&quot; />
                  </Button>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            <div className=&quot;mb-6&quot;>
              <p className=&quot;text-zion-slate-light&quot;>
                Showing {filteredListings.length} results
                {selectedCategory !== &quot;all&quot; && ` in ${selectedCategory}`}
                {searchQuery && ` for &quot;${searchQuery}&quot;`}
              </p>
            </div>

            {isLoading ? (
              <div className={`grid gap-6 ${view === &quot;grid&quot; ? &quot;grid-cols-1 md:grid-cols-2&quot; : &quot;grid-cols-1&quot;}`}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className=&quot;rounded-lg overflow-hidden border border-zion-blue-light&quot;>
                    <Skeleton className=&quot;h-48 w-full bg-zion-blue-light/20&quot; />
                    <div className=&quot;p-4&quot;>
                      <Skeleton className=&quot;h-6 w-1/3 mb-2 bg-zion-blue-light/20&quot; />
                      <Skeleton className=&quot;h-8 w-5/6 mb-4 bg-zion-blue-light/20&quot; />
                      <Skeleton className=&quot;h-4 w-full mb-2 bg-zion-blue-light/20&quot; />
                      <Skeleton className=&quot;h-4 w-4/5 mb-4 bg-zion-blue-light/20&quot; />
                      <div className=&quot;flex justify-between items-center pt-4&quot;>
                        <Skeleton className=&quot;h-6 w-1/4 bg-zion-blue-light/20&quot; />
                        <Skeleton className=&quot;h-8 w-1/4 bg-zion-blue-light/20&quot; />
=======
            <div className="mb-6">
              <p className="text-zion-slate-light">
                Showing {_filteredListings.length} results
                {_selectedCategory !== "all" && ` in ${selectedCategory}`}
                {_searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {_isLoading ? (_<div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                {_[1, _2, _3, _4].map((i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-zion-blue-light">
                    <Skeleton className="h-48 w-full bg-zion-blue-light/20" />
                    <div className="p-4">
                      <Skeleton className="h-6 w-1/3 mb-2 bg-zion-blue-light/20" />
                      <Skeleton className="h-8 w-5/6 mb-4 bg-zion-blue-light/20" />
                      <Skeleton className="h-4 w-full mb-2 bg-zion-blue-light/20" />
                      <Skeleton className="h-4 w-4/5 mb-4 bg-zion-blue-light/20" />
                      <div className="flex justify-between items-center pt-4">
                        <Skeleton className="h-6 w-1/4 bg-zion-blue-light/20" />
                        <Skeleton className="h-8 w-1/4 bg-zion-blue-light/20" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  </div>
                ))}
              </div>
<<<<<<< HEAD
            ) : filteredListings.length > 0 ? (
              <div className={`grid gap-6 ${view === &quot;grid&quot; ? &quot;grid-cols-1 md:grid-cols-2&quot; : &quot;grid-cols-1&quot;}`}>
                {filteredListings.map((listing) => (
=======
            ) : filteredListings.length > 0 ? (_<div className={_`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                {_filteredListings.map((listing) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <ProductListingCard 
                    key={listing.id}
                    listing={_listing}
                    view={_view}
                    onRequestQuote={_handleRequestQuote}
                  />
                ))}
              </div>
<<<<<<< HEAD
            ) : (
              <div className=&quot;text-center py-20&quot;>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>No listings found</h3>
                <p className=&quot;text-zion-slate-light mb-6&quot;>Try adjusting your filters or search query</p>
                <Button 
                  variant=&quot;outline&quot; 
                  onClick={() => {
<<<<<<< HEAD
                    setSearchQuery(""),
                    setSelectedCategory("all"),
                    setCurrentPriceFilter([priceRange.min, priceRange.max]),
                    setSelectedRating(null)
=======
                    setSearchQuery("&quot;);
                    setSelectedCategory(&quot;all");
                    setCurrentPriceFilter([priceRange.min, priceRange.max]);
                    setSelectedRating(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  }}
=======
            ) : (_<div className="text-center py-20">
                <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>
                <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>
                <Button 
                  variant="outline" 
                  onClick={_() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setCurrentPriceFilter([priceRange.min, _priceRange.max]);
                    setSelectedRating(null);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}