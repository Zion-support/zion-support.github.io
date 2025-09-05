
export interface SearchSuggestion {_text: string;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent';
  iconUrl?: string;}

export interface SearchHighlight {_before: string;
  match: string;
  after: string;}

export interface FilterOptions {_productTypes: {
    label: string;
    value: string;}[];
  locations: {_label: string;
    value: string;}[];
  availabilityOptions: {_label: string;
    value: string;}[];
  ratingOptions: number[];
}
