import { useState, useEffect, useCallback, useMemo } from 'react' export const useSearch = ( const { searchFields, debounceMs = 300, fuzzySearch = true, caseSensitive = false ) => {
  return $3;}
} = options const [searchState, setSearchState] =;
  useState({query: ''}
  filters:  ,}
}, sortBy: null, sortOrder: 'asc',
  results: data, isLoading: false, totalResults: data.length,
});
  const [debouncedQuery, setDebouncedQuery] = useState('')"";
}