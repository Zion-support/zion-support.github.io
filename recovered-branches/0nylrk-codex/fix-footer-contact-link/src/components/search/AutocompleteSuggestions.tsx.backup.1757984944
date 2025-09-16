
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


import {SearchSuggestion, SearchHighlight} from "@/types/search";



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



interface AutocompleteSuggestionsProps {

  suggestions: SearchSuggestion[]
  searchTerm: string
  onSelectSuggestion: (suggestion: string) => void

  visible: boolean

import React from "react",;
import { SearchSuggestion, SearchHighlight } from "@/types/search",;
interface AutocompleteSuggestionsProps {;
  suggestions: SearchSuggestion[],;
  searchTerm: string,;
  onSelectSuggestion: (suggestion: string) => void,;
  visible: boolean;






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


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

import React from './react';
import { SearchSuggestion, SearchHighlight } from '@/types / search';
interface AutocompleteSuggestionsProps {
  suggestions: SearchSuggestion[],
  search_term: string,
  onSelectSuggestion: (suggestion: string) => void,
  visible: boolean;
}
// Helper function to highlight matching text;
const highlight_match = (text: string, search_term: string): SearchHighlight => {
  // Check condition
if ( {) {
  $2
}
    return { before: '', match: text, after: '' }
  }
  const lower_text = text.toLowerCase ();
  const lowerSearchTerm = search_term.toLowerCase ();
  const index = lower_text.index_of (lowerSearchTerm);
;
  // Check condition
if ( {) {
  $2
}

    return { before: '', match: text, after: '' }
  }
  return {
    before: text.substring (0, index);
    match: text.substring (index, index + search_term.length);
    after: text.substring (index + search_term.length);
  }

}
export function AutocompleteSuggestions({
  suggestions
  searchTerm
  onSelectSuggestion;
  visible
}: AutocompleteSuggestionsProps) {
  if (!visible |suggestions.length === 0) return null;
=======
import React from "react";
import { SearchSuggestion, SearchHighlight } from "@/types/search";

interface AutocompleteSuggestionsProps {
  suggestions: SearchSuggestion[];
  searchTerm: string;
  onSelectSuggestion: (suggestion: string) => void;
  visible: boolean;
}

// Helper function to highlight matching text
const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {
  if (!searchTerm || searchTerm.length === 0) {
    return { before: '', match: text, after: '' };
  }
  
  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerSearchTerm);
  
  if (index === -1) {
    return { before: '', match: text, after: '' };
  }
  
  return {
    before: text.substring(0, index),
    match: text.substring(index, index + searchTerm.length),
    after: text.substring(index + searchTerm.length)
  };
>>>>>>> origin/auto/autonomy-17186719616
};

export function AutocompleteSuggestions({ 
  suggestions, 
  return (
    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">
      <ul className="py-2 max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => {
          );
        })}
      </ul>
    </div>
