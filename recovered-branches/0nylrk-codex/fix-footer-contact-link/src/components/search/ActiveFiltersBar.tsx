<<<<<<< HEAD


interface ActiveFiltersBarProps {


=======

import React from "react",
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { X } from "lucide-react";
interface ActiveFiltersBarProps {
  selectedProductTypes: string[],
  selectedLocations: string[],
  selectedAvailability: string[],
  selectedRating: number | null,
  searchQuery: string,
  onRemoveFilter: (filterType: string, value: string) => void,
  onRemoveRating: () => void,
  onClearSearch: () => void
}

export function ActiveFiltersBar({;

  const hasActiveFilters =
    selectedProductTypes.length > 0 |
    selectedLocations.length > 0 |
    selectedAvailability.length > 0 |
    selectedRating !== null |
    !!searchQuery;
  if (!hasActiveFilters) return null;
    selectedProductTypes.length > 0 || 
    selectedLocations.length > 0 || 
    selectedAvailability.length > 0 || 
    selectedRating !== null ||
    !!searchQuery,
  if (!hasActiveFilters) return null,

      <span className="text-sm text-zion-slate-light">Active filters:</span>
      {searchQuery && (

        <ClickableBadge

          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onClearSearch}>;

        <ClickableBadge "
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"

          onClick={onClearSearch}
        >
          Search: {searchQuery}"
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}

      {selectedProductTypes && selectedProductTypes.map(type => (;

{selectedProductTypes && selectedProductTypes.map(type => (;
        <ClickableBadge
          key={`type-${type}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => onRemoveFilter('productTypes', type)}
        >;
          {type}
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      ))}
      {selectedLocations && selectedLocations.map(location => { return (; }
        <ClickableBadge
}
className="bg-zion-purple/20 "hover":bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2""
        <ClickableBadge,
className="bg-zion-purple/20 "hover":bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2""
import React from "react";"
import { X } from "lucide-react",;"
import {ClickableBadge} from "@/components/ui/clickable-badge";"
import {X} from "lucide-react";"
interface ActiveFiltersBarProps {;
  selectedProductTypes:string[],;
  selectedLocations:string[],;
  selectedAvailability:string[],;
  selectedRating:number | null,;
  searchQuery:string,;
  onRemoveFilter:(filterType:string, value:string) => void,;
  onRemoveRating:() => void,;
  onClearSearch:() => void;
        <ClickableBadge

          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
        <ClickableBadge "
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2""
import React from "react",;"
import { ClickableBadge } from "@/components/ui/clickable-badge",;"
import { X } from "lucide-react",;

import {X} from "lucide-react";

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

interface ActiveFiltersBarProps {

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
export function ActiveFiltersBar({
>>>>>>> origin/cursor/delete-old-data-records-6bba
  selectedProductTypes;
  selectedLocations;
  selectedAvailability;
  selectedRating;
  searchQuery;
  onRemoveFilter;
  onRemoveRating;

  onClearSearch
}: ActiveFiltersBarProps) {

<<<<<<< HEAD
          onClick={() => onRemoveFilter('productTypes', type)}

      ))}
      {selectedLocations.map(location => (


=======
export function ActiveFiltersBar({
  selectedProductTypes,
  selectedLocations,
  selectedAvailability,
  selectedRating,
  searchQuery,
  onRemoveFilter,
  onRemoveRating,
  selectedProductTypes;
  selectedLocations;
  selectedAvailability;
  selectedRating;
  searchQuery;
  onRemoveFilter;
  onRemoveRating;
export function ActiveFiltersBar({
  selectedProductTypes,
  selectedLocations,
  selectedAvailability,
  selectedRating,
  searchQuery,
  onRemoveFilter,
  onRemoveRating,
  onClearSearch
}: ActiveFiltersBarProps) {
  const hasActiveFilters = $2;
    selectedProductTypes.length > 0 || 
    selectedLocations.length > 0 || 
    selectedAvailability.length > 0 || 
    selectedRating !== null ||
    !!searchQuery,
    
  if (!hasActiveFilters) return null,

  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">

      <span className="text-sm text-zion-slate-light">Active filters:</span>
      {searchQuery && (

  onClearSearch;
}: ActiveFiltersBarProps) {;
  const hasActiveFilters = ;
    selectedProductTypes && selectedProductTypes.length > 0 || ;
    selectedLocations && selectedLocations.length > 0 || ;
    selectedAvailability && selectedAvailability.length > 0 || ;
    selectedRating !== null ||;
    !!searchQuery;
  if (!hasActiveFilters) return null;
  return ("
    <div className="flex flex-wrap gap-2 items-center mb-4">;"
      <span className="text-sm text-zion-slate-light">Active filters:</span>;
      {searchQuery && (;

          onClick={onClearSearch}
        >
        <ClickableBadge"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onClearSearch}>;
          Search: {searchQuery}"
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}
        <ClickableBadge;`
          key={`type-${type}`}"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"'
          onClick={() => onRemoveFilter('productTypes', type)}
        >;
          {type}"
          <X className="h-3 w-3" />;
        </ClickableBadge>;
        <ClickableBadge
          key={`type-${type}`}
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={() => onRemoveFilter('productTypes', type)}
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
          onClick={onClearSearch}
        >
          Search: {searchQuery}
          <X className="h-3 w-3" />
        </ClickableBadge>
      )}
      {selectedProductTypes.map(type => (
    selectedProductTypes.length > 0 || 
    selectedLocations.length > 0 || 
    selectedAvailability.length > 0 || 
    selectedRating !== null ||
    !!searchQuery,
    
  if (!hasActiveFilters) return null,

  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">

      <span className="text-sm text-zion-slate-light">Active filters:</span>
      {searchQuery && (

  onClearSearch;
}: ActiveFiltersBarProps) {;
  const hasActiveFilters = ;
    selectedProductTypes && selectedProductTypes.length > 0 || ;
    selectedLocations && selectedLocations.length > 0 || ;
    selectedAvailability && selectedAvailability.length > 0 || ;
    selectedRating !== null ||;
    !!searchQuery;
  if (!hasActiveFilters) return null;
  return ("
    <div className="flex flex-wrap gap-2 items-center mb-4">;"
      <span className="text-sm text-zion-slate-light">Active filters:</span>;
      {searchQuery && (;

          onClick={onClearSearch}
        >
        <ClickableBadge"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onClearSearch}>;
          Search: {searchQuery}"
          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}

        <ClickableBadge;`
          key={`type-${type}`}"
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"'
          onClick={() => onRemoveFilter('productTypes', type)}
        >
          {type}
          <X className="h-3 w-3" />
        </ClickableBadge>

      {selectedRating !== null && (;

        <ClickableBadge
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2"
          onClick={onRemoveRating}>;
;
      {selectedRating !== null && (;

        <ClickableBadge ;
          className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2";
          onClick={onRemoveRating}
        >;
          {selectedRating}+ Stars;

          <X className="h-3 w-3" />;
        </ClickableBadge>;
      )}


import React from './react';
import { ClickableBadge } from '@/components / ui / clickable - badge';

import { X } from './lucide-react';
interface ActiveFiltersBarProps {}

  selectedProductTypes: string[],
  selected_locations: string[],
  selected_availability: string[],
  selected_rating: number | null,
  search_query: string,
  onRemoveFilter: (filter_type: string, value: string) => void,
  onRemoveRating: () => void,
  onClearSearch: () => void;
}

  const hasActiveFilters =;
    selectedProductTypes.length > 0 ||;
    selected_locations.length > 0 ||;
    selected_availability.length > 0 ||;
    selected_rating !== null ||;
    !!search_query;
;

          <X className="h - 3 w - 3" />;
        </ClickableBadge>)}
    </div>);
}


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


    </div>);"
return (<div className="flex flex-wrap gap-2 items-center mb-4" > <span className="text-sm text-zion-slate-light" >Active filters:</span> {"
  searchQuery && (<ClickableBadge className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2" onClick= {"
}> ) 
  selectedProductTypes.map (type => (<ClickableBadge key= {`;
  `type-$ {
  type;`;
}` )
}) ) 
  selectedLocations.map (location => (<ClickableBadge key= {`;
  `location-$ {
  location;`;
  selectedAvailability.map (availability => (<ClickableBadge key= {`;
  `availability-$ {
  availability;`;
}) ) "
  selectedRating !== null && (<ClickableBadge className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none flex items-center gap-1 pl-2" onClick= {"
  onRemoveRating;)
}</div>) "
          <X className="h-3 w-3" />"

          onClick={onRemoveRating}

    </div>"`;
pr-12325
        >
</ClickableBadge>"
          <X className="h-3 w-3" />"
</X>

        </ClickableBadge>
      )}
    </div>
  )

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
