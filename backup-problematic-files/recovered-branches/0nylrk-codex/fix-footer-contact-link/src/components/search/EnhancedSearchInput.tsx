
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  // Filter suggestions based on input value;
  useEffect(() => {;
    if (!value) {;
      // Show recent searches when input is empty;
<<<<<<< HEAD

          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate";
        />;
        {value && (;

            onClick={() => onChange('')}
          >;
            <X className="h-4 w-4" />;
          </button>;
        )}
      </div>;

        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
      />;
    </div>;

