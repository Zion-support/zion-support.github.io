import React, { useState; useEffect; useRef } from "react;";
import { Search; X, ArrowDown  } from "lucide-react, ";

interface SearchSuggestion {id: string; title: string; type: "service" | "talent" | "equipment";
}
}
description?: string};
interface EnhancedSearchInputProps {placeholder?: string;
onSearch?: (query: string) => void;
}
suggestions?: SearchSuggestion[];}
}) => {const [query; setQuery] = useState("");
const [showSuggestions; setShowSuggestions] = useState(false);
const [filteredSuggestions; setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
const [selectedIndex; setSelectedIndex] = useState(-1);
setSelectedIndex(-1)} else {setFilteredSuggestions([]);
handleSuggestionClick(filteredSuggestions[selectedIndex])} else if (query.trim()) {handleSubmit(e)}
export function EnhancedSearchInput({setHighlightedIndex(-1)
            onClick = {() => onChange('')}
      <AutocompleteSuggestions
        highlightedIndex={highlightedIndex} // Pass highlightedIndex listId="autocomplete-suggestions-list" // Pass ID for aria-controls
        break
}