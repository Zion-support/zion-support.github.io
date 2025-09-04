import {ActiveFilters} from "@/components/talent/ActiveFilters";
import {ResultsHeader} from "@/components/talent/ResultsHeader";
import {TalentGrid} from "@/components/talent/TalentGrid";
export function TalentResults($1) {
    return (
    <div className="min-h-screen bg-white">
      {/* Active filters */}
      <ActiveFilters {...activeFiltersProps} />

      {/* Results count */}
      <ResultsHeader isLoading={isLoading} resultCount={totalCount} />

      {/* Talents grid */}
      <TalentGrid talents={talents} isLoading={isLoading} onTalentClick={viewProfile} handleBook={handleBook} handleMessage={handleMessage} isAuthenticated={isAuthenticated} clearFilters={activeFiltersProps.clearFilters} />
        </div>
  );
}
export default TalentResults;