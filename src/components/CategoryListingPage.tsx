import ListingGridSkeleton from "@/components/skeletons/ListingGridSkeleton";
import { safeStorage } from "@/utils/safeStorage";




              {description}

            </p>;
          </div>;


          {/* Filters and Search */}

                  className='pl-10 bg-zion-blue border border-zion-blue-light text-white'                />;
              </div>;

              <Select value={selectedSort} onValueChange={setSelectedSort}>;
                <SelectTrigger className='bg-zion-blue border border-zion-blue-light text-white'>;
                  <div className='flex items-center'>;
                    {selectedSort === 'a-z' ? (;
                      <ArrowDownAZ className='mr-2 h-4 w-4' />;
                    ) : selectedSort === 'z-a' ? (;
                      <ArrowUpZA className='mr-2 h-4 w-4' />;
                    ) : null}
                    <span>;
                      {sortOptions && sortOptions.find(option => option && option.value === selectedSort);
      <div className='min - h-screen bg - zion - blue py - 12 px - 4'>;
        <div className='container mx - auto'>;
          <div className='text - center mb - 12'>;
          <div className='bg - zion - blue - dark rounded - lg p - 6 mb - 8 border border - zion - blue - light'>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
              <div className='relative'>;
                <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate' />;
                <Input;
                  type='text';
                  placeholder='Search listings...';
                  value={search_query}
                  on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
                    setSearchQuery (e.target.value);
                  }
                  className='pl - 10 bg - zion - blue border border - zion - blue - light text - white'                />;
              </div>;
              <Select value={selected_sort} onValueChange={setSelectedSort}>;
                <SelectTrigger className='bg - zion - blue border border - zion - blue - light text - white'>;
                  <div className='flex items - center'>;
                    {selected_sort === 'a - z' ? (
                      <ArrowDownAZ className='mr - 2 h - 4 w - 4' />) : selected_sort === 'z - a' ? (
                      <ArrowUpZA className='mr - 2 h - 4 w - 4' />) : null}
                    <span>;
                      {sort_options.find (option => option.value === selected_sort);

                        ?.label || 'Sort By'}
                    </span>;
                  </div>;
                </SelectTrigger>;


          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />
                    <span>;
                      {sortOptions.find(option => option.value === selectedSort)?.label || 'Sort By'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  {sortOptions.map((option) => (;
                    <SelectItem key={option.value} value={option.value} className="text-white">;
                      {option.label}
                    </SelectItem>;
                  ))}

                </SelectContent>;
              </Select>;

              <Select value={selectedFilter} onValueChange={setSelectedFilter}>;
                <SelectTrigger className='bg-zion-blue border border-zion-blue-light text-white'>;
                  <div className='flex items-center'>;
                    <Filter className='mr-2 h-4 w-4' />;
                    <span>;
                      {filterOptions && filterOptions.find(;
                        option => option && option.value === selectedFilter;
                      )?.label || 'Filter'}
                    </span>;
                  </div>;
                </SelectTrigger>;
                <SelectContent className='bg-zion-blue-dark border border-zion-blue-light'>;
                  {filterOptions && filterOptions.map(option => (;
ursor/fix-website-loading-errors-and-merge-6662
                  variant="outline"

}
