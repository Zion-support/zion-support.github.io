
<<<<<<< HEAD


  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
  selectedRegions: string[];

  toggleRegion: (region: string) => void
  priceRange: [number, number];


=======
  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (availability: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void,
  price_range: [number, number];
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface FilterComponentProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  expanded: boolean;
  toggle_section: () => void,
  isMobileFilterOpen?: boolean;
}
<<<<<<< HEAD



=======
export interface SkillsFilterProps extends FilterComponentProps {
  selected_skills: string[],
  toggle_skill: (skill: string) => void;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD

  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void
}
export interface PriceFilterProps extends FilterComponentProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void
export interface FilterSidebarProps {;

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
  experience_range: [number, number];
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  setExperienceRange: (range: [number, number]) => void;
}
export interface PriceFilterProps extends FilterComponentProps {
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======


export interface FilterSidebarProps {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

;
export interface SortFilterProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
}
;

<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
