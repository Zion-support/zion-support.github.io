

export function SearchFilter(_{_searchTerm, _setSearchTerm}: SearchFilterProps) {_return (_<div className="mb-6">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
        <Input
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={_(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
      </div>
    </div>
  );
}
