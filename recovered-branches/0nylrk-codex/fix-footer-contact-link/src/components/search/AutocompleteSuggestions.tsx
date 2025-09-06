
interface AutocompleteSuggestionsProps {

  suggestions: SearchSuggestion[]
  searchTerm: string
  onSelectSuggestion: (suggestion: string) => void

  visible: boolean
}
// Helper function to highlight matching text

const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {
  if (!searchTerm |searchTerm.length === 0) {
    return { before: '', match: text, after: '' }
  }
  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerSearchTerm);
  if (index === -1) {
  return {
    before: text.substring (0, index);
    match: text.substring (index, index + search_term.length);
    after: text.substring (index + search_term.length);
  }
}
export function AutocompleteSuggestions({
  suggestions
  searchTerm
;
  const lowerText = text.toLowerCase(),;
  const lowerSearchTerm = searchTerm.toLowerCase(),;
  const index = lowerText.indexOf(lowerSearchTerm),;
  if (index === -1) {;
    return { before: '', match: text, after: '' }
  }
;
  return {;
    before: text.substring(0, index),;
    match: text.substring(index, index + searchTerm.length),;
    after: text.substring(index + searchTerm.length);
  }
},

export function AutocompleteSuggestions({ 
  suggestions, 
  searchTerm, 
  onSelectSuggestion,
  return (
    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">
      <ul className="py-2 max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => {
          const highlight = highlightMatch(suggestion.text, searchTerm);

      </ul>;
    </div>);
}
}
;
