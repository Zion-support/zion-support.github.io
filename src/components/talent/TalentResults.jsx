import React from 'react';'
import { ActiveFilters } from '@/components/talent/ActiveFilters';'
import { ResultsHeader } from '@/components/talent/ResultsHeader';'
import { TalentGrid } from '@/components/talent/TalentGrid';
export function TalentResults({}
export default function Page() {}
      <ResultsHeader isLoading={isLoading} resultCount={totalCount} />
      {/* Talents grid */}
      <TalentGrid;
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
}'""
'"'""