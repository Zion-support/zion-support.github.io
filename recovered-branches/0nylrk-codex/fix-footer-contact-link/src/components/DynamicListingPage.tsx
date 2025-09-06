 interface PriceRange {
  min: number;
max: number 
}interface DynamicListingPageProps {
  title: string;
description: string;
categorySlug: string;
listings: ProductListing[];
categoryFilters: {
  label: string, value: string 
}[];
initialPrice?: PriceRange 
}export function DynamicListingPage ({
  title;
description;
categorySlug;
listings: allListings;
categoryFilters;
initialPrice = {
  min: 0, max: 10000 
}
}: DynamicListingPageProps) {
  const [selectedRating, setSelectedRating] = useState<number | null> (null);
useEffect ( () => {
  const listingsWithPrice = allListings.filter (l => l.price !== null);
if (listingsWithPrice.length > 0) {
  const min = Math.min (...listingsWithPrice.map (l => l.price || 0) );
const max = Math.max (...listingsWithPrice.map (l => l.price || 0) );
setPriceRange ({
  min, max 
}) 
}
}, [allListings]);
const [currentPriceFilter, setCurrentPriceFilter] = useState<[number, number]> ([ initialPrice.min;
initialPrice.max ]);
const filteredListings = allListings.filter (listing => {
  const matchesSearch = !searchQuery || listing.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || listing.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || const matchesRating = selectedRating === null || (listing.rating !== undefined && listing.rating >= selectedRating);
}
}) 
}
}, 500) 
};
return (<div className="min-h-screen bg-zion-blue py-12 px-4"> <div className="container mx-auto"> <div className="text-center mb-12"> <GradientHeading> {
  title 
}</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> {
  description 
}</p> </div> <div className="grid grid-cols-1 lg:grid-cols-4 gap-6"> <div className="lg:col-span-1"> <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-4 sticky top-6"> <h3 className="text-lg font-medium text-white mb-4 flex items-center"> <Filter className="mr-2 h-5 w-5" /> Filters </h3> <div className="mb-6"> <label className="text-sm font-medium text-zion-slate-light block mb-2" > Category </label> <Select 
}
}> <SelectValue placeholder="Select Category" /> </SelectTrigger> </SelectItem>) ) 
}</SelectContent> </Select> </div> <div className="mb-6"> <label className="text-sm font-medium text-zion-slate-light block mb-2"> Price Range </label> <div className="mt-6 px-2"> <Slider defaultValue= {
  [priceRange.min, priceRange.max] 
}min= {
  priceRange.min 
}max= {
  priceRange.max 
}step= {
  (priceRange.max - priceRange.min) / 100 
}value= {
  currentPriceFilter 
}onValueChange= {
  handleSliderChange 
}className="mb-4" /> <div className="flex justify-between text-sm text-zion-slate-light"> <span>$ {
  currentPriceFilter[0].toLocaleString () 
}</span> <span>$ {
  currentPriceFilter[1].toLocaleString () 
}</span> </div> </div> </div> <div className="mb-6"> <label className="text-sm font-medium text-zion-slate-light block mb-2"> Minimum Rating </label> 
}
}className= {
  `$ {
  selectedRating === rating ? "bg-zion-purple/20 border-zion-purple text-zion-purple" : "border-zion-blue-light text-zion-slate-light" 
}` 
}> {
  rating === null ? ("Any" [...Array (rating) ].map ( (, i) => (<Star key= {
  i 
}className="h-3 w-3 fill-zion-cyan text-zion-cyan" />) ) 
}<span className="ml-1" >& Up</span> </div>) 
}</Button>) ) 
}</div> </div> <Button 
}
}lg:col-span-3"> <div className=" bg-zion-blue-dark rounded-lg p-4 mb-6 border border-zion-blue-light"> <div className=" flex flex-col md:flex-row gap-4"> <div className=" relative flex-grow"> <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input 
}
}className=" pl-10 bg-zion-blue border border-zion-blue-light text-white"flex items-center gap-2 ml-auto" > <Button > <LayoutGrid className="h-4 w-4" /> </Button> <Button > <List className="h-4 w-4" /> </Button> </div> </div> </div> </div> </div> </div>) ) 
}</div> <ProductListingCard key= {
  listing.id 
}listing= {
  listing 
}view= {
  view 
}onRequestQuote= {
  handleRequestQuote 
}/>) ) 
}</div> 
}
}
}</div> </div> </div> </div>) 
}