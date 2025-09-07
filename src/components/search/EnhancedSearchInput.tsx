import { logInfo, logWarn } from '@/utils/productionLogger'

import React, { useState, useEffect, useRef, useMemo } from "react",
import { useTranslation } from "react-i18next",
import { Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input",
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",
import { SearchSuggestion } from "@/types/search",
import { useDebounce } from "@/hooks/useDebounce",
import { useRouter } from "next/router",
import { slugify } from "@/lib/slugify",
import { debounce } from "lodash",
import { logInfo, logWarn } from '@/utils/productionLogger',

interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
  /**
   * Optional callback when a suggestion is selected. This allows parent
   * components to perform actions such as navigation.
   */;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  placeholder?: string;  /**
   */

   * Optional list of fallback suggestions (e.g. recent searches).
   * If provided, these will be shown when the input is empty.
  searchSuggestions?: SearchSuggestion[]
}
export function EnhancedSearchInput({

  value
  onChange
  onSelectSuggestion
  placeholder = "Search..."
  searchSuggestions
}: EnhancedSearchInputProps) {

  searchSuggestions;
}: EnhancedSearchInputProps) {;

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo
import { Search, X  } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions'
import { SearchSuggestion } from '@/types/search'

  value,
  onChange,
  onSelectSuggestion,
  placeholder = "Search...",

  const debouncedFetchSuggestions = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {
          setApiSuggestions([])
          return
          setApiSuggestions([]),
          return;
        setLoading(true)
        try {
          const response = await fetch(`/api/search/suggest?q=${encodeURIComponent(query)}`, {
            signal: AbortSignal.timeout(5000) // 5 second timeout
          })
          if (response.ok) {
            const data = await response.json()
            if (Array.isArray(data)) {
              setApiSuggestions(data.slice(0, 5)), // Limit to 5 API suggestions
import React, { useState, useEffect, useRef, useMemo } from "react",;
import { useTranslation } from "react-i18next",;
import { Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input",;
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",;
import { SearchSuggestion } from "@/types/search",;
import { useDebounce } from "@/hooks/useDebounce",;
import { useRouter } from "next/router",;
import { slugify } from "@/lib/slugify",;
import { debounce } from "lodash",;
import { logInfo, logWarn } from '@/utils/productionLogger',;
interface EnhancedSearchInputProps {;
  value: string,;
  onChange: (value: string) => void,;

  /**;
   * Optional callback when a suggestion is selected. This allows parent;
   * components to perform actions such as navigation.;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,;
  placeholder?: string,;
   * Optional list of fallback suggestions (e.g. recent searches).;
   * If provided, these will be shown when the input is empty.;
  searchSuggestions?: SearchSuggestion[];
;
export function EnhancedSearchInput({;
  value,;
  onChange,;
  onSelectSuggestion,;
  placeholder = "Search...",;
  const [isFocused, setIsFocused] = useState(false),;
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),;
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1),;
  const inputRef = useRef<HTMLInputElement>(null),;
  const containerRef = useRef<HTMLDivElement>(null),;
  const [valueOnFocus, setValueOnFocus] = useState<string | null>(null),;
  const [enterHandledPostFocus, setEnterHandledPostFocus] = useState(false),;
  const { t } = useTranslation(),;
  const [apiSuggestions, setApiSuggestions] = useState<SearchSuggestion[]>([]),;
  const [loading, setLoading] = useState(false),;
  const debounced = useDebounce(value, 200),;
  const debouncedFetchSuggestions = useMemo(;
    () =>;
      debounce(async (query: string) => {;
        if (!query.trim()) {;
          setApiSuggestions([]),;

        set_loading (true);

          const response = await fetch (`/api / search / suggest?q=${encodeURIComponent (query)}`, {
            signal: AbortSignal.timeout (5000) // 5 second timeout;
          });
          // Check condition
if ( {) {
  $2
            const data = await response.json ();
            if () {) {
              setApiSuggestions (data.slice (0, 5)), // Limit to 5 API suggestions;

          } else {

            // Silently fail for search suggestions - don't show error toast;
            log_warn ('Search suggestions API error:', { data: response.status }),
            setApiSuggestions ([]);
        } catch (error) {
          log_warn ('Search suggestions fetch error:', { data: error }),

        } finally {
          setLoading(false)
      }, 300)
    []
  )
  // Fetch suggestions from API when input value changes
  useEffect((,) => {
    if (!debounced) {
      // Show recent suggestions provided via props when no query entered
      setFilteredSuggestions(
        (searchSuggestions |[]).filter(s => s.type === 'recent')
      setHighlightedIndex(-1)
    const controller = new AbortController ();
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, {
      signal: controller.signal;
      .then (res => {
        if (throw new Error ('Failed to fetch suggestions')) {
        return res.json ();
      .then (data => {
          setFilteredSuggestions (data.slice (0, 8));

          setFilteredSuggestions([])
      .catch(() => setFilteredSuggestions([]))
    return () => controller.abort()
  }, [debounced, searchSuggestions])
  // Handle clicks outside the component to close suggestions
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
        // setHighlightedIndex(-1), // Already handled in onBlur generally
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])
  const router = useRouter()
  const handleSelectSuggestion = (suggestionObj: SearchSuggestion,) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj })
    onChange(suggestionObj.text)
      }, 300),;
    [];
  ),;
  // Fetch suggestions from API when input value changes;
  useEffect(() => {;
    if (!debounced) {;
      // Show recent suggestions provided via props when no query entered;
      setFilteredSuggestions(;
        (searchSuggestions || []).filter(s => s.type === 'recent');
      setHighlightedIndex(-1),;
    const controller = new AbortController(),;
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {;
      .then(res => {;
        if (!res.ok) throw new Error('Failed to fetch suggestions'),;
        return res.json();
      .then(data => {;
        if (Array.isArray(data)) {;
          setFilteredSuggestions(data.slice(0, 8));
        } else {;
          setFilteredSuggestions([]);
        setHighlightedIndex(-1);
      .catch(() => setFilteredSuggestions([])),;
    return () => controller.abort();
  }, [debounced, searchSuggestions]),;
  // Handle clicks outside the component to close suggestions;
    function handleClickOutside(event: MouseEvent) {;
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {;
        setIsFocused(false),;
        // setHighlightedIndex(-1), // Already handled in onBlur generally;

    document.addEventListener("mousedown", handleClickOutside),
  }, []),

  const router = useRouter(),

  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),
    onChange(suggestionObj.text),

    if (onSelectSuggestion) {
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj })
      onSelectSuggestion(suggestionObj)
        setHighlightedIndex (-1);
      .catch (() => setFilteredSuggestions ([]));
    return () => controller.abort ();
  }, [debounced, search_suggestions]);
  useEffect ((, ) => {
 * handleClickOutside - Function description
function handleClickOutside() {
        setIsFocused (false),
        // setHighlightedIndex (-1), // Already handled in on_blur generally;

      if (suggestionObj.id) {
        router.push(`/marketplace/listing/${suggestionObj.id}`)
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {
        router.push(suggestionObj.slug)
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {
        router.push(`/blog/${suggestionObj.slug}`)

    document.addEventListener ("mousedown", handleClickOutside);
    return () => document.removeEventListener ("mousedown", handleClickOutside);
  }, []);
  const router = use_router ();
  const handleSelectSuggestion = (suggestion_obj: SearchSuggestion, ) =>: any {
    log_info ('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestion_obj }),
    on_change (suggestion_obj.text);
      log_info ('Calling onSelectSuggestion with:', { data: suggestion_obj }),
      onSelectSuggestion (suggestion_obj);

        router.push (`/search/${suggestion_obj.slug || slugify (suggestion_obj.text)}`);

    inputRef.current?.blur()
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,) => {
    switch (e.key) {

      case 'ArrowDown':;
          e.prevent_default (),
          setHighlightedIndex (prev => (prev + 1) % filtered_suggestions.length);

  const debouncedFilterSuggestions = useMemo(// Changed from useCallback to useMemo
    () => debounce((currentValue: string, suggestions: SearchSuggestion[]) => {
      if(!currentValue) {
        setFilteredSuggestions(suggestions.filter(s => s.type === 'recent'))

        setFilteredSuggestions (suggestions.filter (string => s.type === 'recent'));
      const filtered = suggestions.filter (suggestion =>;
        suggestion.text.toLowerCase ().includes (current_value.toLowerCase ()));
      filtered.sort ((a, b) => {
        const aStartsWith = a.text.toLowerCase ().starts_with (current_value.toLowerCase ()) ? -1 : 0;
        const bStartsWith = b.text.toLowerCase ().starts_with (current_value.toLowerCase ()) ? -1 : 0;
        return aStartsWith - bStartsWith;
      setFilteredSuggestions (filtered.slice (0, 8));
}, 300),
    [setFilteredSuggestions] // setFilteredSuggestions from useState is stable);
  useEffect (() => {
  // TODO: Add dependencies if needed;

  return () => {
    // Cleanup function;
};
}, []); [])
    debouncedFilterSuggestions(value, searchSuggestions)
      debouncedFilterSuggestions.cancel()
}, [value, searchSuggestions, debouncedFilterSuggestions])
  useEffect(() => {
  // TODO: Add dependencies if needed
    // Cleanup function
      if(containerRef.current && !containerRef.current.contains(event.target as Node)) {

import { logInfo, logWarn } from '@/utils/productionLogger';

  onChange: (value: string,) => void,;
  placeholder?: string;  /**;
   * Optional list of fallback suggestions (e && e.g. recent searches).;

export function EnhancedSearchInput(): any ({;
  value;
  onChange;
  onSelectSuggestion;
  placeholder = "Search...";
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo;
import { Search, X  } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { SearchSuggestion } from '@/types/search';
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [valueOnFocus, setValueOnFocus] = useState<string | null>(null);
  const [enterHandledPostFocus, setEnterHandledPostFocus] = useState(false);
  const { t } = useTranslation();
  const [apiSuggestions, setApiSuggestions] = useState<SearchSuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(value, 200);

    (,) =>;
      debounce(async (query: string,) => {;
        if (!query && query.trim()) {;

        setLoading(true);
        try {;
          const response = await fetch(`/api/search/suggest?q=${encodeURIComponent(query)}`, {;
            signal: AbortSignal && AbortSignal.timeout(5000) // 5 second timeout;

          if (response && response.ok) {;
            const data = await response && response.json();
            if (Array && Array.isArray(data)) {;
              setApiSuggestions(data && data.slice(0, 5)), // Limit to 5 API suggestions;
            logWarn('Search suggestions API error:', { data: response && response.status }),;
            setApiSuggestions([]);
        } catch (error) {;
          logWarn('Search suggestions fetch error:', { data: error }),;
        } finally {;
          setLoading(false);
      }, 300);
  );

  useEffect((,) => {;
        (searchSuggestions || []).filter(s => s && s.type === 'recent');

    const controller = new AbortController();
      signal: controller && controller.signal;
        if (!res && res.ok) throw new Error('Failed to fetch suggestions');
        return res && res.json();
          setFilteredSuggestions(data && data.slice(0, 8));
      .catch(() => setFilteredSuggestions([]));
    return () => controller && controller.abort();
  }, [debounced, searchSuggestions]);

    function handleClickOutside(): any (event: MouseEvent) {;
      if (containerRef && containerRef.current && !containerRef && containerRef.current.contains(event && event.target as Node)) {;

    document && document.addEventListener("mousedown", handleClickOutside);
    return () => document && document.removeEventListener("mousedown", handleClickOutside);

  const router = useRouter();

  const handleSelectSuggestion = (suggestionObj: SearchSuggestion,) => {;
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),;
    onChange(suggestionObj && suggestionObj.text);
    if (onSelectSuggestion) {;
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj }),;
      onSelectSuggestion(suggestionObj);
      // Provide a sensible default navigation if the parent did not supply a handler;
      logWarn('onSelectSuggestion callback not provided');
      if (suggestionObj && suggestionObj.id) {;
        router && router.push(`/marketplace/listing/${suggestionObj && suggestionObj.id}`);
      } else if (suggestionObj && suggestionObj.type === 'doc' && suggestionObj && suggestionObj.slug?.startsWith('/')) {;
        router && router.push(suggestionObj && suggestionObj.slug);
      } else if (suggestionObj && suggestionObj.type === 'blog' && suggestionObj && suggestionObj.slug) {;
        router && router.push(`/blog/${suggestionObj && suggestionObj.slug}`);
        router && router.push(`/search/${suggestionObj && suggestionObj.slug || slugify(suggestionObj && suggestionObj.text)}`);
    setIsFocused(false);
    inputRef && inputRef.current?.blur();

  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>,) => {;
    switch (e && e.key) {;
        if (isFocused && filteredSuggestions && filteredSuggestions.length > 0) {;
          e && e.preventDefault(),;
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions && filteredSuggestions.length);
  const debouncedFilterSuggestions = useMemo(// Changed from useCallback to useMemo;
    () => debounce((currentValue: string, suggestions: SearchSuggestion[]) => {;
      if(!currentValue) {;
        setFilteredSuggestions(suggestions && suggestions.filter(s => s && s.type === 'recent'));

      const filtered = suggestions && suggestions.filter(suggestion =>;
        suggestion && suggestion.text.toLowerCase().includes(currentValue && currentValue.toLowerCase());
      filtered && filtered.sort((a, b) => {;
        const aStartsWith = a && a.text.toLowerCase().startsWith(currentValue && currentValue.toLowerCase()) ? -1 : 0;
        const bStartsWith = b && b.text.toLowerCase().startsWith(currentValue && currentValue.toLowerCase()) ? -1 : 0;
        return aStartsWith-bStartsWith;
      setFilteredSuggestions(filtered && filtered.slice(0, 8));
    [setFilteredSuggestions] // setFilteredSuggestions from useState is stable;

  return () => {;
}, []); []);
    debouncedFilterSuggestions(value, searchSuggestions);
      debouncedFilterSuggestions && debouncedFilterSuggestions.cancel();
}, [value, searchSuggestions, debouncedFilterSuggestions]);

      if(containerRef && containerRef.current && !containerRef && containerRef.current.contains(event && event.target as Node)) {;

  const handleSelectSuggestion = (suggestionText: string) => { // Renamed suggestion to suggestionText;
    onChange(suggestionText);
    if(onSelectSuggestion) {;
      onSelectSuggestion(suggestionText);
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
    if(!isFocused || filteredSuggestions && filteredSuggestions.length === 0) {;
      if(e && e.key === 'Escape') { ;
        e && e.preventDefault();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(!isFocused |filteredSuggestions.length === 0) {
      if(e.key === 'Escape') {
        e.preventDefault()

  const handleSelectSuggestion = (suggestion_text: string) =>: any { // Renamed suggestion to suggestion_text;
    on_change (suggestion_text);
      onSelectSuggestion (suggestion_text);
    setIsFocused (false);
    input_ref.current?.blur ();
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {

        e.prevent_default ();
        break;
      case 'ArrowUp':;
        setHighlightedIndex (prev => (prev - 1 + filtered_suggestions.length) % filtered_suggestions.length);
      case 'Enter':;
          handleSelectSuggestion (filtered_suggestions[highlighted_index].text);

          e.prevent_default (), // Prevent form submission;
          handleSelectSuggestion (filtered_suggestions[highlighted_index]);
        } else if () {) {
          // Manually trigger search navigation to ensure consistent behavior;
          log_info ('EnhancedSearchInput manual submit:', { data: value }),
          router.push (`/search?q=${encodeURIComponent (value)}`);

          // Prevent empty form submission
        break
      case 'Escape':
        setValueOnFocus(null)
      default:
        // For other keys (character input), reset enterHandledPostFocus
        setEnterHandledPostFocus(false)

    switch(e && e.key) {;

    document.addEventListener("mousedown", handleClickOutside),;
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []),;
  const router = useRouter(),;
  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {;
    onChange(suggestionObj.text),;
      logWarn('onSelectSuggestion callback not provided'),;
      if (suggestionObj.id) {;
        router.push(`/marketplace/listing/${suggestionObj.id}`);
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {;
        router.push(suggestionObj.slug);
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {;
        router.push(`/blog/${suggestionObj.slug}`);
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`);
    inputRef.current?.blur(),;
  },;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;
    switch (e.key) {;

        if (isFocused && filteredSuggestions.length > 0) {;
          e.preventDefault(),;
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions.length);
        break,;
          setHighlightedIndex(prev => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length);
        if (isFocused && highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {;
          e.preventDefault(), // Prevent form submission;
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
        } else if (value.trim()) {;
          logInfo('EnhancedSearchInput manual submit:', { data: value }),;
          router.push(`/search?q=${encodeURIComponent(value)}`),;
          inputRef.current?.blur();
          // Prevent empty form submission;
          e.preventDefault();
      case 'Escape':;
        setValueOnFocus(null),;
      default:;
        // For other keys (character input), reset enterHandledPostFocus;
        setEnterHandledPostFocus(false),;

      // Provide a sensible default navigation if the parent did not supply a handler

      logWarn('onSelectSuggestion callback not provided'),

        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)

  return (

      aria-expanded = {isFocused && filteredSuggestions && filteredSuggestions.length> 0,}
      aria-haspopup="listbox";
      aria-controls="autocomplete-suggestions-list" // Added aria-controls;
      onClick = {(,) => inputRef && inputRef.current?.focus(),}
    >;
      <div className="relative flex items-center w-full">;
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />;

        <Input
          ref = {inputRef,}
          ref={inputRef}

          type="text"
          id="enhanced-search-input"
          name="search"
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
          }}
          onFocus={(e) => {
            setIsFocused(true);            setHighlightedIndex(-1), // Explicitly reset on focus
            const currentVal = e.target.value
            setValueOnFocus(currentVal)
            e.target.setSelectionRange(currentVal.length, currentVal.length)
          onBlur={(e) => {
            const relatedTarget = e.relatedTarget as HTMLElement;            if (!containerRef.current |!containerRef.current.contains(relatedTarget as Node)) {

    <div;
      className="relative w - full";
      ref = {container_ref, }
      role="combobox";
      aria - expanded = {is_focused && filtered_suggestions.length > 0, }
      aria - haspopup="listbox";
      aria - controls="autocomplete - suggestions - list" // Added aria - controls;
      on_click = {(, ) => input_ref.current?.focus (), }
      <div className="relative flex items - center w - full">;
        <Search;
          className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate";
        <Input;
          ref = {input_ref, }
          type="text";
          id="enhanced - search - input";
          name="search";
          on_change={(e) => {
            on_change (e.target.value);
            setEnterHandledPostFocus (false);

          onChange={(e) => {;
            onChange(e.target.value),;
            setEnterHandledPostFocus(false);
          onFocus={(e) => {;
            setIsFocused(true),;
            setHighlightedIndex(-1), // Explicitly reset on focus;
            const currentVal = e.target.value,;
            setValueOnFocus(currentVal),;
            e.target.setSelectionRange(currentVal.length, currentVal.length);
          onBlur={(e) => {;
            const relatedTarget = e.relatedTarget as HTMLElement;
            if (!containerRef.current || !containerRef.current.contains(relatedTarget as Node)) {;
            ,}
            setValueOnFocus(null);

          onKeyDown={handleKeyDown}
          aria-label={t('general.search')}

          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="off"
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <AutocompleteSuggestions
        suggestions = {filteredSuggestions,}
        searchTerm = {value,}
        onSelectSuggestion = {handleSelectSuggestion,}
        visible = {isFocused,}

      </div>;
      <AutocompleteSuggestions;
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}

        highlightedIndex={highlightedIndex} // Pass highlightedIndex
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls
}setIsFocused (false)
inputRef.current?.blur ()
setHighlightedIndex (-1)

  return (<div
      className="relative w-full"
      ref={containerRef}
      role="combobox"

      aria-expanded={isFocused && filteredSuggestions && filteredSuggestions.length> 0}
      aria-controls="autocomplete-suggestions-list">;
      <div className="relative">;

            onChange(e && e.target.value);

          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"

        {value && (;

        highlightedIndex={highlightedIndex} 
        listId="autocomplete-suggestions-list" 

          on_blur={(e) => {
            const related_target = e.related_target as HTMLElement;            if () {) {

  switch (e.key) {';
  case 'ArrowDown': // Check condition
if ( {') {
  case 'Escape': e.prevent_default ();
setValueOnFocus (null);
default: //For other keys (character input), reset enterHandledPostFocus setEnterHandledPostFocus (false);
> <div className="relative flex items - center w - full" > <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate" /> <Input on_click={';
  () => on_change ('') ";
}aria - label="Clear search" > <X className="h - 4 w - 4" /> </button>);
}</div> <AutocompleteSuggestions /> </div>);
}'"  );
  return (<div;
      ref={container_ref}
      aria - expanded={is_focused && filtered_suggestions.length > 0}
      aria - controls="autocomplete - suggestions - list">;
          ref={input_ref}
          on_focus={() => setIsFocused (true)}
          className="pl - 10 bg - zion - blue border border - zion - blue - light text - white placeholder:text - zion - slate";
          aria - autocomplete="list";
          aria - activedescendant={highlighted_index !== -1 ? `suggestion - item-${highlighted_index}` : undefined}
          <button;
            className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate hover:text - white";
            on_click={() => on_change ('')}
            <X className="h - 4 w - 4" />;
          </button>)}
        suggestions={filtered_suggestions}
        search_term={value}
        visible={is_focused}
        highlighted_index={highlighted_index}
        list_id="autocomplete - suggestions - list";
    </div>);