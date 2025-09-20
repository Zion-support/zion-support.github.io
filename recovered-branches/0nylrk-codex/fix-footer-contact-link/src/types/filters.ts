
export interface FilterSidebarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
  selectedRegions: string[];
<<<<<<< HEAD
  toggleRegion: (region: string) => void;
  priceRange: [number, number],
=======
  toggleRegion: (region: string) => void
  priceRange: [number, number];
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void;
  expandedSections: {
    skills: boolean;
    availability: boolean;
    region: boolean;
<<<<<<< HEAD
    experience: boolean;
    price: boolean
  },
  toggleSection: (sectionName: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  clearFilters: () => void;
=======
    experience: boolean
    price: boolean
  }
  toggleSection: (sectionName: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  clearFilters: () => void
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  isMobileFilterOpen?: boolean
}
export interface FilterComponentProps {
  expanded: boolean;
<<<<<<< HEAD
  toggleSection: () => void;
=======
  toggleSection: () => void
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  isMobileFilterOpen?: boolean
}
export interface SkillsFilterProps extends FilterComponentProps {
<<<<<<< HEAD
  selectedSkills: string[];
=======
  selectedSkills: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  toggleSkill: (skill: string) => void
}
export interface AvailabilityFilterProps extends FilterComponentProps {
<<<<<<< HEAD
  selectedAvailability: string[];
=======
  selectedAvailability: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  toggleAvailability: (availability: string) => void
}
export interface RegionFilterProps extends FilterComponentProps {
<<<<<<< HEAD
  selectedRegions: string[];
=======
  selectedRegions: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  toggleRegion: (region: string) => void
}
export interface ExperienceFilterProps extends FilterComponentProps {
  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void
}
export interface PriceFilterProps extends FilterComponentProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void
}
export interface SearchFilterProps {
<<<<<<< HEAD
  searchTerm: string;
=======
  searchTerm: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  setSearchTerm: (term: string) => void
}
export interface SortFilterProps {
<<<<<<< HEAD
  sortOption: string;
=======
  sortOption: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  setSortOption: (option: string) => void
}