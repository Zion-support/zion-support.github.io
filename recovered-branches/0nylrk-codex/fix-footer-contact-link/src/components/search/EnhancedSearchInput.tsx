



<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect, useRef } from "react";
import {Search, X} from "lucide-react";
import {Input} from "@/components/ui/input";
import {AutocompleteSuggestions} from "@/components/search/AutocompleteSuggestions";
import {SearchSuggestion} from "@/types/search";
<<<<<<< HEAD
<<<<<<< HEAD
  placeholder?: string;
  searchSuggestions: SearchSuggestion[];
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface EnhancedSearchInputProps {;
  value: string,;
  onChange: (value: string) => void,;

  placeholder?: string;
  searchSuggestions: SearchSuggestion[];
}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function EnhancedSearchInput(): any ({ ;
  value;
  onChange, ;
  placeholder = "Search...", ;
  searchSuggestions ;
}: EnhancedSearchInputProps) {;
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react",
import { Search, X } from "lucide-react",
import { Input } from "@/components/ui/input",
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions";
import { SearchSuggestion } from "@/types/search";
interface EnhancedSearchInputProps {

  value: string
  onChange: (value: string) => void

  placeholder?: string;
  searchSuggestions: SearchSuggestion[]
}
export function EnhancedSearchInput({
  value;

  onChange
  placeholder = "Search..."
  searchSuggestions
}: EnhancedSearchInputProps) {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
<<<<<<< HEAD
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",
import { SearchSuggestion } from "@/types/search",
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",
import { SearchSuggestion } from "@/types/search",
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
  searchSuggestions: SearchSuggestion[]
}

<<<<<<< HEAD

export function EnhancedSearchInput({ 
  value,

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function EnhancedSearchInput({ ;
  value;
export function EnhancedSearchInput({ 
  value,
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  onChange, 
  placeholder = "Search...", 
  searchSuggestions 
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState(false),
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),
  const inputRef = useRef<HTMLInputElement>(null),
  const containerRef = useRef<HTMLDivElement>(null),

<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Filter suggestions based on input value
  useEffect(() => {
    if (!value) {
      // Show recent searches when input is empty
<<<<<<< HEAD
<<<<<<< HEAD


      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent')),
      return
    }
    const filtered = searchSuggestions.filter(suggestion =>
      suggestion.text.toLowerCase().includes(value.toLowerCase())
    );
    // Sort suggestions to prioritize those that start with the search term
    filtered.sort((a, b) => {
      const aStartsWith = a.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0;
      const bStartsWith = b.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0;
      return aStartsWith - bStartsWith
    });
    setFilteredSuggestions(filtered.slice(0, 8)), // Limit to 8 suggestions
  }, [value, searchSuggestions]);
  // Handle clicks outside the component to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []);
  const handleSelectSuggestion = (suggestion: string) => {
    onChange(suggestion);
    setIsFocused(false)
    inputRef.current?.blur()
  }

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent'));
      return



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect, useRef } from "react",;
import { Search, X } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",;
import { SearchSuggestion } from "@/types/search",;
interface EnhancedSearchInputProps {;
  value: string,;
  onChange: (value: string) => void,;
  placeholder?: string,;
  searchSuggestions: SearchSuggestion[];
}
;
export function EnhancedSearchInput({;
  value,;
  onChange,;
  placeholder = "Search...",;
  searchSuggestions;
}: EnhancedSearchInputProps) {;
  const [isFocused, setIsFocused] = useState(false),;
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),;
  const inputRef = useRef<HTMLInputElement>(null),;
  const containerRef = useRef<HTMLDivElement>(null),;
  // Filter suggestions based on input value;
  useEffect(() => {;
    if (!value) {;
      // Show recent searches when input is empty;
      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent')),;
      return;
    }
;
    const filtered = searchSuggestions.filter(suggestion =>;
      suggestion.text.toLowerCase().includes(value.toLowerCase());
    ),;
    // Sort suggestions to prioritize those that start with the search term;
    filtered.sort((a, b) => {;
      const aStartsWith = a.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0,;
      const bStartsWith = b.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0,;
      return aStartsWith - bStartsWith;
    }),;
    setFilteredSuggestions(filtered.slice(0, 8)), // Limit to 8 suggestions;
  }, [value, searchSuggestions]),;
  // Handle clicks outside the component to close suggestions;
  useEffect(() => {;
    function handleClickOutside(event: MouseEvent) {;
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {;
        setIsFocused(false);


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside),
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []),

  const handleSelectSuggestion = (suggestion: string) => {
    onChange(suggestion),
    setIsFocused(false),
    inputRef.current?.blur()
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate"
        />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useState, useEffect, useRef } from "react",;
import { Search, X } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions", ;
import { SearchSuggestion } from "@/types/search",;
;
interface EnhancedSearchInputProps {;
  value:string,;
  onChange:(value:string) => void,;
  placeholder?:string,;
  searchSuggestions:SearchSuggestion[];
}
;
export function EnhancedSearchInput({ ;
  value,;
  onChange, ;
  placeholder = "Search...", ;
  searchSuggestions ;
} EnhancedSearchInputProps) {;
  const [isFocused, setIsFocused] = useState(false),;
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),;
  const inputRef = useRef<HTMLInputElement>(null),;
  const containerRef = useRef<HTMLDivElement>(null),;
;
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Filter suggestions based on input value;
  useEffect(() => {;
    if (!value) {;
      // Show recent searches when input is empty;
<<<<<<< HEAD

        <Input
          ref={inputRef}
          type="text"
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      setFilteredSuggestions(searchSuggestions && searchSuggestions.filter(s => s && s.type === 'recent'));
      return;
    }

    const filtered = searchSuggestions && searchSuggestions.filter(suggestion => ;
      suggestion && suggestion.text.toLowerCase().includes(value && value.toLowerCase());
    );

    // Sort suggestions to prioritize those that start with the search term;
    filtered && filtered.sort((a, b) => {;
      const aStartsWith = a && a.text.toLowerCase().startsWith(value && value.toLowerCase()) ? -1 : 0;
      const bStartsWith = b && b.text.toLowerCase().startsWith(value && value.toLowerCase()) ? -1 : 0;
      return aStartsWith - bStartsWith;
    });

    setFilteredSuggestions(filtered && filtered.slice(0, 8)), // Limit to 8 suggestions;
  }, [value, searchSuggestions]);

  // Handle clicks outside the component to close suggestions;
  useEffect(() => {;
    function handleClickOutside(): any (event: MouseEvent) {;
      if (containerRef && containerRef.current && !containerRef && containerRef.current.contains(event && event.target as Node)) {;
        setIsFocused(false);
      }
    }

    document && document.addEventListener("mousedown", handleClickOutside);
    return () => document && document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectSuggestion = (suggestion: string) => {;
    onChange(suggestion);
    setIsFocused(false),;
    inputRef && inputRef.current?.blur();
  };

  return (
    <div className="relative w-full" ref={containerRef}>;
      <div className="relative">;
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <Input
          ref={inputRef}
          type="text"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    document.addEventListener("mousedown", handleClickOutside),;
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []),;
  const handleSelectSuggestion = (suggestion: string) => {;
    onChange(suggestion),;
    setIsFocused(false);
    inputRef.current?.blur();
  };
  return (;
    <div className="relative w-full" ref={containerRef}>;
      <div className="relative">;
        <Search;
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate";
        />;
        <Input;
          ref={inputRef}
          type="text";
<<<<<<< HEAD
<<<<<<< HEAD
      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent')),;
      return,;
    }
    ;
    const filtered = searchSuggestions.filter(suggestion => ;
      suggestion.text.toLowerCase().includes(value.toLowerCase());
    ),;
    ;
    // Sort suggestions to prioritize those that start with the search term;
    filtered.sort((a, b) => {;
      const aStartsWith = a.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 :0,;
      const bStartsWith = b.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 :0,;
      return aStartsWith - bStartsWith,;
    }),;
    ;
    setFilteredSuggestions(filtered.slice(0, 8)), // Limit to 8 suggestions;
  }, [value, searchSuggestions]),;
;
  // Handle clicks outside the component to close suggestions;
  useEffect(() => {;
    function handleClickOutside(event:MouseEvent) {;
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {;
        setIsFocused(false);
      }
    }
    ;
    document.addEventListener("mousedown", handleClickOutside),;
    return () => document.removeEventListener("mousedown", handleClickOutside),;
  }, []),;
;
  const handleSelectSuggestion = (suggestion:string) => {;
    onChange(suggestion),;
    setIsFocused(false),;
    inputRef.current?.blur();
  },;
  ;
  return (;
    <div className="relative w-full" ref={containerRef}>;
      <div className="relative">;
        <Search ;
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" ;
        />;
        <Input;
          ref={inputRef}
          type="text";          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate";
        />;
        {value && (;
          <button ;
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          value={value}
          onChange={(e) => onChange(e && e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}

          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate";
        />;
        {value && (;

          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onClick={() => onChange('')}
          >;
            <X className="h-4 w-4" />;
          </button>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
      </div>;
      ;
      <AutocompleteSuggestions;
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
    </div>;
=======

      />;
    </div>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect, useRef } from './react';
import { Search, X } from './lucide-react';
import { Input } from '@/components / ui / input';
import { AutocompleteSuggestions } from '@/components / search / AutocompleteSuggestions';
import { SearchSuggestion } from '@/types / search';
interface EnhancedSearchInputProps {
  value: string,
  on_change: (value: string) => void,
  placeholder?: string;
  search_suggestions: SearchSuggestion[];
}
export /**
 * EnhancedSearchInput - Function description
 */
function EnhancedSearchInput() {
  const [is_focused, setIsFocused] = useState (false);
  const [filtered_suggestions, setFilteredSuggestions] = useState < SearchSuggestion[]>([]);
  const input_ref = useRef < HTMLInputElement>(null);
  const container_ref = useRef < HTMLDivElement>(null);
;
  // Filter suggestions based on input value;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      // Show recent searches when input is empty;
      setFilteredSuggestions (search_suggestions.filter (string => s.type === 'recent'));
      return;
    }
    const filtered = search_suggestions.filter (suggestion =>;
      suggestion.text.toLowerCase ().includes (value.toLowerCase ()));
;
    // Sort suggestions to prioritize those that start with the search term;
    filtered.sort ((a, b) => {
      const aStartsWith = a.text.toLowerCase ().starts_with (value.toLowerCase ()) ? -1 : 0;
      const bStartsWith = b.text.toLowerCase ().starts_with (value.toLowerCase ()) ? -1 : 0;
      return aStartsWith - bStartsWith;
    });
;
    setFilteredSuggestions (filtered.slice (0, 8)), // Limit to 8 suggestions;
  }, [value, search_suggestions]);
;
  // Handle clicks outside the component to close suggestions;
  useEffect (() => {
    /**
 * handleClickOutside - Function description
 */
function handleClickOutside() {
      if () {) {
  $2
}
        setIsFocused (false);
      }
    }
    document.addEventListener ("mousedown", handleClickOutside);
    return () => document.removeEventListener ("mousedown", handleClickOutside);
  }, []);
;
  const handleSelectSuggestion = (suggestion: string) =>: any {
    on_change (suggestion);
    setIsFocused (false),
    input_ref.current?.blur ();
  }
;
  return (
    <div className="relative w - full" ref={container_ref}>;
      <div className="relative">;
        <Search;
          className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate";
        />;
        <Input;
          ref={input_ref}
          type="text";
          value={value}
          on_change={(e) => on_change (e.target.value)}
          on_focus={() => setIsFocused (true)}
          placeholder={placeholder}
          className="pl - 10 bg - zion - blue border border - zion - blue - light text - white placeholder:text - zion - slate";
        />;
        {value && (
          <button;
            className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate hover:text - white";
            on_click={() => on_change ('')}
          >;
            <X className="h - 4 w - 4" />;
          </button>)}
      </div>;
      <AutocompleteSuggestions;
        suggestions={filtered_suggestions}
        search_term={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={is_focused}
      />;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 interface EnhancedSearchInputProps {
  value: string;
onChange: (value: string) => void;
placeholder?: string;
searchSuggestions: SearchSuggestion[] 
}export function EnhancedSearchInput ({
  value;
onChange;
placeholder = "Search...";
searchSuggestions 
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState (false);
const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]> ([]);
const inputRef = useRef<HTMLInputElement> (null);
const containerRef = useRef<HTMLDivElement> (null);
if (!value) {
  //Show recent searches when input is empty const filtered = searchSuggestions.filter (suggestion => suggestion.text.toLowerCase () .includes (value.toLowerCase () ) );
//Sort suggestions to prioritize those that start with the search term setFilteredSuggestions (filtered.slice (0, 8) ), //Limit to 8 suggestions 
}, [value, searchSuggestions]);
//Handle clicks outside the component to close suggestions useEffect ( () => {
  function handleClickOutside (event: MouseEvent) {
  if (containerRef.current && !containerRef.current.contains (event.target as Node) ) {
  
}<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" /> <Input onClick= {
  () => onChange ('') 
}> <X className="h-4 w-4" /> </button>) 
}</div> <AutocompleteSuggestions suggestions= {
  filteredSuggestions 
}searchTerm= {
  value 
}onSelectSuggestion= {
  handleSelectSuggestion 
}visible= {
  isFocused 
}/> </div>) 
}
      />
    </div>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
