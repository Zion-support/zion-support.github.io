<<<<<<< HEAD
export interface SearchSuggestion {
  text: string;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent';
  iconUrl?: string;
}

export interface SearchHighlight {
  before: string;
  match: string;
  after: string;
}

export interface FilterOptions {
  productTypes: {
    label: string;
    value: string;
  }[];
  locations: {
    label: string;
    value: string;
  }[];
  availabilityOptions: {
    label: string;
    value: string;
  }[];
  ratingOptions: number[];
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
