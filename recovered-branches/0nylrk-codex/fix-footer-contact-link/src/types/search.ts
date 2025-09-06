export interface SearchSuggestion {
  text: string;
<<<<<<< HEAD

  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'

  iconUrl?: string
}
export interface SearchHighlight {
  before: string;

  match: string

  after: string
}
export interface FilterOptions {
  productTypes: {

    label: string
    value: string
  }[];
  locations: {
    label: string
    value: string
  }[];
  availabilityOptions: {
    label: string

    value: string
  }[];
  ratingOptions: number[]
=======
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}
export interface SearchHighlight {
  before: string;
  match: string,
  after: string;
}
export interface FilterOptions {
  product_types: {
    label: string,
    value: string;
  }[];
  locations: {
    label: string,
    value: string;
  }[];
  availability_options: {
    label: string,
    value: string;
  }[];
  rating_options: number[];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}