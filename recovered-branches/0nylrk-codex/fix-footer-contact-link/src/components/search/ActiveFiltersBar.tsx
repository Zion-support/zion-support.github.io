<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx


<<<<<<< HEAD
import React from "react",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {ClickableBadge} from "@/components/ui/clickable-badge";
import {X} from "lucide-react";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
<<<<<<< HEAD
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { X } from "lucide-react";
=======
import { ClickableBadge } from "@/components/ui/clickable-badge",
import { X } from "lucide-react",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ActiveFiltersBarProps {

  selectedProductTypes: string[]
  selectedLocations: string[]
  selectedAvailability: string[]
  selectedRating: number | null
  searchQuery: string
  onRemoveFilter: (filterType: string, value: string) => void
  onRemoveRating: () => void

  onClearSearch: () => void
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function ActiveFiltersBar({;
  selectedProductTypes;
  selectedLocations;
  selectedAvailability;
  selectedRating;
  searchQuery;
  onRemoveFilter;
  onRemoveRating;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ActiveFiltersBar({
  selectedProductTypes,
  selectedLocations,
  selectedAvailability,
  selectedRating,
  searchQuery,
  onRemoveFilter,
  onRemoveRating,
<<<<<<< HEAD

  onClearSearch
}: ActiveFiltersBarProps) {

  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">
      <span className="text-sm text-zion-slate-light">Active filters:</span>
      {searchQuery && (

import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { X } from "lucide-react",;
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
import React from "react";
import {ClickableBadge} from "@/components/ui/clickable-badge";
import {X} from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ActiveFiltersBarProps {;
  selectedProductTypes: string[],;
  selectedLocations: string[],;
  selectedAvailability: string[],;
  selectedRating: number | null,;
  searchQuery: string,;
  onRemoveFilter: (filterType: string, value: string) => void,;
  onRemoveRating: () => void,;
  onClearSearch: () => void;
}
export function ActiveFiltersBar(): any ({;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
  selectedProductTypes;
  selectedLocations;
  selectedAvailability;
  selectedRating;
  searchQuery;
  onRemoveFilter;
  onRemoveRating;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx




  onClearSearch
}: ActiveFiltersBarProps) {

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  onClearSearch
}: ActiveFiltersBarProps) {
<<<<<<< HEAD

  const hasActiveFilters =
    selectedProductTypes.length > 0 |
    selectedLocations.length > 0 |
    selectedAvailability.length > 0 |
    selectedRating !== null |
    !!searchQuery;
  if (!hasActiveFilters) return null;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const hasActiveFilters = 
    selectedProductTypes.length > 0 || 
    selectedLocations.length > 0 || 
    selectedAvailability.length > 0 || 
    selectedRating !== null ||
    !!searchQuery,
    
  if (!hasActiveFilters) return null,
  
<<<<<<< HEAD


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">
      <span className="text-sm text-zion-slate-light">Active filters:</span>
      {searchQuery && (
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
  onClearSearch;
}: ActiveFiltersBarProps) {;
  const hasActiveFilters = ;
    selectedProductTypes && selectedProductTypes.length > 0 || ;
    selectedLocations && selectedLocations.length > 0 || ;
    selectedAvailability && selectedAvailability.length > 0 || ;
    selectedRating !== null ||;
    !!searchQuery;
  if (!hasActiveFilters) return null;
  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">;
      <span className="text-sm text-zion-slate-light">Active filters:</span>;
      {searchQuery && (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
<<<<<<< HEAD
        <ClickableBadge;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onClearSearch}>;
=======

        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

          onClick={onClearSearch}
        >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          Search: {searchQuery}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx


      {selectedProductTypes && selectedProductTypes.map(type => (;

========
      {selectedProductTypes && selectedProductTypes.map(type => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
        <ClickableBadge
          key={`type-${type}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => onRemoveFilter('productTypes', type)}
=======

import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { X } from "lucide-react",;
;
interface ActiveFiltersBarProps {;
  selectedProductTypes:string[],;
  selectedLocations:string[],;
  selectedAvailability:string[],;
  selectedRating:number | null,;
  searchQuery:string,;
  onRemoveFilter:(filterType:string, value:string) => void,;
  onRemoveRating:() => void,;
  onClearSearch:() => void;
=======
<<<<<<< HEAD
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
=======
        <ClickableBadge 
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { X } from "lucide-react",;
interface ActiveFiltersBarProps {;
  selectedProductTypes: string[],;
  selectedLocations: string[],;
  selectedAvailability: string[],;
  selectedRating: number | null,;
  searchQuery: string,;
  onRemoveFilter: (filterType: string, value: string) => void,;
  onRemoveRating: () => void,;
  onClearSearch: () => void;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
export function ActiveFiltersBar({;
  selectedProductTypes,;
  selectedLocations,;
  selectedAvailability,;
  selectedRating,;
  searchQuery,;
  onRemoveFilter,;
  onRemoveRating,;
  onClearSearch;
<<<<<<< HEAD
} ActiveFiltersBarProps) {;
  const hasActiveFilters = ;
    selectedProductTypes.length > 0 || ;
    selectedLocations.length > 0 || ;
    selectedAvailability.length > 0 || ;
    selectedRating !== null ||;
    !!searchQuery,;
    ;
  if (!hasActiveFilters) return null,;
  ;
  return (;
    <div className="flex flex-wrap gap-2 items-center mb-4">;
      <span className="text-sm text-zion-slate-light">Active filters:</span>;
      ;
      {searchQuery && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={onClearSearch}
        >;
          Search:{searchQuery}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
      ;
      {selectedProductTypes.map(type => (;
        <ClickableBadge ;
          key={`type-${type}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => onRemoveFilter('productTypes', type)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        >;
          {type}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx


      {selectedLocations && selectedLocations.map(location => (;

========
<<<<<<< HEAD
      {selectedLocations && selectedLocations.map(location => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
=======
}: ActiveFiltersBarProps) {;
  const hasActiveFilters =;
    selectedProductTypes.length > 0 ||;
    selectedLocations.length > 0 ||;
    selectedAvailability.length > 0 ||;
    selectedRating !== null ||;
    !!searchQuery;
  if (!hasActiveFilters) return null;
  return (;
    <div className="flex flex-wrap gap-2 items-center mb-4">;
      <span className="text-sm text-zion-slate-light">Active filters:</span>;
      {searchQuery && (;
        <ClickableBadge;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          onClick={onClearSearch}
        >
          Search: {searchQuery}
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
      {selectedProductTypes.map(type => (
        <ClickableBadge
          key={`type-${type}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => onRemoveFilter('productTypes', type)}
        >
          {type}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      {selectedLocations.map(location => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <ClickableBadge
          key={`location-${location}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => onRemoveFilter('locations', location)}
<<<<<<< HEAD
=======
      ;
      {selectedLocations.map(location => (;
        <ClickableBadge ;
          key={`location-${location}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => onRemoveFilter('locations', location)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        >;
          {location}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx


      {selectedAvailability && selectedAvailability.map(availability => (;

========
<<<<<<< HEAD
      {selectedAvailability && selectedAvailability.map(availability => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
=======
        >
          {location}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      {selectedAvailability.map(availability => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <ClickableBadge
          key={`availability-${availability}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => onRemoveFilter('availability', availability)}
<<<<<<< HEAD
=======
      ;
      {selectedAvailability.map(availability => (;
        <ClickableBadge ;
          key={`availability-${availability}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";          onClick={() => onRemoveFilter('availability', availability)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        >;
          {availability}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx


      {selectedRating !== null && (;

========
<<<<<<< HEAD
      {selectedRating !== null && (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onRemoveRating}>;
=======
      ;
      {selectedRating !== null && (;
        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={onRemoveRating}
        >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          {selectedRating}+ Stars;
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/search/ActiveFiltersBar.tsx
import React from './react';
import { ClickableBadge } from '@/components / ui / clickable - badge';
import { X } from './lucide-react';
interface ActiveFiltersBarProps {
  selectedProductTypes: string[],
  selected_locations: string[],
  selected_availability: string[],
  selected_rating: number | null,
  search_query: string,
  onRemoveFilter: (filter_type: string, value: string) => void,
  onRemoveRating: () => void,
  onClearSearch: () => void;
}
export /**
 * ActiveFiltersBar - Function description
 */
function ActiveFiltersBar() {
  const hasActiveFilters =;
    selectedProductTypes.length > 0 ||;
    selected_locations.length > 0 ||;
    selected_availability.length > 0 ||;
    selected_rating !== null ||;
    !!search_query;
;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="flex flex - wrap gap - 2 items - center mb - 4">;
      <span className="text - sm text - zion - slate - light">Active filters:</span>;
      {search_query && (
        <ClickableBadge;
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";
          on_click={onClearSearch}
        >;
          Search: {search_query}
          <X className="h - 3 w - 3" />;
        </ClickableBadge>)}
      {selectedProductTypes.map (type => (
        <ClickableBadge;
          key={`type-${type}`}
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";
          on_click={() => onRemoveFilter ('product_types', type)}
        >;
          {type}
          <X className="h - 3 w - 3" />;
        </ClickableBadge>))}
      {selected_locations.map (location => (
        <ClickableBadge;
          key={`location-${location}`}
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";
          on_click={() => onRemoveFilter ('locations', location)}
        >;
          {location}
          <X className="h - 3 w - 3" />;
        </ClickableBadge>))}
      {selected_availability.map (availability => (
        <ClickableBadge;
          key={`availability-${availability}`}
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";
          on_click={() => onRemoveFilter ('availability', availability)}
        >;
          {availability}
          <X className="h - 3 w - 3" />;
        </ClickableBadge>))}
      {selected_rating !== null && (
        <ClickableBadge;
          className="bg - zion - purple / 20 hover:bg - zion - purple / 30 text - zion - purple border - none flex items - center gap - 1 pl - 2";
          on_click={onRemoveRating}
        >;
          {selected_rating}+ Stars;
          <X className="h - 3 w - 3" />;
        </ClickableBadge>)}
    </div>);
}
=======
  ),;}
 interface ActiveFiltersBarProps {
  selectedProductTypes: string[];
selectedLocations: string[];
selectedAvailability: string[];
selectedRating: number | null;
searchQuery: string;
onRemoveFilter: (filterType: string, value: string) => void;
onRemoveRating: () => void;
onClearSearch: () => void 
}selectedProductTypes, selectedLocations, selectedAvailability, selectedRating, searchQuery, onRemoveFilter, onRemoveRating, onClearSearch 
}: ActiveFiltersBarProps) {
  const hasActiveFilters = selectedProductTypes.length > 0 || selectedLocations.length > 0 || selectedAvailability.length > 0 || selectedRating !== null || !!searchQuery;
if (!hasActiveFilters) return null;
return (<div className="flex flex-wrap gap-2 items-center mb-4" > <span className="text-sm text-zion-slate-light" >Active filters:</span> {
  searchQuery && (<ClickableBadge className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2" onClick= {
  onClearSearch 
}> </ClickableBadge>) 
}{
  selectedProductTypes.map (type => (<ClickableBadge key= {
  `type-$ {
  type 
}` 
}</ClickableBadge>) ) 
}{
  selectedLocations.map (location => (<ClickableBadge key= {
  `location-$ {
  location 
}` 
}</ClickableBadge>) ) 
}{
  selectedAvailability.map (availability => (<ClickableBadge key= {
  `availability-$ {
  availability 
}` 
}</ClickableBadge>) ) 
}{
  selectedRating !== null && (<ClickableBadge className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2" onClick= {
  onRemoveRating 
}> </ClickableBadge>) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        >
          {availability}
          <X className="h-3 w-3" />
        </ClickableBadge>
      ))}
      {selectedRating !== null && (
        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onRemoveRating}
        >
          {selectedRating}+ Stars
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
    </div>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
