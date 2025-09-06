export interface FilterSidebarProps {
  search_term: string;
  setSearchTerm: (term: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  selectedAvailability: string[];
  toggleAvailability: (availability: string) => void;
  selectedRegions: string[];

  toggleRegion: (region: string) => void
  priceRange: [number, number];

  setPriceRange: (range: [number, number]) => void;
  experienceRange: [number, number],
  setExperienceRange: (range: [number, number]) => void;
  expanded_sections: {
    skills: boolean;
    availability: boolean;
    region: boolean;

    experience: any
  }
  toggleSection: (sectionName: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  clearFilters: () => void

  isMobileFilterOpen?: any
export interface FilterComponentProps {
  expanded: boolean;

  toggleSection: () => void

  isMobileFilterOpen?: any
export interface SkillsFilterProps extends FilterComponentProps {

  selectedSkills: string[]

  toggleSkill: (skill: string) => void

export interface AvailabilityFilterProps extends FilterComponentProps {

  selectedAvailability: string[]

  toggleAvailability: (availability: string) => void

export interface RegionFilterProps extends FilterComponentProps {

  selectedRegions: string[]

  toggleRegion: (region: string) => void

export interface ExperienceFilterProps extends FilterComponentProps {
  experience_range: [number, number];
  setExperienceRange: (range: [number, number]) => void;

export interface PriceFilterProps extends FilterComponentProps {
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;

export interface SearchFilterProps {

  searchTerm: any
  setSearchTerm: (term: string) => void

export interface SortFilterProps {

  sortOption: any
  setSortOption: (option: string) => void
