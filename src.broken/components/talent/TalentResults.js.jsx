import React from 'react',
import { ActiveFilters } from '@/components/talent/ActiveFilters',

export default function Page() {
      <ResultsHeader isLoading={isLoading} resultCount={totalCount} />

      {/* Talents grid */}
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
  ),
}
'"