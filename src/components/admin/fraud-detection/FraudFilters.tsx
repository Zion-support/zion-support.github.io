
  resetFilters: () => void
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({
resetFilters: () => void
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({




  searchQuery
  setSearchQuery
  statusFilter
  setStatusFilter
  severityFilter
  setSeverityFilter
  contentTypeFilter
  setContentTypeFilter
import React from 'react';
};

interface FraudFiltersProps {;
  searchQuery: string,;
  setSearchQuery: (value: string,) => void,;
  statusFilter: string | null,;
  setStatusFilter: (value: string | null,) => void,;
  severityFilter: string | null,;
  setSeverityFilter: (value: string | null,) => void,;
  contentTypeFilter: string | null,;
  setContentTypeFilter: (value: string | null,) => void,;
  resetFilters: () => void;
}

export const FraudFilters: React.FC<FraudFiltersProps> = ({;
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;
  setContentTypeFilter;

