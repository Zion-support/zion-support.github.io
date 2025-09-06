
<<<<<<< HEAD
<<<<<<< HEAD
export interface FilterSidebarProps {
=======
export interface FilterSidebarProps {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
  selectedRegions: string[];

  toggleRegion: (region: string) => void
  priceRange: [number, number];

  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];

  setExperienceRange: (range: [number, number]) => void;
  expanded_sections: {
    skills: boolean;
    availability: boolean;
    region: boolean;

    experience: boolean,
    price: boolean;
  }
  toggle_section: (section_name: string) => void;
  sort_option: string;
  setSortOption: (option: string) => void;
  clear_filters: () => void,
  isMobileFilterOpen?: boolean;
}
<<<<<<< HEAD
export interface FilterComponentProps {
=======

export interface FilterComponentProps {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  expanded: boolean;
  toggle_section: () => void,
  isMobileFilterOpen?: boolean;
}
<<<<<<< HEAD
export interface SkillsFilterProps extends FilterComponentProps {

  selectedSkills: string[]

  toggleSkill: (skill: string) => void
}
export interface AvailabilityFilterProps extends FilterComponentProps {
  selected_availability: string[],
  toggle_availability: (availability: string) => void;
}
export interface RegionFilterProps extends FilterComponentProps {
  selected_regions: string[],
  toggle_region: (region: string) => void;

}
export interface ExperienceFilterProps extends FilterComponentProps {
  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void
}
export interface PriceFilterProps extends FilterComponentProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void
=======
export interface FilterSidebarProps {;
=======

export interface SkillsFilterProps extends FilterComponentProps {
  selectedSkills: string[],
  toggleSkill: (skill: string) => void
}

export interface AvailabilityFilterProps extends FilterComponentProps {
  selectedAvailability: string[],
  toggleAvailability: (availability: string) => void
}

export interface RegionFilterProps extends FilterComponentProps {
  selectedRegions: string[],
  toggleRegion: (region: string) => void
}

export interface ExperienceFilterProps extends FilterComponentProps {;
  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void
}

export interface PriceFilterProps extends FilterComponentProps {;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  searchTerm: string,;
  setSearchTerm: (term: string) => void,;
  selectedSkills: string[],;
  toggleSkill: (skill: string) => void,;
  selectedAvailability: string[],;
  toggleAvailability: (availability: string) => void,;
  selectedRegions: string[],;
  toggleRegion: (region: string) => void,;
  priceRange: [number, number],;
  setPriceRange: (range: [number, number]) => void,;
  experienceRange: [number, number],;
  setExperienceRange: (range: [number, number]) => void,;
  expandedSections: {;
    skills: boolean,;
    availability: boolean,;
    region: boolean,;
    experience: boolean,;
    price: boolean;
  },;
  toggleSection: (sectionName: string) => void,;
  sortOption: string,;
  setSortOption: (option: string) => void,;
  clearFilters: () => void,;
  isMobileFilterOpen?: boolean;
}
;
export interface FilterComponentProps {;
  expanded: boolean,;
  toggleSection: () => void,;
  isMobileFilterOpen?: boolean;
}
;
export interface SkillsFilterProps extends FilterComponentProps {;
  selectedSkills: string[],;
  toggleSkill: (skill: string) => void;
}
;
export interface AvailabilityFilterProps extends FilterComponentProps {;
  selectedAvailability: string[],;
  toggleAvailability: (availability: string) => void;
}
;
export interface RegionFilterProps extends FilterComponentProps {;
  selectedRegions: string[],;
  toggleRegion: (region: string) => void;
}
;
export interface ExperienceFilterProps extends FilterComponentProps {;
  experienceRange: [number, number],;
  setExperienceRange: (range: [number, number]) => void;
}
export interface PriceFilterProps extends FilterComponentProps {
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export interface SearchFilterProps {

  search_term: string,
  setSearchTerm: (term: string) => void;
}
export interface SortFilterProps {
  sort_option: string,
  setSortOption: (option: string) => void;

}
<<<<<<< HEAD
=======

;
export interface SortFilterProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
