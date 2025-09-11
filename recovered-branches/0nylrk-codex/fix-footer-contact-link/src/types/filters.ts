
  toggleRegion: (region: string) => void
  priceRange: [number, number];

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
export interface FilterComponentProps {
  expanded: boolean;
  toggle_section: () => void,
  isMobileFilterOpen?: boolean;
}
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void;
  expandedSections: {
=======
=======  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (availability: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void,
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];

  setExperienceRange: (range: [number, number]) => void;
  expanded_sections: {
  isMobileFilterOpen?: boolean
}
export interface FilterComponentProps {

export interface FilterComponentProps {;
  expanded: boolean;

  toggleSection: () => void

  isMobileFilterOpen?: boolean
}
export interface SkillsFilterProps extends FilterComponentProps {

  selectedSkills: string[]

  toggleSkill: (skill: string) => void
}
export interface AvailabilityFilterProps extends FilterComponentProps {

  selectedAvailability: string[]

  toggleAvailability: (availability: string) => void
}
export interface RegionFilterProps extends FilterComponentProps {

  selectedRegions: string[]

  toggleRegion: (region: string) => void
}
export interface ExperienceFilterProps extends FilterComponentProps {
  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void
}
export interface PriceFilterProps extends FilterComponentProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void
export interface FilterSidebarProps {;

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
=======
=======    experience: boolean,
    price: boolean;
  }
  toggle_section: (section_name: string) => void;
  sort_option: string;
  setSortOption: (option: string) => void;
  clear_filters: () => void,
  isMobileFilterOpen?: boolean;
}
export interface FilterComponentProps {
  expanded: boolean;
  toggle_section: () => void,
  isMobileFilterOpen?: boolean;
}}
export interface ExperienceFilterProps extends FilterComponentProps {
  experience_range: [number, number];
  setExperienceRange: (range: [number, number]) => void;
}
export interface PriceFilterProps extends FilterComponentProps {
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
export interface FilterSidebarProps {;

}
export interface SearchFilterProps {
=======}
export interface SearchFilterProps {
  search_term: string,
  setSearchTerm: (term: string) => void;
}
export interface SortFilterProps {
  sort_option: string,
  setSortOption: (option: string) => void;

  setSearchTerm: (term: string) => void
}
export interface SortFilterProps {

  sortOption: string

  setSortOption: (option: string) => void
}
==============
}
=======
;
export interface SortFilterProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
}
;
export interface FilterSidebarProps {;
  searchTerm:string,;
  setSearchTerm:(term:string) => void,;
  selectedSkills:string[],;
  toggleSkill:(skill:string) => void,;
  selectedAvailability:string[],;
  toggleAvailability:(availability:string) => void,;
  selectedRegions:string[],;
  toggleRegion:(region:string) => void,;
  priceRange:[number, number],;
  setPriceRange:(range:[number, number]) => void,;
  experienceRange:[number, number],;
  setExperienceRange:(range:[number, number]) => void,;
  expandedSections:{;
    skills:boolean,;
    availability:boolean,;
    region:boolean,;
    experience:boolean,;
    price:boolean;
  },;
  toggleSection:(sectionName:string) => void,;
  sortOption:string,;
  setSortOption:(option:string) => void,;
  clearFilters:() => void,;
  isMobileFilterOpen?:boolean;
}
;
export interface FilterComponentProps {;
  expanded:boolean,;
  toggleSection:() => void,;
  isMobileFilterOpen?:boolean;
}
;
export interface SkillsFilterProps extends FilterComponentProps {;
  selectedSkills:string[],;
  toggleSkill:(skill:string) => void;
}
;
export interface AvailabilityFilterProps extends FilterComponentProps {;
  selectedAvailability:string[],;
  toggleAvailability:(availability:string) => void;
}
;
export interface RegionFilterProps extends FilterComponentProps {;
  selectedRegions:string[],;
  toggleRegion:(region:string) => void;
}
;
export interface ExperienceFilterProps extends FilterComponentProps {;
  experienceRange:[number, number],;
  setExperienceRange:(range:[number, number]) => void,;
}
;
export interface PriceFilterProps extends FilterComponentProps {;
  priceRange:[number, number],;
  setPriceRange:(range:[number, number]) => void,;}
;
export interface SearchFilterProps {;
  searchTerm:string,;
  setSearchTerm:(term:string) => void;
}
;
export interface SortFilterProps {;
  sortOption:string,;
  setSortOption:(option:string) => void;
} 
;
;
=======
;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
