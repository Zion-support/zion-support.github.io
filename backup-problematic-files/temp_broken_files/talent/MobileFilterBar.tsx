 interface MobileFilterBarProps {;
  searchTerm: string;
setSearchTerm: (value: string) => void;
setIsMobileFilterOpen: (isOpen: boolean) => void ;
export function MobileFilterBar ({;
  searchTerm;
setSearchTerm;
setIsMobileFilterOpen ;
 MobileFilterBarProps) {;
  return (<div className="lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4" > () => setIsMobileFilterOpen (true) ";"}variant="outline" className="w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light" > <Sliders className="h-4 w-4" /> Filter Talents </Button> <div className="relative mt-4" > <label htmlFor="mobile-talent-search" className="sr-only" > Search talents </label> <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" /> <Input aria-describedby="mobile-talent-search-help" className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate" mobile-talent-search-help"className=" sr-only" > Search by name or skill </p> </div> 