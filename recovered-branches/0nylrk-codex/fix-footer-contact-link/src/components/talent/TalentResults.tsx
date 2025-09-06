

import React from "react",
import { TalentProfile } from "@/types/talent",
import { ActiveFilters } from "@/components/talent/ActiveFilters",

interface TalentResultsProps {

  filteredTalents: TalentProfile[]
  isLoading: boolean
  viewProfile: (id: string) => void
  handleRequestHire: (talent: TalentProfile) => void
  savedTalents: string[]
  handleToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
  activeFiltersProps: {

    clearFilters: () => void
  }
}

export function TalentResults({
  filteredTalents,
  isLoading,
  viewProfile,
  handleRequestHire,
  savedTalents,
  handleToggleSave,
  isAuthenticated,

  activeFiltersProps
}: TalentResultsProps) {
  return (
    <div className="flex-1">

      {/* Active filters */}
      <ActiveFilters {...activeFiltersProps} />
      {/* Results count */}
      <ResultsHeader
        isLoading={isLoading}
        resultCount={filteredTalents.length}
      />
      {/* Talents grid */}
      <TalentGrid
        talents={filteredTalents}
        isLoading={isLoading}
        onTalentClick={viewProfile}
        viewProfile={viewProfile}
        handleRequestHire={handleRequestHire}
        savedTalentIds={savedTalents}
        onToggleSave={handleToggleSave}
        isAuthenticated={isAuthenticated}
        clearFilters={activeFiltersProps.clearFilters}
