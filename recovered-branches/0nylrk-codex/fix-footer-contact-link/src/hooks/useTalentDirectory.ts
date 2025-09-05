

export function useTalentDirectory() {_// Fetch auth status and saved talents
  const { 
    isAuthenticated, _userDetails, _savedTalents, _handleToggleSave} = useAuthStatus();

  // Fetch talent data
  const {_talents, _isLoading} = useTalentData();

  // Apply filters and sorting
  const {_filteredTalents, _searchTerm, _setSearchTerm, _selectedSkills, _selectedAvailability, _selectedRegions, _priceRange, _setPriceRange, _experienceRange, _setExperienceRange, _sortOption, _setSortOption, _toggleSkill, _toggleAvailability, _toggleRegion, _clearFilters} = useFilterTalents(talents);

  // Manage UI state
  const {_isMobileFilterOpen, _setIsMobileFilterOpen, _isHireModalOpen, _setIsHireModalOpen, _selectedTalent, _setSelectedTalent, _expandedSections, _toggleSection} = useUIState();

  return {_// Talents and loading state
    talents, _filteredTalents, _isLoading, _// Search and filter state
    searchTerm, _setSearchTerm, _selectedSkills, _selectedAvailability, _selectedRegions, _priceRange, _setPriceRange, _experienceRange, _setExperienceRange, _sortOption, _setSortOption, _// UI state
    isMobileFilterOpen, _setIsMobileFilterOpen, _isHireModalOpen, _setIsHireModalOpen, _selectedTalent, _setSelectedTalent, _expandedSections, _// Auth and user state
    isAuthenticated, _userDetails, _savedTalents, _// Actions
    toggleSkill, _toggleAvailability, _toggleRegion, _clearFilters, _toggleSection, _handleToggleSave};
}
