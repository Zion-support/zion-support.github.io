export function TalentResults(props: any) {
    return (
        <div className="flex-1">
      {/* Active filters */}
import React from 'react';
import { ActiveFilters } from "../../components/talent/ActiveFilters";
import { ResultsHeader } from "../../components/talent/ResultsHeader";
import { TalentGrid } from "../../components/talent/TalentGrid";

export function TalentResults({
  activeFiltersProps,
  isLoading,
  totalCount,
  talents,
  viewProfile,
  handleBook,
  handleMessage,
  isAuthenticated
}) {
  return (
    <div className="min-h-screen bg-white">
      <ActiveFilters {...activeFiltersProps} />
      <ResultsHeader isLoading={isLoading} resultCount={totalCount} />
      <TalentGrid 
        talents={talents} 
        isLoading={isLoading} 
        onTalentClick={viewProfile} 
        handleBook={handleBook} 
        handleMessage={handleMessage} 
        isAuthenticated={isAuthenticated} 
        clearFilters={activeFiltersProps.clearFilters} 
      />
    </div>
  );
}

export default TalentResults;
