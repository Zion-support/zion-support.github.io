
<<<<<<< HEAD
export interface SearchSuggestion {
  text: string,
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  iconUrl?: string
}

export interface SearchHighlight {
  before: string,
  match: string,
  after: string
}

export interface FilterOptions {
  productTypes: {
    label: string,
    value: string
  }[],
  locations: {
    label: string,
    value: string
  }[],
  availabilityOptions: {
    label: string,
    value: string
  }[],
  ratingOptions: number[]
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
