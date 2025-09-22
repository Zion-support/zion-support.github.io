
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
))}
                </div>;
              </div>;
                    </SelectContent>;
                  </Select>;
                </div>;
              )}

                  onChange={(e:React.ChangeEvent<HTMLInputElement>) =>;

                    value={selectedAvailability}
                    onValueChange={(value:string) =>;
setSelectedAvailability(value);
                    }
                  >;
                    <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                      <SelectValue placeholder="Select Availability" />;
                    </SelectTrigger>;
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                      <SelectItem value="all" className="text-white">;
                        All;
                      </SelectItem>;
                      {availabilityOptions.map((a) => (;
                        <SelectItem key={a || 'unknown-availability'} value={a || ''} className="text-white">;
                          {a || 'N/A'}
                        </SelectItem>;                      ))}
                    </SelectContent>;
                  </Select>;
                </div>;
              )}
                    min={0}
                    max={priceRange.max}
                    step={priceRange.max / 100}
                    value={currentPriceFilter}
onValueChange={handleSliderChange}
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
                    </Button>;
                  ))}
                </div>;
              </div>;
              >;
                Clear All;
              </Button>;
            </div>;
          </div>;

                    value={searchQuery}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {;

                <div className="flex items-center gap-2 ml-auto">;"
                  <Select value={sortOption} onValueChange={setSortOption}>;
<SelectTrigger className="w-[150px] bg-zion-blue border border-zion-blue-light text-white">;
                      <SelectValue placeholder="Sort" />;
                    </SelectTrigger>;
                    <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                      <SelectItem value="newest" className="text-white">Newest</SelectItem>;
                      <SelectItem value="price-asc" className="text-white">Price:Low to High</SelectItem>;
                      <SelectItem value="price-desc" className="text-white">Price:High to Low</SelectItem>;
                      <SelectItem value="rating" className="text-white">Highest Rating</SelectItem>;
                    </SelectContent>;
                  </Select>;
                  <Button;
                    variant="outline";
                    size="icon";
                    onClick={() => setView(isGrid ? "list" :"grid")}
                    aria-label={isGrid ? "List view" :"Grid view"}
                    title={isGrid ? "List view" :"Grid view"}
                    className="border-zion-blue-light text-zion-slate-light focus-visible:ring-zion-purple";
                  >;
                    {ToggleViewIcon}
                    <span className="sr-only">;
                      {isGrid ? "List view" :"Grid view"}
                    </span>;
                  </Button>;
                </div>;
              </div>;
            </div>;
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
