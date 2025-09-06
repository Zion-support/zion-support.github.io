<<<<<<< HEAD
=======
import { useAuthStatus } from './talent/useAuthStatus';
import { useTalentData } from './talent/useTalentData';
import { useFilterTalents } from './talent/useFilterTalents';
import { useUIState } from './talent/useUIState';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useAuthStatus} from "./talent/useAuthStatus";
import {useTalentData} from "./talent/useTalentData";
import {useFilterTalents} from "./talent/useFilterTalents";
import {useUIState} from "./talent/useUIState";
export function useTalentDirectory() {
  // Fetch auth status and saved talents
  const { ;
    isAuthenticated;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useAuthStatus } from "./talent/useAuthStatus",
import { useTalentData } from "./talent/useTalentData",
<<<<<<< HEAD
import { useFilterTalents } from "./talent/useFilterTalents";
import { useUIState } from "./talent/useUIState";
export function useTalentDirectory() {
  // Fetch auth status and saved talents
  const {
    isAuthenticated;

    userDetails
    savedTalents
    handleToggleSave
  } = useAuthStatus();
  // Fetch talent data
  const {
    talents
    isLoading
=======
import { useFilterTalents } from "./talent/useFilterTalents",
import { useUIState } from "./talent/useUIState",
export function useTalentDirectory() {
  // Fetch auth status and saved talents
  const { 
    isAuthenticated,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    userDetails, 
    savedTalents, 
    handleToggleSave 
  } = useAuthStatus(),

  // Fetch talent data
  const { 
    talents, 
    isLoading 
  } = useTalentData(),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  } = useTalentData();
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
<<<<<<< HEAD
  } = useFilterTalents(talents);
=======
  } = useFilterTalents(talents),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
  } = useUIState();
  return {
    // Talents and loading state
    talents;
    filteredTalents;
    isLoading;
    // Search and filter state
    searchTerm;
    setSearchTerm;
    selectedSkills;
    selectedAvailability;
    selectedRegions;
    priceRange;
    setPriceRange;
    experienceRange;
    setExperienceRange;
    sortOption;
    setSortOption;
    // UI state
    isMobileFilterOpen;
    setIsMobileFilterOpen;
    isHireModalOpen;
    setIsHireModalOpen;
    selectedTalent;
    setSelectedTalent;
    expandedSections;
    // Auth and user state
    isAuthenticated;
    userDetails;
    savedTalents;
=======
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
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    // Actions
<<<<<<< HEAD
<<<<<<< HEAD
    toggleSkill;
    toggleAvailability;
    toggleRegion;
=======
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection,
    handleToggleSave
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useAuthStatus } from "./talent/useAuthStatus",;
import { useTalentData } from "./talent/useTalentData",;
import { useFilterTalents } from "./talent/useFilterTalents",;
import { useUIState } from "./talent/useUIState",;
export function useTalentDirectory() {;
  // Fetch auth status and saved talents;
  const {;
    isAuthenticated,;
    userDetails,;
    savedTalents,;
    handleToggleSave;
  } = useAuthStatus(),;
  // Fetch talent data;
  const {;
    talents,;
    isLoading;
  } = useTalentData(),;
  // Apply filters and sorting;
  const {;
    filteredTalents,;
    searchTerm,;
    setSearchTerm,;
    selectedSkills,;
    selectedAvailability,;
    selectedRegions,;
    priceRange,;
    setPriceRange,;
    experienceRange,;
    setExperienceRange,;
    sortOption,;
    setSortOption,;
    toggleSkill,;
    toggleAvailability,;
    toggleRegion,;
    clearFilters;
  } = useFilterTalents(talents),;
  // Manage UI state;
  const {;
    isMobileFilterOpen,;
    setIsMobileFilterOpen,;
    isHireModalOpen,;
    setIsHireModalOpen,;
    selectedTalent,;
    setSelectedTalent,;
    expandedSections,;
    toggleSection;
  } = useUIState(),;
  return {;
    // Talents and loading state;
    talents,;
    filteredTalents,;
    isLoading,;
    // Search and filter state;
    searchTerm,;
    setSearchTerm,;
    selectedSkills,;
    selectedAvailability,;
    selectedRegions,;
    priceRange,;
    setPriceRange,;
    experienceRange,;
    setExperienceRange,;
    sortOption,;
    setSortOption,;
    // UI state;
    isMobileFilterOpen,;
    setIsMobileFilterOpen,;
    isHireModalOpen,;
    setIsHireModalOpen,;
    selectedTalent,;
    setSelectedTalent,;
    expandedSections,;
    // Auth and user state;
    isAuthenticated,;
    userDetails,;
    savedTalents,;
    // Actions;
    toggleSkill,;
    toggleAvailability,;
    toggleRegion,;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    clearFilters;
    toggleSection;
    handleToggleSave;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
<<<<<<< HEAD
=======
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection,
    handleToggleSave,
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
