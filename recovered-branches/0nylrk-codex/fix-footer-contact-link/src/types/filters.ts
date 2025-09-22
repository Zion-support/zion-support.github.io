<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface FilterSidebarProps {
export interface FilterSidebarProps {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface FilterSidebarProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export interface FilterSidebarProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
  selectedRegions: string[];
<<<<<<< HEAD
  toggleRegion: (region: string) => void;
  priceRange: [number, number];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (availability: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void,
  price_range: [number, number];
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  selected_skills: string[];
  toggle_skill: (skill: string) => void;
  selected_availability: string[];
  toggle_availability: (availability: string) => void;
  selected_regions: string[];
  toggle_region: (region: string) => void,
  price_range: [number, number];
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  setPriceRange: (range: [number, number]) => void;
  experience_range: [number, number];
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface FilterComponentProps {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface FilterComponentProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
=======
export interface SkillsFilterProps extends FilterComponentProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export interface SkillsFilterProps extends FilterComponentProps {}
  selectedSkills: string[]
<<<<<<< HEAD

  toggleSkill: (skill: string) => void
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface SkillsFilterProps extends FilterComponentProps {
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
=======
}
export interface ExperienceFilterProps extends FilterComponentProps {

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
;
  toggleSkill: (skill: string) => void;
export interface SkillsFilterProps extends FilterComponentProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  selectedSkills: string[];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD
;
export interface ExperienceFilterProps extends FilterComponentProps {;
  experienceRange: [number, number],;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

}
<<<<<<< HEAD
export interface ExperienceFilterProps extends FilterComponentProps {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  experience_range: [number, number];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
export interface ExperienceFilterProps extends FilterComponentProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  experienceRange: [number, number];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  setExperienceRange: (range: [number, number]) => void;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  expanded: boolean;,
  toggleSection: () => void;
  isMobileFilterOpen?: boolean;
}
export interface SkillsFilterProps extends FilterComponentProps {
  // TODO: Implement
}
  selectedSkills: string[],
  toggleSkill: (skill: string) => void;
export interface SkillsFilterProps extends FilterComponentProps {
  // TODO: Implement
}
  selectedSkills: string[];,

  toggleSkill: (skill: string) => void;
export interface SkillsFilterProps extends FilterComponentProps {
  selectedSkills: string[];}
  toggleSkill: (skill: string) => void;}
}
export interface AvailabilityFilterProps extends FilterComponentProps {

  // TODO: Implement
}
  selectedAvailability: string[];,
  toggleAvailability: (availability: string) => void;
}
export interface RegionFilterProps extends FilterComponentProps {
  // TODO: Implement
}
  selectedRegions: string[];,
  toggleRegion: (region: string) => void;

}
}
export interface ExperienceFilterProps extends FilterComponentProps {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
}
export interface PriceFilterProps extends FilterComponentProps {
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  experienceRange: [number, number];
  setExperienceRange: (range: [number, number]) => void;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
<<<<<<< HEAD
export interface PriceFilterProps extends FilterComponentProps {};
=======
export interface PriceFilterProps extends FilterComponentProps {
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface FilterSidebarProps {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export interface SearchFilterProps {
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  searchTerm: string;
<<<<<<< HEAD
}
export interface SearchFilterProps {}
  search_term: string,;
=======
  // TODO: Implement
}
  searchTerm: string;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  setSearchTerm: (term: string) => void;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export interface SortFilterProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export interface SortFilterProps {
  sort_option: string,
  setSortOption: (option: string) => void;

}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface SortFilterProps {};
  sortOption: string;
  setSortOption: (option: string) => void;
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
<<<<<<< HEAD
export interface SearchFilterProps {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface SearchFilterProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}

<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======





;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
export interface FilterComponentProps {;
  expanded:boolean,;
  toggleSection:() => void,;
  isMobileFilterOpen?:boolean;
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
}
;
export interface SortFilterProps {;
  sortOption:string,;
  setSortOption:(option:string) => void;
} 
;
;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
  sortOption: string;}
  setSortOption: (option: string) => void;}
}
;
}
export interface SearchFilterProps {}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
