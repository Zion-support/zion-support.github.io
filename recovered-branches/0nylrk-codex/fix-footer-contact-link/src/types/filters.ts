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
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
  setExperienceRange: (range: [number, number]) => void;

}

  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

<<<<<<< HEAD

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

  setExperienceRange: (range: [number, number]) => void;
=======
export interface SearchFilterProps {

  searchTerm: string

  setSearchTerm: (term: string) => void
}
export interface SortFilterProps {

setExperienceRange: (range: [number, number]) => void;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
;
export interface PriceFilterProps extends FilterComponentProps {;
  priceRange: [number, number],;
  setPriceRange: (range: [number, number]) => void;
<<<<<<< HEAD
=======
}
export interface SearchFilterProps {
  searchTerm: string
}  searchTerm: string
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
}
  // TODO: Implement
}
  searchTerm: string;,
  setSearchTerm: (term: string) => void;,
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;,
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;,
  selectedRegions: string[];
  toggleRegion: (region: string) => void;,
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];

  setExperienceRange: (range: [number, number]) => void;
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

    experience: boolean,
  toggle_section: (section_name: string) => void;,
  sort_option: string;
  clear_filters: () => void,
export interface FilterComponentProps {
  // TODO: Implement
  expanded: boolean;,
  toggleSection: () => void;
export interface SkillsFilterProps extends FilterComponentProps {
  // TODO: Implement
  selectedSkills: string[],
  toggleSkill: (skill: string) => void;
  // TODO: Implement
  selectedSkills: string[];,
export interface AvailabilityFilterProps extends FilterComponentProps {
  // TODO: Implement
  selectedAvailability: string[];,
  toggleAvailability: (availability: string) => void;
export interface RegionFilterProps extends FilterComponentProps {
  // TODO: Implement
  selectedRegions: string[];,
  toggleRegion: (region: string) => void;

export interface ExperienceFilterProps extends FilterComponentProps {
  // TODO: Implement
  experienceRange: [number, number];
export interface PriceFilterProps extends FilterComponentProps {
  // TODO: Implement

export interface FilterSidebarProps {;

export interface SearchFilterProps {
  // TODO: Implement
  setSearchTerm: (term: string) => void;

export interface SortFilterProps {
  // TODO: Implement
  sortOption: string;,
  setSortOption: (option: string) => void;
  // TODO: Implement
  sort_option: string,

  searchTerm: string;
  // TODO: Implement
  search_term: string,
  // TODO: Implement
  // TODO: Implement
}

}
;
export interface SortFilterProps {;
  // TODO: Implement

>>>>>>> origin/cursor/delete-old-data-records-6bba
export interface FilterComponentProps {;
  expanded:boolean,;
  toggleSection:() => void,;
  isMobileFilterOpen?:boolean;
<<<<<<< HEAD

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
=======

export interface SkillsFilterProps extends FilterComponentProps {;
  selectedSkills:string[],;
  toggleSkill:(skill:string) => void;
export interface AvailabilityFilterProps extends FilterComponentProps {;
  selectedAvailability:string[],;
  toggleAvailability:(availability:string) => void;
export interface RegionFilterProps extends FilterComponentProps {;
  selectedRegions:string[],;
  toggleRegion:(region:string) => void;
export interface ExperienceFilterProps extends FilterComponentProps {;
  experienceRange:[number, number],;
  setExperienceRange:(range:[number, number]) => void,;
export interface PriceFilterProps extends FilterComponentProps {;
  priceRange:[number, number],;
  setPriceRange:(range:[number, number]) => void,;}
export interface SearchFilterProps {;
  searchTerm:string,;
  setSearchTerm:(term:string) => void;
  sortOption:string,;
  setSortOption:(option:string) => void;

pr-12325
  expanded: boolean,;
  toggleSection: () => void,;}
  isMobileFilterOpen?: boolean;}
}
;
export interface SkillsFilterProps extends FilterComponentProps {;
  selectedSkills: string[],;}
  toggleSkill: (skill: string) => void;}
}
;
export interface AvailabilityFilterProps extends FilterComponentProps {;
  selectedAvailability: string[],;}
  toggleAvailability: (availability: string) => void;}
}
;
export interface RegionFilterProps extends FilterComponentProps {;
  selectedRegions: string[],;}
  toggleRegion: (region: string) => void;}
}
;
export interface ExperienceFilterProps extends FilterComponentProps {;
  experienceRange: [number, number],;}
  experience_range: [number, number];  setExperienceRange: (range: [number, number]) => void;}
}
export interface PriceFilterProps extends FilterComponentProps {
  priceRange: [number, number];}
  setPriceRange: (range: [number, number]) => void;}
}
export interface FilterSidebarProps {;}
}
export interface SearchFilterProps {
  searchTerm: string;}
  setSearchTerm: (term: string) => void;}
}
export interface SortFilterProps {
  sortOption: string;}
  setSortOption: (option: string) => void;}
}
export interface SortFilterProps {
  sort_option: string,}
  setSortOption: (option: string) => void;}
}  searchTerm: string;
}
export interface SearchFilterProps {
  search_term: string,}
  setSearchTerm: (term: string) => void;}
}
export interface SortFilterProps {
  sortOption: string;}
setSortOption: (option: string) => void}
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
;
export interface SortFilterProps {;
  sortOption:string,;
  setSortOption:(option:string) => void;
} 
;

;
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
