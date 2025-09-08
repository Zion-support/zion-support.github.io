export interface FilterSidebarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
  selectedRegions: string[];
  toggleRegion: (region: string) => void;
  priceRange: [number, number];

  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (availability: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void,
  price_range: [number, number];
  setExperienceRange: (range: [number, number]) => void;
  expanded_sections: {}
    skills: boolean;
    availability: boolean;
    region: boolean;
    experience: boolean;
    price: boolean
};
  toggleSection: (sectionName: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;

  expanded_sections: {,
  skills: boolean;
    availability: boolean;,
  region: boolean;
    experience: boolean;,
  price: boolean;
  };
  toggleSection: (sectionName: string) => void;,

  sortOption: string;
  setSortOption: (option: string) => void;,
  clearFilters: () => void;
  isMobileFilterOpen?: boolean;
}
    experience: boolean,
    price: boolean;
  }
  toggle_section: (section_name: string) => void;
  sort_option: string;
  setSortOption: (option: string) => void;
  toggle_section: (section_name: string) => void;,
  sort_option: string;
  setSortOption: (option: string) => void;,
  clear_filters: () => void,
  isMobileFilterOpen?: boolean;
}

  expanded: boolean;

}


  selectedSkills: string[];

  toggleSkill: (skill: string) => void;
}
export interface AvailabilityFilterProps extends FilterComponentProps {};
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
}
export interface RegionFilterProps extends FilterComponentProps {};
  selectedRegions: string[];

  // TODO: Implement
}
export interface ExperienceFilterProps extends FilterComponentProps {

export interface SkillsFilterProps extends FilterComponentProps {
  selected_skills: string[],
  toggle_skill: (skill: string) => void;
}
export interface AvailabilityFilterProps extends FilterComponentProps {
  selected_availability: string[],
  toggle_availability: (availability: string) => void;
}
export interface RegionFilterProps extends FilterComponentProps {
  selected_regions: string[],
  toggle_region: (region: string) => void;
}

<<<<<<< HEAD
export interface ExperienceFilterProps extends FilterComponentProps {
  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void
}

export interface PriceFilterProps extends FilterComponentProps {;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void
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
  experience_range: [number, number];  setExperienceRange: (range: [number, number]) => void;
}

  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

export interface FilterSidebarProps {;

}
export interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export interface SortFilterProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}
<<<<<<< HEAD

export interface SortFilterProps {
  sort_option: string,
  setSortOption: (option: string) => void;

}  searchTerm: string

}
export interface SearchFilterProps {


}

<<<<<<< HEAD
=======
  sortOption: string

  setSortOption: (option: string) => void
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
;
export interface SortFilterProps {;
  sortOption: string;
  // TODO: Implement
}
  sortOption: string;,
  setSortOption: (option: string) => void;
}
;
export interface SortFilterProps {;
  sortOption: string;,
  setSortOption: (option: string) => void;
}
export interface SearchFilterProps {
}