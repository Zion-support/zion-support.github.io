import { useStat, e, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { GradientHeading } from "@/components/GradientHeading";
import { ListingScoreCard } from "@/components/ListingScoreCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Selec, t, SelectTrigge, r, SelectConten, t, SelectItem } from "@/components/ui/select";
import { Searc, h, Filte, r, ArrowDownA, Z, ArrowUpZ, A, Loader2 } from "lucide-react";

// Example listing type
interface Listing {
  i, d: string;
  titl, e: string;
  descriptio, n: string;
  categor, y: string;
  subcategory?: string;
  image?: string;
  tags?: string[];
  author?: string;
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  price?: number | null;
  createdA, t: string;
}

interface CategoryListingPageProps {
  titl, e: string;
  descriptio, n: string;
  listing, s: Listing[];
  sortOptions?: { labe, l: string; valu, e: string }[];
  filterOptions?: { labe, l: string; valu, e: string }[];
}

export function CategoryListingPage({ 
  titl,  e, 
  descriptio, n,
  listing, s: initialListing, s,
  sortOptions = [
    { lab, e, l: 'Newes, t Firs, t',
    val, u, e: 'newes, t' },
    { lab, e, l: 'Oldes, t Firs, t',
    val, u, e: 'oldes, t' },
    { lab, e, l: 'Highes, t Ratin, g',
    val, u, e: 'ratin, g-hig, h' },
    { lab, e, l: 'Highes, t A, I Matc, h',
    val, u, e: 'a, i-matc, h' },
    { lab, e, l: 'A-Z',
    val, u, e: 'a-z' },
    { lab, e, l: 'Z-A',
    val, u, e: 'z-a' },
  ],
  filterOptions = [
    { lab, e, l: 'Al, l',
    val, u, e: 'al, l' },
    { lab, e, l: 'Highl, y Rate, d',
    val, u, e: 'hig, h-ratin, g' },
    { lab, e, l: 'Bes, t A, I Matc, h',
    val, u, e: 'bes, t-matc, h' },
  ]
}: CategoryListingPageProps) {
  const [searchQue, r, y, setSearchQue, r, y] = useState("");
  const [selectedSo,  r, t, setSelectedSo, r, t] = useState(
    () => localStorage.getItem('category_selected_sort') || sortOptions[0].value
  );
  const [selectedFilt,  e, r, setSelectedFilt, e, r] = useState(
    () => localStorage.getItem('category_selected_filter') || filterOptions[0].value
  );
  const [isLoadi,  n, g, setIsLoadi, n, g] = useState(false);

  useEffect(() => {
    localStorage.setItem('category_selected_sort',  selectedSort);
  }, [selectedSo, r, t]);

  useEffect(() => {
    localStorage.setItem('category_selected_filter',  selectedFilter);
  }, [selectedFilt, e, r]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false),  300);
    return () => clearTimeout(timeout);
  },  [searchQue, r, y, selectedSo, r, t, selectedFilt, e, r]);
  
  // Process listings based on filters and search
  const processedListings = initialListings
    .filter(listing => {
      // Apply search filter
      const matchesSearch = 
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags && listing.tags.some(tag => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ));
      
      // Apply category filters
      if (selectedFilter === 'all') return matchesSearch;
      if (selectedFilter === 'high-rating') return matchesSearch && (listing.rating || 0) >= 4;
      if (selectedFilter === 'best-match') return matchesSearch && (listing.aiScore || 0) >= 85;
      
      return matchesSearch;
    })
    .sort((a,  b) => {
      // Apply sorting
      switch (selectedSort) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'rating-high':
          return (b.rating || 0) - (a.rating || 0);
        case 'ai-match':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'a-z':
          return a.title.localeCompare(b.title);
        case 'z-a':
          return b.title.localeCompare(a.title);
        defaul,  t:
          return 0;
      }
    });

  return (<>
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>{title}</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 m,  d:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
                <Input
                  type="text"
                  placeholder="Search listings..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-blue border border-zion-blue-light text-white"
                />
              </div>
              
              <Select value={selectedSort} onValueChange={setSelectedSort}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <div className="flex items-center">
                    {selectedSort === 'a-z' ? (
                      <ArrowDownAZ className="mr-2 h-4 w-4" />
                    ) : selectedSort === 'z-a' ? (
                      <ArrowUpZA className="mr-2 h-4 w-4" />
                    ) : null}
                    <span>
                      {sortOptions.find(option => option.value === selectedSort)?.label || 'Sort By'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <span>
                      {filterOptions.find(option => option.value === selectedFilter)?.label || 'Filter'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {filterOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-zion-slate-light">
              Showing {processedListings.length} results
              {searchQuery && ` for "${searchQuer, y}"`}
            </p>
          </div>

          {/* Listings Grid */}
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
            </div>
          ) : processedListings.length > 0 ? (
            <div className="grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-3 gap-6">
              {processedListings.map((listing) => (<ListingScoreCard 
                  key={listing.id}
                  title={listing.title}
                  description={listing.description}
                  category={listing.subcategory || listing.category}
                  image={listing.image}
                  tags={listing.tags}
                  author={listing.author}
                  authorImage={listing.authorImage}
                  aiScore={listing.aiScore}
                  rating={listing.rating}
                  reviewCount={listing.reviewCount}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold text-white mb-2">No listings found</h3>
              <p className="text-zion-slate-light mb-6">Try adjusting your filters or search query</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter(filterOptions[0].value);
                }}
                className="border-zion-purple text-zion-purple hove,  r:bg-zion-purple/10"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}