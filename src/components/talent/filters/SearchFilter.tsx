export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className='mb-6'>
      <div className='relative'>
        <label htmlFor='talent-search' className='sr-only'>
          Search talents
        </label>

        />
        <Input
          id='talent-search'
          type='text'
          placeholder='Search talents...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='talent-search-help'
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light'
        />
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results

          Type a name or skill to filter results

        </p>
      </div>
    </div>
  );
}