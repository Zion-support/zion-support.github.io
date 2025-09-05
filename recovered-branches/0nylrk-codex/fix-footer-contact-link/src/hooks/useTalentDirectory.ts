
import { useAuthStatus } from "./talent/useAuthStatus",
import { useTalentData } from "./talent/useTalentData",
import { useFilterTalents } from "./talent/useFilterTalents",
import { useUIState } from "./talent/useUIState",export function useTalentDirectory() {
  // Fetch auth status and saved talents
  const { 
    isAuthenticated,
    userDetails, 
    savedTalents, 
    handleToggleSave 
  } = useAuthStatus(),

  // Fetch talent data
  const { 
    talents,
    isLoading 
  } = useTalentData(),

  // Apply filters and sorting
  const {
    filteredTalents,
    searchTerm,
    setSearchTerm,
    selectedSkills,
    selectedAvailability,
    selectedRegions,
    priceRange,
    setPriceRange,
    experienceRange,
    setExperienceRange,
    sortOption,
    setSortOption,
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters
  } = useFilterTalents(talents),

  // Manage UI state
  const {
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
    toggleSection
  } = useUIState(),

  return {
    // Talents and loading state
    talents,
    filteredTalents,
    isLoading,
    // Search and filter state
    searchTerm,
    setSearchTerm,
    selectedSkills,
    selectedAvailability,
    selectedRegions,
    priceRange,
    setPriceRange,
    experienceRange,
    setExperienceRange,
    sortOption,
    setSortOption,
    // UI state
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
    // Auth and user state
    isAuthenticated,
    userDetails,
    savedTalents,
    // Actions
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection,
    handleToggleSave
  }

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
