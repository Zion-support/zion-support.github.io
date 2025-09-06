
export interface SearchSuggestion {
  text: string;
<<<<<<< HEAD
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent';
=======
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  iconUrl?: string
}
export interface SearchHighlight {
  before: string;
<<<<<<< HEAD
  match: string;
=======
  match: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  after: string
}
export interface FilterOptions {
  productTypes: {
<<<<<<< HEAD
    label: string;
    value: string
  }[];
  locations: {
    label: string;
    value: string
  }[];
  availabilityOptions: {
    label: string;
=======
    label: string
    value: string
  }[];
  locations: {
    label: string
    value: string
  }[];
  availabilityOptions: {
    label: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    value: string
  }[];
  ratingOptions: number[]
}