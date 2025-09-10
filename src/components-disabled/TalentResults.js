import React from "react";
import { ActiveFilters } from "@/components/talent/ActiveFilters";
import { ResultsHeader } from "@/components/talent/ResultsHeader";
import { TalentGrid } from "@/components/talent/TalentGrid";
export function TalentResults(_{ talents, _totalCount, _isLoading, _viewProfile, _handleBook, _handleMessage, _isAuthenticated, _activeFiltersProps }) {
    return (<div className="flex-1">
      {/* Active filters */}
      <ActiveFilters {...activeFiltersProps}/>
      
      {/* Results count */}
      <ResultsHeader isLoading={isLoading} resultCount={totalCount}/>
      
      {/* Talents grid */}
      <TalentGrid talents={talents} isLoading={isLoading} onTalentClick={viewProfile} handleBook={handleBook} handleMessage={handleMessage} isAuthenticated={isAuthenticated} clearFilters={activeFiltersProps.clearFilters}/>
    </div>);
}
