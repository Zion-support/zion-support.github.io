export interface FilterSidebarProps {
<<<<<<< HEAD
export interface FilterSidebarProps {;

  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
  selectedRegions: string[];

  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (availability: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void,
  price_range: [number, number];

  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];

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
<<<<<<< HEAD
  searchTerm: string,
  setSearchTerm: (term: string) => void,
  selectedSkills: string[],
  toggleSkill: (skill: string) => void,
  selectedAvailability: string[],
  toggleAvailability: (availability: string) => void,
  selectedRegions: string[],
  toggleRegion: (region: string) => void,
  priceRange: [number, number],
  setPriceRange: (range: [number, number]) => void,
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void,
  expandedSections: {
    skills: boolean,
    availability: boolean,
    region: boolean,
    experience: boolean,
    price: boolean},
  toggleSection: (sectionName: string) => void,
  sortOption: string,
  setSortOption: (option: string) => void,
  clearFilters: () => void,
  isMobileFilterOpen?: boolean
}

  isMobileFilterOpen?: boolean
}
export interface FilterComponentProps {
  expanded: boolean,
  toggleSection: () => void,
  isMobileFilterOpen?: boolean
}
=======
export interface FilterSidebarProps {;

  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
  selectedRegions: string[];

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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
}

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

export interface SkillsFilterProps extends FilterComponentProps {}
  selectedSkills: string[]

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
<<<<<<< HEAD
=======
  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void;
  expandedSections: {
=======
  selected_skills: string[];
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    skills: boolean;
    availability: boolean;
    region: boolean;

<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621

  toggleSection: () => void

  isMobileFilterOpen?: boolean
}
export interface SkillsFilterProps extends FilterComponentProps {
<<<<<<< HEAD
  selectedSkills: string[],
  toggleSkill: (skill: string) => void
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
=======
>>>>>>> merged-prs-20250907-203621

export interface SkillsFilterProps extends FilterComponentProps {

export interface SkillsFilterProps extends FilterComponentProps {}
  selectedSkills: string[]

<<<<<<< HEAD
=======
  toggleSkill: (skill: string) => void
}
export interface AvailabilityFilterProps extends FilterComponentProps {
<<<<<<< HEAD
  selectedAvailability: string[],
  toggleAvailability: (availability: string) => void
}
=======
>>>>>>> merged-prs-20250907-203621

  selectedAvailability: string[]

  toggleAvailability: (availability: string) => void
}
export interface RegionFilterProps extends FilterComponentProps {
<<<<<<< HEAD
  selectedRegions: string[],
  toggleRegion: (region: string) => void
}

  selectedRegions: string[]

  toggleRegion: (region: string) => void
}
export interface ExperienceFilterProps extends FilterComponentProps {
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void
}
export interface PriceFilterProps extends FilterComponentProps {
  priceRange: [number, number],
  setPriceRange: (range: [number, number]) => void
=======

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
export interface FilterComponentProps {;
  expanded: boolean,;
  toggleSection: () => void,;
  isMobileFilterOpen?: boolean;
}
;
export interface SkillsFilterProps extends FilterComponentProps {;
  selectedSkills: string[],;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
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

  experience_range: [number, number];

  experienceRange: [number, number];

  setExperienceRange: (range: [number, number]) => void;

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
=======
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
  experience_range: [number, number];  setExperienceRange: (range: [number, number]) => void;

  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void;

}

  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

=======
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
export interface ExperienceFilterProps extends FilterComponentProps {
  experience_range: [number, number];
  setExperienceRange: (range: [number, number]) => void;
}
export interface PriceFilterProps extends FilterComponentProps {
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  experience_range: [number, number];

  experienceRange: [number, number];

  setExperienceRange: (range: [number, number]) => void;

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

  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void;

}

  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export interface FilterSidebarProps {;

}
export interface SearchFilterProps {

<<<<<<< HEAD
  searchTerm: string;

=======
<<<<<<< HEAD
  searchTerm: string;

=======
}
export interface SearchFilterProps {
  search_term: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  setSearchTerm: (term: string) => void;
}

export interface SortFilterProps {
  sortOption: string;
  setSortOption: (option: string) => void;
<<<<<<< HEAD
=======
}

export interface SortFilterProps {
  sort_option: string,
  setSortOption: (option: string) => void;

  setExperienceRange: (range: [number, number]) => void;
}
;
export interface PriceFilterProps extends FilterComponentProps {;
  priceRange: [number, number],;
  setPriceRange: (range: [number, number]) => void;
>>>>>>> merged-prs-20250907-203621
}
export interface SearchFilterProps {

<<<<<<< HEAD
  searchTerm: string

  setSearchTerm: (term: string) => void
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
export interface SortFilterProps {
<<<<<<< HEAD
  sort_option: string,
  setSortOption: (option: string) => void;

}
=======

  sortOption: string

  setSortOption: (option: string) => void
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
setExperienceRange: (range: [number, number]) => void;
}
;
export interface PriceFilterProps extends FilterComponentProps {;
  priceRange: [number, number],;
  setPriceRange: (range: [number, number]) => void;
}
export interface SearchFilterProps {
  searchTerm: string
}  searchTerm: string

}
export interface SearchFilterProps {

  // TODO: Implement
}
  sortOption: string;,
  setSortOption: (option: string) => void;
}
export interface SortFilterProps {
  // TODO: Implement
}
  sort_option: string,
  setSortOption: (option: string) => void;

}
  searchTerm: string;
}
export interface SearchFilterProps {
  // TODO: Implement
}
  search_term: string,
  setSearchTerm: (term: string) => void;
}
export interface SortFilterProps {

  sortOption: string

  setSortOption: (option: string) => void
}

<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}

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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
;
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export interface FilterComponentProps {;
  expanded:boolean,;
  toggleSection:() => void,;
  isMobileFilterOpen?:boolean;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
;
export interface SortFilterProps {;
  sortOption:string,;
  setSortOption:(option:string) => void;
} 
;
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
