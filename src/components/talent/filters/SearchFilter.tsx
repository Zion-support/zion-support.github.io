

export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {

  return (
    <div className="mb-6">
      <div className="relative">
        <label htmlFor="talent-search" className="sr-only">
          Search talents
        </label>

=======
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <Input
          id='talent-search'
          type='text'
          placeholder='Search talents...'
          value={searchTerm}
<<<<<<< HEAD
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />

          Type a name or skill to filter results
        </p>
      </div>
    </div>
  )
