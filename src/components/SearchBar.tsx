import React { useState useEffect useRef } from 'react';
import { useRouter } from "next/router";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions";
import { fireEvent } from "@/lib/analytics";
import { SearchSuggestion } from "@/types/search";
import { slugify } from "@/lib/slugify";
import { useDebounce } from "@/hooks/useDebounce";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
  placeholder?: string
}
      <AutocompleteSuggestions
}</div> <AutocompleteSuggestions suggestions= {suggestions}searchTerm= {value}onSelectSuggestion= {handleSelect}visible= {focused}highlightedIndex= {highlightedIndex}listId= {listId}/> </div>)