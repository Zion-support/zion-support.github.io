<<<<<<< HEAD
=======
import { useState,useEffect,useCallback,useMemo } from \"react\"; export const useSearch = (data,options) => {; const { searchFields,debounceMs = 300,fuzzySearch = true,caseSensitive = false } = options; const [searchState,setSearchState] = useState({; \"query\": filters: {},\"sortBy\": null sortOrder: \"asc\" results: data isLoading: false totalResults: data.length}); const [debouncedQuery,setDebouncedQuery] = useState();\");} \"export default ComponentName;\"
const { useState,useEffect,useCallback,useMemo } from "react"; export const useSearch = (data,options) => {; const { searchFields,debounceMs = 300,fuzzySearch = true,caseSensitive = false } = options; const [searchState,setSearchState] = useState({; query: filters: {},sortBy: null sortOrder: "asc" results: data isLoading: false totalResults: data.length}); const [debouncedQuery,setDebouncedQuery] = useState();");} "export default ComponentName;"""
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
