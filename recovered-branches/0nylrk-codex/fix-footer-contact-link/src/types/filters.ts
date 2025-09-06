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

  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (availability: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void,
  price_range: [number, number];
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  setExperienceRange: (range: [number, number]) => void;
  expanded_sections: {
    skills: boolean;
    availability: boolean;
    region: boolean;
<<<<<<< HEAD
=======
    experience: boolean;
    price: boolean;
  };
  toggleSection: (sectionName: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  clearFilters: () => void;
  isMobileFilterOpen?: boolean;
}

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface SkillsFilterProps extends FilterComponentProps {

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
  experience_range: [number, number];
=======
  experienceRange: [number, number];
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  setExperienceRange: (range: [number, number]) => void;
}
export interface PriceFilterProps extends FilterComponentProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
<<<<<<< HEAD
=======
}

<<<<<<< HEAD

export interface FilterSidebarProps {;

}
export interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

export interface SortFilterProps {
  sortOption: string;
  setSortOption: (option: string) => void;
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  searchTerm: string

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
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
