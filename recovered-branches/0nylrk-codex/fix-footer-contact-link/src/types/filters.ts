
export interface FilterSidebarProps {_searchTerm: string;
  setSearchTerm: (_term: string) => void;
  selectedSkills: string[];
  toggleSkill: (_skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (_availability: string) => void;
  selectedRegions: string[];
  toggleRegion: (_region: string) => void;
  priceRange: [number, _number];
  setPriceRange: (_range: [number, _number]) => void;
  experienceRange: [number, _number];
  setExperienceRange: (_range: [number, _number]) => void;
  expandedSections: {
    skills: boolean;
    availability: boolean;
    region: boolean;
    experience: boolean;
    price: boolean;};
  toggleSection: (_sectionName: string) => void;
  sortOption: string;
  setSortOption: (_option: string) => void;
  clearFilters: () => void;
  isMobileFilterOpen?: boolean;
}

export interface FilterComponentProps {_expanded: boolean;
  toggleSection: () => void;
  isMobileFilterOpen?: boolean;}

export interface SkillsFilterProps extends FilterComponentProps {_selectedSkills: string[];
  toggleSkill: (_skill: string) => void;}

export interface AvailabilityFilterProps extends FilterComponentProps {_selectedAvailability: string[];
  toggleAvailability: (_availability: string) => void;}

export interface RegionFilterProps extends FilterComponentProps {_selectedRegions: string[];
  toggleRegion: (_region: string) => void;}

export interface ExperienceFilterProps extends FilterComponentProps {_experienceRange: [number, _number];
  setExperienceRange: (_range: [number, _number]) => void;}

export interface PriceFilterProps extends FilterComponentProps {_priceRange: [number, _number];
  setPriceRange: (_range: [number, _number]) => void;}

export interface SearchFilterProps {_searchTerm: string;
  setSearchTerm: (_term: string) => void;}

export interface SortFilterProps {_sortOption: string;
  setSortOption: (_option: string) => void;}
