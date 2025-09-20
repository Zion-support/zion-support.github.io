
  const navigate = useNavigate(),
  const [searchQuery, setSearchQuery] = useState(""),
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]),
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]),
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]),
  const [selectedRating, setSelectedRating] = useState<number | null>(null),
    }
    // Product type filter,
    if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {,
      return false
    }
    // Location filter,
    if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {,
      return false
    }
    // Availability filter,
    if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {,
      return false
    }
    // Rating filter,
    if (selectedRating && (!listing.rating |listing.rating < selectedRating)) {,
      return false
    }
,
    return true
  }),
  const handleFilterChange = (filterType: string, value: string) => {,
    console.log(`Filter changed: ${filterType} = ${value}`),
    return true
  }),
  const handleFilterChange = (filterType: string, value: string) => {,
    // // // console.log(`Filter changed: ${filterType} = ${value}`),
    switch (filterType) {,
      case 'productType':,
        setSelectedProductTypes(prev =>,
  const searchSuggestions: SearchSuggestion[] = generateSearchSuggestions(),
  const filterOptions = generateFilterOptions(),
  // Filter listings based on selected filters,
  const filteredListings = MARKETPLACE_LISTINGS.filter(listing => {,
    // Search filter,
    if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&,
        !listing.description.toLowerCase().includes(searchQuery.toLowerCase()) &&,
        !listing.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {,
      return false
    }
,
    // Product type filter,
    if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(listing.category)) {,
      return false,
    }
,
    // Location filter,
    if (selectedLocations.length > 0 && listing.location && !selectedLocations.includes(listing.location)) {,
      return false,
    }
,
    // Availability filter,
    if (selectedAvailability.length > 0 && listing.availability && !selectedAvailability.includes(listing.availability)) {,
      return false,
    }
,
    // Rating filter,
    if (selectedRating && (!listing.rating || listing.rating < selectedRating)) {,
      return false,
    }
,
    return true,
  }),
  const handleFilterChange = (filterType: string, value: string) => {,
    console.log(`Filter changed: ${filterType} = ${value}`),
    switch (filterType) {,
      case 'productType':,
        setSelectedProductTypes(prev =>,
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value],
        ),
        break,
      case 'location':,
          prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value],
        ),
        break,
      case 'availability':
          }
        }
      }),
    }
                selectedProductTypes,
                selectedLocations,
                selectedAvailability,
                selectedRating
              }}
              filterOptions={filterOptions}
              onFilterChange={handleFilterChange}
              onRatingChange={setSelectedRating}
              onClearFilters={clearAllFilters}
            />,
          </div>,
          {/* Main content */}
          <div className="lg: col-span-3">,
            {/* Active filters display */}
            <ActiveFiltersBar,
              selectedProductTypes={selectedProductTypes}
              selectedLocations={selectedLocations}
              selectedAvailability={selectedAvailability}
              selectedRating={selectedRating}
              searchQuery={searchQuery}
              onRemoveFilter={handleFilterChange}
              onRemoveRating={() => setSelectedRating(null)}
              onClearSearch={() => setSearchQuery("")}
            />,
            {/* Results count */}
            <div className="mb-6">,
              <p className="text-zion-slate-light">,
                Showing {filteredListings.length} results,
                {searchQuery && ` for "${searchQuery}"`}
              </p>,
            </div>,
            {/* Display actual marketplace listings */}
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,
              {filteredListings.length > 0 ? (,
                filteredListings.map((listing) => (,
                    listing={listing}
                    onRequestQuote={handleRequestQuote}
                  />)),
              ) : (,
                <div className="col-span-2 text-center py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">,
                  <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>,
                  <p className="text-zion-slate-light max-w-md mx-auto mb-8">,
                    We couldn't find any listings matching your filters. Try adjusting your search criteria.,
                  </p>,
            </div>,
          </div>,
        </div>,
      </main>,
    </AppLayout>,