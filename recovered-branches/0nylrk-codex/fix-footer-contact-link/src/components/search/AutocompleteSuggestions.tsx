<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/AutocompleteSuggestions.tsx


<<<<<<< HEAD
import React from "react",
import { SearchSuggestion, SearchHighlight } from "@/types/search",

=======

import {SearchSuggestion, SearchHighlight} from "@/types/search";

=======

<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import { SearchSuggestion, SearchHighlight } from "@/types/search";
=======
import {SearchSuggestion, SearchHighlight} from "@/types/search";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import React from "react",
import { SearchSuggestion, SearchHighlight } from "@/types/search",

<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface AutocompleteSuggestionsProps {

  suggestions: SearchSuggestion[]
  searchTerm: string
  onSelectSuggestion: (suggestion: string) => void

  visible: boolean
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { SearchSuggestion, SearchHighlight } from "@/types/search",;
interface AutocompleteSuggestionsProps {;
  suggestions: SearchSuggestion[],;
  searchTerm: string,;
  onSelectSuggestion: (suggestion: string) => void,;
  visible: boolean;
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
// Helper function to highlight matching text

const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {
  if (!searchTerm |searchTerm.length === 0) {
    return { before: '', match: text, after: '' }
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======

  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerSearchTerm);
  if (index === -1) {
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/AutocompleteSuggestions.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/AutocompleteSuggestions.tsx
<<<<<<< HEAD

=======


=======
    return { before: '', match: text, after: '' }
  }
  return {
    before: text.substring(0, index);
    match: text.substring(index, index + searchTerm.length);
    after: text.substring(index + searchTerm.length)
  }
<<<<<<< HEAD
}
export function AutocompleteSuggestions({
  suggestions
  searchTerm
  onSelectSuggestion;
  visible
}: AutocompleteSuggestionsProps) {
  if (!visible |suggestions.length === 0) return null;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};

export function AutocompleteSuggestions({ 
  suggestions, 
  searchTerm, ;
  onSelectSuggestion;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

  visible 
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null,
<<<<<<< HEAD

=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  visible 
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">
      <ul className="py-2 max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => {
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
          const highlight = highlightMatch(suggestion.text, searchTerm);

=======
          const highlight = highlightMatch(suggestion.text, searchTerm),
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          return (
            <li key={`${suggestion.type}-${index}`}
                className="px-4 py-2 hover:bg-zion-blue-light/20 cursor-pointer"
                onClick={() => onSelectSuggestion(suggestion.text)}>
              <div className="flex items-center justify-between">
                <div>
                  <span>{highlight.before}</span>
                  <span className="font-bold text-zion-purple">{highlight.match}</span>
                  <span>{highlight.after}</span>
                </div>
                <span className="text-xs text-zion-slate-light capitalize">
                  {suggestion.type}
                </span>
              </div>
            </li>
          )
        })}
<<<<<<< HEAD

=======

          const highlight = highlightMatch(suggestion.text, searchTerm),
          


          return (
            <li key={`${suggestion.type}-${index}`}
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/AutocompleteSuggestions.tsx
import {SearchSuggestion, SearchHighlight} from "@/types/search";
interface AutocompleteSuggestionsProps {;
  suggestions: SearchSuggestion[],;
  searchTerm: string,;
  onSelectSuggestion: (suggestion: string) => void,;
  visible: boolean;
}
// Helper function to highlight matching text;
const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {;
  if (!searchTerm || searchTerm && searchTerm.length === 0) {;
    return { before: '', match: text, after: '' }
  }
  const lowerText = text && text.toLowerCase();
  const lowerSearchTerm = searchTerm && searchTerm.toLowerCase();
  const index = lowerText && lowerText.indexOf(lowerSearchTerm);
  if (index === -1) {;
    return { before: '', match: text, after: '' }
  }
  return {;
    before: text && text.substring(0, index);
    match: text && text.substring(index, index + searchTerm && searchTerm.length);
    after: text && text.substring(index + searchTerm && searchTerm.length);
  }
};
export function AutocompleteSuggestions(): any ({ ;
  suggestions, ;
  searchTerm, ;
  onSelectSuggestion;
  visible ;
}: AutocompleteSuggestionsProps) {;
  if (!visible || suggestions && suggestions.length === 0) return null;
  return (
    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">;
      <ul className="py-2 max-h-60 overflow-y-auto">;
        {suggestions && suggestions.map((suggestion, index) => {;
          const highlight = highlightMatch(suggestion && suggestion.text, searchTerm);
          return (
            <likey={`${suggestion && suggestion.type}-${index}`} 
                className="px-4 py-2 hover:bg-zion-blue-light/20 cursor-pointer"
                onClick={() => onSelectSuggestion(suggestion && suggestion.text)}>;
              <div className="flex items-center justify-between">;
                <div>;
                  <span>{highlight && highlight.before}</span>;
                  <span className="font-bold text-zion-purple">{highlight && highlight.match}</span>;
                  <span>{highlight && highlight.after}</span>;
                </div>;
                <span className="text-xs text-zion-slate-light capitalize">;
                  {suggestion && suggestion.type}
                </span>;
              </div>;
            </li>;
          );
        })}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/AutocompleteSuggestions.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/AutocompleteSuggestions.tsx
=======
<<<<<<< HEAD
      </ul>
    </div>
  )
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </ul>;
    </div>;
  );
}
<<<<<<< HEAD
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/AutocompleteSuggestions.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
export /**
 * AutocompleteSuggestions - Function description
 */
function AutocompleteSuggestions() {
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="absolute z - 50 top - full left - 0 right - 0 mt - 1 bg - zion - blue - dark border border - zion - blue - light rounded - lg shadow - lg overflow - hidden">;
      <ul className="py - 2 max - h-60 overflow - y-auto">;
        {suggestions.map ((suggestion, index) => {
          const highlight = highlight_match (suggestion.text, search_term);
;
          return (
            <li key={`${suggestion.type}-${index}`}
                className="px - 4 py - 2 hover:bg - zion - blue - light / 20 cursor - pointer";
                on_click={() => onSelectSuggestion (suggestion.text)}>;
              <div className="flex items - center justify - between">;
                <div>;
                  <span>{highlight.before}</span>;
                  <span className="font - bold text - zion - purple">{highlight.match}</span>;
                  <span>{highlight.after}</span>;
                </div>;
                <span className="text - xs text - zion - slate - light capitalize">;
=======

import React from "react",;
import { SearchSuggestion, SearchHighlight } from "@/types/search",;
;
interface AutocompleteSuggestionsProps {;
  suggestions:SearchSuggestion[],;
  searchTerm:string,;
  onSelectSuggestion:(suggestion:string) => void,;
  visible:boolean;
}
;
// Helper function to highlight matching text;
const highlightMatch = (text:string, searchTerm:string):SearchHighlight => {;
  if (!searchTerm || searchTerm.length === 0) {;
    return { before:'', match:text, after:'' },;
  }
  ;
  const lowerText = text.toLowerCase(),;
  const lowerSearchTerm = searchTerm.toLowerCase(),;
  const index = lowerText.indexOf(lowerSearchTerm),;
  ;
  if (index === -1) {;
    return { before:'', match:text, after:'' },;
  }
  ;
  return {;
    before:text.substring(0, index),;
    match:text.substring(index, index + searchTerm.length),;
    after:text.substring(index + searchTerm.length);
  },;
},;
;
export function AutocompleteSuggestions({ ;
  suggestions, ;
  searchTerm, ;
  onSelectSuggestion,;
  visible ;
} AutocompleteSuggestionsProps) {;
  if (!visible || suggestions.length === 0) return null,;
  ;
  return (;
    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">;
      <ul className="py-2 max-h-60 overflow-y-auto">;
        {suggestions.map((suggestion, index) => {;
          const highlight = highlightMatch(suggestion.text, searchTerm),;
          ;
          return (;
            <li key={`${suggestion.type}-${index}`} ;
                className="px-4 py-2 hover:bg-zion-blue-light/20 cursor-pointer";
                onClick={() => onSelectSuggestion(suggestion.text)}>;
              <div className="flex items-center justify-between">;
                <div>;
                  <span>{highlight.before}</span>;
                  <span className="font-bold text-zion-purple">{highlight.match}</span>;
                  <span>{highlight.after}</span>;
                </div>;
                <span className="text-xs text-zion-slate-light capitalize">;
                  {suggestion.type}
                </span>;
              </div>;
            </li>;
          ),;
        })}
      </ul>;
    </div>;
  ),;  if (!searchTerm || searchTerm.length === 0) {
  return {
    before: text.substring(0, index),
    match: text.substring(index, index + searchTerm.length),
    after: text.substring(index + searchTerm.length)
  }
},

export function AutocompleteSuggestions({ 
  suggestions,
  searchTerm,
  onSelectSuggestion,
  visible 
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null,
  
  return (
    <div className=&quot;absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden&quot;>
      <ul className=&quot;py-2 max-h-60 overflow-y-auto&quot;>
        {suggestions.map((suggestion, index) => {
          const highlight = highlightMatch(suggestion.text, searchTerm),
          
          return (
            <li key={`${suggestion.type}-${index}`} 
                className=&quot;px-4 py-2 hover:bg-zion-blue-light/20 cursor-pointer&quot;
                onClick={() => onSelectSuggestion(suggestion.text)}>
              <div className=&quot;flex items-center justify-between&quot;>
                <div>
                  <span>{highlight.before}</span>
                  <span className=&quot;font-bold text-zion-purple&quot;>{highlight.match}</span>
                  <span>{highlight.after}</span>
                </div>
                <span className=&quot;text-xs text-zion-slate-light capitalize&quot;>
                  {suggestion.type}
import React from "react";

interface AutocompleteSuggestionsProps {suggestions: SearchSuggestion[];
  searchTerm: string,
  onSelectSuggestion: (suggestion: string) => void;
  visible: boolean}

// Helper function to highlight matching text,
const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {if (!searchTerm || searchTerm.length === 0) {
    return { before: '', match: text, after: ''}
  }
  
  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerSearchTerm);
  
  if (index === -1) {return { before: '', match: text, after: ''}
  }
  
  return {before: text.substring(0, index), match: text.substring(index, index + searchTerm.length), after: text.substring(index + searchTerm.length)}
};

export function AutocompleteSuggestions(_{suggestions, searchTerm, onSelectSuggestion, visible}: AutocompleteSuggestionsProps) {if (!visible || suggestions.length === 0) return null;
  
  return (_<div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">
      <ul className="py-2 max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => {
          const highlight = highlightMatch(suggestion.text, searchTerm);
          
          return (_<li key={`${suggestion.type}-${index}`} 
                className="px-4 py-2 hover:bg-zion-blue-light/20 cursor-pointer"
                onClick={_() => onSelectSuggestion(suggestion.text)}>
              <div className="flex items-center justify-between">
                <div>
                  <span>{highlight.before}</span>
                  <span className="font-bold text-zion-purple">{highlight.match}</span>
                  <span>{highlight.after}</span>
                </div>
                <span className="text-xs text-zion-slate-light capitalize">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  {suggestion.type}
                </span>;
              </div>;
            </li>);
        })}
<<<<<<< HEAD
      </ul>;
    </div>);
=======
      </ul>
    </div>
  )
}const lowerText = text.toLowerCase ();
const lowerSearchTerm = searchTerm.toLowerCase ();
const index = lowerText.indexOf (lowerSearchTerm);
if (index === -1) {
  return {
  before: '', match: text, after: '' 
}
}return {
  before: text.substring (0, index);
match: text.substring (index, index + searchTerm.length);
after: text.substring (index + searchTerm.length) 
}
};
export function AutocompleteSuggestions ({
  suggestions;
searchTerm;
onSelectSuggestion;
visible 
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null;
return (<div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden" > <ul className="py-2 max-h-60 overflow-y-auto" > {
  suggestions.map ( (suggestion, index) => {
  const highlight = highlightMatch (suggestion.text, searchTerm);
return (<li key= {
  `$ {
  suggestion.type 
}-$ {
  index 
}` 
}className="px-4 py-2 hover:bg-zion-blue-light/20 cursor-pointer" onClick= {
  () => onSelectSuggestion (suggestion.text) 
}> <div className="flex items-center justify-between" > <div> <span> {
  highlight.before 
}</span> <span className="font-bold text-zion-purple" > {
  highlight.match 
}</span> <span> {
  highlight.after 
}</span> </div> <span className="text-xs text-zion-slate-light capitalize" > {
  suggestion.type 
}
}) 
}</ul> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/AutocompleteSuggestions.tsx
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
