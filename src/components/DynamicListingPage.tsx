import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,

interface PriceRange {
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

export function DynamicListingPage({
  title,
  description,
  categorySlug,
  listings: allListings,
  categoryFilters,
  initialPrice = { min: 0, max: 10000 },

    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  const clearCategories = () => setSelectedCategories([]);
  const [view, setView] = useState<ListingView>('grid');
  const isGrid = view === 'grid';
  // Swap icons to match action
  const ToggleViewIcon = isGrid ? (
    <List className='h-4 w-4' />
  ) : (
    <LayoutGrid className='h-4 w-4' />
  );
  const [isLoading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 0,
    max: 10000,
  });

  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [specQuery, setSpecQuery] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [sortOption, setSortOption] = useState('newest');

  const brandOptions = Array.from(

    }
  }, [allListings]);

  const [currentPriceFilter, setCurrentPriceFilter] = useState<
    [number, number]
  >([0, initialPrice.max]);

  let filteredListings: ProductListing[] = [];
  try {

      const matchesSearch =
        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (listing.tags &&

      const matchesBrand =
        selectedBrand === 'all' ||
        (listing.brand && listing.brand === selectedBrand);

      const matchesSpecs =
        !specQuery ||
        (listing.specifications &&

      const matchesAvailability =
        selectedAvailability === 'all' ||
        (listing.availability && listing.availability === selectedAvailability);

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(listing.category);

      const matchesPrice =
        listing.price === null ||
        (listing.price >= currentPriceFilter[0] &&
          listing.price <= currentPriceFilter[1]);

      const matchesRating =
        selectedRating === null ||
        (listing.rating !== undefined && listing.rating >= selectedRating),

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating &&
        matchesBrand &&
        matchesSpecs &&
        matchesAvailability

      switch (sortOption) {
        case 'price-asc':
          return (a.price || 0) - (b.price || 0);
        case 'price-desc':
          return (b.price || 0) - (a.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':
        default:
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
      }
    });
  } catch (error) {
    captureException(error);
    logErrorToProduction('Listing filter error:', { data: error });
  }

      if (listing) {
        toast({
          title: 'Quote Requested',
          description: `Your quote request for ${listing.title} has been sent.`,
        });

        // Store quote data in sessionStorage for the request-quote page
        const quoteData = {
          serviceType: categorySlug,
          specificItem: {
            id: listing.id,
            title: listing.title,
            category: listing.category,
            image: listing.images?.[0],
          },
        };

        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quoteRequestData', JSON.stringify(quoteData));
        }

        router.push('/request-quote');
      }
    }, 500);
  };

  return (
    <div className='min-h-screen bg-zion-blue py-12 px-4'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <GradientHeading>{title}</GradientHeading>
          <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>
            {description}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          <div className='lg:col-span-1'>
            <div className='bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6'>
              <h3 className='text-lg font-medium text-white mb-4 flex items-center'>
                <Filter className='mr-2 h-5 w-5' /> Filters
              </h3>

              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                  Categories
                </label>
                <div className='space-y-2'>
                  {categoryFilters.map(filter => (
                    <div key={filter.value} className='flex items-center'>
                      <Checkbox
                        id={`cat-${filter.value}`}

                      />
                      <label
                        htmlFor={`cat-${filter.value}`}
                        className='ml-2 text-sm text-zion-slate-light cursor-pointer'
                      >
                        {filter.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {brandOptions.length > 0 && (
                <div className='mb-6'>
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                    Brand
                  </label>
                  <Select
                    value = {selectedBrand,}
                    onValueChange = {(value: string,) => setSelectedBrand(value),}
                  >
                    <SelectTrigger className='bg-zion-blue border border-zion-blue-light text-white'>
                      <SelectValue placeholder='Select Brand' />
                    </SelectTrigger>
                    <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>
                      <SelectItem value='all' className='text-white'>
                        All Brands
                      </SelectItem>

                          {b || 'N/A'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                  Specifications
                </label>
                <Input

                />
              </div>

              {availabilityOptions.length > 0 && (
                <div className='mb-6'>
                  <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                    Availability
                  </label>
                  <Select
                    value = {selectedAvailability,}
                    onValueChange = {(value: string,) =>
                      setSelectedAvailability(value)
                    ,}
                  >
                    <SelectTrigger className='bg-zion-blue border border-zion-blue-light text-white'>
                      <SelectValue placeholder='Select Availability' />
                    </SelectTrigger>
                    <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>
                      <SelectItem value='all' className='text-white'>
                        All
                      </SelectItem>

                          {a || 'N/A'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                  Price Range
                </label>
                <div className='mt-6 px-2'>
                  <Slider

                  />
                  <div className='flex justify-between text-sm text-zion-slate-light'>
                    <span>${currentPriceFilter[0].toLocaleString()}</span>
                    <span>${currentPriceFilter[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className='mb-6'>
                <label className='text-sm font-medium text-zion-slate-light block mb-2'>
                  Minimum Rating
                </label>

                      }}
                      aria-pressed = {selectedRating === rating,}
                      className={`{
                        selectedRating === rating
                          ? "bg-zion-purple/30 border-zion-purple text-zion-purple"
                          : "border-zion-blue-light text-zion-slate-light"
                      } focus-visible:ring-zion-purple`}
                    >
                      {rating === null ? (
                        'Any'
                      ) : (

                            />
                          ))}
                          <span className='ml-1'>& Up</span>
                        </div>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                variant='outline'
                className='w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                onClick={() => {
                  logInfo('Clearing filters');
                  setSearchQuery('');
                  clearCategories();
                  setCurrentPriceFilter([0, priceRange.max]);
                  setSelectedRating(null);
                  setSelectedBrand('all');
                  setSpecQuery('');
                  setSelectedAvailability('all');
                }}
              >
                Clear All
              </Button>
            </div>
          </div>

          <div className='lg:col-span-3'>
            <div className='bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light'>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='relative flex-grow'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4' />
                  <Input

                    }}
                    className='pl-10 bg-zion-blue border border-zion-blue-light text-white'
                  />
                </div>

                <div className='flex items-center gap-2 ml-auto'>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className='w-[150px] bg-zion-blue border border-zion-blue-light text-white'>
                      <SelectValue placeholder='Sort' />
                    </SelectTrigger>
                    <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>
                      <SelectItem value='newest' className='text-white'>
                        Newest
                      </SelectItem>
                      <SelectItem value='price-asc' className='text-white'>
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value='price-desc' className='text-white'>
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value='rating' className='text-white'>
                        Highest Rating
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button

                  >
                    {ToggleViewIcon}
                    <span className='sr-only'>
                      {isGrid ? 'List view' : 'Grid view'}
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className='mb-6'>
              <p className='text-zion-slate-light'>
                Showing {filteredListings.length} results
                {selectedCategories.length > 0 &&
                  ` in ${selectedCategories.join(', ')}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {isLoading ? (
              <div

                  >
                    <Skeleton height={192} width='100%' />
                    <div className='p-4'>
                      <Skeleton height={24} width='33%' className='mb-2' />
                      <Skeleton height={32} width='83%' className='mb-4' />
                      <Skeleton height={16} width='100%' className='mb-2' />
                      <Skeleton height={16} width='80%' className='mb-4' />
                      <div className='flex justify-between items-center pt-4'>
                        <Skeleton height={24} width='25%' />
                        <Skeleton height={32} width='25%' />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredListings.length > 0 ? (
              <div

                  <ProductListingCard
                    key = {listing.id,}
                    listing = {listing,}
                    view = {view,}
                    onRequestQuote = {handleRequestQuote,}
                    detailBasePath = {detailBasePath,}
                  />
                ))}
              </div>
            ) : (
              <div className='text-center py-20'>
                <h3 className='text-xl font-bold text-white mb-2'>
                  No listings found
                </h3>
                <p className='text-zion-slate-light mb-6'>
                  Try adjusting your filters or search query
                </p>
                <Button

                  }}
                  className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                >
                  Clear All
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

};
if (typeof window !== 'undefined') {';
  sessionStorage.setItem ('quoteRequestData', JSON.stringify (quoteData) ) ;

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
}'"