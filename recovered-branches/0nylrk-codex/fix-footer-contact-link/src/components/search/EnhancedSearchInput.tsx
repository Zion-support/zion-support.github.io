<<<<<<< HEAD

import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions";
import { SearchSuggestion } from "@/types/search";
interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
  searchSuggestions: SearchSuggestion[]
}

export function EnhancedSearchInput({ 
  value,
  onChange, 
  placeholder = $2;
  searchSuggestions 
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState($2);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),
  const inputRef = $2;
  const containerRef = $2;
  // Filter suggestions based on input value
  useEffect(() => {
    if (!value) {
      // Show recent searches when input is empty
      setFilteredSuggestions(searchSuggestions.filter(s = $2;
      return
    }
    
    const filtered = $2;
    // Sort suggestions to prioritize those that start with the search term
    filtered.sort((a, b) => {
      const aStartsWith = $2;
      const bStartsWith = $2;
      return aStartsWith - bStartsWith
    }),
    
    setFilteredSuggestions(filtered.slice(0, 8)), // Limit to 8 suggestions
  }, [value, searchSuggestions]),

  // Handle clicks outside the component to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }
    
    document.addEventListener($2);
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []),
=======
import React, { useState, useEffect, useRef } from "react",
import { Search, X } from "lucide-react",
import { Input } from "@/components/ui/input",
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions";

<<<<<<< HEAD
import { SearchSuggestion } from "@/types/search";
interface EnhancedSearchInputProps {}
  value: string;
  onChange: (value: string) => void;
=======



<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState, useEffect, useRef } from "react";
import {Search, X} from "lucide-react";
import {Input} from "@/components/ui/input";
import {AutocompleteSuggestions} from "@/components/search/AutocompleteSuggestions";
import {SearchSuggestion} from "@/types/search";
<<<<<<< HEAD
  placeholder?: string;
  searchSuggestions: SearchSuggestion[];
}
=======
interface EnhancedSearchInputProps {;
  value: string,;
  onChange: (value: string) => void,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  placeholder?: string;
  searchSuggestions: SearchSuggestion[];
}

interface EnhancedSearchInputProps {

<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function EnhancedSearchInput(): any ({ ;
  value;
  onChange, ;
  placeholder = "Search...", ;
  searchSuggestions ;
}: EnhancedSearchInputProps) {;
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
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",
import { SearchSuggestion } from "@/types/search",
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",
import { SearchSuggestion } from "@/types/search",
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
  searchSuggestions: SearchSuggestion[]
}

export function EnhancedSearchInput({ 
  value,

<<<<<<< HEAD
export function EnhancedSearchInput({ ;
  value;
export function EnhancedSearchInput({ 
  value,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Filter suggestions based on input value
  useEffect(() => {
    if (!value) {
      // Show recent searches when input is empty
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
      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent'));
      return



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState, useEffect, useRef } from "react",;
import { Search, X } from "lucide-react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
    function handleClickOutside(event: MouseEvent) {;
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {;
        setIsFocused(false);


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
    }

<<<<<<< HEAD
    document.addEventListener("mousedown", handleClickOutside),

      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []);
  const handleSelectSuggestion = (suggestion: string) => {}
    onChange(suggestion);
    setIsFocused(false)
>>>>>>> merged-prs-20250907-203621

=======
  const handleSelectSuggestion = (suggestion: string) => {
    onChange(suggestion),
    setIsFocused(false),
    inputRef.current?.blur()
  },
  
<<<<<<< HEAD
  
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <div className="relative w-full" ref={containerRef}>

      <div className="relative">
        <Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate"
        />
<<<<<<< HEAD
        <Input
          ref={inputRef}
          type="text"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
  return (
    <div className="relative w-full" ref={containerRef}>;
      <div className="relative">;
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />;
=======
        <Input
          ref={inputRef}
          type="text"
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    document.addEventListener("mousedown", handleClickOutside),;

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []),;
<<<<<<< HEAD
    }
=======
  const handleSelectSuggestion = (suggestion: string) => {;
>>>>>>> origin/chore/fix-lint-and-merge
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

        <Input

          ref={inputRef}
          type="text"

>>>>>>> merged-prs-20250907-203621
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
<<<<<<< HEAD
=======

            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
<<<<<<< HEAD

'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            onClick={() => onChange('')}
          >;"

            <X className="h-4 w-4" />;
          </button>;
        )}
<<<<<<< HEAD
      </div>;
      ;
      <AutocompleteSuggestions;
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
=======
=======

<<<<<<< HEAD
=======
      </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <AutocompleteSuggestions
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
    </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      />
    </div>
  )
}
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
