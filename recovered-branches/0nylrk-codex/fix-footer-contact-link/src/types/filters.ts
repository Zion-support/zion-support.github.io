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
<<<<<<< HEAD
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];

=======

  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (availability: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void,
  price_range: [number, number];
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  setExperienceRange: (range: [number, number]) => void;
  expanded_sections: {
    skills: boolean;
    availability: boolean;
    region: boolean;
    experience: boolean;
<<<<<<< HEAD
    price: boolean;
  };
=======
    price: boolean
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  toggleSection: (sectionName: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  clearFilters: () => void;
  isMobileFilterOpen?: boolean;
}
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  toggleSection: () => void;
  isMobileFilterOpen?: boolean;
}
<<<<<<< HEAD
export interface SkillsFilterProps extends FilterComponentProps {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  selectedSkills: string[]

  toggleSkill: (skill: string) => void
export interface SkillsFilterProps extends FilterComponentProps {
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
}
export interface AvailabilityFilterProps extends FilterComponentProps {
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
}
export interface RegionFilterProps extends FilterComponentProps {
  selectedRegions: string[];
  toggleRegion: (region: string) => void;
}

}
export interface ExperienceFilterProps extends FilterComponentProps {
<<<<<<< HEAD
  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void;
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
export interface PriceFilterProps extends FilterComponentProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
export interface SortFilterProps {
  sort_option: string,
  setSortOption: (option: string) => void;

<<<<<<< HEAD
}
  searchTerm: string
=======
}  searchTerm: string
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

}
export interface SearchFilterProps {

  search_term: string,
  setSearchTerm: (term: string) => void;
}
export interface SortFilterProps {

  sortOption: string

  setSortOption: (option: string) => void
}
;
export interface SortFilterProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
}
;
}
export interface SearchFilterProps {
<<<<<<< HEAD
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
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
