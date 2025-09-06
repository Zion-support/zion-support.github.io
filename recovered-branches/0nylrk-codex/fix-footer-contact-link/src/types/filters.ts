export interface FilterSidebarProps {
  search_term: string;
  setSearchTerm: (term: string) => void;
  setExperienceRange: (range: [number, number]) => void;
  expanded_sections: {
    skills: boolean;
    availability: boolean;
    region: boolean;
}
export interface ExperienceFilterProps extends FilterComponentProps {
  experience_range: [number, number];
  setExperienceRange: (range: [number, number]) => void;
}
export interface PriceFilterProps extends FilterComponentProps {
  price_range: [number, number];
  setPriceRange: (range: [number, number]) => void;
}
export interface SearchFilterProps {
}