<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState, useEffect, useRef } from "react",
import { Search, X } from "lucide-react",
import { Input } from "@/components/ui/input",
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions";

<<<<<<< HEAD

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);



=======
import { SearchSuggestion } from "@/types/search";
interface EnhancedSearchInputProps {}
  value: string;
  onChange: (value: string) => void;

  placeholder?: string;
  searchSuggestions: SearchSuggestion[];
}

interface EnhancedSearchInputProps {

  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
  searchSuggestions: SearchSuggestion[]
}

  onChange, "
  placeholder = "Search...", 

  const [isFocused, setIsFocused] = useState(false),
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),
  const inputRef = useRef<HTMLInputElement>(null),
  const containerRef = useRef<HTMLDivElement>(null),

  // Filter suggestions based on input value
  useEffect(() => {
    if (!value) {
      // Show recent searches when input is empty

  // Filter suggestions based on input value;
  useEffect(() => {}
    if (!value) {}
      // Show recent searches when input is empty;
      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent')),
      return;
      }
    }"
    document.addEventListener("mousedown", handleClickOutside);"
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []);
  const handleSelectSuggestion = (suggestion: string) => {}
    onChange(suggestion);
    setIsFocused(false)
    inputRef.current?.blur()
  }

import React, { useState, useEffect, useRef } from "react",;
import { Search, X } from "lucide-react",;


  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",
import { SearchSuggestion } from "@/types/search",
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",
import { SearchSuggestion } from "@/types/search",
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
  searchSuggestions: SearchSuggestion[]
}

export function EnhancedSearchInput({ 
  value,

<<<<<<< HEAD


=======
export function EnhancedSearchInput({ ;
  value;
export function EnhancedSearchInput({ 
  value,
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onChange, 
  placeholder = "Search...", 
  searchSuggestions 
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState(false),
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),
  const inputRef = useRef<HTMLInputElement>(null),
  const containerRef = useRef<HTMLDivElement>(null),


<<<<<<< HEAD


  // Filter suggestions based on input value
  useEffect(() => {
    if (!value) {
      // Show recent searches when input is empty

      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent'));
      return




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
export function EnhancedSearchInput() { return null; }
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
<<<<<<< HEAD

    function handleClickOutside(event: MouseEvent) {;
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {;
        setIsFocused(false);



      }
    }


  const handleSelectSuggestion = (suggestion: string) => {
    onChange(suggestion),
    setIsFocused(false),
    inputRef.current?.blur()
  },
  



=======


      }
    }



>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="relative w-full" ref={containerRef}>

      <div className="relative">
        <Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate"
        />

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
  // Filter suggestions based on input value;

  useEffect(() => {;
    if (!value) {;
      // Show recent searches when input is empty;


<<<<<<< HEAD
        <Input
          ref={inputRef}
          type="text"
=======
  return (
    <div className="relative w-full" ref={containerRef}>;
      <div className="relative">;
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />;
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
    document.addEventListener("mousedown", handleClickOutside),;

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []),;
<<<<<<< HEAD

  const handleSelectSuggestion = (suggestion: string) => {;

=======
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    onChange(suggestion),;
    setIsFocused(false);

  return (;
    <div className="relative w-full" ref={containerRef}>;

      <div className="relative">;
        <Search;"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate";
        />;
        <Input;
          ref={inputRef}"
          type="text";
<<<<<<< HEAD

=======
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
          ref={inputRef}"
          type="text";
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <Input

          ref={inputRef}

<<<<<<< HEAD

          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}


            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"

=======

'
>>>>>>> origin/cursor/delete-old-data-records-6bba
            onClick={() => onChange('')}
          >;"

            <X className="h-4 w-4" />;
          </button>;
        )}

<<<<<<< HEAD


=======
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
      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}

        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
      />;
    </div>;
import React, { useState, useEffect, useRef } from './react';

import { SearchSuggestion } from '@/types / search';
interface EnhancedSearchInputProps {}
  value: string,
  on_change: (value: string) => void,
  placeholder?: string;
  search_suggestions: SearchSuggestion[];
}
export /**;
 * EnhancedSearchInput - Function description;
 */
function EnhancedSearchInput() {}
  const [is_focused, setIsFocused] = useState (false);

import React, { useState, useEffect, useRef } from "react";""
import {Search, X} from "lucide-react";""
import {Input} from "@/components/ui/input";""
import {AutocompleteSuggestions} from "@/components/search/AutocompleteSuggestions";""
import {SearchSuggestion} from "@/types/search";"
interface EnhancedSearchInputProps {;
  value: string,;
  onChange: (value: string) => void,;

  placeholder?: string;
  searchSuggestions: SearchSuggestion[];
}

export function EnhancedSearchInput(): any ({ ;
  value;
  onChange, ;"
  placeholder = "Search...", ;"
  searchSuggestions ;)
}: EnhancedSearchInputProps) {;
"
import React, { useState, useEffect, useRef } from "react",""
import { Search, X } from "lucide-react",""
import { Input } from "@/components/ui/input",""
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions";""
import { SearchSuggestion } from "@/types/search";"
interface EnhancedSearchInputProps {
  // TODO: Implement
  value: string;,
  onChange: (value: string) => void;
export function EnhancedSearchInput({

  onChange;"
  placeholder = "Search...""
  searchSuggestions;)
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),

  const inputRef = useRef<HTMLInputElement>(null),

  const containerRef = useRef<HTMLDivElement>(null),

  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),;

  const inputRef = useRef<HTMLInputElement>(null),;

  const containerRef = useRef<HTMLDivElement>(null),;
    <div className="relative w-full" ref={containerRef}>"
</div>"
      <div className="relative">"
</div>
        <Search;"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate""
        />
    <div className="relative w-full" ref={containerRef}>;"
      <div className="relative">;"
        />;

</div>
        <Search;"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate""

        />;
</Search>
        <Input;

          ref={inputRef}"
          type="text""
        <Input;
          ref={inputRef}"
          type="text""
        <Input;
          ref={inputRef}"
          type="text""
;"
    document.addEventListener("mousedown", handleClickOutside),;""
    return () => document.removeEventListener("mousedown", handleClickOutside);"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate";"

          type="text";"
          value={value}
          onChange={(e) => onChange(e && e.target.value)}

          <button;"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"""
            onClick={() => onChange()}
</button>
            <X className="h-4 w-4" />;"

          </button>;
      </div>;
      <AutocompleteSuggestions;
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}

pr-12325
      />;
</AutocompleteSuggestions>
    </div>;

  const [filtered_suggestions, setFilteredSuggestions] = useState < SearchSuggestion[]>([]);
  const input_ref = useRef < HTMLInputElement>(null);
  const container_ref = useRef < HTMLDivElement>(null);
;
  // Filter suggestions based on input value;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      // Show recent searches when input is empty;'
      setFilteredSuggestions (search_suggestions.filter (string => s.type === 'recent'));
      return;
    }
    const filtered = search_suggestions.filter (suggestion =>;
      suggestion.text.toLowerCase ().includes (value.toLowerCase ()));
;
    // Check condition;

if ( {) {
  $2;

}
      // Show recent searches when input is empty;"
      setFilteredSuggestions (search_suggestions.filter (string => s.type === 'recent'));
      return;
    const filtered = search_suggestions.filter (suggestion =>;)
      suggestion.text.toLowerCase ().includes (value.toLowerCase ()));
pr-12325
    // Sort suggestions to prioritize those that start with the search term;
    filtered.sort ((a, b) => {}
      const aStartsWith = a.text.toLowerCase ().starts_with (value.toLowerCase ()) ? -1 : 0;
      const bStartsWith = b.text.toLowerCase ().starts_with (value.toLowerCase ()) ? -1 : 0;}
      return aStartsWith - bStartsWith;}
    });
;
    setFilteredSuggestions (filtered.slice (0, 8)), // Limit to 8 suggestions;
  }, [value, search_suggestions]);
;
  // Handle clicks outside the component to close suggestions;
  useEffect (() => {}
    /**
 * handleClickOutside - Function description;
 */
function handleClickOutside() {}
      if () {) {}
  $2;
}
        setIsFocused (false);
      }
    }"
    document.addEventListener ("mousedown", handleClickOutside);"
    return () => document.removeEventListener ("mousedown", handleClickOutside);
  }, []);
;

    on_change (suggestion);
    setIsFocused (false),}
    input_ref.current?.blur ();}
  }
;

        />;
        <Input;
          ref={input_ref}"
          type="text";
          value={value}
          on_change={(e) => on_change (e.target.value)}
          on_focus={() => setIsFocused (true)}

          </button>)}
      </div>;
      <AutocompleteSuggestions;
        suggestions={filtered_suggestions}
        search_term={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={is_focused}
      />;
    </div>);

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
    setFilteredSuggestions (filtered.slice (0, 8)), // Limit to 8 suggestions;
  }, [value, search_suggestions]);
  // Handle clicks outside the component to close suggestions;
    /**
 * handleClickOutside - Function description;
 */
function handleClickOutside() {
      if () {) {
        setIsFocused (false);
    document.addEventListener ("mousedown", handleClickOutside);""
    return () => document.removeEventListener ("mousedown", handleClickOutside);"
  }, []);
  const handleSelectSuggestion = (suggestion: string) =>: any {
  // TODO: Implement
    on_change (suggestion);
    setIsFocused (false),
    input_ref.current?.blur ();
  return ("
    <div className="relative w - full" ref={container_ref}>;"
          className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate";"

          ref={input_ref}"
          value={value})
          on_change={(e) => on_change (e.target.value)}

            className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate hover:text - white";""
            on_click={() => on_change ()}
            <X className="h - 4 w - 4" />;"

          </button>)}
        suggestions={filtered_suggestions}
        search_term={value}
        visible={is_focused}

</AutocompleteSuggestions>
    </div>);

const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]> ([]);

const inputRef = useRef<HTMLInputElement> (null);

const containerRef = useRef<HTMLDivElement> (null);
}<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" /> <Input onClick= {"
}> <X className="h-4 w-4" /> </button>)"

}</div> <AutocompleteSuggestions suggestions= {
  filteredSuggestions;
}searchTerm= {
}onSelectSuggestion= {
  handleSelectSuggestion;
}visible= {
  isFocused;
}/> </div>) 
}

      />
    </div>
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
