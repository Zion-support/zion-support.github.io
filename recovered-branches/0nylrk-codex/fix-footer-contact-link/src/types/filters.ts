
<<<<<<< HEAD
  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (availability: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void,
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];
=======
export interface FilterSidebarProps {
export interface FilterSidebarProps {;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
  selectedRegions: string[];

  toggleRegion: (region: string) => void
  priceRange: [number, number];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  setExperienceRange: (range: [number, number]) => void;
  expanded_sections: {
    skills: boolean;
    availability: boolean;
    region: boolean;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void;
  expandedSections: {
    skills: boolean;
    availability: boolean;
    region: boolean;

    experience: boolean
    price: boolean
  }
  toggleSection: (sectionName: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  clearFilters: () => void

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
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

<<<<<<< HEAD
=======
}
export interface SearchFilterProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  search_term: string,
  setSearchTerm: (term: string) => void;
}
export interface SortFilterProps {
  sort_option: string,
  setSortOption: (option: string) => void;

<<<<<<< HEAD
}
=======

=======
  setExperienceRange: (range: [number, number]) => void;
}
;
export interface PriceFilterProps extends FilterComponentProps {;
  priceRange: [number, number],;
  setPriceRange: (range: [number, number]) => void;
}
export interface SearchFilterProps {

  searchTerm: string

  setSearchTerm: (term: string) => void
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
;
}

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
;
<<<<<<< HEAD

=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
