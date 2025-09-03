<<<<<<< HEAD
import { useState, useEffect, useCallback, useMemo } from 'react' export const useSearch = (data, options) => { const { searchFields, debounceMs = 300, fuzzySearch = true, caseSensitive = false } = options const [searchState, setSearchState] = useState({ query: ', filters: {}, sortBy: null, sortOrder: 'asc', results: data, isLoading: false, totalResults: data.length }) const [debouncedQuery, setDebouncedQuery] = useState(')
=======
<<<<<<< HEAD
import {useState, useEffect, useCallback, useMemo } from 'react' export const useSearch = (data, options) => {const { searchFields, debounceMs = 300, fuzzySearch = true, caseSensitive = false } = options const [searchState, setSearchState] = useState({query: '', filters: {}, sortBy: null, sortOrder: 'asc', results: data, isLoading: false, totalResults: data.length }) const [debouncedQuery, setDebouncedQuery] = useState('');"
}
=======
<<<<<<< HEAD
import { useState, useEffect, useCallback, useMemo } from &apos;react&apos;&apos;' export const useSearch = (data, options) => {} const { searchFields, debounceMs = 300, fuzzySearch = true, caseSensitive = false } = options const;const [searchState, setSearchState] = useState({ query: &apos;&apos;, filters: {}, sortBy: null, sortOrder: &apos;asc&apos;, results: data, isLoading: false, totalResults: data.length })&apos;&apos; const;const [debouncedQuery, setDebouncedQuery] = useState(&apos;&apos;);&apos;'
=======
<<<<<<< HEAD
import { useState, useEffect, useCallback, useMemo } from 'react' export const useSearch = (data, options) => { const { searchFields, debounceMs = 300, fuzzySearch = true, caseSensitive = false } = options const [searchState, setSearchState] = useState({ query: '', filters: {}, sortBy: null, sortOrder: 'asc', results: data, isLoading: false, totalResults: data.length }) const [debouncedQuery, setDebouncedQuery] = useState('');","
}""
=======
import { useState, useEffect, useCallback, useMemo }  from 'react';export const useSearch = (data, options) => { const { searchFields, debounceMs = 300, fuzzySearch = true, caseSensitive = false } = options const [searchState, setSearchState] = useState({ query: '', filters: {}, sortBy: null, sortOrder: 'asc', results: data, isLoading: false, totalResults: data.length }) const [debouncedQuery, setDebouncedQuery] = useState('');",
}"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
